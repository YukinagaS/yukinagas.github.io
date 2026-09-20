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
      <header>
        <time dateTime={date}>{date}</time>
        <h2 id={`${id}-heading`}>{title}</h2>
        <p>{subtitle}</p>
        <ul aria-label="Tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </header>
      <div className="mdx-content">{content}</div>
    </section>
  );
}
