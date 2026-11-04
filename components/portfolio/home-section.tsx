import { BriefcaseBusiness, Code2, GraduationCap, MapPin } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import type { Locale } from "./data"

type HomeSectionProps = {
  locale: Locale
  onNavigate: (view: string) => void
}

export function HomeSection({ locale, onNavigate }: HomeSectionProps) {
  const isEnglish = locale === "en"
  return <>
    <HeroSection locale={locale} onNavigate={onNavigate} />
    <section className="professional-overview section-wrap" aria-label={isEnglish ? "Professional overview" : "Ringkasan profesional"}>
      <article className="overview-card"><BriefcaseBusiness /><div><span>{isEnglish ? "CURRENT ROLE" : "POSISI SAAT INI"}</span><b>Fullstack Developer</b><small>PT Golden Digital Solution</small></div></article>
      <article className="overview-card"><Code2 /><div><span>{isEnglish ? "CORE STACK" : "TEKNOLOGI UTAMA"}</span><b>Golang · PostgreSQL</b><small>React · Next.js · Nuxt.js · REST API</small></div></article>
      <article className="overview-card"><GraduationCap /><div><span>{isEnglish ? "EDUCATION" : "PENDIDIKAN"}</span><b>{isEnglish ? "BSc Information Systems" : "S1 Sistem Informasi"}</b><small>Universitas AMIKOM Yogyakarta · GPA 3.94</small></div></article>
      <article className="overview-card"><MapPin /><div><span>{isEnglish ? "LOCATION" : "LOKASI"}</span><b>Indonesia · GMT+7</b><small>{isEnglish ? "Indonesian · English (Intermediate)" : "Bahasa Indonesia · English (Intermediate)"}</small></div></article>
    </section>
  </>
}
