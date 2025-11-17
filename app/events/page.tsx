import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const events = [
  {
    id: 1,
    title: "Brewing Kindness: Somerfield Tea hosts charity event at Crescat Boulevard",
    date: "May 14, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/05/events-charity-event-01-4.jpg.webp",
    excerpt: "Thank you for joining us on our journey. In a beautiful celebration of compassion and community, Somerfield Tea proudly hosted an exclusive charity",
    slug: "brewing-kindness-somerfield-tea-hosts-charity-event-at-crescat-boulevard",
  },
  {
    id: 2,
    title: "Special introductory sale at Crescat Boulevard",
    date: "May 1, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/04/smft-vid-2-screens-6.jpg.webp",
    excerpt: "Join us for our special introductory sale event at Crescat Boulevard.",
    slug: "special-introductory-sale-at-crescat-boulevard",
  },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-green-700 py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-light text-white/90 mb-2">Archives</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-white">News &amp; Events</h1>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Featured Event Slider */}
      {events.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative bg-gradient-to-br from-green-50 to-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img 
                  src={events[0].image} 
                  alt={events[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <span className="block text-sm font-semibold text-green-700">05/14</span>
                  <span className="block text-xs text-gray-600">2025</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {events[0].title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {events[0].excerpt}
                </p>
                <div>
                  <Link 
                    href={`/events/${events[0].slug}`}
                    className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition-colors font-medium"
                  >
                    Read More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <article 
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={`/events/${event.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-green-700 transition-colors">
                  <Link href={`/events/${event.slug}`}>
                    {event.title}
                  </Link>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <Link 
                  href={`/events/${event.slug}`}
                  className="inline-flex items-center text-green-700 hover:text-green-800 font-medium text-sm"
                >
                  Read More »
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
