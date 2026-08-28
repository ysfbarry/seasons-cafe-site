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
  image?: string;
}

export const machines: Machine[] = [
  {
    id: '1',
    slug: 'seasons-cafe-signature',
    name: 'Seasons Cafe Signature Machine',
    type: 'cold',
    capacity: '300 cans & bottles / 10 selections',
    description:
      'Our flagship Seasons Cafe branded machine — stocked with Japanese import drinks, energy beverages, and premium coffees. Veteran-owned and operated right here in the DMV.',
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
    image: '/images/machines/machine-seasons-cafe-green.jpg',
  },
  {
    id: '2',
    slug: 'sakura-cold-drink-tower',
    name: 'Sakura Cold Drink Tower',
    type: 'cold',
    capacity: '300 cans & bottles / 10 selections',
    description:
      'A sleek, high-capacity cold-drink tower featuring stunning Japanese art wrap designs. Engineered for busy offices, gyms, and retail spaces — whisper-quiet compressor keeps drinks at a perfect chill 24/7.',
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
    image: '/images/machines/machine-great-wave.jpg',
  },
  {
    id: '3',
    slug: 'yama-combo-machine',
    name: 'Yama Compact Hot & Cold',
    type: 'combo',
    capacity: '250 items / hot + cold',
    description:
      'One machine, two worlds. This compact Japanese unit serves hot beverages and ice-cold drinks in a small footprint — the perfect all-in-one solution for break rooms, lobbies, and co-working spaces.',
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
    image: '/images/machines/machine-white-compact.jpg',
  },
  {
    id: '4',
    slug: 'matsuri-premium-outdoor',
    name: 'Matsuri Premium Outdoor Unit',
    type: 'cold',
    capacity: '500 cans & bottles / 12 selections',
    description:
      'Built for outdoor and high-traffic environments, this commercial-grade Japanese machine handles weather, heat, and heavy use with ease. Perfect for parking lots, storefronts, and event venues.',
    specs: {
      Dimensions: '74"H × 30"W × 34"D',
      Weight: '340 lbs',
      Power: '240V / 20A',
      Capacity: '500 cans/bottles',
      Selections: '12',
      'Temperature Range': '34°F – 42°F',
      Display: '12" HD touchscreen',
      Connectivity: 'Wi-Fi, 4G SIM, Ethernet',
    },
    featured: false,
    image: '/images/machines/machine-yellow-million.jpg',
  },
  {
    id: '5',
    slug: 'fuji-modern-cold-station',
    name: 'Fuji Modern Cold Station',
    type: 'cold',
    capacity: '400 cans & bottles / 10 slots',
    description:
      'Clean, minimal, and incredibly reliable. This white Japanese cold station fits any upscale environment — hotels, corporate offices, hospitals — with its sleek see-through door and silent operation.',
    specs: {
      Dimensions: '68"H × 22"W × 24"D',
      Weight: '210 lbs',
      Power: '120V / 10A',
      Capacity: '400 cans/bottles',
      Selections: '10',
      'Temperature Range': '34°F – 42°F',
      Display: '7" touchscreen',
      Connectivity: 'Wi-Fi, Telemetry',
    },
    featured: false,
    image: '/images/machines/machine-white-modern.jpg',
  },
  {
    id: '6',
    slug: 'haru-art-wrap-cold-tower',
    name: 'Haru Art-Wrap Cold Tower',
    type: 'cold',
    capacity: '350 cans & bottles / 10 selections',
    description:
      'Turn your vending machine into a landmark. The Haru series features iconic Japanese anime and ukiyo-e art wraps that stop people in their tracks — while delivering premium cold drinks from Japan.',
    specs: {
      Dimensions: '76"H × 38"W × 34"D',
      Weight: '420 lbs',
      Power: '240V / 20A',
      Capacity: '350 cans/bottles',
      Selections: '10',
      Display: '10" touchscreen',
      Connectivity: 'Wi-Fi, 4G SIM, Ethernet',
    },
    featured: false,
    image: '/images/machines/machine-samurai.jpg',
  },
];

export function getMachineBySlug(slug: string): Machine | undefined {
  return machines.find((m) => m.slug === slug);
}

export function getFeaturedMachines(): Machine[] {
  return machines.filter((m) => m.featured);
}
