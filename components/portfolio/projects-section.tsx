"use client"

import { useState } from "react"
import { ArrowUpRight, Code2 } from "lucide-react"
import { projects } from "./data"
import { Heading } from "./shared"

const INITIAL_PROJECT_COUNT = 4

export function ProjectsSection() {
  const [visibleProjectCount, setVisibleProjectCount] = useState(INITIAL_PROJECT_COUNT)
  const visibleProjects = projects.slice(0, visibleProjectCount)
  const hasMoreProjects = visibleProjectCount < projects.length

  return <section className="section-wrap content-section view-section">
    <Heading kicker="SELECTED WORK" title="PROJECTS" text="Selected personal, freelance, bootcamp, and professional contributions." />
    <div className="quest-board">{visibleProjects.map((project) => <article className="quest-card" key={project.name}>
      <div className="quest-preview"><Code2 /><span>PROJECT PREVIEW</span></div>
      <div className="quest-content">
        <span className="quest-type">{project.type}</span>
        <span className={project.status.startsWith("IN") ? "quest-status active" : "quest-status"}>{project.status}</span>
        <h3>{project.name}</h3><p>{project.text}</p>
        <div className="tech-pills">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="quest-footer"><small>ROLE: {project.reward}</small>{project.url ? <a href={project.url} target="_blank" rel="noreferrer">{project.linkLabel ?? "VISIT WEBSITE"} <ArrowUpRight /></a> : <a href="#contact">ASK ABOUT PROJECT <ArrowUpRight /></a>}</div>
      </div>
    </article>)}</div>
    {hasMoreProjects && <div className="projects-load-more"><button type="button" className="rpg-button primary" onClick={() => setVisibleProjectCount(projects.length)}>LOAD MORE PROJECTS</button></div>}
  </section>
}
