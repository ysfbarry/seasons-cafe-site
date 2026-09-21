import type { Metadata } from 'next';
import OnLocationClient from './OnLocationClient';

export const metadata: Metadata = {
  title: 'On Location',
  description:
    'See real Seasons Cafe Japanese vending machines currently placed and serving customers across the DMV, including Exchange Express and Firestone Complete Auto Care.',
};

export default function OnLocationPage() {
  return <OnLocationClient />;
}
