# LastLife Portfolio

A modern, high-performance portfolio website showcasing Telegram bots and games, built with Next.js, React Three Fiber, Framer Motion, and Tailwind CSS.

## Features

- 🎨 **Interactive 3D Background** - 2000 animated particles using React Three Fiber
- ✨ **Smooth Animations** - Optimized Framer Motion with LazyMotion (87% smaller bundle)
- 🎭 **Glassmorphic Design** - Modern UI with glassmorphism effects
- 🚀 **High Performance** - Code splitting, dynamic imports, GPU acceleration
- 📱 **Responsive** - Works beautifully on all devices
- 🎯 **TypeScript** - Full type safety

## Projects Showcased

- **Fryday** - Human-like chatbot
- **SwitchGlitch** - Match the block game
- **TheInsider** - Who's the spy game
- **MineSweeper** - Classic minesweeper
- **Sentinel** - Telegram moderation bot
- **Byte** - Personal AI sidekick
- **Snatcher** - Sticker ID extraction tool

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:5000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Static files will be in the 'out' folder
```

## Deploy to GitHub Pages

This project is configured for GitHub Pages deployment using Next.js static export.

### Option 1: GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. In your GitHub repository:
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Push your code to trigger deployment

Your site will be live at: `https://username.github.io/repo-name/`

### Option 2: Manual Deployment

```bash
# Build the static site
npm run build

# The 'out' folder contains your static site
# Upload the contents to your GitHub Pages repository
```

### For Custom Repository Deployment

If deploying to a repository like `username.github.io/my-portfolio`, update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
  images: {
    unoptimized: true,
  },
};
```

## Technology Stack

- **Framework**: Next.js 15.2.3
- **UI Library**: React 19.0.0
- **3D Graphics**: React Three Fiber 9.4.0 + Drei 10.7.7
- **Animation**: Framer Motion 12.23.24
- **Styling**: Tailwind CSS 4.0.15
- **Language**: TypeScript 5.8.2

## Project Structure

```
portfolio/
├── components/          # Reusable React components
│   ├── Header.tsx      # Animated header with text scramble
│   ├── Bio.tsx         # Bio section
│   ├── ProjectCard.tsx # Interactive project cards
│   ├── ParticleBackground.tsx  # 3D particle background
│   └── Footer.tsx      # Footer with contact
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper with LazyMotion
│   └── index.tsx       # Main portfolio page
├── styles/             # Global styles
│   └── globals.css     # Tailwind + custom styles
├── public/             # Static assets
│   ├── favicon.ico
│   └── .nojekyll       # For GitHub Pages
└── Configuration files
```

## Performance Optimizations

- **LazyMotion**: Reduced Framer Motion bundle by 87% (99kb → 13.7kb)
- **Dynamic Imports**: 3D components load only when needed
- **Code Splitting**: Automatic page-based code splitting
- **GPU Acceleration**: Transform and opacity animations only
- **Optimized 3D**: High-performance WebGL settings, 2000 particles max

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this for your own portfolio!

## Contact

- Telegram: [@sidwiskers](https://t.me/sidwiskers)

---

Built with ❤️ using modern web technologies
