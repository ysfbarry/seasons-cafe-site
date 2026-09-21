import type { Metadata } from 'next';
import Link from 'next/link';
import VideoCard from '@/components/VideoCard';
import MachineVideoPlayer from '@/components/MachineVideoPlayer';
import { videos } from '@/data/videos';
import { machineVideos } from '@/data/machine-videos';
import { siteConfig } from '@/data/site-config';
import { FaYoutube } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Videos & Podcast',
  description:
    'Watch machine walkthroughs from Seasons Cafe LLC locations across the DMV, plus The Vending Life Podcast — tips and insights for vending operators and business owners.',
};

export default function VideosPage() {
  const channelUrl = siteConfig.youtubeChannel || '#';
  const hasVideos = videos.length > 0;
  const hasMachineVideos = machineVideos.length > 0;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0A1628] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
            Videos &amp; Podcast
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Videos</h1>
          <p className="text-gray-300 max-w-xl">
            Machine walkthroughs from our locations across the DMV, plus The Vending Life Podcast
            from the Seasons Cafe LLC team.
          </p>
        </div>
      </div>

      {/* ── Machine walkthroughs ── */}
      {hasMachineVideos && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
          <div className="text-center mb-10">
            <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
              See Them In Action
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628]">
              Machine Walkthroughs
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Real Seasons Cafe machines currently placed and serving customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {machineVideos.map((v) => (
              <MachineVideoPlayer key={v.id} video={v} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/on-location"
              className="inline-block text-sm font-semibold text-[#38BDF8] hover:underline"
            >
              See more photos from our locations →
            </Link>
          </div>

          <div className="border-t border-gray-200 mt-14" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Intro row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-widest mb-2">
              The Vending Life Podcast
            </p>
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
          <div className="max-w-xl mx-auto text-center bg-gray-50 border border-gray-200 rounded-2xl py-12 px-6">
            <div className="w-16 h-16 rounded-full bg-[#0A1628] flex items-center justify-center mx-auto mb-5">
              <FaYoutube size={28} className="text-[#38BDF8]" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0A1628] mb-3">Episodes Coming Soon</h3>
            <p className="text-gray-500 leading-relaxed mb-7 text-sm">
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
              className="inline-flex items-center gap-2 bg-[#38BDF8] text-[#0A1628] font-bold px-8 py-4 rounded-md hover:bg-[#0EA5E9] transition-colors"
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
