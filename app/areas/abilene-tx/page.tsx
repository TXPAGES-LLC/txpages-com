import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import CTABanner from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Abilene, TX | TXPAGES Online Solutions',
  description:
    'TXPAGES provides SEO, PPC, web design, local listings management, content marketing, and monthly reporting to businesses in Abilene, TX. Call 254-968-0162 for a free visibility report.',
  keywords:
    'digital marketing Abilene TX, SEO Abilene Texas, web design Abilene, PPC Abilene TX, local SEO Abilene Taylor County, TXPAGES Abilene Texas',
  alternates: { canonical: '/areas/abilene-tx' },
  openGraph: {
    title: 'Digital Marketing Services in Abilene, TX | TXPAGES',
    description:
      'Complete digital marketing for Abilene, TX businesses — SEO, PPC, web design, local listings, and content marketing. Serving Taylor County and the Big Country region.',
    url: '/areas/abilene-tx',
  },
}

const SERVICES = [
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    accentColor: '#2ea3f2',
    description:
      "Abilene is the economic and cultural anchor of the Big Country — serving Taylor, Jones, Callahan, and surrounding counties. Your website needs to represent that reach. We build professional, fast-loading websites for Abilene businesses that are optimized for local search, designed to convert visitors from across the region, and built on a technical foundation that supports long-term growth in Google rankings.",
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    accentColor: '#2ea3f2',
    description:
      "Abilene's three universities — Abilene Christian, Hardin-Simmons, and McMurry — along with Dyess Air Force Base create a diverse and substantial local search audience. We build SEO strategies calibrated to the full spectrum of that audience — from military families searching for local services to students and faculty looking for restaurants, healthcare, and retail.",
  },
  {
    slug: 'ppc',
    title: 'Pay-Per-Click (PPC) Advertising',
    accentColor: '#be1f32',
    description:
      "Abilene's role as the Big Country's regional hub means high search volume for categories where your business may compete with options from surrounding smaller towns. We build Google Ads campaigns that position your Abilene business as the clear regional choice — with geographic targeting, competitive ad copy, and disciplined budget management that keeps your cost-per-lead under control.",
  },
  {
    slug: 'local-seo',
    title: 'Local SEO & Listings Management',
    accentColor: '#be1f32',
    description:
      "From Dyess personnel searching for services near the base to families from Sweetwater or Snyder looking for the best option in Abilene, your Google Business Profile, online reputation, and directory listings are critical first impressions. We optimize every element of your local presence — profile completeness, reputation monitoring, photo strategy, review generation, and citation consistency across 50+ platforms.",
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    accentColor: '#974df3',
    description:
      "Abilene has a strong sense of regional identity — the Big Country, the university communities, the military presence, the agricultural economy. We create content that speaks authentically to that identity while targeting the search terms your customers use when looking for businesses like yours in Abilene and the surrounding area.",
  },
  {
    slug: 'reporting-support',
    title: 'Monthly Reporting & Ongoing Support',
    accentColor: '#974df3',
    description:
      "Every month you receive a clear performance report covering rankings, traffic, and leads — calibrated to the competitive reality of the Abilene market. Quarterly strategy reviews ensure your campaigns adapt to seasonal patterns and market changes in the Big Country, and our team is always available when you need direct support.",
  },
]

const FAQS = [
  {
    q: 'Does TXPAGES serve businesses in Abilene, TX?',
    a: 'Yes. We work with businesses throughout Abilene and Taylor County, as well as businesses that serve the broader Big Country region including Jones, Callahan, Nolan, and surrounding counties.',
  },
  {
    q: 'How does having three universities affect local SEO in Abilene?',
    a: 'It creates a dynamic, transient audience alongside the permanent population. We build strategies that capture both — ranking your business for searches made by long-term Abilene residents and the rotating student and faculty population at ACU, Hardin-Simmons, and McMurry.',
  },
  {
    q: 'Can TXPAGES help businesses that serve military families near Dyess AFB?',
    a: "Absolutely. We understand the search behavior of military families — who often search from out of state before PCS-ing to Abilene — and we build content and local SEO strategies that capture that audience before they even arrive in Taylor County.",
  },
  {
    q: 'Is Abilene a competitive market for Google Ads?',
    a: 'Moderately. Cost-per-click in Abilene is lower than in the DFW Metroplex, but competitive enough in high-demand categories that campaigns need to be well-structured to avoid wasted spend. We build tightly targeted campaigns that protect your budget.',
  },
  {
    q: 'How does TXPAGES approach marketing for a regional hub like Abilene?',
    a: 'We treat Abilene as both a local market and a regional draw — building strategies that rank you for Abilene-specific searches while also capturing customers from Sweetwater, Snyder, Cisco, Eastland, and other Big Country communities that look to Abilene for goods and services.',
  },
]

export default function AbilenePage() {
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
                <li className="text-white font-medium" aria-current="page">Abilene, TX</li>
              </ol>
            </nav>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="flex-1 min-w-0">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-4">Areas We Serve</span>
                <h1 id="city-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-balance leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Digital Marketing Services in{' '}
                  <span style={{ color: '#2ea3f2' }}>Abilene, TX</span>
                </h1>
                <p className="text-[#8892b0] text-lg leading-relaxed mb-8 max-w-xl">
                  TXPAGES helps Abilene businesses build a dominant digital presence across the Big Country — serving Taylor County locals, university communities, military families near Dyess AFB, and customers from across the region.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-white text-sm transition-colors" style={{ backgroundColor: '#2ea3f2' }} aria-label="Get a free digital marketing visibility report for your Abilene business">
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109000!2d-99.7331!3d32.4487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865a3b3b3b3b3b3c%3A0x1!2sAbilene%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000006" width="100%" height="340" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Abilene, TX city center map" aria-label="Google Map of Abilene, TX" />
                </div>
                <p className="text-xs text-[#8892b0] mt-3 text-center">Serving Abilene &amp; the Big Country Region, TX</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20" style={{ backgroundColor: '#0f1530' }} aria-labelledby="local-intro-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="local-intro-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Serving Abilene &amp; the Big Country
            </h2>
            <div className="space-y-4 text-[#8892b0] text-base leading-relaxed">
              <p>
                Abilene is the commercial, healthcare, and cultural center for a vast stretch of West Texas — drawing customers from Taylor, Jones, Callahan, Nolan, Shackelford, and surrounding counties. For businesses here, digital marketing that captures that regional draw is not a luxury; it is a competitive necessity.
              </p>
              <p>
                With three universities, Dyess Air Force Base, and a strong healthcare sector anchored by Hendrick Medical Center, Abilene has a diverse and substantial customer base. TXPAGES builds digital marketing strategies that reach the full spectrum of that audience — from permanent Taylor County residents to transient military and student populations.
              </p>
              <p>
                We bring the same level of strategic focus to Abilene that we bring to every Texas market we serve — city-specific strategies grounded in how Big Country customers actually search, not a generic template adapted from a coastal agency playbook.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ backgroundColor: '#181f4a' }} aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">What We Offer</span>
              <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                All Services Available in Abilene, TX
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              {SERVICES.map((service, i) => (
                <article key={service.slug} className="rounded-2xl border border-[#2a3870] bg-[#1e2a5e] overflow-hidden" aria-labelledby={`service-heading-${i}`}>
                  <div className="h-1 w-full" style={{ backgroundColor: service.accentColor }} aria-hidden="true" />
                  <div className="p-8 sm:p-10">
                    <h3 id={`service-heading-${i}`} className="text-xl sm:text-2xl font-bold text-white mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title} in Abilene, TX
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
              Ready to grow your Abilene business online?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Request a free visibility report and see exactly where your Abilene business stands in Big Country search results — and what it would take to become the top-ranked choice in your category.
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
                FAQ — Digital Marketing in Abilene, TX
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

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TXPAGES Online Solutions', '@id': 'https://maps.google.com/?cid=905136393401498971', url: '', telephone: '+12549680162', hasMap: 'https://maps.google.com/?cid=905136393401498971', address: { '@type': 'PostalAddress', streetAddress: '164 N Graham', addressLocality: 'Stephenville', addressRegion: 'TX', postalCode: '76401', addressCountry: 'US' }, areaServed: { '@type': 'City', name: 'Abilene', sameAs: 'https://en.wikipedia.org/wiki/Abilene,_Texas' }, makesOffer: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${s.title} in Abilene, TX`, url: `/services/${s.slug}` } })) }) }} />

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
