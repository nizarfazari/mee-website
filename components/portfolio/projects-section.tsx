"use client"

import { useState } from "react"
import { ArrowUpRight, Code2 } from "lucide-react"
import type { Locale, Project } from "./data"
import { Heading } from "./shared"

const INITIAL_PROJECT_COUNT = 4

export function ProjectsSection({ locale, projects }: { locale: Locale; projects: Project[] }) {
  const [visibleProjectCount, setVisibleProjectCount] = useState(INITIAL_PROJECT_COUNT)
  const visibleProjects = projects.slice(0, visibleProjectCount)
  const hasMoreProjects = visibleProjectCount < projects.length
  const isEnglish = locale === "en"

  return <section className="section-wrap content-section view-section">
    <Heading kicker={isEnglish ? "SELECTED WORK" : "KARYA PILIHAN"} title={isEnglish ? "PROJECTS" : "PROYEK"} text={isEnglish ? "Selected personal, freelance, bootcamp, and professional contributions." : "Pilihan kontribusi personal, freelance, bootcamp, dan profesional."} />
    <div className="quest-board">{visibleProjects.map((project) => <article className="quest-card" key={project.name}>
      <div className="quest-preview"><Code2 /><span>{isEnglish ? "PROJECT PREVIEW" : "PRATINJAU PROYEK"}</span></div>
      <div className="quest-content">
        <span className="quest-type">{project.type}</span>
        <span className={project.status.startsWith("IN") ? "quest-status active" : "quest-status"}>{project.status}</span>
        <h3>{project.name}</h3><p>{project.text}</p>
        <div className="tech-pills">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="quest-footer"><small>{isEnglish ? "ROLE" : "PERAN"}: {project.reward}</small>{project.url ? <a href={project.url} target="_blank" rel="noreferrer">{project.linkLabel ?? (isEnglish ? "VISIT WEBSITE" : "KUNJUNGI WEBSITE")} <ArrowUpRight /></a> : <a href="#contact">{isEnglish ? "ASK ABOUT PROJECT" : "TANYAKAN PROYEK"} <ArrowUpRight /></a>}</div>
      </div>
    </article>)}</div>
    {hasMoreProjects && <div className="projects-load-more"><button type="button" className="rpg-button primary" onClick={() => setVisibleProjectCount(projects.length)}>{isEnglish ? "LOAD MORE PROJECTS" : "MUAT PROYEK LAIN"}</button></div>}
  </section>
}
