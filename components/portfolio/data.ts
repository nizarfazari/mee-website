import type { NavigationItem } from "./gameboy-nav"

export type Skill = {
  code: string
  name: string
  level: number
  group: string
  description: string
}

export type Note = {
  category: string
  title: string
  date: string
  readTime: string
  excerpt: string
  body: string[]
}

export const inventorySkills: Skill[] = [
  { code: "GO", name: "Golang", level: 9, group: "Backend", description: "Digunakan untuk membangun dan memelihara RESTful API pada aplikasi bisnis." },
  { code: "PG", name: "PostgreSQL", level: 8, group: "Data", description: "Perancangan database, optimasi query, dan indexing untuk performa aplikasi." },
  { code: "NX", name: "Next.js", level: 8, group: "Frontend", description: "Membangun serta mengintegrasikan komponen frontend dengan API." },
  { code: "NT", name: "Nuxt.js", level: 8, group: "Frontend", description: "Menerjemahkan desain menjadi aplikasi frontend yang responsif." },
  { code: "RX", name: "React", level: 8, group: "Frontend", description: "Membangun aplikasi web dan fitur frontend berbasis komponen." },
  { code: "EX", name: "Express", level: 7, group: "Backend", description: "Pengembangan layanan backend dan API dengan JavaScript." },
  { code: "JS", name: "JavaScript", level: 8, group: "Frontend", description: "Fondasi pengembangan aplikasi web interaktif." },
  { code: "PHP", name: "PHP", level: 6, group: "Backend", description: "Memahami dasar pengembangan web berbasis PHP dan Laravel." },
  { code: "TW", name: "Tailwind CSS", level: 8, group: "Frontend", description: "Membangun implementasi desain yang konsisten dan pixel-perfect." },
  { code: "GT", name: "Git & GitHub", level: 8, group: "Workflow", description: "Version control dan kolaborasi pengembangan bersama tim." },
]

export const projects = [
  { name: "LARASATI", type: "WORK EXPERIENCE", status: "ONGOING", text: "Aplikasi reporting RKAB yang dibangun end-to-end, dari perancangan API dan database hingga integrasi frontend.", tech: ["Golang", "PostgreSQL", "REST API"], reward: "FULLSTACK · PT GBNA" },
  { name: "Aplikasi Jual Beli Voucher", type: "FREELANCE PROJECT", status: "COMPLETED", text: "Implementasi desain menjadi komponen frontend yang pixel-perfect dan sesuai kebutuhan fungsional.", tech: ["Nuxt.js", "Tailwind CSS", "Git"], reward: "FRONTEND · 2026" },
  { name: "SETARA", type: "BOOTCAMP PROJECT", status: "COMPLETED", text: "Aplikasi web internet banking; memimpin tim frontend, membangun lima halaman dan mengintegrasikan lima fitur utama.", tech: ["React", "Vite", "Git"], reward: "SYNRGY ACADEMY" },
  { name: "Asacita Scholarship", type: "INTERNSHIP PROJECT", status: "COMPLETED", text: "Website scholarship dengan 26 komponen dari desain Figma yang terintegrasi dengan API backend.", tech: ["Nuxt.js", "Tailwind CSS", "REST API"], reward: "SUITMEDIA · 2023", url: "https://www.asacita.org/" },
  { name: "EMTEK", type: "INTERNSHIP PROJECT", status: "COMPLETED", text: "Kontribusi frontend pada proyek EMTEK: mengembangkan dan memperbaiki komponen Next.js serta mengintegrasikan lebih dari 20 komponen dengan API backend.", tech: ["Next.js", "REST API", "Git"], reward: "FRONTEND INTERN · SUITMEDIA · 2023", url: "https://emtek.co.id/en", linkLabel: "VISIT COMPANY WEBSITE" },
]

export type Experience = {
  id: string
  period: string
  role: string
  organization: string
  summary: string
  project: string
  responsibilities: string[]
  technologies: string[]
}

export const timeline: Experience[] = [
  {
    id: "golden-digital-solution",
    period: "10 AUG 2026 · PRESENT",
    role: "Fullstack Developer",
    organization: "PT Golden Digital Solution",
    summary: "Saat ini bekerja sebagai Fullstack Developer di PT Golden Digital Solution.",
    project: "Current Position",
    responsibilities: [
      "Mengembangkan aplikasi web sebagai Fullstack Developer.",
      "Berkontribusi pada pengembangan fitur frontend dan backend sesuai kebutuhan produk.",
    ],
    technologies: [],
  },
  {
    id: "gawe-becik",
    period: "FEB 2023 · AUG 2026",
    role: "Fullstack Developer",
    organization: "PT Gawe Becik Nadhah Anugerah",
    summary: "Mengembangkan aplikasi web dan sistem end-to-end untuk perusahaan distribusi makanan dan minuman.",
    project: "LARASATI · Aplikasi Reporting RKAB",
    responsibilities: [
      "Menggali kebutuhan bisnis bersama stakeholder dan menerjemahkannya menjadi flow sistem serta ERD.",
      "Mengembangkan dan memelihara RESTful API menggunakan Golang.",
      "Mendesain database PostgreSQL, mengoptimalkan query dan indexing untuk performa aplikasi.",
      "Mengintegrasikan backend dan frontend agar data tersaji akurat serta efisien.",
      "Mengidentifikasi dan menyelesaikan bottleneck pada query maupun sistem.",
    ],
    technologies: ["Golang", "PostgreSQL", "REST API", "Next.js", "Nuxt.js"],
  },
  {
    id: "freelance-voucher",
    period: "JAN 2026 · MAR 2026",
    role: "Frontend Developer",
    organization: "Freelance · Project-based",
    summary: "Membangun antarmuka aplikasi jual beli voucher yang sesuai desain dan target delivery tim.",
    project: "Aplikasi Jual Beli Voucher",
    responsibilities: [
      "Mengubah desain menjadi komponen frontend dengan Nuxt.js dan Tailwind CSS.",
      "Mengerjakan task terstruktur berdasarkan pembagian poin dari Project Manager.",
      "Memastikan implementasi pixel-perfect dan memenuhi kebutuhan fungsional.",
      "Berkoordinasi dengan tim agar deliverable selesai sesuai target dan timeline.",
    ],
    technologies: ["Nuxt.js", "Tailwind CSS", "Git"],
  },
  {
    id: "synrgy-academy",
    period: "FEB 2024 · AUG 2024",
    role: "Fullstack Developer",
    organization: "SYNRGY Academy · Bootcamp",
    summary: "Mengembangkan aplikasi internet banking dalam program bootcamp dan memimpin kolaborasi divisi frontend.",
    project: "SETARA · Internet Banking Web Application",
    responsibilities: [
      "Mengembangkan aplikasi website internet banking menggunakan React dan Vite.",
      "Memimpin divisi Frontend Developer serta membagi tugas kepada anggota tim.",
      "Melakukan monitoring progres dan menyusun laporan kepada divisi terkait.",
      "Mengembangkan lima halaman utama dan mengintegrasikan lima fitur utama ke dalam sistem.",
    ],
    technologies: ["React", "Vite", "JavaScript", "Git"],
  },
  {
    id: "suitmedia",
    period: "FEB 2023 · JUN 2023",
    role: "Frontend Developer Intern",
    organization: "Suitmedia Digital Agency",
    summary: "Mengembangkan antarmuka web dan integrasi API untuk proyek digital bersama tim engineering, QA, dan supervisor.",
    project: "EMTEK & Asacita Scholarship",
    responsibilities: [
      "Mengembangkan serta memperbaiki komponen Next.js pada proyek EMTEK dan mengintegrasikan lebih dari 20 komponen dengan API.",
      "Membangun 26 komponen Nuxt.js dan Tailwind CSS dari desain Figma untuk Asacita Scholarship.",
      "Berkolaborasi dengan Backend Engineer dalam integrasi dan penyesuaian data.",
      "Mengikuti daily standup, berkoordinasi dengan QA, dan berdiskusi rutin dengan supervisor untuk validasi requirement.",
    ],
    technologies: ["Next.js", "Nuxt.js", "Tailwind CSS", "REST API", "Figma"],
  },
]

export const navigationItems: NavigationItem[] = [
  { id: "top", label: "HOME" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "notes", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
]

export const notes: Note[] = [
  { category: "EDUCATION", title: "Sistem Informasi — Universitas AMIKOM Yogyakarta", date: "AUG 2020 — OCT 2024", readTime: "GPA 3.94 / 4.00", excerpt: "Menempuh studi Sistem Informasi dengan fondasi pengembangan perangkat lunak dan sistem informasi.", body: ["Menyelesaikan Program Studi Sistem Informasi di Universitas AMIKOM Yogyakarta pada Oktober 2024 dengan IPK 3,94.", "Masa studi membangun fondasi dalam pengembangan perangkat lunak, teknologi web, dan pemahaman sistem informasi."] },
  { category: "BOOTCAMP", title: "Fullstack Developer — SYNRGY Academy", date: "FEB 2024 — AUG 2024", readTime: "PROJECT: SETARA", excerpt: "Membangun aplikasi internet banking dan memimpin divisi frontend dalam pengembangan tim.", body: ["Mengembangkan SETARA, aplikasi web internet banking menggunakan React dan Vite.", "Memimpin divisi Frontend Developer, membagi tugas, memonitor progres, serta menyusun laporan kepada divisi terkait.", "Membangun lima halaman utama dan mengintegrasikan lima fitur utama ke dalam sistem."] },
  { category: "COURSES", title: "Frontend & Web Development Learning Path", date: "MAR 2021 — JAN 2023", readTime: "BINAR · FGA · SANBERCODE", excerpt: "Pembelajaran terstruktur mengenai React, JavaScript, Node.js, PHP, Laravel, Git, dan Redux.", body: ["Binar Academy: mempelajari JavaScript frontend, lifecycle React, Redux, Git dan GitHub, serta data fetching pada Next.js.", "FGA Digital Kominfo: mempelajari pengembangan frontend menggunakan HTML, CSS, React.js, dan OOP JavaScript.", "Sanbercode: mempelajari dasar web HTML/CSS, OOP PHP, Eloquent ORM, seeding, migration, serta routing Laravel."] },
]
