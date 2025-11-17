export default function CatalogHeroSection() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-20 text-center">
        {/* Tea leaf icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <svg
              className="w-20 h-20 lg:w-28 lg:h-28 text-emerald-400/80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C10.9 2 10 2.9 10 4C10 4.7 10.4 5.4 11 5.7V6C11 8.2 9.2 10 7 10H6.7C6.4 9.4 5.7 9 5 9C3.9 9 3 9.9 3 11C3 12.1 3.9 13 5 13C5.7 13 6.4 12.6 6.7 12H7C9.8 12 12.1 10.1 12.7 7.5C13.3 10.1 15.6 12 18.3 12H18.6C18.9 12.6 19.6 13 20.3 13C21.4 13 22.3 12.1 22.3 11C22.3 9.9 21.4 9 20.3 9C19.6 9 18.9 9.4 18.6 10H18.3C16.1 10 14.3 8.2 14.3 6V5.7C14.9 5.4 15.3 4.7 15.3 4C15.3 2.9 14.4 2 13.3 2H12ZM12 8C11.4 8 11 8.4 11 9V20C11 20.6 11.4 21 12 21C12.6 21 13 20.6 13 20V9C13 8.4 12.6 8 12 8Z"
                fill="currentColor"
              />
            </svg>
            <div className="absolute inset-0 animate-ping opacity-20">
              <svg
                className="w-20 h-20 lg:w-28 lg:h-28 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C10.9 2 10 2.9 10 4C10 4.7 10.4 5.4 11 5.7V6C11 8.2 9.2 10 7 10H6.7C6.4 9.4 5.7 9 5 9C3.9 9 3 9.9 3 11C3 12.1 3.9 13 5 13C5.7 13 6.4 12.6 6.7 12H7C9.8 12 12.1 10.1 12.7 7.5C13.3 10.1 15.6 12 18.3 12H18.6C18.9 12.6 19.6 13 20.3 13C21.4 13 22.3 12.1 22.3 11C22.3 9.9 21.4 9 20.3 9C19.6 9 18.9 9.4 18.6 10H18.3C16.1 10 14.3 8.2 14.3 6V5.7C14.9 5.4 15.3 4.7 15.3 4C15.3 2.9 14.4 2 13.3 2H12Z"
                  fill="currentColor"
                />
              </svg>
            </div>
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
            Our Latest Collection
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-[1.1] tracking-tight">
          2025 Catalog
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          Explore our comprehensive collection of premium Ceylon tea products. Browse through our latest offerings and discover the perfect tea for your needs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#catalog-viewer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            View Catalog
          </a>
          <a
            href="https://somerfieldtea.com/wp-content/uploads/2025/11/somerfield-tea-catalog-2025-03a.pdf"
            download="ceylon-tea-catalog-2025.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-light text-white mb-2">100+</div>
            <div className="text-sm lg:text-base text-white/70 font-light">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-light text-white mb-2">16</div>
            <div className="text-sm lg:text-base text-white/70 font-light">Pages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-light text-white mb-2">2025</div>
            <div className="text-sm lg:text-base text-white/70 font-light">Latest Edition</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
