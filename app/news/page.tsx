import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsGridSection from '@/components/NewsGridSection'

export const metadata = {
  title: 'News & Updates - Ceylon Plantations Colombo',
  description:
    'Stay updated with the latest news, insights, and announcements from Ceylon Plantations Colombo. Discover industry trends, company updates, and the world of premium Ceylon tea.',
  keywords: 'Ceylon tea news, tea industry updates, Ceylon Plantations news, Sri Lankan tea updates, tea industry insights',
  openGraph: {
    title: 'News & Updates - Ceylon Plantations Colombo',
    description:
      'Stay updated with the latest news, insights, and announcements from Ceylon Plantations Colombo.',
    images: ['/logo.png'],
  },
}

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <NewsGridSection />
      </main>
      <Footer />
    </>
  )
}
