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
  { code: "TS", name: "TypeScript", level: 10, group: "Frontend", description: "Typed JavaScript for scalable, maintainable applications." },
  { code: "JS", name: "JavaScript", level: 9, group: "Frontend", description: "The foundation for interactive experiences on the web." },
  { code: "RX", name: "React", level: 9, group: "Frontend", description: "Component-driven interfaces built with care." },
  { code: "NX", name: "Next.js", level: 8, group: "Frontend", description: "Production-ready React applications and full-stack delivery." },
  { code: "ND", name: "Node.js", level: 8, group: "Backend", description: "Reliable services, APIs, and developer tooling." },
  { code: "GO", name: "Golang", level: 6, group: "Backend", description: "Pragmatic backend services where performance matters." },
  { code: "SQL", name: "SQL", level: 8, group: "Data", description: "Clear data models and query patterns." },
  { code: "PG", name: "PostgreSQL", level: 8, group: "Data", description: "Dependable relational data for product systems." },
  { code: "RD", name: "Redis", level: 6, group: "Data", description: "Fast caching and lightweight data workflows." },
  { code: "DK", name: "Docker", level: 7, group: "Infrastructure", description: "Repeatable environments from local work to deployment." },
  { code: "LN", name: "Linux", level: 6, group: "Infrastructure", description: "Comfortable working close to the systems that run products." },
  { code: "GT", name: "Git", level: 9, group: "Workflow", description: "Collaborative version control and careful release habits." },
]

export const projects = [
  { name: "Marketly Commerce", type: "LEGENDARY CONTRACT", status: "COMPLETED ★★★", text: "A fast, story-led commerce experience designed for simple, confident checkout journeys.", tech: ["Next.js", "Stripe", "Postgres"], reward: "12,000G · 450 EXP" },
  { name: "Signal Dashboard", type: "TOWN CONTRACT", status: "COMPLETED ★★★", text: "An observability workspace that turns noisy product data into clear next actions.", tech: ["React", "Tailwind", "D3.js"], reward: "9,500G · 360 EXP" },
  { name: "Field Notes", type: "ACTIVE BOUNTY", status: "IN PROGRESS · 85%", text: "A calm, collaborative writing space for teams that need clarity and momentum.", tech: ["TypeScript", "Supabase", "Motion"], reward: "7,200G · 280 EXP" },
  { name: "Village Ledger", type: "TOWN CONTRACT", status: "COMPLETED ★★★", text: "A dependable internal tool for tracking operational work without unnecessary complexity.", tech: ["Node.js", "REST API", "Postgres"], reward: "8,800G · 320 EXP" },
]

export const timeline = [
  ["YEAR 4 · PRESENT", "Full-stack Engineer", "Independent Builder", "Building reliable interfaces, APIs, and developer-friendly systems."],
  ["YEAR 2–3", "Product Engineer", "Web Platforms", "Turned ambitious product ideas into accessible, polished experiences."],
  ["YEAR 1", "Frontend Developer", "Digital Products", "Learned to make complex interactions feel simple, fast, and useful."],
]

export const navigationItems: NavigationItem[] = [
  { id: "top", label: "HOME" },
  { id: "projects", label: "QUESTS" },
  { id: "skills", label: "BAG" },
  { id: "experience", label: "BOARD" },
  { id: "notes", label: "NOTES" },
  { id: "contact", label: "MAIL" },
]

export const notes: Note[] = [
  { category: "ENGINEERING NOTES", title: "Designing interfaces that make complex work feel simple", date: "MAR 14, 2025", readTime: "4 MIN READ", excerpt: "A practical way to turn busy product requirements into calm, understandable interfaces.", body: ["Complex work does not need to look complex. The first job of an interface is to help someone understand what matters now, not to expose every capability at once.", "I start with the decision a person needs to make, then give that decision a clear place, a useful label, and enough context to make it confidently. Everything else can arrive when it becomes relevant.", "Small details carry a lot of that calm: stable layouts, honest empty states, and feedback that explains what changed. They turn a feature from a collection of controls into a tool people can trust."] },
  { category: "SYSTEMS", title: "What I look for before shipping a new feature", date: "FEB 26, 2025", readTime: "5 MIN READ", excerpt: "A short pre-launch checklist for the paths, states, and people a feature affects.", body: ["Before shipping, I trace the happy path and the less glamorous paths around it: slow connections, missing data, permissions, retries, and handoffs between people.", "A feature is ready when its states are intentional. Loading, empty, success, and failure should each tell the person what is happening and what they can do next.", "This check is not about adding process for its own sake. It is how a small release stays dependable after it leaves the workshop."] },
  { category: "CAREER", title: "Building a developer workflow that leaves room to think", date: "JAN 30, 2025", readTime: "3 MIN READ", excerpt: "Protecting focus with a workflow that makes the next useful step obvious.", body: ["Good momentum comes from reducing tiny decisions. I keep a short task list, make the next action concrete, and leave a clear note before stepping away from a problem.", "Tools should support attention, not compete for it. A predictable local setup, fast feedback, and a few dependable shortcuts give more time back to the work that needs judgment.", "The goal is not to be busy all day. It is to end the day having moved something meaningful forward."] },
]
