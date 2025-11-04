import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-darkcoal text-yukiwhite">
        <nav className="flex flex-row content-center justify-end h-16">
          <Link className="basis-32" href="/">stuart yukinaga</Link>
          <Link className="basis-32" href="/about">About</Link>
          <Link className="basis-32" href="/works">Works</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
