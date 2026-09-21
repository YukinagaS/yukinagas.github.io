import type { ReactNode } from "react";
import type { LibraryEntryDefinition, LibraryEntryMetadata } from "./types";

const ENTRY_FILENAME_PATTERN =
  /^(\d{4})(\d{2})(\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)\.mdx$/;

  function parseEntryFilename(
    filename: string,
  ): Pick<LibraryEntryDefinition, "id" | "date"> {
    const match = ENTRY_FILENAME_PATTERN.exec(filename);

    if (!match) {
      throw new Error(`Invalid entry filename "${filename}". `);
    }

    const [, year, month, day, id] = match;
    const date = `${year}-${month}-${day}`;

    return { id, date };
  }

function isLibraryEntryMetadata(
  value: unknown,
): value is LibraryEntryMetadata {
  if (typeof value !== "object" || value == null) {
    return false;
  }

  const record = value as Record<string, unknown>;

  const hasValidTags =
    Array.isArray(record.tags) &&
    record.tags.length > 0 &&
    record.tags.every(
      (tag) =>
        typeof tag === "string" &&
      tag.length > 0 &&
      tag.trim() === tag,
    ) &&
    new Set(record.tags).size === record.tags.length;

  return (
    typeof record.title === "string" &&
    record.title.trim().length > 0 &&
    typeof record.subtitle === "string" &&
    record.subtitle.trim().length > 0 &&
    hasValidTags
  );
}

export function createLibraryEntry(
  filename: string,
  metadata: unknown,
  content: ReactNode,
): LibraryEntryDefinition {
  const { id, date } = parseEntryFilename(filename);

  if (!isLibraryEntryMetadata(metadata)) {
    throw new Error(
      `Invalid entry metadata in ${filename}.`,
    );
  }

  return {
    id,
    date,
    content,
    title: metadata.title,
    subtitle: metadata.subtitle,
    tags: [...metadata.tags],
  };
}
