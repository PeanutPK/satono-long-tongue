# Satono Long Tongue

A useless infinite scroll website with "Epic WOW" moments and dual image upload - inspired by the long doge challenge. Upload two images (one for the top, one for the infinite scroll) and enjoy watching them repeat endlessly with randomized rarity overlays.

## ✨ Features

- 🖼️ **Dual Image Upload**: Upload a "Top" image (pinned header) and an "Infinite" image (seamless vertical repeat)
- 🎨 **Rarity System**: Each scroll segment gets a random rarity tier with visual overlays
  - Common (70%) - Standard view
  - Rare (25%) - Color overlay
  - Epic (4.9%) - Special effect
  - WOW (0.1%) - Ultra rare moment!
- 📊 **Session Statistics**: Track your WOW encounters as you scroll
- 🔒 **Privacy-First**: All images stay on your device - no uploads to servers
- ♿ **Accessible**: Keyboard navigable, non-color-only indicators, WCAG 2.1 AA compliant
- 📱 **Responsive**: Works smoothly on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- **Node.js** (LTS version 18+ recommended)
- **Hugo Extended** (v0.115.0 or later)
- **Git**

### Installation

#### 1. Install Hugo Extended

**Windows (PowerShell - Run as Administrator recommended):**
```powershell
winget install Hugo.Hugo.Extended
```

**IMPORTANT for Windows users:** After installation, you need to refresh your PATH:

**Option A - Restart PowerShell** (Recommended):
- Close and reopen PowerShell/Terminal
- The PATH will be automatically updated

**Option B - Refresh PATH in current session**:
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

**macOS:**
```bash
brew install hugo
```

**Linux:**
```bash
# Download from https://github.com/gohugoio/hugo/releases
# Or use snap:
snap install hugo
```

Verify installation:
```powershell
hugo version
```
You should see output like: `hugo v0.154.5+extended`

#### 2. Clone and Setup

```powershell
# Clone the repository
git clone <your-repo-url>
cd satono-long-tongue

# Install Node dependencies
npm install
```

### Running the Project

> **⚠️ Windows Users**: If you just installed Hugo, you MUST close and reopen your terminal before running these commands. This allows Windows to refresh the PATH environment variable.

#### Development Mode

```powershell
npm run dev
```

Then open your browser to **http://localhost:1313**

The dev server will automatically reload when you make changes to files.

#### Production Build

```powershell
npm run build
```

Built files will be in `site/public/` directory.

#### Preview Production Build

```powershell
npm run preview
```

## 🎮 How to Use

1. **Launch the app** - Open the development server at http://localhost:1313
2. **Upload images** (optional):
   - Click to upload a "Top" image - this stays at the top of the page
   - Click to upload an "Infinite" image - this repeats seamlessly as you scroll
   - Or skip uploads to use default example images
3. **Start scrolling** - Watch the infinite image repeat with random rarity overlays
4. **Hunt for WOWs** - Keep scrolling to encounter the ultra-rare WOW moments (0.1% chance!)
5. **Track your stats** - See "WOWs this session: N" counter increment
6. **Reset anytime** - Click Reset to clear everything and start fresh

## 🛠️ Development

### Project Structure

```
satono-long-tongue/
├── site/                      # Hugo site directory
│   ├── assets/
│   │   ├── css/              # Stylesheets
│   │   │   ├── main.css      # Main styles
│   │   │   └── a11y.css      # Accessibility styles
│   │   └── js/               # TypeScript source
│   │       ├── main.ts       # Entry point
│   │       ├── upload.ts     # Image upload logic
│   │       ├── virtual-scroll.ts  # Infinite scroll engine
│   │       ├── rarity.ts     # Rarity tier system
│   │       └── segment-renderer.ts  # Segment rendering
│   ├── layouts/
│   │   ├── index.html        # Homepage template
│   │   ├── _default/
│   │   │   └── baseof.html   # Base template
│   │   └── partials/         # Reusable components
│   ├── static/               # Static assets
│   └── hugo.toml             # Hugo config
├── specs/                     # Feature specifications
└── package.json              # Node dependencies
```

### Available Scripts

```powershell
# Development
npm run dev              # Start Hugo dev server with live reload

# Code Quality
npm run lint             # Lint TypeScript files
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting

# Production
npm run build            # Build for production (minified)
npm run preview          # Preview production build locally
```

### Code Quality Gates

Before committing, ensure all quality checks pass:

```powershell
# Run linter
npm run lint

# Check formatting
npm run format:check

# Build successfully
npm run build
```

### Development Workflow

1. **Work on feature branch**: `001-build-a-website`
2. **Make changes** to TypeScript, CSS, or HTML files
3. **Test locally** with `npm run dev`
4. **Run quality checks**: lint, format, build
5. **Verify accessibility**: keyboard navigation, contrast, screen reader
6. **Verify performance**: Smooth 60s scroll, <1s initial load

## 🎯 Technical Details

### Tech Stack

- **Site Generator**: Hugo (static site)
- **Languages**: TypeScript, HTML5, CSS3
- **Build Tools**: Node.js, npm
- **Code Quality**: ESLint, Prettier
- **Performance**: Virtualized scrolling, optimized image handling

### Performance Targets

- ⚡ **Interactive**: < 1 second initial load
- 🎬 **Smooth Scroll**: 60+ FPS during continuous scrolling
- 💾 **Memory**: No unbounded growth during extended sessions
- 📦 **Bundle Size**: Minimal JavaScript footprint

### Rarity Probabilities

| Tier   | Probability | Visual Indicator      |
|--------|-------------|-----------------------|
| Common | 70.0%       | Standard view         |
| Rare   | 25.0%       | Color overlay         |
| Epic   | 4.9%        | Enhanced overlay      |
| WOW    | 0.1%        | Special effect + counter |

### Privacy & Data

- ✅ All images processed **client-side only**
- ✅ No network transmission of user images
- ✅ Session data cleared on page reload or reset
- ✅ Works offline after initial page load

## ♿ Accessibility

- ✅ Keyboard navigable (all controls)
- ✅ Screen reader compatible
- ✅ Non-color-only indicators for rarity
- ✅ WCAG 2.1 AA compliant
- ✅ Touch-friendly on mobile devices

## 🐛 Troubleshooting

### Hugo command not found (Windows)

After installing Hugo with winget, you need to refresh your PATH environment variable:

**Solution 1 - Restart Terminal** (Easiest):
- Close all PowerShell/Terminal windows
- Open a new PowerShell window
- Run `hugo version` to verify

**Solution 2 - Refresh PATH in current session**:
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
hugo version
```

### Hugo command not found (macOS/Linux)
Ensure Hugo Extended is installed and in your PATH:
```powershell
hugo version
```

### Dev server won't start
1. Check if port 1313 is already in use
2. Try `npm run dev` again
3. Check for errors in the terminal

### Images won't upload
- Ensure file is JPEG, PNG, or WebP
- File must be ≤ 10 MB
- Try a different image or use defaults

### Performance issues
- Large images are automatically optimized
- Virtualized scrolling prevents memory growth
- Try smaller image dimensions if needed

## 📝 License

[Add your license here]

## 🤝 Contributing

[Add contribution guidelines if needed]

## 📚 Documentation

For detailed specifications and implementation plans, see:
- [Feature Spec](./specs/001-build-a-website/spec.md)
- [Implementation Plan](./specs/001-build-a-website/plan.md)
- [Quickstart Guide](./specs/001-build-a-website/quickstart.md)
- [Data Model](./specs/001-build-a-website/data-model.md)

---

**Have fun scrolling! 🎉**
