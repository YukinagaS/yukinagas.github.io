import type { ReactNode } from "react";

export type LibrarySectionDefinition = {
  id: string;
  title: string;
  content: ReactNode;
};

export type LibraryDefinition = {
  slug: string;
  title: string;
  summary: string;
  sections: LibrarySectionDefinition[];
};

export type LibrarySectionMetadata = {
  id: string;
  title: string;
};
