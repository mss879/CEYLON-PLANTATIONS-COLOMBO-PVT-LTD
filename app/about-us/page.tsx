import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutHeroSection from '@/components/AboutHeroSection'
import AboutStatsSection from '@/components/AboutStatsSection'
import AboutWhoWeAreSection from '@/components/AboutWhoWeAreSection'
import AboutHistorySection from '@/components/AboutHistorySection'

export const metadata = {
  title: 'About Us - Ceylon Plantations Colombo',
  description:
    'Discover Ceylon Plantations Colombo (Pvt) Ltd - a leading Ceylon tea manufacturer with a rich heritage of producing premium pure Ceylon tea. Learn about our sustainable practices, quality certifications, global presence, and commitment to excellence in tea production.',
  keywords: 'Ceylon Plantations, about Ceylon tea, tea manufacturer Sri Lanka, Ceylon tea company, sustainable tea production, tea factory history',
  openGraph: {
    title: 'About Ceylon Plantations Colombo - Premium Ceylon Tea Manufacturer',
    description:
      'Discover Ceylon Plantations Colombo - a leading Ceylon tea manufacturer with a rich heritage of producing premium pure Ceylon tea with sustainable practices.',
    images: ['/logo.png'],
  },
}

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AboutHeroSection />
        <AboutStatsSection />
        <AboutWhoWeAreSection />
        <AboutHistorySection />
      </main>
      <Footer />
    </>
  )
}
