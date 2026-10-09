# Cozy Meadow RPG — Design System Specification

> Panduan visual, token desain, tipografi, palet warna, dan aturan komponen UI bertema **Retro Pixel / Cozy Farming RPG** (terinspirasi oleh game seperti *Stardew Valley*).

---

## 1. Brand & Design Vision

- **Theme Archetype**: Warm, nostalgic, tactile pixel-art farming RPG.
- **Atmosphere**: Palet earthy (cokelat kayu, emas jerami, daun sage/forest green, kertas perkamen hangat), struktur berbingkai kotak kayu bertingkat (*beveled pixel borders*), dan tipografi monospace/retro terminal.
- **Core Principles**:
  - **Tactile Nostalgia**: Semua elemen berkesan seperti item fisik di dunia game (perkamen surat, ransel kulit, papan pengumuman kayu, botol ramuan/mana).
  - **Clear Data Hierarchy**: Statistik game (HP/Stamina, Level, Gold, Buffs) digunakan secara fungsional untuk merepresentasikan metrik profesional.
  - **Pixel Precision**: Radius sudut tajam atau minimal (2px - 4px), garis batas ganda atau *groove/ridge* berlapis menyerupai bingkai GUI game 16-bit.

---

## 2. Color Palette & Tokens

### Core Color Palette

| Token | Hex Code | Deskripsi & Penggunaan |
|---|---|---|
| `--color-parchment-light` | `#FFF9EB` | Latar kanvas utama & kartu perkamen terang |
| `--color-parchment-base` | `#F5ECD2` | Kontainer sekunder, area latar form / slot |
| `--color-parchment-dim` | `#E0DAC7` | Border dalam, divider perkamen, tekstur redup |
| `--color-wood-dark` | `#2D1C12` | Border terluar, outline utama, teks judul tebal |
| `--color-wood-medium` | `#5C3D28` | Header panel, tombol aksi sekunder, tab navigasi |
| `--color-wood-light` | `#8B5A2B` | Aksen kayu, border aktif / hover |
| `--color-forest-green` | `#3A5A40` | Status sukses, badge completed, aksen hero RPG |
| `--color-meadow-green` | `#588157` | Progress bar EXP, stamina, health full |
| `--color-gold-coin` | `#D4A373` | Nilai Gold/Mata uang, bintang reward, highlight |
| `--color-gold-bright` | `#E9C46A` | Notifikasi buff, teks penting, bintang rating |
| `--color-coffee-amber` | `#E76F51` | Energy bar buff, tag 'In Progress', status aktif |
| `--color-mana-blue` | `#457B9D` | Focus / Mana bar, tag teknologi, link sekunder |

### Functional UI Tokens

```css
:root {
  /* Surfaces & Backgrounds */
  --bg-canvas: #fff9eb;
  --bg-surface-card: #faf3df;
  --bg-surface-inset: #ede4ca;
  --bg-slot-empty: #e2d7ba;
  
  /* Wood Frame & Borders */
  --border-outer-wood: #2d1c12;
  --border-inner-wood: #5c3d28;
  --border-highlight-wood: #8b5a2b;
  --border-parchment: #cbbfa2;

  /* Typography */
  --text-primary: #2d1c12;
  --text-secondary: #5c3d28;
  --text-muted: #826c59;
  --text-inverse: #fff9eb;
  --text-gold: #b37400;

  /* RPG Meters & Buffs */
  --meter-health: #40916c;
  --meter-energy: #d97706;
  --meter-mana: #2563eb;
  --meter-exp: #ca8a04;
}
```

---

## 3. Typography & Text Hierarchy

### Font Family
- **Primary / Monospace Font**: `'Space Mono', 'Courier New', monospace`
- **Fallback Pixel Font Option**: `'Press Start 2P', monospace` (untuk judul pendek atau HUD)

### Type Scale

| Level | Size | Weight | Line Height | Penggunaan |
|---|---|---|---|---|
| **Display / Game Logo** | 24px - 28px | 700 (Bold) | 1.2 | Header logo, judul game banner |
| **Section Header (H2)** | 18px - 20px | 700 (Bold) | 1.3 | Judul quest log, inventory, mailbox |
| **Panel Header (H3)** | 15px - 16px | 700 (Bold) | 1.4 | Judul sub-panel, kartu nama item |
| **Body (Regular)** | 13px - 14px | 400 (Regular) | 1.6 | Dialog NPC, deskripsi quest, biografi |
| **Caption & HUD Label** | 10px - 11px | 700 (Bold) | 1.2 | Bar meter, tier item, tag status, level |

---

## 4. UI Components & Patterns

### 1. Retro HUD Header
- **Layout**: Bar horizontal ramping di bagian paling atas dengan latar kayu tua (`#2D1C12`).
- **Elemen**:
  - Logo Game / Dev: Teks bracket kotak `[ MEADOW.DEV ]`.
  - Navigasi Tab: Tombol datar dengan format `[ Farmhouse ]`, `[ Quest Log ]`, dsb.
  - Right Widget: Musim & tanggal (`Yr 4 • Spr 18`), status koin emas (`99,999G`), dan potret avatar 32x32.
  - Status Sub-bar: Info buff aktif (`ZONE: Pelican Sector 04`, `BUFF: +3 Problem Solving, +2 Coffee Focus`).

### 2. Dialogue & NPC Box
- **Struktur**: Kontainer perkamen krem dengan border kayu ganda 3px.
- **Komponen**:
  - Avatar Frame: Foto potret pixel art 1:1 dalam bingkai kayu.
  - Speech Balloon: Teks berpetik serif/mono dengan kursor panah berkedip khas dialog RPG di pojok kanan bawah.
  - Action Chips: Tombol aksi instan (misal: *Inspect Quest Log*, *Open Backpack*, *Send Pigeon*).

### 3. Inventory Grid (36 Slots)
- **Grid Layout**: 12 kolom x 3 baris.
- **Slot State**:
  - `Empty`: Kotak bevel cekung (`#E2D7BA`) dengan border inset 2px.
  - `Filled`: Menampilkan ikon teknologi (TS, React, Node, SQL) + badge level kecil (L4, L5, L10).
  - `Hover/Active`: Border emas menyala (`#D4A373`) dengan tooltip preview spek item di sebelah kanan.

### 4. Quest Log Cards (Portfolio Showcase)
- **Struktur**: Grid 2 kolom kartu misi bersudut tegas.
- **Elemen Misi**:
  - Tag Kategori: `LEGENDARY CONTRACT`, `ACTIVE BOUNTY`, atau `TOWN CONTRACT`.
  - Status Badge: `COMPLETED ★★★` (hijau) atau `IN PROGRESS (85%)` (oranye amber).
  - Thumbnail Proyek: Tangkapan layar proyek berbingkai kayu tipis.
  - Tech Pills & Reward: Detail stack dan imbalan misi (`REWARD: 12,000G • 450 EXP`).
  - Action Links: Tombol bergaya tombol mesin arkade (`[ Code ]`, `[ Live Demo ]`).

### 5. Community Bulletin Board (Experience & Endorsements)
- **Tampilan**: Papan pengumuman kayu pinus dengan aksen pin paku payung.
- **Kontrak Guild (Timeline)**: Kartu kontrak kerja dengan penanda tahun (*Year 1*, *Year 2-3*, *Present*).
- **Testimoni Warga**: Kutipan rekomendasi dari karakter fiktif game (*Robin the Architect*, *Demetrius the Scientist*, *Gus the Saloon Keeper*) lengkap dengan rating 5 bintang emas.

### 6. Homestead Mailbox (Contact Dispatch)
- **Format**: Formulir perkamen surat berprangko (*Postage Pre-paid*).
- **Input Fields**: Input teks dengan border inset, latar perkamen lebih terang, dan label bergaya telegram.
- **Tombol Kirim**: Tombol hijau daun / kayu tebal dengan ikon merpati pos (`Send via Carrier Pigeon`).

---

## 5. CSS Utility Snippets

```css
/* Pixel Box Shadow & Bevel Effect */
.rpg-box-bevel {
  background-color: var(--bg-surface-card);
  border: 4px solid var(--border-outer-wood);
  box-shadow: 
    inset 2px 2px 0px rgba(255, 255, 255, 0.4),
    inset -2px -2px 0px rgba(0, 0, 0, 0.2),
    3px 3px 0px var(--border-outer-wood);
}

/* Slot Inventory Inset */
.rpg-slot {
  width: 44px;
  height: 44px;
  background-color: var(--bg-slot-empty);
  border: 2px solid #b8a882;
  box-shadow: inset 2px 2px 2px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.rpg-slot:hover {
  border-color: #d4a373;
  background-color: #fff2cc;
  cursor: pointer;
}

/* RPG Meter Bar */
.rpg-meter-fill {
  height: 8px;
  background: linear-gradient(180deg, #588157 0%, #3a5a40 100%);
  border: 1px solid #1e3321;
}
```

---

## 6. Accessibility & Responsiveness Guidelines

- **Contrast Ratio**: Teks utama (`#2D1C12`) pada latar belakang perkamen (`#FFF9EB`) memiliki rasio kontras > 11:1 (memenuhi standar AAA WCAG).
- **Readability**: Meskipun bernuansa retro monospace, ukuran font body dijaga minimal 13px untuk memastikan kenyamanan membaca deskripsi proyek panjang.
- **Responsive Adaptations (Mobile)**:
  - Inventory 12 kolom dikompres menjadi 6 kolom x 6 baris.
  - Quest card beralih dari grid 2-kolom menjadi 1-kolom bertingkat.
  - HUD bar menyusutkan tab menjadi dropdown tombol tas cepat (*Menu Quick-bar*).
