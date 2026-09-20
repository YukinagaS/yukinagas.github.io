import type { LibraryDefinition } from "@/content/libraries/types";

import LibrarySection from "./LibrarySection";
import LibraryToc from "./LibraryToc";

export default function LibraryShell({
  title,
  summary,
  sections
}: LibraryDefinition) {
  return (
    <main className="grid w-full max-w-6xl flex-1 grid-col-1 gap-y-8 md:grid-cols-[16rem_minmax(0,1fr)] md:grid-rows-[auto_1fr]">
      <header className="p-3 border-b border-neutral-dk pb-6 md:col-start-2 md:row-start-1">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-base leading-7 text-neutral-md">
          {summary}
        </p>
      </header>

      <div className="py-3 pl-5 bg-dark-md md:col-start-1 md:row-start-1 md:row-span-2">
        <LibraryToc sections={sections}/>
      </div>

      <article
        className="min-w-0 space-y-12 md:col-start-2 md:row-start-2"
        aria-label={`${title} library content`}
      >
        {sections.map((section) => (
          <LibrarySection
            key={section.id}
            {...section}
          />
        ))}
      </article>
    </main>
  );
}
