# 🕹️ Retro Game Hub — React Edition

A blazing-fast React + Vite web app for playing free, legal homebrew retro games in the browser.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **http://localhost:3000** and start playing!

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Architecture

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Router
├── data/
│   └── games.js          # Game database (54 games)
├── hooks/
│   └── index.js          # useDebounce, useFavorites
├── components/
│   ├── Header.jsx        # Logo, search, stats
│   ├── FilterBar.jsx     # System/genre/sort filters
│   ├── GameCard.jsx      # Game card with hover play
│   ├── Emulator.jsx      # EmulatorJS loader
│   ├── Controls.jsx      # Keyboard mapping bar
│   ├── GameDetail.jsx    # Game info panel
│   ├── RelatedGames.jsx  # Related games grid
│   └── Footer.jsx
├── pages/
│   ├── HomePage.jsx      # Browse & filter games
│   └── PlayPage.jsx      # Play game with emulator
└── styles/
    └── global.css         # CSS variables, base styles
```

## ⚡ Performance

- **Vite** for instant HMR and fast builds
- **React.memo** on GameCard for optimized re-renders
- **useMemo** for filtered/sorted game lists
- **useDebounce** for search input
- **Lazy image loading** with fallback
- **Code splitting** via React Router

## 🎮 54 Homebrew Games

- **20 NES games**: Alter Ego, Blade Buster, From Below, Nova the Squirrel...
- **14 SNES games**: Uwol, Jet Pilot Rising, Super Boss Gaiden, Rockfall...
- **20 GBA games**: Anguna, Apotris, Celeste Classic, POWDER, Tigermoth...

All ROMs load from [retrobrews](https://github.com/retrobrews) GitHub repos.

## ⚖️ Legal

All games are free homebrew, approved for distribution by their creators.
