import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// NOTE: I set a placeholder metadataBase (site URL) to 'https://example.com'.
// If you have a real production URL (e.g. https://yourdomain.com), replace it.
export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Ceylon Plantations Colombo (Pvt) Ltd - Premium Pure Ceylon Tea',
    template: '%s | Ceylon Plantations Colombo',
  },
  description:
    'Ceylon Plantations Colombo (Pvt) Ltd - Leading tea manufacturer and exporter of premium pure Ceylon tea. Offering B2B services, private label tea, bulk tea exports, and co-packing solutions. Experience the finest Sri Lankan tea with sustainable practices and world-class quality certifications.',
  applicationName: 'Ceylon Plantations Colombo',
  keywords: [
    'Ceylon tea',
    'Sri Lankan tea',
    'pure Ceylon tea',
    'Ceylon tea exporter',
    'Ceylon tea manufacturer',
    'premium Ceylon tea',
    'organic Ceylon tea',
    'bulk tea exports',
    'private label tea',
    'OEM tea manufacturing',
    'tea co-packing',
    'B2B tea services',
    'sustainable tea',
    'tea plantation Sri Lanka',
    'Ceylon tea factory',
    'tea blending',
    'tea grading',
    'Tarlton tea',
    'Ceylon black tea',
    'Ceylon green tea',
    'tea packing facility',
  ],
  authors: [
    { name: 'Ceylon Plantations Colombo (Pvt) Ltd', url: 'https://example.com' },
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Ceylon Plantations Colombo - Premium Pure Ceylon Tea Manufacturer & Exporter',
    description:
      'Leading manufacturer and exporter of premium pure Ceylon tea from Sri Lanka. We offer B2B services including private label tea, bulk exports, and co-packing solutions. Experience world-class quality with sustainable practices.',
    url: 'https://example.com',
    siteName: 'Ceylon Plantations Colombo',
    images: ['/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceylon Plantations Colombo - Premium Pure Ceylon Tea',
    description:
      'Leading manufacturer and exporter of premium pure Ceylon tea from Sri Lanka. B2B services, private label tea, bulk exports, and sustainable tea solutions.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
