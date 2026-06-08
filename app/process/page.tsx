import type { Metadata } from 'next'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import ProcessSection from '@/components/process-section'
import CTABanner from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Our Digital Marketing Process | TXPAGES | Discovery to Ongoing Support',
  description:
    'See exactly how TXPAGES drives results for Texas businesses — from discovery and strategy through implementation, monthly reporting, and ongoing support. A proven 5-step framework.',
  alternates: { canonical: '/process' },
  openGraph: {
    title: 'Our Digital Marketing Process | TXPAGES',
    description:
      'A proven 5-step Texas digital marketing framework: Discovery, Strategy, Implementation, Reporting, and Ongoing Support for small and mid-sized Texas businesses.',
    url: '/process',
  },
}

export default function ProcessPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-16">
        {/* Page hero */}
        <div
          className="py-20 lg:py-28"
          style={{ backgroundColor: '#181f4a' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-4">
              Our Process
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              How We Drive{' '}
              <span style={{ color: '#2ea3f2' }}>Results for Texas Businesses</span>
            </h1>
            <p className="text-[#8892b0] text-lg max-w-2xl mx-auto leading-relaxed">
              A proven, repeatable framework that turns your digital presence into measurable business growth — with full transparency at every step.
            </p>
          </div>
        </div>

        <ProcessSection />
        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
