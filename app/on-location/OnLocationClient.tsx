'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

type Photo = {
  src: string;
  alt: string;
  caption: string;
  site: string;
  orientation: 'portrait' | 'landscape';
};

const photos: Photo[] = [
  {
    src: '/images/locations/samurai-machine-stocked.jpg',
    alt: 'Seasons Cafe samurai vending machine fully stocked with Japanese drinks',
    caption: 'Fully stocked with Japanese imports, matcha lattes, and hot coffee cans',
    site: 'Exchange Express',
    orientation: 'portrait',
  },
  {
    src: '/images/locations/exchange-express-samurai.jpg',
    alt: 'Samurai-wrapped vending machine outside the Exchange Express entrance',
    caption: 'Positioned right at the entrance where foot traffic is highest',
    site: 'Exchange Express',
    orientation: 'portrait',
  },
  {
    src: '/images/locations/samurai-machine-angle.jpg',
    alt: 'Cherry blossom samurai art wrap on a Seasons Cafe vending machine',
    caption: 'Full cherry-blossom samurai wrap — a landmark customers remember',
    site: 'Exchange Express',
    orientation: 'portrait',
  },
  {
    src: '/images/locations/firestone-two-machines.jpg',
    alt: 'Two Seasons Cafe vending machines outside Firestone Complete Auto Care',
    caption: 'A two-machine setup serving customers during their service wait',
    site: 'Firestone Complete Auto Care',
    orientation: 'portrait',
  },
  {
    src: '/images/locations/firestone-storefront.jpg',
    alt: 'Seasons Cafe machines installed at Firestone Complete Auto Care',
    caption: 'Side-by-side hot and cold selection at the Firestone service center',
    site: 'Firestone Complete Auto Care',
    orientation: 'portrait',
  },
];

export default function OnLocationClient() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    []
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % photos.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, prev, next]);

  const active = lightbox === null ? null : photos[lightbox];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
            Live in the DMV
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Our Machines On Location</h1>
          <p className="text-gray-300 max-w-2xl">
            These are real Seasons Cafe machines currently placed and serving customers across the
            DMV — stocked with Japanese hot and cold beverages, operating around the clock.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold px-3 py-1.5 rounded-full">
              Exchange Express
            </span>
            <span className="bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold px-3 py-1.5 rounded-full">
              Firestone Complete Auto Care
            </span>
            <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full">
              More locations coming
            </span>
          </div>
        </div>
      </div>

      {/* Photo gallery */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
              Photo Gallery
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628]">
              Placed &amp; Serving Customers
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Click any photo to view it full size, or{' '}
              <Link href="/videos" className="text-[#38BDF8] font-semibold hover:underline">
                watch the machine walkthrough videos
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => setLightbox(i)}
                className={`relative overflow-hidden rounded-2xl bg-gray-200 group cursor-zoom-in ${
                  photo.orientation === 'landscape'
                    ? 'aspect-[4/3] col-span-2 lg:col-span-1'
                    : 'aspect-[3/4]'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider">
                    {photo.site}
                  </p>
                  <p className="text-white text-xs leading-snug mt-0.5">{photo.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#38BDF8] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628] mb-3">
            Want one of these at your location?
          </h2>
          <p className="text-[#0A1628]/80 mb-7">
            We place and fully operate the machine at no cost to you. We handle stocking,
            maintenance, and service — you just provide the space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/place-a-machine"
              className="bg-[#0A1628] text-white font-bold px-8 py-3 rounded-full hover:bg-[#0d1f3c] transition-colors"
            >
              Request Machine Placement
            </Link>
            <Link
              href="/quote"
              className="bg-white text-[#0A1628] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 z-10"
          >
            <HiX size={30} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 text-white/60 hover:text-white p-2 z-10"
          >
            <HiChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 text-white/60 hover:text-white p-2 z-10"
          >
            <HiChevronRight size={40} />
          </button>

          <div
            className="max-w-4xl max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[78vh] w-auto object-contain rounded-lg"
            />
            <div className="text-center mt-4 px-4">
              <p className="text-[#38BDF8] text-xs font-bold uppercase tracking-wider">
                {active.site}
              </p>
              <p className="text-white text-sm mt-1">{active.caption}</p>
              <p className="text-white/40 text-xs mt-2">
                {(lightbox ?? 0) + 1} of {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
