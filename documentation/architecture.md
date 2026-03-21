# Project Overview: "Synthetic Architect" Portfolio

Build a modern, highly optimized personal portfolio for a dual EE/CS engineer.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Backend/CMS:** Sanity.io (for dynamic project, experience, and research data)
- **Emails:** Resend (for the contact form)

## Design System & UI Directives

- **Theme:** "The Monolith Architect." Deep dark mode, high-contrast text.
- **Shapes:** Strict 0px border radius on EVERYTHING (buttons, cards, inputs). Absolutely no rounded corners.
- **Typography:** 'Space Grotesk' for all headings/labels (tracking-tighter, uppercase heavy). 'Inter' for all body text.
- **Borders:** Prohibit standard 1px borders between sections. Define boundaries solely through background color shifts using the provided tonal palette (e.g., from `#131313` to `#1c1b1b`).
- **Animations:** Keep them structural and purposeful. Use Framer Motion for subtle fade-ins, "tracing beam" scroll effects, and sharp, instantaneous hover states (no slow, floaty transitions).
