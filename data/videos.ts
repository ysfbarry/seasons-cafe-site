export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  date: string;
}

/**
 * Add your YouTube videos here.
 * To get a YouTube video ID, look at the URL:
 *   https://www.youtube.com/watch?v=XXXXXXXXXX
 *                                    ^^^^^^^^^^  ← this part is the ID
 *
 * Example:
 * {
 *   id: '1',
 *   youtubeId: 'abc123XYZ',
 *   title: 'Episode 1: Starting a Vending Business',
 *   description: 'A short description of the episode.',
 *   date: '2026-08-01',
 * }
 */
export const videos: Video[] = [
  // Add your videos here — the page will show them automatically.
  // When this list is empty, the page displays a "Coming Soon" message.
];
