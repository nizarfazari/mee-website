import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, BriefcaseBusiness, Code2, Wrench } from "lucide-react"
import { notFound } from "next/navigation"
import { getPortfolioContent } from "@/components/portfolio/data"

const content = getPortfolioContent("id")

export function generateStaticParams() {
  return Object.keys(content.projectCaseStudies).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = content.projectCaseStudies[slug]
    return { title: project?.title ?? "Project" }
  })
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = content.projectCaseStudies[slug]
  const projectCard = content.projects.find((item) => item.id === slug)
  if (!project || !projectCard) notFound()

  return <main className="project-page">
    <section className="section-wrap project-page-content">
      <Link className="project-back" href="/?view=projects"><ArrowLeft /> KEMBALI KE PROYEK</Link>
      <header className="project-hero">
        <span>PROJECT / CASE STUDY</span>
        <h1>{project.title}</h1>
        <p>{project.overview}</p>
        <div className="project-meta"><span><BriefcaseBusiness /> {project.subtitle}</span><span><Code2 /> {projectCard.status}</span></div>
      </header>
      <article className="project-case-study">
        <div className="project-case-heading"><span>KONTRIBUSI</span><h2>Peran dan Pendekatan Saya</h2></div>
        <div className="project-case-grid">
          <section><h3>KONTRIBUSI UTAMA</h3><ul>{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul></section>
          <aside><h3><Wrench /> TECH STACK</h3><div className="tech-pills">{projectCard.tech.map((technology) => <span key={technology}>{technology}</span>)}</div></aside>
        </div>
        <section className="project-approach"><h3>PENDEKATAN</h3><p>{project.approach}</p></section>
      </article>
    </section>
  </main>
}
