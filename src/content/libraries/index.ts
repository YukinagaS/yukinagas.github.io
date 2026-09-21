import { generatedLibraries } from "./generated";


export const libraries = generatedLibraries;

export function getLibrary(slug: string) {
  return libraries.find(
    (library) => library.slug === slug,
  );
}
