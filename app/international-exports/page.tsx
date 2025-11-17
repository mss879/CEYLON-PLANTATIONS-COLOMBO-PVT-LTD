import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const certifications = [
  {
    id: 1,
    name: "LEED Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-15-1.webp",
    alt: "LEED Certified tea for export in bulk and private label"
  },
  {
    id: 2,
    name: "Vegan Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-14-1.webp",
    alt: "Vegan Certified tea for export in bulk and private label"
  },
  {
    id: 3,
    name: "Rainforest Alliance Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-13-1.webp",
    alt: "Rainforest Alliance Certified tea for export in bulk and private label"
  },
  {
    id: 4,
    name: "USDA Organic Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-12-1.webp",
    alt: "USDA Organic Certified tea for export in bulk and private label"
  },
  {
    id: 5,
    name: "EU Organic Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-11-1.webp",
    alt: "EU Organic Certified tea for export in bulk and private label"
  },
  {
    id: 6,
    name: "GMP Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-10-1.webp",
    alt: "GMP Certified tea for export in bulk and private label"
  },
  {
    id: 7,
    name: "FSSC Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-9-1.webp",
    alt: "FSSC Certified tea for export in bulk and private label"
  },
  {
    id: 8,
    name: "BREEAM Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-8-1.webp",
    alt: "BREEAM Certified tea for export in bulk and private label"
  },
  {
    id: 9,
    name: "ISO 22000",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-7-1.webp",
    alt: "ISO 22000"
  },
  {
    id: 10,
    name: "HACCP Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-6-1.webp",
    alt: "HACCP Certified tea for export in bulk and private label"
  },
  {
    id: 11,
    name: "BRCGS Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-5-1.webp",
    alt: "BRCGS Certified tea for export in bulk and private label"
  },
  {
    id: 12,
    name: "Lion Logo Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-4-1.webp",
    alt: "Lion Logo Certified tea for export in bulk and private label"
  },
  {
    id: 13,
    name: "ISO Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-3-1.webp",
    alt: "ISO Certified tea for export in bulk and private label"
  },
  {
    id: 14,
    name: "HACCP Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-2-1.webp",
    alt: "HACCP Certified tea for export in bulk and private label"
  },
  {
    id: 15,
    name: "GMP Certified",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/sft-certifications-1-1.webp",
    alt: "GMP Certified tea for export in bulk and private label"
  }
];

const whyChooseUs = [
  {
    title: "Consistent Quality:",
    description: "Our teas are sourced from the best estates and blended to exacting standards."
  },
  {
    title: "Global Standards:",
    description: "We operate under certified food safety and hygiene standards."
  },
  {
    title: "Flexible Solutions:",
    description: "From private labeling to customized blends and packaging, we tailor to your needs."
  },
  {
    title: "On-Time Delivery:",
    description: "Our streamlined logistics and experienced export team ensure timely and reliable shipping worldwide."
  },
  {
    title: "Ethical & Sustainable:",
    description: "We are committed to responsible sourcing, fair practices, and sustainable production."
  }
];

export default function InternationalExportsPage() {
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
                <img 
                  src="https://somerfieldtea.com/wp-content/uploads/2025/04/tea-leaqves-white-thumbs-6-150x150.png.webp" 
                  alt="tea leaves white thumbnail"
                  className="w-20 h-20"
                />
              </div>
            </div>
            <h2 className="text-2xl font-light text-white/90 mb-2">Our Global Outreach</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white">International Exports</h1>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Empty background space */}
            <div className="hidden lg:block h-96 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl"></div>

            {/* Right Column - Content */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-6">
                <img 
                  src="https://somerfieldtea.com/wp-content/uploads/2025/04/tea-leaves-thumbs-3-150x150.png.webp" 
                  alt="tea leaves green thumbnail"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-lg text-green-700 font-semibold mb-3 text-center">For your business</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Sharing the Heritage of Ceylon Tea
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">
                At Somerfield Tea, we believe the world deserves to experience the unmatched quality of single-origin Ceylon tea — rich in heritage, aroma, and flavor. Backed by over 75 years of experience through our parent company, Ceylon Plantations Colombo (Pvt) Ltd., we proudly export premium teas to markets across the globe.
              </p>
            </div>
          </div>

          {/* Global Reach Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="flex justify-start mb-6">
                <img 
                  src="https://somerfieldtea.com/wp-content/uploads/2025/04/tea-leaves-thumbs-3-150x150.png.webp" 
                  alt="tea leaves green thumbnail"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-lg text-green-700 font-semibold">Our Principles</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A Global Reach Built on Trust
              </h2>
              <p className="text-gray-600 leading-relaxed">
                From the lush highlands of Sri Lanka to tea lovers in Europe, the Middle East, and Asia, Somerfield Tea has built a strong presence in international markets. Our teas are enjoyed in countries such as the Netherlands, Russia, Turkey, and many others — known for their appreciation of authentic, high-quality teas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We offer both bulk tea and finished retail-ready packaging, catering to private labels, hotels, distributors, and specialty stores seeking reliable, premium Ceylon tea. Each shipment is carefully processed and packed at origin to preserve freshness, and we ensure full traceability from leaf to cup.
              </p>

              {/* Certifications Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Certifications</h3>
                <div className="border-t-2 border-green-700 w-24 mb-8"></div>
                
                {/* Certifications Grid */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {certifications.slice(0, 10).map((cert) => (
                    <div key={cert.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <img 
                        src={cert.image} 
                        alt={cert.alt}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Why Choose Us */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why International Partners Choose Us For Their Requirements
              </h3>
              <div className="border-t-2 border-green-700 w-24 mb-8"></div>
              
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>{item.title}</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Partner With Us Section */}
          <div className="bg-gradient-to-br from-green-100 to-green-50 p-12 rounded-2xl shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="https://somerfieldtea.com/wp-content/uploads/2025/04/tea-leaves-thumbs-3-300x291.png.webp" 
                alt="tea leaves green thumbnail"
                className="w-32 h-32"
              />
            </div>
            <h3 className="text-lg text-green-700 font-semibold mb-3">Looking for a supplier?</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Partner With Us</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
              Whether you're looking to import Ceylon tea under your own brand or stock a trusted Sri Lankan label, Somerfield Tea offers a seamless, supportive export partnership. Join our growing network of global distributors and bring the taste of authentic Ceylon tea to your customers.
            </p>
            <p className="text-gray-700 mb-8">
              Get in touch with our export team to learn more about how we can work together.
            </p>
            <Link 
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition-colors font-semibold text-lg shadow-lg"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
