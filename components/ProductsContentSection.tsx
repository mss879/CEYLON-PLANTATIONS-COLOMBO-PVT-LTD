export default function ProductsContentSection() {
  const featuredProducts = [
    {
      image: 'https://images.unsplash.com/photo-1594631661960-680ce0540d8d?q=80&w=2070',
      title: 'Somerfield English Special',
      description: 'Somerfield English special made from exceptional whole leaf Ceylon tea that delights all the senses. It is a superb Ceylon tea with a rich, full bodied flavour and a striking appearance. The consumer could satisfy with its subtle and light aroma along with brightened freshness.'
    },
    {
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2070',
      title: 'Somerfield English Royal Tea',
      description: 'Somerfield English Royal tea is a form with a fresh, crisp taste which nothing remains to compares with it. The flavor and fragrance of the English Royal tea is delicate but definite and clearly natural.'
    },
    {
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070',
      title: 'Somerfield English Green Tea',
      description: 'Somerfield English green tea is an esteemed classic throughout the world due to its fragrant and delicate taste. Apart from that the English green tea is crafted to produce a refreshing and invigorating health drink that brings out the best in beneficial properties and makes it an ideal cup of tea for anytime of the day.'
    }
  ]

  const productCategories = [
    'Bulk Tea',
    'Tea Bags',
    'Green Tea',
    'Flavoured Tea',
    'Organic Tea',
    'Private Labeling',
    'Herbal Tea',
    'Packeted Tea',
    'Special Gift Packaged Tea',
    'Flower Petal Scented Tea'
  ]

  return (
    <section className="section py-20 lg:py-32 bg-gray-100">
      <div className="w-full max-w-[1200px] mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed font-light mb-6">
                We are actively engaged in exporting an extensive range of high quality tea products. These products are sourced from the most trusted materials which are in compliance with international quality norms and standards including ISO Std. 3720. Our products are readily accepted in the market for its purity, freshness and competitive prices.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-light mb-6">
                With the help of our reliable resources, we are providing excellent products to satisfy ever growing requirements of our customers.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-light mb-6">
                These products are offered in superior quality packaging material, so that, our products can retain their quality features for a long duration. Our ethical business strategies and transparent dealings enable us to built fruitful relations with our clients and we always try to provide customized products to fulfill the requirements of our clients.
              </p>
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-medium mb-4">Our Specialty</h3>
              <p className="text-gray-700 text-lg leading-relaxed font-light mb-4">
                We are one of the leading exporters of a wide range of tea brands. We are reputed for providing customized products according to the requirements of our customers: We provide customer label tea (both packed and in bulk) to our customers which enables them to market Ceylon teas using their own brand name.
              </p>
              <ul className="space-y-3 text-gray-700 text-lg leading-relaxed font-light">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>Traditional black and green tea in loose packs and tea-bags, together with flavoured teas and a variety of different packaging options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>Available in packets and tea bags and offers a range of brand variants including green, flavoured and organic teas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Product Categories Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {productCategories.map((category, index) => (
                <a
                  key={index}
                  href={`#product-${index + 1}`}
                  className="bg-white p-4 rounded-lg hover:bg-black hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 2C10 2 6 3 6 6C6 9 10 10 10 10C10 10 14 9 14 6C14 3 10 2 10 2Z" className="fill-black group-hover:fill-white" />
                      <path d="M10 10C10 10 8 11 8 13C8 15 10 18 10 18C10 18 12 15 12 13C12 11 10 10 10 10Z" className="fill-black group-hover:fill-white" />
                    </svg>
                    <span className="text-sm font-medium">{category}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Featured Products */}
            <div className="space-y-6 mt-12">
              {featuredProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-medium mb-3">{product.title}</h4>
                    <p className="text-gray-600 leading-relaxed font-light text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
