import { Mail, MapPin } from "lucide-react"
import { profile } from "../data/site"
import { education, skillGroups } from "../data/content"
import { projects } from "../data/projects"

// A realistic, document-style resume rendered as an ivory "paper" sheet.
// This is the visual that scales up during the reveal.
export function ResumePreview() {
  const topSkills = skillGroups.filter((g) =>
    ["Programming", "AI / ML", "Frontend", "Backend"].includes(g.title),
  )

  return (
    <div className="aspect-[1/1.294] w-full overflow-hidden bg-[#f4efe6] text-[#20180f] shadow-2xl ring-1 ring-black/10">
      <div className="flex h-full flex-col p-[5%] sm:p-[6%]">
        {/* Header */}
        <header className="border-b border-[#20180f]/15 pb-[3%]">
          <h3 className="font-serif text-[3.2vw] font-semibold leading-none tracking-tight sm:text-[1.6rem] md:text-3xl">
            {profile.name}
          </h3>
          <p className="mt-[1%] text-[2vw] font-medium text-[#a15a2e] sm:text-sm md:text-base">
            {profile.title}
          </p>
          <div className="mt-[2%] flex flex-wrap gap-x-[4%] gap-y-1 text-[1.5vw] text-[#20180f]/70 sm:text-[0.7rem] md:text-xs">
            <span className="inline-flex items-center gap-1">
              <Mail className="h-[1em] w-[1em]" aria-hidden="true" />
              {profile.email}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-[1em] w-[1em]" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </header>

        {/* Body: two columns */}
        <div className="mt-[3%] grid flex-1 grid-cols-[1.15fr_0.85fr] gap-[5%] overflow-hidden">
          {/* Left column */}
          <div className="flex flex-col gap-[5%] overflow-hidden">
            <ResumeBlock title="Selected Projects">
              <ul className="space-y-[3%]">
                {projects.slice(0, 3).map((p) => (
                  <li key={p.id}>
                    <p className="text-[1.7vw] font-semibold leading-tight sm:text-[0.75rem] md:text-sm">
                      {p.title}
                    </p>
                    <p className="text-[1.4vw] leading-snug text-[#20180f]/65 sm:text-[0.65rem] md:text-xs">
                      {p.subtitle}
                    </p>
                  </li>
                ))}
              </ul>
            </ResumeBlock>

            <ResumeBlock title="Education">
              <ul className="space-y-[3%]">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="text-[1.6vw] font-semibold leading-tight sm:text-[0.72rem] md:text-[0.8rem]">
                      {e.degree}
                    </p>
                    <p className="text-[1.4vw] leading-snug text-[#20180f]/65 sm:text-[0.65rem] md:text-xs">
                      {e.institution}
                      {e.period ? ` · ${e.period}` : ""} · {e.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </ResumeBlock>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-[5%] overflow-hidden border-l border-[#20180f]/15 pl-[7%]">
            <ResumeBlock title="Technical Skills">
              <div className="space-y-[4%]">
                {topSkills.map((g) => (
                  <div key={g.title}>
                    <p className="text-[1.4vw] font-semibold uppercase tracking-wide text-[#a15a2e] sm:text-[0.6rem] md:text-[0.65rem]">
                      {g.title}
                    </p>
                    <p className="text-[1.4vw] leading-snug text-[#20180f]/75 sm:text-[0.62rem] md:text-xs">
                      {g.items.slice(0, 6).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </ResumeBlock>

            <ResumeBlock title="Coding Profiles">
              <p className="text-[1.4vw] leading-snug text-[#20180f]/75 sm:text-[0.62rem] md:text-xs">
                LeetCode · GitHub · CodeChef · HackerRank
              </p>
            </ResumeBlock>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResumeBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className="mb-[2%] text-[1.5vw] font-semibold uppercase tracking-[0.15em] text-[#20180f] sm:text-[0.65rem] md:text-[0.7rem]">
        {title}
      </h4>
      {children}
    </section>
  )
}
