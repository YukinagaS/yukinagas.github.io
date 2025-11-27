import projects from '../data/projects.json'
import ProjectCard from '../components/projectcard'

export default function ProjectsPage() {
  return (
    <section className="flex flex-col gap-8 mb-12">
      <div className="flex flex-row h-10">
        <div className="flex-1 bg-pink-dk"></div>
        <h2 className="flex px-2 text-3xl text-pink-lt font-black">PROJECTS</h2>
        <div className="flex-5 bg-pink-dk"></div>
      </div>
      <div className="mx-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project}/>
        ))}
      </div>
    </section>
  )
}
