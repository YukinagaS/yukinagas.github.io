import { createLibraryEntry } from "./createLibrarySection";
import AuthoringSpecimen, { metadata as authoringSpecimenMetadata, } from "./springboot/20260920-authoring-specimen.mdx";
import { type LibraryDefinition } from "./types";

export const springBootLibrary: LibraryDefinition = {
  slug: "springboot",
  theme: "green",
  title: "Spring Boot",
  summary: "Notes on building Java backends with Spring Boot framework.",
  entries: [
    createLibraryEntry(
      "20260920-authoring-specimen.mdx",
      authoringSpecimenMetadata,
      <AuthoringSpecimen />,
    ),
  ]
}
