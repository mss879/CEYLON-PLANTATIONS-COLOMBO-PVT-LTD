'use client';

import { useState, useRef } from 'react';

interface Video {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  url: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'V&V FBOP Tips 400g',
    duration: '0:16',
    thumbnail: 'https://somerfieldtea.com/wp-content/uploads/2025/08/fbop-tips-2.jpeg.webp',
    url: 'https://somerfieldtea.com/wp-content/uploads/2025/08/fbop-tips-video-1.mp4'
  },
  {
    id: '2',
    title: 'FBOP Tips',
    duration: '0:16',
    thumbnail: 'https://somerfieldtea.com/wp-content/uploads/2025/08/fbop-tips-3.jpg.webp',
    url: 'https://somerfieldtea.com/wp-content/uploads/2025/08/fbop-tips-video-2.mp4'
  },
  {
    id: '3',
    title: 'Extra Super FBOP',
    duration: '',
    thumbnail: 'https://somerfieldtea.com/wp-content/uploads/2025/08/sft-products-7-1.jpg.webp',
    url: 'https://somerfieldtea.com/wp-content/uploads/2025/08/extra-super-fbop-1.mp4'
  }
];

export default function VideoGallerySection() {
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);
  const [playedVideos, setPlayedVideos] = useState<Set<string>>(new Set());
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setPlayedVideos(prev => {
      const newSet = new Set(prev);
      newSet.add(video.id);
      return newSet;
    });
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="https://somerfieldtea.com/wp-content/uploads/2025/04/tea-leaves-thumbs-3-300x291.png.webp"
              alt="Tea leaves"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h2 className="text-2xl lg:text-3xl font-light text-slate-600 mb-2">
            Archives of Our
          </h2>
          <h3 className="text-4xl lg:text-5xl font-light text-slate-900">
            Video Gallery
          </h3>
        </div>

        {/* Video Player Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video */}
              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  key={selectedVideo.id}
                  controls
                  className="w-full h-full"
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.url} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>

              {/* Video Info */}
              <div className="p-6 bg-slate-800">
                <h3 className="text-xl lg:text-2xl font-light text-white mb-2">
                  {selectedVideo.title}
                </h3>
                {selectedVideo.duration && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Duration: {selectedVideo.duration}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              {/* Playlist Header */}
              <div className="bg-slate-900 px-6 py-4 border-b border-slate-700">
                <h4 className="text-lg font-medium text-white">Playlist</h4>
                <p className="text-sm text-slate-400 mt-1">{videos.length} Videos</p>
              </div>

              {/* Playlist Items */}
              <div className="max-h-[600px] overflow-y-auto">
                {videos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => handleVideoSelect(video)}
                    className={`w-full p-4 flex items-start gap-4 transition-all duration-200 border-b border-slate-100 last:border-b-0 ${
                      selectedVideo.id === video.id
                        ? 'bg-emerald-50 border-l-4 border-l-emerald-600'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden bg-slate-200">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Play Icon Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        {playedVideos.has(video.id) ? (
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="flex-1 text-left">
                      <h5 className={`font-medium text-sm mb-1 line-clamp-2 ${
                        selectedVideo.id === video.id ? 'text-emerald-900' : 'text-slate-900'
                      }`}>
                        {video.title}
                      </h5>
                      {video.duration && (
                        <p className="text-xs text-slate-500">{video.duration}</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Video Count Info */}
            <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">
                  Watched {playedVideos.size} of {videos.length} videos
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid View (Mobile Alternative) */}
        <div className="mt-16 lg:hidden">
          <h4 className="text-xl font-light text-slate-900 mb-6">All Videos</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => handleVideoSelect(video)}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-video bg-slate-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="font-medium text-slate-900 mb-1">{video.title}</h5>
                  {video.duration && (
                    <p className="text-sm text-slate-500">{video.duration}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
