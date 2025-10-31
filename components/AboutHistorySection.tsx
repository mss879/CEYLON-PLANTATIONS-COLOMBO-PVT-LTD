'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AboutHistorySection() {
  const historyData = [
    {
      year: '2010',
      title: 'Other Tea is founded with a mission to support sustainable tea cultivation.',
      description: 'Other Tea was founded with a clear purpose: to make tea cultivation more sustainable, efficient, and accessible. What began as a local initiative focused on organic farming and ethical sourcing quickly gained traction among forward-thinking tea growers.',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784720?q=80&w=2070'
    },
    {
      year: '2014',
      title: 'First large-scale organic certification program launched using smart tech.',
      description: 'We launched our first smart cultivation program, combining traditional tea-making know-how with sensor-based technology. These early trials proved that sustainable practices and quality could go hand in hand — and marked our first step into agri-tech.',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070'
    },
    {
      year: '2018',
      title: 'Rolled out AI-driven quality control tools to improve tea grading accuracy.',
      description: 'With growing success at home, we expanded internationally, entering five new markets. This milestone opened doors for collaboration with global tea communities and agricultural organizations, adapting our solutions to diverse climates and challenges.',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2070'
    },
    {
      year: '2023',
      title: 'Expanded into 15+ countries and launched our global sustainability platform.',
      description: 'Our commitment to the planet took center stage. We launched carbon-neutral tea initiatives, scaled regenerative agriculture programs, and supported tea gardens in reducing their environmental footprint — one plantation at a time.',
      image: 'https://images.unsplash.com/photo-1597318130063-e8bb3fdc36b5?q=80&w=2070'
    }
  ]

  return (
    <section className="section py-20 lg:py-32 bg-gray-100">
      <div className="w-full max-w-[1200px] mx-auto px-2">
        {/* Section Header */}
        <div className="center-title-wrapper text-center mb-16">
          <div className="section-label flex items-center justify-center gap-2 mb-6">
            <img
              src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
              loading="lazy"
              alt=""
            />
            <div className="text-sm font-medium">Our history</div>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light leading-tight max-w-4xl mx-auto">
            From humble roots to a global vision
          </h2>
        </div>

        {/* History Tabs */}
        <Tabs defaultValue="2010" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-auto p-1 bg-white rounded-lg">
            {historyData.map((item) => (
              <TabsTrigger 
                key={item.year} 
                value={item.year}
                className="text-lg font-medium py-3 data-[state=active]:bg-black data-[state=active]:text-white rounded-md"
              >
                {item.year}
              </TabsTrigger>
            ))}
          </TabsList>

          {historyData.map((item) => (
            <TabsContent key={item.year} value={item.year} className="mt-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Text Content */}
                  <div className="p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                    <div className="flex items-start gap-4 mb-6">
                      <img
                        src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67eea468f77f829117f6dbb5_Group%202%20(4).svg"
                        loading="lazy"
                        alt=""
                        className="w-12 h-12"
                      />
                      <h3 className="text-2xl lg:text-3xl font-medium leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="relative h-[400px] lg:h-auto order-1 lg:order-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text */}
                <div>
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-4 leading-tight">
                    Grow something great together.
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed mb-8 font-light">
                    Whether you're a tea grower, distributor, or partner, we're here to support your goals with sustainable solutions and global expertise.
                  </p>
                  <a 
                    href="/contact-us" 
                    className="underlined-link inline-flex flex-col group"
                  >
                    <div className="underlined-link-text-wrap flex items-center gap-2">
                      <div className="text-white text-base lg:text-lg">Let's work together</div>
                      <img
                        src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee96d781f57edc797a59ed_Frame%20(46).svg"
                        alt="icon"
                        className="arrow-burron-icon w-5 h-5 transition-transform group-hover:translate-x-1"
                      />
                    </div>
                    <div className="link-line h-px bg-white w-full mt-1"></div>
                  </a>
                </div>

                {/* Labels */}
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <div className="label flex items-center gap-2">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                      <rect x="6" y="6" width="20" height="20" fill="white" transform="rotate(45 16 16)" style={{ transformOrigin: '16px 16px' }}/>
                    </svg>
                    <h6 className="text-white text-base font-normal m-0">Driven</h6>
                  </div>
                  <div className="label flex items-center gap-2">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                      <rect x="6" y="6" width="20" height="20" fill="white" transform="rotate(45 16 16)" style={{ transformOrigin: '16px 16px' }}/>
                    </svg>
                    <h6 className="text-white text-base font-normal m-0">Rooted</h6>
                  </div>
                  <div className="label flex items-center gap-2">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                      <rect x="6" y="6" width="20" height="20" fill="white" transform="rotate(45 16 16)" style={{ transformOrigin: '16px 16px' }}/>
                    </svg>
                    <h6 className="text-white text-base font-normal m-0">Impactful</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
