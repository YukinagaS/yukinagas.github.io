import type { LibraryDefinition } from "@/content/libraries/types";

import LibraryEntry from "./LibraryEntry";
import LibraryToc from "./LibraryToc";

export default function LibraryShell({
  theme,
  title,
  summary,
  entries
}: LibraryDefinition) {
  return (
    <main
      data-theme={theme}
      className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 md:grid-cols-[16rem_minmax(0,1fr)] md:grid-rows-[auto_1fr]"
    >
      <header className="bg-library-bg-lt px-4 pt-2 border-b border-neutral-dk pb-6 md:col-start-2 md:row-start-1">
        <h1 className="text-library-accent-dk text-4xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="text-library-txt-sub mt-2 max-w-2xl text-base leading-7">
          {summary}
        </p>
      </header>

      <div className="py-3 pl-5 bg-library-accent-dk md:col-start-1 md:row-start-1 md:row-span-2">
        <LibraryToc entries={entries}/>
      </div>

      <article
        className="bg-library-bg-lt py-4 px-8 min-w-0 space-y-12 md:col-start-2 md:row-start-2"
        aria-label={`${title} library content`}
      >
        {entries.map((entry) => (
          <LibraryEntry
            key={entry.id}
            {...entry}
          />
        ))}
      </article>
    </main>
  );
}
