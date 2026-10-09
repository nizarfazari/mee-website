"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Bug, Code2, Coffee, Link2, Mail, Moon, Sparkles, Sun, Terminal, Trophy, UserRound, Zap } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

const skills = [
  { name: "TypeScript", level: "MASTERED", value: 92, color: "bg-cyan-400" },
  { name: "React / Next.js", level: "MASTERED", value: 88, color: "bg-violet-400" },
  { name: "Node.js", level: "ADVANCED", value: 78, color: "bg-emerald-400" },
  { name: "UI Engineering", level: "ADVANCED", value: 84, color: "bg-orange-300" },
]

const quests = [
  { title: "Neon Commerce", type: "FULL-STACK QUEST", text: "A headless commerce experience built for speed, storytelling, and delightful checkouts.", tags: ["Next.js", "Stripe", "Postgres"], color: "from-cyan-500/30 to-violet-500/20" },
  { title: "Signal Dashboard", type: "UI SYSTEM QUEST", text: "An observability command center that turns noisy data into a clear next action.", tags: ["React", "Tailwind", "D3.js"], color: "from-orange-400/25 to-pink-500/20" },
  { title: "Campfire Notes", type: "SIDE QUEST", text: "A calm, collaborative writing space for teams who think better together.", tags: ["TypeScript", "Supabase", "Motion"], color: "from-emerald-400/25 to-cyan-500/20" },
]

const timeline = [
  ["2024 — NOW", "Full-stack quests", "Independent Builder", "Building reliable interfaces, APIs, and developer-friendly systems."],
  ["2022 — 2024", "Product engineering arc", "Web Platforms", "Turned ambitious product ideas into accessible, polished experiences."],
  ["2020 — 2022", "Frontend foundations", "Digital Products", "Learned to make complex interactions feel simple, fast, and useful."],
]

const achievements = [
  { icon: <Bug />, title: "BUG SLAYER", text: "Debugged more edge cases than expected." },
  { icon: <Zap />, title: "API SPEEDRUNNER", text: "Ships lean, useful backend endpoints." },
  { icon: <Code2 />, title: "PIXEL CRAFTER", text: "Turns ideas into thoughtful interfaces." },
  { icon: <Coffee />, title: "COFFEE POWERED", text: "Still curious after the last deploy." },
]

export function PixelPortfolio() {
  const [dark, setDark] = useState(true)
  const [showSecret, setShowSecret] = useState(false)

  return (
    <div className={dark ? "pixel-site dark" : "pixel-site light"}>
      <div className="scanlines" aria-hidden="true" />
      <nav className="top-nav">
        <a href="#top" className="brand" aria-label="Nizar Fazari portfolio home"><span className="brand-mark">◆</span> NIZAR<span className="brand-muted">.DEV</span></a>
        <div className="nav-links"><a href="#quests">QUESTS</a><a href="#skills">SKILLS</a><a href="#journey">JOURNEY</a><a href="#contact">CONTACT</a></div>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun /> : <Moon />}<span>{dark ? "DAY MODE" : "NIGHT MODE"}</span></button>
      </nav>

      <main id="top">
        <HeroSection />

        <section className="stats-bar section-wrap" aria-label="Developer stats"><Stat icon={<Code2 />} label="LINES SHIPPED" value="128K+" /><Stat icon={<Trophy />} label="QUESTS COMPLETE" value="42" /><Stat icon={<Zap />} label="COFFEE POWERED" value="∞" /><Stat icon={<Sparkles />} label="BUGS DEFEATED" value="999+" /></section>

        <section id="quests" className="content-section section-wrap"><SectionHeading kicker="01 / SELECTED WORK" title="QUEST LOG" text="A few favorite adventures from the journey so far." />
          <div className="quest-grid">{quests.map((quest, i) => <motion.article className={`quest-card bg-gradient-to-br ${quest.color}`} key={quest.title} whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }} transition={{ type: "spring", stiffness: 300 }}><div className="quest-icon"><Terminal /></div><span className="quest-type">{quest.type}</span><h3>{quest.title}</h3><p>{quest.text}</p><div className="tag-row">{quest.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="card-link">EXPLORE QUEST <ArrowUpRight /></a></motion.article>)}</div>
        </section>

        <section id="skills" className="content-section section-wrap split-section"><div><SectionHeading kicker="02 / LOADOUT" title="SKILL TREE" text="Tools I reach for when the path gets interesting." /><div className="skill-list">{skills.map(skill => <div className="skill-row" key={skill.name}><div className="skill-meta"><span>{skill.name}</span><small>{skill.level}</small></div><div className="bar"><motion.div className={skill.color} initial={{ width: 0 }} whileInView={{ width: `${skill.value}%` }} viewport={{ once: true }} transition={{ duration: 1 }} /></div></div>)}</div></div><div className="terminal-card"><div className="terminal-top"><span /><span /><span /><b>nizar@portfolio:~</b></div><div className="terminal-body"><p><em>const</em> developer = {'{'}</p><p className="indent">name: <strong>&quot;Nizar Fazari&quot;</strong>,</p><p className="indent">role: <strong>&quot;Software Engineer&quot;</strong>,</p><p className="indent">superpower: <strong>&quot;Making ideas work&quot;</strong>,</p><p className="indent">status: <strong className="green">&quot;always learning&quot;</strong></p><p>{'}'}</p><p className="cursor-line">$ <span>_</span></p></div></div></section>

        <section id="journey" className="content-section section-wrap"><SectionHeading kicker="03 / SAVE FILE" title="THE JOURNEY" text="Every level teaches you something new." /><div className="timeline">{timeline.map((item, i) => <div className="timeline-item" key={item[0]}><div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div><div><span className="timeline-date">{item[0]}</span><h3>{item[1]}</h3><strong>{item[2]}</strong><p>{item[3]}</p></div></div>)}</div></section>

        <section className="content-section section-wrap"><SectionHeading kicker="04 / TROPHY ROOM" title="ACHIEVEMENTS UNLOCKED" text="A few small wins collected along the way." /><div className="achievement-grid">{achievements.map((achievement) => <article className="achievement-card" key={achievement.title}><div className="achievement-icon">{achievement.icon}</div><div><h3>{achievement.title}</h3><p>{achievement.text}</p></div></article>)}</div></section>

        <section id="contact" className="contact-section section-wrap"><div className="contact-card"><div><span className="eyebrow">FINAL BOSS: THE BLANK PAGE</span><h2>HAVE A QUEST<br /><span>IN MIND?</span></h2><p>Good things happen when curious people team up. Drop me a line and let&apos;s build a world worth exploring.</p></div><a href="mailto:hello@alex.dev" className="pixel-button primary">START A CONVERSATION <Mail /></a></div></section>
      </main>

      <footer className="footer section-wrap"><span>© 2025 NIZAR FAZARI / BUILT WITH CURIOSITY</span><div><a href="#top" aria-label="GitHub profile"><Link2 /></a><a href="#top" aria-label="LinkedIn profile"><Link2 /></a><button onClick={() => setShowSecret(!showSecret)} aria-label="Open secret"><UserRound /></button></div>{showSecret && <span className="secret">YOU FOUND THE HIDDEN CHEST.</span>}</footer>
    </div>
  )
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="stat"><div className="stat-icon">{icon}</div><div><strong>{value}</strong><span>{label}</span></div></div> }
function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text: string }) { return <div className="section-heading"><span className="eyebrow">{kicker}</span><h2>{title}</h2><p>{text}</p></div> }
