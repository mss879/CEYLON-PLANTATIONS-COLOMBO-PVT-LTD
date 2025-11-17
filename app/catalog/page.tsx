import Navbar from '@/components/Navbar';
import CatalogHeroSection from '@/components/CatalogHeroSection';
import CatalogViewerSection from '@/components/CatalogViewerSection';
import Footer from '@/components/Footer';

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CatalogHeroSection />
      <CatalogViewerSection />
      <Footer />
    </main>
  );
}
