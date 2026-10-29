# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two equal audiences:
- Hiring managers and recruiters evaluating Haris for Technical Project Manager, PMO, and Technology Delivery Lead roles. They skim fast, look for scale, proof, and credentials, then open the CV.
- Founders and clients looking for delivery consulting or advisory support. They need to trust delivery discipline and find a way to start a conversation (form, Calendly, email).

## Product Purpose

Personal portfolio of Engr. Haris Arshad, PMP® (Islamabad, PK). It proves delivery track record (PKR 700M+ portfolio, PKR 103M+ EVM savings, Tier-1 client work), shows two original SaaS products he conceived and built (Hubito, Pacio), and converts visitors into CV views, contact-form inquiries, and booked calls. Success = a visitor remembers him and acts.

## Positioning

A PMP-certified, PEC-registered engineer who governs large portfolios with PMO rigour *and* ships his own production SaaS. Planning discipline (critical path, EVM, RAID) plus hands-on product building.

## Operating Context

Visitors arrive from LinkedIn, CV links, and search. Desktop during work hours is primary; mobile skim is common. Static Next.js export deployed on Cloudflare Pages with edge functions for contact and recommendations.

## Capabilities and Constraints

- Next.js 10 (pages router, static export), React 17, Tailwind 3, Framer Motion 6, styled-components (legacy).
- Contact form posts to `/api/contact`; recommendations load from `/api/recommendations` and submit through a private approval flow.
- Light and dark modes are both required, persisted in `localStorage['portfolio-theme']`.
- 8 static case-study HTML pages in `public/case-studies/` share `case-study.css`.
- Structured data (JSON-LD), `llms.txt`, sitemap must be preserved.

## Brand Commitments

- Name and credentials as written: "Haris Arshad, PMP®", "Engr. Haris Arshad", PE (PEC).
- Existing HA monogram logo (`/logo-light.svg`, `/logo-dark.svg`, favicon).
- Visual world chosen by the user (Oct 2026): Metro Map / Critical Path transit-poster world, maximalist in places, both modes fully designed.

## Evidence on Hand

- Career timeline, 8 client projects with published outcomes, 2 live SaaS products with mockups (`public/images/showcase/`), credentials with certificate files (`public/credentials/`), CV PDF, profile photo.
- Seed recommendations are anonymised role titles; do not invent named testimonials, clients, or metrics.

## Product Principles

1. Proof before adjectives: every claim sits next to a number, a client, or a certificate.
2. Two doors always open: CV for hirers, conversation for clients.
3. Delivery discipline is the brand: the site itself should feel planned, sequenced, and on schedule.
4. Never fabricate: no invented testimonials, metrics, or employers.

## Accessibility & Inclusion

WCAG 2.1 AA contrast in both modes, keyboard-operable navigation and dialogs, `prefers-reduced-motion` honoured.

