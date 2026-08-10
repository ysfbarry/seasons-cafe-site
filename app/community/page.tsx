import type { Metadata } from 'next';
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Community',
  description:
    'Stay connected with Seasons Cafe LLC on Instagram, Facebook, TikTok, YouTube, and X. Follow along for machine updates, DMV placements, and vending tips.',
};

const socials = [
  {
    icon: FaInstagram,
    name: 'Instagram',
    handle: '@seasonscafellc',
    description:
      'Follow us for behind-the-scenes machine placements, new product drops, and daily DMV vending life.',
    href: '#',
    color: 'from-pink-500 to-purple-600',
    bg: 'bg-gradient-to-br from-pink-50 to-purple-50',
    border: 'border-pink-100',
    iconColor: 'text-pink-500',
  },
  {
    icon: FaFacebook,
    name: 'Facebook',
    handle: 'Seasons Cafe LLC',
    description:
      'Like our page for business updates, promotions, and community events happening across the DC/MD/VA area.',
    href: '#',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
    border: 'border-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: FaTiktok,
    name: 'TikTok',
    handle: '@seasonscafe',
    description:
      'Watch quick clips of our machines in action, vending tips, and the hustle behind running a vending business in 2026.',
    href: '#',
    color: 'from-gray-800 to-black',
    bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
    border: 'border-gray-200',
    iconColor: 'text-gray-900',
  },
  {
    icon: FaYoutube,
    name: 'YouTube',
    handle: 'Seasons Cafe LLC',
    description:
      'Subscribe to The Vending Life Podcast and in-depth machine reviews, placement walkthroughs, and business advice.',
    href: '#',
    color: 'from-red-500 to-red-700',
    bg: 'bg-gradient-to-br from-red-50 to-red-100',
    border: 'border-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: FaXTwitter,
    name: 'X (Twitter)',
    handle: '@seasonscafe',
    description:
      'Industry news, vending machine insights, and quick takes on the DMV business scene — all in real time.',
    href: '#',
    color: 'from-gray-700 to-gray-900',
    bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
    border: 'border-gray-200',
    iconColor: 'text-gray-900',
  },
];

export default function CommunityPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-2">
            Community
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Stay Connected with Seasons Cafe
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            We&apos;re more than a vending company — we&apos;re building a community around better
            workplace experiences and entrepreneurship. Follow us on every platform and be part of
            the journey.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {socials.map(({ icon: Icon, name, handle, description, href, bg, border, iconColor }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex gap-5 p-6 rounded-2xl border ${bg} ${border} hover:shadow-md transition-shadow`}
            >
              <div className={`shrink-0 mt-1 ${iconColor}`}>
                <Icon size={36} />
              </div>
              <div>
                <h3 className="font-bold text-[#0A1628] text-lg mb-0.5">{name}</h3>
                <p className="text-xs text-gray-500 mb-3">{handle}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
                <span className="mt-3 inline-block text-xs font-semibold text-[#D4A017] group-hover:underline">
                  Follow →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Extra CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-10 border border-gray-100">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-3">
            Join the Vending Life Community
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto mb-6 leading-relaxed">
            Tag us in your machine photos, share your experience with our machines, and connect with
            other operators and business owners in the Seasons Cafe network.
          </p>
          <p className="text-sm text-gray-500">
            Use the hashtag{' '}
            <span className="font-semibold text-[#D4A017]">#SeasonsCafe</span> to be featured
            across our channels.
          </p>
        </div>
      </div>
    </div>
  );
}
