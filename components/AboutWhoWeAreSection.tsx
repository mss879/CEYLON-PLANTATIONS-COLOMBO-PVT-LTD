export default function AboutWhoWeAreSection() {
  const features = [
    {
      image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=2070',
      title: 'Effective Innovation',
      description: 'Technology with eco-conscious tea cultivation methods to drive growth while protecting natural resources for future generations.',
      type: 'light'
    },
    {
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=2065',
      title: 'Global Expertise',
      description: 'Years of international experience delivering exceptional tea solutions across diverse climates and regions.',
      type: 'light'
    },
    {
      image: 'https://images.unsplash.com/photo-1596097635990-19dbaeeb5435?q=80&w=2070',
      title: 'Sustainable Practices',
      description: 'From pesticide-free cultivation to smart water use, we\'re committed to methods that respect the planet and future generations.',
      type: 'dark'
    },
    {
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070',
      title: 'Trusted by Thousands',
      description: 'Tea enthusiasts, distributors, and partners worldwide rely on us for quality, reliability, and long-term success.',
      type: 'primary'
    }
  ]

  return (
    <section className="section py-20 lg:py-32 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Label */}
          <div>
            <div className="section-label flex items-center gap-2 mb-6">
              <img
                src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                loading="lazy"
                alt=""
              />
              <div className="text-sm font-medium">Why choose us</div>
            </div>
          </div>

          {/* Title and Description */}
          <div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light mb-6 leading-tight">
              We're more than just a tea company — we're your trusted partner in sustainable tea excellence.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              From using organic methods and precision irrigation to minimizing chemical inputs and reducing waste through composting, every decision we make is guided by long-term environmental responsibility.
            </p>
          </div>
        </div>

        {/* Feature Image */}
        <div className="mb-12 rounded-2xl overflow-hidden h-[300px] lg:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1597318130063-e8bb3fdc36b5?q=80&w=2070"
            alt="Tea plantation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden p-8 hover:scale-105 transition-transform ${
                feature.type === 'dark' ? 'bg-black text-white' : 
                feature.type === 'primary' ? 'bg-green-700 text-white' : 
                'bg-gray-100'
              }`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="card-image w-full h-48 object-cover rounded-xl mb-6"
              />
              <div>
                <h5 className={`text-2xl font-medium mb-4 ${
                  feature.type === 'dark' || feature.type === 'primary' ? 'text-white' : ''
                }`}>
                  {feature.title}
                </h5>
                <p className={`leading-relaxed ${
                  feature.type === 'dark' || feature.type === 'primary' ? 'text-white/90' : 'text-gray-700'
                }`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
