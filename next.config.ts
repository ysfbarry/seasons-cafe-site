import type { NextConfig } from 'next';

/**
 * Content-Security-Policy.
 *
 * 'unsafe-inline' is required for scripts because Next.js injects inline
 * hydration scripts. Removing it would require nonce-based middleware, which
 * forces every page to render dynamically. This site is a static brochure with
 * no logins, no payments, and no user-generated content rendered back to
 * visitors, so that tradeoff is not worth the loss of static generation.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://placehold.co https://img.youtube.com https://i.ytimg.com",
  "media-src 'self'",
  "font-src 'self' data:",
  "connect-src 'self' https://formspree.io https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  // Clickjacking protection. frame-ancestors above covers modern browsers;
  // this covers older ones.
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // This site never takes payments or uses these device APIs, so deny them outright.
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
