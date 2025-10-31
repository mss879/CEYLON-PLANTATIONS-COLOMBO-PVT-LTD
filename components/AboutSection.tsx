import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="About-Section" className="section bg-gray-100 py-20 lg:py-32">
      <div className="w-full max-w-[1200px] mx-auto px-2">
        <div className="home-1-about grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Title */}
          <div className="title-wrapper space-y-8">
            <div className="section-label flex items-center gap-2">
              <img
                src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee9dc219ea961bc2b63556_Rectangle%202.svg"
                loading="lazy"
                alt=""
              />
              <div className="text-sm font-medium">About us</div>
            </div>

            <div className="heading-wrap">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                We are committed to delivering excellence in Ceylon tea.
              </h2>
            </div>

            <div className="labels-wrapper flex flex-wrap gap-3">
              <div className="about-label px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="text-sm">Premium Quality</div>
              </div>
              <div className="about-label px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="text-sm">Heritage</div>
              </div>
              <div className="about-label px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="text-sm">Global</div>
              </div>
              <div className="about-label px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="text-sm">Trusted</div>
              </div>
              <div className="about-label px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="text-sm">Authentic</div>
              </div>
              <div className="about-label px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="text-sm">Sustainable</div>
              </div>
              <div className="about-label px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="text-sm">Expertly Blended</div>
              </div>
              <div className="about-label px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="text-sm">Family-Owned</div>
              </div>
              <div className="about-label px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="text-sm">75+ Years</div>
              </div>
            </div>
          </div>

          {/* Right Column - Paragraph */}
          <div className="paragraph-wrapper flex flex-col justify-center space-y-8">
            <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
              Our mission is to bring the finest Ceylon tea from our virgin lands to your cup — creating lasting value for communities and future generations. With over 75 years of expertise, we grow more than tea, we grow tradition and excellence.
            </p>

            <div>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                <img
                  src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg"
                  loading="lazy"
                  alt=""
                  className="w-3 h-3"
                />
                About the company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
