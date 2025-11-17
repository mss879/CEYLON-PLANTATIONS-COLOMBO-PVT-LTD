'use client';

import { useState, useEffect } from 'react';

export default function CatalogViewerSection() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const totalPages = 16;
  
  // PDF URL
  const pdfUrl = 'https://somerfieldtea.com/wp-content/uploads/2025/11/somerfield-tea-catalog-2025-03a.pdf';

  // Auto-load PDF when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(totalPages, page)));
  };

  return (
    <section id="catalog-viewer" className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67ee959464ed700c7614bdba_Rectangle%201%20(1).svg"
              loading="lazy"
              alt=""
              className="w-6 h-6"
            />
            <span className="text-slate-600 text-sm font-medium tracking-wider uppercase">
              Interactive Catalog
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-light text-slate-900 mb-4">
            Browse Our Collection
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Flip through our digital catalog or download the PDF for offline viewing
          </p>
        </div>

        {/* Catalog Viewer Container */}
        <div className="relative">
          {/* Desktop Viewer - 3D Flipbook Style */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden">
              {/* Viewer Controls */}
              <div className="bg-slate-900/80 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-white"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    title="Previous Page"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                    onClick={() => goToPage(1)}
                    title="First Page"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                    <input
                      type="number"
                      min="1"
                      max={totalPages}
                      value={currentPage}
                      onChange={(e) => goToPage(parseInt(e.target.value) || 1)}
                      className="w-16 bg-transparent text-white text-center outline-none"
                    />
                    <span className="text-white/60">/ {totalPages}</span>
                  </div>

                  <button
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                    onClick={() => goToPage(totalPages)}
                    title="Last Page"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </button>

                  <button
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-white"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    title="Next Page"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white" title="Zoom In">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white" title="Zoom Out">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                    </svg>
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                    title="Toggle Fullscreen"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                  <a
                    href={pdfUrl}
                    download="ceylon-tea-catalog-2025.pdf"
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                    title="Download PDF"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Flipbook Viewer */}
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 p-8 lg:p-16 min-h-[700px] flex items-center justify-center">
                {isLoading ? (
                  /* Loading State */
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-white/20 border-t-white mb-4"></div>
                      <p className="text-white/80 text-lg">Loading Catalog...</p>
                    </div>
                  </div>
                ) : (
                  /* Flipbook Style PDF Viewer */
                  <div className="relative w-full max-w-6xl">
                    <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden" style={{ minHeight: '700px' }}>
                      {/* Book-style container with page turn effect */}
                      <div className="relative h-[700px] flex items-center justify-center bg-gradient-to-br from-amber-50 to-slate-50">
                        {/* Left page shadow */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-10"></div>
                        
                        {/* Right page shadow */}
                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/10 to-transparent pointer-events-none z-10"></div>
                        
                        {/* Center spine/binding effect */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gradient-to-r from-black/20 via-black/10 to-black/20 -translate-x-1/2 pointer-events-none z-20"></div>
                        
                        {/* PDF Iframe */}
                        <iframe
                          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&page=${currentPage}&view=FitH`}
                          className="w-full h-full"
                          title="Ceylon Tea Catalog 2025"
                          style={{ border: 'none' }}
                        />
                      </div>
                      
                      {/* Page curl effect overlay on corners */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-black/5 pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-transparent to-black/5 pointer-events-none"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Viewer - Slider Style */}
          <div className="lg:hidden">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Mobile Controls */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                <button
                  className="p-2 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  title="Previous Page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-600">
                    Page {currentPage} / {totalPages}
                  </span>
                </div>

                <button
                  className="p-2 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  title="Next Page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Mobile Viewer */}
              <div className="relative bg-slate-100 p-4 min-h-[600px] flex items-center justify-center">
                {isLoading ? (
                  /* Loading State */
                  <div className="w-full aspect-[3/4] bg-white rounded-lg shadow-lg flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald-600/20 border-t-emerald-600 mb-4"></div>
                      <p className="text-slate-600">Loading Catalog...</p>
                    </div>
                  </div>
                ) : (
                  /* Book-style Mobile Viewer */
                  <div className="w-full">
                    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden" style={{ height: '600px' }}>
                      {/* Page shadows for book effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-10"></div>
                      <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/10 to-transparent pointer-events-none z-10"></div>
                      
                      {/* PDF Viewer */}
                      <iframe
                        src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&page=${currentPage}&view=FitH`}
                        className="w-full h-full"
                        title="Ceylon Tea Catalog 2025"
                        style={{ border: 'none' }}
                      />
                      
                      {/* Corner curls */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-black/5 pointer-events-none"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Actions */}
              <div className="bg-slate-50 border-t border-slate-200 p-4">
                <a
                  href={pdfUrl}
                  download="ceylon-tea-catalog-2025.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Full Catalog
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Premium Quality</h3>
            <p className="text-slate-600 text-sm font-light">All products certified and quality tested</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Global Shipping</h3>
            <p className="text-slate-600 text-sm font-light">Worldwide delivery available</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Custom Orders</h3>
            <p className="text-slate-600 text-sm font-light">Tailored solutions for your business</p>
          </div>
        </div>
      </div>
    </section>
  );
}
