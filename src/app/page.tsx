import SocialLinks from "@/app/components/sociallinks";
import BlogSection from "@/app/components/blogsection";
import About from "@/app/components/about";
import Projects from "@/app/components/projects";
import { getSortedPostsData } from '@/app/lib/posts';

export default async function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <header className="flex flex-col py-2">
        <div className="relative text-center flex items-center justify-center">
          <div className="absolute h-20 left-0 right-0 top-1/2 -translate-y-1/2 bg-purple-dk"></div>
          <div className="relative text-7xl font-black text-purple-md">雪<br/>永</div>
          <div className="absolute inset-0 mt-4 flex items-center justify-center">
            <h1 className="text-6xl font-black text-pink-lt font-gochihand">STUART<br/>YUKINAGA</h1>
          </div>
        </div>
        <div className="mt-6 mx-4 text-md">
          <h2>デジタル職人の理想に向かって、<br/>日々精進中</h2>
          <SocialLinks />
        </div>
      </header>
      <div>
        <About />
        {/* <BlogSection allPostsData={allPostsData} /> */}
        <Projects />
      </div>
    </>
  );
}
