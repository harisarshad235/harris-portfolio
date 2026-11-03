---
name: Haris Arshad Portfolio — Calm Editorial
description: A quiet, serif-led briefing document for a PMP-certified delivery leader, in warm paper and deep teal.
colors:
  paper: "#F6F4EE"
  surface: "#FCFBF8"
  surface-2: "#EEEBE2"
  ink: "#14201E"
  ink-2: "#4A5753"
  accent: "#0F5E57"
  accent-soft: "#DEEAE5"
  close: "#0B3B37"
  ok: "#1B7D4C"
  danger: "#AE3428"
  paper-dark: "#0D1514"
  surface-dark: "#131E1C"
  surface-2-dark: "#192725"
  ink-dark: "#ECEFEA"
  ink-2-dark: "#A7B3AE"
  accent-dark: "#5FC4B3"
  close-dark: "#061614"
typography:
  display:
    fontFamily: "Source Serif 4, ui-serif, Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.018em"
  headline:
    fontFamily: "Source Serif 4, ui-serif, Georgia, serif"
    fontSize: "clamp(1.875rem, 3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "64px"
components:
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "0 21px"
    height: "46px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 21px"
    height: "46px"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.close}"
    rounded: "{rounded.md}"
    padding: "0 21px"
    height: "46px"
---

# Design System: Haris Arshad Portfolio — Calm Editorial

## Overview

**Creative North Star: "The Delivery Briefing"**

The site reads like a well-edited briefing from a senior delivery leader: serif headings, generous whitespace, hairline rules, and numbers that do the persuading. It replaces the earlier loud transit-poster world (route rail, line-colour chips, departure boards, six-colour palette) with restraint. One deep teal carries every interactive and structural cue; ink and warm paper do the rest.

Day mode is warm paper (`#F6F4EE`) with teal-tinted ink (`#14201E`). Night mode is a forest-black ground (`#0D1514`) with the same accent lifted to `#5FC4B3`. Both are first-class and persisted in `localStorage['portfolio-theme']`. A single deep forest field (`#0B3B37` day, `#061614` night) closes the page at Contact and Footer, the only region where colour owns the ground.

**Key Characteristics:**
- Two-column section grammar on desktop: heading and intro left (sticky), content right; stacked on mobile.
- Serif display (Source Serif 4) for headings and figures; Hanken Grotesk for text and UI.
- Hairline rules at rest (`1px`, ink at 12–20% opacity); no resting shadows.
- A ledger of verified figures (PKR 700M+, PKR 103M+, 80%, 0% scope creep) instead of stat cards.
- One authored motion moment: the hero rises in once; sections fade up 16px as they enter.

## Colors

### Primary
- **Ink** (`#14201E` day / `#ECEFEA` night): text, rules, and the hover state of primary buttons.
- **Deep Teal** (`#0F5E57` day / `#5FC4B3` night): the only accent. Links, role line, active nav and tab underline, primary buttons, focus ring, text selection tint, caret.

### Neutral
- **Paper** (`#F6F4EE` / `#0D1514`): page ground.
- **Surface** (`#FCFBF8` / `#131E1C`): cards, fields, dialogs.
- **Surface 2** (`#EEEBE2` / `#192725`): tinted section ground (Products, Skills, FAQ, Recommendations) and tags.
- **Secondary Ink** (`#4A5753` / `#A7B3AE`): body descriptions and metadata.

### Closing field
- **Forest** (`#0B3B37` / `#061614`) with **Pale Teal** (`#8FD6C7`) accents and `#EEF2EE` text: Contact and Footer only.

### Semantic only
- **Green** (`#1B7D4C` / `#52C88C`): availability and "current" markers.
- **Clay Red** (`#AE3428` / `#FF7E6C`): errors.

### Named Rules
**The One-Accent Rule.** Teal is the only accent. Never add a second hue to distinguish sections, sectors, or skill groups; the label already says what it is.
**The Quiet Surface Rule.** No gradients, glass, glows, or hard offset shadows. Elevation appears only as a soft lift on pointer hover.

## Typography

**Display Font:** Source Serif 4 (weight 500, optical sizing auto)
**Body / UI Font:** Hanken Grotesk (400–700)

### Hierarchy
- **Display** (500, `clamp(2.75rem, 6vw, 4.5rem)`, 1.02): hero name only.
- **Headline** (500, `clamp(1.875rem, 3vw, 2.5rem)`, 1.08): section titles.
- **Figure** (serif 500, tabular lining numerals): ledger figures, years.
- **Body** (400, `1rem`–`1.0625rem`, 1.65–1.75, max `62–66ch`).
- **Meta** (500, `0.8125rem`): category, client, date lines, always sentence case.

### Named Rules
**The No-Kicker Rule.** No eyebrow or label above a heading. The heading carries its own weight.
**The Plain Label Rule.** Metadata is sentence-case text, never an uppercase pill or code.

## Layout

`.frame` is `max-width: 1160px`, centered, with `1.25rem / 2rem / 3rem` side padding. Sections are separated by a hairline top rule and `4rem / 6rem` vertical padding. `Section` (`src/components/ui/Section.js`) provides the grammar: `split` (4/8 columns, sticky heading) or stacked for card grids and forms. Product features alternate image left/right at a 7/5 split.

## Elevation & Depth

Flat at rest. Cards use a `1px` hairline border. Hover on pointer devices lifts `translateY(-3px)` with `--lift` over 240ms `cubic-bezier(0.23, 1, 0.32, 1)`.

## Shapes

Radius is small and consistent: `8px` cards, images and dialogs; `6px` buttons and fields; `4px` tags. No pills.

## Components

### Buttons
- **Accent (`.btn-accent`, alias `.btn-ink`):** teal fill, paper text; turns ink on hover; `scale(0.97)` on press. Height `46px` (`38px` for `.btn-sm`).
- **Outline (`.btn-outline`):** `1px` inset ink ring at 35%, fills 5% on hover.
- **Light (`.btn-light`):** paper on the forest field only.
- **Text link:** teal, underlined at 35% opacity, full opacity on hover, arrow nudges 2px.

### Tabs / filters (`.tab`)
Underlined text with a tabular count. Selected state: teal text and a `1.5px` teal underline. Never pills.

### Navigation
Sticky solid header: wordmark (logo + "Haris Arshad"), text links with a teal underline that draws in for the current section, GitHub / LinkedIn / theme icons, Resume and "Work with me". Below 1024px the links become a horizontally scrolling row.

### Ledger and lists
Definition list with hairline row rules: figure (serif) · label (teal, semibold) · supporting detail. The career timeline uses the same ruled-row pattern.

### Forms
`.field` on paper; `.field-close` on the forest field (translucent paper fill, `1px` border, teal-pale focus ring).

## Do's and Don'ts

### Do:
- **Do** keep teal as the only accent and let ink and paper carry everything else.
- **Do** put numbers in the serif figure style with `tabular-nums`.
- **Do** gate hover transforms behind `@media (hover: hover) and (pointer: fine)` and honour `prefers-reduced-motion`.
- **Do** keep WCAG AA contrast in both modes and visible `2px` teal focus rings.

### Don't:
- **Don't** reintroduce the transit metaphor: no route rail, station dots, line codes, departure boards, or tickers.
- **Don't** use gradients, glass blur, glows, or hard offset shadows.
- **Don't** use uppercase pills, kicker labels, or coloured `border-left` stripes.
- **Don't** introduce a second accent colour.
