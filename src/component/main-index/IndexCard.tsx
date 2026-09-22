import Link from "next/link";
import Image from "next/image";

const cardThemes = {
  green: {
    frame: "outline-green-md hover:outline-green-lt focus-visible:outline-green-lt",
    title: "text-green-lt group-hover:text-neutral-lt group-focus-visible:text-neutral-lt",
    bg: "bg-green-dk"
  },
  pink: {
    frame: "outline-pink-md hover:outline-pink-lt focus-visible:outline-pink-lt",
    title: "text-pink-lt group-hover:text-white group-focus-visible:text-white",
    bg: "bg-pink-dk"
  },
  purple: {
    frame: "outline-purple-md hover:outline-purple-lt focus-visible:outline-purple-lt",
    title: "text-purple-lt group-hover:text-neutral-lt group-focus-visible:text-neutral-lt",
    bg: "bg-purple-dk"
  },
  blue: {
    frame: "outline-blue-md hover:outline-blue-lt focus-visible:outline-blue-lt",
    title: "text-blue-lt group-hover:text-neutral-lt group-focus-visible:text-neutral-lt",
    bg: "bg-blue-dk"
  },
} as const;

export type IndexCardTheme = keyof typeof cardThemes;

export type IndexCardProps = {
  icon: string;
  title: string;
  href: string;
  note: string;
  theme: IndexCardTheme;
};

export default function IndexCard({
  icon,
  title,
  href,
  note,
  theme,
}: IndexCardProps) {
  const colors = cardThemes[theme];

  return (
    <article>
      <Link
        className={`group block rounded min-h-35 px-4 py-4 outline-1 transition-colors ${colors.frame} ${colors.bg}`}
        href={href}
      >
        <div className="flex items-center gap-2">
          <span className="relative block size-[25px] shrink-0">
            <Image
              src={icon}
              alt=""
              aria-hidden="true"
              fill
              sizes="25px"
              className="object-contain"
            />
          </span>
          <h3 className={`font-normal text-2xl ${colors.title}`}>{title}</h3>
        </div>
        <p className={`mt-2 text-sm ${colors.title}`}>{note}</p>
      </Link>
    </article>
  );
}
