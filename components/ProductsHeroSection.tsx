export default function ProductsHeroSection() {
  return (
    <section className="inner-banner-section relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587049352846-4a222e784720?q=80&w=2070"
          alt="Tea products"
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
            <div className="text-white/90 text-sm font-medium">Our Products</div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-[1.1] tracking-tight">
            PRODUCTS
          </h1>

          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl font-light">
            Discover our extensive range of premium Ceylon tea products, crafted with excellence and trusted worldwide.
          </p>
        </div>
      </div>
    </section>
  )
}
