# Design System Document: The Synthetic Architect (High Contrast Edition)

## 1. Overview & Creative North Star
The Creative North Star for this system is **"The Monolith Architect."** This philosophy rejects the cluttered, "boxed-in" nature of traditional web interfaces in favor of a structural, editorial approach that feels like high-end architectural blueprints brought to life. 

We are moving away from the "template" look. By leveraging a strict 0px radius scale and high-contrast tonal layering, we create a digital environment that feels intentional, precise, and premium. The layout relies on **intentional asymmetry** and **expansive negative space** to direct the eye, using the vibrant accent palette not as decoration, but as data-driven illumination within a dark, void-like canvas.

---

## 2. Colors
Our color strategy is built on a "Darker High Contrast" foundation, prioritizing depth over flat surfaces.

### Tonal Foundations
*   **Surface (Background):** `#131313` — The deep void.
*   **Foreground (On-Surface):** `#EEFFFF` — High-visibility clarity for maximum legibility.
*   **Primary Accent:** `#82AAFF` — The primary source of "light" in the interface. Use this for glows, primary actions, and active states.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be defined solely through background color shifts.
*   Use `surface_container_low` (`#1c1b1b`) to define secondary content zones against the main `surface`.
*   Use `surface_container_high` (`#2a2a2a`) to pull focus to interactive panels.

### The "Glass & Gradient" Rule
To prevent the interface from feeling static, use Glassmorphism for floating overlays. Apply a 20% opacity to `surface_container_highest` (`#353535`) paired with a `backdrop-blur` of 20px. 
*   **Signature Textures:** For main CTAs, use a subtle linear gradient: `primary_container` (`#82aaff`) to `primary` (`#aec6ff`) at a 135-degree angle. This provides a tactile "soul" that flat hex values lack.

---

## 3. Typography
We utilize a pairing of **Space Grotesk** (Display/Headlines) and **Inter** (Body/Titles) to balance technical precision with human readability.

*   **Display & Headline (Space Grotesk):** These are your "Architectural Statements." Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create a bold, editorial impact.
*   **Body & Titles (Inter):** Reserved for high-density information. The contrast between the geometric headers and the neutral body text creates a "Journalistic Tech" aesthetic.
*   **Label (Space Grotesk):** Small, all-caps labels (`label-sm`, 0.6875rem) should be used for metadata, functioning like notations on a blueprint.

---

## 4. Elevation & Depth
In this system, depth is a product of **Tonal Layering**, not structural lines.

### The Layering Principle
Stack tiers to create hierarchy:
1.  **Level 0 (Base):** `surface` (#131313)
2.  **Level 1 (Sections):** `surface_container_low` (#1c1b1b)
3.  **Level 2 (Cards/Interaction):** `surface_container_highest` (#353535)

### Ambient Shadows
Shadows must be extra-diffused to mimic "Atmospheric Perspective."
*   **Shadow Specs:** `0px 20px 50px rgba(0, 0, 0, 0.5)`. 
*   For active floating elements, add a 1px "Ghost Border" using `outline_variant` at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons (The "Glow" Variant)
*   **Primary:** Background `#82AAFF`, Text `#002e6b`. No border. Apply a soft outer glow (`box-shadow`) using a 20% opacity of the button color.
*   **Secondary:** Background `transparent`, Border 1px `outline` (`#8d909d`) at 30% opacity.
*   **Shape:** Strictly 0px (Square).

### Input Fields
*   **States:** Use a bottom-only border (2px) for active states in `primary` (#aec6ff). 
*   **Error:** Use `error` (#ffb4ab) only for the helper text and the bottom border; do not tint the entire background.

### Cards & Lists
*   **No Dividers:** Prohibit the use of divider lines. Separate list items using `0.7rem` (2) vertical spacing.
*   **Selection:** Indicate selection by shifting the background to `surface_container_high` and adding a 4px vertical "accent stripe" on the left edge using the `secondary` Cyan (#89DDFF).

### Architectural Additions: The "Data Pillar"
A custom component for this system. Use vertical progress bars or "pillars" using the accent palette (Green, Purple, Yellow, Red) to represent status or telemetry. These should have a subtle "Pulse" animation to feel alive.

---

## 6. Do's and Don'ts

### Do
*   **Do** use the full Spacing Scale. If an element feels "tight," jump two steps up the scale (e.g., from 1.4rem to 2.75rem).
*   **Do** lean into the High Contrast. Ensure text on primary accents always uses the `on_primary` dark tones for legibility.
*   **Do** use asymmetrical layouts. A 60/40 split is often more sophisticated than a 50/50 split.

### Don't
*   **Don't** use Rounded Corners. Not for buttons, not for cards, not for checkboxes. 0px is the law.
*   **Don't** use standard "Grey." Use the `surface_variant` and `outline` tokens which are slightly tinted to maintain the "Synthetic" atmosphere.
*   **Don't** use dividers. If you feel the need to separate content, use a background color shift or increased whitespace.