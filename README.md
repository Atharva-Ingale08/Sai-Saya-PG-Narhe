# Sai Saya PG — Website

A modern, responsive marketing website for **Sai Saya PG**, a paying-guest accommodation for
students and working professionals. Built with React + Vite + Tailwind CSS.

## Design direction

- **Palette:** deep navy (`#0F2A40`) for trust and premium hospitality, warm gold (`#C9962F`)
  for warmth/home, cream (`#FBF8F2`) background, sage green as a small "safety" accent.
- **Type:** `Fraunces` (serif display) for headings, `Inter` for body copy, `IBM Plex Mono`
  for small "eyebrow" labels and data tags — evoking check-in signage.
- **Signature motif:** rooms, testimonials and location cards use a "room key‑tag" styling
  (rounded card, dashed perforation, tag label) that ties back to the "home away from home" /
  hospitality brief.

## Tech stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons

## Project structure

```
sai-saya-pg/
├── index.html                 # SEO meta tags, fonts, root div
├── package.json
├── tailwind.config.js         # design tokens (colors, fonts, animations)
├── postcss.config.js
├── vite.config.js
├── src/
│   ├── main.jsx                # React entry point
│   ├── index.css               # Tailwind directives + base styles
│   ├── App.jsx                 # Page composition
│   ├── components/
│   │   ├── ui.jsx              # Container, SectionHeading, buttons (reusable primitives)
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx          # Sticky nav + mobile menu
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── RoomCard.jsx        # Single room card ("key tag" styling)
│   │   ├── Rooms.jsx           # Renders RoomCard grid from data/rooms.js
│   │   ├── Facilities.jsx
│   │   ├── Location.jsx        # Map embed + nearby list
│   │   ├── Gallery.jsx         # Filterable image grid
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx         # Contact form + phone/WhatsApp/email
│   │   └── Footer.jsx
│   └── data/
│       ├── rooms.js
│       ├── facilities.js
│       ├── gallery.js
│       └── testimonials.js
└── README.md
```

Content lives in `src/data/*.js` — update room prices, facility copy, gallery images or
testimonials there without touching component code.

## Running locally

Requires [Node.js](https://nodejs.org/) 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (with hot reload)
npm run dev
# → opens on http://localhost:5173

# 3. Build for production
npm run build
# → outputs static files to ./dist

# 4. Preview the production build locally
npm run preview
```

## Customizing before launch

1. **Replace placeholder images** — all images currently come from Unsplash (`src/data/*.js`,
   `Hero.jsx`, `About.jsx`). Swap these `src` URLs for real photos of the property.
2. **Update contact details** — phone, WhatsApp number and email live in
   `src/components/Contact.jsx` and `src/components/Footer.jsx`.
3. **Wire up the contact form** — it currently only shows a success state client-side. Point
   the `handleSubmit` function in `Contact.jsx` to your backend, a form service (e.g. Formspree,
   Getform), or an email API.
4. **Set the real address & map** — update the address text and the Google Maps `iframe` `src`
   in `src/components/Location.jsx` with your actual coordinates.
5. **SEO** — `index.html` already includes title, description, keywords and Open Graph tags;
   update the canonical URL and OG image once the site is deployed.

## Deploying

The site builds to static files (`npm run build` → `dist/`), so it can be hosted anywhere that
serves static assets:

### Vercel
```bash
npm i -g vercel
vercel
```
Framework preset: **Vite**. No extra config needed.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages / any static host
```bash
npm run build
# upload the contents of ./dist to your host
```

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations are disabled for users who request it).
- Visible focus outlines for keyboard navigation.
- Images use `loading="lazy"` outside the hero for faster initial paint.
- Semantic HTML (`header`, `main`, `section`, `footer`) throughout.
