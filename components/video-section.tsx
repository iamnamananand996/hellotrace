import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 bg-[#14141f]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(20, 20, 31, 1) 70%)'
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1000px] mx-auto px-6">
        <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Video header */}
          <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#ff2ec4] flex items-center justify-center text-white text-xs font-bold">
                T
              </div>
              <span className="text-white text-sm">Trace - Metric Tree Example</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <button className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                </svg>
              </button>
              <button className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </button>
              <button className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Video iframe and play button */}
          <div className="relative aspect-video bg-gray-100">
            <iframe
              src="https://your-video-link.com"
              title="Metric Tree Example"
              allow="autoplay; fullscreen"
              className="w-full h-full border-none"
            />
            {/* Video metadata overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-4 text-white text-sm">
              <span className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                3 min
              </span>
              <span className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                2.54K views
              </span>
            </div>
            {/* Play button */}
            <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Play className="w-8 h-8 text-gray-900 ml-1" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
