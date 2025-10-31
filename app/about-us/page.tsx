import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutHeroSection from '@/components/AboutHeroSection'
import AboutStatsSection from '@/components/AboutStatsSection'
import AboutWhoWeAreSection from '@/components/AboutWhoWeAreSection'
import AboutHistorySection from '@/components/AboutHistorySection'

export const metadata = {
  title: 'About Us — CEYLON PLANTATIONS COLOMBO (PVT) LTD',
  description:
    'Learn about CEYLON PLANTATIONS COLOMBO (PVT) LTD — our history, mission, and sustainable sourcing practices.',
  openGraph: {
    title: 'About CEYLON PLANTATIONS COLOMBO (PVT) LTD',
    description:
      'Learn about CEYLON PLANTATIONS COLOMBO (PVT) LTD — our history, mission, and sustainable sourcing practices.',
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
