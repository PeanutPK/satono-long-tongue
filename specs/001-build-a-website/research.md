# Research: Useless Infinite Scroll with “Epic WOW” and Dual Image Upload

## Decision: Client-side only image handling
- Rationale: Privacy (no uploads), performance (local decode), offline viability
- Alternatives considered:
  - Temporary server storage: adds complexity and privacy risk
  - Permanent gallery: requires moderation and conflicts with scope

## Decision: Virtualized infinite scroll (fixed pool of segments)
- Rationale: Prevent unbounded DOM/memory; maintain smoothness
- Alternatives considered:
  - Native infinite list without recycling: leads to memory growth
  - Canvas-only rendering: harder a11y, heavier custom logic

## Decision: Rarity probabilities (70/25/4.9/0.1)
- Rationale: Simple 4-tier model with ultra-rare WOW moments
- Alternatives considered:
  - 5+ tier systems: adds complexity without clear value
  - Time-based odds: variable experience; non-deterministic testing

## Decision: WOW counted on first viewport entry
- Rationale: Avoid double-counting; aligns with user-visible experience
- Alternatives considered:
  - Count on generation time: user may never see it
  - Count per revisit: inflates stats and confuses users

## Decision: Accessibility indicators not color-only
- Rationale: Support color-blind users; comply with WCAG
- Alternatives considered:
  - Color-only overlays: insufficient accessibility
  - Audio-only cues: not inclusive, may be intrusive

## Decision: Hugo + minimal TypeScript
- Rationale: Static, fast, simple pipeline; excellent Lighthouse potential
- Alternatives considered:
  - Next.js static export: heavier client bundle
  - Jekyll + Alpine: slower builds, extra Ruby toolchain