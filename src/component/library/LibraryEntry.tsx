import type { LibraryEntryDefinition } from "@/content/libraries/types";

export default function LibraryEntry({
  id,
  date,
  title,
  subtitle,
  tags,
  content
}: LibraryEntryDefinition) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}>
      <header className="text-mdx-txt-dk">
        <h2
          id={`${id}-heading`}
          className="my-1 text-4xl text-mdx-main-md font-bold tracking-tight"
        >
          {title}
        </h2>
        <p className="mt-1 font-light">
          {subtitle}
        </p>
        <div className="mt-2 flex flex-row">
          <time
            dateTime={date}
            className="text-sm font-extralight py-0.5"
          >
            {date}
          </time>
          <ul aria-label="Tags" className="ml-2 flex flex-row">
            {tags.map((tag) => (
              <li key={tag} className="mr-1.5 py-0.5 px-3 block rounded-2xl bg-neutral-md text-neutral-lt text-sm font-light">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="mdx-content">{content}</div>
    </section>
  );
}
