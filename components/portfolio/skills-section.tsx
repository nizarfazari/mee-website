import type { Locale, Skill } from "./data"
import { Heading } from "./shared"

type SkillsSectionProps = {
  locale: Locale
  skills: Skill[]
  selectedSkill: Skill
  onSelectSkill: (skill: Skill) => void
}

export function SkillsSection({ locale, skills, selectedSkill, onSelectSkill }: SkillsSectionProps) {
  const isEnglish = locale === "en"
  return <section className="section-wrap content-section view-section">
    <Heading kicker={isEnglish ? "TECHNICAL TOOLKIT" : "PERLENGKAPAN TEKNIS"} title={isEnglish ? "SKILLS" : "KEAHLIAN"} text={isEnglish ? "Tools and technologies I use to build useful digital products." : "Tools dan teknologi yang saya gunakan untuk membangun produk digital yang bermanfaat."} />
    <div className="inventory-layout"><div>
      <div className="inventory-label"><span>{isEnglish ? "TECHNICAL SKILLS" : "KEAHLIAN TEKNIS"}</span><b>{skills.length} {isEnglish ? "TOOLS" : "TOOLS"}</b></div>
      <div className="inventory-grid" role="group" aria-label="Technical skills inventory">
        {Array.from({ length: 36 }, (_, index) => {
          const skill = skills[index]
          return skill ? <button type="button" aria-pressed={selectedSkill.code === skill.code} className={`inventory-slot filled ${skill.group.toLowerCase()}${selectedSkill.code === skill.code ? " selected" : ""}`} key={skill.code} onClick={() => onSelectSkill(skill)}><b>{skill.code}</b><small>L{skill.level}</small><span className="sr-only">{skill.name}, level {skill.level}</span></button> : <span className="inventory-slot" aria-label="Empty inventory slot" key={index} />
        })}
      </div>
    </div><aside className="item-tooltip" aria-live="polite"><span>{isEnglish ? "SKILL DETAILS" : "DETAIL KEAHLIAN"}</span><div className="item-heading"><h3>{selectedSkill.name}</h3><b>LV {selectedSkill.level}</b></div><small className="item-group">{selectedSkill.group} {isEnglish ? "TOOL" : "TOOL"}</small><p>{selectedSkill.description}</p><div className="item-meter"><span>{isEnglish ? "PROFICIENCY" : "KEMAHIRAN"}</span><i><em style={{ width: `${selectedSkill.level * 10}%` }} /></i></div><small className="tooltip-hint">{isEnglish ? "SELECT A SKILL TO VIEW DETAILS" : "PILIH SKILL UNTUK MELIHAT DETAIL"}</small></aside></div>
  </section>
}
