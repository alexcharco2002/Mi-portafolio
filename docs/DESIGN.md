---
name: Ingeniería & Datos Bento Portfolio
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#1bbd85'
  on-tertiary-container: '#00452e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-mono-xs:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style

The design system establishes a high-performance, technical persona for Jeferson Charco—balancing rigorous software engineering with modern data architecture. The visual language conveys precision, velocity, and craftsmanship. 

### Design Direction: Neo-Terminal Bento Minimal
The style merges high-density Bento grid modules with dark developer aesthetics:
- **Atmospheric Depth:** Deep slate foundations layered with translucent glass cards, faint chromatic light rings, and subtle neon edge-glows.
- **Micro-Technical Detailing:** Monospaced runtime metadata, commit-style timestamps, status indicators (e.g., active telemetry pulses), and window control titling on key panels.
- **Editorial Hierarchy:** Confident geometric headlines in Latin American Spanish, paired with clear scannability for engineering recruiters, CTOs, and international clients seeking senior engineering talent.

## Colors

The palette is engineered specifically for deep-slate dark immersion, reserving pure saturated tones for high-signal technical indicators and interactive affordances.

### Primary Accents & Semantics
- **Primary (`#06B6D4` / `#22D3EE`):** Electric Cyan represents runtime execution, core software systems, primary CTA hovers, active tabs, and hyperlinked commit hashes.
- **Secondary (`#8B5CF6` / `#A855F7`):** Violet denotes deep data pipelines, analytical architectures, distributed computing layers, and AI engineering highlights.
- **Tertiary (`#10B981`):** Emerald serves as the operational status color: "Disponible para proyectos", system health indicators, uptime metrics, and performance optimizations (Lighthouse/P99 latency).
- **Neutral Canvas (`#0A0E17`):** Deep obsidian slate acting as the lowest ground. Card surfaces transition through `#111827` (Base Elevation) up to `#1E293B` (Hover/Interactive Elevation).

### Functional Color Applications
- **Borders & Dividers:** `rgba(255, 255, 255, 0.08)` baseline; elevates to `rgba(6, 182, 212, 0.3)` or `rgba(139, 92, 246, 0.3)` upon module focus or hover.
- **Text Tiers:**
  - High-Emphasis Headings: `#F8FAFC` (Slate 50)
  - Secondary Body: `#94A3B8` (Slate 400)
  - Code & Metadata: `#64748B` (Slate 500) with selective cyan or violet highlights

## Typography

The typographic hierarchy pairs the geometric modernity of **Plus Jakarta Sans** with the structural precision of **JetBrains Mono**.

### Typographic Roles
- **Display & Headlines:** Crafted in Plus Jakarta Sans with negative tracking (`-0.02em` to `-0.03em`) for a sculpted, tech-forward presence.
- **Narrative Copy & Value Props:** Rendered in Plus Jakarta Sans for rapid legibility and humanist warmth across long descriptions.
- **Technical Badges, Key-Value Specs, & Shell Headers:** Strict application of JetBrains Mono in uppercase or camelCase formatting (`label-mono-sm`, `code-inline`), giving cards the feel of active developer environments.

## Layout & Spacing

The portfolio employs a high-rigor **12-column Bento Grid** system optimized for multi-density storytelling.

### Grid & Responsiveness
- **Desktop (>= 1024px):** 12-column grid, max-width `1280px` centered, `1.5rem` gutters, and `2rem` outer margins. Bento cells span variable column widths (e.g., `span-8` hero showcase, `span-4` metric feed, `span-4` dynamic tech stack radar).
- **Tablet (768px - 1023px):** Collapses into an 8-column layout with `1.25rem` gutters. Bento cards adapt to `span-4` or `span-8` arrangements.
- **Mobile (< 768px):** Single-column stack with `1rem` gutters and `1.25rem` screen margins. Priority ordered: Persona statement, availability badge, top 2 highlighted engineering achievements, followed by interactive stack filters.

### Vertical Rhythm
- Section spacing follows an unyielding cadence of `space-xl` (48px) to `6rem` (96px) on desktop to create clean, breathable separation between portfolio chapters (Experiencia, Arquitectura, Proyectos Destacados, Contacto).

## Elevation & Depth

Visual hierarchy uses frosted glassmorphism anchored by deep tonal contrast and subtle perimeter glows rather than muddy dropshadows.

### Structural Depth Tiers
- **Tier 0 (Root Canvas):** Solid `#0A0E17` background with an optional faint SVG vector mesh or subtle linear gradient mesh.
- **Tier 1 (Bento Surfaces):** Solid-fill base `#111827` blended with `80%` opacity and `12px` background blur (`backdrop-filter: blur(12px)`). Outlined with an exact `1px solid rgba(255, 255, 255, 0.08)`.
- **Tier 2 (Elevated & Active Surfaces):** `#1E293B` with `1px solid rgba(255, 255, 255, 0.16)`. Applied on hover states, modal overlays, and code preview flyouts.
- **Glow Accents:** High-priority cards (such as the featured system design architecture card) feature soft ambient outer radial glows using cyan or purple: `box-shadow: 0 0 35px -10px rgba(6, 182, 212, 0.15)`.

## Shapes

The geometric framework balances humanized curved panels with structured internals.

- **Bento Modules & Master Containers:** Standardized on `rounded-xl` (1.5rem / 24px) for outer surfaces, framing each module cleanly.
- **Buttons, Form Inputs, & Pill Chips:** Standardized on `rounded` (0.5rem / 8px) or complete capsule radius (full pills for category tags and status nodes).
- **Interior Code Panels & Sub-Cards:** Use `rounded` (0.5rem) to preserve nesting harmony inside primary Bento cards.

## Components

### 1. Bento Card Panels & Terminal Headers
- **Structure:** Backdrop-blurred containers (`#111827`/`80%`) featuring a mandatory top bar on technical cards.
- **Terminal Header Pattern:** A mock OS control panel on the top edge with three 8px circular dots (`#EF4444`, `#F59E0B`, `#10B981`) at 50% opacity, paired with an inline JetBrains Mono directory path (e.g., `~/jeferson/data-pipelines/etl.py`).
- **Interactive States:** On hover, the border shifts from `rgba(255,255,255,0.08)` to `rgba(6, 182, 212, 0.35)`, accompanied by a subtle 2px upward translation (`translateY(-2px)`).

### 2. Status Chips & Availability Badges
- **Live Status Indicator:** Used for "Disponible para nuevos retos / Proyectos". Features an Emerald (`#10B981`) circular ping animation (relative outer ring scaling with opacity falloff) alongside `label-mono-xs` text in high-contrast emerald tint.
- **Domain Chips:** Compact pills with dark semi-transparent fill (`rgba(255, 255, 255, 0.04)`), `1px` border, and domain-coded accents (e.g., Cyan for `TypeScript`, `Next.js`, `Go`; Violet for `Apache Spark`, `PostgreSQL`, `Kafka`).

### 3. Filterable Pill Tabs
- **Container:** Segmented rail with `#111827` surface and rounded pill profile.
- **Active State:** Background filled with `#1E293B`, border tinted with Electric Cyan (`#06B6D4`), and label illuminated in pure white with faint text glow.
- **Inactive State:** Unselected labels in `#64748B`, transitioning to `#94A3B8` on hover.

### 4. Interactive Project Cards
- **Architecture:** Two-column split within the Bento grid. Left: Context, stack taxonomy pills, bulleted business outcomes (e.g., "Latencia reducida en un 42%"). Right: Live code architecture diagram, interactive query preview, or high-fidelity UI snapshot.
- **CTAs:** Dual buttons:
  - *Primary Button:* Solid Electric Cyan (`#06B6D4`) background, dark text (`#0A0E17`), medium font-weight, high-contrast clarity.
  - *Secondary Button / Code Link:* Transparent base, `1px solid rgba(255,255,255,0.15)`, monospaced label with an external diagonal arrow icon (`↗`).

### 5. Input Fields & Contact Terminal
- **Form Controls:** Grounded in `#0A0E17` inset styling, subtle borders, with direct focus rings in Electric Cyan (`0 0 0 2px rgba(6, 182, 212, 0.25)`).
- **Placeholder Style:** Monospaced prompts (`tu_correo@dominio.com`) with command-line caret cues (`>`).