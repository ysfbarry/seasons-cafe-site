export type TempType = 'hot-cold' | 'cold' | 'room';

export type ProductCategory =
  | 'japanese-asian-coffee'
  | 'american-coffee'
  | 'energy-drinks'
  | 'protein-nutrition'
  | 'teas-specialty'
  | 'sodas-hydration';

export interface Product {
  id: string;
  brand: string;
  name: string;
  category: ProductCategory;
  temp: TempType;
  size: string;
  note?: string;
  /**
   * Path to the product image inside /public/images/products/
   * e.g. '/images/products/ucc-coffee-milk.jpg'
   * Leave blank to show the branded placeholder.
   */
  image?: string;
}

export const categoryMeta: Record<
  ProductCategory,
  { label: string; emoji: string; description: string }
> = {
  'japanese-asian-coffee': {
    label: 'Japanese & Asian Coffee',
    emoji: '☕',
    description: 'Premium canned coffees and teas from Japan, Korea, and Taiwan — many available hot or cold.',
  },
  'american-coffee': {
    label: 'American Coffee',
    emoji: '🇺🇸',
    description: 'Bold, ready-to-drink American coffee brands — including veteran-owned Black Rifle Coffee.',
  },
  'energy-drinks': {
    label: 'Energy Drinks',
    emoji: '⚡',
    description: 'Red Bull and V8 Energy in a wide range of flavors and editions.',
  },
  'protein-nutrition': {
    label: 'Protein & Nutrition Shakes',
    emoji: '💪',
    description: 'High-protein shakes and meal supplements — great for gyms, offices, and fitness locations.',
  },
  'teas-specialty': {
    label: 'Teas & Specialty Drinks',
    emoji: '🧋',
    description: 'Bubble milk teas, Thai tea, strawberry milk, and more from Asia and beyond.',
  },
  'sodas-hydration': {
    label: 'Sodas & Hydration',
    emoji: '🥤',
    description: 'Refreshing sodas, aloe vera drinks, hydration, and classic favorites.',
  },
};

export const products: Product[] = [
  // ── Japanese & Asian Coffee ──────────────────────────────────────────
  {
    id: 'ucc-coffee-milk',
    brand: 'UCC',
    name: 'Coffee with Milk (Original Blend)',
    category: 'japanese-asian-coffee',
    temp: 'hot-cold',
    size: '11.4 fl oz',
    note: 'Since 1969 — pioneer of canned liquid coffee in Japan',
  },
  {
    id: 'ucc-milk-tea',
    brand: 'UCC',
    name: 'Milk Tea (Assam)',
    category: 'japanese-asian-coffee',
    temp: 'hot-cold',
    size: '11.4 fl oz',
  },
  {
    id: 'ucc-matcha-latte',
    brand: 'UCC',
    name: 'Matcha Latte',
    category: 'japanese-asian-coffee',
    temp: 'hot-cold',
    size: '8.79 fl oz',
    note: 'Uji matcha from Kyoto',
  },
  {
    id: 'ucc-caffe-latte',
    brand: 'UCC',
    name: 'Caffe Latte',
    category: 'japanese-asian-coffee',
    temp: 'hot-cold',
    size: '8.79 fl oz',
  },
  {
    id: 'pokka-black-coffee',
    brand: 'Pokka',
    name: 'Black Coffee (No Sugar)',
    category: 'japanese-asian-coffee',
    temp: 'cold',
    size: '8.1 fl oz',
    note: 'Real brewed from roasted coffee beans',
  },
  {
    id: 'pokka-cappuccino',
    brand: 'Pokka',
    name: 'Cappuccino',
    category: 'japanese-asian-coffee',
    temp: 'cold',
    size: '8.1 fl oz',
    note: 'Real brewed from coffee beans',
  },
  {
    id: 'pokka-vanilla-coffee',
    brand: 'Pokka',
    name: 'Vanilla Coffee',
    category: 'japanese-asian-coffee',
    temp: 'cold',
    size: '8.1 fl oz',
    note: 'Real brewed from roasted coffee beans',
  },
  {
    id: 'pokka-milk-coffee',
    brand: 'Pokka',
    name: 'Milk Coffee',
    category: 'japanese-asian-coffee',
    temp: 'cold',
    size: '8.1 fl oz',
    note: 'Real brewed from coffee beans',
  },
  {
    id: 'lotte-lets-be',
    brand: 'Lotte',
    name: "Let's Be Mild Coffee",
    category: 'japanese-asian-coffee',
    temp: 'hot-cold',
    size: '5.92 fl oz',
    note: '60 calories',
  },

  // ── American Coffee ──────────────────────────────────────────────────
  {
    id: 'mr-brown-blue-mountain',
    brand: 'Mr. Brown',
    name: 'Blue Mountain Blend Iced Coffee',
    category: 'american-coffee',
    temp: 'hot-cold',
    size: '8.12 fl oz (240 mL)',
  },
  {
    id: 'mr-brown-cappuccino',
    brand: 'Mr. Brown',
    name: 'Cappuccino Iced Coffee',
    category: 'american-coffee',
    temp: 'hot-cold',
    size: '8.12 fl oz (240 mL)',
  },
  {
    id: 'mr-brown-black-coffee',
    brand: 'Mr. Brown',
    name: 'Black Coffee (No Added Sugar)',
    category: 'american-coffee',
    temp: 'hot-cold',
    size: '8.12 fl oz (240 mL)',
  },
  {
    id: 'mr-brown-vanilla',
    brand: 'Mr. Brown',
    name: 'Vanilla Iced Coffee',
    category: 'american-coffee',
    temp: 'hot-cold',
    size: '8.12 fl oz (240 mL)',
  },
  {
    id: 'brcc-espresso-cream',
    brand: 'Black Rifle Coffee Co.',
    name: 'Espresso with Cream',
    category: 'american-coffee',
    temp: 'cold',
    size: '11 fl oz (325 mL)',
    note: '200mg caffeine — Veteran Owned',
  },
  {
    id: 'brcc-espresso-salty-caramel',
    brand: 'Black Rifle Coffee Co.',
    name: 'Espresso Salty Caramel',
    category: 'american-coffee',
    temp: 'cold',
    size: '11 fl oz (325 mL)',
    note: '200mg caffeine — Gluten Free',
  },
  {
    id: 'brcc-espresso-mocha',
    brand: 'Black Rifle Coffee Co.',
    name: 'Espresso Mocha',
    category: 'american-coffee',
    temp: 'cold',
    size: '11 fl oz (325 mL)',
    note: '200mg caffeine',
  },
  {
    id: 'brcc-300-mocha',
    brand: 'Black Rifle Coffee Co.',
    name: 'Espresso 300mg Triple Shot — Rich Mocha',
    category: 'american-coffee',
    temp: 'cold',
    size: '15 fl oz (443 mL)',
    note: '300mg caffeine — 100% Colombian Coffee',
  },
  {
    id: 'brcc-300-caramel-vanilla',
    brand: 'Black Rifle Coffee Co.',
    name: 'Espresso 300mg Triple Shot — Caramel Vanilla',
    category: 'american-coffee',
    temp: 'cold',
    size: '15 fl oz (443 mL)',
    note: '300mg caffeine — 100% Colombian Coffee',
  },
  {
    id: 'brcc-300-vanilla-bomb',
    brand: 'Black Rifle Coffee Co.',
    name: 'Espresso 300mg Triple Shot — Vanilla Bomb',
    category: 'american-coffee',
    temp: 'cold',
    size: '15 fl oz (443 mL)',
    note: '300mg caffeine — 100% Arabica Coffee',
  },

  // ── Energy Drinks ────────────────────────────────────────────────────
  {
    id: 'redbull-original',
    brand: 'Red Bull',
    name: 'Energy Drink (Original)',
    category: 'energy-drinks',
    temp: 'cold',
    size: '12 fl oz (355 mL)',
  },
  {
    id: 'redbull-sugarfree',
    brand: 'Red Bull',
    name: 'Sugarfree',
    category: 'energy-drinks',
    temp: 'cold',
    size: '12 fl oz (355 mL)',
  },
  {
    id: 'redbull-red-edition',
    brand: 'Red Bull',
    name: 'Red Edition — Watermelon',
    category: 'energy-drinks',
    temp: 'cold',
    size: '12 fl oz (355 mL)',
  },
  {
    id: 'redbull-summer-edition',
    brand: 'Red Bull',
    name: 'Summer Edition — Dragon Fruit',
    category: 'energy-drinks',
    temp: 'cold',
    size: '12 fl oz (355 mL)',
  },
  {
    id: 'redbull-pink-edition',
    brand: 'Red Bull',
    name: 'Pink Edition Sugarfree — Wild Berries',
    category: 'energy-drinks',
    temp: 'cold',
    size: '12 fl oz (355 mL)',
  },
  {
    id: 'redbull-amber-edition',
    brand: 'Red Bull',
    name: 'Amber Edition — Strawberry Apricot',
    category: 'energy-drinks',
    temp: 'cold',
    size: '8.4 fl oz (250 mL)',
  },
  {
    id: 'redbull-sea-blue-edition',
    brand: 'Red Bull',
    name: 'Sea Blue Edition Sugarfree — Juneberry',
    category: 'energy-drinks',
    temp: 'cold',
    size: '12 fl oz (355 mL)',
  },
  {
    id: 'redbull-coconut-edition',
    brand: 'Red Bull',
    name: 'Coconut Edition — Coconut Berry',
    category: 'energy-drinks',
    temp: 'cold',
    size: '8.4 fl oz (250 mL)',
  },
  {
    id: 'v8-energy-pomegranate',
    brand: 'V8',
    name: '+Energy Pomegranate Blueberry',
    category: 'energy-drinks',
    temp: 'cold',
    size: '8 fl oz (237 mL)',
    note: 'Steady energy & supports focus',
  },
  {
    id: 'v8-energy-peach-mango',
    brand: 'V8',
    name: '+Energy Peach Mango',
    category: 'energy-drinks',
    temp: 'cold',
    size: '8 fl oz (237 mL)',
    note: 'Steady energy from green tea',
  },

  // ── Protein & Nutrition ──────────────────────────────────────────────
  {
    id: 'oikos-chocolate',
    brand: 'Oikos',
    name: 'Protein Shake — Chocolate',
    category: 'protein-nutrition',
    temp: 'cold',
    size: '12 fl oz',
    note: '30g protein · 1g sugar · No artificial sweeteners',
  },
  {
    id: 'oikos-vanilla',
    brand: 'Oikos',
    name: 'Protein Shake — Vanilla',
    category: 'protein-nutrition',
    temp: 'cold',
    size: '12 fl oz',
    note: '30g protein · 1g sugar · No artificial sweeteners',
  },
  {
    id: 'fairlife-chocolate',
    brand: 'Fairlife',
    name: 'Nutrition Plan — Chocolate',
    category: 'protein-nutrition',
    temp: 'cold',
    size: '11.5 fl oz',
    note: '30g protein · 150 calories',
  },
  {
    id: 'fairlife-core-power-chocolate',
    brand: 'Fairlife',
    name: 'Core Power — Chocolate',
    category: 'protein-nutrition',
    temp: 'cold',
    size: '14 fl oz',
    note: '26g protein · High quality milk shake',
  },
  {
    id: 'raw-protein-chocolate',
    brand: 'RAW',
    name: 'Protein Shake — Chocolate Milkshake',
    category: 'protein-nutrition',
    temp: 'cold',
    size: '12 fl oz',
    note: '30g protein · 160 calories',
  },
  {
    id: 'dymatize-fruity-pebbles',
    brand: 'Dymatize',
    name: 'Performance Protein Shake — Fruity Pebbles',
    category: 'protein-nutrition',
    temp: 'cold',
    size: '11.5 fl oz',
    note: '30g protein',
  },
  {
    id: 'nurri-vanilla',
    brand: 'Nurri',
    name: 'Ultra-Filtered Milk Shake — Vanilla',
    category: 'protein-nutrition',
    temp: 'cold',
    size: '11 fl oz (325 mL)',
    note: '30g protein · 1g sugar',
  },
  {
    id: 'nurri-chocolate',
    brand: 'Nurri',
    name: 'Ultra-Filtered Milk Shake — Chocolate',
    category: 'protein-nutrition',
    temp: 'cold',
    size: '11 fl oz (325 mL)',
    note: '30g protein · 1g sugar',
  },

  // ── Teas & Specialty ─────────────────────────────────────────────────
  {
    id: 'itoen-jasmine-green-tea',
    brand: 'Ito En',
    name: 'Jasmine Green Tea (Unsweetened)',
    category: 'teas-specialty',
    temp: 'cold',
    size: '16.9 fl oz (500 mL)',
  },
  {
    id: 'sangaria-strawberry-milk',
    brand: 'Sangaria',
    name: 'Strawberry Milk',
    category: 'teas-specialty',
    temp: 'cold',
    size: '8.96 fl oz (265 mL)',
    note: 'Strawberries blended with real milk',
  },
  {
    id: 'kimbo-thai-tea',
    brand: 'Kimbo',
    name: 'Thai Tea Drink',
    category: 'teas-specialty',
    temp: 'cold',
    size: '11.2 fl oz (350 mL)',
  },
  {
    id: 'rico-bubble-taro',
    brand: 'Rico',
    name: 'Bubble Milk Tea — Taro Flavor',
    category: 'teas-specialty',
    temp: 'cold',
    size: '12.3 fl oz (350 g)',
    note: 'Taiwan Classic',
  },
  {
    id: 'rico-bubble-original',
    brand: 'Rico',
    name: 'Bubble Milk Tea — Original',
    category: 'teas-specialty',
    temp: 'cold',
    size: '12.3 fl oz (350 g)',
    note: 'Taiwan Classic',
  },
  {
    id: 'rico-bubble-brown-sugar',
    brand: 'Rico',
    name: 'Bubble Milk Tea — Brown Sugar',
    category: 'teas-specialty',
    temp: 'cold',
    size: '12.3 fl oz (350 g)',
    note: 'Taiwan Classic',
  },

  // ── Sodas & Hydration ────────────────────────────────────────────────
  {
    id: 'yoohoo-chocolate',
    brand: 'Yoo-hoo',
    name: 'Chocolate Drink',
    category: 'sodas-hydration',
    temp: 'cold',
    size: '11 fl oz',
  },
  {
    id: 'mojo-coconut-water',
    brand: 'Mojo',
    name: 'Coconut Water',
    category: 'sodas-hydration',
    temp: 'cold',
    size: '11.1 fl oz (330 mL)',
    note: 'Non-GMO Verified · Never from concentrate',
  },
  {
    id: 'prime-cherry-freeze',
    brand: 'Prime',
    name: 'Hydration Drink — Cherry Freeze',
    category: 'sodas-hydration',
    temp: 'cold',
    size: '16.9 fl oz (500 mL)',
  },
  {
    id: 'canada-dry-ginger-ale',
    brand: 'Canada Dry',
    name: 'Ginger Ale',
    category: 'sodas-hydration',
    temp: 'cold',
    size: '12 fl oz (355 mL)',
  },
  {
    id: 'canada-dry-cranberry',
    brand: 'Canada Dry',
    name: 'Cranberry Ginger Ale',
    category: 'sodas-hydration',
    temp: 'cold',
    size: '12 fl oz (355 mL)',
  },
  {
    id: 'canada-dry-cherry-splash',
    brand: 'Canada Dry',
    name: 'Fruit Splash — Cherry Ginger Ale',
    category: 'sodas-hydration',
    temp: 'cold',
    size: '12 fl oz (355 mL)',
    note: 'Made with a splash of real juice',
  },
  {
    id: 'canada-dry-blackberry',
    brand: 'Canada Dry',
    name: 'Ginger Ale — Blackberry',
    category: 'sodas-hydration',
    temp: 'cold',
    size: '12 fl oz (355 mL)',
    note: 'Caffeine free',
  },
  {
    id: 'okf-aloe-mango',
    brand: "OKF Farmer's",
    name: 'Aloe Vera Drink — Mango',
    category: 'sodas-hydration',
    temp: 'cold',
    size: '16.9 fl oz (500 mL)',
  },
  {
    id: 'okf-aloe-pineapple',
    brand: "OKF Farmer's",
    name: 'Aloe Vera Drink — Pineapple',
    category: 'sodas-hydration',
    temp: 'cold',
    size: '16.9 fl oz (500 mL)',
  },
  {
    id: 'lotte-milkis-original',
    brand: 'Lotte',
    name: 'Milkis — Original (Milk & Yogurt Cream Soda)',
    category: 'sodas-hydration',
    temp: 'hot-cold',
    size: '8.45 fl oz (250 mL)',
    note: "Korea's No. 1 Cream Soda",
  },
  {
    id: 'lotte-milkis-apple',
    brand: 'Lotte',
    name: 'Milkis — Apple',
    category: 'sodas-hydration',
    temp: 'hot-cold',
    size: '8.45 fl oz (250 mL)',
    note: "Korea's No. 1 Cream Soda",
  },
];

export const categories = Object.keys(categoryMeta) as ProductCategory[];

export function getProductsByCategory(cat: ProductCategory): Product[] {
  return products.filter((p) => p.category === cat);
}
