"use client"

import { useEffect, useRef, useState } from "react"

type Direction = "left" | "right"

type Character = {
  id: string
  name: string
  role: string
  greeting: string
}

type Walker = {
  instanceId: number
  characterIndex: number
  direction: Direction
  duration: number
  delay: number
}

const characters: Character[] = [
  { id: "nizar", name: "Nizar", role: "PLAYER 01", greeting: "HEY! I'M NIZAR 👋" },
  { id: "frontend", name: "Frontend Mage", role: "FRONTEND MAGE", greeting: "MAKING PIXELS BEHAVE." },
  { id: "backend", name: "Backend Knight", role: "BACKEND KNIGHT", greeting: "THE API IS HEALTHY." },
  { id: "gamer", name: "Arcade Gamer", role: "ARCADE GAMER", greeting: "ONE MORE ROUND! 🎮" },
  { id: "basketball", name: "Basketball Player", role: "HOOPS PLAYER", greeting: "LET'S RUN IT! 🏀" },
]

const initialWalkers: Walker[] = [
  { instanceId: 1, characterIndex: 0, direction: "right", duration: 15, delay: 0 },
  { instanceId: 2, characterIndex: 3, direction: "left", duration: 17, delay: 1.8 },
]

export function PixelLobby() {
  const [walkers, setWalkers] = useState<Walker[]>(initialWalkers)
  const [greetingId, setGreetingId] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const walkersRef = useRef(walkers)
  const greetingRef = useRef<number | null>(null)
  const greetingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const nextCharacterRef = useRef(4)
  const nextInstanceRef = useRef(3)
  const autoGreetingRef = useRef(0)

  const beginGreeting = (instanceId: number) => {
    if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current)
    greetingRef.current = instanceId
    setGreetingId(instanceId)
    greetingTimerRef.current = setTimeout(() => {
      greetingRef.current = null
      setGreetingId(null)
    }, 2200)
  }

  useEffect(() => {
    walkersRef.current = walkers
  }, [walkers])

  useEffect(() => {
    const media = window.matchMedia("(max-width: 800px)")
    const updateViewport = () => {
      setIsMobile(media.matches)
      if (media.matches) setWalkers((current) => current.slice(0, 2))
    }

    updateViewport()
    media.addEventListener("change", updateViewport)
    return () => media.removeEventListener("change", updateViewport)
  }, [])

  useEffect(() => {
    const maxWalkers = isMobile ? 2 : 3
    const spawnInterval = setInterval(() => {
      setWalkers((current) => {
        if (current.length >= maxWalkers) return current

        const activeCharacters = new Set(current.map((walker) => walker.characterIndex))
        let characterIndex = nextCharacterRef.current % characters.length
        let attempts = 0
        while (activeCharacters.has(characterIndex) && attempts < characters.length) {
          nextCharacterRef.current += 1
          characterIndex = nextCharacterRef.current % characters.length
          attempts += 1
        }

        const instanceId = nextInstanceRef.current++
        const direction: Direction = instanceId % 2 === 0 ? "left" : "right"
        const duration = 14 + ((instanceId * 3) % 5)
        nextCharacterRef.current += 1

        return [...current, { instanceId, characterIndex, direction, duration, delay: 0 }]
      })
    }, 3200)

    return () => clearInterval(spawnInterval)
  }, [isMobile])

  useEffect(() => {
    const socialInterval = setInterval(() => {
      if (greetingRef.current !== null || walkersRef.current.length === 0) return
      const walker = walkersRef.current[autoGreetingRef.current % walkersRef.current.length]
      autoGreetingRef.current += 1
      beginGreeting(walker.instanceId)
    }, 11000)

    return () => {
      clearInterval(socialInterval)
      if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current)
    }
  }, [])

  const activeGreeting = walkers.find((walker) => walker.instanceId === greetingId)
  const activeCharacter = activeGreeting ? characters[activeGreeting.characterIndex] : null

  return (
    <div className="hero-transition pixel-lobby" aria-label="Interactive pixel character lobby">
      <div className="runner-platform" aria-hidden="true" />
      <span className="hero-transition-label">DEV WORLD ONLINE · CLICK A PLAYER TO SAY HI</span>

      <PixelPortal side="left" />
      <PixelPortal side="right" />

      <div className="lobby-route">
        {walkers.map((walker) => {
          const character = characters[walker.characterIndex]
          const isGreeting = greetingId === walker.instanceId

          return (
            <button
              type="button"
              key={walker.instanceId}
              className={`lobby-walker walks-${walker.direction} character-${character.id}${isGreeting ? " is-greeting" : ""}`}
              style={{
                "--walk-duration": `${walker.duration}s`,
                "--walk-delay": `${walker.delay}s`,
              } as React.CSSProperties}
              onClick={() => beginGreeting(walker.instanceId)}
              onAnimationEnd={(event) => {
                if (event.animationName !== `lobbyWalk${walker.direction === "right" ? "Right" : "Left"}`) return
                setWalkers((current) => current.filter((item) => item.instanceId !== walker.instanceId))
              }}
              aria-label={`Say hi to ${character.name}, ${character.role}`}
            >
              <span className="lobby-speech" aria-hidden="true">{character.greeting}</span>
              <span className="runner-shadow" aria-hidden="true" />
              <span className="runner-dust runner-dust-one" aria-hidden="true" />
              <span className="runner-dust runner-dust-two" aria-hidden="true" />
              <span className="runner-sprite" aria-hidden="true">
                <span className="runner-backpack" />
                <span className="runner-head">
                  <span className="runner-hair" />
                  <span className="runner-face" />
                  <span className="runner-headphone" />
                </span>
                <span className="runner-body" />
                <span className="runner-arm runner-arm-back" />
                <span className="runner-arm runner-arm-front" />
                <span className="runner-leg runner-leg-back" />
                <span className="runner-leg runner-leg-front" />
                <span className="runner-prop" />
              </span>
            </button>
          )
        })}
      </div>

      <span className="sr-only" aria-live="polite">
        {activeCharacter ? `${activeCharacter.name} says: ${activeCharacter.greeting}` : ""}
      </span>
    </div>
  )
}

function PixelPortal({ side }: { side: "left" | "right" }) {
  return (
    <div className={`pixel-portal portal-${side}`} aria-hidden="true">
      <span className="portal-sign">{side === "left" ? "IN" : "OUT"}</span>
      <span className="portal-frame"><span className="portal-core" /></span>
      <span className="portal-particle portal-particle-one" />
      <span className="portal-particle portal-particle-two" />
    </div>
  )
}
