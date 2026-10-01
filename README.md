# 🧭 Wanderly — Travel Discovery, Planning & Booking Platform

> *"Less planning, more exploring."*

Wanderly is an experiential travel platform designed to feel like an authentic travel journal rather than an impersonal booking engine. Built with vanilla HTML, modern CSS, and JavaScript, it offers lightweight, fast, zero-dependency adventure discovery and trip-building.

---

## ✨ Features

### 1. 🌅 Dynamic Interactive Vibe Hero
- **Multi-Scene Transitions**: Toggle between **Desert**, **Mountain**, and **Sea** vibes.
- **Morphing Vector Scenery**: Dynamic SVG landscape layers and moving sun responding smoothly to selected vibes.
- **Floating Trip Preview**: Instant glance at package duration, all-inclusive pricing, ratings, and direct booking links.

### 2. 📖 Travel Stories & Editorial Gateway (`login.html`)
- **Authentic Dispatches**: First-person accounts from real wanderers (Thar Desert safari, Kedarkantha Himalayan winter trek, Andaman coral reef diving).
- **About Wanderly Philosophy**: Handcrafted trails, 100% all-inclusive pricing, and offline-ready boarding packs.
- **1-Click Quick Demo Login**: Single-click access for effortless previewing, with full `localStorage` authentication state synced across the platform.

### 3. 🗺️ 5-Stop Interactive Journey
- Guided, visual dotted route from idea to boarding pass:
  1. *Pick a place*
  2. *Choose an activity*
  3. *Set dates & departures*
  4. *Add your group & split bills*
  5. *Book & download offline pack*

### 4. 🧮 Interactive Live Trip Builder ("Build the Trip, Watch the Bill")
- Live checkbox add-ons (sunrise camel rides, Swiss tent upgrades, group photographer, fort historians).
- Real-time rolling odometer bill calculation with cubic-bezier easing.
- Interactive traveller count stepper (`−` / `+`).
- Dynamic day-by-day itinerary expansion reflecting chosen add-ons in real time.

### 5. 🎨 Design & Aesthetics
- **Typography**: Variable font pairing with `Bricolage Grotesque` and handwritten accents in `Caveat`.
- **Curated HSL Palette**: Organic earth tones with dark-mode support (`data-theme="dark"`).
- **Asymmetric Bento Adventure Cards**: Layered geometric silhouette art with hover depth and parallax cues.

---

## 🚀 Quick Start

No build tools, bundlers, or `node_modules` required!

1. Clone or download this repository:
   ```bash
   git clone <repo-url>
   cd wanderly
   ```

2. Serve locally using any static web server:
   ```bash
   # Using Python
   python -m http.server 5173

   # Or using Node
   npx serve . -p 5173
   ```

3. Open in your browser:
   - **Login & Stories**: `http://localhost:5173/login.html`
   - **Main Website**: `http://localhost:5173/index.html`
   - **User Account**: `http://localhost:5173/account.html`

---

## 📁 Project Structure

```
wanderly/
├── index.html              # Main homepage with dynamic hero, journey, and builder
├── login.html              # Login gateway with About Wanderly & Travel Stories
├── account.html            # User profile, wishlist, and trip management
├── packages.html           # Package listings with filters and search
├── package-detail.html     # Comprehensive trip detail, itinerary, and booking
├── explore.html            # Destination discovery map and grid
├── destination.html        # Individual destination guides
├── trip-builder.html       # Full custom trip planning tool
├── blog.html               # Field dispatches and travel articles
├── post.html               # Individual journal entry view
├── about.html              # About Wanderly team & mission
├── contact.html            # Contact & inquiry form
├── support.html            # FAQ & offline pack guidance
├── css/
│   ├── common.css          # Design tokens, reset, typography, navbar, footer, buttons, utilities
│   ├── style.css           # Global stylesheet entry point (imports common.css)
│   └── pages/              # Page-specific stylesheets
│       ├── home.css
│       ├── explore.css
│       ├── destination.css
│       ├── packages.css
│       ├── package-detail.css
│       ├── trip-builder.css
│       ├── blog.css
│       ├── post.css
│       ├── about.css
│       ├── contact.css
│       ├── support.css
│       ├── account.css
│       └── login.css
└── js/
    ├── data.js             # Centralized database (destinations, packages, stories)
    ├── app.js              # Shared layout, navbar, auth, themes, wishlist, icons
    └── pages/              # Page-specific logic scripts
        ├── home.js
        ├── explore.js
        ├── destination.js
        ├── packages.js
        ├── package-detail.js
        ├── trip-builder.js
        ├── blog.js
        ├── post.js
        ├── about.js
        ├── contact.js
        ├── support.js
        ├── account.js
        └── login.js
```

---

## 🛠️ Tech Stack
- **Structure**: Semantic HTML5
- **Styling**: Vanilla CSS3 (Custom properties, grid, flexbox, clamp typography, CSS variables, dark mode)
- **Logic**: Vanilla JavaScript ES6+ (No external runtime dependencies)
- **Icons & Art**: Native inline SVG vector illustrations and geometry

---

## 📄 License
MIT © Wanderly
