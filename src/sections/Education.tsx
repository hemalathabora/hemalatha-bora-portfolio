import { SectionHeading } from "../components/SectionHeading"
import { Reveal } from "../components/Reveal"
import { education } from "../data/content"

export function Education() {
  return (
    <section id="education" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-14 max-w-3xl">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.06}>
              <div className="grid gap-2 border-t border-border py-7 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground sm:text-2xl">
                    {e.degree}
                  </h3>
                  <p className="mt-1 text-muted">{e.institution}</p>
                </div>
                <div className="text-sm text-faint sm:text-right">
                  {e.period && <p>{e.period}</p>}
                  <p className="mt-1 font-medium text-copper-soft">{e.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
