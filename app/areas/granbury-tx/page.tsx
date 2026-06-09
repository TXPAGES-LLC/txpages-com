import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import CTABanner from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Granbury, TX | TXPAGES Online Solutions',
  description:
    'TXPAGES provides SEO, PPC, web design, local listings management, content marketing, and monthly reporting to businesses in Granbury, TX. Call 254-968-0162 for a free visibility report.',
  keywords:
    'digital marketing Granbury TX, SEO Granbury Texas, web design Granbury, PPC Granbury TX, local SEO Granbury, TXPAGES Granbury Hood County',
  alternates: { canonical: '/areas/granbury-tx' },
  openGraph: {
    title: 'Digital Marketing Services in Granbury, TX | TXPAGES',
    description:
      'Complete digital marketing for Granbury, TX businesses — SEO, PPC, web design, local listings, and content marketing. Serving Hood County and the Lake Granbury area.',
    url: '/areas/granbury-tx',
  },
}

const SERVICES = [
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    accentColor: '#2ea3f2',
    description:
      'Granbury has a tourism economy, a historic downtown square, and a growing residential base — all of which means your website needs to appeal to multiple audiences at once. We design sites that are visually polished, fast on mobile, and built with the structured content Google needs to rank them. Whether you run a lakefront resort, a restaurant on the square, or a local service company, your site will make the right impression.',
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    accentColor: '#2ea3f2',
    description:
      'Hood County search volume for local businesses grows every year as more DFW residents relocate to the Granbury area. We build SEO strategies that capture that traffic — through technical optimization, targeted content, and link building that establishes your site as the authoritative answer for searches in Granbury and surrounding Hood County communities.',
  },
  {
    slug: 'ppc',
    title: 'Pay-Per-Click (PPC) Advertising',
    accentColor: '#be1f32',
    description:
      'Lake Granbury tourism and the steady flow of DFW residents moving to Hood County create a consistent pool of high-intent searchers. We build Google Ads campaigns that capture that demand at the exact moment of search, with geographic targeting, conversion-focused ad copy, and transparent reporting on cost-per-lead.',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO & Listings Management',
    accentColor: '#be1f32',
    description:
      "Hood County residents and visitors use Google Maps and \"near me\" searches constantly. We make sure your Google Business Profile is fully optimized, your online reputation is actively managed, your citations are consistent across all major directories, and your review strategy is generating the kind of social proof that converts searchers into customers in Granbury.",
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    accentColor: '#974df3',
    description:
      'Content tailored to Granbury audiences — lake activities, historic downtown, local events, Hood County living — can drive significant organic traffic from both locals and visitors. We write SEO-optimized content that addresses the specific questions your Granbury-area customers are searching for, building your site into a trusted resource.',
  },
  {
    slug: 'reporting-support',
    title: 'Monthly Reporting & Ongoing Support',
    accentColor: '#974df3',
    description:
      "Every month you receive a clear report on rankings, traffic, and leads — no jargon, no inflated metrics. Quarterly reviews keep your strategy aligned with seasonal patterns in Granbury's tourism-influenced market, and our team is always available when you need guidance.",
  },
]

const FAQS = [
  {
    q: 'Does TXPAGES serve businesses in Granbury, TX?',
    a: 'Yes. We serve businesses throughout Hood County and the greater Granbury area, including the Lake Granbury shoreline communities, downtown Granbury, and surrounding residential neighborhoods.',
  },
  {
    q: 'Is local SEO different for a tourism-heavy market like Granbury?',
    a: "Yes. Granbury's seasonal tourism adds a layer of complexity — you need to rank for both resident searches year-round and visitor searches during peak seasons. We build strategies that address both audiences simultaneously.",
  },
  {
    q: 'How quickly can TXPAGES build and launch a website for a Granbury business?',
    a: 'For most small to mid-sized businesses, we can build and launch a fully optimized website within three to five weeks. Rush timelines are available for businesses that need to go live faster.',
  },
  {
    q: 'Can TXPAGES help with reputation management in Granbury?',
    a: "Absolutely. We implement review generation campaigns that encourage satisfied customers to leave Google reviews, and we help you respond to and manage your existing reviews — a critical factor in Granbury's word-of-mouth-driven community.",
  },
  {
    q: 'What industries do you serve in Granbury?',
    a: "We work with hospitality and lodging businesses, restaurants, retail shops, home services contractors, real estate professionals, medical practices, and many other business types throughout Hood County and the Lake Granbury area.",
  },
]

export default function GranburyPage() {
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
                <li className="text-white font-medium" aria-current="page">Granbury, TX</li>
              </ol>
            </nav>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="flex-1 min-w-0">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-4">Areas We Serve</span>
                <h1 id="city-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-balance leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Digital Marketing Services in{' '}
                  <span style={{ color: '#2ea3f2' }}>Granbury, TX</span>
                </h1>
                <p className="text-[#8892b0] text-lg leading-relaxed mb-8 max-w-xl">
                  TXPAGES helps Granbury businesses get found online by both local residents and the visitors drawn to Lake Granbury and the historic downtown square — with SEO, PPC, and web design built for Hood County&apos;s unique market.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-white text-sm transition-colors" style={{ backgroundColor: '#2ea3f2' }} aria-label="Get a free digital marketing visibility report for your Granbury business">
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53872!2d-97.7974!3d32.4418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7b4b4b4b4b4b%3A0x1!2sGranbury%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000002" width="100%" height="340" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Granbury, TX city center map" aria-label="Google Map of Granbury, TX" />
                </div>
                <p className="text-xs text-[#8892b0] mt-3 text-center">Serving Granbury &amp; Hood County, TX</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20" style={{ backgroundColor: '#0f1530' }} aria-labelledby="local-intro-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="local-intro-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Serving Granbury &amp; Hood County Businesses
            </h2>
            <div className="space-y-4 text-[#8892b0] text-base leading-relaxed">
              <p>
                Granbury is one of Central Texas&apos;s most distinctive markets — a historic downtown square, a thriving lakefront tourism economy, and a rapidly growing residential base fueled by DFW relocation. That mix creates a competitive digital landscape where local businesses need more than a basic website to stand out.
              </p>
              <p>
                TXPAGES builds digital marketing strategies tailored to the Hood County market. We understand the seasonal nature of Lake Granbury tourism, the year-round needs of local service businesses, and the way new residents discover businesses when they arrive from the Metroplex.
              </p>
              <p>
                From Granbury&apos;s historic square to the lake communities along the shoreline, we help businesses of all sizes build the kind of online visibility that drives real foot traffic and qualified leads.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ backgroundColor: '#181f4a' }} aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">What We Offer</span>
              <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                All Services Available in Granbury, TX
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              {SERVICES.map((service, i) => (
                <article key={service.slug} className="rounded-2xl border border-[#2a3870] bg-[#1e2a5e] overflow-hidden" aria-labelledby={`service-heading-${i}`}>
                  <div className="h-1 w-full" style={{ backgroundColor: service.accentColor }} aria-hidden="true" />
                  <div className="p-8 sm:p-10">
                    <h3 id={`service-heading-${i}`} className="text-xl sm:text-2xl font-bold text-white mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title} in Granbury, TX
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
              Ready to grow your Granbury business online?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Get a free visibility report and see where your Granbury business stands in local search — and what it would take to reach more customers in Hood County.
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
                FAQ — Digital Marketing in Granbury, TX
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

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TXPAGES Online Solutions', '@id': 'https://maps.google.com/?cid=905136393401498971', url: '', telephone: '+12549680162', hasMap: 'https://maps.google.com/?cid=905136393401498971', address: { '@type': 'PostalAddress', streetAddress: '164 N Graham', addressLocality: 'Stephenville', addressRegion: 'TX', postalCode: '76401', addressCountry: 'US' }, areaServed: { '@type': 'City', name: 'Granbury', sameAs: 'https://en.wikipedia.org/wiki/Granbury,_Texas' }, makesOffer: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${s.title} in Granbury, TX`, url: `/services/${s.slug}` } })) }) }} />

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
