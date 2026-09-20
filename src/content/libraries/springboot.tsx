import { type LibraryDefinition } from "./types";

export const springBootLibrary: LibraryDefinition = {
  slug: "springboot",
  title: "Spring Boot",
  summary: "Notes on building Java backends with Spring Boot framework.",
  sections: [
    {
      id: "overview",
      title: "Overview",
      content: (
        <p>Introductory notes go here.</p>
      ),
    },
    {
      id: "project-notes",
      title: "Project Notes",
      content: (
        <p>Project specific observations go here.</p>
      ),
    },
  ]
}
