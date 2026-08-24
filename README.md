# Seasons Cafe LLC — Vending Machine Website

Official website for **Seasons Cafe LLC**, exclusive US distributor of premium Japanese hot & cold vending machines, and operator of a local vending placement program serving the DC/Maryland/Virginia area.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, two business arms, featured machines, stats, CTA |
| `/machines` | Machine catalog with Hot / Cold / Combo filter |
| `/machines/[slug]` | Individual machine detail with specs table |
| `/quote` | Quote request form (machine sales) |
| `/place-a-machine` | Placement request form (DMV operators) |
| `/community` | Social media links and community hub |
| `/videos` | The Vending Life Podcast — YouTube episode grid |

---

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS**
- **react-icons** (v5)
- **Formspree** for form email delivery

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Things to Update Before Going Live

### 1. Formspree Form IDs
Sign up free at [formspree.io](https://formspree.io), create two forms, then replace the placeholders:

- **Quote form** — `components/QuoteForm.tsx`, line 6:
  ```ts
  const FORMSPREE_URL = 'https://formspree.io/f/YOUR_QUOTE_FORM_ID';
  ```
- **Placement form** — `components/PlacementForm.tsx`, line 5:
  ```ts
  const FORMSPREE_URL = 'https://formspree.io/f/YOUR_PLACEMENT_FORM_ID';
  ```

### 2. Social Media Links
Update the `href` values from `'#'` to your real URLs in:
- `components/Footer.tsx` — the `socialLinks` array
- `app/community/page.tsx` — the `socials` array

Also update the `handle` fields in `app/community/page.tsx` with your real usernames.

### 3. YouTube Channel & Video IDs
- Replace `dQw4w9WgXcQ` placeholder IDs in `data/videos.ts` with your real YouTube video IDs
- Update the `href="#"` Subscribe button in `app/videos/page.tsx` with your YouTube channel URL

### 4. Phone Number
Replace `(placeholder number)` in `app/quote/page.tsx` and `app/place-a-machine/page.tsx` sidebars with your real phone number.

### 5. Machine Photos
Replace the `placehold.co` image URLs in `components/MachineCard.tsx` and `app/machines/[slug]/page.tsx` with real machine photos. Add images to `public/images/` and reference them with `/images/your-photo.jpg`.

---

## Adding New Machines

Edit `data/machines.ts` and add an entry to the `machines` array:

```ts
{
  id: '7',
  slug: 'your-machine-slug',
  name: 'Your Machine Name',
  type: 'hot', // 'hot' | 'cold' | 'combo'
  capacity: '200 cups / 6 varieties',
  description: 'Your description here.',
  specs: {
    Dimensions: '72"H × 26"W × 30"D',
    Weight: '285 lbs',
    // ... other specs
  },
  featured: false, // set true to show on the Home page
}
```

## Adding New Podcast Episodes

Edit `data/videos.ts` and add an entry to the `videos` array:

```ts
{
  id: '5',
  youtubeId: 'YOUR_YOUTUBE_VIDEO_ID', // from the YouTube URL: ?v=THIS_PART
  title: 'Episode Title',
  description: 'Short description of the episode.',
  date: '2026-08-10',
}
```

---

## Deploying to Vercel

1. Push this repo to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import `seasons-cafe-site` from GitHub
4. Click **Deploy** — no configuration needed

Your site will be live in under a minute. You can connect a custom domain in the Vercel dashboard.

---

© 2026 Seasons Cafe LLC. All rights reserved.
