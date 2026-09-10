"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Code2, Link2, Mail, Moon, Sparkles, Sun, Terminal, Trophy, UserRound, Zap } from "lucide-react"

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
  ["2023 — NOW", "Senior Frontend Engineer", "Pixel & Co.", "Leading product UI and design systems for a small, sharp team."],
  ["2021 — 2023", "Product Engineer", "Northstar Labs", "Built thoughtful tools for creative teams and shipped fast experiments."],
  ["2019 — 2021", "Frontend Developer", "Brightline", "Turned ambitious ideas into accessible, polished digital products."],
]

export function PixelPortfolio() {
  const [dark, setDark] = useState(true)
  const [showSecret, setShowSecret] = useState(false)

  return (
    <div className={dark ? "pixel-site dark" : "pixel-site light"}>
      <div className="scanlines" aria-hidden="true" />
      <nav className="top-nav">
        <a href="#top" className="brand" aria-label="Pixel portfolio home"><span className="brand-mark">◆</span> ALEX<span className="brand-muted">.DEV</span></a>
        <div className="nav-links"><a href="#quests">QUESTS</a><a href="#skills">SKILLS</a><a href="#journey">JOURNEY</a><a href="#contact">CONTACT</a></div>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun /> : <Moon />}<span>{dark ? "DAY MODE" : "NIGHT MODE"}</span></button>
      </nav>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR NEW QUESTS</div>
            <h1>BUILDING<br /><span>WORLDS</span><br />ONE <i>PIXEL</i><br />AT A TIME.</h1>
            <p className="hero-sub">I&apos;m Alex Morgan, a product-minded developer crafting vibrant digital experiences where thoughtful code meets playful design.</p>
            <div className="hero-actions"><a href="#quests" className="pixel-button primary">VIEW MY QUESTS <ArrowDown /></a><a href="#contact" className="pixel-button secondary">SAY HELLO <ArrowUpRight /></a></div>
          </div>
          <motion.div className="hero-art" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="level-badge"><span>LVL</span><strong>07</strong></div>
            <motion.div className="sprite-frame" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}><img src="/pixel-hero.png" alt="Pixel art avatar of Alex Morgan" /></motion.div>
            <div className="speech-bubble">WELCOME, TRAVELER.<br /><span>LET&apos;S MAKE SOMETHING GREAT.</span></div>
            <div className="hero-ground" />
          </motion.div>
        </section>

        <section className="stats-bar section-wrap" aria-label="Developer stats"><Stat icon={<Code2 />} label="LINES SHIPPED" value="128K+" /><Stat icon={<Trophy />} label="QUESTS COMPLETE" value="42" /><Stat icon={<Zap />} label="COFFEE POWERED" value="∞" /><Stat icon={<Sparkles />} label="BUGS DEFEATED" value="999+" /></section>

        <section id="quests" className="content-section section-wrap"><SectionHeading kicker="01 / SELECTED WORK" title="QUEST LOG" text="A few favorite adventures from the journey so far." />
          <div className="quest-grid">{quests.map((quest, i) => <motion.article className={`quest-card bg-gradient-to-br ${quest.color}`} key={quest.title} whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }} transition={{ type: "spring", stiffness: 300 }}><div className="quest-icon"><Terminal /></div><span className="quest-type">{quest.type}</span><h3>{quest.title}</h3><p>{quest.text}</p><div className="tag-row">{quest.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="card-link">EXPLORE QUEST <ArrowUpRight /></a></motion.article>)}</div>
        </section>

        <section id="skills" className="content-section section-wrap split-section"><div><SectionHeading kicker="02 / LOADOUT" title="SKILL TREE" text="Tools I reach for when the path gets interesting." /><div className="skill-list">{skills.map(skill => <div className="skill-row" key={skill.name}><div className="skill-meta"><span>{skill.name}</span><small>{skill.level}</small></div><div className="bar"><motion.div className={skill.color} initial={{ width: 0 }} whileInView={{ width: `${skill.value}%` }} viewport={{ once: true }} transition={{ duration: 1 }} /></div></div>)}</div></div><div className="terminal-card"><div className="terminal-top"><span /><span /><span /><b>alex@portfolio:~</b></div><div className="terminal-body"><p><em>const</em> developer = {'{'}</p><p className="indent">name: <strong>&quot;Alex Morgan&quot;</strong>,</p><p className="indent">role: <strong>&quot;Product Engineer&quot;</strong>,</p><p className="indent">superpower: <strong>&quot;Making ideas click&quot;</strong>,</p><p className="indent">status: <strong className="green">&quot;always learning&quot;</strong></p><p>{'}'}</p><p className="cursor-line">$ <span>_</span></p></div></div></section>

        <section id="journey" className="content-section section-wrap"><SectionHeading kicker="03 / SAVE FILE" title="THE JOURNEY" text="Every level teaches you something new." /><div className="timeline">{timeline.map((item, i) => <div className="timeline-item" key={item[0]}><div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div><div><span className="timeline-date">{item[0]}</span><h3>{item[1]}</h3><strong>{item[2]}</strong><p>{item[3]}</p></div></div>)}</div></section>

        <section id="contact" className="contact-section section-wrap"><div className="contact-card"><div><span className="eyebrow">FINAL BOSS: THE BLANK PAGE</span><h2>HAVE A QUEST<br /><span>IN MIND?</span></h2><p>Good things happen when curious people team up. Drop me a line and let&apos;s build a world worth exploring.</p></div><a href="mailto:hello@alex.dev" className="pixel-button primary">START A CONVERSATION <Mail /></a></div></section>
      </main>

      <footer className="footer section-wrap"><span>© 2024 ALEX MORGAN / BUILT WITH CURIOSITY</span><div><a href="#top" aria-label="GitHub profile"><Link2 /></a><a href="#top" aria-label="LinkedIn profile"><Link2 /></a><button onClick={() => setShowSecret(!showSecret)} aria-label="Open secret"><UserRound /></button></div>{showSecret && <span className="secret">YOU FOUND THE HIDDEN CHEST.</span>}</footer>
    </div>
  )
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="stat"><div className="stat-icon">{icon}</div><div><strong>{value}</strong><span>{label}</span></div></div> }
function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text: string }) { return <div className="section-heading"><span className="eyebrow">{kicker}</span><h2>{title}</h2><p>{text}</p></div> }
