import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Global Presence - Ceylon Plantations Colombo',
  description:
    'Delivering Pure Ceylon Tea, Fruit Teas, Herbal Teas & Wellness Teas to the world. Discover Ceylon Plantations international distribution centers serving over 45 countries.',
  keywords: 'global tea exporter, international tea distribution, Ceylon tea worldwide, tea export countries, global presence',
  openGraph: {
    title: 'Global Presence - Ceylon Plantations Colombo Worldwide',
    description:
      'Serving diverse markets worldwide with premium Pure Ceylon Tea. International exports to over 45 countries across all continents.',
    images: ['/logo.png'],
  },
}

export default function GlobalPresencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gray-100 pt-32 pb-20 px-2">
          <div className="w-full max-w-[1200px] mx-auto text-center">
            <div className="section-label flex items-center justify-center gap-2 mb-6">
              <img
                src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                loading="lazy"
                alt=""
              />
              <div className="text-sm font-medium">Global Presence</div>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 mb-6">
              Global Presence
            </h1>
            <h2 className="text-xl lg:text-2xl font-light text-gray-700 max-w-3xl mx-auto">
              Delivering Pure Ceylon Tea, Fruit Teas, Herbal Teas & Wellness Teas, to the world.
            </h2>
          </div>
        </section>

        {/* Decades of Growth Section */}
        <section className="section py-20 lg:py-32 px-2 bg-white">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="section-label flex items-center gap-2 mb-6">
                  <img
                    src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                    loading="lazy"
                    alt=""
                  />
                  <div className="text-sm font-medium">Decades Of Growth</div>
                </div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 mb-6">
                  International exports.
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Today, Ceylon Plantations stands as a leading producer and exporter of bulk Pure 
                    Ceylon Tea, serving diverse markets worldwide. Our Tarlton brand has successfully 
                    expanded to meet the tastes of tea drinkers across various regions. In addition to 
                    exporting premium Pure Ceylon Black Tea, we provide comprehensive private label OEM 
                    services and co-packing solutions across multiple continents.
                  </p>
                  <p>
                    In addition to Premium tea, we also produce pure herbal teas, pure fruit teas and a 
                    wide assortment of wellness teas. Our portfolio allows us to customise blends and 
                    create special blends and flavours based on your requirements.
                  </p>
                  <p>
                    Recognized among the top exporters in Sri Lanka, Ceylon Plantations has consistently 
                    maintained high standards of quality and efficiency for over a decade. Our ability to 
                    blend tradition with innovation has helped us grow a global footprint, with our products 
                    featured in more than 45 countries.
                  </p>
                  <p>
                    These milestones highlight our dedication to excellence and reinforce our position as a 
                    trusted name in the international tea industry.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/tea_bags.jpg"
                  alt="Tarlton gift tea collection, pure ceylon tea"
                  className="rounded-2xl shadow-xl w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* International Distribution Centers Section */}
        <section className="section py-20 lg:py-32 px-2 bg-gray-100">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <div className="section-label flex items-center justify-center gap-2 mb-6">
                <img
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                  loading="lazy"
                  alt=""
                />
                <div className="text-sm font-medium">Where Can You Find Us?</div>
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900">
                International distribution centers.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Tarlton Tea */}
              <div className="bg-white p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex justify-center mb-4">
                  <img
                    src="/tea_bags.jpg"
                    alt="Tarlton Tea"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
                  Tarlton Tea
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Romania, Panama, China, Azerbaijan, Kyrgyzstan, Czech Republic, Slovakia, USA, 
                  Hong Kong, Gambia, Ghana, Guinea, Ivory Coast, Taiwan, Latvia, Lithuania, Poland, 
                  Estonia, Germany, Mongolia, New Zealand, Chile
                </p>
              </div>

              {/* Bulk Tea */}
              <div className="bg-white p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex justify-center mb-4">
                  <img
                    src="/bulk_tea.jpg"
                    alt="Bulk Tea"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
                  Bulk Tea
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vietnam, Azerbaijan, Albania, Kosovo, Taiwan, Germany, France, United Kingdom, 
                  Czech Republic, Kuwait, Macedonia, UAE, USA, Latvia, Jordan, China, Australia, 
                  Chile, Brazil, Oman, Qatar
                </p>
              </div>

              {/* Private Label */}
              <div className="bg-white p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex justify-center mb-4">
                  <img
                    src="/bulk_tea.jpg"
                    alt="Private Label"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
                  Private Label
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Brazil, Azerbaijan, Belgium, Kuwait, Kosovo, Macedonia, Saudi Arabia, China, 
                  Poland, United Kingdom, Gambia, UAE, USA, Canada, Bahrain, Senegal, Angola, 
                  Guinea, Ivory Coast, Chile, Brazil, Oman, Qatar
                </p>
              </div>

              {/* Co-Packing */}
              <div className="bg-white p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex justify-center mb-4">
                  <img
                    src="/bulk_tea.jpg"
                    alt="Co-Packing"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
                  Co-Packing
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Poland, United Kingdom, Gambia, UAE, Guinea, Ivory Coast, Brazil, Azerbaijan, 
                  Belgium, Kuwait, Kosovo, Macedonia, Saudi Arabia, China, USA, Canada, Bahrain, 
                  Senegal, Angola
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section py-16 lg:py-20 px-2 bg-black text-white">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl lg:text-6xl font-light mb-2">45+</div>
                <div className="text-xl font-light">Countries Served</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-light mb-2">10+</div>
                <div className="text-xl font-light">Years of Excellence</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-light mb-2">Top 10</div>
                <div className="text-xl font-light">Ceylon Tea Exporter</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gray-100 py-20 lg:py-32 px-2">
          <div className="w-full max-w-[1200px] mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 mb-6">
              Let us produce your brand of tea
            </h2>
            <p className="text-xl lg:text-2xl font-light text-gray-700 mb-8">
              For Manufacturers, Wholesalers, Distributors, Resellers and Retailers of pure teas, 
              fruit teas, herbal teas and wellness teas.
            </p>
            <h3 className="text-2xl font-light text-gray-700 mb-8">
              Contact us for custom quotes
            </h3>
            <a
              href="/contact-us"
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
