import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { timeline } from "./data"
import { Heading } from "./shared"

export function ExperienceSection() {
  return <section className="section-wrap content-section view-section">
    <Heading kicker="CAREER HISTORY" title="WORK EXPERIENCE" text="Pengalaman kerja dan kontribusi di setiap proyek, diurutkan dari yang terbaru." />
    <div className="experience-timeline">{timeline.map((experience) => <Link className="experience-timeline-item" href={`/experience/${experience.id}`} key={experience.id} aria-label={`Lihat detail pengalaman ${experience.role} di ${experience.organization}`}>
      <time className="timeline-date">{experience.period}</time>
      <article className="timeline-card">
        <span className="timeline-dot" aria-hidden="true" />
        <span className="timeline-card-label">{experience.project}</span><h3>{experience.role}</h3><strong>{experience.organization}</strong><p>{experience.summary}</p>
        <span className="contract-detail-button">VIEW DETAILS <ArrowUpRight /></span>
      </article>
    </Link>)}</div>
  </section>
}
