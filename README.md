# Ancient Starbucks

A lightweight beach-themed puzzle/adventure game. Explore the scene, talk to characters, and find the thief.

## What it is
- A point-and-click puzzle game set on a beach.
- Click characters and objects to reveal dialogue and clues.
- Your goal is to investigate and figure out who the thief is.

## Highlights
- Beach-style loading screen with asset preloading (no initial jitter).
- Dialogue bubbles and a simple story-teller overlay.
- Responsive layout with small-screen optimizations.
- Background music that starts after your first interaction (autoplay-safe).

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start a dev server (Vite or any static server). For example:
   ```bash
   npx vite --open
   ```
   Or serve the root directory with any static server:
   ```bash
   npx serve .
   ```

Open the app in your browser (usually `http://localhost:5173` for Vite).

## How to play
- Click on characters and items to interact.
- Read the dialogue for hints.
- Piece together clues to find the thief.

## Project structure (simplified)
- `public/` static assets (images, sprites)
- `src/` game code and styles
  - `main.js` app bootstrap, preloading, listeners
  - `StoryTeller.js` dialogue overlay
  - `assets/` character SVG/JS assets
  - `style.css` base styles
  - `containers.css` positions for characters/objects
  - `responsive.css` responsive overrides
  - `helper/handleMusic.js` background music handling

## Notes
- Music plays after your first click/keypress/touch (required by browsers).
- On very small screens some non-essential characters are hidden to keep core areas tappable.

Enjoy the hunt and have fun on the beach!


