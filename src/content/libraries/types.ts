import type { ReactNode } from "react";

export const libraryThemes = [
  "green",
  "pink",
  "purple",
  "blue",
  "dark",
] as const;

export type LibraryTheme = (typeof libraryThemes)[number];

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

export type LibraryDefinition = {
  slug: string;
  theme: LibraryTheme;
  title: string;
  summary: string;
  entries: LibraryEntryDefinition[];
};
