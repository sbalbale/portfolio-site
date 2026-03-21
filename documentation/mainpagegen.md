Generate the main landing page (`app/page.tsx`) using Next.js App Router, combining Server Components for fetching Sanity data and Client Components where Framer Motion is needed.

**Structure the page with the following sections:**

1.  **Global Nav:** Fixed, backdrop-blur, containing links to About, Experience, Projects, Research, Skills, Contact.
2.  **Hero Section:** Massive 'Space Grotesk' typography ("SEAN BALBALE."). Include a pulsing vertical "Data Pillar" animation on the right side using Framer Motion and the `primary-container` color.
3.  **Experience Timeline:** Render a vertical list of roles. Implement a "tracing beam" vertical line on the left side that tracks the user's scroll progress using Framer Motion's `useScroll`.
4.  **Projects Grid:** A 3-column grid of cards. Use the custom `surface-container` colors. Implement a strict hover state where the background shifts to `surface-container-high` instantly.
5.  **Research Spotlight:** A full-width highlighted card featuring the "Embodied Harms and Inferred Data" paper.
6.  **Contact Form:** A minimalist form with Name, Email, and Message inputs.

**Directives:**
Use semantic HTML. Rely entirely on the custom Tailwind colors defined in the config. Do not use any rounded corners.
