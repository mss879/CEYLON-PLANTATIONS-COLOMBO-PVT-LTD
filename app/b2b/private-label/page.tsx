import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function PrivateLabelPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
              Private Label Tea (OEM) / White label tea.
            </h1>
            <h2 className="text-2xl lg:text-3xl font-normal text-gray-700">
              Make your own brand of tea with our custom tea manufacturing services.
            </h2>
            <p className="text-lg text-gray-600">Pure Ceylon Tea Manufacturer</p>
          </div>
        </div>
      </section>

      {/* What We Can Do Section */}
      <section className="section bg-white py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <img
                src="https://venturetea.com/wp-content/uploads/2025/05/home-tea-boxes-2-e1746618705794-768x425.png.webp"
                alt="Custom tea packaging"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-light leading-tight">
                What we can do for your tea business.
              </h2>
              <h3 className="text-xl lg:text-2xl text-gray-700 font-normal">
                "Create your own stunning range of teas and herbal drinks, full of flavor and aroma! Complete with branding and packaging to bring your vision to the shelf."
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Venture Tea supplies 'Private Label Tea' sourcing and packaging services to all tea brands. Our reputation as one of the leading tea manufacturers in Asia gives us a competitive edge. As one of the largest 'Value Added Tea' exporters in Colombo, Sri Lanka, we are able to supply a large variety of general tea, herbal tea, fruit tea and wellness tea. We are a Tea Manufacturer and Co-packer with an internationally certified packing plant. Our b2b private label / white label / OEM / value addition services currently manufactures tea products for numerous brands in over 45 countries.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Our factory process has streamlined throughout the years with experience. Our team of in-house professionals will manage all aspects of design, blend and packaging of your private label tea, so you get the finished product customized to your own requirement. This will give you the ability to focus on sales, distribution and building your brand.
              </p>
              
              {/* Tea Types List */}
              <div className="flex flex-wrap gap-4">
                {['Black Tea & Green Tea', 'Flavoured Teas', 'Pure Fruit Teas', 'Pure Herbal Teas', 'Wellness Teas'].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section bg-gray-50 py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nl2zgI1JdqU"
              title="Tea production video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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

      {/* We Build Tea Brands Section */}
      <section className="section bg-gray-50 py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-light">We Build Tea Brands</h2>
              <h1 className="text-4xl lg:text-5xl font-light leading-tight max-w-4xl mx-auto">
                Private labeling services we offer for tea brands around the world.
              </h1>
              <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
                Our total solutions package for the tea industry starts at brand inception and design and progresses all the way up to production and delivery of the final tea packages. Sourcing, lab testing, grading, tasting and blending are some of the services in terms of the tea we provide. While, our branding and packaging design department focuses on the building of country / language specific branding and production services.
              </p>
            </div>

            {/* Services List */}
            <div className="flex flex-wrap justify-center gap-4">
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
              ].map((service) => (
                <div key={service} className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-gray-200">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>

            <div className="aspect-video rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
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
      </section>

      {/* Tea Packaging Types Section */}
      <section className="section bg-white py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-light">Variety Of Options</h2>
              <h1 className="text-4xl lg:text-5xl font-light leading-tight">
                Multiple types of tea packaging.
              </h1>
              <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
                When it comes to the types of packaging available for your brand, the options are limited by creativity. However there are various types of packaging that are international standard and here are a few of them.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
                Our tea bags comes in various sizes and styles. We have many packaging options which include tins, paper canisters, boxes, glass jars and even specialized packaging in gift boxes and wooden chests of all shapes and sizes.
              </p>
            </div>

            {/* Packaging Types Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-2.jpg.webp',
                  title: 'Single chamber tagless tea bags.',
                  desc: '1.5gr / 2gr - 25 & 100 Tea Bags, Tag less tea bags are primarily used for the "Pot-tea method" of drinking tea.'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-3.jpg',
                  title: 'Single chamber string and tag tea bags.',
                  desc: '1.5gr / 2gr - 25 & 100 Tea Bags, Single chamber string and Tag tea bag refers to the convenient tea bag solution.'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-4.jpg.webp',
                  title: 'Double chamber string and tag tea bags.',
                  desc: '(With Staple / Metal Free) 1.5gr / 2gr - 25 & 100 Tea Bags'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-5.jpg.webp',
                  title: 'Single chamber envelope tea bags.',
                  desc: '1.5gr / 2gr - 25 & 100 Tea Bags, same as single chamber string and tag tea bags.'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-6.jpg.webp',
                  title: 'Double chamber envelope tea bags.',
                  desc: 'Paper / Paper Foil / Aluminium Foil (Metal Free) 1.5gr / 2gr - 25 & 100 Tea Bags'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-7.jpg',
                  title: 'Nylon or biodegradable pyramid tea bags.',
                  desc: '1.59 to 3g - 15 Tea Bags / 20 Tea Bags / 25 Tea Bags'
                },
                {
                  img: 'https://venturetea.com/wp-content/uploads/2024/06/custom-tea-bags-and-packaging-1.jpg.webp',
                  title: 'Special packaging for loose leaf tea.',
                  desc: 'Paper Boxes / Metal Tins / Alu Pouches / Glass Jars / Paper Canisters / Metal Canisters'
                }
              ].map((pkg, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img src={pkg.img} alt={pkg.title} className="w-full h-64 object-cover" />
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-medium">{pkg.title}</h3>
                    <p className="text-gray-600">{pkg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section bg-emerald-900 text-white py-20 lg:py-32">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-light">Let us create your brand of tea!</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 384 512">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                  </svg>
                  <div>
                    <p>Venture Tea (Pvt) Ltd.</p>
                    <p>144, Veediya Bandara Mawatha,</p>
                    <p>Mulleriyawa North,</p>
                    <p>Sri Lanka.</p>
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
              
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium mt-6"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
