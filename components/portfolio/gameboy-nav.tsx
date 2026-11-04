import { ChevronLeft, ChevronRight, Languages, Moon, Sun } from "lucide-react"
import type { Locale } from "./data"

export type NavigationItem = { id: string; label: string }

type GameboyNavProps = {
  items: NavigationItem[]
  activeItem: string
  onNavigate: (id: string) => void
  locale: Locale
  onChangeLocale: (locale: Locale) => void
  theme: "light" | "dark"
  onToggleTheme: () => void
}

export function GameboyNav({ items, activeItem, onNavigate, locale, onChangeLocale, theme, onToggleTheme }: GameboyNavProps) {
  const navigateRelative = (direction: number) => {
    const currentIndex = items.findIndex((item) => item.id === activeItem)
    const nextIndex = (currentIndex + direction + items.length) % items.length
    onNavigate(items[nextIndex].id)
  }

  return <nav className="gameboy-nav" aria-label="Primary navigation">
    <button type="button" className="gameboy-side-button" onClick={() => navigateRelative(-1)} aria-label="Open previous view"><ChevronLeft /></button>
    <div className="gameboy-tabs">{items.map((item) => <button type="button" key={item.id} onClick={() => onNavigate(item.id)} className={activeItem === item.id ? "active" : ""} aria-current={activeItem === item.id ? "page" : undefined}>{item.label}</button>)}</div>
    <button type="button" className="gameboy-side-button" onClick={() => navigateRelative(1)} aria-label="Open next view"><ChevronRight /></button>
    <div className="locale-switcher" aria-label="Language selector">
      <Languages aria-hidden="true" />
      <button type="button" className={locale === "id" ? "active" : ""} onClick={() => onChangeLocale("id")} aria-pressed={locale === "id"}>ID</button>
      <span>/</span>
      <button type="button" className={locale === "en" ? "active" : ""} onClick={() => onChangeLocale("en")} aria-pressed={locale === "en"}>EN</button>
    </div>
    <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`} title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>{theme === "light" ? <Moon /> : <Sun />}</button>
  </nav>
}
