import {
  libraryThemes,
  type LibraryConfig,
  type LibraryDefinition,
  type LibraryEntryDefinition,
  type LibraryTheme,
} from "./types";

const LIBRARY_SLUG_PATTERN =
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  function isLibraryTheme(
    value: unknown
  ): value is LibraryTheme {
    return (
      typeof value === "string" &&
      (libraryThemes as readonly string[]).includes(value)
    );
  }

  function isLibraryConfig(
    value: unknown
  ): value is LibraryConfig {
    if (typeof value !== "object" || value === null) {
      return false
    }

    const record = value as Record<string, unknown>

    return (
      typeof record.title === "string" &&
      record.title.trim().length > 0 &&
      typeof record.summary === "string" &&
      record.summary.trim().length > 0 &&
      isLibraryTheme(record.theme)
    );
  }

  export function createLibrary(
    slug: string,
    config: unknown,
    entries: LibraryEntryDefinition[]
  ): LibraryDefinition {
    if (!LIBRARY_SLUG_PATTERN.test(slug)) {
      throw new Error(`Invalid library slug: ${slug}`);
    }

    if (!isLibraryConfig(config)) {
      throw new Error(`Invalid library config in ${slug}/library.json`);
    }

    const entryIds = entries.map(entry => entry.id);
    const uniqueEntryIds = new Set(entryIds);
    if (uniqueEntryIds.size !== entryIds.length) {
      throw new Error(`Duplicate entry ids found in library: ${slug}`);
    }

    return {
      slug,
      theme: config.theme,
      title: config.title,
      summary: config.summary,
      entries: [...entries],
    };
  }
