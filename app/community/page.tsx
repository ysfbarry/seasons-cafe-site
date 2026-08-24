import type { Metadata } from 'next';
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
  FaEnvelope,
} from 'react-icons/fa6';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Community',
  description:
    'Stay connected with Seasons Cafe LLC on Instagram, Facebook, TikTok, YouTube, and X. Follow along for machine updates, DMV placements, and vending tips.',
};

const allSocials = [
  {
    icon: FaInstagram,
    name: 'Instagram',
    handle: '@seasonscafellc',
    description:
      'Follow us for behind-the-scenes machine placements, new product drops, and daily DMV vending life.',
    configKey: 'instagram' as const,
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
    configKey: 'facebook' as const,
    bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
    border: 'border-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: FaTiktok,
    name: 'TikTok',
    handle: '@seasonscafe',
    description:
      'Watch quick clips of our machines in action, vending tips, and the hustle behind running a vending business.',
    configKey: 'tiktok' as const,
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
    configKey: 'youtube' as const,
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
    configKey: 'twitter' as const,
    bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
    border: 'border-gray-200',
    iconColor: 'text-gray-900',
  },
];

export default function CommunityPage() {
  const { socials, email } = siteConfig;

  // Only show socials that have a URL configured
  const activeSocials = allSocials.filter((s) => socials[s.configKey]);

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
        {activeSocials.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {activeSocials.map(({ icon: Icon, name, handle, description, configKey, bg, border, iconColor }) => (
              <a
                key={name}
                href={socials[configKey]}
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
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg font-medium">Social links coming soon!</p>
            <p className="text-sm mt-2">Add your handles to <code className="bg-gray-100 px-1 rounded">data/site-config.ts</code> to display them here.</p>
          </div>
        )}

        {/* Email CTA */}
        {email && (
          <div className="mt-10 bg-[#0A1628] rounded-2xl p-8 text-center text-white">
            <FaEnvelope size={32} className="text-[#D4A017] mx-auto mb-3" />
            <h2 className="text-xl font-extrabold mb-2">Prefer Email?</h2>
            <p className="text-gray-300 mb-5 text-sm">Reach out directly and we&apos;ll get back to you within 1–2 business days.</p>
            <a
              href={`mailto:${email}`}
              className="inline-block bg-[#D4A017] text-[#0A1628] font-bold px-6 py-3 rounded-md hover:bg-[#e6b21e] transition-colors"
            >
              {email}
            </a>
          </div>
        )}

        {/* Hashtag CTA */}
        <div className="mt-10 text-center bg-gray-50 rounded-2xl p-10 border border-gray-100">
          <h2 className="text-2xl font-extrabold text-[#0A1628] mb-3">
            Join the Vending Life Community
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto mb-6 leading-relaxed">
            Tag us in your machine photos, share your experience, and connect with other operators
            and business owners in the Seasons Cafe network.
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
