import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import { resumeUrl } from "../data/site"
import { usePrefersReducedMotion } from "../hooks/useReducedMotion"
export function ResumeReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  // Track scroll progress across the tall pinned container.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // The document approaches: starts distant/small, scales into focus.
  const scale = useTransform(scrollYProgress, [0, 0.42, 0.6], [0.72, 1, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.45], [0.35, 0.7, 1])
  const blur = useTransform(scrollYProgress, [0, 0.42], [6, 0])
  const filter = useTransform(blur, (b) => `blur(${b}px)`)
  const y = useTransform(scrollYProgress, [0, 0.42], [60, 0])
  // Surrounding environment subtly warms/focuses as you approach.
  const envOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1])

  const staticStyle = { scale: 1, opacity: 1, filter: "blur(0px)", y: 0 }
  const motionStyle = reduced ? staticStyle : { scale, opacity, filter, y }

  return (
    <section id="resume" aria-label="Resume" className="relative">
      {/* Tall track that drives the scroll animation */}
      <div ref={ref} className="relative h-[220vh] md:h-[260vh]">
        <div className="sticky top-0 flex h-svh flex-col items-center justify-center">
          {/* Environment focus layer */}
          <motion.div
            aria-hidden="true"
            style={reduced ? undefined : { opacity: envOpacity }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,122,74,0.08),transparent_65%)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-copper"
          >
            <span className="h-px w-8 bg-copper" aria-hidden="true" />
            The Résumé
          </motion.p>

          {/* The document */}
         <motion.div
  style={motionStyle}
  className="relative z-10 flex max-h-[68svh] w-auto max-w-[86vw] items-center justify-center rounded-sm bg-white shadow-2xl ring-1 ring-black/10"
>
  <img
    src="/resume/Hemalatha_Bora_Resume.jpg"
    alt="Hemalatha Bora Resume"
    className="block max-h-[68svh] w-auto max-w-[86vw] object-contain"
  />
</motion.div>
  

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View Full Resume
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              Download Resume
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
