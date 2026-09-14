"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { PixelLobby } from "@/components/pixel-lobby"
import { PixelShooterGame } from "@/components/pixel-shooter-game"

export function HeroSection() {
  return (
    <section className="hero section-wrap" aria-labelledby="hero-title">
      <div className="hero-intro">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> PLAYER 01 · AVAILABLE FOR NEW QUESTS
          </div>
          <h1 id="hero-title">
            HI, I&apos;M
            <br />
            <span>Nizar.</span>
            <br />
            I BUILD <i>DIGITAL</i>
            <br />
            WORLDS.
          </h1>
          <p className="hero-sub">
            I&apos;m Nizar Fazari, a Software Engineer focused on building reliable,
            scalable, and thoughtful digital products across frontend, backend, and infrastructure.
          </p>
          <div className="hero-actions">
            <a href="#quests" className="pixel-button primary">
              VIEW MY QUESTS <ArrowDown />
            </a>
            <a href="#contact" className="pixel-button secondary">
              SAY HELLO <ArrowUpRight />
            </a>
          </div>
        </div>

        <motion.aside
          className="player-card"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          aria-label="Nizar Fazari player profile"
        >
          <div className="player-card-top">
            <span>PLAYER PROFILE</span>
            <span className="profile-online"><i /> ONLINE</span>
          </div>
          <div className="profile-photo">
            <span className="profile-level">LVL 07</span>
            <img src="/pixel-hero.png" alt="Portrait avatar of Nizar Fazari" />
            <span className="profile-corner profile-corner-top" aria-hidden="true" />
            <span className="profile-corner profile-corner-bottom" aria-hidden="true" />
          </div>
          <div className="profile-name">
            <small>PLAYER 01</small>
            <strong>NIZAR FAZARI</strong>
          </div>
          <dl className="profile-stats">
            <div><dt>CLASS</dt><dd>PRODUCT ENGINEER</dd></div>
            <div><dt>STATUS</dt><dd>OPEN TO QUESTS</dd></div>
            <div><dt>SPECIALTY</dt><dd>IDEAS → INTERFACES</dd></div>
          </dl>
        </motion.aside>
      </div>

      <PixelLobby />

      <motion.div
        className="hero-game-stage"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65 }}
      >
        <div className="game-stage-heading">
          <div>
            <span className="eyebrow">BONUS LEVEL / SIDE QUEST UNLOCKED</span>
            <h2>BUG BLASTER:<br /><i>DEFEND THE CODEBASE</i></h2>
          </div>
          <p>
            Production bugs are incoming. Pilot the dev ship, protect the codebase,
            and ship before Friday.
          </p>
        </div>
        <PixelShooterGame />
      </motion.div>
    </section>
  )
}
