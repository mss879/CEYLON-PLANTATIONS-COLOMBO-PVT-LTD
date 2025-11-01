import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Why Choose Us - Ceylon Plantations Colombo',
  description:
    'Experience, reliability, and a commitment to quality. Discover what makes Ceylon Plantations Colombo unique - from premium quality tea to international standards and global trust.',
  keywords: 'why choose Ceylon Plantations, tea manufacturer benefits, quality tea supplier, international tea standards, trusted tea exporter',
  openGraph: {
    title: 'Why Choose Ceylon Plantations Colombo - Your Trusted Tea Partner',
    description:
      'Built on quality. Chosen for trust. Learn why global brands choose Ceylon Plantations Colombo for their tea needs.',
    images: ['/logo.png'],
  },
}

export default function WhyChooseUsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 to-green-100 pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Ceylon Plantations as Your Partner
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Experience, reliability, and a commitment to quality.
            </h2>
          </div>
        </section>

        {/* What Makes Us Unique Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h3 className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-2">
                What Makes Us Unique
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built on quality. Chosen for trust.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                At Ceylon Plantations, what sets us apart isn't just what we produce, it's how we think. 
                Our operations are built on a modular production model, allowing clients to scale rapidly 
                without changing suppliers. We offer granular-level customization, from blend development 
                to smart barcoding for traceability across logistics networks. Our in-house data tools 
                help analyze market trends so brands can adapt their products to suit changing consumer 
                preferences. It's not just about packing tea, it's about building resilient tea businesses 
                that can thrive in a dynamic global marketplace.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Providing Premium Quality Tea and Packaging
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We specialize in delivering premium Pure Ceylon Tea along with complete packaging 
                  solutions tailored to your brand. From tea selection to final presentation, every 
                  step is personally managed.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Among The Top 10 Private Label Tea Manufacturers
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With years of experience, we are recognized among the leading private label tea 
                  manufacturers. We help businesses build successful tea brands with flexible, 
                  end-to-end production services.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Conforming to International Food & Quality Standards
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our production process and factory premises follows strict international food safety 
                  and quality standards. Regular audits and certifications ensure we meet the requirements 
                  of global markets.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Trusted by a Global Client Base in over 45 Countries
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We proudly serve a diverse network of clients in over 45 countries. Our customisation, 
                  consistency, service, and product quality have helped us become a trusted name worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let us produce your brand of tea
            </h2>
            <p className="text-xl mb-8 opacity-90">
              For Manufacturers, Wholesalers, Distributors, Resellers and Retailers of pure teas, 
              fruit teas, herbal teas and wellness teas.
            </p>
            <h3 className="text-2xl font-semibold mb-8">
              Contact us for custom quotes
            </h3>
            <a
              href="/contact-us"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
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
