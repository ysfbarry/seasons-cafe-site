'use client';

import { useState } from 'react';
import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import QuoteForm from '@/components/QuoteForm';
import PlacementForm from '@/components/PlacementForm';
import { siteConfig } from '@/data/site-config';

const tabs = [
  { id: 'quote', label: 'Request a Quote' },
  { id: 'placement', label: 'Place a Machine' },
  { id: 'locations', label: 'Our Locations' },
] as const;

type TabId = (typeof tabs)[number]['id'];

const quoteBenefits = [
  'Exclusive Japanese manufacturer pricing',
  'Response within 1–2 business days',
  'No obligation — just a conversation',
  'Nationwide delivery & installation',
];

const placementBenefits = [
  'Free machine placement — no upfront cost',
  'We handle delivery, setup & restocking',
  'Revenue share opportunities available',
  'Response within 1–2 business days',
];

const locations = [
  {
    name: 'Fort Belvoir',
    detail: 'Fort Belvoir, VA',
    description: 'Serving soldiers and civilians on base with premium Japanese hot & cold beverages.',
  },
  {
    name: 'Fort A.P. Hill',
    detail: 'Fort A.P. Hill, VA',
    description: 'Keeping troops fueled with Japanese import drinks and hot beverages.',
  },
  {
    name: 'Fort Lee',
    detail: 'Fort Lee, VA',
    description: 'Hot and cold options available for the Fort Lee community.',
  },
  {
    name: 'Fort Eustis',
    detail: 'Fort Eustis, VA',
    description: 'Proudly serving the Fort Eustis base with our signature Japanese vending experience.',
  },
];

export default function QuotePageClient() {
  const [activeTab, setActiveTab] = useState<TabId>('quote');
  const { phone, email } = siteConfig;

  const headerContent = {
    quote: {
      label: 'Machine Sales',
      title: 'Request a Quote',
      subtitle:
        'Tell us about your business and what you\'re looking for. Our team will put together a custom quote.',
    },
    placement: {
      label: 'Machine Placement',
      title: 'Place a Machine at Your Location',
      subtitle:
        'We place machines at no cost to you. Tell us about your location and we\'ll find the perfect fit.',
    },
    locations: {
      label: 'Where We Are',
      title: 'Our Current Locations',
      subtitle:
        'Seasons Cafe LLC machines are currently operating at the following locations across Virginia.',
    },
  };

  const current = headerContent[activeTab];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
            {current.label}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">{current.title}</h1>
          <p className="text-gray-300 max-w-xl">{current.subtitle}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#38BDF8] text-[#38BDF8]'
                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ── TAB 1: REQUEST A QUOTE ── */}
        {activeTab === 'quote' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-7 sticky top-24">
                <h2 className="text-lg font-bold text-[#0A1628] mb-4">What to expect</h2>
                <ul className="space-y-3 mb-8">
                  {quoteBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <FaCheckCircle className="text-[#38BDF8] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                {(phone || email) && (
                  <div className="border-t border-gray-200 pt-6 space-y-1">
                    <p className="text-xs text-gray-500 mb-2">Questions? Reach us at:</p>
                    {phone && (
                      <a
                        href={`tel:${phone.replace(/\D/g, '')}`}
                        className="block font-bold text-[#0A1628] hover:text-[#38BDF8] transition-colors"
                      >
                        {phone}
                      </a>
                    )}
                    {email && (
                      <a
                        href={`mailto:${email}`}
                        className="block text-sm text-gray-600 hover:text-[#38BDF8] transition-colors"
                      >
                        {email}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
          </div>
        )}

        {/* ── TAB 2: PLACE A MACHINE ── */}
        {activeTab === 'placement' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-7 sticky top-24">
                <h2 className="text-lg font-bold text-[#0A1628] mb-4">Why host our machine?</h2>
                <ul className="space-y-3 mb-8">
                  {placementBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <FaCheckCircle className="text-[#38BDF8] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                {(phone || email) && (
                  <div className="border-t border-gray-200 pt-6 space-y-1">
                    <p className="text-xs text-gray-500 mb-2">Questions? Reach us at:</p>
                    {phone && (
                      <a
                        href={`tel:${phone.replace(/\D/g, '')}`}
                        className="block font-bold text-[#0A1628] hover:text-[#38BDF8] transition-colors"
                      >
                        {phone}
                      </a>
                    )}
                    {email && (
                      <a
                        href={`mailto:${email}`}
                        className="block text-sm text-gray-600 hover:text-[#38BDF8] transition-colors"
                      >
                        {email}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="lg:col-span-2">
              <PlacementForm />
            </div>
          </div>
        )}

        {/* ── TAB 3: OUR LOCATIONS ── */}
        {activeTab === 'locations' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  className="bg-[#0A1628] text-white rounded-2xl p-6 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 bg-[#38BDF8] rounded-full flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-[#0A1628] text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold">{loc.name}</h3>
                    <p className="text-[#38BDF8] text-xs font-semibold mt-0.5">{loc.detail}</p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{loc.description}</p>
                </div>
              ))}
            </div>

            {/* CTA under locations */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <h2 className="text-xl font-extrabold text-[#0A1628] mb-2">
                Want a machine at your location?
              </h2>
              <p className="text-gray-600 mb-5 text-sm">
                We&apos;re expanding across the DMV. If you&apos;re interested in hosting a Seasons Cafe machine — free of charge — click below.
              </p>
              <button
                onClick={() => setActiveTab('placement')}
                className="bg-[#38BDF8] text-[#0A1628] font-bold px-8 py-3 rounded-full hover:bg-[#0EA5E9] transition-colors"
              >
                Request Machine Placement
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
