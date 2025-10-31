import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// NOTE: I set a placeholder metadataBase (site URL) to 'https://example.com'.
// If you have a real production URL (e.g. https://yourdomain.com), replace it.
export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'CEYLON PLANTATIONS COLOMBO (PVT) LTD',
    template: '%s | CEYLON PLANTATIONS COLOMBO (PVT) LTD',
  },
  description:
    'CEYLON PLANTATIONS COLOMBO (PVT) LTD — premium, sustainably sourced teas. Discover our ranges, story, and commitment to quality.',
  applicationName: 'CEYLON PLANTATIONS COLOMBO (PVT) LTD',
  keywords: [
    'tea',
    'Ceylon tea',
    'organic tea',
    'premium tea',
    'sustainable tea',
  ],
  authors: [
    { name: 'CEYLON PLANTATIONS COLOMBO (PVT) LTD', url: 'https://example.com' },
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Other Tea — Premium Organic Teas',
    description:
      'Other Tea — premium, sustainably sourced teas. Discover our ranges, story, and commitment to quality.',
    url: 'https://example.com',
    siteName: 'Other Tea',
    images: ['/logo.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Other Tea — Premium Organic Teas',
    description:
      'Other Tea — premium, sustainably sourced teas. Discover our ranges, story, and commitment to quality.',
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
