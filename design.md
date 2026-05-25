# Project Brief & PRD: High-Conversion Animation Portfolio

## 1. Project Overview
The objective is to create a high-performance, single-page animation portfolio optimized for immediate Vercel deployment. The site is designed specifically for hiring managers, prioritizing immediate access to work samples with a "brutally clean," no-fluff aesthetic.

## 2. Target Audience
- **Primary**: Creative Directors, Studio Leads, and Hiring Managers.
- **Goal**: High conversion (Contact/Resume download) with minimal friction.

## 3. Design System & Brand Identity
- **Theme**: Dark mode only (`#111111` or `#1A1A1A` background).
- **Typography**: Inter (Clean sans-serif).
- **Visual Style**: High contrast, minimalist, technical precision.
- **Color Palette**:
  - Surface: `#111111`
  - Elevated Surface (Footer): `#222222`
  - Text Primary: `#FFFFFF`
  - Text Secondary: Subdued Gray
  - Accent: High-contrast solid buttons

## 4. Key Features & Sections
### 4.1 Hero Section
- Large, bold headline: "[Friend's Name]"
- Subdued subheadline: "Animator"
- Primary CTA: "Contact Me" button with smooth-scroll functionality to the footer.

### 4.2 Work Gallery
- **Layout**: CSS Grid (1-column mobile, 2-column desktop).
- **Media**: Placeholder `<video>` tags with specific performance attributes (`autoplay`, `loop`, `muted`, `playsinline`, `preload="none"`).
- **Interaction**: Subtle scale-up hover effect on video containers.
- **Metadata**: Minimalist text captions for project types (e.g., "Character Animation").

### 4.3 About & Contact Footer
- **Layout**: Full-width section with distinct background (`#222222`).
- **Content**:
  - 2-sentence professional bio.
  - Secondary CTA: "Download Resume (PDF)" button.
  - Links: Email, LinkedIn, ArtStation/Vimeo.

## 5. Technical Requirements
- **Responsiveness**: Mobile-first approach using Tailwind's `md:` and `lg:` prefixes.
- **Deployment**: Optimized for Vercel (single-page architecture).
- **Performance**: Heavy focus on video playback optimization and clean DOM structure.

## 6. Constraints
- No navigation bars or complex routing.
- No borders on video containers.
- Zero external fluff; content-first hierarchy.
