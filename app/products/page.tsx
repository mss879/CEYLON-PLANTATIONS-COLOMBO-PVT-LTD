import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductsHeroSection from '@/components/ProductsHeroSection'
import ProductsContentSection from '@/components/ProductsContentSection'
import ProductRangeSection from '@/components/ProductRangeSection'

export const metadata = {
  title: 'Our Products - Premium Ceylon Tea',
  description:
    'Explore our extensive range of premium pure Ceylon tea products. From black tea to green tea, tea bags to bulk tea exports - Ceylon Plantations Colombo offers the finest Sri Lankan tea with world-class quality and sustainable practices.',
  keywords: 'Ceylon tea products, bulk tea, tea bags, black tea, green tea, Ceylon tea varieties, premium tea products, Sri Lankan tea exports',
  openGraph: {
    title: 'Premium Ceylon Tea Products - Ceylon Plantations Colombo',
    description:
      'Explore our extensive range of premium pure Ceylon tea products - black tea, green tea, tea bags, and bulk exports.',
    images: ['/logo.png'],
  },
}

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
