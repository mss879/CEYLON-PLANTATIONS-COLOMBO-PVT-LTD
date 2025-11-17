export default function GalleryHeroSection() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-20 text-center">
        {/* Tea leaf icon with animation */}
        <div className="flex justify-center mb-8">
          <div className="relative animate-spin-slow">
            <img
              src="https://somerfieldtea.com/wp-content/uploads/2025/04/tea-leaqves-white-thumbs-6-300x296.png.webp"
              alt="Tea leaves"
              className="w-24 h-24 lg:w-32 lg:h-32 object-contain opacity-90"
            />
          </div>
        </div>

        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <img
            src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
            loading="lazy"
            alt=""
            className="w-8 h-8 opacity-80"
          />
          <span className="text-white/90 text-sm lg:text-base font-medium tracking-wider uppercase">
            Collection
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-[1.1] tracking-tight">
          Gallery
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          Explore our visual journey through the world of premium Ceylon tea. From tea grades to production processes, witness the excellence in every frame.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-light text-white mb-2">50+</div>
            <div className="text-sm lg:text-base text-white/70 font-light">Images</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-light text-white mb-2">10+</div>
            <div className="text-sm lg:text-base text-white/70 font-light">Videos</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
