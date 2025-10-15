# Quickstart

## Prerequisites (macOS)
- Git, Node.js (LTS) for tooling, Hugo (extended)
- Install Hugo: brew install hugo

## Develop
- Work on branch: 001-build-a-website
- Install deps: `npm install`
- Run dev server: `npm run dev`
- Open http://localhost:1313
- Verify:
  - Upload two images or use defaults
  - Infinite scroll is smooth; overlays show tiers
  - WOW counter increments on WOW segments entering viewport

## Quality Gates (align with constitution)
- Lint/format: `npm run lint && npm run format:check`
- Build: `npm run build`
- Accessibility checks (keyboard operability, non-color cues)
- Performance: Lighthouse CI in GitHub Actions verifies <1s interactive

## Lighthouse Budget
- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90

## Notes
- Images remain on device; reload/reset clears session state and object URLs
- rAF throttling ensures smooth 60s scroll