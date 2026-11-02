import { BriefcaseBusiness, Code2, GraduationCap, MapPin } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

type HomeSectionProps = {
  onNavigate: (view: string) => void
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  return <>
    <HeroSection onNavigate={onNavigate} />
    <section className="professional-overview section-wrap" aria-label="Professional overview">
      <article className="overview-card"><BriefcaseBusiness /><div><span>CURRENT ROLE</span><b>Fullstack Developer</b><small>PT Golden Digital Solution</small></div></article>
      <article className="overview-card"><Code2 /><div><span>CORE STACK</span><b>Golang · PostgreSQL</b><small>React · Next.js · Nuxt.js · REST API</small></div></article>
      <article className="overview-card"><GraduationCap /><div><span>EDUCATION</span><b>S1 Sistem Informasi</b><small>Universitas AMIKOM Yogyakarta · GPA 3.94</small></div></article>
      <article className="overview-card"><MapPin /><div><span>LOCATION</span><b>Indonesia · GMT+7</b><small>Bahasa Indonesia · English (Intermediate)</small></div></article>
    </section>
  </>
}
