import IndexCard, { type IndexCardProps } from "@/component/main-index/IndexCard";

export default function MainIndex() {
  const libraryArray: IndexCardProps[] = [
    {
      icon: "/icons/springboot_icon.svg",
      title: "SPRING BOOT",
      href: "/library/springboot",
      theme: "green",
    },
    {
      icon: "/icons/love2d_icon.svg",
      title: "LOVE2D",
      href: "/library/love2d",
      theme: "pink",
    },
    {
      icon: "/icons/react_icon.svg",
      title: "REACT",
      href: "/library/react",
      theme: "blue",
    },
    {
      icon: "/icons/c4d_icon.svg",
      title: "CINEMA 4D",
      href: "/library/cinema4d",
      theme: "blue",
    },
    {
      icon: "/icons/aftereffects_icon.svg",
      title: "AFTER EFFECTS",
      href: "/library/aftereffects",
      theme: "purple",
    },
    {
      icon: "/icons/premiere_icon.svg",
      title: "PREMIERE",
      href: "/library/premiere",
      theme: "purple",
    },
  ];

  return (
    <section className="py-2">
      <h2 className="mb-4 text-center font-bold text-2xl">LIBRARIES</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-6">
        {
          libraryArray.map((lib) => (
            <IndexCard key={lib.icon} {...lib} />
          ))
        }
      </div>

    </section>
  )
}
