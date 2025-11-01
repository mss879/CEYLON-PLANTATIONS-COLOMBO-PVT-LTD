import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CoPackingTeaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Premium */}
      <section className="relative h-[70vh] lg:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-emerald-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="w-full max-w-[1200px] mx-auto px-2 h-full relative z-10">
          <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-white/60"></div>
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">Contract Packaging</span>
              <div className="h-px w-12 bg-white/60"></div>
            </div>
            
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight max-w-5xl">
              Co-Packing Tea
            </h1>
            
            <h2 className="text-white/90 text-xl lg:text-2xl xl:text-3xl font-light max-w-3xl leading-relaxed">
              What does co packed by Venture Tea mean?
            </h2>
            
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <img 
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg" 
                  alt="" 
                  className="w-6 h-6"
                />
                <span className="text-white/80 text-base font-light">Co-Labeling</span>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg" 
                  alt="" 
                  className="w-6 h-6"
                />
                <span className="text-white/80 text-base font-light">Co-Packing</span>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg" 
                  alt="" 
                  className="w-6 h-6"
                />
                <span className="text-white/80 text-base font-light">Co-Manufacturing</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/60">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Co-Packing Explanation Section */}
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
                <div className="text-sm font-medium">Co-Packing Services</div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                Co-Packing for Existing Brands of Tea
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-normal text-gray-700">
                Get your tea or herbal and wellness beverages packed.
              </h2>
              
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Contract Tea Packaging</strong> or Co-Packing Tea, is a process where we put together your products at various stages into it's finished packaging and ship them ready for your distribution or shelves. There are several types of Co-Packing systems available with us based on the requirement you have. Venture Tea is a premier CoPacker / CoPacking partner service for Tea in Colombo, Sri Lanka.
              </p>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-lu1kVc3HCo"
                title="Co-packing video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* When Would You Need Section */}
      <section className="section bg-gray-50 py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-light">A Certified Business Partner</h2>
                <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                  When would you need Co Packing services?
                </h1>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  Venture Tea is one of the top ten exporters of Ceylon Tea in Sri Lanka. Our decades of experience has allowed us to help many tea, herbal and wellness brands start up and grow throughout the decades. In addition to private labeling or white labeling our portfolio of over 250 products, we also have a full scale factory open to contract packaging or contract manufacturing.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  Since being established as a supplier of wholesale tea from Sri Lanka for nearly 20 years, many companies ranging from medium to large multinational, currently utilize our services to fulfill their packaging and export requirements. Several combinations of services are available based on the MOQ requirements of the order.
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Quality Certifications',
                  desc: 'All products sourced by Venture Tea are certified for Export quality and food safety standards.'
                },
                {
                  title: 'Production Certifications',
                  desc: 'Certified production facilities, as well as certified food safety management systems.'
                },
                {
                  title: 'Health & Safety Certified',
                  desc: 'Health checks, sanitization points, clean rooms and other guidelines placed for safety.'
                },
                {
                  title: 'Time Management',
                  desc: 'Have your orders fulfilled in time for restocking and with no production delays.'
                },
                {
                  title: 'Cost Efficiency',
                  desc: 'The benefits we receive from bulk supplies of tea are passed down to our clients orders.'
                },
                {
                  title: 'Proper Employee Care',
                  desc: 'Providing a healthy and safe workplace for all our staff members.'
                }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                  <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tea Packing Factory Section */}
      <section className="section bg-white py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                Our Tea Packing Factory
              </h1>
              <h2 className="text-2xl lg:text-3xl font-normal text-gray-700">
                Ceylon Tea Co-Packing centre in Colombo.
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  img: 'https://venturetea.com/wp-content/uploads/2025/05/stills-tea-production-and-packaging-in-venture-tea-1-768x433.jpg.webp',
                  title: 'Co-Labeling',
                  desc: 'All products sourced by Venture Tea are certified for Export quality and food safety standards.'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2025/05/stills-tea-production-and-packaging-in-venture-tea-2-768x433.jpg.webp',
                  title: 'Co-Packing',
                  desc: 'This is where we will use your products and to fill packaging designed for your brand and business. You can have our factory produce your goods for collection or direct export.'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2025/05/stills-tea-production-and-packaging-in-venture-tea-30-768x432.jpg.webp',
                  title: 'Co-Manufacturing',
                  desc: 'This is where we will take over the complete manufacturing process to deliver your blend of tea. This process is similar to the Private Label / White Label services we provide.'
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img src={service.img} alt={service.title} className="w-full h-64 object-cover" />
                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-medium">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="section bg-gray-50 py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light mb-4">Our Production Capabilities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From small batches to large-scale production runs, we have the expertise and equipment to handle your co-packing needs with precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {[
                  'Custom packaging solutions',
                  'Quality control at every stage',
                  'Flexible production schedules',
                  'International shipping coordination',
                  'Regulatory compliance assistance',
                  'Design and branding support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-900 text-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                {[
                  '20+ years of experience',
                  'State-of-the-art facilities',
                  'Internationally certified',
                  'Trusted by global brands',
                  'Competitive pricing',
                  'On-time delivery guarantee'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="section bg-white py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light mb-4">See Our Facility in Action</h2>
          </div>
          
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-lu1kVc3HCo"
              title="Factory tour video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="section bg-emerald-50 py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light mb-4">How It Works</h2>
            <p className="text-lg text-gray-700">Our streamlined co-packing process</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                desc: 'Discuss your requirements and specifications'
              },
              {
                step: '02',
                title: 'Planning',
                desc: 'Create a customized production plan'
              },
              {
                step: '03',
                title: 'Production',
                desc: 'Manufacture and package your products'
              },
              {
                step: '04',
                title: 'Delivery',
                desc: 'Ship directly to your location or customers'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="text-6xl font-light text-emerald-600">{item.step}</div>
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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
              <h3 className="text-3xl lg:text-4xl font-light">Ready to start co-packing with us?</h3>
              <p className="text-xl">Let's discuss how we can help bring your tea products to market with our professional co-packing services.</p>
              
              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 384 512">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                  </svg>
                  <div>
                    <p>Venture Tea (Pvt) Ltd.</p>
                    <p>144, Veediya Bandara Mawatha,</p>
                    <p>Mulleriyawa North, Sri Lanka.</p>
                  </div>
                </div>
                
                <div className="space-y-2">
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
              </div>
            </div>
            
            <div className="flex justify-start lg:justify-end">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
