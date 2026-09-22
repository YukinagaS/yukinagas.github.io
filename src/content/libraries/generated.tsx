/*
 * This file is generated.
 * Do not edit it manually.
 * Run the content generator (scripts/generate-library-manifest.mjs) instead.
 */

import { createLibrary } from "./createLibrary";
import { createLibraryEntry } from "./createLibraryEntry";
import type { LibraryDefinition } from "./types";

import libraryConfig0 from "./love2d/library.json";
import Entry0_0, { metadata as entryMetadata0_0 } from "./love2d/entries/20301231-coming-soon.mdx";

import libraryConfig1 from "./springboot/library.json";
import Entry1_0, { metadata as entryMetadata1_0 } from "./springboot/entries/20260922-initializing-springboot.mdx";

export const generatedLibraries = [
  createLibrary(
    "love2d",
    libraryConfig0,
    [
      createLibraryEntry(
        "20301231-coming-soon.mdx",
        entryMetadata0_0,
        <Entry0_0 />,
      ),
    ],
  ),
  createLibrary(
    "springboot",
    libraryConfig1,
    [
      createLibraryEntry(
        "20260922-initializing-springboot.mdx",
        entryMetadata1_0,
        <Entry1_0 />,
      ),
    ],
  ),
] satisfies LibraryDefinition[];
