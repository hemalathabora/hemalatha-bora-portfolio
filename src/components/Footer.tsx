import { Github, Linkedin, Mail } from "lucide-react"
import { profile, socials } from "../data/site"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-serif text-xl font-medium text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-faint">{profile.title}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <p className="text-xs text-faint">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
