import { Star } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { Meter } from "./shared"

type HomeSectionProps = {
  onNavigate: (view: string) => void
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  return <>
    <HeroSection onNavigate={onNavigate} />
    <section className="player-hud section-wrap" aria-label="Professional stats">
      <Meter label="HEALTH / RELIABILITY" value="92" color="health" />
      <Meter label="ENERGY / DELIVERY" value="86" color="energy" />
      <Meter label="MANA / FOCUS" value="88" color="mana" />
      <div className="gold-slot"><Star /> <b>AVAILABLE</b><small>FOR COLLABORATION</small></div>
    </section>
  </>
}
