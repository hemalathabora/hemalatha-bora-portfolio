import { ArrowUpRight, BadgeCheck } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { Reveal } from "../components/Reveal"
import { certifications } from "../data/content"
import { isRealUrl } from "../lib/links"

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading eyebrow="Certifications" title="Credentials" />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => {
          const hasUrl = isRealUrl(c.url)
          const inner = (
            <div className="flex h-full items-start gap-3.5 border border-border bg-surface p-6 transition-colors group-hover:border-copper/50 group-hover:bg-surface-raised">
              <BadgeCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-copper"
                aria-hidden="true"
              />
              <div className="flex-1">
                <h3 className="font-medium leading-snug text-foreground">{c.name}</h3>
                {hasUrl && (
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-copper-soft">
                    View credential
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                )}
              </div>
            </div>
          )

          return (
            <Reveal key={c.name} delay={i * 0.05} className="h-full">
              {hasUrl ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  {inner}
                </a>
              ) : (
                <div className="group block h-full">{inner}</div>
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
