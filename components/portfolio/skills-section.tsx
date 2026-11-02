import type { Skill } from "./data"
import { inventorySkills } from "./data"
import { Heading } from "./shared"

type SkillsSectionProps = {
  selectedSkill: Skill
  onSelectSkill: (skill: Skill) => void
}

export function SkillsSection({ selectedSkill, onSelectSkill }: SkillsSectionProps) {
  return <section className="section-wrap content-section view-section">
    <Heading kicker="TECHNICAL TOOLKIT" title="SKILLS" text="Tools and technologies I use to build useful digital products." />
    <div className="inventory-layout"><div>
      <div className="inventory-label"><span>TECHNICAL SKILLS</span><b>{inventorySkills.length} TOOLS</b></div>
      <div className="inventory-grid" role="group" aria-label="Technical skills inventory">
        {Array.from({ length: 36 }, (_, index) => {
          const skill = inventorySkills[index]
          return skill ? <button type="button" aria-pressed={selectedSkill.code === skill.code} className={`inventory-slot filled ${skill.group.toLowerCase()}${selectedSkill.code === skill.code ? " selected" : ""}`} key={skill.code} onClick={() => onSelectSkill(skill)}><b>{skill.code}</b><small>L{skill.level}</small><span className="sr-only">{skill.name}, level {skill.level}</span></button> : <span className="inventory-slot" aria-label="Empty inventory slot" key={index} />
        })}
      </div>
    </div><aside className="item-tooltip" aria-live="polite"><span>SKILL DETAILS</span><div className="item-heading"><h3>{selectedSkill.name}</h3><b>LV {selectedSkill.level}</b></div><small className="item-group">{selectedSkill.group} TOOL</small><p>{selectedSkill.description}</p><div className="item-meter"><span>PROFICIENCY</span><i><em style={{ width: `${selectedSkill.level * 10}%` }} /></i></div><small className="tooltip-hint">SELECT A SKILL TO VIEW DETAILS</small></aside></div>
  </section>
}
