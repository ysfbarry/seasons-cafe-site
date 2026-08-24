import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import { siteConfig } from '@/data/site-config';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Machines', href: '/machines' },
  { label: 'Get a Quote', href: '/quote' },
  { label: 'Place a Machine', href: '/place-a-machine' },
  { label: 'Community', href: '/community' },
  { label: 'Videos', href: '/videos' },
];

export default function Footer() {
  const { socials, email, phone } = siteConfig;

  const socialLinks = [
    { icon: FaInstagram, label: 'Instagram', href: socials.instagram },
    { icon: FaFacebook,  label: 'Facebook',  href: socials.facebook  },
    { icon: FaTiktok,    label: 'TikTok',    href: socials.tiktok    },
    { icon: FaYoutube,   label: 'YouTube',   href: socials.youtube   },
    { icon: FaXTwitter,  label: 'X (Twitter)', href: socials.twitter },
  ].filter((s) => s.href);

  return (
    <footer className="bg-[#0A1628] border-t border-[#D4A017]/20 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#D4A017] font-bold text-lg">Seasons</span>
              <span className="text-white font-light text-lg">Cafe LLC</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Exclusive Japanese vending machine distributor serving businesses across the DMV and
              beyond.
            </p>
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#D4A017] transition-colors"
              >
                <FaEnvelope size={14} />
                {email}
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#D4A017] transition-colors mt-1"
              >
                {phone}
              </a>
            )}
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#D4A017] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            {socialLinks.length > 0 ? (
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-400 hover:text-[#D4A017] transition-colors"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">Coming soon</p>
            )}
          </div>
        </div>

        <div className="border-t border-[#D4A017]/10 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Seasons Cafe LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
