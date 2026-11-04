"use client"

import Link from "next/link"
import { useState } from "react"
import { Code2 } from "lucide-react"
import type { Locale, Project, ProjectCaseStudy } from "./data"
import { Heading } from "./shared"

const INITIAL_PROJECT_COUNT = 4

export function ProjectsSection({ locale, projects, caseStudies }: { locale: Locale; projects: Project[]; caseStudies: Record<string, ProjectCaseStudy> }) {
  const [visibleProjectCount, setVisibleProjectCount] = useState(INITIAL_PROJECT_COUNT)
  const visibleProjects = projects.slice(0, visibleProjectCount)
  const hasMoreProjects = visibleProjectCount < projects.length
  const isEnglish = locale === "en"

  return <section className="section-wrap content-section view-section">
    <Heading kicker={isEnglish ? "SELECTED WORK" : "KARYA PILIHAN"} title={isEnglish ? "PROJECTS" : "PROYEK"} text={isEnglish ? "Selected personal, freelance, bootcamp, and professional contributions." : "Pilihan kontribusi personal, freelance, bootcamp, dan profesional."} />
    <div className="quest-board">{visibleProjects.map((project) => {
      const hasCaseStudy = Boolean(caseStudies[project.id])
      const content = <article className="quest-card">
        <div className="quest-preview"><Code2 /><span>{isEnglish ? "PROJECT PREVIEW" : "PRATINJAU PROYEK"}</span></div>
        <div className="quest-content">
          <span className="quest-type">{project.type}</span>
          <span className={project.status.startsWith("IN") ? "quest-status active" : "quest-status"}>{project.status}</span>
          <h3>{project.name}</h3><p>{project.text}</p>
          <div className="tech-pills">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
      </article>
      return hasCaseStudy ? <Link className="quest-card-link" href={`${isEnglish ? "/en" : ""}/projects/${project.id}`} key={project.id} aria-label={isEnglish ? `View ${project.name} case study` : `Lihat studi kasus ${project.name}`}>{content}</Link> : <div key={project.id}>{content}</div>
    })}</div>
    {hasMoreProjects && <div className="projects-load-more"><button type="button" className="rpg-button primary" onClick={() => setVisibleProjectCount(projects.length)}>{isEnglish ? "LOAD MORE PROJECTS" : "MUAT PROYEK LAIN"}</button></div>}
  </section>
}
