import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Seasons Cafe LLC — Premium Japanese Vending Machines',
    template: '%s | Seasons Cafe LLC',
  },
  description:
    'Seasons Cafe LLC sells and operates premium Japanese hot & cold vending machines. Exclusive distributor serving businesses and the DC/Maryland/Virginia area.',
  keywords: ['vending machines', 'Japanese vending machines', 'hot vending', 'cold vending', 'DMV vending', 'Seasons Cafe'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
