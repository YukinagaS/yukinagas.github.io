import IndexCard, { type IndexCardProps } from "@/component/main-index/IndexCard";

export default function MainIndex() {
  const libraryArray: IndexCardProps[] = [
    {
      icon: "/icons/springboot_icon.svg",
      title: "SPRING BOOT",
      href: "/library/springboot",
      note: "Using a Spring Boot backend at work, so time to learn more about using it.",
      theme: "green",
    },
    {
      icon: "/icons/love2d_icon.svg",
      title: "LOVE2D",
      href: "/library/love2d",
      note: "Want to make games and this seems like a fun and approachable framework.",
      theme: "pink",
    },
    {
      icon: "/icons/react_icon.svg",
      title: "REACT",
      href: "/library/react",
      note: "To be populated",
      theme: "blue",
    },
    {
      icon: "/icons/c4d_icon.svg",
      title: "CINEMA 4D",
      href: "/library/cinema4d",
      note: "To be populated",
      theme: "blue",
    },
    {
      icon: "/icons/aftereffects_icon.svg",
      title: "AFTER EFFECTS",
      href: "/library/aftereffects",
      note: "To be populated",
      theme: "purple",
    },
    {
      icon: "/icons/premiere_icon.svg",
      title: "PREMIERE",
      href: "/library/premiere",
      note: "To be populated",
      theme: "purple",
    },
  ];

  return (
      <section className="mx-auto w-full max-w-3xl my-4 pt-3 pb-8 px-8">
        <h2 className="mb-4 font-bold text-2xl">LIBRARIES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {
            libraryArray.map((lib) => (
              <IndexCard key={lib.icon} {...lib} />
            ))
          }
        </div>

      </section>
  )
}
