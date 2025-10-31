import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="home-1-banner-section relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962%2F67ee8cb696d8d19f9b6984b4_4237250-hd_1920_1080_30fps-poster-00001.jpg"
      >
        <source
          src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962%2F67ee8cb696d8d19f9b6984b4_4237250-hd_1920_1080_30fps-transcode.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962%2F67ee8cb696d8d19f9b6984b4_4237250-hd_1920_1080_30fps-transcode.webm"
          type="video/webm"
        />
      </video>

      <div className="home-1-banner-overlay absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      <div className="base-container w-full max-w-[1200px] mx-auto px-2 h-full relative z-10">
        <div className="home-1-banner mobile h-full flex flex-col justify-between py-6 lg:py-0">
          {/* Mobile: Heading at top, Desktop: Bottom right */}
          <div className="home-1-h1-wrapper mobile pt-40 lg:pt-0 lg:hidden">
            <h1 className="text-white text-[2.75rem] sm:text-5xl font-light leading-[1.2] tracking-tight m-0 text-left">
              Three generations of<br />Ceylon tea excellence
            </h1>
          </div>

          {/* Main content area */}
          <div className="home-1-banner-top-wrapper mobile flex-1 flex flex-col lg:flex-row lg:items-end lg:justify-between pb-12 lg:pb-12 justify-end">
            <div className="home-1-banner-left-wrapper mobile flex flex-col justify-end lg:w-1/2 space-y-8 lg:space-y-8 mb-8 lg:mb-0">
              <div className="home-1-banner-labels-wrap flex flex-row items-center gap-6 lg:gap-4">
                <div className="label flex items-center gap-2">
                  <img src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg" loading="lazy" alt="" className="w-8 h-8 lg:w-8 lg:h-8 flex-shrink-0" />
                  <h6 className="text-white text-base lg:text-base font-medium m-0 whitespace-nowrap">Quality</h6>
                </div>
                <div className="label flex items-center gap-2">
                  <img src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg" loading="lazy" alt="" className="w-8 h-8 lg:w-8 lg:h-8 flex-shrink-0" />
                  <h6 className="text-white text-base lg:text-base font-medium m-0 whitespace-nowrap">Heritage</h6>
                </div>
                <div className="label flex items-center gap-2">
                  <img src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg" loading="lazy" alt="" className="w-8 h-8 lg:w-8 lg:h-8 flex-shrink-0" />
                  <h6 className="text-white text-base lg:text-base font-medium m-0 whitespace-nowrap">Excellence</h6>
                </div>
              </div>

              <div className="home-1-banner-text text-white text-xl sm:text-2xl lg:text-2xl leading-relaxed font-normal max-w-lg">
                Through sustainable farming and smart collaboration, we grow more than crops — we grow impact.
              </div>
            </div>

            {/* Desktop only: H1 */}
            <div className="hidden lg:flex lg:w-1/2 items-end justify-end">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[5rem] 2xl:text-[6rem] font-light leading-[1.1] tracking-tight m-0 text-right">
                Three generations of Ceylon tea excellence
              </h1>
            </div>
          </div>

          {/* Bottom section with CTA */}
          <div className="home-1-banner-bottom-wrapper flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 border-t border-white/20 gap-6 lg:gap-0">
            <div className="w-full lg:w-auto">
              <Link
                href="/products"
                className="underlined-link inline-flex flex-col group"
              >
                <div className="underlined-link-text-wrap flex items-center gap-2">
                  <div className="text-white text-base lg:text-lg">Start growing with us</div>
                  <img
                    src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee96d781f57edc797a59ed_Frame%20(46).svg"
                    alt="icon"
                    className="arrow-burron-icon w-5 h-5 transition-transform group-hover:translate-x-1"
                  />
                </div>
                <div className="link-line h-px bg-white w-full mt-1"></div>
              </Link>
            </div>

            <Link
              href="#About-Section"
              className="scroll-link-block items-center gap-3 group hidden lg:inline-flex"
            >
              <div className="flex items-center gap-3">
                <div className="text-white text-base lg:text-lg font-light">Start growing with us</div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="transition-transform group-hover:translate-y-1"
                >
                  <path
                    d="M10 4L10 16M10 16L16 10M10 16L4 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
