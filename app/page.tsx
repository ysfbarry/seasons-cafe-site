import Link from 'next/link';
import MachineCard from '@/components/MachineCard';
import { getFeaturedMachines } from '@/data/machines';
import { FaCheckCircle } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const stats = [
  'Exclusive Japanese Distributor',
  'DMV Locations',
  'Hot & Cold Options',
  '24/7 Reliability',
];

const arms = [
  {
    icon: '🏪',
    title: 'Machine Sales',
    subtitle: 'Buy Direct from the Source',
    description:
      'As the exclusive US distributor for a premier Japanese vending machine manufacturer, Seasons Cafe LLC gives your business access to the world\'s most reliable, technologically advanced vending solutions. Purchase directly — no middlemen, no markups.',
    cta: { label: 'Shop Machines', href: '/machines' },
    perks: ['Exclusive distribution rights', 'Direct manufacturer pricing', 'Full warranty support', 'Nationwide delivery & setup'],
  },
  {
    icon: '📍',
    title: 'Local Placement (DMV)',
    subtitle: 'We Operate — You Profit',
    description:
      'Have a high-traffic location in DC, Maryland, or Virginia? Let Seasons Cafe place and fully operate a premium vending machine at no cost to you. We handle everything: stocking, maintenance, and collections. You earn passive revenue.',
    cta: { label: 'Request Placement', href: '/place-a-machine' },
    perks: ['Zero upfront cost for location owners', 'Full machine management', 'Revenue sharing options', 'DC / MD / VA coverage'],
  },
];

export default function Home() {
  const featured = getFeaturedMachines();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-[#0A1628] text-white overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #38BDF8 0, #38BDF8 1px, transparent 0, transparent 50%)',
            backgroundSize: '30px 30px',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center">
          <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-4">
            Exclusive Japanese Distributor · DMV Operators
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Premium Japanese
            <br />
            <span className="text-[#38BDF8]">Vending Machines</span>
            <br />
            Sold &amp; Operated
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you want to buy world-class machines for your business or host one at your
            location — Seasons Cafe LLC has the solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/machines"
              className="bg-[#38BDF8] text-[#0A1628] font-bold px-8 py-4 rounded-md hover:bg-[#0EA5E9] transition-colors text-base"
            >
              Shop Machines
            </Link>
            <Link
              href="/place-a-machine"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-colors text-base"
            >
              Request Placement
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Stats bar ─── */}
      <section className="bg-[#38BDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {stats.map((stat, i) => (
              <span key={stat} className="flex items-center gap-2 text-[#0A1628] font-semibold text-sm">
                {i > 0 && <span className="hidden sm:inline text-[#0A1628]/40">·</span>}
                {stat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Two Ways We Serve You ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] mb-3">
              Two Ways We Serve You
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Seasons Cafe LLC operates at the intersection of distribution and operations — giving
              businesses a complete vending solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {arms.map((arm) => (
              <div
                key={arm.title}
                className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{arm.icon}</div>
                <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-1">
                  {arm.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-[#0A1628] mb-3">{arm.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{arm.description}</p>
                <ul className="space-y-2 mb-8">
                  {arm.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-[#38BDF8] shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  href={arm.cta.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1628] border border-[#0A1628] rounded-md px-5 py-2.5 hover:bg-[#0A1628] hover:text-white transition-colors"
                >
                  {arm.cta.label}
                  <HiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Machines ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] mb-2">
                Featured Machines
              </h2>
              <p className="text-gray-500">
                Engineered in Japan, built for the American market.
              </p>
            </div>
            <Link
              href="/machines"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#38BDF8] hover:underline"
            >
              View full catalog <HiArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((machine) => (
              <MachineCard key={machine.id} machine={machine} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Upgrade Your Space?
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Whether you want to purchase a machine or host one at zero cost, Seasons Cafe LLC is
            ready to make it happen. Reach out today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-[#38BDF8] text-[#0A1628] font-bold px-8 py-4 rounded-md hover:bg-[#0EA5E9] transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/place-a-machine"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-colors"
            >
              Request Placement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
