import {
  access,
  readFile,
  readdir,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LIBRARY_SLUG_PATTERN =
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const ENTRY_FILENAME_PATTERN =
  /^\d{8}-[a-z0-9]+(?:-[a-z0-9]+)*\.mdx$/;

const scriptDirectory = path.dirname(
  fileURLToPath(import.meta.url),
);

const projectRoot = path.resolve(scriptDirectory, "..");

const librariesDirectory = path.join(
  projectRoot,
  "src",
  "content",
  "libraries",
);

const outputPath = path.join(
  librariesDirectory,
  "generated.tsx",
);

async function requirePath(
  targetPath,
  description,
) {
  try {
    await access(targetPath);
  } catch {
    throw new Error(
      `Missing ${description}: ${targetPath}`,
    );
  }
}

async function readDirectory(
  directoryPath,
  description,
) {
  try {
    return await readdir(directoryPath, {
      withFileTypes: true,
    });
  } catch {
    throw new Error(
      `Unable to read ${description}: ${directoryPath}`,
    );
  }
}

const libraryDirectories = (
  await readDirectory(
    librariesDirectory,
    "Libraries directory",
  )
)
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b));

if (libraryDirectories.length === 0) {
  throw new Error("No Library directories were found.");
}

const importLines = [
  `import { createLibrary } from "./createLibrary";`,
  `import { createLibraryEntry } from "./createLibraryEntry";`,
  `import type { LibraryDefinition } from "./types";`,
];

const libraryBlocks = [];

for (
  const [libraryIndex, slug]
  of libraryDirectories.entries()
) {
  if (!LIBRARY_SLUG_PATTERN.test(slug)) {
    throw new Error(
      `Invalid Library directory name "${slug}". ` +
        "Expected lowercase kebab-case.",
    );
  }

  const libraryDirectory = path.join(
    librariesDirectory,
    slug,
  );

  const configPath = path.join(
    libraryDirectory,
    "library.json",
  );

  const entriesDirectory = path.join(
    libraryDirectory,
    "entries",
  );

  await requirePath(
    configPath,
    `${slug}/library.json`,
  );

  const entryDirectoryItems = await readDirectory(
    entriesDirectory,
    `${slug}/entries directory`,
  );

  const entryFilenames = entryDirectoryItems
    .filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith(".mdx"),
    )
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  for (const filename of entryFilenames) {
    if (!ENTRY_FILENAME_PATTERN.test(filename)) {
      throw new Error(
        `Invalid entry filename ` +
          `"${slug}/entries/${filename}".`,
      );
    }
  }

  const configIdentifier =
    `libraryConfig${libraryIndex}`;

  importLines.push("");
  importLines.push(
    `import ${configIdentifier} from ` +
      `${JSON.stringify(`./${slug}/library.json`)};`,
  );

  const entryBlocks = [];

  for (
    const [entryIndex, filename]
    of entryFilenames.entries()
  ) {
    const componentIdentifier =
      `Entry${libraryIndex}_${entryIndex}`;

    const metadataIdentifier =
      `entryMetadata${libraryIndex}_${entryIndex}`;

    const importPath =
      `./${slug}/entries/${filename}`;

    importLines.push(
      `import ${componentIdentifier}, ` +
        `{ metadata as ${metadataIdentifier} } ` +
        `from ${JSON.stringify(importPath)};`,
    );

    entryBlocks.push(
      [
        "      createLibraryEntry(",
        `        ${JSON.stringify(filename)},`,
        `        ${metadataIdentifier},`,
        `        <${componentIdentifier} />,`,
        "      ),",
      ].join("\n"),
    );
  }

  const entriesOutput =
    entryBlocks.length === 0
      ? ""
      : `\n${entryBlocks.join("\n")}\n    `;

  libraryBlocks.push(
    [
      "  createLibrary(",
      `    ${JSON.stringify(slug)},`,
      `    ${configIdentifier},`,
      `    [${entriesOutput}],`,
      "  ),",
    ].join("\n"),
  );
}

const generatedOutput = [
  "/*",
  " * This file is generated.",
  " * Do not edit it manually.",
  " * Run the content generator (scripts/generate-library-manifest.mjs) instead.",
  " */",
  "",
  importLines.join("\n"),
  "",
  "export const generatedLibraries = [",
  libraryBlocks.join("\n"),
  "] satisfies LibraryDefinition[];",
  "",
].join("\n");

let existingOutput = null;

try {
  existingOutput = await readFile(
    outputPath,
    "utf8",
  );
} catch (error) {
  const isMissingFile =
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "ENOENT";

  if (!isMissingFile) {
    throw error;
  }
}

if (existingOutput === generatedOutput) {
  console.log("Library manifest is already current.");
} else {
  await writeFile(
    outputPath,
    generatedOutput,
    "utf8",
  );

  console.log(
    `Generated ${path.relative(projectRoot, outputPath)}.`,
  );
}
