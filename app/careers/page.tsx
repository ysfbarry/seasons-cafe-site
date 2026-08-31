import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers | Seasons Cafe LLC',
  description:
    'Join the Seasons Cafe LLC team. We are a growing veteran-owned vending machine company in the DMV area looking for motivated individuals.',
};

const openings = [
  {
    title: 'Machine Route Technician',
    type: 'Part-Time / Full-Time',
    location: 'DMV Area (VA, MD, DC)',
    description:
      'Responsible for restocking, maintaining, and servicing vending machines at client locations across the DC/Maryland/Virginia region. Valid driver\'s license required.',
  },
  {
    title: 'Sales Representative',
    type: 'Commission-Based',
    location: 'Remote / DMV Area',
    description:
      'Help grow our machine sales and placement business. Identify new location opportunities and connect businesses with our premium Japanese vending machine lineup.',
  },
  {
    title: 'General Interest',
    type: 'All Types',
    location: 'DMV Area',
    description:
      'Don\'t see the right role? We\'re always looking for driven, reliable individuals who share our mission. Send us your resume and tell us how you can contribute.',
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
            Join Our Team
          </p>
          <h1 className="text-4xl font-extrabold mb-3">Careers at Seasons Cafe LLC</h1>
          <p className="text-gray-300 max-w-xl">
            We&apos;re a growing veteran-owned company. If you&apos;re hardworking, reliable, and
            want to be part of something unique — we want to hear from you.
          </p>
        </div>
      </div>

      {/* Why work here */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-2xl p-8 mb-14">
          <h2 className="text-xl font-extrabold text-[#0A1628] mb-3">Why Seasons Cafe?</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
              Veteran-owned — we value service, discipline, and reliability
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
              Growing company with real opportunity to advance
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
              Flexible scheduling available for route technician roles
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#38BDF8] font-bold mt-0.5">✓</span>
              Be part of bringing Japanese vending culture to the DMV
            </li>
          </ul>
        </div>

        {/* Open roles */}
        <h2 className="text-2xl font-extrabold text-[#0A1628] mb-6">Open Positions</h2>
        <div className="space-y-5">
          {openings.map((role) => (
            <div
              key={role.title}
              className="border border-gray-200 rounded-2xl p-6 hover:border-[#38BDF8] hover:shadow-md transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-bold text-[#0A1628]">{role.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-[#38BDF8]/10 text-[#0A1628] font-semibold px-3 py-1 rounded-full border border-[#38BDF8]/30">
                    {role.type}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 font-medium px-3 py-1 rounded-full">
                    {role.location}
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>

        {/* Apply CTA */}
        <div className="mt-12 bg-[#0A1628] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-extrabold mb-3">Ready to Apply?</h2>
          <p className="text-gray-300 mb-6 text-sm">
            Send your resume and a brief note about the role you&apos;re interested in to our email.
            We review every application personally.
          </p>
          <a
            href="mailto:1seasonscafe@gmail.com?subject=Career Application — Seasons Cafe LLC"
            className="inline-block bg-[#38BDF8] text-[#0A1628] font-bold px-8 py-3 rounded-full hover:bg-[#0EA5E9] transition-colors"
          >
            Email Your Resume
          </a>
          <p className="text-gray-500 text-xs mt-4">1seasonscafe@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
