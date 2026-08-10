import { notFound } from 'next/navigation';
import Link from 'next/link';
import { machines, getMachineBySlug } from '@/data/machines';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return machines.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const machine = getMachineBySlug(slug);
  if (!machine) return { title: 'Machine Not Found' };
  return {
    title: machine.name,
    description: machine.description,
  };
}

const typeBadgeColors: Record<string, string> = {
  hot: 'bg-red-100 text-red-700',
  cold: 'bg-blue-100 text-blue-700',
  combo: 'bg-purple-100 text-purple-700',
};

const typeLabel: Record<string, string> = {
  hot: 'Hot Beverages',
  cold: 'Cold Drinks',
  combo: 'Hot & Cold Combo',
};

export default async function MachineDetailPage({ params }: Props) {
  const { slug } = await params;
  const machine = getMachineBySlug(slug);

  if (!machine) notFound();

  const imageUrl = `https://placehold.co/600x400/0A1628/D4A017?text=${encodeURIComponent(machine.name)}`;
  const imageUrl2 = `https://placehold.co/600x400/1a2d4e/D4A017?text=Side+View`;
  const imageUrl3 = `https://placehold.co/600x400/0d2040/D4A017?text=Detail+Shot`;

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#D4A017] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/machines" className="hover:text-[#D4A017] transition-colors">Machines</Link>
            <span>/</span>
            <span className="text-[#0A1628] font-medium">{machine.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden bg-[#0A1628]">
              <img
                src={imageUrl}
                alt={machine.name}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden bg-[#1a2d4e]">
                <img
                  src={imageUrl2}
                  alt={`${machine.name} side view`}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden bg-[#0d2040]">
                <img
                  src={imageUrl3}
                  alt={`${machine.name} detail`}
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${typeBadgeColors[machine.type]}`}
            >
              {typeLabel[machine.type]}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] mb-2">
              {machine.name}
            </h1>
            <p className="text-gray-500 text-sm mb-6">Capacity: {machine.capacity}</p>

            <p className="text-gray-700 leading-relaxed mb-8">{machine.description}</p>

            {/* Specs */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-sm font-semibold text-[#0A1628] uppercase tracking-wider mb-4">
                Technical Specifications
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {Object.entries(machine.specs).map(([key, val]) => (
                  <div key={key}>
                    <dt className="text-xs text-gray-500 font-medium">{key}</dt>
                    <dd className="text-sm text-[#0A1628] font-semibold">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="flex-1 text-center bg-[#D4A017] text-[#0A1628] font-bold px-6 py-3 rounded-md hover:bg-[#e6b21e] transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/machines"
                className="flex-1 text-center border border-[#0A1628] text-[#0A1628] font-semibold px-6 py-3 rounded-md hover:bg-[#0A1628] hover:text-white transition-colors"
              >
                ← Back to Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA banner */}
      <div className="bg-[#0A1628] text-white py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Interested in the {machine.name}?
          </h2>
          <p className="text-gray-300 mb-8">
            Fill out our quick quote form and a Seasons Cafe specialist will be in touch within 1–2
            business days.
          </p>
          <Link
            href="/quote"
            className="bg-[#D4A017] text-[#0A1628] font-bold px-8 py-4 rounded-md hover:bg-[#e6b21e] transition-colors"
          >
            Get a Quote Now
          </Link>
        </div>
      </div>
    </div>
  );
}
