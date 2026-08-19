import { Code2, Github, Terminal, Trophy } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { ProfileLink } from "../components/ProfileLink"
import { Reveal } from "../components/Reveal"
import { socials } from "../data/site"

const profiles = [
  {
    name: "LeetCode",
    description: "Data structures and algorithm problem solving.",
    href: socials.leetcode,
    icon: Code2,
  },
  {
    name: "GitHub",
    description: "Source code for my projects and experiments.",
    href: socials.github,
    icon: Github,
  },
  {
    name: "CodeChef",
    description: "Competitive programming practice and contests.",
    href: socials.codechef,
    icon: Terminal,
  },
  {
    name: "HackerRank",
    description: "Skill challenges across languages and domains.",
    href: socials.hackerrank,
    icon: Trophy,
  },
]

export function Profiles() {
  return (
    <section id="profiles" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading
        eyebrow="Coding & Developer Profiles"
        title="Where I practice and share code"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {profiles.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <ProfileLink {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
