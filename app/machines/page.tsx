import type { Metadata } from 'next';
import MachinesClient from './MachinesClient';

export const metadata: Metadata = {
  title: 'Machines',
  description:
    'Browse our lineup of premium Japanese hot and cold vending machines available for purchase, including art-wrap and outdoor commercial units.',
};

export default function MachinesPage() {
  return <MachinesClient />;
}
