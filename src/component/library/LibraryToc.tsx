import type { LibrarySectionDefinition } from "@/content/libraries/types";

type LibraryTocProps = {
  sections: LibrarySectionDefinition[];
}

export default function LibraryToc({
  sections
}: LibraryTocProps) {
  return (
    <aside>
      <nav aria-labelledby="library-toc-heading">
        <h2 id="library-toc-heading">
          Contents
        </h2>

        <ol>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
