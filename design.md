# Pixel Portfolio — Figma Design Specification

Dokumen ini adalah acuan untuk membangun ulang UI portfolio di Figma, termasuk fitur **Blog / Field Notes**. Tema utama: **Cozy Meadow RPG** — retro pixel, papan kayu, perkamen, dan antarmuka game handheld.

---

## 1. Arah Visual

- **Mood:** hangat, nostalgik, tenang, seperti menu game farming RPG 16-bit.
- **Metafora UI:** portfolio adalah desa; proyek adalah *quest*, skill adalah isi tas, pengalaman adalah papan pengumuman, artikel adalah jurnal lapangan.
- **Bentuk:** sudut tajam, border tebal, shadow offset tanpa blur, efek bevel/inset.
- **Ilustrasi:** pixel-art atau bentuk geometri dengan `image-rendering: pixelated`; hindari foto/ilustrasi yang terlalu modern dan glossy.

---

## 2. Frame Figma

Buat frame berikut:

| Nama | Ukuran | Kegunaan |
|---|---:|---|
| Desktop | 1440 × 1024 | Tampilan utama desktop |
| Laptop | 1280 × 900 | Desktop tanpa dekorasi pinggir |
| Tablet | 768 × 1024 | Layout satu kolom |
| Mobile | 390 × 844 | Tampilan ponsel |

> Aplikasi bersifat **single-page app**: bagian konten berganti, sementara navigasi Gameboy tetap berada di bawah layar.

---

## 3. Design Tokens

### Warna — Light mode

| Token | Hex | Pemakaian |
|---|---|---|
| `Paper / 100` | `#FFF9EB` | Canvas, kartu terang |
| `Paper / 200` | `#F5ECD2` | Panel sekunder |
| `Paper / 300` | `#E0DAC7` | Area inset, divider |
| `Wood / 900` | `#2D1C12` | Border utama, heading |
| `Wood / 700` | `#5C3D28` | Tombol sekunder, teks sekunder |
| `Wood / 500` | `#8B5A2B` | Aksen kayu |
| `Forest` | `#3A5A40` | Status selesai/sukses |
| `Meadow` | `#588157` | Progress/health |
| `Gold` | `#D4A373` | Koin, detail |
| `Gold Bright` | `#E9C46A` | State aktif, highlight |
| `Amber` | `#E76F51` | State aktif/progress |
| `Mana` | `#457B9D` | Tag teknologi |
| `Muted` | `#826C59` | Teks pendukung |
| `Sky` | `#A9D9DE` | Hero background |

### Warna — Dark mode

| Token | Hex |
|---|---|
| `Paper / 100` | `#17252C` |
| `Paper / 200` | `#22353A` |
| `Paper / 300` | `#344C4D` |
| `Wood / 900` | `#F0E2BA` |
| `Wood / 700` | `#C9AE7B` |
| `Wood / 500` | `#98734E` |
| `Forest` | `#78AE72` |
| `Meadow` | `#669A64` |
| `Gold Bright` | `#F0C96C` |
| `Amber` | `#E88765` |
| `Mana` | `#6EA7C1` |

---

## 4. Tipografi

| Peran | Font | Ukuran | Line height |
|---|---|---:|---:|
| Display / judul utama | Press Start 2P | 25–42 px | 1.2–1.45 |
| Judul section | Press Start 2P | 20–30 px | 1.35 |
| Judul kartu | Press Start 2P | 14–16 px | 1.45 |
| Label HUD / tag | Press Start 2P | 6–8 px | 1.2 |
| Body / deskripsi | Space Mono | 12–14 px | 1.65–1.9 |
| Metadata artikel | Press Start 2P | 6–7 px | 1.2 |

Gunakan **Press Start 2P** hanya pada teks pendek agar keterbacaan tetap baik. Isi artikel dan paragraf menggunakan **Space Mono**.

---

## 5. Spacing, Border, dan Shadow

### Spacing scale
`4, 6, 8, 10, 12, 14, 16, 18, 22, 24, 28, 32, 40, 48, 70 px`

### Style global

- Radius: `0–4 px` (hindari rounded besar).
- Border utama: `3–5 px solid Wood / 900`.
- Border papan besar: `8 px solid Wood / 900`.
- Shadow pixel: `3–7 px 3–7 px 0 Wood / 900` tanpa blur.
- Inner highlight: `2 px 2 px 0 rgba(255,255,255,.3)`.
- Inset slot: `inset 2 px 2 px 2 px rgba(0,0,0,.22)`.

Buat Effect Style Figma:
- `Pixel Shadow / Small`: `3, 3, 0, #2D1C12`
- `Pixel Shadow / Large`: `6, 6, 0, #2D1C12`
- `Pixel Inset`: inner shadow `2, 2, 0, rgba(0,0,0,0.22)`

---

## 6. Komponen Dasar

### A. RPG Button

**Variasi:** Primary, Secondary, Text Link, Back Link.

- Tinggi: 42–46 px desktop, 36–40 px mobile.
- Padding horizontal: 12–16 px.
- Primary: fill `Gold Bright`, teks `Wood / 900`.
- Secondary: fill `Wood / 700`, teks `Paper / 100`.
- Border 3 px dan shadow pixel 3 px.
- Hover: posisi bergeser `2 px` ke kanan/bawah; shadow mengecil.
- Sertakan ikon 14–16 px dari Lucide (`ArrowUpRight`, `ArrowLeft`, dll.).

### B. Gameboy Bottom Navigation

Komponen tetap (*fixed*) di bagian bawah.

- Desktop: lebar maksimum `760 px`, tinggi ± `66 px`.
- Mobile: lebar layar dikurangi `16 px`, tinggi ± `50 px`.
- Container: `#D8D0B6`, border 5 px kayu, shadow 6 px.
- Isi: tombol previous, 6 tab, tombol next.
- Tab: `HOME`, `QUESTS`, `BAG`, `BOARD`, `NOTES`, `MAIL`.
- Tab aktif: fill `Gold Bright`, teks kayu gelap.
- Tab normal: fill `Wood / 700`, teks perkamen.
- Tombol mode gelap/terang berbentuk kotak kecil di pojok kanan atas navigasi.

### C. Heading Section

Struktur vertikal:
1. Kicker / label kecil emas, contoh `JOURNAL DESK`.
2. H2 pixel font.
3. Deskripsi Space Mono warna muted.

Gap: `14–16 px`; margin bawah section heading: `34 px`.

---

## 7. Halaman / State Utama

### 7.1 HOME — Workshop

**Background:** langit biru pucat sampai sekitar 430 px pertama, lalu parchment.

- Scene pixel-art desa pada bagian atas (awan, rumah, pohon, jalan).
- Plaque kecil: `SPRING 18 · YEAR 4`, `NIZAR'S WORKSHOP`.
- Dialogue box (lebar max 1120 px):
  - Foto profil pixel di bingkai kayu 150 × 150 px.
  - Nama NPC, headline “Hi, I'm Nizar.”, deskripsi, lokasi.
  - Tombol `VIEW QUEST LOG` dan `SEND A PIGEON`.
- Status cards: empat kolom pada desktop, dua kolom mobile.
  - HEALTH / RELIABILITY
  - ENERGY / DELIVERY
  - MANA / FOCUS
  - AVAILABLE FOR COLLABORATION

### 7.2 QUESTS — Portfolio

**Background:** hijau sage ke parchment, dengan garis horizontal halus.

- Heading: `QUEST LOG / SELECTED WORK` dan `THE TOWN'S NOTICE BOARD`.
- Papan pengumuman kayu besar.
- Kartu proyek dalam grid 2 kolom (1 kolom mobile).
- Kartu memiliki preview kiri 150 px, konten kanan.
- Elemen: kategori quest, status, judul, deskripsi, tech pills, reward, CTA.

### 7.3 BAG — Skills

**Background:** hijau lembut dengan pola grid halus.

- Inventory grid `12 × 3` pada desktop; `6 × 6` mobile.
- Slot kosong krem inset; slot terisi berwarna sesuai kelompok teknologi.
- Panel kanan `ITEM INSPECT` menampilkan skill aktif, level, deskripsi, dan bar proficiency.

### 7.4 BOARD — Experience

**Background:** cokelat muda/perkamen.

- Papan kayu dengan 3 lembar kontrak dipaku.
- Setiap kontrak sedikit miring (`-1°`, `1°`, `-1°`).
- Isi: periode, jabatan, organisasi, ringkasan.

### 7.5 MAIL — Contact

**Background:** biru kehijauan dengan pola titik halus.

- Panel surat perkamen dua kolom (satu kolom mobile).
- Kiri: stamp dan heading `SEND A LETTER`.
- Kanan: form nama, email, pesan, tombol `SEND VIA CARRIER PIGEON`.
- Social links berada di bawah panel.

---

## 8. Fitur Blog — NOTES / Field Notes

Blog diposisikan sebagai **jurnal lapangan di workshop**, bukan blog modern generik.

### 8.1 State: Daftar Artikel

**Nama layar:** `NOTES — Field Notes`

- Background: parchment cokelat muda dengan garis buku tulis horizontal yang sangat halus.
- Heading:
  - Kicker: `JOURNAL DESK`
  - Title: `FIELD NOTES`
  - Description: “Short thoughts on building products, systems, and better developer habits.”
- Grid: 3 kolom desktop, 1 kolom tablet/mobile.

#### Note Card

- Tinggi min: `230 px`.
- Fill: `Paper / 200`.
- Border: `3 px Wood / 900`.
- Shadow: `4 px 4 px 0 Wood / 900`.
- Padding: `22 px`.
- Layout vertikal dengan CTA menempel di bawah.

Urutan konten:
1. Kategori warna emas (`ENGINEERING NOTES`, `SYSTEMS`, `CAREER`).
2. Judul artikel pixel font 14 px.
3. Excerpt Space Mono 12 px.
4. Tombol/link `READ NOTE` + ikon arrow up right.

Contoh artikel:

| Kategori | Judul | Tanggal | Durasi |
|---|---|---|---|
| ENGINEERING NOTES | Designing interfaces that make complex work feel simple | MAR 14, 2025 | 4 MIN READ |
| SYSTEMS | What I look for before shipping a new feature | FEB 26, 2025 | 5 MIN READ |
| CAREER | Building a developer workflow that leaves room to think | JAN 30, 2025 | 3 MIN READ |

### 8.2 State: Detail Artikel

**Nama layar:** `NOTES — Article Detail`

Konten terpusat dengan lebar maksimum `780 px`.

1. **Back action**
   - Ikon panah kiri + `BACK TO FIELD NOTES`.
   - Tanpa container; warna `Wood / 700`.
   - Jarak bawah `28 px`.

2. **Article Header**
   - Fill `Wood / 700`.
   - Border 4 px `Wood / 900`.
   - Shadow `5 px 5 px 0 Wood / 900`.
   - Padding desktop `30 × 34 px`; mobile `23 × 20 px`.
   - Kategori emas kecil.
   - Judul berwarna perkamen.
   - Metadata satu baris/flex wrap:
     - icon kalender + tanggal;
     - icon buku + durasi baca.

3. **Journal Paper**
   - Fill `Paper / 100`.
   - Border kiri, kanan, bawah 4 px kayu; menyatu dengan header.
   - Shadow yang sama dengan header.
   - Garis buku horizontal transparan setiap `32 px`.
   - Padding desktop `38 × 34 px`; mobile `27 × 20 px`.
   - Body text 14 px / 1.9, warna `Wood / 700`.

4. **Article Footer**
   - Icon tag + `WORKSHOP JOURNAL · NIZAR FAZARI`.
   - Center, warna emas, 6 px Press Start 2P.

---

## 9. Auto Layout dan Responsive Rules

- Container konten utama: max width `1120 px`; padding desktop `20 px`, mobile `14 px`.
- Gunakan Auto Layout untuk seluruh cards dan panel.
- Desktop `> 850 px`:
  - Quest grid 2 kolom.
  - Notes grid 3 kolom.
  - Contact 2 kolom.
- Tablet/mobile `≤ 850 px`:
  - Quest, notes, contact menjadi 1 kolom.
  - Bag: inventory berada di atas panel inspect.
  - Side scenery disembunyikan.
- Mobile `≤ 560 px`:
  - Kecilkan label pixel menjadi 5–6 px.
  - Pertahankan body minimal 12–13 px.
  - Gameboy nav tetap terlihat dan tidak tertutup konten.

---

## 10. Interaksi Prototype Figma

1. Klik tab `NOTES` → tampilkan daftar Field Notes.
2. Klik `READ NOTE` → navigasi ke state Detail Artikel.
3. Klik `BACK TO FIELD NOTES` → kembali ke daftar artikel.
4. Klik tab lain → pindah screen dengan transisi pendek `Dissolve` 150–200 ms atau `Smart Animate` dengan offset vertikal 5–8 px.
5. Hover card / tombol → warna emas atau teks amber; tombol terlihat bergeser 2 px.
6. Toggle moon/sun → gunakan variables mode Light / Dark.

---

## 11. Checklist Handoff

- [ ] Buat Color Variables Light dan Dark.
- [ ] Buat Text Styles untuk Display, Heading, Label, Body, Metadata.
- [ ] Buat Effect Styles Pixel Shadow dan Pixel Inset.
- [ ] Jadikan Button, Gameboy Nav, Heading, Note Card, dan Article Header sebagai Components.
- [ ] Gunakan variants untuk default/hover/active dan light/dark bila diperlukan.
- [ ] Pastikan semua teks artikel menggunakan Space Mono agar mudah dibaca.
- [ ] Jangan gunakan radius modern besar, blur berlebihan, atau gradient glossy.
