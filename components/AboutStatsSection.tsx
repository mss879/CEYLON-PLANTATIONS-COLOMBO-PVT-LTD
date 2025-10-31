export default function AboutStatsSection() {
  const stats = [
    {
      number: '98%',
      title: 'On-time delivery rate',
      description: 'Efficient distribution across regions, supporting supply chains with reliability and precision.'
    },
    {
      number: '15',
      title: 'Countries reached',
      description: 'Our tea solutions are trusted by partners and tea enthusiasts in more than 15 countries worldwide.'
    },
    {
      number: '500k+',
      title: 'Acres cultivated sustainably',
      description: 'We promote responsible land use with eco-friendly practices across half a million acres of tea gardens.'
    }
  ]

  return (
    <section className="section py-20 lg:py-32 bg-gray-100">
      <div className="w-full max-w-[1200px] mx-auto px-2">
        <div className="home-1-numbers-wrapper grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="number-cell text-center space-y-4">
              <img
                src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67eea468f77f829117f6dbb5_Group%202%20(4).svg"
                loading="lazy"
                alt=""
                className="mx-auto"
              />
              <div className="large-text numbers text-6xl lg:text-7xl font-light">{stat.number}</div>
              <h5 className="text-xl lg:text-2xl font-medium">{stat.title}</h5>
              <div className="number-text-wrapper">
                <p className="text-gray-600">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Who We Are Photo Section */}
        <div className="relative bg-black rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Text Content */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="section-label flex items-center gap-2 mb-6">
                <img
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                  loading="lazy"
                  alt=""
                />
                <div className="text-white/90 text-sm font-medium">Who We Are</div>
              </div>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-6 leading-tight">
                We are a team of tea experts, sustainability advocates, and innovators
              </h2>

              <p className="text-white/90 text-lg leading-relaxed mb-8 font-light">
                We partner with tea growers and communities in over 15 countries to enhance quality, protect the planet, and empower those behind each perfect cup of tea.
              </p>

              <div>
                <a 
                  href="/contact-us" 
                  className="underlined-link inline-flex flex-col group"
                >
                  <div className="underlined-link-text-wrap flex items-center gap-2">
                    <div className="text-white text-base lg:text-lg">Let's work together</div>
                    <img
                      src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee96d781f57edc797a59ed_Frame%20(46).svg"
                      alt="icon"
                      className="arrow-burron-icon w-5 h-5 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                  <div className="link-line h-px bg-white w-full mt-1"></div>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1545311424-dde489042a14?q=80&w=2070"
                alt="Tea experts at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
