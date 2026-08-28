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
    type: 'combo',
    capacity: '300 items / hot + cold',
    description:
      'Our flagship Seasons Cafe branded machine — serves both hot and cold drinks including Japanese import beverages, energy drinks, hot coffees, and teas. Veteran-owned and operating right here in the DMV.',
    specs: {
      Dimensions: '72"H × 28"W × 32"D',
      Weight: '310 lbs',
      Power: '240V / 20A',
      'Hot Capacity': '150 cups',
      'Cold Capacity': '150 cans/bottles',
      'Hot Temp': '160°F – 185°F',
      'Cold Temp': '34°F – 42°F',
      Display: '10" touchscreen',
      Connectivity: 'Wi-Fi, Telemetry',
    },
    featured: true,
    image: '/images/machines/machine-seasons-cafe-green.jpg',
  },
  {
    id: '2',
    slug: 'sakura-art-wrap-combo',
    name: 'Sakura Art-Wrap Machine',
    type: 'combo',
    capacity: '300 items / hot + cold',
    description:
      'A stunning Japanese art-wrap machine that serves both hot and cold drinks. Featuring the iconic Great Wave design, this machine stops foot traffic while delivering everything from hot matcha to ice-cold imports.',
    specs: {
      Dimensions: '72"H × 28"W × 32"D',
      Weight: '310 lbs',
      Power: '240V / 20A',
      'Hot Capacity': '150 cups',
      'Cold Capacity': '150 cans/bottles',
      'Hot Temp': '160°F – 185°F',
      'Cold Temp': '34°F – 42°F',
      Display: '10" touchscreen',
      Connectivity: 'Wi-Fi, Telemetry',
    },
    featured: true,
    image: '/images/machines/machine-great-wave.jpg',
  },
  {
    id: '3',
    slug: 'yama-compact-combo',
    name: 'Yama Compact Hot & Cold',
    type: 'combo',
    capacity: '250 items / hot + cold',
    description:
      'A compact all-in-one Japanese machine that handles both hot beverages and cold drinks in a small footprint. Perfect for office break rooms, waiting areas, and smaller lobbies where space is limited.',
    specs: {
      Dimensions: '60"H × 24"W × 22"D',
      Weight: '180 lbs',
      Power: '240V / 20A',
      'Hot Capacity': '120 cups',
      'Cold Capacity': '130 cans/bottles',
      'Hot Temp': '160°F – 185°F',
      'Cold Temp': '34°F – 42°F',
      Display: '7" touchscreen',
    },
    featured: true,
    image: '/images/machines/machine-white-compact.jpg',
  },
  {
    id: '4',
    slug: 'matsuri-premium-outdoor',
    name: 'Matsuri Premium Outdoor Unit',
    type: 'combo',
    capacity: '500 items / hot + cold',
    description:
      'Built for outdoor and high-traffic environments, this commercial-grade Japanese machine serves both hot and cold drinks year-round. Handles weather, heat, and heavy use with ease — great for parking lots and storefronts.',
    specs: {
      Dimensions: '74"H × 30"W × 34"D',
      Weight: '340 lbs',
      Power: '240V / 20A',
      'Hot Capacity': '250 cups',
      'Cold Capacity': '250 cans/bottles',
      'Hot Temp': '160°F – 185°F',
      'Cold Temp': '34°F – 42°F',
      Display: '12" HD touchscreen',
      Connectivity: 'Wi-Fi, 4G SIM, Ethernet',
    },
    featured: false,
    image: '/images/machines/machine-yellow-million.jpg',
  },
  {
    id: '5',
    slug: 'fuji-modern-combo',
    name: 'Fuji Modern Hot & Cold',
    type: 'combo',
    capacity: '400 items / hot + cold',
    description:
      'Clean, minimal, and incredibly reliable. This white Japanese machine serves both hot beverages and cold drinks, fitting any upscale environment — hotels, corporate offices, and hospital lobbies — with its sleek design.',
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
      'Turn your vending machine into a landmark. The Haru series features iconic Japanese anime art wraps that stop people in their tracks — while serving both hot drinks and ice-cold beverages to every customer.',
    specs: {
      Dimensions: '76"H × 38"W × 34"D',
      Weight: '420 lbs',
      Power: '240V / 20A',
      'Hot Capacity': '175 cups',
      'Cold Capacity': '175 cans/bottles',
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
