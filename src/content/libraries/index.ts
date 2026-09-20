import { springBootLibrary } from "./springboot";
import type { LibraryDefinition } from "./types";

export const libraries: LibraryDefinition[] = [
  springBootLibrary,
];

export function getLibrary(slug: string) {
  return libraries.find(
    (library) => library.slug === slug,
  );
}
