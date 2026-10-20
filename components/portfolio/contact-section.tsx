import { Download, Send } from "lucide-react"
import { Heading } from "./shared"

type ContactSectionProps = {
  sent: boolean
  onSubmit: () => void
}

export function ContactSection({ sent, onSubmit }: ContactSectionProps) {
  return <section className="section-wrap contact-section view-section">
    <div className="mailbox"><div><span className="stamp">POSTAGE PRE-PAID</span><Heading kicker="HOMESTEAD MAILBOX" title="SEND A LETTER" text="Have a project in mind? Let’s build something useful together." /></div>
      <form onSubmit={(event) => { event.preventDefault(); onSubmit() }}>
        <label>YOUR NAME<input required name="name" placeholder="Name" /></label>
        <label>YOUR EMAIL<input required type="email" name="email" placeholder="you@example.com" /></label>
        <label>YOUR MESSAGE<textarea required name="message" rows={4} placeholder="Tell me about your project..." /></label>
        <button className="rpg-button primary" type="submit">SEND VIA CARRIER PIGEON <Send /></button>
        {sent && <p className="form-success">LETTER SENT! I&apos;LL REPLY SOON.</p>}
      </form>
    </div>
    <div className="contact-links"><a href="https://github.com/nizarfazari" target="_blank" rel="noreferrer">GITHUB</a><a href="https://www.linkedin.com/in/nizarfazari/" target="_blank" rel="noreferrer">LINKEDIN</a><a href="mailto:hello@nizar.dev">EMAIL</a><a className="resume-link" href="/Nizar-Fazari-Resume.pdf" download>DOWNLOAD RESUME <Download /></a></div>
    <small className="contact-credit">© 2025 NIZAR FAZARI · BUILT WITH CARE.</small>
  </section>
}
