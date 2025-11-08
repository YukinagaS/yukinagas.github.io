import Link from "next/link";
import SocialLinks from "@/app/components/sociallinks"

export default function Home() {
  return (
    <div className="flex justify-between px-6 py-12">
      <header>
        <h1 className="text-4xl font-bold">Stuart Yukinaga</h1>
        <h2 className="text-2xl">Self-title</h2>
        <p className="font-light">Blurb about what I do.</p>
        <nav aria-label="In-page Navigation">
          <ul>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/projects">PROJECTS</Link></li>
          </ul>
        </nav>
        <SocialLinks />


      </header>

      <main>
        <section>About</section>
        <section>Projects</section>
      </main>
    </div>
  );
}
