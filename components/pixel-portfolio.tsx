"use client"

import { useEffect, useState } from "react"
import { ContactSection } from "@/components/portfolio/contact-section"
import { getPortfolioContent, type Locale, type Note } from "@/components/portfolio/data"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { GameboyNav } from "@/components/portfolio/gameboy-nav"
import { HomeSection } from "@/components/portfolio/home-section"
import { MicroLoader } from "@/components/portfolio/micro-loader"
import { NotesSection } from "@/components/portfolio/notes-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"

export function PixelPortfolio({ initialLocale = "id" }: { initialLocale?: Locale }) {
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const [selectedSkill, setSelectedSkill] = useState(() => getPortfolioContent(initialLocale).inventorySkills[0])
  const [activeSection, setActiveSection] = useState("top")
  const [selectedNote, setSelectedNote] = useState<Note | null>(null)

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 420)
    const params = new URLSearchParams(window.location.search)
    const requestedView = params.get("view")
    const requestedLocale = params.get("lang")
    const content = getPortfolioContent(requestedLocale === "en" ? "en" : "id")
    const routeTimer = window.setTimeout(() => {
      if (requestedView && content.navigationItems.some((item) => item.id === requestedView)) setActiveSection(requestedView)
      if (requestedLocale === "en") setLocale("en")
    }, 0)
    const savedTheme = document.cookie.match(/(?:^|; )portfolio-theme=(light|dark)/)?.[1]
    const themeTimer = window.setTimeout(() => {
      if (savedTheme === "dark") setTheme("dark")
    }, 0)

    return () => {
      window.clearTimeout(loadingTimer)
      window.clearTimeout(routeTimer)
      window.clearTimeout(themeTimer)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.classList.toggle("theme-dark", theme === "dark")
    document.cookie = `portfolio-theme=${theme}; path=/; max-age=31536000; SameSite=Lax`
  }, [locale, theme])

  const content = getPortfolioContent(locale)
  const changeLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return
    const url = new URL(nextLocale === "en" ? "/en" : "/", window.location.origin)
    if (activeSection !== "top") url.searchParams.set("view", activeSection)
    window.location.assign(url)
  }

  return <div className={`meadow-site view-${activeSection}`}>
    {isLoading && <MicroLoader />}
    <div className="side-scenery" aria-hidden="true"><span className="scenery-tree scenery-left" /><span className="scenery-fence" /><span className="scenery-bush scenery-left-bush" /><span className="scenery-tree scenery-right" /><span className="scenery-mailbox" /><span className="scenery-bush scenery-right-bush" /><span className="scenery-board" /><span className="scenery-chest" /><span className="scenery-lamp" /></div>
    <main className="spa-main">
      <div className="spa-view" key={activeSection}>
        {activeSection === "top" && <HomeSection locale={locale} onNavigate={setActiveSection} />}
        {activeSection === "projects" && <ProjectsSection locale={locale} projects={content.projects} />}
        {activeSection === "skills" && <SkillsSection locale={locale} skills={content.inventorySkills} selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />}
        {activeSection === "experience" && <ExperienceSection locale={locale} timeline={content.timeline} />}
        {activeSection === "notes" && <NotesSection locale={locale} notes={content.notes} selectedNote={selectedNote} onSelectNote={setSelectedNote} />}
        {activeSection === "contact" && <ContactSection locale={locale} sent={sent} onSubmit={() => setSent(true)} />}
      </div>
    </main>
    <GameboyNav items={content.navigationItems} activeItem={activeSection} onNavigate={setActiveSection} locale={locale} onChangeLocale={changeLocale} theme={theme} onToggleTheme={() => setTheme((current) => current === "light" ? "dark" : "light")} />
  </div>
}
