import type { Metadata } from 'next'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import WhyTXPAGESSection from '@/components/why-txpages-section'
import CTABanner from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Why Choose TXPAGES | Texas Digital Marketing Partner | Stephenville, TX',
  description:
    'Discover why hundreds of Texas businesses trust TXPAGES for SEO, PPC, web design, and local marketing. Local expertise, AI-powered strategies, transparent reporting, and no long-term lock-ins.',
  alternates: { canonical: '/why-txpages' },
  openGraph: {
    title: 'Why Choose TXPAGES | Texas Digital Marketing Partner',
    description:
      'Local Texas expertise, AI-powered digital marketing, complete one-stop partnership, and proven results for small and mid-sized Texas businesses.',
    url: '/why-txpages',
  },
}

export default function WhyTXPAGESPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-16">
        {/* Page hero */}
        <div
          className="py-20 lg:py-28"
          style={{ backgroundColor: '#0f1530' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left: copy */}
              <div className="flex-1 min-w-0">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-4">
                  Why Choose TXPAGES
                </span>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Rank Higher. Get Found.{' '}
                  <span style={{ color: '#2ea3f2' }}>Grow Your Texas Business.</span>
                </h1>
                <p className="text-[#8892b0] text-lg leading-relaxed mb-8">
                  Hundreds of Texas businesses trust TXPAGES for SEO, PPC, web design, local listings, and content marketing — all under one roof. Local expertise, AI-powered strategies, transparent reporting, and no long-term lock-ins.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-white text-sm transition-colors"
                    style={{ backgroundColor: '#2ea3f2' }}
                    aria-label="Get your free Texas digital marketing visibility report from TXPAGES"
                  >
                    Get Your Free Visibility Report
                  </a>
                  <a
                    href="/services/seo"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm border transition-colors"
                    style={{ borderColor: '#2a3870', color: '#ccd6f6' }}
                    aria-label="Explore TXPAGES Texas SEO services"
                  >
                    Explore Our Services
                  </a>
                </div>
              </div>

              {/* Right: image */}
              <div className="flex-shrink-0 w-full lg:w-[52%]">
                <img
                  src="/why-txpages.png"
                  alt="TXPAGES Online Solutions — Texas local SEO ranking map with Dallas, Austin, Houston, San Antonio pins; professional website design; data-driven analytics dashboard showing 15,230 visits and 1,256 leads; and TX Business Directory listing management"
                  width={1316}
                  height={877}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto rounded-2xl"
                  style={{ boxShadow: '0 24px 80px rgba(46,163,242,0.15)' }}
                />
              </div>
            </div>
          </div>
        </div>

        <WhyTXPAGESSection />
        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
