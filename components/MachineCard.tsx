import Link from 'next/link';
import { Machine } from '@/data/machines';

interface MachineCardProps {
  machine: Machine;
}

const typeBadgeColors: Record<string, string> = {
  hot: 'bg-red-900/60 text-red-300 border border-red-700/40',
  cold: 'bg-blue-900/60 text-blue-300 border border-blue-700/40',
  combo: 'bg-purple-900/60 text-purple-300 border border-purple-700/40',
};

const typeLabel: Record<string, string> = {
  hot: 'Hot Beverages',
  cold: 'Cold Drinks',
  combo: 'Hot & Cold Combo',
};

export default function MachineCard({ machine }: MachineCardProps) {
  const imageUrl = `https://placehold.co/600x400/0A1628/D4A017?text=${encodeURIComponent(machine.name)}`;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#0A1628]">
        <img
          src={imageUrl}
          alt={machine.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${typeBadgeColors[machine.type]}`}
        >
          {typeLabel[machine.type]}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-[#0A1628] text-lg mb-1 leading-tight">{machine.name}</h3>
        <p className="text-xs text-gray-500 mb-3">Capacity: {machine.capacity}</p>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{machine.description}</p>

        <div className="mt-5 flex gap-3">
          <Link
            href={`/machines/${machine.slug}`}
            className="flex-1 text-center text-sm font-medium text-[#0A1628] border border-[#0A1628] rounded-md py-2 hover:bg-[#0A1628] hover:text-white transition-colors"
          >
            View Details
          </Link>
          <Link
            href="/quote"
            className="flex-1 text-center text-sm font-semibold bg-[#D4A017] text-[#0A1628] rounded-md py-2 hover:bg-[#e6b21e] transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
