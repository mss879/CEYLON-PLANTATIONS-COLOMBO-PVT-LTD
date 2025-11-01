import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function PrivateLabelPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Premium with overlay */}
      <section className="relative h-[70vh] lg:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-950"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="w-full max-w-[1200px] mx-auto px-2 h-full relative z-10">
          <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-white/60"></div>
              <span className="text-white/80 text-sm font-medium tracking-wider uppercase">B2B Services</span>
              <div className="h-px w-12 bg-white/60"></div>
            </div>
            
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight max-w-5xl">
              Private Label Tea (OEM) / White label tea
            </h1>
            
            <h2 className="text-white/90 text-xl lg:text-2xl xl:text-3xl font-light max-w-3xl leading-relaxed">
              Make your own brand of tea with our custom tea manufacturing services
            </h2>
            
            <div className="flex items-center gap-2 pt-6">
              <img 
                src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg" 
                alt="" 
                className="w-6 h-6"
              />
              <p className="text-white/80 text-lg font-light tracking-wide">Pure Ceylon Tea Manufacturer</p>
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

      {/* What We Can Do Section - Enhanced */}
      <section className="section bg-white py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src="https://venturetea.com/wp-content/uploads/2025/05/home-tea-boxes-2-e1746618705794-768x425.png.webp"
                  alt="Custom tea packaging"
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg" 
                    alt="" 
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">Our Services</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] tracking-tight">
                  What we can do for your tea business
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed italic border-l-4 border-emerald-500 pl-6 py-2">
                  "Create your own stunning range of teas and herbal drinks, full of flavor and aroma! Complete with branding and packaging to bring your vision to the shelf."
                </p>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Venture Tea supplies <strong className="text-gray-900">Private Label Tea</strong> sourcing and packaging services to all tea brands. Our reputation as one of the leading tea manufacturers in Asia gives us a competitive edge. As one of the largest 'Value Added Tea' exporters in Colombo, Sri Lanka, we are able to supply a large variety of general tea, herbal tea, fruit tea and wellness tea.
                </p>
                <p>
                  We are a Tea Manufacturer and Co-packer with an internationally certified packing plant. Our b2b private label / white label / OEM / value addition services currently manufactures tea products for numerous brands in over <strong className="text-gray-900">45 countries</strong>.
                </p>
                <p>
                  Our factory process has streamlined throughout the years with experience. Our team of in-house professionals will manage all aspects of design, blend and packaging of your private label tea, so you get the finished product customized to your own requirement.
                </p>
              </div>
              
              {/* Tea Types List */}
              <div className="pt-4">
                <div className="grid grid-cols-2 gap-4">
                  {['Black Tea & Green Tea', 'Flavoured Teas', 'Pure Fruit Teas', 'Pure Herbal Teas', 'Wellness Teas'].map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                        <Check className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Enhanced */}
      <section className="section bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="w-full max-w-[1400px] mx-auto px-2">
          <div className="text-center mb-12 space-y-4">
            <div className="flex items-center gap-2 justify-center">
              <img 
                src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg" 
                alt="" 
                className="w-4 h-4"
              />
              <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">See Our Process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light">Manufacturing Excellence</h2>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nl2zgI1JdqU"
                title="Tea production video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Pure Ceylon Tea Section */}
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
                <div className="text-sm font-medium">Private Label Tea</div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                Pure Ceylon Tea
              </h1>
              
              <p className="text-lg leading-relaxed text-gray-700">
                The most trusted trading partner for tea companies in over 45 countries. Located in Colombo, the space is built for efficiency, hygiene, and employee safety. The production lines meet international standards, supporting consistent output for global markets. The layout also supports clear workflows and provides essential facilities for staff, ensuring smooth day-to-day operations.
              </p>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/UJqgk9Y2vTo"
                title="Factory video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* We Build Tea Brands Section - Enhanced */}
      <section className="section relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="w-full max-w-[1200px] mx-auto px-2 relative z-10">
          <div className="space-y-16">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-block">
                <div className="flex items-center gap-2 mb-6">
                  <img 
                    src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg" 
                    alt="" 
                    className="w-4 h-4"
                  />
                  <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">Complete Solutions</span>
                </div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] tracking-tight">
                We Build Tea Brands
              </h2>
              
              <h3 className="text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed">
                Private labeling services we offer for tea brands around the world
              </h3>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Our total solutions package for the tea industry starts at brand inception and design and progresses all the way up to production and delivery of the final tea packages. Sourcing, lab testing, grading, tasting and blending are some of the services in terms of the tea we provide.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center space-y-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl lg:text-6xl font-light text-emerald-600">45+</div>
                <h4 className="text-xl font-medium">Countries Served</h4>
                <p className="text-gray-600">Exporting to tea brands worldwide</p>
              </div>
              
              <div className="text-center space-y-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl lg:text-6xl font-light text-emerald-600">250+</div>
                <h4 className="text-xl font-medium">Product Portfolio</h4>
                <p className="text-gray-600">Diverse range of tea products</p>
              </div>
              
              <div className="text-center space-y-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl lg:text-6xl font-light text-emerald-600">20+</div>
                <h4 className="text-xl font-medium">Years Experience</h4>
                <p className="text-gray-600">Trusted manufacturing partner</p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  'Sourcing premium quality tea',
                  'Rigorous testing',
                  'Custom blending',
                  'Adding flavors and infusions',
                  'Branding design',
                  'Packaging design',
                  'Product mock ups',
                  'Full production process',
                  'Warehousing and shipping',
                  'Biodegradable Packaging'
                ].map((service, idx) => (
                  <div key={service} className="flex items-start gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                      <svg className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-800 leading-tight">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/IqACsqGq8tg"
                  title="Ceylon tea sourcing"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tea Packaging Types Section - Enhanced */}
      <section className="section bg-white py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="space-y-16">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 justify-center">
                <img 
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg" 
                  alt="" 
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">Packaging Options</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] tracking-tight">
                Variety Of Options
              </h2>
              
              <h3 className="text-2xl lg:text-3xl font-light text-gray-700">
                Multiple types of tea packaging
              </h3>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  When it comes to the types of packaging available for your brand, the options are limited by creativity. However there are various types of packaging that are international standard and here are a few of them.
                </p>
                <p>
                  Our tea bags comes in various sizes and styles. We have many packaging options which include tins, paper canisters, boxes, glass jars and even specialized packaging in gift boxes and wooden chests of all shapes and sizes.
                </p>
              </div>
            </div>

            {/* Packaging Types Grid - Enhanced */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-2.jpg.webp',
                  title: 'Single chamber tagless tea bags',
                  desc: '1.5gr / 2gr - 25 & 100 Tea Bags, Tag less tea bags are primarily used for the "Pot-tea method" of drinking tea.'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-3.jpg',
                  title: 'Single chamber string and tag tea bags',
                  desc: '1.5gr / 2gr - 25 & 100 Tea Bags, Single chamber string and Tag tea bag refers to the convenient tea bag solution.'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-4.jpg.webp',
                  title: 'Double chamber string and tag tea bags',
                  desc: '(With Staple / Metal Free) 1.5gr / 2gr - 25 & 100 Tea Bags'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-5.jpg.webp',
                  title: 'Single chamber envelope tea bags',
                  desc: '1.5gr / 2gr - 25 & 100 Tea Bags, same as single chamber string and tag tea bags.'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-6.jpg.webp',
                  title: 'Double chamber envelope tea bags',
                  desc: 'Paper / Paper Foil / Aluminium Foil (Metal Free) 1.5gr / 2gr - 25 & 100 Tea Bags'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-7.jpg',
                  title: 'Nylon or biodegradable pyramid tea bags',
                  desc: '1.59 to 3g - 15 Tea Bags / 20 Tea Bags / 25 Tea Bags'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-1.jpg.webp',
                  title: 'Special packaging for loose leaf tea',
                  desc: 'Paper Boxes / Metal Tins / Alu Pouches / Glass Jars / Paper Canisters / Metal Canisters'
                }
              ].map((pkg, idx) => (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                    <img 
                      src={pkg.img} 
                      alt={pkg.title} 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-emerald-700 transition-colors">{pkg.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{pkg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - Enhanced */}
      <section className="section relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="w-full max-w-[1200px] mx-auto px-2 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg" 
                    alt="" 
                    className="w-6 h-6"
                  />
                  <span className="text-white/80 text-sm font-medium tracking-wider uppercase">Get Started</span>
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-light leading-tight">
                  Let us create your brand of tea!
                </h3>
                
                <p className="text-xl text-white/80 leading-relaxed">
                  Partner with Ceylon's premier tea manufacturer to bring your vision to life. From concept to shelf, we handle it all.
                </p>
              </div>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 384 512">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Visit Us</h4>
                    <p className="text-white/70 leading-relaxed">
                      Venture Tea (Pvt) Ltd.<br />
                      144, Veediya Bandara Mawatha,<br />
                      Mulleriyawa North,<br />
                      Sri Lanka.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a href="tel:+94112567350" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"/>
                      </svg>
                    </div>
                    <span className="text-lg group-hover:text-white transition-colors">+94-11-2567350</span>
                  </a>
                  
                  <a href="tel:+94112567305" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"/>
                      </svg>
                    </div>
                    <span className="text-lg group-hover:text-white transition-colors">+94-112-567305</span>
                  </a>
                </div>
              </div>
              
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-900 rounded-full hover:bg-gray-100 transition-all text-base font-medium shadow-lg hover:shadow-xl group"
              >
                <span>Get Started</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl backdrop-blur-sm"></div>
                <div className="relative p-8 space-y-6">
                  <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Premium Quality</h4>
                      <p className="text-white/70 text-sm">100% Pure Ceylon Tea</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Fast Turnaround</h4>
                      <p className="text-white/70 text-sm">Efficient production timelines</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Global Reach</h4>
                      <p className="text-white/70 text-sm">Shipping to 45+ countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
