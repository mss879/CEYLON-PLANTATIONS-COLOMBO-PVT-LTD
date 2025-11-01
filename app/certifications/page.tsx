import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Quality Certifications | Ceylon Plantations',
  description: 'International quality standards and certifications for our Pure Ceylon Tea products. BREEAM, LEED, USDA Organic, EU Organic, and more.',
};

export default function CertificationsPage() {
  const certifications = [
    {
      name: "Lion Logo for Pure Ceylon Tea",
      image: "/images/certifications/lion-logo.png",
      link: "/about/lion-certification"
    },
    {
      name: "Ozone Friendly Tea",
      image: "/images/certifications/ozone-friendly.png",
    },
    {
      name: "BREEAM Certification 0061-2929",
      image: "/images/certifications/breeam.png",
      link: "https://bregroup.com/products/breeam/"
    },
    {
      name: "USDA Organic Certification",
      image: "/images/certifications/usda-organic.png",
      link: "https://www.usda.gov/topics/organic"
    },
    {
      name: "LEED Gold Certificate",
      image: "/images/certifications/leed-gold.png",
      link: "https://www.gbig.org/activities/leed-1000065814/dashboard"
    },
    {
      name: "EU Organic Certification",
      image: "/images/certifications/eu-organic.png",
      link: "https://ec.europa.eu/info/food-farming-fisheries/farming/organic-farming/organics-glance_en"
    },
    {
      name: "The Vegan Society Certification",
      image: "/images/certifications/vegan-society.png",
      link: "https://www.vegansociety.com"
    },
    {
      name: "BRCGS Global Food Safety Standards Certification",
      image: "/images/certifications/brcgs.png",
      link: "https://www.brcgs.com/our-standards/food-safety/"
    },
    {
      name: "Rainforest Alliance Chain of Custody Certification",
      image: "/images/certifications/rainforest-alliance.png",
      link: "https://www.rainforest-alliance.org/find-certified/venture/"
    },
    {
      name: "GMP : Good Manufacturing Practices Certification",
      image: "/images/certifications/gmp.png",
      link: "https://www.sgs.com/en/knowledge-solutions/certification/industry/pharmaceutical-cosmetics-and-personal-care/gmp"
    },
    {
      name: "FSSC 22000 - Food Safety Systems certification",
      image: "/images/certifications/fssc-22000.png",
      link: "https://www.sgs.com/en/health-and-nutrition/food/solutions/food-audit-and-certification/food-packaging/fssc-22000"
    },
    {
      name: "HACCP - Hazard Analysis & Critical Control Points Certification",
      image: "/images/certifications/haccp.png",
      link: "https://www.sgs.com/en/health-and-nutrition/food/solutions/food-audit-and-certification/food-and-ingredients-manufacturing/haccp"
    },
    {
      name: "ISO 22000 - Food Safety Standards Certification",
      image: "/images/certifications/iso-22000.png",
      link: "https://www.sgs.com/en/health-and-nutrition/food/solutions/food-audit-and-certification/food-and-ingredients-manufacturing/iso-22000"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gray-100 pt-32 pb-20 px-2">
          <div className="w-full max-w-[1200px] mx-auto text-center">
            <div className="section-label flex items-center justify-center gap-2 mb-6">
              <img
                src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                loading="lazy"
                alt=""
              />
              <div className="text-sm font-medium">Quality Certifications</div>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 mb-6">
              Quality Certifications
            </h1>
            <h2 className="text-xl lg:text-2xl font-light text-gray-700 max-w-3xl mx-auto">
              Quality certifications for your products.
            </h2>
          </div>
        </section>

      {/* International Quality Standards Section */}
      <section className="section py-20 lg:py-32 px-2 bg-white">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="section-label flex items-center gap-2 mb-6">
                <img
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                  loading="lazy"
                  alt=""
                />
                <div className="text-sm font-medium">International Quality Standards</div>
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900 mb-6">
                The quality standards you can expect for your private label tea products.
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Ceylon Plantations, we uphold the highest quality standards for all tea, herbal teas, 
                  fruit teas, wellness teas and custom blends that leave our factory.
                </p>
                
                <p>
                  We do this by implementing strict prevention, detection, and quality control procedures 
                  throughout every stage of production. From sourcing premium raw materials and managing our 
                  production and packaging processes to maintaining secure storage facilities and ensuring 
                  the health and safety of our team, quality is our priority. Our modern factory is equipped 
                  with advanced technology at multiple checkpoints to guarantee that every product meets 
                  rigorous standards.
                </p>
                
                <p>
                  Our commitment, expertise, and professionalism are reflected in the international 
                  certifications we have earned, clear evidence of our dedication to delivering excellence.
                </p>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="/images/tea-factory.jpg" 
                alt="Tea packing facility"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section py-20 lg:py-32 px-2 bg-gray-100">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="section-label flex items-center justify-center gap-2 mb-6">
              <img
                src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                loading="lazy"
                alt=""
              />
              <div className="text-sm font-medium">Our Quality Assurance</div>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-gray-900">
              International Standard Certifications
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:scale-105 transition-transform group"
              >
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <div className="mb-4 flex items-center justify-center h-48">
                      <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center p-4">
                        {/* Placeholder for certification logo */}
                        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-4xl">🏆</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm font-medium text-gray-800 leading-tight">
                      {cert.name}
                    </h3>
                  </a>
                ) : (
                  <>
                    <div className="mb-4 flex items-center justify-center h-48">
                      <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center p-4">
                        {/* Placeholder for certification logo */}
                        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-4xl">🏆</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm font-medium text-gray-800 leading-tight">
                      {cert.name}
                    </h3>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
