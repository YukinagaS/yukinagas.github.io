import Link from "next/link";
import Image from "next/image";

const cardThemes = {
  green: {
    frame: "outline-green-md hover:outline-green-lt focus-visible:outline-green-lt",
    title: "text-green-lt",
    bg: "bg-green-dk"
  },
  pink: {
    frame: "outline-pink-md hover:outline-pink-lt focus-visible:outline-pink-lt",
    title: "text-pink-lt",
    bg: "bg-pink-dk"
  },
  purple: {
    frame: "outline-purple-md hover:outline-purple-lt focus-visible:outline-purple-lt",
    title: "text-purple-lt",
    bg: "bg-purple-dk"
  },
  blue: {
    frame: "outline-blue-md hover:outline-blue-lt focus-visible:outline-blue-lt",
    title: "text-blue-lt",
    bg: "bg-blue-dk"
  },
} as const;

export type IndexCardTheme = keyof typeof cardThemes;

export type IndexCardProps = {
  icon: string;
  title: string;
  href: string;
  theme: IndexCardTheme;
};

export default function IndexCard({
  icon,
  title,
  href,
  theme,
}: IndexCardProps) {
  const colors = cardThemes[theme];

  return (
    <article className={`py-2 px-3 outline-1 ${colors.frame} ${colors.bg} rounded-lg group relative`}>
      <div className="flex items-center gap-2">
        <Image
          src={icon}
          width={25}
          height={25}
          alt={`${title} icon`}
        />
        <h3 className={`font-bold text-lg ${colors.title}`}>{title}</h3>
      </div>
      <Link
        className="after:absolute after:inset-0 after-content-['']"
        href={href}
      />
    </article>
  );
}
