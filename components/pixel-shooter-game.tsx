"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const PLAYER_Y = 82
const MAX_HP = 3

const stars = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  x: (index * 37 + 11) % 97,
  y: (index * 53 + 7) % 94,
  delay: -((index * 0.17) % 2.8),
  duration: 1.8 + (index % 4) * 0.45,
}))

type GameStatus = "idle" | "playing" | "gameover"

type Entity = {
  id: number
  x: number
  y: number
}

type Explosion = Entity & {
  expiresAt: number
}

type GameFrame = {
  playerX: number
  bullets: Entity[]
  enemies: Entity[]
  explosions: Explosion[]
  score: number
  hp: number
  wave: number
  hitUntil: number
}

function createInitialFrame(): GameFrame {
  return {
    playerX: 50,
    bullets: [],
    enemies: [],
    explosions: [],
    score: 0,
    hp: MAX_HP,
    wave: 1,
    hitUntil: 0,
  }
}

export function PixelShooterGame() {
  const [status, setStatus] = useState<GameStatus>("idle")
  const [frame, setFrame] = useState<GameFrame>(createInitialFrame)
  const [highScore, setHighScore] = useState(0)
  const gameRef = useRef<GameFrame>(createInitialFrame())
  const statusRef = useRef<GameStatus>("idle")
  const boardRef = useRef<HTMLDivElement>(null)
  const pressedKeys = useRef(new Set<string>())
  const entityId = useRef(0)
  const lastShotAt = useRef(0)
  const lastSpawnAt = useRef(0)
  const isVisible = useRef(true)

  useEffect(() => {
    const storedScore = Number(window.localStorage.getItem("debug-dungeon-high-score"))
    const scoreTimer = window.setTimeout(() => {
      if (Number.isFinite(storedScore)) setHighScore(storedScore)
    }, 0)
    return () => window.clearTimeout(scoreTimer)
  }, [])

  useEffect(() => {
    const board = boardRef.current
    if (!board) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting
      },
      { threshold: 0.1 },
    )

    observer.observe(board)
    return () => observer.disconnect()
  }, [])

  const updateStatus = useCallback((nextStatus: GameStatus) => {
    statusRef.current = nextStatus
    setStatus(nextStatus)
  }, [])

  const startGame = useCallback(() => {
    const firstFrame = createInitialFrame()
    firstFrame.enemies = [{ id: ++entityId.current, x: 50, y: 10 }]
    gameRef.current = firstFrame
    setFrame(firstFrame)
    lastSpawnAt.current = performance.now()
    lastShotAt.current = 0
    pressedKeys.current.clear()
    updateStatus("playing")
    window.setTimeout(() => boardRef.current?.focus(), 0)
  }, [updateStatus])

  const shoot = useCallback(() => {
    if (statusRef.current !== "playing") return

    const now = performance.now()
    if (now - lastShotAt.current < 230) return

    lastShotAt.current = now
    gameRef.current.bullets = [
      ...gameRef.current.bullets,
      { id: ++entityId.current, x: gameRef.current.playerX, y: PLAYER_Y - 4 },
    ]
  }, [])

  const movePlayerToPointer = useCallback((clientX: number) => {
    const board = boardRef.current
    if (!board || statusRef.current !== "playing") return

    const bounds = board.getBoundingClientRect()
    const nextX = ((clientX - bounds.left) / bounds.width) * 100
    gameRef.current.playerX = Math.min(94, Math.max(6, nextX))
  }, [])

  useEffect(() => {
    if (status !== "playing") return

    let animationFrame = 0
    let previousTime = performance.now()

    const runGame = (now: number) => {
      const delta = Math.min((now - previousTime) / 1000, 0.04)
      previousTime = now

      if (!isVisible.current || document.hidden) {
        animationFrame = requestAnimationFrame(runGame)
        return
      }

      const game = gameRef.current
      const leftPressed = pressedKeys.current.has("arrowleft") || pressedKeys.current.has("a")
      const rightPressed = pressedKeys.current.has("arrowright") || pressedKeys.current.has("d")
      const direction = Number(rightPressed) - Number(leftPressed)
      const playerX = Math.min(94, Math.max(6, game.playerX + direction * 48 * delta))
      const wave = Math.floor(game.score / 600) + 1
      const spawnDelay = Math.max(420, 1150 - wave * 85)

      let enemies = game.enemies.map((enemy) => ({
        ...enemy,
        y: enemy.y + (13.5 + wave * 1.4) * delta,
      }))
      let bullets = game.bullets
        .map((bullet) => ({ ...bullet, y: bullet.y - 62 * delta }))
        .filter((bullet) => bullet.y > -8)
      const explosions = game.explosions.filter((explosion) => explosion.expiresAt > now)
      let score = game.score
      let hp = game.hp

      if (now - lastSpawnAt.current > spawnDelay) {
        enemies.push({
          id: ++entityId.current,
          x: 7 + Math.random() * 86,
          y: -7,
        })
        lastSpawnAt.current = now
      }

      const destroyedBullets = new Set<number>()
      const destroyedEnemies = new Set<number>()

      for (const bullet of bullets) {
        for (const enemy of enemies) {
          if (
            !destroyedEnemies.has(enemy.id) &&
            Math.abs(bullet.x - enemy.x) < 5.5 &&
            Math.abs(bullet.y - enemy.y) < 5
          ) {
            destroyedBullets.add(bullet.id)
            destroyedEnemies.add(enemy.id)
            score += 100
            explosions.push({
              id: ++entityId.current,
              x: enemy.x,
              y: enemy.y,
              expiresAt: now + 420,
            })
            break
          }
        }
      }

      bullets = bullets.filter((bullet) => !destroyedBullets.has(bullet.id))
      enemies = enemies.filter((enemy) => {
        if (destroyedEnemies.has(enemy.id)) return false

        const hitPlayer = enemy.y > PLAYER_Y - 5 && Math.abs(enemy.x - playerX) < 7
        const escaped = enemy.y > 96
        if (hitPlayer || escaped) {
          hp -= 1
          explosions.push({
            id: ++entityId.current,
            x: hitPlayer ? playerX : enemy.x,
            y: hitPlayer ? PLAYER_Y : 93,
            expiresAt: now + 420,
          })
          return false
        }
        return true
      })

      const nextFrame: GameFrame = {
        playerX,
        bullets,
        enemies,
        explosions,
        score,
        hp: Math.max(0, hp),
        wave: Math.floor(score / 600) + 1,
        hitUntil: hp < game.hp ? now + 180 : game.hitUntil > now ? game.hitUntil : 0,
      }

      gameRef.current = nextFrame
      setFrame(nextFrame)

      if (hp <= 0) {
        const nextHighScore = Math.max(highScore, score)
        setHighScore(nextHighScore)
        window.localStorage.setItem("debug-dungeon-high-score", String(nextHighScore))
        updateStatus("gameover")
        return
      }

      animationFrame = requestAnimationFrame(runGame)
    }

    animationFrame = requestAnimationFrame(runGame)
    return () => cancelAnimationFrame(animationFrame)
  }, [highScore, status, updateStatus])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key.toLowerCase()
    if (["arrowleft", "arrowright", "a", "d", " "].includes(key)) {
      event.preventDefault()
    }
    pressedKeys.current.add(key)
    if (key === " ") shoot()
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    pressedKeys.current.delete(event.key.toLowerCase())
  }

  return (
    <div className="arcade-shell" aria-label="Debug Dungeon mini game">
      <div className="arcade-marquee">
        <span>◆</span>
        <div>
          <small>DUNGEON 07</small>
          <strong>DEBUG DUNGEON</strong>
        </div>
        <span>◆</span>
      </div>

      <div
        ref={boardRef}
        className={`game-screen${frame.hitUntil > 0 ? " is-hit" : ""}`}
        tabIndex={status === "playing" ? 0 : -1}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={() => pressedKeys.current.clear()}
        onPointerDown={(event) => {
          if (status !== "playing") return
          event.currentTarget.setPointerCapture(event.pointerId)
          movePlayerToPointer(event.clientX)
          shoot()
        }}
        onPointerMove={(event) => {
          if (event.pointerType === "mouse" || event.currentTarget.hasPointerCapture(event.pointerId)) {
            movePlayerToPointer(event.clientX)
          }
        }}
      >
        <div className="game-grid" aria-hidden="true" />
        {stars.map((star) => (
          <span
            className="game-star"
            key={star.id}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}

        <div className="game-hud" aria-hidden="true">
          <div>
            <span>SCORE</span>
            <strong>{String(frame.score).padStart(5, "0")}</strong>
          </div>
          <div className="game-wave">
            <span>ROOM</span>
            <strong>{String(frame.wave).padStart(2, "0")}</strong>
          </div>
          <div className="game-hp">
            <span>HP</span>
            <strong>{Array.from({ length: MAX_HP }, (_, index) => (index < frame.hp ? "■" : "□")).join("")}</strong>
          </div>
        </div>

        {status !== "idle" && (
          <div
            className="player-ship game-entity"
            style={{ left: `${frame.playerX}%`, top: `${PLAYER_Y}%` }}
            aria-hidden="true"
          >
            <span className="ship-wing ship-wing-left" />
            <span className="ship-wing ship-wing-right" />
            <span className="ship-core" />
            <span className="ship-cockpit" />
            <span className="ship-flame" />
          </div>
        )}

        {frame.bullets.map((bullet) => (
          <span
            className="laser game-entity"
            key={bullet.id}
            style={{ left: `${bullet.x}%`, top: `${bullet.y}%` }}
            aria-hidden="true"
          />
        ))}

        {frame.enemies.map((enemy) => (
          <div
            className="bug-enemy game-entity"
            key={enemy.id}
            style={{ left: `${enemy.x}%`, top: `${enemy.y}%` }}
            aria-hidden="true"
          >
            <span className="bug-body" />
            <span className="bug-eye bug-eye-left" />
            <span className="bug-eye bug-eye-right" />
          </div>
        ))}

        {frame.explosions.map((explosion) => (
          <span
            className="pixel-explosion game-entity"
            key={explosion.id}
            style={{ left: `${explosion.x}%`, top: `${explosion.y}%` }}
            aria-hidden="true"
          />
        ))}

        {status === "idle" && (
          <div className="game-overlay">
            <span className="game-kicker">CAMP ALERT</span>
            <div className="idle-ship" aria-hidden="true">▲</div>
            <h2>DEBUG DUNGEON</h2>
            <p>CLEAR THE GLITCHES!</p>
            <button type="button" className="game-start" onClick={startGame}>
              PRESS START
            </button>
          </div>
        )}

        {status === "gameover" && (
          <div className="game-overlay game-over">
            <span className="game-kicker">CAMPFIRE FLICKERED</span>
            <h2>PARTY WIPED</h2>
            <p>SCORE: {String(frame.score).padStart(5, "0")}</p>
            <button type="button" className="game-start" onClick={startGame}>
              RE-ENTER DUNGEON
            </button>
          </div>
        )}
      </div>

      <div className="arcade-controls">
        <span><kbd>A</kbd><kbd>D</kbd> MOVE</span>
        <span><kbd>SPACE</kbd> FIRE</span>
        <span className="high-score">HI {String(highScore).padStart(5, "0")}</span>
      </div>
      <p className="touch-help">DRAG TO MOVE · TAP TO FIRE</p>
      <span className="sr-only" aria-live="polite">
        {status === "playing" && "Mission started."}
        {status === "gameover" && `Game over. Final score ${frame.score}.`}
      </span>
    </div>
  )
}
