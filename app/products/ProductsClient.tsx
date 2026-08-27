'use client';

import { useState, useMemo } from 'react';
import type { ProductCategory, TempType } from '@/data/products';
import { products, categories, categoryMeta } from '@/data/products';

const tempFilters: { label: string; value: TempType | 'all' }[] = [
  { label: 'All Drinks', value: 'all' },
  { label: 'Hot & Cold', value: 'hot-cold' },
  { label: 'Cold Only', value: 'cold' },
];

const tempBadge: Record<TempType, { label: string; className: string }> = {
  'hot-cold': {
    label: '🌡 Hot & Cold',
    className: 'bg-orange-100 text-orange-700 border border-orange-200',
  },
  cold: {
    label: '❄ Cold',
    className: 'bg-blue-50 text-blue-600 border border-blue-200',
  },
  room: {
    label: '🌀 Room Temp',
    className: 'bg-gray-100 text-gray-600 border border-gray-200',
  },
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [activeTemp, setActiveTemp] = useState<TempType | 'all'>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;
      if (activeTemp !== 'all' && p.temp !== activeTemp) return false;
      if (search) {
        const q = search.toLowerCase();
        if (!p.name.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [activeCategory, activeTemp, search]);

  return (
    <div className="bg-white min-h-screen">
      {/* ─── Page Header ─── */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-2">
            What We Stock
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Our Drinks</h1>
          <p className="text-gray-300 max-w-xl">
            A curated selection of premium beverages available in our machines — from authentic
            Japanese canned coffee to protein shakes, energy drinks, and more.
          </p>
        </div>
      </div>

      {/* ─── Hot & Cold callout ─── */}
      <div className="bg-[#D4A017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-x-6 gap-y-1">
          <span className="text-[#0A1628] font-bold text-sm">🌡 Hot &amp; Cold capable:</span>
          <span className="text-[#0A1628] text-sm">UCC · Mr. Brown · Lotte</span>
          <span className="text-[#0A1628]/60 text-sm hidden sm:inline">
            — These brands can be served hot OR cold from our machines.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ─── Filters ─── */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <input
            type="search"
            placeholder="Search by name or brand…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-200 rounded-full px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
          />
          {/* Temp filter */}
          <div className="flex gap-2 flex-wrap">
            {tempFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveTemp(f.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  activeTemp === f.value
                    ? 'bg-[#D4A017] text-[#0A1628] border-[#D4A017]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#D4A017] hover:text-[#D4A017]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Category pills ─── */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              activeCategory === 'all'
                ? 'bg-[#0A1628] text-white border-[#0A1628]'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#0A1628] hover:text-[#0A1628]'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#0A1628] text-white border-[#0A1628]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#0A1628] hover:text-[#0A1628]'
                }`}
              >
                {meta.emoji} {meta.label}
              </button>
            );
          })}
        </div>

        {/* ─── Results count ─── */}
        <p className="text-xs text-gray-400 mb-6">
          Showing {filtered.length} of {products.length} products
        </p>

        {/* ─── Product list by category ─── */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-lg font-semibold text-gray-600">No products found</p>
            <p className="text-sm mt-1">Try adjusting your search or filters.</p>
          </div>
        ) : activeCategory === 'all' && !search && activeTemp === 'all' ? (
          // ── Grouped by category ──
          <div className="space-y-14">
            {categories.map((cat) => {
              const catProducts = filtered.filter((p) => p.category === cat);
              if (catProducts.length === 0) return null;
              const meta = categoryMeta[cat];
              return (
                <section key={cat}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{meta.emoji}</span>
                    <div>
                      <h2 className="text-xl font-extrabold text-[#0A1628]">{meta.label}</h2>
                      <p className="text-sm text-gray-500">{meta.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {catProducts.map((product) => (
                      <ProductRow key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          // ── Flat filtered grid ──
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductRow({ product }: { product: import('@/data/products').Product }) {
  const badge = tempBadge[product.temp];
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#D4A017]/40 hover:shadow-sm transition-all">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-xs font-bold text-[#D4A017] uppercase tracking-wide">
            {product.brand}
          </span>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badge.className}`}
          >
            {badge.label}
          </span>
        </div>
        <p className="font-semibold text-[#0A1628] text-sm leading-snug">{product.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{product.size}</p>
        {product.note && (
          <p className="text-xs text-gray-500 mt-1 italic">{product.note}</p>
        )}
      </div>
    </div>
  );
}
