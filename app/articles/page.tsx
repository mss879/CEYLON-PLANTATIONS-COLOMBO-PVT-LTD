import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const articles = [
  {
    id: 1,
    title: "Organic Ceylon Black Tea – FBOPF1 Grade",
    date: "November 14, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/Organic-Ceylon-Black-Tea-–-FBOPF1-Grade-1.jpg",
    excerpt: "Organic Ceylon Black Tea FBOPF1 (Flowery Broken Orange Pekoe Fannings 1) is a premium grade of Sri Lankan tea, cherished for its refined character and bold personality.",
    slug: "organic-ceylon-black-tea-fbopf1-grade",
  },
  {
    id: 2,
    title: "CTC PD – Pekoe Dust",
    date: "November 10, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/11/ctc-pekoe-dust-2.jpg",
    excerpt: "CTC PD (Pekoe Dust) is a robust and finely granulated Ceylon black tea, specially processed using the Crush-Tear-Curl (CTC) method.",
    slug: "ctc-pd-pekoe-dust",
  },
  {
    id: 3,
    title: "Ceylon Green Tea – Young Hyson Grade",
    date: "October 2, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/10/green-tea-young-hyson-grade.jpg.webp",
    excerpt: "Young Hyson is a premium grade of Ceylon green tea known for its delicate flavor profile and health benefits.",
    slug: "ceylon-green-tea-young-hyson-grade",
  },
  {
    id: 4,
    title: "Organic FBOP1 Ceylon Black Tea",
    date: "September 17, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/Organic-FBOP1-Ceylon-Black-Tea-.jpg.webp",
    excerpt: "Discover the rich flavors and organic purity of FBOP1 grade Ceylon black tea.",
    slug: "organic-fbop1-ceylon-black-tea",
  },
  {
    id: 5,
    title: "Ceylon Pekoe Tea",
    date: "September 15, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/PEKOE.jpg.webp",
    excerpt: "Explore the classic Ceylon Pekoe tea grade and its distinctive characteristics.",
    slug: "ceylon-pekoe-tea",
  },
  {
    id: 6,
    title: "Organic OP Grade Ceylon Black Tea",
    date: "September 15, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/organic-op-grade.jpg.webp",
    excerpt: "Learn about the Orange Pekoe grade and its organic cultivation process.",
    slug: "organic-op-grade-ceylon-black-tea",
  },
  {
    id: 7,
    title: "Ceylon Instant Tea",
    date: "September 15, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/instant-tea.jpg.webp",
    excerpt: "Discover the convenience and quality of Ceylon instant tea.",
    slug: "ceylon-instant-tea",
  },
  {
    id: 8,
    title: "Types and Grades of Organic Tea Available in Sri Lanka",
    date: "September 12, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/organic-tea-in-sri-lanka.jpeg.webp",
    excerpt: "A comprehensive guide to organic tea varieties grown in Sri Lanka.",
    slug: "types-and-grades-of-organic-tea-available-in-sri-lanka",
  },
  {
    id: 9,
    title: "Types and Grades of Ceylon Green tea",
    date: "September 11, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/green-tea-leaves-scaled.jpg.webp",
    excerpt: "Explore the different types and grades of Ceylon green tea.",
    slug: "types-and-grades-of-ceylon-green-tea",
  },
  {
    id: 10,
    title: "Types of Tea in Sri Lanka",
    date: "September 9, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/three-types-of-ceylon-tea.jpg.webp",
    excerpt: "An overview of the various tea types produced in Sri Lanka.",
    slug: "types-of-tea-in-sri-lanka",
  },
  {
    id: 11,
    title: "Ceylon OP1 (Orange Pekoe 1)",
    date: "September 9, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/op1-grade-tea.jpg.webp",
    excerpt: "Discover the premium OP1 grade Ceylon black tea.",
    slug: "ceylon-op1-orange-pekeo-1",
  },
  {
    id: 12,
    title: "7 Surprising Health Benefits of Green Tea",
    date: "September 9, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/benefits-of-ceylon-green-tea.jpg.webp",
    excerpt: "Explore the amazing health benefits of drinking Ceylon green tea.",
    slug: "7-surprising-health-benefits-of-green-tea",
  },
  {
    id: 13,
    title: "How to Brew the Perfect Cup of Ceylon Tea – The Somerfield Way",
    date: "September 9, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/brew-the-perfect-cup-of-tea.jpg.webp",
    excerpt: "Master the art of brewing the perfect cup of Ceylon tea with our expert guide.",
    slug: "how-to-brew-the-perfect-cup-of-ceylon-tea-the-somerfield-way",
  },
  {
    id: 14,
    title: "Exploring Sri Lanka's Tea Regions & Their Signature Grades",
    date: "September 9, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/tea-regions-in-sri-lanka.jpg.webp",
    excerpt: "Journey through Sri Lanka's renowned tea growing regions.",
    slug: "exploring-sri-lankas-tea-regions-their-signature-grades",
  },
  {
    id: 15,
    title: "A Complete Guide to the Grades of Ceylon Tea in Sri Lanka",
    date: "September 9, 2025",
    image: "https://somerfieldtea.com/wp-content/uploads/2025/09/grades-of-ceylon-tea-on-a-table.jpg.webp",
    excerpt: "Understand the comprehensive grading system of Ceylon tea.",
    slug: "a-complete-guide-to-the-grades-of-ceylon-tea-in-sri-lanka",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 to-amber-700 py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-light text-white/90 mb-2">Archives</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Articles</h1>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={`/articles/${article.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-amber-700 transition-colors">
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {article.date}
                </div>
                <Link 
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm"
                >
                  Read More »
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-2">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-700 text-white font-medium">
            1
          </span>
          <Link 
            href="/articles?page=2"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-amber-700 hover:text-amber-700 transition-colors font-medium"
          >
            2
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
