import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTop from '@/components/scroll-to-top'
import { GTMScript, GTMNoScript } from '@/components/google-tag-manager'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'TXPAGES | Texas AI SEO, PPC & Web Design Services | Stephenville, TX',
    template: '%s | TXPAGES',
  },
  description:
    'Grow your Texas business with AI-powered SEO, PPC management, web design, and local marketing services. TXPAGES is your complete digital growth partner in Stephenville, TX. Call 254-968-0162.',
  keywords:
    'Texas SEO, Texas PPC, web design Texas, local SEO Texas, digital marketing Texas, TXPAGES, Stephenville TX marketing, AI SEO',
  metadataBase: new URL('https://txpages.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://txpages.com',
    siteName: 'TXPAGES',
    title: 'TXPAGES | Texas AI SEO, PPC & Web Design Services',
    description:
      'Complete digital marketing services for Texas businesses — SEO, PPC, web design, local listings, and content marketing.',
    images: [
      {
        url: 'https://txpages.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'TXPAGES — Texas Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TXPAGES | Texas AI SEO, PPC & Web Design Services',
    description:
      'Complete digital marketing services for Texas businesses — SEO, PPC, web design, local listings, and content marketing.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  themeColor: '#212e64',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} bg-background`}>
      <body className="font-sans antialiased">
        <GTMScript />
        <GTMNoScript />
        <ScrollToTop />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
