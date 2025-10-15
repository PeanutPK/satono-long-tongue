# Data Model

## Entities

- UploadedImage
  - role: "Top" | "Infinite"
  - fileName: string
  - mimeType: "image/jpeg" | "image/png" | "image/webp"
  - sizeBytes: number (<= 10,485,760)
  - width: number
  - height: number
  - objectUrl: string (revoked on reset)
  - orientationCorrected: boolean

- RarityTier
  - name: "Common" | "Rare" | "Epic" | "WOW"
  - probability: number (0–1)
  - overlayColor: string (hex or rgba)
  - label: string (visible, non-color cue)

- Segment
  - index: integer (0..∞)
  - rarity: RarityTier
  - seenInViewport: boolean (for WOW counting)

- SessionStat
  - wowCount: integer
  - totalSegmentsGenerated: integer
  - startTime: ISO timestamp

## Validation Rules

- File type must be jpeg/png/webp; size <= 10 MB
- If upload skipped, defaults are used
- Overlay label must accompany color for accessibility
- Randomness is session-scoped; sequence resets on reload/reset

## Relationships

- One SessionStat aggregates many Segment entries (virtualized, not persisted)
- Each Segment references one RarityTier
- Two UploadedImage objects active per session (Top, Infinite)