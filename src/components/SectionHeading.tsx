import { Reveal } from "./Reveal"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <div
          className={
            "flex items-center gap-3 " + (align === "center" ? "justify-center" : "")
          }
        >
          <span className="h-px w-8 bg-copper" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-copper">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-balance text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
