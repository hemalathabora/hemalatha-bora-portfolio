import { ArrowUpRight, Github } from "lucide-react"
import type { Project } from "../data/projects"
import { isRealUrl } from "../lib/links"

export function TechStack({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

export function ProjectLinks({ project }: { project: Project }) {
  const hasLive = isRealUrl(project.liveUrl)
  const hasGit = isRealUrl(project.githubUrl)

  return (
    <div className="flex flex-wrap items-center gap-5">
      <a
        href={hasLive ? project.liveUrl : "#"}
        target={hasLive ? "_blank" : undefined}
        rel={hasLive ? "noopener noreferrer" : undefined}
        aria-disabled={!hasLive}
        onClick={(e) => {
          if (!hasLive) e.preventDefault()
        }}
        className={
          "group inline-flex items-center gap-1.5 text-sm font-medium " +
          (hasLive
            ? "text-foreground hover:text-copper-soft"
            : "cursor-not-allowed text-faint")
        }
      >
        Live Demo
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
      <a
        href={hasGit ? project.githubUrl : "#"}
        target={hasGit ? "_blank" : undefined}
        rel={hasGit ? "noopener noreferrer" : undefined}
        aria-disabled={!hasGit}
        onClick={(e) => {
          if (!hasGit) e.preventDefault()
        }}
        className={
          "group inline-flex items-center gap-1.5 text-sm font-medium " +
          (hasGit
            ? "text-foreground hover:text-copper-soft"
            : "cursor-not-allowed text-faint")
        }
      >
        <Github className="h-4 w-4" />
        GitHub
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  )
}
