import Image from "next/image"
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react"

export function HeroSection({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-scene" aria-hidden="true">
        <span className="scene-cloud cloud-one" /><span className="scene-cloud cloud-two" />
        <div className="hero-plaque"><span>SPRING 18 · YEAR 4</span><b>NIZAR&apos;S WORKSHOP</b><small>BUILDING FROM THE MEADOW</small></div>
        <span className="scene-tree tree-one" /><span className="scene-tree tree-two" />
        <span className="scene-cabin"><i /><b /></span>
        <span className="scene-path" />
      </div>
      <div className="dialogue-box">
        <div className="portrait-frame"><Image src="/pixel-hero.png" alt="Portrait of Nizar Fazari" width={1254} height={1254} priority /></div>
        <div className="dialogue-copy">
          <span className="dialogue-name">NIZAR FAZARI · RESIDENT DEVELOPER</span>
          <h1 id="hero-title">Hi, I&apos;m Nizar.</h1>
          <p>I&apos;m a Software Engineer who builds reliable, thoughtful digital products across frontend, backend, and infrastructure.</p>
          <p className="dialogue-meta"><MapPin /> Indonesia · GMT+7 <b>•</b> Open to collaborate</p>
          <div className="hero-actions"><button type="button" onClick={() => onNavigate("projects")} className="rpg-button primary">VIEW QUEST LOG <ArrowDown /></button><button type="button" onClick={() => onNavigate("contact")} className="rpg-button">SEND A PIGEON <ArrowUpRight /></button></div>
        </div>
        <span className="dialogue-cursor" aria-hidden="true">▼</span>
      </div>
    </section>
  )
}
