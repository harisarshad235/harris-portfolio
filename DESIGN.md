---
name: Haris Arshad Portfolio — Critical Path Network
description: Transit-poster visual system mapping a PMP® delivery career across six colour-coded metro lines.
colors:
  paper: "#F7F7F4"
  surface: "#FFFFFF"
  surface-2: "#ECECE6"
  ink: "#0E1116"
  ink-2: "#4A4F59"
  line-cobalt: "#1F4FE0"
  line-vermilion: "#D93A1F"
  line-sunflower: "#FFC21A"
  line-green: "#0E9F5B"
  line-violet: "#7A3FF2"
  line-magenta: "#D6136F"
  paper-dark: "#0B0D12"
  surface-dark: "#151922"
  surface-2-dark: "#1E2330"
  ink-dark: "#F2F2EE"
  ink-2-dark: "#A9AEB8"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.25rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 3rem)"
    fontWeight: 850
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 800
    lineHeight: 1.2
rounded:
  md: "12px"
  lg: "16px"
  full: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "0 22px"
    height: "48px"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 22px"
    height: "48px"
  button-sun:
    backgroundColor: "{colors.line-sunflower}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0 22px"
    height: "48px"
---

# Design System: Haris Arshad Portfolio — Critical Path Network

## Overview

**Creative North Star: "The Critical Path Transit Poster"**

The portfolio treats a project manager's career as a high-capacity transit network. Every section is a station on one of six colour-coded lines (`L1 Cobalt` through `L6 Magenta`), connected by a continuous vertical route rail along the left margin that fills with colour as the visitor travels down the page. It rejects the SaaS template of gradient text, glassmorphism, and uniform dark cards in favour of flat poster ink, warm off-white stock, octilinear 45-degree schematic diagrams, station roundels, and split-flap departure boards.

Both Day Service (light) and Night Service (dark) modes are first-class citizens: Day Service is printed poster stock (`#F7F7F4`) with deep architectural ink (`#0E1116`), while Night Service shifts to an illuminated night-map board (`#0B0D12`) with high-luminance line colours. Maximalist colour drenching appears at key moments — the proprietary SaaS showcase is drenched in flat Vermilion (`#D93A1F`), case study outcomes are drenched in Cobalt (`#1F4FE0`), and the Contact & Footer section serves as the Central Terminus where all six lines converge on dark ink.

**Key Characteristics:**
- Continuous scroll-linked vertical route rail with circular station roundels (`L1`–`L6`, `INFO`, `END`).
- Six flat, saturated transit line colours; zero decorative gradients or glass blur.
- Variable-width `Archivo` typography pairing expanded black (`125%` stretch, `850` weight) headlines with normal-width body copy.
- Departure-board strips (`#0E1116` background, `#FFCB3D` tabular uppercase text) for verified portfolio metrics.

## Colors

Flat transit-poster pigments paired with warm paper stock and deep ink.

### Primary
- **Poster Ink** (`#0E1116` day / `#F2F2EE` night): Primary typography, station rings, primary CTA buttons, and departure-board housings.
- **Cobalt Line** (`#1F4FE0` day / `#5B85FF` night): Line 1 (Career Route), telecom projects, focus rings, and case-study outcome drench.
- **Vermilion Express** (`#D93A1F` day / `#FF6242` night): Line 2 (Original SaaS Products drench field), primary role subheadline, and error states.

### Secondary
- **Sunflower Line** (`#FFC21A` day / `#FFCB3D` night): Line 3 (Client Projects interchange), departure-board numerals, text selection highlight, and high-visibility secondary CTAs.
- **Green Line** (`#0E9F5B` day / `#2FD283` night): Line 4 (Technology & PMO Stack), live availability beacons, and public-sector case studies.

### Tertiary
- **Violet Line** (`#7A3FF2` day / `#A47BFF` night): Line 5 (Credentials & Certifications) and digital-platform case studies.
- **Magenta Line** (`#D6136F` day / `#FF4FA3` night): Line 6 (Stakeholder Endorsements) and e-commerce case studies.

### Neutral
- **Poster Paper** (`#F7F7F4` day / `#0B0D12` night): Primary page ground.
- **Station Surface** (`#FFFFFF` day / `#151922` night): Card and control backgrounds.
- **Tinted Platform** (`#ECECE6` day / `#1E2330` night): Alternating section ground and pill backgrounds.
- **Secondary Ink** (`#4A4F59` day / `#A9AEB8` night): Body descriptions and supporting metadata.

### Named Rules
**The Flat Pigment Rule.** Line colours are always flat, opaque pigments. Never blend two line colours in a gradient or apply glowing neon drop shadows.
**The Drench Commitment Rule.** When a section or outcome card is drenched (`Vermilion Express`, `Central Terminus`, `Case Outcome`), the colour owns the entire region edge-to-edge.

## Typography

**Display Font:** Archivo Expanded (`font-stretch: 125%`, weight `850`)
**Body Font:** Archivo (`font-stretch: 100%`, weights `400`–`700`)
**Label/Mono Font:** Archivo Wide (`font-stretch: 112%`, weight `700`–`800`, `tabular-nums`)

**Character:** Industrial European transit signage — authoritative, wide-shouldered, and unmistakable at poster scale while remaining effortless to read in dense case-study prose.

### Hierarchy
- **Display** (`850`, `clamp(2.25rem, 5vw, 4.25rem)`, `0.92` line-height, `125%` stretch): Hero nameplate, section station titles, and primary metric callouts.
- **Headline** (`850`, `clamp(1.5rem, 3vw, 2.25rem)`, `1.02` line-height, `125%` stretch): Project, product, and zone titles.
- **Body** (`400`–`500`, `1rem`–`1.125rem`, `1.65` line-height, max `66ch`): Executive bio, project descriptions, and case-study narratives.
- **Label** (`700`–`800`, `0.75rem`–`0.875rem`, `112%` stretch): Station codes, route pills, and departure-board cells.

### Named Rules
**The No-Kicker Rule.** Headings never carry an eyebrow or kicker label above them. The station roundel sits on the left rail and the route badge sits inline beside the heading.

## Layout

Every homepage section uses `.frame` (`max-width: 1280px`, left-padded `3.25rem` mobile / `4.5rem` tablet / `7.5rem` desktop) to reserve a dedicated corridor on the left (`rail-x`) for the continuous vertical route line and station roundels. Full-bleed sections (`Hero` ticker, `FlagshipProjects` Vermilion drench, `Contact` + `Footer` Terminus) span 100% viewport width while aligning their inner content to the same grid.

## Elevation & Depth

Surfaces are architectural and flat at rest, defined by `1.5px` ink rules (`rgba(14, 17, 22, 0.14)` day / `rgba(242, 242, 238, 0.14)` night). Soft ambient elevation (`--lift`) appears only on pointer hover (`translateY(-4px)` over `220ms cubic-bezier(0.23, 1, 0.32, 1)`).

### Shadow Vocabulary
- **Station Ring** (`0 0 0 3px rgb(var(--ink-rgb))`): Crisp ink ring around white station dots (`16px` discs).
- **Card Hover Lift** (`0 2px 4px rgba(14,17,22,0.06), 0 14px 32px -8px rgba(14,17,22,0.18)`): Applied on `:hover` for interactive cards on pointer devices.

### Named Rules
**The Rule-At-Rest Rule.** Cards use a `1.5px` rule border at rest and never combine a resting drop shadow with a border.

## Shapes

Cards and dialogs use a `16px` border radius (`rounded-2xl`). Buttons, filter tabs, route badges, and station markers use full pills (`999px`). Schematic metro lines use `10px` stroke widths with round caps and 45-degree octilinear bends.

## Components

### Buttons
- **Shape:** Full pill (`999px`), minimum height `48px` (`40px` for `.btn-sm`).
- **Primary (`.btn-ink`):** Ink background (`#0E1116`), paper text; shifts to Cobalt (`#1F4FE0`) on hover; scales to `0.97` on `:active`.
- **Outline (`.btn-outline`):** Transparent with `2px` inset ink ring; fills with ink on hover.
- **Sunflower (`.btn-sun`):** Sunflower (`#FFC21A`) background with `#0E1116` text; turns white on hover.

### Chips / Filter Tabs (`.tab`)
- **Style:** Pill with `1.5px` inset rule, a `10px` line-colour station dot, label, and tabular count badge (`.tab-count`).
- **State:** Selected state (`aria-pressed="true"` / `aria-selected="true"`) inverts to solid ink background with paper text.

### Cards (`.card`)
- **Corner Style:** `16px` radius.
- **Border:** `1.5px` solid rule (`2px` solid ink on drenched surfaces).
- **Header Bar:** Top `8px` line-colour bar or dark `.board` strip.

### Navigation
- **Desktop:** Pill-shaped route bar in the sticky header with colour-coded station dots for all 7 stops; active stop inverts to solid ink.
- **Mobile:** Scrollable horizontal station hopper below the main bar.

### Signature Component: RouteSection & Departure Board
- **RouteSection:** Wraps each section with a continuous vertical track along `.rail-x` that fills in the section's line colour (`scaleY`) in proportion to scroll position, topped by a circular station roundel (`L1`–`L6`, `INFO`, `END`).
- **Departure Board (`.board`):** `#0E1116` background with `#FFCB3D` expanded tabular uppercase numerals, used for the hero metric ticker and project KPI strips.

## Do's and Don'ts

### Do:
- **Do** assign every section, project sector, and skill zone to one of the six canonical line colours.
- **Do** use `font-variant-numeric: tabular-nums` (`.tabular`) on all metrics, years, counts, and station codes.
- **Do** gate hover transforms behind `@media (hover: hover) and (pointer: fine)` and honour `prefers-reduced-motion: reduce`.

### Don't:
- **Don't** place an eyebrow or kicker label above `<h1>` or `<h2>` headings.
- **Don't** use CSS gradients on text, backgrounds, or buttons, or `backdrop-filter: blur()` glass effects.
- **Don't** use thick coloured `border-left` callout stripes on cards or notes; use a circular `.station` dot marker instead.

