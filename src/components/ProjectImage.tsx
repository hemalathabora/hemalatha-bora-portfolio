import { ArrowUpRight } from "lucide-react"
import type { Project } from "../data/projects"
import { primaryLink } from "../lib/links"

// Large, clickable project visual. Opens live site (or GitHub fallback).
export function ProjectImage({
  project,
  className = "",
}: {
  project: Project
  className?: string
}) {
  const link = primaryLink(project)
  const label = link?.kind === "github" ? "OPEN ON GITHUB" : "OPEN LIVE PROJECT"

  const media = (
    <>
      <img
        src={project.image || "/placeholder.svg"}
        alt={project.imageAlt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      {/* Hover overlay cue */}
      <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-background/85 via-background/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-copper px-3.5 py-1.5 text-xs font-semibold tracking-wide text-background">
          {label}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
      {/* Persistent subtle corner cue */}
      <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-background/40 text-foreground backdrop-blur-sm transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-background">
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </>
  )

  const shell =
    "group relative block aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-surface " +
    className

  if (link) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={shell}
        aria-label={`${project.title} — ${label.toLowerCase()}`}
      >
        {media}
      </a>
    )
  }

  // No real link yet — render as a non-interactive preview.
  return (
    <div className={shell} aria-label={`${project.title} preview`}>
      {media}
    </div>
  )
}
