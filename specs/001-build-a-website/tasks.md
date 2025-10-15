# Tasks: Useless Infinite Scroll with "Epic WOW" and Dual Image Upload

Feature Dir: /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/specs/001-build-a-website  
Branch: 001-build-a-website

## Phase 1 — Setup (project initialization)

- [x] T001 Create Hugo site scaffold in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site
- [x] T002 Add Hugo config file with asset pipeline enabled in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/hugo.toml
- [x] T003 Initialize Node tooling for lint/format/test in /Usersphukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/package.json
- [x] T004 Add ESLint + Prettier config for TypeScript in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/.eslintrc.cjs
- [x] T005 Add Prettier config in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/.prettierrc.json
- [x] T006 Add basic GitHub Actions CI (lint + build + accessibility/perf checks) in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/.github/workflows/ci.yml

## Phase 2 — Foundational (blocking prerequisites)

- [x] T007 Create base layout (baseof.html) with pinned header region and content block in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/layouts/_default/baseof.html
- [x] T008 Create index template with upload controls, scroll container, counters, reset button in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/layouts/index.html
- [x] T009 Create CSS entry with variables, layout, overlay classes in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/assets/css/main.css
- [x] T010 Create JS entry that wires modules (upload, rarity, virtual scroll) in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/assets/js/main.ts
- [x] T011 Add default images for top/infinite in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/static/images/default-top.png
- [x] T012 Add default images for top/infinite in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/static/images/default-infinite.png
- [x] T013 Add accessibility helpers (visually-hidden, focus styles) in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/assets/css/a11y.css
- [x] T014 Add notice copy (client-side only processing, cleared on reset/reload) in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/layouts/partials/notice.html

## Phase 3 — User Story 1 (P1): Upload two images and start infinite scroll

Story goal: A user selects "Top" and "Infinite" images (or uses defaults) and experiences seamless infinite scrolling with rarity overlays.

Independent test criteria:
- Top image is pinned; infinite image tiles seamlessly
- Defaults work when no upload occurs
- Inline errors for invalid files

Implementation tasks:
- [x] T015 [US1] Implement upload UI (two inputs + drag & drop) in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/layouts/partials/upload.html
- [x] T016 [P] [US1] Implement upload module with validation (types, size) in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/assets/js/upload.ts
- [x] T017 [P] [US1] Implement image decoding, preview, EXIF orientation fix (canvas) in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/assets/js/image-decode.ts
- [x] T018 [US1] Render pinned Top region with selected/default image in /Users/phukaowpo/Desktop/dev/y3t1/collabisp/vibeCodeProMax/satono-long-tongue/site/layouts/partials/top.html
- [x] T019 [US1] Implement virtualized infinite list container (structure + placeholders) in /Users/.../satono-long-tongue/site/layouts/partials/infinite.html
- [x] T020 [P] [US1] Implement virtual scroll pool (recycle ~40 segments) in /Users/.../satono-long-tongue/site/assets/js/virtual-scroll.ts
- [x] T021 [P] [US1] Implement seamless tiling of Infinite image in segment renderer in /Users/.../satono-long-tongue/site/assets/js/segment-renderer.ts
- [x] T022 [US1] Add default-image fallback behavior (no upload case) in /Users/.../satono-long-tongue/site/assets/js/upload.ts
- [x] T023 [US1] Add inline error UI for invalid type/size/decoding in /Users/.../satono-long-tongue/site/layouts/partials/upload.html
- [x] T024 [US1] Add styles for layout, pinned header, scroll area, overlays in /Users/.../satono-long-tongue/site/assets/css/main.css

## Phase 4 — User Story 2 (P1): Encounter WOW and see session statistic

Story goal: Rarity assigned per segment; WOW increments a visible session counter.

Independent test criteria:
- Probabilities approximately match configured odds
- WOW counter increments on first viewport entry

Implementation tasks:
- [x] T025 [US2] Implement session PRNG and tier assignment (70/25/4.9/0.1) in /Users/.../satono-long-tongue/site/assets/js/rarity.ts
- [x] T026 [P] [US2] Implement overlay renderer with distinct colors + labels per tier in /Users/.../satono-long-tongue/site/assets/css/main.css
- [x] T027 [P] [US2] Add aria-live announcement and non-color badge for WOW in /Users/.../satono-long-tongue/site/layouts/partials/counters.html
- [x] T028 [US2] Implement WOW session counter and persistence until reset in /Users/.../satono-long-tongue/site/assets/js/main.ts
- [x] T029 [US2] Count WOW only once per segment (first viewport entry) in /Users/.../satono-long-tongue/site/assets/js/virtual-scroll.ts
- [x] T030 [US2] Add visible "WOWs this session: N" UI region in /Users/.../satono-long-tongue/site/layouts/partials/counters.html

## Phase 5 — User Story 3 (P2): Reset and try again with new images

Story goal: Reset clears content and statistics, and returns to initial state.

Independent test criteria:
- Reset zeroes WOW counter and returns to initial position
- Object URLs are revoked; memory is reclaimed

Implementation tasks:
- [x] T031 [US3] Implement Reset control UI and copy in /Users/.../satono-long-tongue/site/layouts/partials/reset.html
- [x] T032 [P] [US3] Implement reset handler (clear PRNG seed, counters, segments) in /Users/.../satono-long-tongue/site/assets/js/main.ts
- [x] T033 [P] [US3] Revoke object URLs and clear previews on reset in /Users/.../satono-long-tongue/site/assets/js/upload.ts
- [x] T034 [US3] Restore defaults after reset when no new images selected in /Users/.../satono-long-tongue/site/assets/js/main.ts

## Final Phase — Polish & Cross-Cutting Concerns

- [x] T035 Add accessibility pass (tab order, focus ring, roles, labels) in /Users/.../satono-long-tongue/site/layouts/_default/baseof.html
- [x] T036 Add performance pass (throttle with rAF, avoid layout thrash) in /Users/.../satono-long-tongue/site/assets/js/virtual-scroll.ts
- [x] T037 Add notice linking to privacy (client-side only processing) in /Users/.../satono-long-tongue/site/layouts/partials/notice.html
- [x] T038 Add Lighthouse budget docs and results to quickstart in /Users/.../satono-long-tongue/specs/001-build-a-website/quickstart.md
- [x] T039 Add npm scripts: lint, format, build, preview in /Users/.../satono-long-tongue/package.json
- [x] T040 Wire Hugo to bundle TS/CSS via Pipes in /Users/.../satono-long-tongue/site/hugo.toml

## Dependencies

- Story order: US1 → US2 → US3
- Foundational phases (1–2) must complete before US phases
- Parallelizable tasks: T016, T017, T020, T021, T026, T027, T032, T033 can run in parallel after their immediate dependencies

## Parallel Execution Examples

- During US1:
  - Upload validation (T016) can proceed in parallel with image decoding (T017)
  - Virtual scroll pool (T020) can proceed in parallel with segment renderer (T021)
- During US2:
  - Overlay CSS (T026) can proceed in parallel with aria-live/counter UI (T027, T030)

## Implementation Strategy (MVP first)

- MVP = Complete US1 end-to-end (upload/defaults, pinned top, seamless infinite scroll with overlays)
- Next = US2 rarity logic + WOW counter
- Then = US3 reset + memory cleanup
- Final = A11y/perf passes and CI wiring