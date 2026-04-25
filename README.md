# FluxBucks

A browser-based virtual casino & mini-games app with 29 games, built entirely with Claude AI (Opus 4.6 Extended Thinking + Opus 4.7 Adaptive).

**All currency is virtual. No real money is involved.**

## Play

**Web:** [livescreate.github.io/FluxBucks-Game](https://livescreate.github.io/FluxBucks-Game/)

**Android APK:** Built with Capacitor — sideload the APK for a native app experience. 

An APK Version is avalible but not included in this repository

## Games (29)

Blackjack · Higher/Lower · Lucky Slots · Coin Ladder · Memory Match · Mines · Plinko · Limbo · Dice · Keno · Crash · Video Poker · Wheel of Fortune · Baccarat · Roulette · Tower Risk · Dragon Tower · Bomb Defuser · Coin Flip · Minesweeper · Chicken Race · Stock Trader · Color Match · Reaction Time · Typing Speed · Card Packs · and more.

## Features

- **29 mini-games** — cards, luck, risk, skill, and instant games
- **XP & Leveling** — earn XP from every game, level up with titles
- **Tier System** — Bronze → Silver → Gold → Platinum → Diamond → Master
- **Daily Challenges** — new challenge every day with chip rewards
- **Weekly Missions** — 3 seeded missions per week
- **Combo Streaks** — play different games in one session for a win multiplier
- **Bank Interest** — passive income based on tier and time away
- **Achievements** — hidden milestones that unlock as you play
- **Daily Streaks** — login bonuses that scale with consecutive days
- **Coin Shop** — buy profile borders, name colors, and card themes
- **Cloud Saves** — Google sign-in syncs progress across devices via Firebase
- **Friends System** — add friends by code or QR, view profiles, gift chips, challenge to games
- **Leaderboards** — per-game and overall rankings
- **Bet History** — track your last 200 bets
- **Share Card** — export your stats as an image
- **Safe Mode** — skill-based games only, no gambling
- **Dark Theme** — multiple background presets and themes
- **Offline Support** — service worker caches the app for offline play

## Architecture Notes

- **Single-file React app** — everything lives in `index.html` (~17,800 lines). No JSX compilation, no bundler. Components are written with `React.createElement` calls directly.
- **Save System:** `loadSave`, `writeSave`, and `DEFAULT_SAVE` handle local `localStorage`. Cloud sync via Firebase Firestore with intelligent merge (higher-progress save wins).
- **Firebase Integration:** Dynamic loading with retry backoff. Google sign-in uses redirect flow. Anonymous and email/password auth also supported.
- **Game Components:** Each game is a self-contained React component receiving `chips`, `bet`, `trackResult`, and `endGame` as props.

## APK Notes

When wrapping into an Android APK via WebView:

- **Google Sign-In** uses `signInWithRedirect` — requires proper intent handling in the WebView
- **React & Firebase** load from local bundled scripts first, with CDN fallback
- **External links** (Feedback form) show a confirmation dialog before opening the browser
- **Vibration** requires `VIBRATE` permission in `AndroidManifest.xml`
- **localStorage** can be cleared by Android under low storage — cloud sync is the safety net

## Credits

Built solo by [@livescreate](https://github.com/livescreate) with [Claude AI](https://claude.ai) (Anthropic, Opus 4.6 with extended thinking).

No real money. No ads. Just games.
