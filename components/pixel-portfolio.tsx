"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2, Download, Send, Star } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

const inventorySkills = [
  { code: "TS", name: "TypeScript", level: 10, group: "Frontend", description: "Typed JavaScript for scalable, maintainable applications." },
  { code: "JS", name: "JavaScript", level: 9, group: "Frontend", description: "The foundation for interactive experiences on the web." },
  { code: "RX", name: "React", level: 9, group: "Frontend", description: "Component-driven interfaces built with care." },
  { code: "NX", name: "Next.js", level: 8, group: "Frontend", description: "Production-ready React applications and full-stack delivery." },
  { code: "ND", name: "Node.js", level: 8, group: "Backend", description: "Reliable services, APIs, and developer tooling." },
  { code: "GO", name: "Golang", level: 6, group: "Backend", description: "Pragmatic backend services where performance matters." },
  { code: "SQL", name: "SQL", level: 8, group: "Data", description: "Clear data models and query patterns." },
  { code: "PG", name: "PostgreSQL", level: 8, group: "Data", description: "Dependable relational data for product systems." },
  { code: "RD", name: "Redis", level: 6, group: "Data", description: "Fast caching and lightweight data workflows." },
  { code: "DK", name: "Docker", level: 7, group: "Infrastructure", description: "Repeatable environments from local work to deployment." },
  { code: "LN", name: "Linux", level: 7, group: "Infrastructure", description: "Comfortable working close to the systems that run products." },
  { code: "GT", name: "Git", level: 9, group: "Workflow", description: "Collaborative version control and careful release habits." },
]
const projects = [
  { name: "Marketly Commerce", type: "LEGENDARY CONTRACT", status: "COMPLETED ★★★", text: "A fast, story-led commerce experience designed for simple, confident checkout journeys.", tech: ["Next.js", "Stripe", "Postgres"], reward: "12,000G · 450 EXP" },
  { name: "Signal Dashboard", type: "TOWN CONTRACT", status: "COMPLETED ★★★", text: "An observability workspace that turns noisy product data into clear next actions.", tech: ["React", "Tailwind", "D3.js"], reward: "9,500G · 360 EXP" },
  { name: "Field Notes", type: "ACTIVE BOUNTY", status: "IN PROGRESS · 85%", text: "A calm, collaborative writing space for teams that need clarity and momentum.", tech: ["TypeScript", "Supabase", "Motion"], reward: "7,200G · 280 EXP" },
  { name: "Village Ledger", type: "TOWN CONTRACT", status: "COMPLETED ★★★", text: "A dependable internal tool for tracking operational work without unnecessary complexity.", tech: ["Node.js", "REST API", "Postgres"], reward: "8,800G · 320 EXP" },
]
const timeline = [
  ["YEAR 4 · PRESENT", "Full-stack Engineer", "Independent Builder", "Building reliable interfaces, APIs, and developer-friendly systems."],
  ["YEAR 2–3", "Product Engineer", "Web Platforms", "Turned ambitious product ideas into accessible, polished experiences."],
  ["YEAR 1", "Frontend Developer", "Digital Products", "Learned to make complex interactions feel simple, fast, and useful."],
]
const navigationItems = [
  { id: "top", label: "HOME" },
  { id: "projects", label: "QUESTS" },
  { id: "skills", label: "BAG" },
  { id: "experience", label: "BOARD" },
  { id: "contact", label: "MAIL" },
]

const notes = [
  ["ENGINEERING NOTES", "Designing interfaces that make complex work feel simple"],
  ["SYSTEMS", "What I look for before shipping a new feature"],
  ["CAREER", "Building a developer workflow that leaves room to think"],
]

export function PixelPortfolio() {
  const [sent, setSent] = useState(false)
  const [selectedSkill, setSelectedSkill] = useState(inventorySkills[0])
  const [activeSection, setActiveSection] = useState("top")
  const navigateRelative = (direction: number) => {
    const currentIndex = navigationItems.findIndex((item) => item.id === activeSection)
    const nextIndex = (currentIndex + direction + navigationItems.length) % navigationItems.length
    setActiveSection(navigationItems[nextIndex].id)
  }

  return <div className={`meadow-site view-${activeSection}`}>
    <div className="side-scenery" aria-hidden="true"><span className="scenery-tree scenery-left" /><span className="scenery-fence" /><span className="scenery-bush scenery-left-bush" /><span className="scenery-tree scenery-right" /><span className="scenery-mailbox" /><span className="scenery-bush scenery-right-bush" /><span className="scenery-board" /><span className="scenery-chest" /><span className="scenery-lamp" /></div>
    <main className="spa-main">
      <div className="spa-view" key={activeSection}>
      {activeSection === "top" && <><HeroSection onNavigate={setActiveSection} />
      <section className="player-hud section-wrap" aria-label="Professional stats"><Meter label="HEALTH / RELIABILITY" value="92" color="health" /><Meter label="ENERGY / DELIVERY" value="86" color="energy" /><Meter label="MANA / FOCUS" value="88" color="mana" /><div className="gold-slot"><Star /> <b>AVAILABLE</b><small>FOR COLLABORATION</small></div></section></>}
      {activeSection === "projects" && <section className="section-wrap content-section view-section"><Heading kicker="QUEST LOG / SELECTED WORK" title="THE TOWN'S NOTICE BOARD" text="A selection of product and engineering work." /><div className="quest-board">{projects.map(project => <article className="quest-card" key={project.name}><div className="quest-preview"><Code2 /><span>PROJECT PREVIEW</span></div><div className="quest-content"><span className="quest-type">{project.type}</span><span className={project.status.startsWith("IN") ? "quest-status active" : "quest-status"}>{project.status}</span><h3>{project.name}</h3><p>{project.text}</p><div className="tech-pills">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div><div className="quest-footer"><small>REWARD: {project.reward}</small><a href="#contact">VIEW CASE STUDY <ArrowUpRight /></a></div></div></article>)}</div></section>}
      {activeSection === "skills" && <section className="section-wrap content-section view-section"><Heading kicker="BACKPACK / TOOL SHED" title="MY INVENTORY" text="Tools I reach for when building useful digital products." /><div className="inventory-layout"><div><div className="inventory-label"><span>BACKPACK CAPACITY</span><b>{inventorySkills.length} / 36 ITEMS</b></div><div className="inventory-grid" role="list" aria-label="Technical skills inventory">{Array.from({ length: 36 }, (_, index) => { const skill = inventorySkills[index]; return skill ? <button type="button" role="listitem" aria-pressed={selectedSkill.code === skill.code} className={`inventory-slot filled ${skill.group.toLowerCase()}${selectedSkill.code === skill.code ? " selected" : ""}`} key={skill.code} onClick={() => setSelectedSkill(skill)}><b>{skill.code}</b><small>L{skill.level}</small><span className="sr-only">{skill.name}, level {skill.level}</span></button> : <span className="inventory-slot" role="listitem" aria-label="Empty inventory slot" key={index} /> })}</div></div><aside className="item-tooltip" aria-live="polite"><span>ITEM INSPECT</span><div className="item-heading"><h3>{selectedSkill.name}</h3><b>LV {selectedSkill.level}</b></div><small className="item-group">{selectedSkill.group} TOOL</small><p>{selectedSkill.description}</p><div className="item-meter"><span>PROFICIENCY</span><i><em style={{ width: `${selectedSkill.level * 10}%` }} /></i></div><small className="tooltip-hint">SELECT AN ITEM TO INSPECT</small></aside></div></section>}
      {activeSection === "experience" && <section className="section-wrap content-section view-section"><Heading kicker="COMMUNITY BULLETIN BOARD" title="GUILD CONTRACTS" text="A focused record of the work and lessons behind each chapter." /><div className="bulletin-board">{timeline.map(([year, role, org, text]) => <article className="contract" key={year}><span className="push-pin" /><small>{year}</small><h3>{role}</h3><strong>{org}</strong><p>{text}</p></article>)}</div></section>}
      {activeSection === "notes" && <section className="section-wrap content-section view-section"><Heading kicker="JOURNAL DESK" title="FIELD NOTES" text="Short thoughts on building products, systems, and better developer habits." /><div className="notes-grid">{notes.map(([type, title]) => <article className="note" key={title}><span>{type}</span><h3>{title}</h3><p>A short note from the workshop, written for thoughtful builders.</p><a href="#contact">READ NOTE <ArrowUpRight /></a></article>)}</div></section>}
      {activeSection === "contact" && <section className="section-wrap contact-section view-section"><div className="mailbox"><div><span className="stamp">POSTAGE PRE-PAID</span><Heading kicker="HOMESTEAD MAILBOX" title="SEND A LETTER" text="Have a project in mind? Let’s build something useful together." /></div><form onSubmit={event => { event.preventDefault(); setSent(true) }}><label>YOUR NAME<input required name="name" placeholder="Name" /></label><label>YOUR EMAIL<input required type="email" name="email" placeholder="you@example.com" /></label><label>YOUR MESSAGE<textarea required name="message" rows={4} placeholder="Tell me about your project..." /></label><button className="rpg-button primary" type="submit">SEND VIA CARRIER PIGEON <Send /></button>{sent && <p className="form-success">LETTER SENT! I&apos;LL REPLY SOON.</p>}</form></div><div className="contact-links"><a href="https://github.com/nizarfazari" target="_blank" rel="noreferrer">GITHUB</a><a href="https://www.linkedin.com/in/nizarfazari/" target="_blank" rel="noreferrer">LINKEDIN</a><a href="mailto:hello@nizar.dev">EMAIL</a><a className="resume-link" href="/Nizar-Fazari-Resume.pdf" download>DOWNLOAD RESUME <Download /></a></div><small className="contact-credit">© 2025 NIZAR FAZARI · BUILT WITH CARE.</small></section>}
      </div>
    </main>
    <nav className="gameboy-nav" aria-label="Primary navigation"><button type="button" className="gameboy-side-button" onClick={() => navigateRelative(-1)} aria-label="Open previous view"><ChevronLeft /></button><div className="gameboy-tabs">{navigationItems.map((item) => <button type="button" key={item.id} onClick={() => setActiveSection(item.id)} className={activeSection === item.id ? "active" : ""} aria-current={activeSection === item.id ? "page" : undefined}>{item.label}</button>)}</div><button type="button" className="gameboy-side-button" onClick={() => navigateRelative(1)} aria-label="Open next view"><ChevronRight /></button></nav>
  </div>
}
function Heading({ kicker, title, text }: { kicker: string; title: string; text: string }) { return <div className="heading"><span>{kicker}</span><h2>{title}</h2><p>{text}</p></div> }
function Meter({ label, value, color }: { label: string; value: string; color: string }) { return <div className="meter"><div><span>{label}</span><b>{value}/100</b></div><i><em className={color} style={{ width: `${value}%` }} /></i></div> }
