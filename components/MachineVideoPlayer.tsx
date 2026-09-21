'use client';

import { useRef, useState } from 'react';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import type { MachineVideo } from '@/data/machine-videos';

export default function MachineVideoPlayer({ video }: { video: MachineVideo }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const el = ref.current;
    if (!el) return;
    const next = !muted;
    el.muted = next;
    setMuted(next);
    if (!next && el.paused) el.play().catch(() => {});
  }

  return (
    <div className="flex flex-col">
      <div className="relative rounded-2xl overflow-hidden bg-black shadow-xl">
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          controls
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full aspect-[9/16] object-cover"
        />
        <button
          onClick={toggleSound}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white rounded-full p-2.5 hover:bg-[#38BDF8] hover:text-[#0A1628] transition-colors"
        >
          {muted ? <HiVolumeOff size={18} /> : <HiVolumeUp size={18} />}
        </button>
        {muted && (
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full pointer-events-none whitespace-nowrap">
            Tap for sound
          </div>
        )}
      </div>
      <p className="text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider mt-4">
        {video.location}
      </p>
      <h3 className="font-bold text-[#0A1628] mt-0.5">{video.title}</h3>
      <p className="text-gray-500 text-sm mt-1">{video.description}</p>
    </div>
  );
}
