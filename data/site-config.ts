/**
 * ============================================================
 *  SEASONS CAFE LLC — SITE CONFIGURATION
 *  Edit this file to update your contact info, social links,
 *  and business details across the entire website at once.
 * ============================================================
 */

export const siteConfig = {
  // ── Business Info ──────────────────────────────────────────
  businessName: 'Seasons Cafe LLC',
  tagline: 'Premium Japanese Vending Machines — Sold & Operated',
  phone: '',           // e.g. '(202) 555-0100'
  email: '1seasonscafe@gmail.com',
  address: 'Washington, DC Metro Area',

  // ── Social Media ───────────────────────────────────────────
  // Paste the full URL for each platform you use.
  // Leave blank ('') to hide that platform's link/card.
  socials: {
    facebook:  'https://facebook.com/tj.barry.5680',
    instagram: 'https://instagram.com/seasonscafe_',
    tiktok:    '',     // e.g. 'https://tiktok.com/@seasonscafe'
    youtube:   '',     // e.g. 'https://youtube.com/@SeasonsCafe'
    twitter:   '',     // e.g. 'https://x.com/seasonscafe'
  },

  // ── YouTube / Podcast ──────────────────────────────────────
  // Your main YouTube channel link (used for the Subscribe button)
  youtubeChannel: '', // e.g. 'https://youtube.com/@SeasonsCafe'

  // ── SEO / Meta ─────────────────────────────────────────────
  siteUrl: 'https://seasonscafellc.com', // update once your domain is set
  metaDescription:
    'Seasons Cafe LLC sells and operates premium Japanese hot & cold vending machines. Exclusive distributor serving businesses and the DC/Maryland/Virginia area.',
};

export type SiteConfig = typeof siteConfig;
