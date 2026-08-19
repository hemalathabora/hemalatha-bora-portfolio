import { SectionHeading } from "../components/SectionHeading"
import { Reveal } from "../components/Reveal"
import { skillGroups } from "../data/content"

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          subtitle="The languages, frameworks and tools I reach for across the stack."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04}>
              <div className="border-t border-border pt-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-muted after:mx-2 after:text-border after:content-['·'] last:after:content-none"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
