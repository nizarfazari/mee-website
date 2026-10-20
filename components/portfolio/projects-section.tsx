import { ArrowUpRight, Code2 } from "lucide-react"
import { projects } from "./data"
import { Heading } from "./shared"

export function ProjectsSection() {
  return <section className="section-wrap content-section view-section">
    <Heading kicker="QUEST LOG / SELECTED WORK" title="THE TOWN'S NOTICE BOARD" text="A selection of product and engineering work." />
    <div className="quest-board">{projects.map((project) => <article className="quest-card" key={project.name}>
      <div className="quest-preview"><Code2 /><span>PROJECT PREVIEW</span></div>
      <div className="quest-content">
        <span className="quest-type">{project.type}</span>
        <span className={project.status.startsWith("IN") ? "quest-status active" : "quest-status"}>{project.status}</span>
        <h3>{project.name}</h3><p>{project.text}</p>
        <div className="tech-pills">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="quest-footer"><small>REWARD: {project.reward}</small><a href="#contact">VIEW CASE STUDY <ArrowUpRight /></a></div>
      </div>
    </article>)}</div>
  </section>
}
