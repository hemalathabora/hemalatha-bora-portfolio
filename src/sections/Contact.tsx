import { ArrowUpRight } from "lucide-react"
import { profile, socials, resumeUrl } from "../data/site"
import { SectionHeading } from "../components/SectionHeading"
import { Reveal } from "../components/Reveal"

const links = [
  { label: "GitHub", href: socials.github },
  { label: "LinkedIn", href: socials.linkedin },
  { label: "LeetCode", href: socials.leetcode },
  { label: "Resume", href: resumeUrl },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="08" eyebrow="Contact" title="Let's build something" />

        <div className="mt-14">
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I&apos;m open to internships, collaborations, and interesting problems worth
              solving. The fastest way to reach me is by email.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-10 inline-flex items-baseline gap-3 font-serif text-4xl leading-tight text-foreground transition-colors hover:text-accent md:text-6xl"
            >
              <span className="break-all">{profile.email}</span>
              <ArrowUpRight
                className="hidden h-8 w-8 shrink-0 self-center text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:inline-block"
                aria-hidden="true"
              />
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-8">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
