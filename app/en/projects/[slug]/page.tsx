import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, BriefcaseBusiness, Code2, ExternalLink, Wrench } from "lucide-react"
import { notFound } from "next/navigation"
import { getPortfolioContent } from "@/components/portfolio/data"

const content = getPortfolioContent("en")

export function generateStaticParams() {
  return Object.keys(content.projectCaseStudies).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = content.projectCaseStudies[slug]
    return { title: project?.title ?? "Project" }
  })
}

export default async function EnglishProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = content.projectCaseStudies[slug]
  const projectCard = content.projects.find((item) => item.id === slug)
  if (!project || !projectCard) notFound()

  return <main className="project-page" lang="en">
    <section className="section-wrap project-page-content">
      <Link className="project-back" href="/en?view=projects"><ArrowLeft /> BACK TO PROJECTS</Link>
      <header className="project-hero">
        <span>PROJECT / CASE STUDY</span>
        <h1>{project.title}</h1>
        <p>{project.overview}</p>
        <div className="project-meta"><span><BriefcaseBusiness /> {project.subtitle}</span><span><Code2 /> {projectCard.status}</span></div>
      </header>
      <article className="project-case-study">
        <div className="project-case-heading"><span>CONTRIBUTION</span><h2>My Role and Approach</h2></div>
        <div className="project-case-grid">
          <section><h3>KEY CONTRIBUTIONS</h3><ul>{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul></section>
          <aside><h3><Wrench /> TECH STACK</h3><div className="tech-pills">{projectCard.tech.map((technology) => <span key={technology}>{technology}</span>)}</div></aside>
        </div>
        {project.features && <section className="project-features"><h3>KEY FEATURES</h3><div>{project.features.map((feature) => <span key={feature}>{feature}</span>)}</div></section>}
        <section className="project-approach"><h3>APPROACH</h3><p>{project.approach}</p></section>
        {project.roadmap && <section className="project-roadmap"><header>{project.roadmap.label && <span>{project.roadmap.label}</span>}<h3>{project.roadmap.title}</h3><p>{project.roadmap.text}</p></header><ul>{project.roadmap.items.map((item) => <li key={item}>{item}</li>)}</ul></section>}
        {(project.liveUrl || project.prdUrl || project.documentationUrl) && <section className="project-links" aria-label="Project links">
          <h3>PROJECT LINKS</h3>
          <div>
            {project.liveUrl && <a className="project-link primary" href={project.liveUrl} target="_blank" rel="noreferrer"><span>LIVE APPLICATION</span><strong>Open application <ExternalLink /></strong></a>}
            {project.prdUrl && <a className="project-link" href={project.prdUrl} target="_blank" rel="noreferrer"><span>PRODUCT REQUIREMENTS</span><strong>Open PRD <ExternalLink /></strong></a>}
            {project.documentationUrl && <a className="project-link" href={project.documentationUrl} target="_blank" rel="noreferrer"><span>UX DOCUMENTATION & INTERVIEWS</span><strong>Open UX documentation <ExternalLink /></strong></a>}
          </div>
        </section>}
      </article>
    </section>
  </main>
}
