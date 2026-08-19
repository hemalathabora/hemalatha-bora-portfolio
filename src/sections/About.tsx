import { profile } from "../data/site"
import { aboutParagraphs } from "../data/content"
import { SectionHeading } from "../components/SectionHeading"
import { Reveal } from "../components/Reveal"

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="07" eyebrow="About" title="A builder at heart" />

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="space-y-6">
              {aboutParagraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="font-serif text-xl leading-relaxed text-foreground/90 md:text-2xl">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 md:border-l md:border-border md:pl-16">
            <Reveal delay={0.15}>
              <dl className="space-y-8">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Focus
                  </dt>
                  <dd className="mt-2 text-lg text-foreground">
                    AI / ML Engineering &amp; Full-Stack Development
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Currently
                  </dt>
                  <dd className="mt-2 text-lg text-foreground">
                    B.Tech in Computer Science &amp; Engineering
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Based in
                  </dt>
                  <dd className="mt-2 text-lg text-foreground">{profile.location}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Interests
                  </dt>
                  <dd className="mt-2 text-lg text-foreground">
                    Generative AI, RAG systems, computer vision, model explainability
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
