import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BulkTeaExportPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
              Wholesale Ceylon Tea Exports
            </h1>
            <h2 className="text-2xl lg:text-3xl font-normal text-gray-700">
              Large scale export facility for wholesale tea.
            </h2>
          </div>
        </div>
      </section>

      {/* Bulk Tea Section */}
      <section className="section bg-white py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="section-label flex items-center gap-2">
                <img
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                  loading="lazy"
                  alt=""
                />
                <div className="text-sm font-medium">Bulk Tea</div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                Wholesale tea for bulk buyers.
              </h1>
              
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>We can export Wholesale supply of Tea</strong> in raw form, blended to your brands taste, or infused as per your requirement. Most tea companies who have their own packaging plants often opt to buy tea in bulk. However for your convenience we also to provide full product manufacturing solutions as well.
              </p>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/UGPPB1bdxQc"
                title="Tea warehouse video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* About Bulk Tea Exports */}
      <section className="section bg-gray-50 py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Bulk Tea Exports by Venture Tea</strong> is the nations premier source for bulk tea exports. We are a wholesale tea supplier from Sri Lanka. We export Pure Ceylon Tea to our clients using the nations largest bulk tea blending machines at our one stop packing factory and warehousing facility. Assisting clients to lower costs, increase efficiency and reduce tea production lead times.
              </p>
            </div>

            <div className="bg-emerald-900 text-white p-8 rounded-lg space-y-6">
              <div className="space-y-4">
                <a href="tel:+94112567350" className="flex items-center gap-3 hover:text-emerald-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"/>
                  </svg>
                  <span>+94-11-2567350</span>
                </a>
                
                <a href="tel:+94112567305" className="flex items-center gap-3 hover:text-emerald-200 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"/>
                  </svg>
                  <span>+94-112-567305</span>
                </a>
              </div>
              
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section bg-white py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/tX4QFKq7Syk"
              title="Tea production video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Largest Blending Facility Section */}
      <section className="section bg-gray-50 py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                Largest tea blending facility In Sri Lanka.
              </h1>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Housing the largest blending facility in Sri Lanka, we are able to fulfil large capacity orders in efficient timelines. Throughout the past two decades Venture Tea continues to be a premium tea buyer at the Colombo Tea Auctions and enjoys the privilege of entertaining over tens of thousands of varieties of tea produced in Sri Lankan tea estates.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                This allows us to create specific blends based on client requirements. Our tea tasters use their decades of experience to consistently provide the taste required by our clients worldwide.
              </p>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/UGPPB1bdxQc"
                title="Blending facility video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Gallery Section */}
      <section className="section bg-emerald-50 py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light mb-4">Our Warehousing Facilities</h2>
            <p className="text-lg text-gray-700">State-of-the-art storage and distribution center</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://venturetea.com/wp-content/uploads/2025/07/venture-tea-office-005-768x432.jpg.webp',
              'https://venturetea.com/wp-content/uploads/2025/05/stills-tea-warehouse-in-venture-tea-9-768x435.jpg.webp',
              'https://venturetea.com/wp-content/uploads/2025/05/stills-tea-warehouse-in-venture-tea-17-768x432.jpg.webp',
              'https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-43-768x432.jpg.webp',
              'https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-35-768x432.jpg.webp',
              'https://venturetea.com/wp-content/uploads/2025/05/stills-private-label-tea-factory-sri-lanka-34-768x432.jpg.webp'
            ].map((img, idx) => (
              <div key={idx} className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={img} 
                  alt={`Warehouse ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-emerald-900 text-white py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-light">Ready to partner with us?</h3>
              <p className="text-xl">Let's discuss your bulk tea requirements and create a customized solution for your business.</p>
            </div>
            
            <div className="flex justify-start lg:justify-end">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
