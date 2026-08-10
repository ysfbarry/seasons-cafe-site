export type MachineType = 'hot' | 'cold' | 'combo';

export interface Machine {
  id: string;
  slug: string;
  name: string;
  type: MachineType;
  capacity: string;
  description: string;
  specs: Record<string, string>;
  featured: boolean;
}

export const machines: Machine[] = [
  {
    id: '1',
    slug: 'fuji-hot-beverage-station',
    name: 'Fuji Hot Beverage Station',
    type: 'hot',
    capacity: '400 cups / 8 varieties',
    description:
      'The Fuji series delivers premium hot beverages on demand — from aromatic drip coffee to rich matcha lattes. Engineered in Japan for round-the-clock reliability with minimal maintenance.',
    specs: {
      Dimensions: '72"H × 26"W × 30"D',
      Weight: '285 lbs',
      Power: '120V / 15A',
      'Cup Capacity': '400 cups',
      'Beverage Slots': '8',
      'Temperature Range': '160°F – 185°F',
      Display: '7" touchscreen',
      Connectivity: 'Wi-Fi, Ethernet',
    },
    featured: true,
  },
  {
    id: '2',
    slug: 'sakura-cold-drink-tower',
    name: 'Sakura Cold Drink Tower',
    type: 'cold',
    capacity: '300 cans & bottles / 10 selections',
    description:
      'A sleek, high-capacity cold-drink tower from Japan built for busy offices, gyms, and retail spaces. Whisper-quiet compressor keeps drinks at a perfect chill 24/7.',
    specs: {
      Dimensions: '72"H × 28"W × 32"D',
      Weight: '310 lbs',
      Power: '120V / 20A',
      Capacity: '300 cans/bottles',
      Selections: '10',
      'Temperature Range': '34°F – 42°F',
      Display: '10" touchscreen',
      Connectivity: 'Wi-Fi, Telemetry',
    },
    featured: true,
  },
  {
    id: '3',
    slug: 'yama-combo-machine',
    name: 'Yama Combo Machine',
    type: 'combo',
    capacity: '250 items / hot + cold',
    description:
      'One machine, two worlds. The Yama Combo serves hot beverages from the top section and ice-cold drinks from the bottom — the perfect all-in-one solution for smaller spaces.',
    specs: {
      Dimensions: '72"H × 34"W × 32"D',
      Weight: '395 lbs',
      Power: '240V / 20A',
      'Hot Capacity': '150 cups',
      'Cold Capacity': '100 cans/bottles',
      'Hot Temp': '160°F – 185°F',
      'Cold Temp': '34°F – 42°F',
      Display: '10" dual-zone touchscreen',
    },
    featured: true,
  },
  {
    id: '4',
    slug: 'matsuri-premium-coffee-bar',
    name: 'Matsuri Premium Coffee Bar',
    type: 'hot',
    capacity: '500 cups / 12 varieties',
    description:
      'Bring a café experience to any space. The Matsuri grinds fresh beans per cup and offers 12 premium hot beverage options including espresso, cappuccino, and traditional green tea.',
    specs: {
      Dimensions: '74"H × 30"W × 34"D',
      Weight: '340 lbs',
      Power: '240V / 20A',
      'Cup Capacity': '500 cups',
      'Beverage Slots': '12',
      'Bean Hopper': '2 kg',
      Display: '12" HD touchscreen',
      Connectivity: 'Wi-Fi, 4G SIM, Ethernet',
    },
    featured: false,
  },
  {
    id: '5',
    slug: 'nami-sparkling-water-station',
    name: 'Nami Sparkling & Still Water Station',
    type: 'cold',
    capacity: '500 servings / 4 options',
    description:
      'Tap into Japan\'s water technology with the Nami station. Offers chilled still, lightly sparkling, and fully sparkling water with optional citrus infusion — zero single-use plastic.',
    specs: {
      Dimensions: '68"H × 22"W × 24"D',
      Weight: '210 lbs',
      Power: '120V / 10A',
      'Daily Capacity': '500 servings',
      'Water Options': '4',
      Filtration: '5-stage UV filter',
      Display: '7" touchscreen',
      Connectivity: 'Wi-Fi, Telemetry',
    },
    featured: false,
  },
  {
    id: '6',
    slug: 'haru-snack-and-beverage-center',
    name: 'Haru Snack & Beverage Center',
    type: 'combo',
    capacity: '400 items / snacks + drinks',
    description:
      'The Haru center combines a snack vending section with a cold-drink zone, bringing a full refreshment station in one elegant unit. Ideal for office break rooms and hotel lobbies.',
    specs: {
      Dimensions: '76"H × 38"W × 34"D',
      Weight: '420 lbs',
      Power: '240V / 20A',
      'Snack Capacity': '200 items',
      'Drink Capacity': '200 cans/bottles',
      Selections: '30+',
      Display: '15" touchscreen',
      Connectivity: 'Wi-Fi, 4G SIM, Ethernet',
    },
    featured: false,
  },
];

export function getMachineBySlug(slug: string): Machine | undefined {
  return machines.find((m) => m.slug === slug);
}

export function getFeaturedMachines(): Machine[] {
  return machines.filter((m) => m.featured);
}
