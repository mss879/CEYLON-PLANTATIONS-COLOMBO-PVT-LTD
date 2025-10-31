export default function ProductRangeSection() {
  const products = [
    {
      id: 1,
      title: 'Bulk Tea',
      description: 'We offer all of our loose teas in bulk options to give you premium tea at discount prices. These come generally in 50 kilo aluminum inner foil paper sacks. We have a wide range of grades from Pekoe, OPA, OP, OP1, FBOP, Fannings, BOPF, Dust etc.',
      image: 'https://images.unsplash.com/photo-1597318130063-e8bb3fdc36b5?q=80&w=2070'
    },
    {
      id: 2,
      title: 'Tea Bags',
      description: 'We provide a wide variety of tea bags. Single chamber string and tag tea bag refers to the convenient tea bag solution, which allows exposure to the hot waters from two sides.\n\nDouble chamber string and tag tea bags are quite similar to the Single chamber tea bags, although it offers far greater interaction with warm water. The finely powdered Pure Ceylon Tea essence is trapped in two sides which will be exposed to the warm water from four sides in the double chamber tea bags.\n\nPyramid Tea bags are the latest advancement of convenient tea making, which has revolutionised the way global community enjoys a cup of specialty tea. The bags are made from nylon strands which are woven into a tiny net-like mesh.\n\nWe also offer single chamber and double chamber envelope tea bags and tagless tea bags.',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070'
    },
    {
      id: 3,
      title: 'Green Tea',
      description: 'Ceylon green tea is produced by eleven manufacturers on a number of estates in the mid-grown and high-grown districts. Among the varieties produced on these estates are Young Hyson (including Chun Mee), Sou Mei or \'longevity tea\', rolled \'gunpowder\' tea, green tea fannings and Sencha fannings. As can be seen from this list, both Chinese and Japanese tea-making methods are employed in making green Ceylon Tea.',
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070'
    },
    {
      id: 4,
      title: 'Flavoured Tea',
      description: 'Our flavoured tea range has a wide range of flavoured teas ranging from cinnamon, mint, lemon, lime, ginger, apple, raspberry infusion and any other flavor that our customers wish to have.',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2070'
    },
    {
      id: 5,
      title: 'Organic Tea',
      description: 'Without a doubt, organic tea is a treat for your body and soul. Our robust selection of organics – green tea, loose leaf, black tea, matcha, mint tea, and more – allows you to indulge in the greatest flavors nature has to offer. These teas are planted, grown, processed and manufactured without using any chemicals and toxins and provides a healthy source of tea for the mind and body.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2070'
    },
    {
      id: 6,
      title: 'Flower Petal Scented Tea',
      description: 'A variety of flowers are used to flavour teas. Although flowers are used to scent teas directly, most flower-scented teas on the market use perfumes and aromas to augment or replace the use of flowers. The most popular of these teas include the flowers of the following jasmine, rose etc.',
      image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=2070'
    },
    {
      id: 7,
      title: 'Herbal Tea',
      description: 'Infuse herbal goodness to your daily cup of tea, by our very own herbal tea range. Let the purity of our Chamomile, Rosehip and Hibiscus and the indulging Peppermint please your taste palate; with its aromatic and alluring flavour that disguise numerous health benefits underneath the pleasures.',
      image: 'https://images.unsplash.com/photo-1540540315174-2d137e34c8f4?q=80&w=2070'
    },
    {
      id: 8,
      title: 'Packeted Tea',
      description: 'Own the freshness of Tea Trends, in various convenient packaging, to satiate your cravings at any time you want. You may purchase the best essence of loose Pure Ceylon Tea in 100g, 250g, 500g, 1kg, 5kg and in 10kg. These packages can range from the traditional loose tea concept to the modern tea bags.',
      image: 'https://images.unsplash.com/photo-1594631661960-680ce0540d8d?q=80&w=2070'
    },
    {
      id: 9,
      title: 'Special Gift Packaged Tea',
      description: 'If you are planning on gifting a tea addict, the trendiest tea in the town, why not make it special by gifting it in a special packaging customised totally for him/her. We provide packaging solutions without any restrictions. You may select package material in anything you want, in any size and a design that is only yours to own. Be it ceramic, PVC, metal, tin, wood, cloth sachets, glass and even in plastic, we are able to match your requirements with our extensive arsenal of skills, and present you your very own package design.',
      image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?q=80&w=2070'
    },
    {
      id: 10,
      title: 'Private Labeling (Your Own Brand)',
      description: 'It\'s your mark. Private Labeling is one of the many convenient solutions we provide you with, which allows you to stamp your brand in the industry. From the choice of branding, to the package design and the implementation, you have the complete control of how your brand which would look and impress your target market, without having your ideas being limited to a certain frame. At Ceylon Plantations Colombo (Pvt.) Ltd., we assist you in matching your labels or creating your new mark as per your desire. Our staff will assist clients from R & D stage to shipment stage.',
      image: 'https://images.unsplash.com/photo-1545311774-5eeaa16ee8b9?q=80&w=2070'
    }
  ]

  return (
    <section className="section py-20 lg:py-32 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-2">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light">Product Range</h2>
            <img
              src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee96d781f57edc797a59ed_Frame%20(46).svg"
              alt="arrow"
              className="w-6 h-6 lg:w-8 lg:h-8"
            />
          </div>
        </div>

        {/* Products List */}
        <div className="space-y-20">
          {products.map((product, index) => (
            <div 
              key={product.id}
              id={`product-${product.id}`}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl lg:text-5xl font-light text-gray-300">
                    {String(product.id).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-medium mb-4">{product.title}</h3>
                    <div className="text-gray-700 text-lg leading-relaxed font-light whitespace-pre-line">
                      {product.description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-2xl overflow-hidden h-[300px] lg:h-[400px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 lg:mt-32">
          <div className="bg-black rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 lg:p-16 text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-6 leading-tight">
                Ready to experience premium Ceylon tea?
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8 font-light max-w-2xl mx-auto">
                Contact us today to discuss your requirements and discover how we can serve your tea needs with excellence.
              </p>
              <a 
                href="/contact-us" 
                className="underlined-link inline-flex flex-col group"
              >
                <div className="underlined-link-text-wrap flex items-center gap-2 justify-center">
                  <div className="text-white text-base lg:text-lg">Get In Touch</div>
                  <img
                    src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee96d781f57edc797a59ed_Frame%20(46).svg"
                    alt="icon"
                    className="arrow-burron-icon w-5 h-5 transition-transform group-hover:translate-x-1"
                  />
                </div>
                <div className="link-line h-px bg-white w-full mt-1 mx-auto" style={{ width: '200px' }}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
