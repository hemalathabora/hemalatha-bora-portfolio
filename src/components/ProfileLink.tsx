import { ArrowUpRight, type LucideIcon } from "lucide-react"

type ProfileLinkProps = {
  name: string
  description: string
  href: string
  icon: LucideIcon
}

export function ProfileLink({ name, description, href, icon: Icon }: ProfileLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-4 border border-border bg-surface p-6 transition-colors hover:border-copper/50 hover:bg-surface-raised"
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border text-muted transition-colors group-hover:border-copper group-hover:text-copper-soft">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-medium text-foreground">{name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-faint">{description}</p>
        </div>
      </div>
      <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-soft" />
    </a>
  )
}
