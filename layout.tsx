import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

/**
 * Font configuration using Next.js Google Fonts
 * Playfair Display for headings (elegant, premium feel)
 * Inter for body text (clean, readable)
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

/**
 * Root layout component - Wraps all pages with global structure
 */
export const metadata: Metadata = {
  title: {
    default: 'Design Vision Constructions & Interiors | Premium Interior Design',
    template: '%s | Design Vision',
  },
  description: 'Transform your space with Design Vision Constructions & Interiors. Expert interior design, residential construction, commercial interiors, modular kitchens, and renovation services.',
  keywords: ['interior design', 'construction', 'renovation', 'modular kitchen', 'commercial interiors', 'residential'],
  authors: [{ name: 'Design Vision' }],
  creator: 'Design Vision',
  publisher: 'Design Vision',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://designvision.com',
    siteName: 'Design Vision',
    title: 'Design Vision Constructions & Interiors',
    description: 'Premium interior design and construction services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Design Vision',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Vision Constructions & Interiors',
    description: 'Premium interior design and construction services',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#C5A47E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-400 focus:text-white"
        >
          Skip to main content
        </a>

        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
