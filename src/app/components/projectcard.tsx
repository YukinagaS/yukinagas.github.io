import Image from 'next/image'
import Link from 'next/link'
import nextConfig from '../../../next.config'

interface ProjectCardProps {
  id: string,
  title: string,
  description: string,
  project_link: string,
  image_source: string,
  tech: string[]
}

export default function ProjectCard({id, title, description, project_link, image_source, tech}: ProjectCardProps) {
  return (
    <div className="flex flex-row rounded">
      <Link
        href={project_link}
        target="blank"
        rel="noopener noreferrer"
        aria-label={`Link to ${title} project page`}
      >
        <div className="relative w-30 h-30 flex-shrink-0">
          <Image
            src={`${nextConfig.basePath}${image_source}`}
            alt={`Screenshot of ${title}`}
            fill
            className="object-cover rounded"
          />
        </div>
      </Link>

      <div className="pl-3">
        <p className="text-2xl font-bold -mt-1">{title}</p>
        <p className="font-light">{description}</p>
      </div>
    </div>
  )
}
