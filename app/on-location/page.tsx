import type { Metadata } from 'next';
import OnLocationClient from './OnLocationClient';

export const metadata: Metadata = {
  title: 'On Location',
  description:
    'Find Seasons Cafe vending machines at Fort Belvoir, Fort A.P. Hill, Fort Lee, and Fort Eustis, with more Virginia locations on the way.',
};

export default function OnLocationPage() {
  return <OnLocationClient />;
}
