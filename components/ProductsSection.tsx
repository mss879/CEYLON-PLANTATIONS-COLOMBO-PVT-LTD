import Link from 'next/link';

export default function ProductsSection() {
  return (
    <section className="section without-space pb-20 lg:pb-32">
      <div className="w-full max-w-[1200px] mx-auto px-2">
        <div className="home-1-services">
          {/* Section Title */}
          <div className="home-1-service-section-title-wrapper grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
            <div>
              <div className="section-label flex items-center gap-2 mb-6">
                <img
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                  loading="lazy"
                  alt=""
                />
                <div className="text-sm font-medium">Our products</div>
              </div>
              <div className="home-1-services-text-wrapper">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-6">
                  Premium Ceylon tea varieties.
                </h2>
                <p className="text-lg text-gray-600">
                  We offer a wide range of Ceylon tea in packed and bulk forms, expertly blended for rich aroma and exceptional flavor.
                </p>
              </div>
            </div>
            <div className="tm40-button-wrapper flex items-end justify-start lg:justify-end">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                <img
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg"
                  loading="lazy"
                  alt=""
                  className="w-3 h-3"
                />
                Explore our products
              </Link>
            </div>
          </div>

          {/* Products Grid */}
          <div className="bg-rectangle">
            <div className="services-collection-list-wrapper">
              <div className="services-collection-list grid md:grid-cols-3 gap-6">
                {/* Product 1 - Bulk Tea */}
                <div className="services-collection-item relative rounded-2xl overflow-hidden min-h-[400px] group">
                  <img 
                    src="/bulk_tea.jpg" 
                    alt="Bulk Tea"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="plus-button-wrapper absolute top-6 right-6">
                    <Link
                      href="/products"
                      className="plus-button w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67eeb06619a02117609585db_Frame%20(48).svg"
                        loading="lazy"
                        alt="icon"
                        className="plus-icon w-6 h-6"
                      />
                    </Link>
                  </div>
                  <div className="service-card-text-wrap absolute bottom-6 left-6 right-6 text-white">
                    <Link href="/products" className="card-link-text text-2xl font-medium mb-2 block hover:underline">
                      Bulk Tea
                    </Link>
                    <p className="solution-card-paragraph text-white/90 text-sm">
                      Premium loose teas in 50 kilo aluminum inner foil paper sacks. Wide range of grades from Pekoe, OPA, OP, OP1, FBOP, Fannings, BOPF, Dust.
                    </p>
                  </div>
                </div>

                {/* Product 2 - Tea Bags */}
                <div className="services-collection-item relative rounded-2xl overflow-hidden min-h-[400px] group">
                  <img 
                    src="/tea_bags.jpg" 
                    alt="Tea Bags"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="plus-button-wrapper absolute top-6 right-6">
                    <Link
                      href="/products"
                      className="plus-button w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67eeb06619a02117609585db_Frame%20(48).svg"
                        loading="lazy"
                        alt="icon"
                        className="plus-icon w-6 h-6"
                      />
                    </Link>
                  </div>
                  <div className="service-card-text-wrap absolute bottom-6 left-6 right-6 text-white">
                    <Link href="/products" className="card-link-text text-2xl font-medium mb-2 block hover:underline">
                      Tea Bags
                    </Link>
                    <p className="solution-card-paragraph text-white/90 text-sm">
                      Single chamber, double chamber, pyramid, envelope and tagless tea bags. Premium quality for convenient tea making.
                    </p>
                  </div>
                </div>

                {/* Product 3 - Green Tea */}
                <div className="services-collection-item relative rounded-2xl overflow-hidden min-h-[400px] group">
                  <img 
                    src="/green.jpg" 
                    alt="Green Tea"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center 70%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="plus-button-wrapper absolute top-6 right-6">
                    <Link
                      href="/products"
                      className="plus-button w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67eeb06619a02117609585db_Frame%20(48).svg"
                        loading="lazy"
                        alt="icon"
                        className="plus-icon w-6 h-6"
                      />
                    </Link>
                  </div>
                  <div className="service-card-text-wrap absolute bottom-6 left-6 right-6 text-white">
                    <Link href="/products" className="card-link-text text-2xl font-medium mb-2 block hover:underline">
                      Green Tea
                    </Link>
                    <p className="solution-card-paragraph text-white/90 text-sm">
                      Ceylon green tea varieties including Young Hyson, Chun Mee, gunpowder tea, and Sencha fannings from mid and high-grown estates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
