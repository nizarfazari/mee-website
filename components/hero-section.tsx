import Image from "next/image"
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Download, Mail, MapPin } from "lucide-react"
import type { Locale } from "@/components/portfolio/data"

export function HeroSection({ onNavigate, locale }: { onNavigate: (view: string) => void; locale: Locale }) {
  const isEnglish = locale === "en"
  const copy = isEnglish ? {
    role: "FULLSTACK DEVELOPER", building: "BUILDING WEB APPLICATIONS", intro: "Fullstack Developer building end-to-end web applications, from APIs and databases to user interfaces.", current: "CURRENT ROLE", company: "Fullstack Developer · PT Golden Digital Solution", experience: "VIEW EXPERIENCE", contact: "CONTACT ME", resume: "DOWNLOAD RESUME", location: "Indonesia · GMT+7", stack: "Golang · PostgreSQL · React · Nuxt.js",
  } : {
    role: "FULLSTACK DEVELOPER", building: "MEMBANGUN APLIKASI WEB", intro: "Fullstack Developer yang membangun aplikasi web end-to-end, dari API dan database hingga antarmuka pengguna.", current: "POSISI SAAT INI", company: "Fullstack Developer · PT Golden Digital Solution", experience: "LIHAT PENGALAMAN", contact: "HUBUNGI SAYA", resume: "UNDUH CV", location: "Indonesia · GMT+7", stack: "Golang · PostgreSQL · React · Nuxt.js",
  }
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-scene" aria-hidden="true">
        <span className="scene-cloud cloud-one" /><span className="scene-cloud cloud-two" />
        <div className="hero-plaque"><span>{copy.role}</span><b>NIZAR FAZARI</b><small>{copy.building}</small></div>
        <span className="scene-tree tree-one" /><span className="scene-tree tree-two" />
        <span className="scene-cabin"><i /><b /></span>
        <span className="scene-path" />
      </div>
      <div className="dialogue-box">
        <div className="portrait-frame"><Image src="/pixel-hero.png" alt="Portrait of Nizar Fazari" width={1254} height={1254} priority /></div>
        <div className="dialogue-copy">
          <span className="dialogue-name">MUHAMMAD NIZAR FAZARI · FULLSTACK DEVELOPER</span>
          <h1 id="hero-title">{isEnglish ? "Hi, I’m Nizar." : "Halo, saya Nizar."}</h1>
          <p>{copy.intro}</p>
          <p className="dialogue-current">{copy.current} <b>{copy.company}</b></p>
          <p className="dialogue-meta"><MapPin /> {copy.location} <b>•</b> {copy.stack}</p>
          <div className="hero-actions"><button type="button" onClick={() => onNavigate("experience")} className="rpg-button primary">{copy.experience} <ArrowDown /></button><button type="button" onClick={() => onNavigate("contact")} className="rpg-button">{copy.contact} <ArrowUpRight /></button><a className="rpg-button" href="/Nizar-Fazari-Resume.pdf" download>{copy.resume} <Download /></a></div>
          <div className="hero-social-links" aria-label="Professional links"><a href="https://github.com/nizarfazari" target="_blank" rel="noreferrer"><Code2 /> GITHUB</a><a href="https://www.linkedin.com/in/nizarfazari/" target="_blank" rel="noreferrer"><BriefcaseBusiness /> LINKEDIN</a><a href="mailto:nexsel32@gmail.com"><Mail /> EMAIL</a></div>
        </div>
        <span className="dialogue-cursor" aria-hidden="true">▼</span>
      </div>
    </section>
  )
}
