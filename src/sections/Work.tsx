import { SectionHeading } from "../components/SectionHeading"
import { ProjectCaseStudy } from "../components/ProjectCaseStudy"
import { projects } from "../data/projects"

export function Work() {
  const featured = projects.filter((p) => p.layout !== "grid")
  const gridProjects = projects.filter((p) => p.layout === "grid")

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading
        eyebrow="Selected Work"
        title="A selection of AI, machine learning and full-stack projects I've built."
      />

      <div className="mt-16 flex flex-col gap-24 md:gap-32">
        {featured.map((project) => (
          <ProjectCaseStudy key={project.id} project={project} />
        ))}

        {gridProjects.length > 0 && (
          <div className="grid gap-10 sm:grid-cols-2">
            {gridProjects.map((project) => (
              <ProjectCaseStudy key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
