# 3NERGY™ — Circadian Chrono-Nutrition System
## Architecture & Design Specification (2026 Edition)

**Project:** 3NERGY Portfolio Concept Website  
**Date:** 2026-09-25  
**Path:** Architectural  
**Status:** Approved for Implementation  

---

## 1. Executive Summary & Brand Positioning

**3NERGY™** is a luxury biotechnology and chrono-nutrition brand founded on a single scientific thesis: *Human energy is not a flat stimulant spike—it is a tripartite biological rhythm.* 

Rather than overloading the central nervous system with toxic stimulant spikes and high-dose synthetic caffeine, 3NERGY aligns cellular mitochondria, neurotransmitter density, and sleep architecture through three chronobiologically timed formulations:
1. **01 // DAWN RISE** (06:00 – 11:00): Mitochondrial ATP activation, clean mitochondrial oxidation, zero-jitter cellular awakening.
2. **02 // ZENITH FLOW** (11:00 – 17:00): Neuro-sustained cognitive flow state, cerebral blood flow, acetylcholine synthesis.
3. **03 // RESTORE PRIME** (17:00 – 23:00+): Cellular deep recovery, GABAergic tone, glymphatic brain clearance, and deep-wave sleep architecture.

The website is engineered as a 2026 showcase: an interactive circadian instrument with dynamic ambient lighting, real-time telemetry, 60% high-fidelity imagery, and zero AI slop.

---

## 2. Information Architecture (3 Core Pages)

```
/ (Flagship Home)
├── Navigation (Adaptive Circadian Header, Live Chrono-Clock, Phase Switcher, Cart Pill)
├── Circadian Hero (Dynamic Atmospheric Lighting, Interactive Time Dial 06:00-22:00, 3D Capsule Depth Visualizer)
├── The Tri-Phase Ritual Matrix (Dawn Rise, Zenith Flow, Restore Prime interactive feature cards)
├── Bio-Telemetry Lab (Interactive Canvas/SVG kinetic energy graph comparing 3NERGY steady-state vs Caffeine crash)
├── Formulation Provenance & Clinical Proof (Double-blind clinical markers, batch CoA verification)
├── The Chrono-Quiz Preview Modal (Rapid 3-question routine estimator)
└── Global Footer (Chrono-dispatch newsletter, regulatory transparency, system status)

/science (Formulation Science Dossier)
├── Dossier Hero (Cellular bioavailability & mitochondrial mechanics)
├── Interactive Compound Explorer (Clickable nodes: Cordyceps militaris, Cognizin® Citicoline, Magtein® Threonate, Apigenin 98%)
├── Bioavailability Mechanism Comparison (Liposomal encapsulation vs standard compressed tablet degradation)
├── Clinical Trial Benchmarks (Peer-reviewed study registry with active DOI citations)
└── Batch Quality & Certificate of Analysis (CoA) Live Ledger

/shop (The Apothecary & Chrono-Configurator)
├── Product Showcase (Tri-Phase System Bundle vs Individual Formulations)
├── Chrono-Cadence Configurator (30-day sync, 60-day sync, custom delivery intervals)
├── Interactive Formula Customizer (Select quantities, schedule alignment, savings calculator)
├── Trust & Guarantee Matrix (30-day cellular refund, carbon-negative refill capsules)
└── Slide-Over Cart Drawer (Real-time bundle discount physics, free shipping progress, simulated instant checkout)
```

---

## 3. Visual & Aesthetic Architecture

### 3.1 Adaptive Circadian Color Tokens (OKLCH Native)
The entire site responds to the selected circadian phase (or the client's local system time) via dynamic CSS variables in Tailwind CSS v4:

* **Canvas Foundation:**
  * Background Base: `#080A09` (Volcanic Obsidian)
  * Elevated Card Surface: `rgba(255, 255, 255, 0.03)` with `backdrop-blur-xl` and 1px border `rgba(255, 255, 255, 0.08)`
  * High-Contrast Text: `#F3F4F6` (Heading Primary), `#9CA3AF` (Body Secondary)

* **Phase 01 // Dawn Rise (06:00 – 11:00):**
  * Primary Accent: **Solar Amber** (`#F59E0B` / `oklch(0.75 0.18 65)`)
  * Ambient Lighting: Warm golden sunrise radiance, soft rim-lighting on dark bottles.
  * Capsule Tint: Warm golden resin.

* **Phase 02 // Zenith Flow (11:00 – 17:00):**
  * Primary Accent: **Bio-Emerald** (`#10B981` / `oklch(0.72 0.17 155)`)
  * Ambient Lighting: Crystalline midday green daylight, deep forest clarity.
  * Capsule Tint: Crystalline deep emerald.

* **Phase 03 // Restore Prime (17:00 – 23:00+):**
  * Primary Accent: **Twilight Indigo** (`#6366F1` / `oklch(0.60 0.20 275)`)
  * Ambient Lighting: Deep twilight indigo/violet luminescence.
  * Capsule Tint: Translucent dark amethyst.

### 3.2 Typography System
* **Display / Brand Headlines:** `Syne` and `Plus Jakarta Sans` in high-contrast architectural weights (900/800/700) with `-0.03em` tracking.
* **UI & Body Copy:** `Inter` / `Geist Sans` for crystalline legibility at 15px/16px, 1.55 line-height.
* **Clinical Telemetry & Data:** `JetBrains Mono` / `Geist Mono` for timestamps, milligram dosages, batch numbers, and status indicators.

---

## 4. Technical Architecture (2026 Stack)

* **Framework:** Next.js 15+ App Router, React 19, TypeScript
* **Styling:** Tailwind CSS v4 (CSS-native `@theme`, dynamic CSS custom variables, container queries)
* **Motion & Kinematics:** Motion (`motion/react` v12), `@studio-freight/lenis` for smooth momentum scrolling
* **Graphics & Visual Computing:**
  * HTML5 Canvas for real-time ambient circadian fluid aura gradients and floating microscopic cellular particles
  * Interactive SVG bezier spline engine for dynamic bio-telemetry curves with scrubbable timeline coordinates
* **State Engine:** `zustand` store:
  * `circadianPhase`: `'dawn' | 'zenith' | 'restore' | 'auto'`
  * `currentTime`: live virtual dial time (e.g. `08:30`)
  * `cart`: items array, bundle discount calculation, dispatch interval
  * `isCartOpen`: boolean slide-over state

---

## 5. Anti-Slop & Quality Enforcement

1. **No generic marketing slogans:** Replaced empty marketing ("Empower your potential") with tangible biological mechanisms ("Optimizes mitochondrial membrane potential $\Delta\Psi_m$ through micro-encapsulated ubiquinol").
2. **No repetitive gradient cards:** Surfaces use tactile physical material properties: frosted glass, specular highlights, dark obsidian grain, and precise micro-hairlines.
3. **No fake stock aesthetics:** High-fidelity bespoke imagery representing real dark matte supplement bottles, floating crystalline capsules, laboratory glassware, and circadian sky atmospheres.
4. **Accessible & Responsive:** Fully keyboard accessible, WCAG AA contrast compliance, responsive down to 360px mobile viewports up to 4K displays.
