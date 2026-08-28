import type { Metadata } from 'next';
import QuotePageClient from './QuotePageClient';

export const metadata: Metadata = {
  title: 'Get a Quote | Seasons Cafe LLC',
  description:
    'Request a quote for premium Japanese vending machines, place a machine at your location, or find our current machine locations across the DMV.',
};

export default function QuotePage() {
  return <QuotePageClient />;
}
