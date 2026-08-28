'use client';

import { useState } from 'react';
import Link from 'next/link';
import MachineCard from '@/components/MachineCard';
import { machines, MachineType } from '@/data/machines';

const aestheticPhotos = [
  { src: '/images/machines/pinterest-machine-1.jpg', alt: 'Japanese vending machines at night' },
  { src: '/images/machines/pinterest-machine-2.jpg', alt: 'Colorful Japanese vending machine row' },
  { src: '/images/machines/pinterest-machine-3.jpg', alt: 'Japan street vending machine aesthetic' },
  { src: '/images/machines/pinterest-machine-4.jpg', alt: 'Japanese vending machine culture' },
  { src: '/images/machines/pinterest-machine-5.jpg', alt: 'Japanese vending machine city street' },
];

type FilterType = 'all' | MachineType;

const filters: { label: string; value: FilterType }[] = [
  { label: 'All Machines', value: 'all' },
  { label: 'Hot Beverages', value: 'hot' },
  { label: 'Cold Drinks', value: 'cold' },
  { label: 'Hot & Cold Combo', value: 'combo' },
];

export default function MachinesPage() {
  const [active, setActive] = useState<FilterType>('all');

  const filtered = active === 'all' ? machines : machines.filter((m) => m.type === active);

  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-2">
            Machine Catalog
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Japanese Vending Machines
          </h1>
          <p className="text-gray-300 max-w-xl">
            Browse our exclusive lineup of hot, cold, and combo vending machines — engineered in
            Japan for maximum reliability and uptime.
          </p>
        </div>
      </div>

      {/* Filter + grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors ${
                active === f.value
                  ? 'bg-[#D4A017] text-[#0A1628] border-[#D4A017]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#D4A017] hover:text-[#D4A017]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center py-16">No machines match this filter.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((machine) => (
              <MachineCard key={machine.id} machine={machine} />
            ))}
          </div>
        )}
      </div>

      {/* CTA strip */}
      <div className="bg-[#D4A017] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628] mb-3">
            Don&apos;t see exactly what you need?
          </h2>
          <p className="text-[#0A1628]/80 mb-6 text-lg">
            We source direct from Japan — contact us and we&apos;ll find the perfect machine for your location.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-[#0A1628] text-white font-bold px-8 py-3 rounded-full hover:bg-[#0d1f3c] transition-colors"
          >
            Request a Free Quote
          </Link>
        </div>
      </div>

      {/* Aesthetic gallery */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-2">
              The Japanese Vending Experience
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628]">
              A Culture Like No Other
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Japan has more vending machines per capita than any country on Earth. We&apos;re bringing that culture — the quality, the variety, and the experience — straight to the DMV.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {aestheticPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl aspect-[3/4] bg-gray-200 group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
