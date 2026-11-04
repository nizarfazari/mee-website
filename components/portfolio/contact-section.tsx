import { Download, Send } from "lucide-react"
import { Heading } from "./shared"
import type { Locale } from "./data"

type ContactSectionProps = {
  locale: Locale
  sent: boolean
  onSubmit: () => void
}

export function ContactSection({ locale, sent, onSubmit }: ContactSectionProps) {
  const isEnglish = locale === "en"
  return <section className="section-wrap contact-section view-section">
    <div className="mailbox"><div><span className="stamp">{isEnglish ? "AVAILABLE FOR CONTACT" : "TERBUKA UNTUK DIHUBUNGI"}</span><Heading kicker={isEnglish ? "GET IN TOUCH" : "HUBUNGI SAYA"} title={isEnglish ? "LET’S CONNECT" : "MARI TERHUBUNG"} text={isEnglish ? "Need a web application or want to discuss a project? Feel free to get in touch." : "Punya kebutuhan aplikasi web atau ingin berdiskusi tentang proyek? Silakan hubungi saya."} /></div>
      <form onSubmit={(event) => { event.preventDefault(); onSubmit() }}>
        <label>{isEnglish ? "YOUR NAME" : "NAMA ANDA"}<input required name="name" placeholder={isEnglish ? "Name" : "Nama"} /></label>
        <label>{isEnglish ? "YOUR EMAIL" : "EMAIL ANDA"}<input required type="email" name="email" placeholder="you@example.com" /></label>
        <label>{isEnglish ? "YOUR MESSAGE" : "PESAN ANDA"}<textarea required name="message" rows={4} placeholder={isEnglish ? "Tell me about your project..." : "Ceritakan kebutuhan proyek Anda..."} /></label>
        <button className="rpg-button primary" type="submit">{isEnglish ? "SEND MESSAGE" : "KIRIM PESAN"} <Send /></button>
        {sent && <p className="form-success">{isEnglish ? "MESSAGE READY! I’LL REPLY SOON." : "PESAN SIAP DIKIRIM! SAYA AKAN SEGERA MEMBALAS."}</p>}
      </form>
    </div>
    <div className="contact-links"><a href="https://github.com/nizarfazari" target="_blank" rel="noreferrer">GITHUB</a><a href="https://www.linkedin.com/in/nizarfazari/" target="_blank" rel="noreferrer">LINKEDIN</a><a href="mailto:nexsel32@gmail.com">EMAIL</a><a className="resume-link" href="/Nizar-Fazari-Resume.pdf" download>{isEnglish ? "DOWNLOAD RESUME PDF" : "UNDUH CV PDF"} <Download /></a></div>
    <small className="contact-credit">© 2026 MUHAMMAD NIZAR FAZARI · {isEnglish ? "BUILT WITH CARE." : "DIBUAT DENGAN SEPENUH HATI."}</small>
  </section>
}
