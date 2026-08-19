import { motion } from "framer-motion"
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
} from "lucide-react"
import { profile, resumeUrl, socials } from "../data/site"

const ease = [0.22, 1, 0.36, 1] as const

// Character-by-character animation for the name
const nameContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const nameLetter = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease,
    },
  },
}

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden paper-grain"
    >
      {/* =====================================================
          SUBTLE TOP GLOW
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-64
          w-[120%]
          -translate-x-1/2
          bg-[radial-gradient(ellipse_at_top,rgba(193,122,74,0.10),transparent_60%)]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-8
          pb-20
          pt-28
          sm:px-10
          lg:px-14
          xl:px-16
        "
      >
        <div
          className="
            grid
            min-h-[calc(100svh-9rem)]
            items-center
            lg:grid-cols-[minmax(0,0.95fr)_minmax(500px,0.85fr)]
            lg:gap-6
            xl:grid-cols-[minmax(0,1fr)_minmax(540px,0.9fr)]
            xl:gap-10
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <div
            className="
              flex
              w-full
              max-w-[720px]
              flex-col
              items-start
              justify-center
              text-left
            "
          >
            {/* -----------------------------------------------
                PORTFOLIO
            ------------------------------------------------ */}
            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="
                flex
                items-center
                gap-3
                text-xs
                font-medium
                uppercase
                tracking-[0.22em]
                text-copper
              "
            >
              <span
                className="h-px w-9 bg-copper"
                aria-hidden="true"
              />

              Portfolio
            </motion.p>

            {/* -----------------------------------------------
                NAME
            ------------------------------------------------ */}
            <motion.h1
              variants={nameContainer}
              initial="hidden"
              animate="visible"
              aria-label={profile.name}
              className="
                mt-6
                whitespace-nowrap
                font-serif
                text-5xl
                font-medium
                leading-[0.98]
                tracking-tight
                text-foreground
                sm:text-6xl
                md:text-7xl
                lg:text-[4.7rem]
                xl:text-[5.4rem]
              "
            >
              {profile.name.split("").map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  variants={nameLetter}
                  className="inline-block"
                  aria-hidden="true"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* -----------------------------------------------
                TITLE
            ------------------------------------------------ */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.85,
                ease,
              }}
              className="
                mt-6
                text-xl
                font-medium
                text-copper-soft
                sm:text-2xl
              "
            >
              {profile.title}
            </motion.p>

            {/* -----------------------------------------------
                DESCRIPTION
            ------------------------------------------------ */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease,
              }}
              className="
                mt-6
                max-w-[650px]
                text-left
                text-base
                leading-[1.75]
                text-pretty
                text-muted
                sm:text-lg
              "
            >
              {profile.statement}
            </motion.p>

            {/* -----------------------------------------------
                BUTTONS
            ------------------------------------------------ */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.12,
                ease,
              }}
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              <button
                type="button"
                onClick={() => scrollTo("#work")}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-copper
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  text-background
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_35px_rgba(193,122,74,0.18)]
                "
              >
                Explore My Work

                <ArrowDown
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                />
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-border
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  text-foreground
                  transition-all
                  duration-300
                  hover:border-copper/50
                  hover:text-copper-soft
                "
              >
                Resume

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </motion.div>

            {/* -----------------------------------------------
                SOCIAL LINKS
            ------------------------------------------------ */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1.25,
                ease,
              }}
              className="
                mt-10
                flex
                items-center
                gap-7
              "
            >
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-faint
                  transition-colors
                  duration-300
                  hover:text-foreground
                "
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-faint
                  transition-colors
                  duration-300
                  hover:text-foreground
                "
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT PORTRAIT
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease,
            }}
            className="
              relative
              flex
              h-full
              min-h-[520px]
              items-center
              justify-center
              lg:justify-end
            "
          >
            {/* -----------------------------------------------
                BACKGROUND COPPER GLOW
            ------------------------------------------------ */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[-40px]
                top-1/2
                h-[500px]
                w-[500px]
                -translate-y-1/2
                rounded-full
                bg-[radial-gradient(circle,rgba(193,122,74,0.18),rgba(193,122,74,0.07)_45%,transparent_72%)]
                blur-2xl
                xl:h-[590px]
                xl:w-[590px]
              "
            />

            {/* -----------------------------------------------
                CIRCLE
            ------------------------------------------------ */}
            <div
              className="
                relative
                z-10
                h-[400px]
                w-[400px]
                overflow-hidden
                rounded-full
                border
                border-copper/20
                bg-background
                shadow-[0_30px_90px_rgba(0,0,0,0.42)]
                sm:h-[450px]
                sm:w-[450px]
                md:h-[500px]
                md:w-[500px]
                lg:h-[530px]
                lg:w-[530px]
                xl:h-[590px]
                xl:w-[590px]
              "
            >
              <img
                src="/hema.png"
                alt="Hemalatha Bora"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  scale-[1.03]
                "
              />

              {/* Soft edge fade */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  bg-[radial-gradient(circle_at_center,transparent_58%,rgba(10,7,5,0.30)_100%)]
                "
              />

              {/* Inner border */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  ring-1
                  ring-inset
                  ring-copper/10
                "
              />
            </div>

            {/* -----------------------------------------------
                OUTER DECORATIVE CIRCLE
            ------------------------------------------------ */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[-20px]
                top-1/2
                z-0
                h-[520px]
                w-[520px]
                -translate-y-1/2
                rounded-full
                border
                border-copper/10
                xl:h-[620px]
                xl:w-[620px]
              "
            />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="
          pointer-events-none
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
        "
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-faint">
          <span className="text-[10px] uppercase tracking-[0.2em]">
            Scroll
          </span>

          <motion.span
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </div>
      </motion.div>
    </section>
  )
}