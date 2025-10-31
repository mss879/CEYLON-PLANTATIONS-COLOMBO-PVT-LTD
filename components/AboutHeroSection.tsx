export default function AboutHeroSection() {
  return (
    <section className="inner-banner-section relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070"
          alt="Tea plantation"
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
            <div className="text-white/90 text-sm font-medium">About us</div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-[1.1] tracking-tight">
            Elevating global tea standards
          </h1>

          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl font-light">
            Other Tea is more than a company — we're a movement toward smarter, more sustainable tea cultivation and distribution.
          </p>

          {/* Labels */}
          <div className="flex flex-wrap gap-3">
            <div className="label flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <rect x="6" y="6" width="20" height="20" fill="white" transform="rotate(45 16 16)" style={{ transformOrigin: '16px 16px' }}/>
              </svg>
              <h6 className="text-white text-base font-normal m-0">Driven</h6>
            </div>
            <div className="label flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <rect x="6" y="6" width="20" height="20" fill="white" transform="rotate(45 16 16)" style={{ transformOrigin: '16px 16px' }}/>
              </svg>
              <h6 className="text-white text-base font-normal m-0">Rooted</h6>
            </div>
            <div className="label flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <rect x="6" y="6" width="20" height="20" fill="white" transform="rotate(45 16 16)" style={{ transformOrigin: '16px 16px' }}/>
              </svg>
              <h6 className="text-white text-base font-normal m-0">Impactful</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
