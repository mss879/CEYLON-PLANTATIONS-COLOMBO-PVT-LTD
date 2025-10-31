import Link from 'next/link';

export default function SustainabilitySection() {
  return (
    <section className="section py-20 lg:py-32">
      <div className="w-full max-w-[1200px] mx-auto px-2">
        <div className="gray-card bg-gray-100 rounded-3xl overflow-hidden grid lg:grid-cols-2 gap-8">
          <div className="gray-card-text-wrapper p-8 lg:p-12 flex flex-col justify-center">
            <div className="large-text text-4xl lg:text-5xl font-light mb-6">
              Quality and tradition at our core.
            </div>
            <p className="text-lg text-gray-700 mb-8">
              We&apos;re committed to tea production that honors tradition, maintains the highest quality standards, and preserves Ceylon tea heritage for future generations.
            </p>
            <div className="solutions-list space-y-6 mb-8">
              <div className="solution-list-item">
                <h5 className="text-xl font-medium mb-2">Expert Blending</h5>
                <p className="small-paragraph text-gray-600">
                  Three generations of tea blending expertise creating rich aroma and flavor
                </p>
              </div>
              <div className="solution-list-item">
                <h5 className="text-xl font-medium mb-2">State-of-the-art Packaging</h5>
                <p className="small-paragraph text-gray-600">
                  Advanced technology to secure freshness and taste in every package
                </p>
              </div>
            </div>
            <div className="solution-button-wrapper">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                <img
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg"
                  loading="lazy"
                  alt=""
                  className="w-3 h-3"
                />
                Get in Touch
              </Link>
            </div>
          </div>
          <img
            src="/teaplat.jpg"
            loading="lazy"
            alt="Tea plantation"
            className="home-1-gray-card-image w-full h-full object-cover lg:rounded-r-3xl"
          />
        </div>
      </div>
    </section>
  );
}
