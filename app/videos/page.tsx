import type { Metadata } from 'next';
import VideoCard from '@/components/VideoCard';
import { videos } from '@/data/videos';
import { siteConfig } from '@/data/site-config';
import { FaYoutube } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Videos & Podcast',
  description:
    'Watch The Vending Life Podcast by Seasons Cafe LLC — tips, behind-the-scenes, and insights for vending operators and business owners.',
};

export default function VideosPage() {
  const channelUrl = siteConfig.youtubeChannel || '#';
  const hasVideos = videos.length > 0;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-2">
            Videos &amp; Podcast
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            The Vending Life Podcast
          </h1>
          <p className="text-gray-300 max-w-xl">
            Insights, tips, and behind-the-scenes stories from the world of premium vending —
            hosted by the Seasons Cafe LLC team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-1">Latest Episodes</h2>
            <p className="text-gray-500 text-sm">
              New episodes drop regularly — subscribe so you never miss one.
            </p>
          </div>
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-5 py-2.5 rounded-md hover:bg-red-700 transition-colors text-sm shrink-0"
          >
            <FaYoutube size={18} />
            Subscribe on YouTube
          </a>
        </div>

        {hasVideos ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          /* ── Coming Soon state ── */
          <div className="max-w-xl mx-auto text-center py-20">
            <div className="w-20 h-20 rounded-full bg-[#0A1628] flex items-center justify-center mx-auto mb-6">
              <FaYoutube size={36} className="text-[#D4A017]" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0A1628] mb-3">Episodes Coming Soon</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              The Vending Life Podcast is launching soon. Subscribe on YouTube so you&apos;re the
              first to know when new episodes drop.
            </p>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-7 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              <FaYoutube size={20} />
              Subscribe on YouTube
            </a>
            <p className="mt-8 text-xs text-gray-400">
              To add episodes: paste your YouTube video IDs into{' '}
              <code className="bg-gray-100 px-1 rounded">data/videos.ts</code>
            </p>
          </div>
        )}

        {/* Subscribe CTA — only shown when there are videos */}
        {hasVideos && (
          <div className="mt-16 bg-[#0A1628] rounded-2xl text-white p-10 text-center">
            <FaYoutube size={48} className="text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold mb-3">Never Miss an Episode</h2>
            <p className="text-gray-300 max-w-lg mx-auto mb-8 leading-relaxed">
              Subscribe to the Seasons Cafe YouTube channel for the latest vending tips, machine
              walkthroughs, business advice, and behind-the-scenes content.
            </p>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4A017] text-[#0A1628] font-bold px-8 py-4 rounded-md hover:bg-[#e6b21e] transition-colors"
            >
              <FaYoutube size={20} />
              Subscribe on YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
