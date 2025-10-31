export default function StatsSection() {
  return (
    <section className="section py-20 lg:py-32">
      <div className="w-full max-w-[1200px] mx-auto px-2">
        <div className="home-1-numbers-wrapper grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Stat 1 */}
          <div className="number-cell text-center space-y-4">
            <img
              src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67eea468f77f829117f6dbb5_Group%202%20(4).svg"
              loading="lazy"
              alt=""
              className="mx-auto"
            />
            <div className="large-text numbers text-6xl lg:text-7xl font-light">75+</div>
            <h5 className="text-xl lg:text-2xl font-medium">Years of Excellence</h5>
            <div className="number-text-wrapper">
              <p className="text-gray-600">
                Trading premium Ceylon tea for over three generations, delivering quality and trust worldwide.
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="number-cell text-center space-y-4">
            <img
              src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67eea468f77f829117f6dbb5_Group%202%20(4).svg"
              loading="lazy"
              alt=""
              className="mx-auto"
            />
            <div className="large-text numbers text-6xl lg:text-7xl font-light">15+</div>
            <h5 className="text-xl lg:text-2xl font-medium">Countries Served</h5>
            <div className="number-text-wrapper">
              <p className="text-gray-600">
                Our tea reaches valuable clients across Europe, Middle East, Russia, and beyond.
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="number-cell text-center space-y-4">
            <img
              src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67eea468f77f829117f6dbb5_Group%202%20(4).svg"
              loading="lazy"
              alt=""
              className="mx-auto"
            />
            <div className="large-text numbers text-6xl lg:text-7xl font-light">100%</div>
            <h5 className="text-xl lg:text-2xl font-medium">Pure Ceylon Tea</h5>
            <div className="number-text-wrapper">
              <p className="text-gray-600">
                Sourced from virgin lands with optimal weather and soil fertility for rich aroma and flavor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
