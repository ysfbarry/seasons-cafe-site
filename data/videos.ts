export interface Video {
  id: string;
  youtubeId: string; // Replace with real YouTube video IDs
  title: string;
  description: string;
  date: string;
}

export const videos: Video[] = [
  {
    id: '1',
    youtubeId: 'dQw4w9WgXcQ', // TODO: Replace with real YouTube video ID
    title: 'Why Japanese Vending Machines Are the Gold Standard',
    description:
      'We break down the engineering, reliability, and customer experience that makes Japanese vending machines leagues above the competition.',
    date: '2026-07-15',
  },
  {
    id: '2',
    youtubeId: 'dQw4w9WgXcQ', // TODO: Replace with real YouTube video ID
    title: 'Behind the Scenes: Placing Our First DMV Machine',
    description:
      'Follow along as we set up our very first machine placement in the DC area — from site walk to first sale.',
    date: '2026-06-28',
  },
  {
    id: '3',
    youtubeId: 'dQw4w9WgXcQ', // TODO: Replace with real YouTube video ID
    title: 'Hot vs. Cold: Which Machine Type Is Right for Your Business?',
    description:
      'Not sure which machine to get? We compare our hot beverage stations and cold drink towers side by side to help you decide.',
    date: '2026-06-10',
  },
  {
    id: '4',
    youtubeId: 'dQw4w9WgXcQ', // TODO: Replace with real YouTube video ID
    title: 'The Vending Life Podcast — Episode 1: Starting a Vending Business in 2026',
    description:
      'In our debut episode, we cover everything you need to know about starting a vending machine business from scratch — locations, machines, pricing, and more.',
    date: '2026-05-20',
  },
];
