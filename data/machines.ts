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
    slug: 'yama-hot-beverage-station',
    name: 'Yama Hot Beverage Station',
    type: 'hot',
    capacity: '200 cups / 6 varieties',
    description:
      'A compact Japanese hot beverage station perfect for office break rooms, waiting areas, and small lobbies. Dispenses hot coffee, tea, matcha, and soup — fresh every time.',
    specs: {
      Dimensions: '60"H × 24"W × 22"D',
      Weight: '180 lbs',
      Power: '120V / 15A',
      'Cup Capacity': '200 cups',
      'Beverage Slots': '6',
      'Temperature Range': '160°F – 185°F',
      Display: '7" touchscreen',
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
    slug: 'fuji-hot-cold-combo',
    name: 'Fuji Hot & Cold Combo',
    type: 'combo',
    capacity: '400 items / hot + cold',
    description:
      'One sleek, minimal machine that does it all. The Fuji combo serves both hot beverages and cold drinks, making it the ideal all-in-one solution for hotels, corporate offices, and hospital lobbies.',
    specs: {
      Dimensions: '72"H × 26"W × 28"D',
      Weight: '290 lbs',
      Power: '240V / 20A',
      'Hot Capacity': '200 cups',
      'Cold Capacity': '200 cans/bottles',
      'Hot Temp': '160°F – 185°F',
      'Cold Temp': '34°F – 42°F',
      Display: '10" dual-zone touchscreen',
      Connectivity: 'Wi-Fi, Telemetry',
    },
    featured: false,
    image: '/images/machines/machine-white-modern.jpg',
  },
  {
    id: '6',
    slug: 'haru-art-wrap-combo',
    name: 'Haru Art-Wrap Hot & Cold',
    type: 'combo',
    capacity: '350 items / hot + cold',
    description:
      'Turn your vending machine into a landmark. The Haru series features iconic Japanese anime and ukiyo-e art wraps — and serves both hot drinks and cold beverages to keep every customer happy.',
    specs: {
      Dimensions: '76"H × 38"W × 34"D',
      Weight: '420 lbs',
      Power: '240V / 20A',
      'Hot Capacity': '150 cups',
      'Cold Capacity': '200 cans/bottles',
      'Hot Temp': '160°F – 185°F',
      'Cold Temp': '34°F – 42°F',
      Display: '12" touchscreen',
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
