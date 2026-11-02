import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, BriefcaseBusiness, CalendarDays, Wrench } from "lucide-react"
import { notFound } from "next/navigation"
import { timeline } from "@/components/portfolio/data"

export function generateStaticParams() {
  return timeline.map(({ id }) => ({ slug: id }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const experience = timeline.find((item) => item.id === slug)
    return { title: experience ? `${experience.role} — ${experience.organization}` : "Experience" }
  })
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const experience = timeline.find((item) => item.id === slug)
  if (!experience) notFound()

  return <main className="experience-page">
    <section className="section-wrap experience-page-content">
      <Link className="experience-back" href="/?view=experience"><ArrowLeft /> BACK TO EXPERIENCE</Link>
      <header className="experience-hero">
        <span>WORK EXPERIENCE / DETAILS</span>
        <h1>{experience.role}</h1>
        <p>{experience.summary}</p>
        <div className="experience-meta"><span><BriefcaseBusiness /> {experience.organization}</span><span><CalendarDays /> {experience.period}</span></div>
      </header>
      <article className="experience-case-study">
        <div className="experience-case-heading"><span>PROJECT / CONTRIBUTION</span><h2>{experience.project}</h2></div>
        <div className={`experience-case-grid${experience.technologies.length ? "" : " no-tech"}`}>
          <section><h3>TANGGUNG JAWAB</h3><ul>{experience.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul></section>
          {experience.technologies.length > 0 && <aside><h3><Wrench /> TECH STACK</h3><div className="tech-pills">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></aside>}
        </div>
      </article>
    </section>
  </main>
}
