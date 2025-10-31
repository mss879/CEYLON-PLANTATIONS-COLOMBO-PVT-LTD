export default function NewsHeroSection() {
  return (
    <section className="inner-banner-section relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2070"
          alt="Tea news and trends"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-2 py-20">
        <div className="max-w-3xl">
          <div className="section-label flex items-center gap-2 mb-6">
            <img
              src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
              loading="lazy"
              alt=""
            />
            <div className="text-white/90 text-sm font-medium">News & Insights</div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-[1.1] tracking-tight">
            Tea News & Trends
          </h1>

          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl font-light">
            Stay updated with the latest news, trends, and educational insights from the world of Ceylon tea.
          </p>
        </div>
      </div>
    </section>
  )
}
