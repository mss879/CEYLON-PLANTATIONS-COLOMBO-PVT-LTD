'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer bg-gray-50 py-16">
      <div className="base-container w-full max-w-[1200px] mx-auto px-2">
        <div className="footer-wrapper">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 gap-12 pb-12 border-b border-gray-200">
            {/* Left Column - Brand and Social */}
            <div className="lg:col-span-1">
              <Link href="/" className="footer-brand inline-block mb-6">
                <img
                  src="/logo.png"
                  loading="lazy"
                  alt="Ceylon Plantations Colombo Logo"
                  className="footer-logo h-[60px] w-auto"
                />
              </Link>
              <div className="footer-text text-gray-700 text-base mb-8 leading-relaxed">
                Three generations of Ceylon tea excellence.
              </div>

              {/* Social Links */}
              <div className="social-wrapper flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-block flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67f3ab344ecca7dc1cd63a7f_Frame%20(51).svg"
                    loading="lazy"
                    alt="Instagram"
                    className="footer-social-image w-5 h-5"
                  />
                  <div className="text-sm">Instagram</div>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-block flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67f3ab34a3858a3217cf3377_Frame%20(52).svg"
                    loading="lazy"
                    alt="YouTube"
                    className="footer-social-image w-5 h-5"
                  />
                  <div className="text-sm">YouTube</div>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-block flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ee63cb3895632eb840c962/67f3ab342807ac6c42f3be59_Frame%20(53).svg"
                    loading="lazy"
                    alt="Facebook"
                    className="footer-social-image w-5 h-5"
                  />
                  <div className="text-sm">Facebook</div>
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="footer-links-wrapper lg:col-span-1">
              <h6 className="text-gray-900 font-medium mb-4 text-base">Home</h6>
              <Link href="/" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                Home
              </Link>
              <Link href="/products" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                Products
              </Link>
              <Link href="/about-us" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                About Us
              </Link>
            </div>

            <div className="footer-links-wrapper lg:col-span-1">
              <h6 className="text-gray-900 font-medium mb-4 text-base">Company</h6>
              <Link href="/about-us" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                About us
              </Link>
              <Link href="/news" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                News & Insights
              </Link>
              <Link href="/contact-us" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                Contact Us
              </Link>
            </div>

            <div className="footer-links-wrapper lg:col-span-1">
              <h6 className="text-gray-900 font-medium mb-4 text-base">Services</h6>
              <Link href="/products" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                Bulk Tea
              </Link>
              <Link href="/products" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                Tea Bags
              </Link>
              <Link href="/products" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                Green Tea
              </Link>
              <Link href="/products" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                Somefield Brand
              </Link>
            </div>

            <div className="footer-links-wrapper lg:col-span-1">
              <h6 className="text-gray-900 font-medium mb-4 text-base">Information</h6>
              <Link href="/contact-us" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                Contact
              </Link>
              <Link href="/news" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                News & Trends
              </Link>
              <Link href="/about-us" className="footer-link block text-gray-600 hover:text-black mb-3 transition-colors text-sm">
                About
              </Link>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="footer-bottom-wrapper pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="footer-copyright text-gray-600 text-sm text-center md:text-left">
              ©Ceylon Plantations Colombo. All Rights Reserved.
            </div>
            <div className="footer-rights-wrapper flex flex-wrap gap-2 text-sm text-gray-600">
              <div className="footer-rights">
                Powered by <span className="text-gray-900 font-medium">Arc AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
