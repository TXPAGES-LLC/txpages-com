import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import CTABanner from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Highland Lakes, TX | TXPAGES Online Solutions',
  description:
    'TXPAGES provides SEO, PPC, web design, local listings management, content marketing, and monthly reporting to businesses in the Highland Lakes region of Texas. Call 254-968-0162.',
  keywords:
    'digital marketing Highland Lakes TX, SEO Marble Falls Texas, web design Burnet County, PPC Highland Lakes, local SEO Marble Falls Burnet Llano, TXPAGES Highland Lakes',
  alternates: { canonical: '/areas/highland-lakes-tx' },
  openGraph: {
    title: 'Digital Marketing Services in Highland Lakes, TX | TXPAGES',
    description:
      'Complete digital marketing for Highland Lakes region businesses — serving Marble Falls, Burnet, Llano, Kingsland, and surrounding Texas Hill Country lake communities.',
    url: '/areas/highland-lakes-tx',
  },
}

const SERVICES = [
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    accentColor: '#2ea3f2',
    description:
      "The Highland Lakes region spans multiple communities — Marble Falls, Burnet, Llano, Kingsland, and beyond — each with its own mix of tourism, retirees, and year-round residents. We build websites that capture visitors searching for lake experiences, local services, and Hill Country businesses, with fast load times and clean mobile layouts that work as well on a phone at the lake as they do on a desktop.",
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    accentColor: '#2ea3f2',
    description:
      'Highland Lakes businesses compete for search traffic from Austin day-trippers, lake house owners, and permanent residents scattered across Burnet, Llano, and San Saba counties. We build SEO strategies that cover the full geographic range of your customer base — targeting the right keyword combinations for each community you serve.',
  },
  {
    slug: 'ppc',
    title: 'Pay-Per-Click (PPC) Advertising',
    accentColor: '#be1f32',
    description:
      'Weekend visitors and seasonal lake residents are searching for restaurants, marinas, home services, and activities throughout the Highland Lakes corridor. We build Google Ads campaigns that reach those high-intent searchers at the right moment — with geographic radius targeting and seasonal bid adjustments that reflect the rhythm of the lake market.',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO & Listings Management',
    accentColor: '#be1f32',
    description:
      'Visitors and residents across the Highland Lakes region rely heavily on Google Maps to find businesses. We optimize your Google Business Profile for your specific lake community, manage your online reputation so every review reflects your business at its best, build consistent citations across tourism directories and general listing platforms, and implement review strategies that build trust with both locals and visitors.',
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    accentColor: '#974df3',
    description:
      'The Highland Lakes region has a strong destination identity — content that speaks to the lake lifestyle, outdoor recreation, and Hill Country character performs well in search and social. We create SEO-optimized content that connects your business to the topics your customers are already searching for, whether they are planning a lake trip or looking for a local contractor.',
  },
  {
    slug: 'reporting-support',
    title: 'Monthly Reporting & Ongoing Support',
    accentColor: '#974df3',
    description:
      "Seasonal traffic patterns in the Highland Lakes area mean your marketing strategy needs to adapt throughout the year. Our monthly reports show you how rankings, traffic, and leads shift with the seasons, and our quarterly reviews help you plan campaigns around peak and shoulder periods so you are never caught flat-footed.",
  },
]

const FAQS = [
  {
    q: 'Does TXPAGES serve businesses across the entire Highland Lakes region?',
    a: 'Yes. We work with businesses in Marble Falls, Burnet, Llano, Kingsland, Horseshoe Bay, Buchanan Dam, and other communities throughout the Highland Lakes corridor.',
  },
  {
    q: 'How do you handle SEO across multiple lake communities?',
    a: 'We build location-specific landing pages, optimize your Google Business Profile with service area designations, and create content targeting the specific communities and search terms relevant to your customer base across the region.',
  },
  {
    q: 'Is PPC effective in a tourist-driven market like Highland Lakes?',
    a: 'Very much so. Visitors actively searching for restaurants, activities, boat rentals, and accommodations convert at high rates when your ad appears at the right moment. We structure campaigns to capture both drive-by visitor searches and planned-trip searches from Austin and San Antonio.',
  },
  {
    q: 'Can TXPAGES help with a business that has multiple locations in the lake region?',
    a: "Yes. We manage multi-location digital marketing with separate Google Business Profiles for each location, location-specific SEO landing pages, and coordinated reporting that shows you performance at both the location and regional level.",
  },
  {
    q: 'What is the typical timeline to see results in the Highland Lakes market?',
    a: 'For local SEO, Google Business Profile optimization, and reputation management, businesses typically see improved visibility within 30–60 days. Organic SEO for competitive terms takes 90–180 days, while PPC campaigns can generate leads within the first week of launch.',
  },
]

export default function HighlandLakesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-16">

        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#212e64' }} aria-labelledby="city-hero-heading">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-[#8892b0]" role="list">
                <li><Link href="/" className="hover:text-[#2ea3f2] transition-colors">Home</Link></li>
                <li aria-hidden="true"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                <li><span className="cursor-default">Areas We Serve</span></li>
                <li aria-hidden="true"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                <li className="text-white font-medium" aria-current="page">Highland Lakes, TX</li>
              </ol>
            </nav>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="flex-1 min-w-0">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-4">Areas We Serve</span>
                <h1 id="city-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-balance leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Digital Marketing Services in{' '}
                  <span style={{ color: '#2ea3f2' }}>Highland Lakes, TX</span>
                </h1>
                <p className="text-[#8892b0] text-lg leading-relaxed mb-8 max-w-xl">
                  TXPAGES helps businesses across the Highland Lakes region — Marble Falls, Burnet, Llano, Kingsland, and beyond — get found online by both local residents and the visitors drawn to the Texas Hill Country lakes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-white text-sm transition-colors" style={{ backgroundColor: '#2ea3f2' }} aria-label="Get a free digital marketing visibility report for your Highland Lakes business">
                    Get Your Free Visibility Report
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                  <a href="tel:2549680162" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-sm border border-[#2a3870] text-[#ccd6f6] hover:border-[#2ea3f2]/50 hover:text-white transition-colors" aria-label="Call TXPAGES at 254-968-0162">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    254-968-0162
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-[45%] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden border border-[#2a3870]" style={{ boxShadow: '0 16px 48px rgba(46,163,242,0.12)' }}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220000!2d-98.2700!3d30.5780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2d3a3a3a3a3b%3A0x1!2sMarble%20Falls%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000003" width="100%" height="340" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Highland Lakes region map centered on Marble Falls, TX" aria-label="Google Map of the Highland Lakes region, TX" />
                </div>
                <p className="text-xs text-[#8892b0] mt-3 text-center">Serving the Highland Lakes Region — Marble Falls, Burnet, Llano &amp; surrounding communities</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20" style={{ backgroundColor: '#0f1530' }} aria-labelledby="local-intro-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="local-intro-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Serving the Highland Lakes Region
            </h2>
            <div className="space-y-4 text-[#8892b0] text-base leading-relaxed">
              <p>
                The Highland Lakes region — stretching from Lake Buchanan and Lake LBJ down through Lake Marble Falls and the surrounding Hill Country communities — is one of Central Texas&apos;s most active tourism and recreation corridors. It is also home to a growing permanent population and a diverse base of local businesses.
              </p>
              <p>
                Businesses in this region face a challenge most urban agencies do not understand: you need to rank for local resident searches year-round while also capturing seasonal visitor and weekend traffic from Austin, San Antonio, and beyond. TXPAGES builds strategies that address both audiences.
              </p>
              <p>
                We serve businesses throughout Marble Falls, Burnet, Llano, Kingsland, Horseshoe Bay, Buchanan Dam, Bertram, and other communities in the Highland Lakes area — delivering digital marketing that fits the character and pace of Hill Country business.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ backgroundColor: '#181f4a' }} aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">What We Offer</span>
              <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                All Services Available in the Highland Lakes Region, TX
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              {SERVICES.map((service, i) => (
                <article key={service.slug} className="rounded-2xl border border-[#2a3870] bg-[#1e2a5e] overflow-hidden" aria-labelledby={`service-heading-${i}`}>
                  <div className="h-1 w-full" style={{ backgroundColor: service.accentColor }} aria-hidden="true" />
                  <div className="p-8 sm:p-10">
                    <h3 id={`service-heading-${i}`} className="text-xl sm:text-2xl font-bold text-white mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title} in Highland Lakes, TX
                    </h3>
                    <p className="text-[#8892b0] leading-relaxed mb-6 max-w-3xl">{service.description}</p>
                    <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-bold transition-colors" style={{ color: service.accentColor }} aria-label={`Learn more about ${service.title} from TXPAGES`}>
                      Learn about our {service.title} service
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: '#0f1530' }} aria-labelledby="mid-cta-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="mid-cta-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to grow your Highland Lakes business online?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Request a free visibility report and see exactly where your business stands in Highland Lakes region search results — and what steps would bring more customers through your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-white text-sm transition-colors" style={{ backgroundColor: '#2ea3f2' }}>Get Your Free Visibility Report</a>
              <a href="tel:2549680162" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-sm border border-[#2a3870] text-[#ccd6f6] hover:border-[#2ea3f2]/50 hover:text-white transition-colors">Call 254-968-0162</a>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ backgroundColor: '#181f4a' }} aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">Common Questions</span>
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-white text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                FAQ — Digital Marketing in the Highland Lakes Region, TX
              </h2>
            </div>
            <dl className="flex flex-col gap-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="rounded-xl border border-[#2a3870] bg-[#1e2a5e] p-7">
                  <dt className="text-base font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>{faq.q}</dt>
                  <dd className="text-[#8892b0] text-sm leading-relaxed">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TXPAGES Online Solutions', '@id': 'https://maps.google.com/?cid=905136393401498971', url: '', telephone: '+12549680162', hasMap: 'https://maps.google.com/?cid=905136393401498971', address: { '@type': 'PostalAddress', streetAddress: '164 N Graham', addressLocality: 'Stephenville', addressRegion: 'TX', postalCode: '76401', addressCountry: 'US' }, areaServed: { '@type': 'Place', name: 'Highland Lakes Region, Texas', sameAs: 'https://en.wikipedia.org/wiki/Highland_Lakes_(Texas)' }, makesOffer: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${s.title} in Highland Lakes, TX`, url: `/services/${s.slug}` } })) }) }} />

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
