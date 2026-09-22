import type { LibraryEntryDefinition } from "@/content/libraries/types";

type LibraryTocProps = {
  entries: LibraryEntryDefinition[];
}

export default function LibraryToc({
  entries
}: LibraryTocProps) {
  return (
    <aside>
      <nav aria-labelledby="library-toc-heading">
        <h2 id="library-toc-heading" className="mb-2 font-semibold text-mdx-accent-lt text-sm">
          CONTENTS
        </h2>

        <ol>
          {entries.map((entry) => (
            <li key={entry.id}>
              <a href={`#${entry.id}`} className="toc-pill">
                <span className="text-xs">{entry.date}</span>
                {entry.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
