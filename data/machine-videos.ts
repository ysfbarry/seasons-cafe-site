export interface MachineVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  description: string;
  location: string;
}

/**
 * Self-hosted videos of our machines out on location.
 *
 * To add one: drop the .mp4 in public/videos/, add a poster frame image,
 * then add an entry here. Keep files web-sized (a few MB) — large phone
 * exports should be compressed before being committed.
 */
export const machineVideos: MachineVideo[] = [
  {
    id: 'tour-1',
    src: '/videos/machine-tour-1.mp4',
    poster: '/videos/poster-1.jpg',
    title: 'Samurai Machine at the Exchange',
    description: 'A walk-around of our cherry-blossom samurai machine on location.',
    location: 'Exchange Express',
  },
  {
    id: 'tour-2',
    src: '/videos/machine-tour-2.mp4',
    poster: '/videos/poster-2.jpg',
    title: 'Stocked and Serving',
    description: 'Hot and cold Japanese beverages, ready around the clock.',
    location: 'Exchange Express',
  },
];
