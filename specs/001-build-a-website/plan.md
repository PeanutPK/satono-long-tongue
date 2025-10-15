# Implementation Plan: Useless Infinite Scroll with “Epic WOW” and Dual Image Upload

Branch: 001-build-a-website  
Feature Spec: /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/specs/001-build-a-website/spec.md  
Constitution: /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/.specify/memory/constitution.md

## Technical Context

- Delivery model: Static website (no server required for feature)
- Chosen stack (Option A):
  - Site generator: Hugo (static only)
  - UI: Minimal TypeScript + CSS; client-side only image handling
  - Testing/quality: Linting/formatting, accessibility checks, E2E user flows
- Performance targets: Interactive < 1s initial load, smooth 60s continuous scroll
- Accessibility: Keyboard operable, WOW not color-only, WCAG 2.1 AA alignment
- Privacy: Images remain on device; no network transfer of user image data
- Rarity tiers: Common 70%, Rare 25%, Epic 4.9%, WOW 0.1%
- WOW behavior: Session statistic “WOWs this session: N”
- Unknowns: None (all clarifications resolved in spec)

## Constitution Check (Pre-Design)

- Performance Optimization (<= 1s load): PASS
  - Static assets, minimal JS, image optimization, no heavy deps
- Code Quality Assurance: PASS
  - Lint/format/test gates in CI, code review required
- User Experience Consistency: PASS
  - Consistent styles/components, WCAG 2.1 AA, unified controls
- Additional Constraints:
  - Static SSG (Hugo): PASS
  - Security (3rd-party review): PASS — avoid or review any third-party scripts
  - Deployment via CI/CD: PASS — plan GitHub Actions to static hosting

Gates: All PASS. No violations.

## Phase 0: Outline & Research

- Research tasks
  - Best practices for client-side image decoding, EXIF orientation, memory use
  - Virtualized infinite scrolling without unbounded DOM growth
  - Session-scoped randomness and verifying probabilistic outcomes at low WOW odds
  - Accessible non-color indicators and aria-live announcements for WOW
- Output: research.md (decisions, rationale, alternatives)

## Phase 1: Design & Contracts

- Data Model
  - Derive from spec entities (UploadedImage, RarityTier, Segment, SessionStat)
  - Validation rules (file type/size, label contrast, keyboard reachability)
  - Output: data-model.md
- API Contracts
  - No external endpoints (client-only). Provide a minimal OpenAPI artifact documenting “no network APIs”
  - Output: /contracts/openapi.yaml + README
- Quickstart
  - Dev and QA instructions consistent with static approach and constitution goals
  - Output: quickstart.md
- Agent Context Update
  - Run: `.specify/scripts/bash/update-agent-context.sh copilot`
  - Record any new tech context; preserve manual notes between markers

## Constitution Check (Post-Design)

- Validated that designs uphold performance, code quality, and UX consistency:
  - Virtualization prevents DOM/memory growth
  - Accessibility indicators not color-only; keyboard reachable controls
  - CI gates include lint, tests, accessibility/perf checks
- Gates: PASS

## Phase 2: Work Plan & Milestones

- M1 Core Upload & Defaults (P1)
  - Local image selection (Top/Infinite), client-only handling, defaults
  - Validation/errors; orientation handling; previews
- M2 Infinite Scroll & Rarity (P1)
  - Virtualized segments; overlay by tier; probabilities as specified
- M3 WOW Counter & A11y (P1)
  - Increment session WOWs on viewport entry; aria-live alerts; labels/badges
- M4 Performance & Quality (P1)
  - Smooth scroll verification, memory checks, accessibility/perf validations
- Definition of Done
  - All success criteria in spec met; CI green; accessibility checks pass; content matches constitution

## Risks & Mitigations

- Low WOW probability feels unrewarding → Add visible counter and varied overlay hints
- Large images impact performance → Downscale in-memory; revoke object URLs; virtualization
- Accessibility regressions → Include automated a11y checks in CI and manual review

## Open Questions

- None (all clarifications resolved)
