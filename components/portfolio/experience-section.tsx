import { timeline } from "./data"
import { Heading } from "./shared"

export function ExperienceSection() {
  return <section className="section-wrap content-section view-section">
    <Heading kicker="COMMUNITY BULLETIN BOARD" title="GUILD CONTRACTS" text="A focused record of the work and lessons behind each chapter." />
    <div className="bulletin-board">{timeline.map(([year, role, organization, text]) => <article className="contract" key={year}>
      <span className="push-pin" /><small>{year}</small><h3>{role}</h3><strong>{organization}</strong><p>{text}</p>
    </article>)}</div>
  </section>
}
