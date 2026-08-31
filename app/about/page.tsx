import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Seasons Cafe LLC',
  description:
    'Seasons Cafe LLC is a veteran-owned vending machine company bringing unique Japanese-style hot and cold beverage machines to the DMV area.',
};

const values = [
  {
    title: 'Veteran Owned & Operated',
    description:
      'Founded by a US military veteran, Seasons Cafe LLC is built on the principles of discipline, service, and commitment to excellence.',
  },
  {
    title: 'Quality First',
    description:
      'Every machine in our lineup comes directly from Japan — the world leader in vending technology — ensuring reliability and a premium experience.',
  },
  {
    title: 'Community Focused',
    description:
      'We serve military bases, offices, gyms, and neighborhoods across the DC/Maryland/Virginia area, bringing convenience where it matters most.',
  },
  {
    title: 'Innovation',
    description:
      'Our insulated Japanese coffee cans keep beverages hot or cold for hours — a technology not commonly found in traditional American vending.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-[#0A1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
              About Seasons Cafe LLC
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              A veteran-owned company on a mission to bring Japan&apos;s world-class vending
              experience to the communities we serve right here in the DMV.
            </p>
            <div className="flex gap-4 mt-8">
              <Link
                href="/quote"
                className="bg-[#38BDF8] text-[#0A1628] font-bold px-6 py-3 rounded-full hover:bg-[#0EA5E9] transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="border border-[#38BDF8] text-[#38BDF8] font-semibold px-6 py-3 rounded-full hover:bg-[#38BDF8]/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Seasons Cafe LLC — Hot & Cold Coffee Cans"
              width={280}
              height={280}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* About + Mission */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-4">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Seasons Cafe LLC is a <strong>veteran-owned vending machine company</strong> that uses
              unique Japanese-style vending machines to provide hot and cold can and bottle
              beverages. We specialize in specialty coffee and tea flavors delivered in unique
              insulated coffee cans — allowing customers to have access to hot or cold coffee
              directly from the machine.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              In addition to hot and cold coffee beverages, Seasons Cafe also offers water, soft
              drinks, and energy drinks, bringing the variety of traditional vending together with
              the innovation of Japanese technology.
            </p>
          </div>

          <div className="bg-[#0A1628] text-white rounded-2xl p-8">
            <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-3">
              Our Mission
            </p>
            <p className="text-2xl font-bold leading-relaxed">
              &ldquo;To provide our customers with a convenient and time-efficient way of buying
              drinks and coffee.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
              What Drives Us
            </p>
            <h2 className="text-3xl font-extrabold text-[#0A1628]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-1 bg-[#38BDF8] rounded mb-4" />
                <h3 className="font-bold text-[#0A1628] text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-3">
            Ready to work with us?
          </h2>
          <p className="text-gray-500 mb-8">
            Whether you want to buy a machine or host one at your location — we&apos;d love to hear
            from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-[#38BDF8] text-[#0A1628] font-bold px-8 py-3 rounded-full hover:bg-[#0EA5E9] transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/careers"
              className="border border-gray-300 text-gray-600 font-semibold px-8 py-3 rounded-full hover:border-[#38BDF8] hover:text-[#38BDF8] transition-colors"
            >
              View Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
