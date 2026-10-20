import type { Skill } from "./data"
import { inventorySkills } from "./data"
import { Heading } from "./shared"

type SkillsSectionProps = {
  selectedSkill: Skill
  onSelectSkill: (skill: Skill) => void
}

export function SkillsSection({ selectedSkill, onSelectSkill }: SkillsSectionProps) {
  return <section className="section-wrap content-section view-section">
    <Heading kicker="BACKPACK / TOOL SHED" title="MY INVENTORY" text="Tools I reach for when building useful digital products." />
    <div className="inventory-layout"><div>
      <div className="inventory-label"><span>BACKPACK CAPACITY</span><b>{inventorySkills.length} / 36 ITEMS</b></div>
      <div className="inventory-grid" role="group" aria-label="Technical skills inventory">
        {Array.from({ length: 36 }, (_, index) => {
          const skill = inventorySkills[index]
          return skill ? <button type="button" aria-pressed={selectedSkill.code === skill.code} className={`inventory-slot filled ${skill.group.toLowerCase()}${selectedSkill.code === skill.code ? " selected" : ""}`} key={skill.code} onClick={() => onSelectSkill(skill)}><b>{skill.code}</b><small>L{skill.level}</small><span className="sr-only">{skill.name}, level {skill.level}</span></button> : <span className="inventory-slot" aria-label="Empty inventory slot" key={index} />
        })}
      </div>
    </div><aside className="item-tooltip" aria-live="polite"><span>ITEM INSPECT</span><div className="item-heading"><h3>{selectedSkill.name}</h3><b>LV {selectedSkill.level}</b></div><small className="item-group">{selectedSkill.group} TOOL</small><p>{selectedSkill.description}</p><div className="item-meter"><span>PROFICIENCY</span><i><em style={{ width: `${selectedSkill.level * 10}%` }} /></i></div><small className="tooltip-hint">SELECT AN ITEM TO INSPECT</small></aside></div>
  </section>
}
