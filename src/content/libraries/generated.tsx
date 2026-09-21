/*
 * This file is generated.
 * Do not edit it manually.
 * Run the content generator (scripts/generate-library-manifest.mjs) instead.
 */

import { createLibrary } from "./createLibrary";
import { createLibraryEntry } from "./createLibraryEntry";
import type { LibraryDefinition } from "./types";

import libraryConfig0 from "./love2d/library.json";
import Entry0_0, { metadata as entryMetadata0_0 } from "./love2d/entries/20301031-the-moving-room.mdx";
import Entry0_1, { metadata as entryMetadata0_1 } from "./love2d/entries/20301101-the-input-sandbox.mdx";
import Entry0_2, { metadata as entryMetadata0_2 } from "./love2d/entries/20301102-sprite-workshop.mdx";

import libraryConfig1 from "./springboot/library.json";
import Entry1_0, { metadata as entryMetadata1_0 } from "./springboot/entries/20260920-authoring-specimen.mdx";
import Entry1_1, { metadata as entryMetadata1_1 } from "./springboot/entries/20260991-testing-content-discovery.mdx";

export const generatedLibraries = [
  createLibrary(
    "love2d",
    libraryConfig0,
    [
      createLibraryEntry(
        "20301031-the-moving-room.mdx",
        entryMetadata0_0,
        <Entry0_0 />,
      ),
      createLibraryEntry(
        "20301101-the-input-sandbox.mdx",
        entryMetadata0_1,
        <Entry0_1 />,
      ),
      createLibraryEntry(
        "20301102-sprite-workshop.mdx",
        entryMetadata0_2,
        <Entry0_2 />,
      ),
    ],
  ),
  createLibrary(
    "springboot",
    libraryConfig1,
    [
      createLibraryEntry(
        "20260920-authoring-specimen.mdx",
        entryMetadata1_0,
        <Entry1_0 />,
      ),
      createLibraryEntry(
        "20260991-testing-content-discovery.mdx",
        entryMetadata1_1,
        <Entry1_1 />,
      ),
    ],
  ),
] satisfies LibraryDefinition[];
