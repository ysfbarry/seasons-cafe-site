import type { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'Our Drinks',
  description:
    'Browse the full lineup of beverages stocked in Seasons Cafe LLC vending machines — Japanese canned coffee, energy drinks, protein shakes, bubble tea, sodas, and more.',
};

export default function ProductsPage() {
  return <ProductsClient />;
}
