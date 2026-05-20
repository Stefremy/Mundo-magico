# DESIGN.md — Mundo Mágico

> AI agent design system for **Mundo Mágico** — a mystical shop selling ritual artefacts, tarot readings, candles, crystals, herbs, and esoteric services.
> Generated from: Power Design 20 principles + Awesome DESIGN.md methodology.

---

## Brand Essence

**Mood:** Ancient, mystical, sacred, luxurious, enigmatic. Like stepping into a centuries-old apothecary lit by candlelight.
**Voice:** Whispered wisdom. Poetic, not pushy. Reverent, not cheesy.
**NOT:** Halloween kitsch, neon gimmicks, generic "spiritual" stock photos, over-decorated clutter.

---

## Color System — 60 / 30 / 10 Rule

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| **60% — Dominant** | `--surface` | `#131313` | Page background, primary canvas |
| **60% — Dominant alt** | `--surface-low` | `#0e0e0e` | Footer, deep sections |
| **60% — Dominant mid** | `--surface-container` | `#1c1b1b` | Cards, panels |
| **30% — Secondary** | `--on-surface` | `#e5e2e1` | Body text, headings on dark |
| **30% — Secondary muted** | `--on-surface-muted` | `rgba(229,226,225,0.55)` | Captions, secondary text |
| **30% — Secondary accent** | `--secondary` | `#dcb8ff` | Hover states, soft links, footer accents |
| **10% — Accent ONLY** | `--primary` | `#e9c349` | CTAs, logo, active states, key highlights — ONE per view |
| **Light sections** | `--surface-light` | `#f5f5f0` | Product grid backgrounds (inverted section) |
| **Light text on light** | `--surface-light-text` | `#131313` | Text on light sections |

**Rules:**
- Gold (`#e9c349`) appears on ONE focal element per screen viewport. Never two gold blocks fighting for attention.
- Purple (`#dcb8ff`) is reserved for hover/transition states only — never static emphasis.
- Never use hue alone to encode meaning — always pair with weight or icon.
- WCAG contrast target: ≥ 7:1 (AAA) for all body text.

---

## Typography — Modular Scale 1.414 (√2)

**Base size:** 16px

| Role | Size | Weight | Font | Letter-spacing |
|------|------|--------|------|----------------|
| Display / Hero | 72px–90px | 400 | Cinzel Decorative | `0.15em` |
| H1 | 56px | 400 italic | Newsreader | `0.05em` |
| H2 | 40px | 300 italic | Newsreader | `0.03em` |
| H3 | 28px | 400 italic | Newsreader | normal |
| Subheading label | 10px | 500 | Work Sans | `0.35em` uppercase |
| Body | 16px | 400 | Manrope | normal, line-height 1.6 |
| Body large | 20px | 400 | Manrope | normal, line-height 1.7 |
| Caption / Price | 13px | 600 | Manrope | `0.05em` |

**Rules:**
- Maximum **4 type sizes per section**, **6 per full page**.
- Line length ≤ 65 characters for body blocks (`max-w-prose`).
- Line-height: 1.05–1.15 for display, 1.5–1.7 for body.
- Never use font weights below 300 — they vanish on dark backgrounds.
- Subheading labels (tiny caps, tracked) always in Work Sans — used ONLY to name sections, never for emphasis.

---

## Spacing — 8pt Grid

All spacing values must be multiples of 8:

`4px · 8px · 16px · 24px · 32px · 48px · 64px · 96px · 128px · 192px`

| Context | Value |
|---------|-------|
| Within a component (tight) | 8px / 16px |
| Between related elements | 24px / 32px |
| Card internal padding | 24px or 32px |
| Section padding (vertical) | 96px / 128px |
| Unrelated section gap | 48px minimum |
| Edge safe-zone | 32px minimum (ideal 48px or 5% viewport) |

---

## Layout Grid

- **12-column grid**, 24px gutters, max-width `1280px`, centered.
- Content always inside safe zone: min `48px` from viewport edge on desktop.
- Mobile: single column, `24px` side padding.
- **40% minimum whitespace ratio** per section — mystical layouts breathe.

---

## Visual Hierarchy Rules

1. **One focal point per section.** One element dominates — either by size (≥ 2× others), or by being the only gold-tinted element.
2. **Scale ratio:** H1 : body = at least 3:1.
3. **F-pattern:** Hero headline top-left or centered. Most critical info in the top 30% of any section.
4. **Signal-to-noise:** Remove decorative borders, drop-shadows > 4px, and pattern overlays from text zones. Texture should appear in backgrounds and images only.
5. **Gestalt proximity:** Items in the same group ≤ 16px apart. Unrelated groups ≥ 48px apart.

---

## Component Patterns

### Hero / Header
- Full-viewport height (100vh or 110vh).
- Background: full-bleed image, desaturated (`grayscale + opacity 0.5–0.7`), parallax scroll.
- Overlay: `linear-gradient(to bottom, surface/30, surface/10, surface)` — ensures seamless transition into page.
- Centered text block: glass panel (`bg-surface/70 backdrop-blur-xl`), `border border-primary/15`, no hard drop shadow.
- CTA button: ghost style (`border border-primary text-primary`), on hover fills solid gold.

### Navigation
- Fixed top, full width.
- `bg-surface/90 backdrop-blur-md` — not fully opaque, the page shows through slightly.
- Logo: Newsreader italic, gold. No icon needed — the name IS the brand mark.
- Links: Work Sans, `text-[10px] tracking-[0.3em] uppercase`, muted on rest, gold on hover.
- Border bottom: `border-b border-outline-variant/10` — barely visible, not a wall.

### Product Cards (on light section `#f5f5f0`)
- White background card, no border radius (sharp corners = precision, not softness).
- Image: `aspect-[3/4]`, `object-contain`, white internal padding.
- Badge: flat gold rectangle, no rounded corners, 9px Work Sans uppercase.
- Hover: image scales 1.08×, transition 700ms ease.
- Title: Newsreader italic 20px. Descriptor: Work Sans 10px uppercase muted. Price: Manrope bold 14px.

### Sections (dark)
- Background `--surface` (`#131313`) default.
- Section overture: `font-label text-[10px] tracking-[0.35em] uppercase text-primary` — small gold eyebrow label.
- Section title: Newsreader italic H2.
- Breathing room: `py-32` (128px) vertical padding minimum.

### Glass Panel
```css
background: rgba(19, 19, 19, 0.72);
backdrop-filter: blur(24px);
border: 1px solid rgba(233, 195, 73, 0.12);
```

### Buttons
- **Primary CTA:** `border border-primary text-primary px-10 py-4`, hover: `bg-primary text-on-primary`. Transition 500ms.
- **Text CTA (arrow):** gold text + animated underline extending right. No fill, no border.
- **No border-radius** — sharp edges reinforce the ancient/precise aesthetic.
- Letter-spacing `0.2em` on all button labels.

### Separators / Dividers
- Use whitespace as divider. Avoid `<hr>` lines.
- Exception: a single 1px gold line (`border-t border-primary/10`) between major light→dark section transitions.

---

## Animation & Motion

- **Scroll reveal:** Elements fade in + translate 24px upward, 600ms ease-out. Stagger siblings by 120ms.
- **Parallax:** Hero background moves at 0.4× scroll speed. Hero text at 0.1× (counter-parallax feel).
- **Hover transitions:** 300–500ms ease. Never instantaneous, never > 700ms.
- **Floating decoration icons:** Rotate slowly (0.03–0.05 deg/px scroll), opacity 15–25%, pointer-events none.
- **No bounce, no spring, no elastic** — everything is deliberate and slow like ritual.

---

## Image Treatment

- **Dark sections:** All photography is `grayscale brightness-75` — uniformity > variety.
- **Light sections:** Product images shown in color on white cards.
- **Never** use AI-illustrated "magical" clipart or stock crystal balls.
- Preferred: candle flames, hands, aged paper, smoke, botanicals, moon, stars — real, textured, moody.
- Offset-frame effect: a border div shifted `-top-6 -left-6` creates depth without drop-shadow.

---

## Do / Don't

| ✅ Do | ❌ Don't |
|-------|---------|
| One gold element per viewport | Two gold CTAs competing |
| Generous whitespace (≥ 40%) | Packed grids with no breathing room |
| Muted photography (grayscale dark) | Bright rainbow crystals |
| Sharp corners everywhere | Mixed border-radius styles |
| Newsreader italic for editorial feel | Comic Sans, Papyrus, or display fonts that scream "Halloween" |
| Subdued animation (300–600ms) | Fast snapping or bouncing |
| Section eyebrow label in tiny caps | Long subheadings in all-caps |
| Glass panels for overlay text | Hard opaque boxes over images |

---

## Accessibility

- Minimum contrast body text: **7:1 AAA** on dark background.
- All icon buttons have `aria-label`.
- Images have descriptive `alt` text.
- Color never the **only** indicator of state — always pair with shape/label/weight.
- Focus ring: `outline: 2px solid #e9c349; outline-offset: 4px`.

---

*Tell your AI agent: "Build this page following DESIGN.md" for pixel-accurate results consistent with the Mundo Mágico brand."*
