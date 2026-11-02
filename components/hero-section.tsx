import Image from "next/image"
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Mail, MapPin } from "lucide-react"

export function HeroSection({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-scene" aria-hidden="true">
        <span className="scene-cloud cloud-one" /><span className="scene-cloud cloud-two" />
        <div className="hero-plaque"><span>FULLSTACK DEVELOPER</span><b>NIZAR FAZARI</b><small>BUILDING WEB APPLICATIONS</small></div>
        <span className="scene-tree tree-one" /><span className="scene-tree tree-two" />
        <span className="scene-cabin"><i /><b /></span>
        <span className="scene-path" />
      </div>
      <div className="dialogue-box">
        <div className="portrait-frame"><Image src="/pixel-hero.png" alt="Portrait of Nizar Fazari" width={1254} height={1254} priority /></div>
        <div className="dialogue-copy">
          <span className="dialogue-name">MUHAMMAD NIZAR FAZARI · FULLSTACK DEVELOPER</span>
          <h1 id="hero-title">Hi, I&apos;m Nizar.</h1>
          <p>Fullstack Developer yang membangun aplikasi web end-to-end, dari API dan database hingga antarmuka pengguna.</p>
          <p className="dialogue-current">CURRENT ROLE <b>Fullstack Developer · PT Golden Digital Solution</b></p>
          <p className="dialogue-meta"><MapPin /> Indonesia · GMT+7 <b>•</b> Golang · PostgreSQL · React · Nuxt.js</p>
          <div className="hero-actions"><button type="button" onClick={() => onNavigate("experience")} className="rpg-button primary">VIEW EXPERIENCE <ArrowDown /></button><button type="button" onClick={() => onNavigate("contact")} className="rpg-button">CONTACT ME <ArrowUpRight /></button></div>
          <div className="hero-social-links" aria-label="Professional links"><a href="https://github.com/nizarfazari" target="_blank" rel="noreferrer"><Code2 /> GITHUB</a><a href="https://www.linkedin.com/in/nizarfazari/" target="_blank" rel="noreferrer"><BriefcaseBusiness /> LINKEDIN</a><a href="mailto:nexsel32@gmail.com"><Mail /> EMAIL</a></div>
        </div>
        <span className="dialogue-cursor" aria-hidden="true">▼</span>
      </div>
    </section>
  )
}
