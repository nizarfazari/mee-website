"use client"

import { useEffect, useState } from "react"
import { ContactSection } from "@/components/portfolio/contact-section"
import { inventorySkills, navigationItems, type Note } from "@/components/portfolio/data"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { GameboyNav } from "@/components/portfolio/gameboy-nav"
import { HomeSection } from "@/components/portfolio/home-section"
import { MicroLoader } from "@/components/portfolio/micro-loader"
import { NotesSection } from "@/components/portfolio/notes-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"

export function PixelPortfolio() {
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [selectedSkill, setSelectedSkill] = useState(inventorySkills[0])
  const [activeSection, setActiveSection] = useState("top")
  const [selectedNote, setSelectedNote] = useState<Note | null>(null)

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 420)
    const savedTheme = document.cookie.match(/(?:^|; )portfolio-theme=(light|dark)/)?.[1]
    const themeTimer = window.setTimeout(() => {
      if (savedTheme === "dark") setTheme("dark")
    }, 0)

    return () => {
      window.clearTimeout(loadingTimer)
      window.clearTimeout(themeTimer)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", theme === "dark")
    document.cookie = `portfolio-theme=${theme}; path=/; max-age=31536000; SameSite=Lax`
  }, [theme])

  return <div className={`meadow-site view-${activeSection}`}>
    {isLoading && <MicroLoader />}
    <div className="side-scenery" aria-hidden="true"><span className="scenery-tree scenery-left" /><span className="scenery-fence" /><span className="scenery-bush scenery-left-bush" /><span className="scenery-tree scenery-right" /><span className="scenery-mailbox" /><span className="scenery-bush scenery-right-bush" /><span className="scenery-board" /><span className="scenery-chest" /><span className="scenery-lamp" /></div>
    <main className="spa-main">
      <div className="spa-view" key={activeSection}>
        {activeSection === "top" && <HomeSection onNavigate={setActiveSection} />}
        {activeSection === "projects" && <ProjectsSection />}
        {activeSection === "skills" && <SkillsSection selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />}
        {activeSection === "experience" && <ExperienceSection />}
        {activeSection === "notes" && <NotesSection selectedNote={selectedNote} onSelectNote={setSelectedNote} />}
        {activeSection === "contact" && <ContactSection sent={sent} onSubmit={() => setSent(true)} />}
      </div>
    </main>
    <GameboyNav items={navigationItems} activeItem={activeSection} onNavigate={setActiveSection} theme={theme} onToggleTheme={() => setTheme((current) => current === "light" ? "dark" : "light")} />
  </div>
}
