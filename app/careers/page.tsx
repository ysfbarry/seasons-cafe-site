import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers | Seasons Cafe LLC',
  description: 'Career opportunities at Seasons Cafe LLC — coming soon.',
};

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
            Join Our Team
          </p>
          <h1 className="text-4xl font-extrabold mb-3">Careers</h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <div className="text-6xl mb-6">🚀</div>
        <h2 className="text-2xl font-extrabold text-[#0A1628] mb-3">Coming Soon</h2>
        <p className="text-gray-500 max-w-md mb-8">
          We&apos;re growing and will be posting career opportunities here soon. In the meantime,
          feel free to reach out directly — we&apos;d love to hear from driven, reliable people.
        </p>
        <a
          href="mailto:1seasonscafe@gmail.com?subject=Career Interest — Seasons Cafe LLC"
          className="bg-[#38BDF8] text-[#0A1628] font-bold px-8 py-3 rounded-full hover:bg-[#0EA5E9] transition-colors"
        >
          Email Us Your Resume
        </a>
        <Link href="/" className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
