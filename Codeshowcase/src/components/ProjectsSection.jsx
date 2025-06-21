import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Presenze",
    description: "Smart Attendance Tracker for Individuals",
    image: "/projects/Presenze.png",
    tags: ["React", "Express.js", "Node.js", "MongoDB"],
    demoUrl: "https://presenze-plum.netlify.app/",
    githubUrl: "https://github.com/AryanManu544/Presenze"
  },
  {
    id: 2,
    title: "Vibesync",
    description: "Real-Time Social Chat Platform with Voice & Video",
    image: "/projects/Vibesync.png",
    tags: ["React", "Tailwindcss", "SaSS", "Express.js", "Node.js", "MongoDB"],
    demoUrl: "https://vibe-sync-glqp.vercel.app/",
    githubUrl: "https://github.com/AryanManu544/VibeSync"
  }
]

export const ProjectsSection = () => {
  return (
    <section className="py-24 px-4 relative" id="projects">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with
          attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map(project => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* All content in one flex-column container */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Action Icons at bottom */}
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/AryanManu544" target="_blank">
                Check My Github <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    </section>
  )
}