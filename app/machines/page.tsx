'use client';

import { useState } from 'react';
import MachineCard from '@/components/MachineCard';
import { machines, MachineType } from '@/data/machines';

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
    </div>
  );
}
