import Link from 'next/link'
import type { ServiceData } from '@/lib/services-data'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import CTABanner from '@/components/cta-banner'

export default function ServicePageLayout({ service }: { service: ServiceData }) {
  const { accentColor } = service

  return (
    <>
      <SiteNav />
      <main id="main-content">
        {/* Hero */}
        <section
          className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden"
          style={{ backgroundColor: '#212e64' }}
          aria-labelledby="service-hero-heading"
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-[#8892b0]" role="list">
                <li>
                  <Link href="/" className="hover:text-[#2ea3f2] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-[#2ea3f2] transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium" aria-current="page">
                  {service.shortTitle}
                </li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: accentColor }}
                >
                  {service.tagline}
                </span>
                <h1
                  id="service-hero-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {service.heroHeading}
                </h1>
                <p className="text-[#8892b0] text-lg leading-relaxed mb-8">
                  {service.heroSubheading}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-white text-sm transition-colors"
                    style={{ backgroundColor: accentColor }}
                    aria-label={service.cta}
                  >
                    {service.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <a
                    href="tel:2549680162"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-sm border border-[#2a3870] text-[#ccd6f6] hover:border-[#2ea3f2]/50 hover:text-white transition-colors"
                    aria-label="Call TXPAGES at 254-968-0162"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    254-968-0162
                  </a>
                </div>
              </div>

              {/* Hero image */}
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-2xl opacity-10"
                  style={{ backgroundColor: accentColor }}
                  aria-hidden="true"
                />
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="relative w-full mx-auto rounded-xl object-cover"
                  style={{ maxHeight: '400px' }}
                  fetchPriority="high"
                  width={640}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: '#0f1530' }}
          aria-labelledby="benefits-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
                What You Get
              </span>
              <h2
                id="benefits-heading"
                className="text-3xl sm:text-4xl font-bold text-white text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Why Texas Businesses Choose TXPAGES for{' '}
                <span style={{ color: accentColor }}>{service.shortTitle}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#2a3870] bg-[#1e2a5e] p-7"
                >
                  <div
                    className="w-8 h-1 rounded-full mb-4"
                    style={{ backgroundColor: accentColor }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {benefit.heading}
                  </h3>
                  <p className="text-[#8892b0] text-sm leading-relaxed">{benefit.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: '#181f4a' }}
          aria-labelledby="features-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
                Our Approach
              </span>
              <h2
                id="features-heading"
                className="text-3xl sm:text-4xl font-bold text-white text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Everything Included in Our{' '}
                <span style={{ color: accentColor }}>{service.shortTitle}</span> Service
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#2a3870] bg-[#1e2a5e]/60 p-6 text-center flex flex-col items-center"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[#8892b0] text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section
          className="py-16"
          style={{ backgroundColor: '#0f1530' }}
          aria-labelledby="related-services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="related-services-heading"
              className="text-xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Explore More TXPAGES Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {(['web-design', 'seo', 'ppc', 'local-seo', 'content-marketing', 'reporting-support'] as const)
                .filter((slug) => slug !== service.slug)
                .map((slug) => {
                  const labels: Record<string, string> = {
                    'web-design': 'Web Design',
                    'seo': 'SEO',
                    'ppc': 'PPC Management',
                    'local-seo': 'Local SEO',
                    'content-marketing': 'Content Marketing',
                    'reporting-support': 'Reporting & Support',
                  }
                  return (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      className="px-4 py-2 rounded-md border border-[#2a3870] text-sm text-[#8892b0] hover:text-white hover:border-[#2ea3f2]/50 transition-colors"
                    >
                      {labels[slug]}
                    </Link>
                  )
                })}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
