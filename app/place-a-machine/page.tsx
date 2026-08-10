import type { Metadata } from 'next';
import PlacementForm from '@/components/PlacementForm';
import { FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Place a Machine',
  description:
    'Host a premium Japanese vending machine at your DC/Maryland/Virginia location — at zero cost to you. Seasons Cafe handles everything.',
};

const benefits = [
  'No upfront cost to you',
  'We handle stocking & maintenance',
  'Revenue sharing opportunities',
  'Serving the DC / MD / VA area',
  'Premium Japanese machines — not cheap knockoffs',
];

const locationTypes = [
  { icon: '🏢', label: 'Offices' },
  { icon: '🏋️', label: 'Gyms' },
  { icon: '🏨', label: 'Hotels' },
  { icon: '🏫', label: 'Schools' },
  { icon: '🛍️', label: 'Retail' },
  { icon: '🏥', label: 'Medical' },
];

export default function PlaceAMachinePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-2">
            DMV Placement Program
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Place a Machine</h1>
          <p className="text-gray-300 max-w-xl">
            Have a great location? We&apos;ll place a top-tier Japanese vending machine at zero cost
            to you and handle everything from stocking to maintenance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Eligible locations */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-[#0A1628] mb-6 text-center">
            We Place Machines At&hellip;
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {locationTypes.map((loc) => (
              <div
                key={loc.label}
                className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100"
              >
                <div className="text-3xl mb-2">{loc.icon}</div>
                <p className="text-sm font-medium text-[#0A1628]">{loc.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-7 sticky top-24">
              <h2 className="text-lg font-bold text-[#0A1628] mb-4">Why partner with us?</h2>
              <ul className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <FaCheckCircle className="text-[#D4A017] shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-500 mb-1">Have questions first?</p>
                <p className="font-bold text-[#0A1628]">(placeholder number)</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <PlacementForm />
          </div>
        </div>
      </div>
    </div>
  );
}
