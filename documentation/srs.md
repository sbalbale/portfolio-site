# Software Requirements Specification (SRS)

**System:** Synthetic Architect Portfolio (seanbalbale.com)
**Version:** 1.0.0
**Date:** March 20, 2026

## 1. Introduction

### 1.1 Purpose

This document specifies the software requirements for the "Synthetic Architect" digital portfolio. It defines the functional, non-functional, and interface requirements necessary to construct a highly optimized, API-driven personal website for Sean Balbale.

### 1.2 Scope

The system is a single-page, smooth-scrolling web application. It serves as a dynamic resume, project showcase, and research repository. It utilizes a headless CMS (Sanity.io) for content management and a serverless backend for transactional email routing.

## 2. Overall Description

### 2.1 User Classes and Characteristics

- **Recruiters/Hiring Managers:** Require rapid access to the resume, experience timeline, and contact methods.
- **Engineers/Technical Peers:** Look for deep technical architectures, GitHub links, and homelab documentation.
- **Academic Researchers:** Seek access to published papers (e.g., "Embodied Harms and Inferred Data") and abstracts.

### 2.2 Operating Environment

- **Hosting:** Vercel (Edge Network).
- **Client:** Modern evergreen web browsers (Chrome, Safari, Firefox, Edge).
- **Responsive:** Must scale flawlessly from 320px (mobile) to 4K+ (ultrawide monitors).

## 3. Functional Requirements

### 3.1 Content Management & Rendering (REQ-01)

- **Description:** The system must fetch Experience, Projects, and Research data dynamically.
- **Inputs:** GraphQL or GROQ queries to Sanity.io API.
- **Outputs:** Server-Side Rendered (SSR) or Statically Generated (SSG) React components.
- **Condition:** If the Sanity API fails, the system must fallback to a cached or hardcoded state to prevent a blank screen.

### 3.2 Contact Transmission (REQ-02)

- **Description:** The system must allow users to send direct messages to the administrator.
- **Inputs:** Name (string), Email (string, validated), Message (text).
- **Process:** Form submission triggers a Next.js Server Action / API Route, which interfaces with the Resend API.
- **Outputs:** Success/Error toast notification. Minimum WCAG AAA compliant error states.

### 3.3 Interactive Telemetry & Navigation (REQ-03)

- **Description:** The system must track scroll progress and update UI elements dynamically.
- **Process:** The global navigation must update active states based on Intersection Observers. The "Tracing Beam" component must map its height to the scroll `y-axis` utilizing Framer Motion.

## 4. Non-Functional Requirements

### 4.1 Performance & Reliability

- **Speed:** Largest Contentful Paint (LCP) must occur in under 1.2 seconds.
- **Caching:** Sanity data must be cached utilizing Next.js `revalidate` tags, updating only upon CMS webhooks.

### 4.2 Design & Interface Constraints

- **Geometric:** Strict `border-radius: 0px` across the entire DOM.
- **Contrast:** All foreground text must maintain a minimum `7:1` contrast ratio against background surfaces.
- **Motion:** Animations must be hardware-accelerated (`transform` and `opacity` only). No layout-thrashing animations.

### 4.3 Security

- **API Security:** Sanity read tokens and Resend API keys must be stored in secure `.env.local` server variables.
- **Spam Prevention:** The contact form must implement a honeypot field or invisible CAPTCHA to prevent automated bot submissions.
