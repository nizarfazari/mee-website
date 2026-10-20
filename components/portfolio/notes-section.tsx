import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, Tag } from "lucide-react"
import type { Note } from "./data"
import { notes } from "./data"
import { Heading } from "./shared"

type NotesSectionProps = {
  selectedNote: Note | null
  onSelectNote: (note: Note | null) => void
}

export function NotesSection({ selectedNote, onSelectNote }: NotesSectionProps) {
  return <section className="section-wrap content-section view-section">
    {selectedNote ? <article className="journal-entry">
      <button type="button" className="journal-back" onClick={() => onSelectNote(null)}><ArrowLeft /> BACK TO FIELD NOTES</button>
      <header><span>{selectedNote.category}</span><h2>{selectedNote.title}</h2><div className="journal-meta"><time><CalendarDays /> {selectedNote.date}</time><small><BookOpen /> {selectedNote.readTime}</small></div></header>
      <div className="journal-paper">{selectedNote.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <footer><Tag /> WORKSHOP JOURNAL · NIZAR FAZARI</footer>
    </article> : <>
      <Heading kicker="JOURNAL DESK" title="FIELD NOTES" text="Short thoughts on building products, systems, and better developer habits." />
      <div className="notes-grid">{notes.map((note) => <article className="note" key={note.title}><span>{note.category}</span><h3>{note.title}</h3><p>{note.excerpt}</p><button type="button" onClick={() => onSelectNote(note)}>READ NOTE <ArrowUpRight /></button></article>)}</div>
    </>}
  </section>
}
