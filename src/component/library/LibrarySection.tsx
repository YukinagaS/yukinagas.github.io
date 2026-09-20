import type { LibrarySectionDefinition } from "@/content/libraries/types";

export default function LibrarySection({
  id,
  title,
  content
}: LibrarySectionDefinition) {
  return (
    <section
      id={id}
      className="m-3 py-2 px-3"
      aria-labelledby={`${id}-heading`}
    >
      <h2 id={`${id}-heading`}>{title}</h2>
      <div>{content}</div>
    </section>
  );
}
