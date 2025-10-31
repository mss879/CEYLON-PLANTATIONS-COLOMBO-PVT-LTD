import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsGridSection from '@/components/NewsGridSection'

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
