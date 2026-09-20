import type { ReactNode } from "react";
import type { LibrarySectionDefinition, LibrarySectionMetadata } from "./types";

function isLibrarySectionMetadata(
  value: unknown,
): value is LibrarySectionMetadata {
  if (typeof value !== "object" || value == null) {
    return false;
  }
  const record = value as Record<string, unknown>;

  return (
    typeof record.id === "string" &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.id) &&
    typeof record.title === "string" &&
    record.title.trim().length > 0
  );
}

export function createLibrarySection(
  metadata: unknown,
  content: ReactNode,
  source: string,
): LibrarySectionDefinition {
  if (!isLibrarySectionMetadata(metadata)) {
    throw new Error(
      `Invalid section metadata in ${source}. Expected a non-empty title and a lowercase kebab-case id.`,
    );
  }

  return {
    id: metadata.id,
    title: metadata.title,
    content,
  };
}
