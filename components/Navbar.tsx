'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

const homeSubLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Careers', href: '/careers' },
];

const navLinks = [
  { label: 'Machines', href: '/machines' },
  { label: 'Our Drinks', href: '/products' },
  { label: 'Get a Quote', href: '/quote' },
  { label: 'Place a Machine', href: '/place-a-machine' },
  { label: 'Community', href: '/community' },
  { label: 'Videos', href: '/videos' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropOpen, setHomeDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setHomeDropOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isHomeSectionActive = ['/', '/about', '/contact', '/careers'].includes(pathname);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A1628] border-b border-[#38BDF8]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Mobile: hamburger on left */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-md"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>

          {/* Logo — centered on mobile, left on desktop */}
          <Link href="/" className="flex items-center gap-2 shrink-0 md:mr-6">
            <Image
              src="/images/logo.jpg"
              alt="Seasons Cafe LLC Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[#38BDF8] font-bold text-base tracking-tight">Seasons</span>
              <span className="text-white font-light text-base tracking-tight">Cafe LLC</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5 flex-1">

            {/* Home with dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setHomeDropOpen((p) => !p)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isHomeSectionActive
                    ? 'text-[#38BDF8] bg-[#38BDF8]/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
                <HiChevronDown
                  size={14}
                  className={`transition-transform ${homeDropOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {homeDropOpen && (
                <div className="absolute top-full left-0 mt-1 w-44 bg-[#0d1f3c] border border-[#38BDF8]/20 rounded-xl shadow-xl py-1 z-50">
                  <Link
                    href="/"
                    onClick={() => setHomeDropOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      pathname === '/' ? 'text-[#38BDF8]' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Home
                  </Link>
                  {homeSubLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setHomeDropOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === sub.href
                          ? 'text-[#38BDF8]'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-[#38BDF8] bg-[#38BDF8]/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <Link
              href="/quote"
              className="bg-[#38BDF8] text-[#0A1628] font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#0EA5E9] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile: Get a Quote button on right */}
          <Link
            href="/quote"
            className="md:hidden bg-[#38BDF8] text-[#0A1628] font-semibold px-3 py-1.5 rounded-md text-xs hover:bg-[#0EA5E9] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-[#38BDF8]/20 px-4 pb-4 pt-2 space-y-1">
          {/* Home section */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              pathname === '/' ? 'text-[#38BDF8] bg-[#38BDF8]/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </Link>

          {/* Sub-tabs indented */}
          <div className="pl-4 space-y-1 border-l border-[#38BDF8]/30 ml-3">
            {homeSubLinks.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                  pathname === sub.href
                    ? 'text-[#38BDF8]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {sub.label}
              </Link>
            ))}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-[#38BDF8] bg-[#38BDF8]/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
