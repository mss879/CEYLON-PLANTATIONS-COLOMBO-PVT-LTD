import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ProductsSection from '@/components/ProductsSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProductsSection />
      <SustainabilitySection />
      <WhyChooseUsSection />
      <Footer />
    </main>
  );
}
