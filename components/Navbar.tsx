'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DropdownItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const menuItems: MenuItem[] = [
  { label: 'HOME', href: '/' },
  {
    label: 'FACTORY',
    dropdown: [
      { label: 'OFFICE PREMISES', href: '/factory/office-premises' },
      { label: 'TEA PACKING FACILITY', href: '/factory/tea-packing-facility' },
      { label: 'TEA PACKING MACHINERY', href: '/factory/tea-packing-machinery' },
      { label: 'TEA ROOMS & GRADING', href: '/factory/tea-rooms-grading' },
      { label: 'TEA BLENDING', href: '/factory/tea-blending' },
      { label: 'WAREHOUSING FACILITIES', href: '/factory/warehousing-facilities' },
    ],
  },
  {
    label: 'B2B SERVICES',
    dropdown: [
      { label: 'PRIVATE LABEL (OEM) TEA', href: '/b2b-services/private-label-oem-tea' },
      { label: 'BULK TEA EXPORTS', href: '/b2b-services/bulk-tea-exports' },
      { label: 'CO-PACKING TEA', href: '/b2b-services/co-packing-tea' },
    ],
  },
  { label: 'TARLTON TEA', href: '/tarlton-tea' },
  {
    label: 'ABOUT',
    dropdown: [
      { label: 'ABOUT US', href: '/about/about-us' },
      { label: 'WHY CHOOSE US', href: '/about/why-choose-us' },
      { label: 'GLOBAL PRESENCE', href: '/about/global-presence' },
      { label: 'QUALITY CERTIFICATIONS', href: '/about/quality-certifications' },
      { label: 'CORE VALUES', href: '/about/core-values' },
      { label: 'TARLTON FLAGSHIP STORES', href: '/about/tarlton-flagship-stores' },
      { label: 'OUR BUSINESS PROCESS', href: '/about/our-business-process' },
      { label: 'B2B SERVICES FOR TEA', href: '/about/b2b-services-for-tea' },
      { label: 'CSR INITIATIVES', href: '/about/csr-initiatives' },
      { label: 'SUSTAINABILITY INITIATIVES', href: '/about/sustainability-initiatives' },
      { label: 'OUR POLICIES', href: '/about/our-policies' },
      { label: 'CAREERS AT VENTURE TEA', href: '/about/careers-at-venture-tea' },
    ],
  },
  {
    label: 'CEYLON TEA',
    dropdown: [
      { label: 'THE BEST PURE CEYLON TEA', href: '/ceylon-tea/the-best-pure-ceylon-tea' },
      { label: 'HISTORY OF PURE CEYLON TEA', href: '/ceylon-tea/history-of-pure-ceylon-tea' },
      { label: 'CULTIVATING PURE CEYLON TEA', href: '/ceylon-tea/cultivating-pure-ceylon-tea' },
      { label: 'TEA GROWING REGIONS', href: '/ceylon-tea/tea-growing-regions' },
      { label: 'GRADING PURE CEYLON TEA', href: '/ceylon-tea/grading-pure-ceylon-tea' },
      { label: 'SUSTAINABLY GROWING TEA', href: '/ceylon-tea/sustainably-growing-tea' },
      { label: 'MANUFACTURING PURE CEYLON TEA', href: '/ceylon-tea/manufacturing-pure-ceylon-tea' },
      { label: 'QUALITY TESTING PURE CEYLON TEA', href: '/ceylon-tea/quality-testing-pure-ceylon-tea' },
      { label: 'GRADES OF PURE CEYLON TEA', href: '/ceylon-tea/grades-of-pure-ceylon-tea' },
      { label: 'TRADITIONAL TEA TASTING', href: '/ceylon-tea/traditional-tea-tasting' },
      { label: 'PACKING AND SHIPPING CEYLON TEA', href: '/ceylon-tea/packing-and-shipping-ceylon-tea' },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav
      className="navbar-absolute fixed top-0 left-0 right-0 z-50 transition-all duration-400"
    >
      <div className="base-container w-full max-w-[1400px] mx-auto px-2 py-4">
        <div className="nav-menu-wrapper flex items-center justify-between py-3 px-6 rounded-full backdrop-blur-md bg-black/60 border border-white/10 shadow-lg">
          <Link href="/" className="brand flex-shrink-0">
            <img
              src="/logo.png"
              alt="Ceylon Plantations Colombo Logo"
              height={50}
              className="logo h-[50px] w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <nav className="nav-menu flex items-center">
              <div className="menu-wrap flex items-center gap-6">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="nav-link text-white hover:opacity-80 transition-opacity"
                    >
                      <div className="clip">
                        <div className="button-text-wrap">
                          <p className="nav-item-title text-sm font-medium m-0">{item.label}</p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <button
                      className="nav-link text-white hover:opacity-80 transition-opacity flex items-center gap-1"
                    >
                      <div className="clip">
                        <div className="button-text-wrap">
                          <p className="nav-item-title text-sm font-medium m-0">{item.label}</p>
                        </div>
                      </div>
                      <svg
                        className="w-3 h-3 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            </nav>

            <div className="header-button-wrapper flex items-center">
              <Link
                href="/contact-us"
                className="secondary-button flex items-center justify-center gap-2 px-8 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <button
            className="menu-button lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-auto">
              <line x1="0" y1="1" x2="24" y2="1" stroke="white" strokeWidth="2"/>
              <line x1="0" y1="8" x2="24" y2="8" stroke="white" strokeWidth="2"/>
              <line x1="0" y1="15" x2="24" y2="15" stroke="white" strokeWidth="2"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-6 rounded-3xl backdrop-blur-md bg-black/60 border border-white/10 shadow-lg">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link 
                      href={item.href} 
                      className="nav-link text-white hover:opacity-80 transition-opacity py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <p className="text-sm font-medium m-0">{item.label}</p>
                    </Link>
                  ) : (
                    <>
                      <button
                        className="nav-link text-white hover:opacity-80 transition-opacity py-2 w-full text-left flex items-center justify-between"
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      >
                        <p className="text-sm font-medium m-0">{item.label}</p>
                        <svg
                          className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === item.label && item.dropdown && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block text-white/80 hover:text-white text-xs py-1.5"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
