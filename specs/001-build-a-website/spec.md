# Feature Specification: Useless Infinite Scroll with “Epic WOW” and Dual Image Upload

**Feature Branch**: 001-build-a-website  
**Created**: 2025-10-15  
**Status**: Draft  
**Input**: User description: "Build a website that is useless infinite scroll website for me to have fun with, with a chance to get epic wow like the long doge challenge website with the upload feature to upload two photo one for the top part then another one for the infinite part, the photo for the infinite part would be able to have a color filter showing how rare it is."

## User Scenarios & Testing *(mandatory)*

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
  
  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - Upload two images and start the infinite scroll (Priority: P1)

A user lands on the page, selects a “Top” image and an “Infinite” image from their device, and immediately experiences an endless vertical scroll where the infinite image repeats seamlessly. Each repeated segment shows a color overlay indicating rarity.

**Why this priority**: This is the core fun loop and must work first.

**Independent Test**: Select two valid images and verify the top image is pinned at the top and the infinite image repeats indefinitely with visible rarity overlays.

**Acceptance Scenarios**:
1. Given no images uploaded, When the user prefers not to upload, Then default example images are used and infinite scroll starts.
2. Given valid images (JPEG/PNG/WebP up to the max size), When selected, Then the top image displays above the infinite scroll and the infinite image tiles seamlessly with a rarity color overlay per segment.

---

### User Story 2 - Encounter WOW and see session statistic (Priority: P1)

As the user scrolls, segments are assigned rarity by probability. When a WOW rarity happens, the “WOWs this session” counter increments and is visible.

**Why this priority**: The WOW moment is the main delight mechanic and motivates continued scrolling.

**Independent Test**: Scroll for sufficient segments to trigger probabilities. On WOW, observe the counter increments immediately and remains visible.

**Acceptance Scenarios**:
1. Given a new session, When scrolling generates segments, Then rarity tiers appear at the configured odds (Common 70%, Rare 25%, Epic 4.9%, WOW 0.1%).
2. Given a WOW event occurs, When it is encountered, Then the “WOWs this session” counter increases by 1 and is displayed persistently until reset or page reload.

---

### User Story 3 - Reset and try again with new images (Priority: P2)

The user resets the experience, clearing scroll content and statistics, and optionally uploads different images for a new session.

**Why this priority**: Enables replayability and experimentation without leaving the page.

**Independent Test**: Click Reset, verify the scroll returns to the start, the WOW counter is zeroed, and the user can upload new images.

**Acceptance Scenarios**:
1. Given an active session with a non-zero WOW count, When Reset is triggered, Then the counter returns to 0 and the scroll list is cleared to the initial state.

### Edge Cases

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right edge cases.
-->

- Unsupported file type or oversize image: user sees a clear error and can retry.
- No upload: defaults load automatically; user can still scroll indefinitely.
- Extremely large image dimensions: image is fit/cropped to avoid layout breaks; tiling remains seamless.
- Very long sessions: the experience remains responsive without freezes; memory use does not grow unbounded.
- Page reload: all session data (uploads, stats) are cleared as this is client‑side only.
- Colorblind users: WOW identification does not rely solely on color; a label/indicator accompanies the overlay.
- Mobile viewport (e.g., 360×640): controls remain reachable; scrolling is smooth; images fit on screen without awkward zooming.

## Requirements *(mandatory)*

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right functional requirements.
-->

### Functional Requirements

- FR-001: The system MUST allow selecting exactly two local images: one “Top” image and one “Infinite” image.  
  Acceptance: JPEG/PNG/WebP accepted; each file ≤ 10 MB; invalid files show an inline error without page reload.

- FR-002: The system MUST provide default images if the user skips uploads.  
  Acceptance: On first load with no uploads, defaults render and infinite scroll works.

- FR-003: The “Top” image MUST render at the top of the page and remain visible above the scrolling area.  
  Acceptance: As the user scrolls, the top image remains pinned; it does not jitter or overlap content.

- FR-004: The “Infinite” image MUST repeat vertically to create a seamless infinite scroll.  
  Acceptance: No visible gaps/tears between segments; scrolling can continue without a practical end.

- FR-005: Each repeated segment MUST display a rarity overlay according to its assigned tier.  
  Acceptance: Overlays are visually distinct and maintain sufficient contrast with the base image.

- FR-006: Rarity assignment MUST follow these odds per segment: Common 70%, Rare 25%, Epic 4.9%, WOW 0.1%.  
  Acceptance: In test sampling of ≥10,000 segments, observed rates are within ±15% relative tolerance for Common/Rare/Epic and ±50% relative tolerance for WOW.

- FR-007: On WOW occurrence, the system MUST increment and show “WOWs this session: N”.  
  Acceptance: Counter updates immediately on WOW and persists until Reset or page reload.

- FR-008: The system MUST offer a Reset control that clears scroll content and resets session statistics.  
  Acceptance: After Reset, the scroll returns to the initial state and the WOW counter is 0.

- FR-009: User images MUST remain on the device; no network transmission of user image data is allowed.  
  Acceptance: Test runs show no network requests containing user image payloads; the feature remains operable when the network is disabled after initial page load.

- FR-010: The experience MUST remain responsive during prolonged scrolling.  
  Acceptance: Testers report no noticeable stutter during 60 seconds of continuous scroll on a mid‑range device.

- FR-011: The system MUST be usable with keyboard and assistive tech; color‑only indicators MUST have a text/label alternative.  
  Acceptance: All interactive controls are keyboard reachable; WOW identification is possible without relying solely on color.

- FR-012: The primary actions (upload, reset, scroll) MUST be usable on small screens.  
  Acceptance: Controls are touch‑friendly and readable on a typical smartphone viewport without zooming.

- FR-013: The system MUST show friendly, actionable errors for unsupported types, oversized files, and failed image decoding.  
  Acceptance: Error messages explain the issue and how to fix it, without technical jargon.

- FR-014: The system MUST disclose that images are processed only within the current session and cleared on reload or reset.  
  Acceptance: A brief notice is visible before upload and accessible later.

- FR-015: Randomness MUST be session‑scoped (not persisted across reloads).  
  Acceptance: Reloading the page changes the sequence of rarities while preserving the same configured probabilities.

### Key Entities

- UploadedImage: role (Top/Infinite), name, type, size, dimensions.
- RarityTier: name (Common/Rare/Epic/WOW), probability, overlay color, label.
- Segment: index/order, assigned RarityTier.
- SessionStat: wowCount, totalSegments, startTime.

## Assumptions & Dependencies

- Assumptions:
  - Images are handled entirely client‑side; no server storage or transmission.
  - Default example images are available for immediate play without upload.
  - Session state (randomness, counters) resets on page reload or Reset.
  - Maximum single file size is 10 MB; common web image formats are supported.

- Dependencies:
  - Modern browser capabilities for local file selection and image decoding.
  - Standard input methods (touch, mouse, keyboard) for scroll and control interaction.
  - Accessibility support for keyboard navigation and non‑color indicators.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- SC-001: 95% of evaluators can upload (or accept defaults) and begin scrolling within 30 seconds.
- SC-002: During 60 seconds of continuous scrolling, 90% of evaluators report no noticeable stutter or freeze.
- SC-003: In a sample of ≥10,000 segments, observed rarity shares are within ±15% relative of targets (WOW within ±50% relative).
- SC-004: “WOWs this session” accurately reflects the number of WOW encounters since session start or last reset in 100% of test runs.
- SC-005: No user images are transmitted to any server in 100% of monitored test runs.
- SC-006: All primary controls are operable by keyboard; color contrast meets accessibility guidelines; ≥90% of evaluators can identify WOW without relying solely on color.
- SC-007: Initial screen becomes interactive within 1 second on a standard broadband connection.
- SC-008: On smartphone-sized viewports, all controls are usable without zoom; touch targets are comfortably tappable and do not trigger accidental actions.
