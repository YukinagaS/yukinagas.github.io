import { createLibrarySection } from "./createLibrarySection";
import Overview, { metadata as overviewMetadata, } from "./springboot/overview.mdx";
import { type LibraryDefinition } from "./types";

export const springBootLibrary: LibraryDefinition = {
  slug: "springboot",
  title: "Spring Boot",
  summary: "Notes on building Java backends with Spring Boot framework.",
  sections: [
    createLibrarySection(
      overviewMetadata,
      <Overview />,
      "springboot/overview.mdx",
    ),
    {
      id: "project-notes",
      title: "Project Notes",
      content: (
        <p>Project specific observations go here.</p>
      ),
    },
  ]
}
