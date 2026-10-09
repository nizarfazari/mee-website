"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Bug, Code2, Coffee, Download, FileText, Mail, Moon, Sparkles, Sun, Terminal, Trophy, UserRound, Zap } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

const skills = [
  { name: "TypeScript", level: "MASTERED", value: 92, color: "bg-cyan-400" },
  { name: "React / Next.js", level: "MASTERED", value: 88, color: "bg-violet-400" },
  { name: "Node.js", level: "ADVANCED", value: 78, color: "bg-emerald-400" },
  { name: "UI Engineering", level: "ADVANCED", value: 84, color: "bg-orange-300" },
]

const quests = [
  { title: "Neon Commerce", type: "FULL-STACK CASE STUDY", text: "A headless commerce experience built for speed, storytelling, and delightful checkouts.", tags: ["Next.js", "Stripe", "Postgres"], color: "from-cyan-500/30 to-violet-500/20" },
  { title: "Signal Dashboard", type: "UI SYSTEM CASE STUDY", text: "An observability command center that turns noisy data into a clear next action.", tags: ["React", "Tailwind", "D3.js"], color: "from-orange-400/25 to-pink-500/20" },
  { title: "Campfire Notes", type: "COLLABORATION TOOL", text: "A calm, collaborative writing space for teams who think better together.", tags: ["TypeScript", "Supabase", "Motion"], color: "from-emerald-400/25 to-cyan-500/20" },
]

const timeline = [
  ["2024 — NOW", "Full-stack quests", "Independent Builder", "Building reliable interfaces, APIs, and developer-friendly systems."],
  ["2022 — 2024", "Product engineering arc", "Web Platforms", "Turned ambitious product ideas into accessible, polished experiences."],
  ["2020 — 2022", "Frontend foundations", "Digital Products", "Learned to make complex interactions feel simple, fast, and useful."],
]

const achievements = [
  { icon: <Bug />, title: "DETAIL ORIENTED", text: "I look for the edge cases that shape a reliable product." },
  { icon: <Zap />, title: "DELIVERY MINDED", text: "I value practical progress and clean, maintainable releases." },
  { icon: <Code2 />, title: "PRODUCT FOCUSED", text: "I connect engineering decisions to real user needs." },
  { icon: <Coffee />, title: "CONTINUOUSLY LEARNING", text: "I stay curious about better tools, systems, and ways of working." },
]

const articles = [
  { date: "ENGINEERING NOTES", title: "Designing interfaces that make complex work feel simple", text: "A short note on translating product constraints into calm, understandable UI decisions." },
  { date: "SYSTEMS", title: "What I look for before shipping a new feature", text: "A practical checklist for balancing speed, quality, accessibility, and maintainability." },
  { date: "CAREER", title: "Building a developer workflow that leaves room to think", text: "Small habits that help turn ambiguous requirements into steady progress." },
]

export function PixelPortfolio() {
  const [dark, setDark] = useState(true)
  const [showSecret, setShowSecret] = useState(false)
  const siteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const site = siteRef.current
    const desktopQuery = window.matchMedia("(min-width: 801px)")
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frameId = 0

    const reset = () => {
      site?.style.setProperty("--landscape-parallax", "0px")
      site?.style.setProperty("--map-parallax", "0px")
    }

    const updateParallax = () => {
      frameId = 0
      if (!site || !desktopQuery.matches || reducedMotionQuery.matches) {
        reset()
        return
      }

      const scroll = Math.min(window.scrollY, 1200)
      site.style.setProperty("--landscape-parallax", `${Math.round(scroll * -0.045)}px`)
      site.style.setProperty("--map-parallax", `${Math.round(scroll * -0.018)}px`)
    }

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateParallax)
    }

    requestUpdate()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    desktopQuery.addEventListener("change", requestUpdate)
    reducedMotionQuery.addEventListener("change", requestUpdate)

    return () => {
      window.removeEventListener("scroll", requestUpdate)
      desktopQuery.removeEventListener("change", requestUpdate)
      reducedMotionQuery.removeEventListener("change", requestUpdate)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div ref={siteRef} className={dark ? "pixel-site dark" : "pixel-site light"}>
      <div className="scanlines" aria-hidden="true" />
      <nav className="top-nav">
        <a href="#top" className="brand" aria-label="Nizar Fazari portfolio home"><span className="brand-mark">◆</span> NIZAR<span className="brand-muted">.DEV</span></a>
        <div className="nav-links"><a href="#projects">PROJECTS</a><a href="#skills">EXPERTISE</a><a href="#experience">EXPERIENCE</a><a href="#notes">NOTES</a><a href="#contact">CONTACT</a></div>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun /> : <Moon />}<span>{dark ? "DAY MODE" : "NIGHT MODE"}</span></button>
      </nav>

      <main id="top">
        <HeroSection />

        <section className="stats-bar section-wrap" aria-label="Professional focus"><Stat icon={<Code2 />} label="CORE FOCUS" value="FULL STACK" /><Stat icon={<Trophy />} label="APPROACH" value="PRODUCT LED" /><Stat icon={<Zap />} label="PRIORITY" value="QUALITY" /><Stat icon={<Sparkles />} label="WORK STYLE" value="CURIOUS" /></section>

        <section id="projects" className="content-section section-wrap"><SectionHeading kicker="01 / SELECTED WORK" title="FEATURED PROJECTS" text="A selection of product and engineering work." />
          <div className="quest-grid">{quests.map((quest, i) => <motion.article className={`quest-card bg-gradient-to-br ${quest.color}`} key={quest.title} whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }} transition={{ type: "spring", stiffness: 300 }}><div className="quest-icon"><Terminal /></div><span className="quest-type">{quest.type}</span><h3>{quest.title}</h3><p>{quest.text}</p><div className="tag-row">{quest.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="card-link">VIEW PROJECT <ArrowUpRight /></a></motion.article>)}</div>
        </section>

        <section id="skills" className="content-section section-wrap split-section"><div><SectionHeading kicker="02 / EXPERTISE" title="TECHNICAL STRENGTHS" text="Tools and practices I use to ship thoughtful digital products." /><div className="skill-list">{skills.map(skill => <div className="skill-row" key={skill.name}><div className="skill-meta"><span>{skill.name}</span><small>{skill.level}</small></div><div className="bar"><motion.div className={skill.color} initial={{ width: 0 }} whileInView={{ width: `${skill.value}%` }} viewport={{ once: true }} transition={{ duration: 1 }} /></div></div>)}</div></div><div className="terminal-card"><div className="terminal-top"><span /><span /><span /><b>nizar@portfolio:~</b></div><div className="terminal-body"><p><em>const</em> developer = {'{'}</p><p className="indent">name: <strong>&quot;Nizar Fazari&quot;</strong>,</p><p className="indent">role: <strong>&quot;Software Engineer&quot;</strong>,</p><p className="indent">superpower: <strong>&quot;Making ideas work&quot;</strong>,</p><p className="indent">status: <strong className="green">&quot;always learning&quot;</strong></p><p>{'}'}</p><p className="cursor-line">$ <span>_</span></p></div></div></section>

        <section id="experience" className="content-section section-wrap"><SectionHeading kicker="03 / EXPERIENCE" title="CAREER TIMELINE" text="A focused record of the work and lessons behind each chapter." /><div className="timeline">{timeline.map((item, i) => <div className="timeline-item" key={item[0]}><div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div><div><span className="timeline-date">{item[0]}</span><h3>{item[1]}</h3><strong>{item[2]}</strong><p>{item[3]}</p></div></div>)}</div></section>

        <section className="content-section section-wrap"><SectionHeading kicker="04 / WORKING PRINCIPLES" title="HOW I BUILD" text="The habits that guide my work from first idea to release." /><div className="achievement-grid">{achievements.map((achievement) => <article className="achievement-card" key={achievement.title}><div className="achievement-icon">{achievement.icon}</div><div><h3>{achievement.title}</h3><p>{achievement.text}</p></div></article>)}</div></section>

        <section id="notes" className="content-section section-wrap"><SectionHeading kicker="05 / NOTES" title="FROM THE WORKBENCH" text="Short thoughts on building products, systems, and better developer habits." /><div className="article-grid">{articles.map((article) => <article className="article-card" key={article.title}><FileText className="article-icon" /><span>{article.date}</span><h3>{article.title}</h3><p>{article.text}</p><a href="#contact" className="card-link">READ NOTE <ArrowUpRight /></a></article>)}</div></section>

        <section id="contact" className="contact-section section-wrap"><div className="contact-card"><div><span className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL</span><h2>HAVE A PROJECT<br /><span>IN MIND?</span></h2><p>I&apos;m always open to discussing thoughtful products, collaborative teams, and meaningful engineering challenges.</p></div><div className="contact-actions"><a href="mailto:hello@nizar.dev" className="pixel-button primary">START A CONVERSATION <Mail /></a><a href="/Nizar-Fazari-Resume.pdf" className="resume-link" download>DOWNLOAD RESUME <Download /></a></div></div></section>
      </main>

      <footer className="footer section-wrap"><span>© 2025 NIZAR FAZARI / DESIGNED &amp; BUILT WITH CARE</span><div><a href="https://github.com/nizarfazari" target="_blank" rel="noreferrer" aria-label="Nizar Fazari on GitHub"><span className="social-monogram">GH</span></a><a href="https://www.linkedin.com/in/nizarfazari/" target="_blank" rel="noreferrer" aria-label="Nizar Fazari on LinkedIn"><span className="social-monogram">IN</span></a><a href="mailto:hello@nizar.dev" aria-label="Email Nizar Fazari"><Mail /></a><button onClick={() => setShowSecret(!showSecret)} aria-label="Open secret"><UserRound /></button></div>{showSecret && <span className="secret">YOU FOUND THE HIDDEN CHEST.</span>}</footer>
    </div>
  )
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="stat"><div className="stat-icon">{icon}</div><div><strong>{value}</strong><span>{label}</span></div></div> }
function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text: string }) { return <div className="section-heading"><span className="eyebrow">{kicker}</span><h2>{title}</h2><p>{text}</p></div> }
