import type { Metadata } from "next"
import { PixelPortfolio } from "@/components/pixel-portfolio"

export const metadata: Metadata = {
  title: "Nizar Fazari — Fullstack Developer",
  description: "Portfolio of Nizar Fazari, a Fullstack Developer building reliable web applications, APIs, and user interfaces.",
}

export default function EnglishHome() {
  return <PixelPortfolio initialLocale="en" />
}
