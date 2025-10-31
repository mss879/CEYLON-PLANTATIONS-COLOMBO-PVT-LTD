'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface NewsArticle {
  id: number
  title: string
  category: string
  excerpt: string
  image: string
  date: string
  fullContent: string
}

export default function NewsGridSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: 'The Rise of Specialty Tea: Premium Ceylon Tea Market Trends 2025',
      category: 'Market Trends',
      excerpt: 'Discover how premium Ceylon tea is gaining global recognition with increasing demand for specialty blends and single-origin teas.',
      image: 'https://images.unsplash.com/photo-1597318130063-e8bb3fdc36b5?q=80&w=2070',
      date: 'October 28, 2025',
      fullContent: `The global specialty tea market is experiencing unprecedented growth, with Ceylon tea leading the premium segment. Recent market analysis shows that consumers are increasingly seeking authentic, single-origin teas with traceable provenance.

**Key Market Insights:**

Premium Ceylon tea exports have increased by 23% in the past year, driven by growing consumer awareness of quality and sustainability. The specialty tea segment, particularly high-grown Ceylon varieties, commands premium prices in international markets.

**Consumer Preferences:**

Modern tea enthusiasts are moving beyond traditional tea bags, exploring loose-leaf varieties, artisanal blends, and specialty brewing methods. This shift has created opportunities for Ceylon tea producers to showcase their finest grades and unique terroir characteristics.

**Sustainability Focus:**

Eco-conscious consumers are driving demand for organically grown and ethically sourced tea. Ceylon tea estates are responding by implementing sustainable farming practices and obtaining international certifications.

**Future Outlook:**

Industry experts predict continued growth in the premium tea segment, with Ceylon tea well-positioned to capture market share through its reputation for quality, heritage, and distinctive flavor profiles.`
    },
    {
      id: 2,
      title: 'Health Benefits of Ceylon Green Tea: What Science Says',
      category: 'Educational',
      excerpt: 'Explore the scientifically-proven health benefits of Ceylon green tea and why it\'s becoming a staple in wellness routines worldwide.',
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070',
      date: 'October 25, 2025',
      fullContent: `Recent scientific studies have confirmed what tea enthusiasts have known for centuries: Ceylon green tea offers remarkable health benefits supported by rigorous research.

**Antioxidant Powerhouse:**

Ceylon green tea contains high levels of catechins, particularly EGCG (epigallocatechin gallate), which have been shown to have powerful antioxidant properties. These compounds help protect cells from oxidative stress and may reduce the risk of chronic diseases.

**Metabolic Benefits:**

Research published in leading nutrition journals demonstrates that regular consumption of green tea can support healthy metabolism. Studies show potential benefits for weight management when combined with a balanced diet and exercise.

**Cognitive Function:**

The unique combination of L-theanine and caffeine in Ceylon green tea promotes alertness while maintaining calm focus. This synergistic effect has been shown to improve cognitive performance and mental clarity.

**Heart Health:**

Multiple studies indicate that green tea consumption may support cardiovascular health by helping to maintain healthy cholesterol levels and supporting normal blood pressure.

**How to Maximize Benefits:**

For optimal health benefits, brew Ceylon green tea at 160-180°F (70-80°C) for 2-3 minutes. Consuming 2-3 cups daily as part of a healthy lifestyle may provide the most significant benefits.`
    },
    {
      id: 3,
      title: 'Sustainable Tea Farming: Ceylon\'s Leading Role in Eco-Friendly Production',
      category: 'Sustainability',
      excerpt: 'Learn how Ceylon tea estates are pioneering sustainable farming practices that protect the environment while producing exceptional tea.',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070',
      date: 'October 22, 2025',
      fullContent: `Ceylon tea estates are at the forefront of sustainable agriculture, implementing innovative practices that ensure environmental protection while maintaining the highest quality standards.

**Organic Certification Growth:**

Over 40% of Ceylon tea estates have now achieved international organic certifications, including EU Organic, USDA Organic, and JAS standards. This represents a significant commitment to chemical-free cultivation.

**Water Conservation:**

Advanced irrigation systems and rainwater harvesting techniques have reduced water consumption by up to 30% across major tea-growing regions. Drip irrigation and soil moisture monitoring ensure optimal water use.

**Biodiversity Protection:**

Tea estates are creating wildlife corridors and preserving native forest areas within plantations. This approach supports local ecosystems while maintaining productive tea gardens.

**Carbon Neutral Initiatives:**

Several leading estates have committed to carbon-neutral production by 2030, implementing renewable energy sources, composting programs, and reforestation projects.

**Fair Trade Practices:**

Sustainable farming extends to social responsibility, with fair wages, healthcare, and education programs for tea workers and their families.

**Consumer Impact:**

By choosing sustainably produced Ceylon tea, consumers directly support environmental conservation and ethical labor practices, making each cup a positive choice for the planet.`
    },
    {
      id: 4,
      title: 'The Art of Tea Tasting: A Beginner\'s Guide to Appreciating Ceylon Tea',
      category: 'Educational',
      excerpt: 'Master the fundamentals of tea tasting and learn to identify the unique characteristics that make Ceylon tea exceptional.',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2070',
      date: 'October 20, 2025',
      fullContent: `Developing your palate for tea appreciation is a rewarding journey that enhances your enjoyment and understanding of Ceylon tea's complexity.

**The Five S's of Tea Tasting:**

1. **See:** Examine the dry leaves - their size, color, and uniformity indicate quality and processing methods.

2. **Smell:** Inhale the dry leaf aroma, then the brewed tea's fragrance. Ceylon tea offers notes ranging from floral to malty.

3. **Sip:** Take a small sip and let it coat your entire palate. Notice the initial taste, mid-palate development, and finish.

4. **Savor:** Pay attention to the tea's body (light, medium, or full), astringency, and sweetness.

5. **Swallow:** Notice the aftertaste and how long the flavors linger.

**Ceylon Tea Flavor Profiles:**

- **High-Grown:** Delicate, floral, bright with citrus notes
- **Mid-Grown:** Balanced, well-rounded with caramel sweetness  
- **Low-Grown:** Bold, full-bodied with malty characteristics

**Brewing for Tasting:**

Use 2.5 grams of tea per 150ml water at 200°F (93°C) for black tea, 175°F (80°C) for green tea. Steep for 3-5 minutes depending on variety.

**Professional Cupping:**

Professional tea tasters use standardized brewing (2g tea, 100ml water, 3 minutes) to evaluate quality consistently. This method reveals both strengths and flaws.

**Practice Makes Perfect:**

Compare different Ceylon tea grades side-by-side to train your palate. Keep tasting notes to track your developing preferences and observations.`
    },
    {
      id: 5,
      title: 'Tea and Technology: How AI is Revolutionizing Ceylon Tea Quality Control',
      category: 'Innovation',
      excerpt: 'Discover how cutting-edge technology is being integrated into traditional tea production to ensure consistent quality.',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784720?q=80&w=2070',
      date: 'October 18, 2025',
      fullContent: `The Ceylon tea industry is embracing technology while honoring centuries of tradition, using AI and advanced systems to enhance quality and efficiency.

**AI-Powered Quality Assessment:**

Machine learning algorithms now analyze tea leaves for color, size, and consistency with 99% accuracy. These systems can identify defects invisible to the human eye, ensuring only the finest leaves reach consumers.

**Smart Agriculture:**

IoT sensors monitor soil conditions, weather patterns, and plant health in real-time. This data enables precision agriculture, optimizing irrigation, fertilization, and harvest timing for peak quality.

**Blockchain Traceability:**

Several estates have implemented blockchain technology to provide complete transparency from garden to cup. Consumers can scan QR codes to view their tea's journey, including harvest date, processing methods, and sustainability certifications.

**Automated Sorting:**

Advanced optical sorting machines separate tea grades with unprecedented precision, improving consistency and reducing waste. These systems work alongside skilled tea makers who provide final quality approval.

**Predictive Analytics:**

Weather forecasting and climate modeling help estates anticipate optimal harvest periods and potential challenges, allowing proactive management decisions.

**Preserving Tradition:**

Despite technological advances, master tea makers remain essential. Technology augments their expertise rather than replacing it, combining traditional knowledge with modern precision.

**Consumer Benefits:**

These innovations result in more consistent quality, better traceability, and sustainable practices - all while maintaining the authentic character of Ceylon tea.`
    },
    {
      id: 6,
      title: 'Perfect Tea Pairings: Matching Ceylon Tea with Food',
      category: 'Educational',
      excerpt: 'Learn the art of pairing different Ceylon tea varieties with food to enhance both the tea and dining experience.',
      image: 'https://images.unsplash.com/photo-1594631661960-680ce0540d8d?q=80&w=2070',
      date: 'October 15, 2025',
      fullContent: `Pairing tea with food is an art that can elevate both the beverage and the meal, creating harmonious flavor experiences.

**Basic Pairing Principles:**

Like wine pairing, tea pairing considers complementary and contrasting flavors, body, and intensity. The goal is balance - neither the tea nor food should overpower the other.

**Ceylon Black Tea Pairings:**

**Breakfast Blends:** Rich, malty Ceylon black tea pairs beautifully with:
- Traditional English breakfast (eggs, bacon, toast)
- Buttery pastries and croissants
- Dark chocolate desserts
- Strong cheeses like aged cheddar

**High-Grown Ceylon:** Light, floral varieties complement:
- Fresh fruit and berries
- Light salads with citrus dressings
- White fish and seafood
- Lemon-based desserts

**Ceylon Green Tea Pairings:**

The delicate, slightly vegetal notes of Ceylon green tea pair well with:
- Sushi and sashimi
- Steamed vegetables
- Light chicken or tofu dishes
- Fresh fruit sorbets

**Ceylon Oolong Pairings:**

Semi-oxidized oolong varieties match:
- Roasted duck or chicken
- Mild curries
- Nut-based desserts
- Cheese boards with mild varieties

**Professional Tips:**

1. Match intensity - delicate teas with light foods, robust teas with hearty dishes
2. Consider complementary flavors - citrus notes in tea with lemon-dressed foods
3. Use tea to cleanse the palate between rich courses
4. Experiment with regional pairings - Ceylon tea with Sri Lankan cuisine

**Tea as an Ingredient:**

Don't limit tea to beverages - use Ceylon tea in cooking:
- Tea-smoked salmon
- Tea-infused ice cream
- Tea-marinated meats
- Tea-flavored baked goods

**Creating Your Own Pairings:**

Start with small tastings, note what works, and trust your palate. The best pairing is one you enjoy!`
    }
  ]

  return (
    <>
      <section className="section pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gray-100">
        <div className="w-full max-w-[1200px] mx-auto px-2">
          {/* Section Header */}
          <div className="center-title-wrapper text-center mb-16">
            <div className="section-label flex items-center justify-center gap-2 mb-6">
              <img
                src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                loading="lazy"
                alt=""
              />
              <div className="text-sm font-medium">Latest Updates</div>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light leading-tight max-w-4xl mx-auto">
              Stay Informed About the World of Tea
            </h2>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">{article.date}</div>
                  <h3 className="text-xl font-medium mb-3 group-hover:underline leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-black font-medium">
                    <span>Read More</span>
                    <img
                      src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee96d781f57edc797a59ed_Frame%20(46).svg"
                      alt="arrow"
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      <Dialog open={selectedArticle !== null} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <div className="mb-4">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-medium">
                    {selectedArticle.category}
                  </span>
                </div>
                <DialogTitle className="text-3xl lg:text-4xl font-light leading-tight mb-4">
                  {selectedArticle.title}
                </DialogTitle>
                <div className="text-sm text-gray-500 mb-4">{selectedArticle.date}</div>
              </DialogHeader>
              
              <div className="mt-6">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-[400px] object-cover rounded-xl mb-6"
                />
                
                <div className="prose prose-lg max-w-none">
                  {selectedArticle.fullContent.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                      return (
                        <h3 key={index} className="text-2xl font-medium mt-6 mb-4">
                          {paragraph.replace(/\*\*/g, '').replace(':', '')}
                        </h3>
                      )
                    } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h4 key={index} className="text-xl font-medium mt-4 mb-3">
                          {paragraph.replace(/\*\*/g, '')}
                        </h4>
                      )
                    } else {
                      return (
                        <p key={index} className="text-gray-700 leading-relaxed mb-4 font-light">
                          {paragraph}
                        </p>
                      )
                    }
                  })}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
