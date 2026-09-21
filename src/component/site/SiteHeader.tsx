import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="bg-neutral-xdk py-1 w-full flex items-center justify-center">
      <Link href="/" className="font-extrabold text-2xl">
        stuart<span className="mx-0.5 text-purple-md">.</span>tokyo
      </Link>
    </header>
  );
}
