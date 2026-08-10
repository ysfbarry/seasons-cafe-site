'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Machines', href: '/machines' },
  { label: 'Get a Quote', href: '/quote' },
  { label: 'Place a Machine', href: '/place-a-machine' },
  { label: 'Community', href: '/community' },
  { label: 'Videos', href: '/videos' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A1628] border-b border-[#D4A017]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-[#D4A017] font-bold text-xl tracking-tight leading-none">
              Seasons
            </span>
            <span className="text-white font-light text-xl tracking-tight leading-none">
              Cafe LLC
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-[#D4A017] bg-[#D4A017]/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA button desktop */}
          <div className="hidden md:block">
            <Link
              href="/quote"
              className="bg-[#D4A017] text-[#0A1628] font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#e6b21e] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-md"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-[#D4A017]/20 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-[#D4A017] bg-[#D4A017]/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/quote"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-[#D4A017] text-[#0A1628] font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#e6b21e] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
