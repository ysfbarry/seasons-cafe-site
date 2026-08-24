import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import { FaCheckCircle } from 'react-icons/fa';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Get a Quote',
  description:
    'Request a quote for premium Japanese vending machines from Seasons Cafe LLC. Tell us about your business and we\'ll find the perfect machine for you.',
};

const benefits = [
  'Exclusive Japanese manufacturer pricing',
  'Response within 1–2 business days',
  'No obligation — just a conversation',
  'Nationwide delivery & installation',
];

export default function QuotePage() {
  const { phone, email } = siteConfig;
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-2">
            Machine Sales
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Request a Quote</h1>
          <p className="text-gray-300 max-w-xl">
            Tell us about your business and what you&apos;re looking for. Our team will put together
            a custom quote.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-7 sticky top-24">
              <h2 className="text-lg font-bold text-[#0A1628] mb-4">What to expect</h2>
              <ul className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <FaCheckCircle className="text-[#D4A017] shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              {(phone || email) && (
                <div className="border-t border-gray-200 pt-6 space-y-1">
                  <p className="text-xs text-gray-500 mb-2">Questions? Reach us at:</p>
                  {phone && (
                    <a href={`tel:${phone.replace(/\D/g, '')}`} className="block font-bold text-[#0A1628] hover:text-[#D4A017] transition-colors">
                      {phone}
                    </a>
                  )}
                  {email && (
                    <a href={`mailto:${email}`} className="block text-sm text-gray-600 hover:text-[#D4A017] transition-colors">
                      {email}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
