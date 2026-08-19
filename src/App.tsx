import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Hero } from "./sections/Hero"
import { ResumeReveal } from "./sections/ResumeReveal"
import { Work } from "./sections/Work"
import { Skills } from "./sections/Skills"
import { Profiles } from "./sections/Profiles"
import { Education } from "./sections/Education"

import { About } from "./sections/About"
import { Contact } from "./sections/Contact"

export default function App() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />
      <main>
        <Hero />
        <ResumeReveal />
        <Work />
        <Skills />
        <Profiles />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
