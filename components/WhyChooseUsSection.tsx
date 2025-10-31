export default function WhyChooseUsSection() {
  return (
    <section className="section without-top-spacing pb-20 lg:pb-32">
      <div className="w-full max-w-[1200px] mx-auto px-2">
        <div className="center-title-wrapper text-center mb-16">
          <div className="section-label flex items-center justify-center gap-2 mb-6">
            <img
              src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
              loading="lazy"
              alt=""
            />
            <div className="text-sm font-medium">Why choose us</div>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight max-w-4xl mx-auto">
            We&apos;re more than just a tea exporter — we&apos;re your trusted partner in premium Ceylon tea.
          </h2>
        </div>

        <div className="home-1-cards-wrapper grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 - Black Card */}
          <div className="black-card bg-black rounded-2xl overflow-hidden p-8 text-white hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1587049352846-4a222e784088?w=800&h=600&fit=crop"
              loading="lazy"
              alt="Heritage tea production"
              className="card-image w-full h-48 object-cover rounded-xl mb-6"
            />
            <div>
              <h5 className="text-white text-2xl font-medium mb-4">Heritage & Expertise</h5>
              <p className="text-white/90">
                Over 75 years of family-owned tea excellence, from estates to global exports across three generations.
              </p>
            </div>
          </div>

          {/* Card 2 - Light Gray Card */}
          <div className="light-gray-card bg-gray-100 rounded-2xl overflow-hidden p-8 hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&h=600&fit=crop"
              loading="lazy"
              alt="Quality assurance"
              className="card-image w-full h-48 object-cover rounded-xl mb-6"
            />
            <div>
              <h5 className="text-2xl font-medium mb-4">Consistent Quality</h5>
              <p className="text-gray-700">
                Maintaining the highest standards in tea blends with rich aroma and flavor that made us renowned worldwide.
              </p>
            </div>
          </div>

          {/* Card 3 - Primary Card */}
          <div className="primary-card bg-green-700 rounded-2xl overflow-hidden p-8 text-white hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1523920290228-4f321a939b4c?w=800&h=600&fit=crop"
              loading="lazy"
              alt="Global distribution"
              className="card-image w-full h-48 object-cover rounded-xl mb-6"
            />
            <div>
              <h5 className="text-white text-2xl font-medium mb-4">Trusted Globally</h5>
              <p className="text-white/90">
                Valued clients in Holland, Netherlands, Russia, Turkey, and throughout Europe and the Middle East rely on us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
