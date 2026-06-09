import type { Metadata } from 'next'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import ContactSection from '@/components/contact-section'
import VerifiedProfiles from '@/components/verified-profiles'

export const metadata: Metadata = {
  title: 'Contact TXPAGES | Free Texas Business Visibility Report | 254-968-0162',
  description:
    'Contact TXPAGES in Stephenville, TX for a free digital visibility audit. We serve small and mid-sized Texas businesses with SEO, PPC, web design, and local marketing. Call 254-968-0162.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact TXPAGES | Free Texas Business Visibility Report',
    description:
      'Get a no-obligation audit of your online presence. TXPAGES serves Texas businesses from Stephenville, TX. Call 254-968-0162 or submit our contact form.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-16">
        {/* Page hero */}
        <div
          className="py-20 lg:py-24"
          style={{ backgroundColor: '#0f1530' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-4">
              Get in Touch
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Request Your Free{' '}
              <span style={{ color: '#2ea3f2' }}>Visibility Report</span>
            </h1>
            <p className="text-[#8892b0] text-lg max-w-2xl mx-auto leading-relaxed">
              Tell us about your Texas business. We will audit your online presence, identify growth opportunities, and share a clear, no-obligation roadmap — completely free.
            </p>
          </div>
        </div>

        <ContactSection />
        <VerifiedProfiles />
      </main>
      <SiteFooter />
    </>
  )
}
