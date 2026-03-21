Here is the comprehensive Product Requirements Document (PRD) and Design Documentation for your new portfolio site, synthesizing the technical architecture and the "Synthetic Architect" design system.

---

# Product Requirements Document (PRD)

**Project Name:** Sean Balbale Portfolio – "Synthetic Architect"  
**Platform:** Web (seanbalbale.com / seanbalbale.dev)  
**Status:** In Development

## 1. Product Vision & Objective

To build a high-performance, ultra-minimalist digital portfolio that bridges the gap between hardware architecture and high-level software computation. The site acts as a technical showcase, highlighting high-performance compute projects, embedded systems internships, and academic research on XR privacy. It must project the authority of a precision engineer rather than a standard web developer.

## 2. Target Audience

- **Engineering Recruiters & Hiring Managers:** Specifically those in Cloud/Service engineering, Embedded Systems, and AI architecture.
- **Academic Researchers:** Potential collaborators or reviewers interested in the "Embodied Harms and Inferred Data" paper.
- **Technical Peers:** Visitors interested in infrastructure, homelabs, and deep-tech write-ups (routing to cherrybrooknetworks.dev).

## 3. Technical Stack

- **Framework:** Next.js 14+ (App Router) for hybrid static/server rendering.
- **Styling:** Tailwind CSS integrated with customized shadcn/ui components.
- **Interactions & Animation:** Framer Motion (used strictly for structural, hardware-accelerated animations).
- **Content Management (CMS):** Sanity.io for dynamic project, experience, and research data modeling.
- **Transactional Email:** Resend API for the contact form routing.

## 4. Core Features & Page Architecture (Single-Page Layout)

- **01. Global Navigation (Glassmorphic):** Fixed top bar with a 20px blur backdrop, containing anchored links (Experience, Projects, Research, Skills, Contact) and a "View Resume" primary call-to-action.
- **02. Hero Section (The Monolith):** High-impact typography introduction. Features a dynamic, pulsing "Data Pillar" animation representing system telemetry.
- **03. Experience Timeline:** Chronological breakdown of roles (Sonos, Bullhorn, Trinity College TA) utilizing a "Tracing Beam" scroll-linked animation to draw the user down the page.
- **04. Project Architecture (Asymmetric Grid):** A bento-box style grid detailing major technical builds (e.g., the "Three Idiots" compute cluster, AI Athletic Coach architecture). Hover states instantly shift tonal backgrounds rather than relying on floating animations.
- **05. Research Spotlight:** A dedicated, full-width section highlighting the XR privacy paper, designed to look like a featured publication abstract.
- **06. Telemetry & Skills:** A structural breakdown of hardware, software, and cloud proficiencies displayed alongside a "Spectral Telemetry" visualization.
- **07. Communication Node (Contact):** A minimalist form capturing Name, Email, and Message, transmitted securely via Resend.

## 5. Data Model (Sanity.io Schema Requirements)

The backend requires three primary document schemas:

1.  **Experience:** `company`, `role`, `timeline` (e.g., Summer 2026), `description`.
2.  **Projects:** `title`, `category_tag` (e.g., Hardware + Soft), `short_description`, `tech_stack` (array of strings), `github_url`.
3.  **Research:** `title`, `subtitle`, `abstract`, `publication_status`, `paper_url`.

---

# Design Documentation

**System Name:** The Synthetic Architect (High Contrast Edition)  
**Core Philosophy:** Strict, intentional, and precise. Reject traditional web templates in favor of a structural approach that feels like high-end architectural blueprints brought to life.

## 1. Global Constraints

- **The 0px Radius Rule:** Absolutely no rounded corners are permitted across the entire interface. Buttons, input fields, cards, and containers must have a strict 0px border radius.
- **The "No-Line" Sectioning Rule:** Do not use 1px solid borders to define major horizontal page sections. Boundaries must be established solely through background tonal color shifts (e.g., stepping from Level 0 to Level 1 surface colors).

## 2. Typography

- **Headlines, Labels, & Meta-text:** `Space Grotesk`. Used heavily in uppercase with tight tracking (`tracking-tighter` for massive headers, `tracking-widest` for small labels) to create a blueprint-like aesthetic.
- **Body Text:** `Inter`. Optimized for high legibility in long-form descriptions and abstracts.

## 3. Color Palette & Tonal Layering

The system relies on a deep void background with data-driven illumination points. All text maintains a minimum WCAG AAA contrast ratio.

**Foundation (The Void & The Text):**

- `background` / `surface`: `#131313` (The base layer)
- `on-surface`: `#EEFFFF` (Primary high-visibility text)
- `on-surface-variant`: `#c3c6d3` (Secondary/muted text)

**Tonal Elevation (Replacing Borders):**

- Level 1 (`surface-container-low`): `#1c1b1b`
- Level 2 (`surface-container`): `#20201f`
- Level 3 (`surface-container-high`): `#2a2a2a`

**Telemetry Accents (The Illumination):**

- `primary` (Electric Blue): `#82AAFF` — Used for active states, terminal icons, and the primary "Data Pillar."
- `secondary` (Deep Cyan): `#89DDFF` — Used for hover states or secondary data points.
- `tertiary` (Muted Purple): `#e3b5ff`
- `error` (Alert Red): `#ffb4ab` — Used strictly for form validation and error states.

## 4. Component Behaviors

- **Buttons:** Solid fills (`bg-primary-container text-on-primary-container`) with sharp hover states that instantly shift brightness or invert colors. No slow, squishy transitions.
- **Project Cards:** Default state rests on `surface-container`. Hover state triggers an instantaneous jump to `surface-container-high`. A 4px vertical "accent stripe" of `#89DDFF` can appear on the left edge to indicate selection.
- **Glassmorphism:** Used exclusively for the fixed global navigation or temporary floating menus. Specs: 20% opacity of the underlying surface color with a `blur-xl` (20px) backdrop filter to create atmospheric perspective without breaking the dark void theme.
- **Forms:** Inputs use a transparent background with only a bottom border (`border-b-2`). Upon focus, the bottom border shifts to the primary electric blue, avoiding full-box outlines.
