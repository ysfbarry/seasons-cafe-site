import type { Metadata } from 'next';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Contact Us | Seasons Cafe LLC',
  description:
    'Get in touch with Seasons Cafe LLC. We\'re happy to answer questions about our Japanese vending machines, quote requests, and machine placement opportunities.',
};

export default function ContactPage() {
  const { email, phone, socials } = siteConfig;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
            Reach Out
          </p>
          <h1 className="text-4xl font-extrabold mb-3">Contact Us</h1>
          <p className="text-gray-300 max-w-xl">
            Have a question about our machines, a quote, or placement? We&apos;re here to help.
            Reach out and we&apos;ll get back to you within 1–2 business days.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact methods */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-[#0A1628]">Get in Touch</h2>

            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl hover:border-[#38BDF8] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-[#38BDF8]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#38BDF8]/20">
                  <FaEnvelope className="text-[#38BDF8] text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A1628]">Email</p>
                  <p className="text-[#38BDF8] text-sm">{email}</p>
                  <p className="text-gray-400 text-xs mt-1">We respond within 1–2 business days</p>
                </div>
              </a>
            )}

            {phone && (
              <a
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl hover:border-[#38BDF8] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-[#38BDF8]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#38BDF8]/20">
                  <span className="text-[#38BDF8] text-xl">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-[#0A1628]">Phone</p>
                  <p className="text-[#38BDF8] text-sm">{phone}</p>
                </div>
              </a>
            )}

            {socials.facebook && (
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl hover:border-[#38BDF8] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-[#38BDF8]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#38BDF8]/20">
                  <FaFacebook className="text-[#38BDF8] text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A1628]">Facebook</p>
                  <p className="text-gray-500 text-sm">Message us on Facebook</p>
                </div>
              </a>
            )}

            {socials.instagram && (
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl hover:border-[#38BDF8] hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-[#38BDF8]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#38BDF8]/20">
                  <FaInstagram className="text-[#38BDF8] text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A1628]">Instagram</p>
                  <p className="text-gray-500 text-sm">@seasonscafe_</p>
                </div>
              </a>
            )}
          </div>

          {/* Info panel */}
          <div className="bg-[#0A1628] text-white rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-3">
                Service Area
              </p>
              <h3 className="text-2xl font-extrabold mb-4">We Serve the DMV</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Seasons Cafe LLC is based in the DC/Maryland/Virginia area and currently operates
                machines at Fort Belvoir, Fort A.P. Hill, Fort Lee, and Fort Eustis.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We&apos;re actively expanding. If you&apos;re interested in having a machine placed
                at your location — at no cost to you — reach out today.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">Response time</p>
              <p className="text-white font-semibold">1–2 business days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
