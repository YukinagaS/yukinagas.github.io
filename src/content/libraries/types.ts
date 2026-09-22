import type { ReactNode } from "react";

export type LibraryEntryMetadata = {
  title: string;
  subtitle: string;
  tags: string[];
}

export type LibraryEntryDefinition = LibraryEntryMetadata & {
  id: string;
  date: string;
  content: ReactNode;
};

export type LibraryConfig = {
  theme: string;
  title: string;
  summary: string;
}

export type LibraryDefinition = LibraryConfig & {
  slug: string;
  entries: LibraryEntryDefinition[];
};
