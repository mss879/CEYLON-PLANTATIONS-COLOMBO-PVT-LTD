'use client';

import { useState } from 'react';

interface GalleryImage {
  id: string;
  src: string;
  srcset?: string;
  title: string;
  description: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://somerfieldtea.com/wp-content/uploads/2025/11/FBOP-with-tips-768x775.webp',
    title: 'FBOP with Tips (Black Tea)',
    description: 'Strong, smooth, and refined — CPC\'s FBOP with Tips brews a brisk, full-bodied cup enriched by golden tips.',
    category: 'Tea Grades'
  },
  {
    id: '2',
    src: 'https://somerfieldtea.com/wp-content/uploads/2025/11/GP1-768x775.webp',
    title: 'GP1 (Gunpowder) Green Tea',
    description: 'Bold and brisk — CPC\'s GP1 brews a smoky, full-bodied green tea with lasting freshness',
    category: 'Tea Grades'
  },
  {
    id: '3',
    src: 'https://somerfieldtea.com/wp-content/uploads/2025/11/YH-young-hyson-768x775.webp',
    title: 'Young Hyson Green Tea',
    description: 'Fresh, smooth, and uplifting — CPC\'s Young Hyson brews a golden-green cup with lively flavor and natural sweetness.',
    category: 'Tea Grades'
  },
  {
    id: '4',
    src: 'https://somerfieldtea.com/wp-content/uploads/2025/11/ctc-pekoe-dust-768x775.webp',
    title: 'CTC PD (Pekoe Dust)',
    description: 'CTC PD (Pekoe Dust) is a robust and finely granulated Ceylon black tea, specially processed using the Crush-Tear-Curl (CTC) method.',
    category: 'Tea Grades'
  },
  {
    id: '5',
    src: 'https://somerfieldtea.com/wp-content/uploads/2025/11/Organic-Ceylon-Black-Tea-FBOPF1-Grade-e1763091366128_batcheditor_fotor-768x768.webp',
    title: 'Organic Ceylon Black Tea – FBOPF1 Grade',
    description: 'A premium grade of Sri Lankan tea, cherished for its refined character and bold personality. Grown in organically certified estates, this tea is cultivated without synthetic chemicals or pesticides, preserving the purity of the leaf and the integrity of the soil.',
    category: 'Tea Grades'
  }
];

export default function ImageGallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="https://somerfieldtea.com/wp-content/uploads/2025/04/tea-leaves-thumbs-3-150x150.png.webp"
              alt="Tea leaves"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h2 className="text-2xl lg:text-3xl font-light text-slate-600 mb-2">
            Archives of Our
          </h2>
          <h3 className="text-4xl lg:text-5xl font-light text-slate-900">
            Image Gallery
          </h3>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl bg-slate-100 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-medium text-lg mb-2 line-clamp-2">
                      {image.title}
                    </h4>
                    <p className="text-white/80 text-sm line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-light text-white mb-3">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 text-base max-w-3xl mx-auto">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
