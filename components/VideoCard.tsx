import { Video } from '@/data/videos';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  const formattedDate = new Date(video.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col">
      {/* Thumbnail */}
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden"
        aria-label={`Watch: ${video.title}`}
      >
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
          <div className="w-14 h-14 rounded-full bg-[#D4A017] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6 ml-1"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-gray-400 mb-2">{formattedDate}</p>
        <h3 className="font-bold text-[#0A1628] text-base mb-2 leading-snug">{video.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{video.description}</p>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block text-center text-sm font-semibold bg-[#D4A017] text-[#0A1628] rounded-md py-2 hover:bg-[#e6b21e] transition-colors"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}
