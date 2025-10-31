import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductsHeroSection from '@/components/ProductsHeroSection'
import ProductsContentSection from '@/components/ProductsContentSection'
import ProductRangeSection from '@/components/ProductRangeSection'

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ProductsHeroSection />
        <ProductsContentSection />
        <ProductRangeSection />
      </main>
      <Footer />
    </>
  )
}
