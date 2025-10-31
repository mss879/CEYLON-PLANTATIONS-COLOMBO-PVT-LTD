'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="navbar-absolute fixed top-0 left-0 right-0 z-50 transition-all duration-400"
    >
      <div className="base-container w-full max-w-[1200px] mx-auto px-2 py-4">
        <div className="nav-menu-wrapper flex items-center justify-between py-3 px-6 rounded-full backdrop-blur-md bg-black/60 border border-white/10 shadow-lg">
          <Link href="/" className="brand flex-shrink-0">
            <img
              src="/logo.png"
              alt="Ceylon Plantations Colombo Logo"
              height={50}
              className="logo h-[50px] w-auto"
            />
          </Link>

          <nav className="nav-menu hidden lg:flex items-center">
            <div className="menu-wrap flex items-center gap-8">
              <Link href="/" className="nav-link text-white hover:opacity-80 transition-opacity">
                <div className="clip">
                  <div className="button-text-wrap">
                    <p className="nav-item-title text-base m-0">HOME</p>
                  </div>
                </div>
              </Link>

              <Link href="/products" className="nav-link text-white hover:opacity-80 transition-opacity">
                <div className="clip">
                  <div className="button-text-wrap">
                    <p className="nav-item-title text-base m-0">PRODUCTS</p>
                  </div>
                </div>
              </Link>

              <Link href="/about-us" className="nav-link text-white hover:opacity-80 transition-opacity">
                <div className="clip">
                  <div className="button-text-wrap">
                    <p className="nav-item-title text-base m-0">ABOUT US</p>
                  </div>
                </div>
              </Link>

              <Link href="/news" className="nav-link text-white hover:opacity-80 transition-opacity">
                <div className="clip">
                  <div className="button-text-wrap">
                    <p className="nav-item-title text-base m-0">NEWS</p>
                  </div>
                </div>
              </Link>
            </div>
          </nav>

          <div className="header-button-wrapper hidden lg:flex items-center">
            <Link
              href="/contact-us"
              className="secondary-button flex items-center justify-center gap-2 px-8 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium text-sm"
            >
              Contact Us
            </Link>
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
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="nav-link text-white hover:opacity-80 transition-opacity py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="text-base m-0">HOME</p>
              </Link>
              <Link 
                href="/products" 
                className="nav-link text-white hover:opacity-80 transition-opacity py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="text-base m-0">PRODUCTS</p>
              </Link>
              <Link 
                href="/about-us" 
                className="nav-link text-white hover:opacity-80 transition-opacity py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="text-base m-0">ABOUT US</p>
              </Link>
              <Link 
                href="/news" 
                className="nav-link text-white hover:opacity-80 transition-opacity py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <p className="text-base m-0">NEWS</p>
              </Link>
              <Link
                href="/contact-us"
                className="secondary-button flex items-center justify-center gap-2 px-8 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium text-sm mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
