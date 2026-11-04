import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, Tag } from "lucide-react"
import type { Locale, Note } from "./data"
import { Heading } from "./shared"

type NotesSectionProps = {
  locale: Locale
  notes: Note[]
  selectedNote: Note | null
  onSelectNote: (note: Note | null) => void
}

export function NotesSection({ locale, notes, selectedNote, onSelectNote }: NotesSectionProps) {
  const isEnglish = locale === "en"
  return <section className="section-wrap content-section view-section">
    {selectedNote ? <article className="journal-entry">
      <button type="button" className="journal-back" onClick={() => onSelectNote(null)}><ArrowLeft /> {isEnglish ? "BACK TO EDUCATION" : "KEMBALI KE PENDIDIKAN"}</button>
      <header><span>{selectedNote.category}</span><h2>{selectedNote.title}</h2><div className="journal-meta"><time><CalendarDays /> {selectedNote.date}</time><small><BookOpen /> {selectedNote.readTime}</small></div></header>
      <div className="journal-paper">{selectedNote.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <footer><Tag /> {isEnglish ? "EDUCATION" : "PENDIDIKAN"} · MUHAMMAD NIZAR FAZARI</footer>
    </article> : <>
      <Heading kicker={isEnglish ? "BACKGROUND" : "LATAR BELAKANG"} title={isEnglish ? "EDUCATION" : "PENDIDIKAN"} text={isEnglish ? "Education and learning programmes that shaped my technical journey." : "Pendidikan dan program pembelajaran yang membentuk perjalanan teknis saya."} />
      <div className="notes-grid">{notes.map((note) => <article className="note" key={note.title}><span>{note.category}</span><h3>{note.title}</h3><p>{note.excerpt}</p><button type="button" onClick={() => onSelectNote(note)}>{isEnglish ? "READ NOTE" : "BACA CATATAN"} <ArrowUpRight /></button></article>)}</div>
    </>}
  </section>
}
