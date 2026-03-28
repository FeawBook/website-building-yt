# BookDopes — AI Solutions Website

A dark, premium landing page for **BookDopes**, an AI-powered solutions company. The site features a "Void Intelligence" design aesthetic with deep-space inspired visuals, hexagonal geometry, and luminescent accents.

## Preview

The website includes:
- Hero section with animated hexagonal logo
- AI solutions and features showcase
- Stats and social proof
- Multi-language support (English, Chinese, Thai)
- Fully responsive, mobile-first layout

## Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Single-page structure |
| **Tailwind CSS** (CDN) | Utility-first styling |
| **Vanilla JavaScript** | Animations, scroll effects, language switcher |
| **Space Grotesk + Inter** | Display and body typography (Google Fonts) |
| **Noto Sans SC / Thai** | CJK and Thai language support |
| **Node.js** | Local dev server (`serve.mjs`) |
| **Puppeteer** | Automated screenshots (`screenshot.mjs`) |

## Getting Started

```bash
npm install
node serve.mjs
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── index.html          # Main website (all styles inline)
├── serve.mjs           # Local dev server
├── screenshot.mjs      # Screenshot utility (Puppeteer)
├── brand_assets/       # Logos, guidelines, brand philosophy
├── package.json
└── CLAUDE.md           # AI coding assistant instructions
```

## Brand Colors

| Token | Hex | Role |
|---|---|---|
| Void | `#0A0A0E` | Primary background |
| Iris | `#5E6AD2` | Primary accent |
| Teal | `#3CB4A0` | Secondary accent |
| Lavender | `#A082FF` | Tertiary / Glow |
| Frost | `#DCDEE8` | Primary text |
