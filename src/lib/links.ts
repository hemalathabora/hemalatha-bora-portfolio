import type { Project } from "../data/projects"

// A URL is a real link when it isn't one of our placeholder tokens.
export function isRealUrl(url: string): boolean {
  return Boolean(url) && !url.startsWith("ADD_")
}

// The best destination for the clickable project image:
// live site if available, otherwise GitHub, otherwise none.
export function primaryLink(project: Project): { href: string; kind: "live" | "github" } | null {
  if (isRealUrl(project.liveUrl)) return { href: project.liveUrl, kind: "live" }
  if (isRealUrl(project.githubUrl)) return { href: project.githubUrl, kind: "github" }
  return null
}
