'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import GalleryHeroSection from '@/components/GalleryHeroSection';
import ImageGallerySection from '@/components/ImageGallerySection';
import VideoGallerySection from '@/components/VideoGallerySection';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <GalleryHeroSection />
      
      {/* Tab Navigation */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('images')}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'images'
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Image Gallery
              </span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Video Gallery
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === 'images' ? <ImageGallerySection /> : <VideoGallerySection />}
      <Footer />
    </main>
  );
}
