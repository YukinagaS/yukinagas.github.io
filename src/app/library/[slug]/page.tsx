import { notFound } from "next/navigation";

import LibraryShell from "@/component/library/LibraryShell";
import { libraries, getLibrary } from "@/content/libraries";

type LibraryPageProps = {
  params: Promise<{ slug: string; }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return libraries.map((library) => ({ slug: library.slug, }));
}

export default async function LibraryPage({
  params,
}: LibraryPageProps) {
  const { slug } = await params;
  const library = getLibrary(slug);

  if (!library) {
    notFound();
  }

  return <LibraryShell {...library} />;
}
