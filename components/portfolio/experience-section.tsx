import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Experience, Locale } from "./data"
import { Heading } from "./shared"

export function ExperienceSection({ locale, timeline }: { locale: Locale; timeline: Experience[] }) {
  const isEnglish = locale === "en"
  return <section className="section-wrap content-section view-section">
    <Heading kicker={isEnglish ? "CAREER HISTORY" : "RIWAYAT KARIER"} title={isEnglish ? "WORK EXPERIENCE" : "PENGALAMAN KERJA"} text={isEnglish ? "Work experience and contributions, ordered from most recent." : "Pengalaman kerja dan kontribusi di setiap proyek, diurutkan dari yang terbaru."} />
    <div className="experience-timeline">{timeline.map((experience) => <Link className="experience-timeline-item" href={`${isEnglish ? "/en" : ""}/experience/${experience.id}`} key={experience.id} aria-label={isEnglish ? `View details for ${experience.role} at ${experience.organization}` : `Lihat detail pengalaman ${experience.role} di ${experience.organization}`}>
      <time className="timeline-date">{experience.period}</time>
      <article className="timeline-card">
        <span className="timeline-dot" aria-hidden="true" />
        <span className="timeline-card-label">{experience.project}</span><h3>{experience.role}</h3><strong>{experience.organization}</strong><p>{experience.summary}</p>
        <span className="contract-detail-button">{isEnglish ? "VIEW DETAILS" : "LIHAT DETAIL"} <ArrowUpRight /></span>
      </article>
    </Link>)}</div>
  </section>
}
