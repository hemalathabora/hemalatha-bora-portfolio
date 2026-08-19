import type { Project } from "../data/projects"
import { Reveal } from "./Reveal"
import { ProjectImage } from "./ProjectImage"
import { FlowDiagram } from "./FlowDiagram"
import { ProjectLinks, TechStack } from "./ProjectMeta"

// Shared textual detail block used across layouts.
function Detail({ project, showFlow = true }: { project: Project; showFlow?: boolean }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-sm text-copper">{project.index}</span>
          <h3 className="font-serif text-2xl font-medium text-foreground sm:text-3xl">
            {project.title}
          </h3>
        </div>
        <p className="mt-1 text-sm font-medium text-copper-soft">{project.subtitle}</p>
      </div>

      <p className="max-w-xl leading-relaxed text-pretty text-muted">{project.description}</p>

      <TechStack tech={project.tech} />

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-faint">
          What I built
        </p>
        <ul className="space-y-1.5">
          {project.built.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper"
                aria-hidden="true"
              />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {showFlow && (
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-faint">
            How it works
          </p>
          <FlowDiagram steps={project.flow} />
        </div>
      )}

      <ProjectLinks project={project} />
    </div>
  )
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { layout } = project

  // FEATURE — large stacked hero presentation
  if (layout === "feature") {
    return (
      <article className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-7">
          <ProjectImage project={project} />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <Detail project={project} />
        </Reveal>
      </article>
    )
  }

  // ALT — reversed layout for rhythm
  if (layout === "alt") {
    return (
      <article className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <Reveal delay={0.1} className="order-2 lg:order-1 lg:col-span-5">
          <Detail project={project} />
        </Reveal>
        <Reveal className="order-1 lg:order-2 lg:col-span-7">
          <ProjectImage project={project} />
        </Reveal>
      </article>
    )
  }

  // WIDE — full-width horizontal presentation, detail below
  if (layout === "wide") {
    return (
      <article className="flex flex-col gap-8">
        <Reveal>
          <ProjectImage project={project} className="!aspect-[21/9]" />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <Detail project={project} showFlow={false} />
          </Reveal>
          <Reveal delay={0.1} className="lg:pt-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-faint">
              How it works
            </p>
            <FlowDiagram steps={project.flow} />
          </Reveal>
        </div>
      </article>
    )
  }

  // GRID — compact card for the balanced grid at the end
  return (
    <Reveal className="flex h-full flex-col gap-5">
      <ProjectImage project={project} />
      <div className="flex flex-1 flex-col gap-4">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-sm text-copper">{project.index}</span>
            <h3 className="font-serif text-xl font-medium text-foreground">
              {project.title}
            </h3>
          </div>
          <p className="mt-1 text-sm font-medium text-copper-soft">{project.subtitle}</p>
        </div>
        <p className="text-sm leading-relaxed text-pretty text-muted">
          {project.description}
        </p>
        <TechStack tech={project.tech} />
        <div className="mt-auto pt-2">
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  )
}
