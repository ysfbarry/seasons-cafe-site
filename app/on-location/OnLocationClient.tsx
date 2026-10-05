'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { HiX, HiChevronLeft, HiChevronRight, HiLocationMarker } from 'react-icons/hi';

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

const locations = [
  {
    name: 'Fort Belvoir',
    area: 'Fairfax County, Virginia',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fort+Belvoir+Virginia',
    x: 35,
    y: 21,
  },
  {
    name: 'Fort A.P. Hill',
    area: 'Caroline County, Virginia',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fort+A.P.+Hill+Virginia',
    x: 30,
    y: 45,
  },
  {
    name: 'Fort Lee',
    area: 'Prince George County, Virginia',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fort+Lee+Virginia',
    x: 34,
    y: 72,
  },
  {
    name: 'Fort Eustis',
    area: 'Newport News, Virginia',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fort+Eustis+Virginia',
    x: 72,
    y: 82,
  },
] as const;

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
            Seasons Cafe machines are currently serving customers at four Virginia military
            installations — stocked with Japanese hot and cold beverages, with more locations on
            the way.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {locations.map((location) => (
              <span
                key={location.name}
                className="bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                {location.name}
              </span>
            ))}
            <span className="bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold px-3 py-1.5 rounded-full">
              More on the way
            </span>
          </div>
        </div>
      </div>

      {/* Current locations */}
      <section className="py-16 bg-white" aria-labelledby="locations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
              Current Installations
            </p>
            <h2
              id="locations-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#0A1628]"
            >
              Serving Virginia&apos;s Military Communities
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
              Find Seasons Cafe vending machines at these four installations. Additional locations
              are coming soon.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-stretch">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {locations.map((location) => (
                <a
                  key={location.name}
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 hover:border-[#38BDF8] hover:bg-sky-50 transition-colors"
                  aria-label={`View ${location.name} on Google Maps`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A1628] text-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-[#0A1628] transition-colors">
                    <HiLocationMarker size={21} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-bold text-[#0A1628]">{location.name}</span>
                    <span className="block text-xs text-gray-500 mt-0.5">{location.area}</span>
                  </span>
                  <span className="ml-auto text-xs font-semibold text-[#0A1628] group-hover:text-sky-600">
                    Map ↗
                  </span>
                </a>
              ))}
              <div className="rounded-xl border border-dashed border-[#38BDF8] bg-sky-50 p-4 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#38BDF8] text-[#0A1628] font-bold">
                  +
                </span>
                <span>
                  <span className="block font-bold text-[#0A1628]">More on the way</span>
                  <span className="block text-xs text-gray-500 mt-0.5">
                    Our Virginia service area continues to grow.
                  </span>
                </span>
              </div>
            </div>

            <div className="relative min-h-[390px] overflow-hidden rounded-2xl bg-[#0A1628] border border-[#38BDF8]/20 shadow-xl">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(30deg,transparent_49%,#38BDF8_50%,transparent_51%)] bg-[length:28px_28px]" />
              <svg
                viewBox="0 0 100 100"
                role="img"
                aria-labelledby="virginia-map-title virginia-map-description"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <title id="virginia-map-title">Seasons Cafe Virginia installation map</title>
                <desc id="virginia-map-description">
                  Approximate locations of Fort Belvoir, Fort A.P. Hill, Fort Lee, and Fort Eustis.
                </desc>
                <path
                  d="M12 22 L22 16 L37 17 L43 23 L53 26 L61 34 L74 37 L88 49 L83 58 L91 69 L84 80 L72 85 L61 82 L52 87 L42 80 L31 82 L22 72 L16 57 L9 43 Z"
                  fill="#132844"
                  stroke="#38BDF8"
                  strokeWidth="0.65"
                />
                <path
                  d="M35 21 C31 35 29 45 34 72 C45 78 58 81 72 82"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="0.55"
                  strokeDasharray="2 2"
                  opacity="0.7"
                />
                {locations.map((location) => (
                  <g key={location.name}>
                    <circle
                      cx={location.x}
                      cy={location.y}
                      r="4.4"
                      fill="#38BDF8"
                      opacity="0.18"
                    />
                    <circle
                      cx={location.x}
                      cy={location.y}
                      r="2.1"
                      fill="#38BDF8"
                      stroke="white"
                      strokeWidth="0.55"
                    />
                    <text
                      x={location.x + (location.name === 'Fort Eustis' ? -3 : 4)}
                      y={location.y - 1}
                      textAnchor={location.name === 'Fort Eustis' ? 'end' : 'start'}
                      fill="white"
                      fontSize="3.2"
                      fontWeight="700"
                    >
                      {location.name}
                    </text>
                  </g>
                ))}
              </svg>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div className="rounded-lg bg-[#0A1628]/85 border border-white/10 px-3 py-2 backdrop-blur-sm">
                  <p className="text-white text-xs font-bold">Virginia Service Area</p>
                  <p className="text-gray-400 text-[10px] mt-0.5">
                    Pins indicate general installation areas.
                  </p>
                </div>
                <span className="rounded-full bg-[#38BDF8] px-3 py-1.5 text-[10px] font-bold text-[#0A1628]">
                  4 locations
                </span>
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-[11px] text-gray-400">
            Installation listings are provided for location information only and do not imply
            endorsement by the U.S. Department of Defense.
          </p>
        </div>
      </section>

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
