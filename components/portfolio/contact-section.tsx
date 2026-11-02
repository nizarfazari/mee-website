import { Download, Send } from "lucide-react"
import { Heading } from "./shared"

type ContactSectionProps = {
  sent: boolean
  onSubmit: () => void
}

export function ContactSection({ sent, onSubmit }: ContactSectionProps) {
  return <section className="section-wrap contact-section view-section">
    <div className="mailbox"><div><span className="stamp">AVAILABLE FOR CONTACT</span><Heading kicker="GET IN TOUCH" title="LET&apos;S CONNECT" text="Punya kebutuhan aplikasi web atau ingin berdiskusi tentang proyek? Silakan hubungi saya." /></div>
      <form onSubmit={(event) => { event.preventDefault(); onSubmit() }}>
        <label>YOUR NAME<input required name="name" placeholder="Name" /></label>
        <label>YOUR EMAIL<input required type="email" name="email" placeholder="you@example.com" /></label>
        <label>YOUR MESSAGE<textarea required name="message" rows={4} placeholder="Tell me about your project..." /></label>
        <button className="rpg-button primary" type="submit">SEND MESSAGE <Send /></button>
        {sent && <p className="form-success">MESSAGE SENT! I&apos;LL REPLY SOON.</p>}
      </form>
    </div>
    <div className="contact-links"><a href="https://github.com/nizarfazari" target="_blank" rel="noreferrer">GITHUB</a><a href="https://www.linkedin.com/in/nizarfazari/" target="_blank" rel="noreferrer">LINKEDIN</a><a href="mailto:nexsel32@gmail.com">EMAIL</a><a className="resume-link" href="/Muhammad-Nizar-Fazari-CV.docx" download>DOWNLOAD CV <Download /></a></div>
    <small className="contact-credit">© 2026 MUHAMMAD NIZAR FAZARI · BUILT WITH CARE.</small>
  </section>
}
