import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import CTABanner from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Temple, TX | TXPAGES Online Solutions',
  description:
    'TXPAGES provides SEO, PPC, web design, local listings management, content marketing, and monthly reporting to businesses in Temple, TX. Call 254-968-0162 for a free visibility report.',
  keywords:
    'digital marketing Temple TX, SEO Temple Texas, web design Temple, PPC Temple TX, local SEO Temple Bell County, TXPAGES Temple Texas',
  alternates: { canonical: '/areas/temple-tx' },
  openGraph: {
    title: 'Digital Marketing Services in Temple, TX | TXPAGES',
    description:
      'Complete digital marketing for Temple, TX businesses — SEO, PPC, web design, local listings, and content marketing. Serving Bell County and the Central Texas I-35 corridor.',
    url: '/areas/temple-tx',
  },
}

const SERVICES = [
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    accentColor: '#2ea3f2',
    description:
      "Temple's position along the I-35 corridor — between Austin and Waco — means your website competes for attention from a large and economically diverse population. We build fast, conversion-optimized websites for Temple businesses that rank well in Bell County searches, load instantly on mobile, and are built with the technical foundation needed for long-term SEO performance.",
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    accentColor: '#2ea3f2',
    description:
      "Bell County is one of the fastest-growing counties in Texas, and Temple's business base is expanding accordingly. We build SEO strategies that help Temple businesses establish strong rankings before competition intensifies further — targeting the keyword clusters your customers use across healthcare, retail, home services, and other high-demand industries in the area.",
  },
  {
    slug: 'ppc',
    title: 'Pay-Per-Click (PPC) Advertising',
    accentColor: '#be1f32',
    description:
      "Temple's healthcare sector — anchored by Baylor Scott & White — draws patients and healthcare-adjacent businesses from across Central Texas. We build Google Ads campaigns that reach the right customers at the right moment, whether you serve the local residential base, hospital-adjacent industries, or the broader Bell County market.",
  },
  {
    slug: 'local-seo',
    title: 'Local SEO & Listings Management',
    accentColor: '#be1f32',
    description:
      'With Temple, Belton, and Killeen forming a dense urban cluster in Bell County, local SEO competition is meaningful. We optimize your Google Business Profile, manage your online reputation, build citation consistency across 50+ directories, and implement a review generation program that differentiates your Temple business from the competition in local pack results.',
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    accentColor: '#974df3',
    description:
      "Temple's growth means a constant influx of new residents who are actively searching for local businesses and services. We create targeted content that captures those new-to-area searches — positioning your business as the established, trustworthy choice for people still learning the local market.",
  },
  {
    slug: 'reporting-support',
    title: 'Monthly Reporting & Ongoing Support',
    accentColor: '#974df3',
    description:
      "In a fast-growing market like Temple, staying ahead means monitoring and adjusting constantly. Our monthly reports give you a clear picture of performance, and our quarterly reviews ensure your strategy keeps pace with the changes in Bell County's competitive landscape.",
  },
]

const FAQS = [
  {
    q: 'Does TXPAGES serve businesses in Temple, TX?',
    a: 'Yes. We work with businesses throughout Temple, Belton, and the broader Bell County area. We understand the I-35 corridor market and the specific competitive dynamics of the Temple-Belton-Killeen region.',
  },
  {
    q: 'Is SEO competitive in Temple compared to larger Texas cities?',
    a: "It's more competitive than smaller markets but less saturated than Austin or Dallas. Temple's rapid growth means competition for search rankings is increasing, which makes now a good time to build your SEO foundation before it becomes significantly harder.",
  },
  {
    q: 'Can TXPAGES help healthcare-adjacent businesses in Temple?',
    a: "Yes. We have experience marketing healthcare and healthcare-adjacent businesses — including medical practices, therapy providers, pharmaceutical services, and businesses that serve the Baylor Scott & White community and employee base.",
  },
  {
    q: 'How do you target new residents who are searching for businesses in Temple?',
    a: 'We create content specifically targeting new-resident search patterns — "best [service] in Temple TX," "where to find [product] near Temple," and similar queries that people use when they arrive in a new area and start building their local vendor network.',
  },
  {
    q: 'What is included in a free visibility report for a Temple business?',
    a: 'The report covers your current Google rankings for key terms, your Google Business Profile completeness score, your citation consistency across major directories, and a competitive overview showing where nearby competitors are outranking you.',
  },
]

export default function TemplePage() {
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
                <li className="text-white font-medium" aria-current="page">Temple, TX</li>
              </ol>
            </nav>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="flex-1 min-w-0">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-4">Areas We Serve</span>
                <h1 id="city-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-balance leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Digital Marketing Services in{' '}
                  <span style={{ color: '#2ea3f2' }}>Temple, TX</span>
                </h1>
                <p className="text-[#8892b0] text-lg leading-relaxed mb-8 max-w-xl">
                  TXPAGES helps Temple businesses stand out in one of Central Texas&apos;s fastest-growing markets — with SEO, PPC, and web design strategies built for the Bell County competitive landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-white text-sm transition-colors" style={{ backgroundColor: '#2ea3f2' }} aria-label="Get a free digital marketing visibility report for your Temple TX business">
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54000!2d-97.3428!3d31.0982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f82c0c0c0c0c1%3A0x1!2sTemple%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000005" width="100%" height="340" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Temple, TX city center map" aria-label="Google Map of Temple, TX" />
                </div>
                <p className="text-xs text-[#8892b0] mt-3 text-center">Serving Temple &amp; Bell County, TX</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20" style={{ backgroundColor: '#0f1530' }} aria-labelledby="local-intro-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="local-intro-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Serving Temple &amp; Bell County Businesses
            </h2>
            <div className="space-y-4 text-[#8892b0] text-base leading-relaxed">
              <p>
                Temple sits at the heart of the Central Texas I-35 corridor and is home to one of the most significant healthcare campuses in the state. Bell County&apos;s population has grown steadily for over a decade, and businesses here face a market that is both opportunity-rich and increasingly competitive.
              </p>
              <p>
                TXPAGES helps Temple businesses build digital marketing strategies that reflect the real landscape of Bell County — the healthcare economy, the military-adjacent Killeen/Fort Cavazos population, the university community in nearby Waco, and the new residents continuously arriving along the I-35 growth corridor.
              </p>
              <p>
                Whether you are an established Temple business looking to defend your rankings or a newer company building visibility from the ground up, we build strategies that produce results in this specific market.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ backgroundColor: '#181f4a' }} aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">What We Offer</span>
              <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                All Services Available in Temple, TX
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              {SERVICES.map((service, i) => (
                <article key={service.slug} className="rounded-2xl border border-[#2a3870] bg-[#1e2a5e] overflow-hidden" aria-labelledby={`service-heading-${i}`}>
                  <div className="h-1 w-full" style={{ backgroundColor: service.accentColor }} aria-hidden="true" />
                  <div className="p-8 sm:p-10">
                    <h3 id={`service-heading-${i}`} className="text-xl sm:text-2xl font-bold text-white mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title} in Temple, TX
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
              Ready to grow your Temple business online?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Get a free visibility report and see where your Temple business stands in Bell County search results — and what it would take to outrank the competition on I-35.
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
                FAQ — Digital Marketing in Temple, TX
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

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TXPAGES Online Solutions', '@id': 'https://maps.google.com/?cid=905136393401498971', url: '', telephone: '+12549680162', hasMap: 'https://maps.google.com/?cid=905136393401498971', address: { '@type': 'PostalAddress', streetAddress: '164 N Graham', addressLocality: 'Stephenville', addressRegion: 'TX', postalCode: '76401', addressCountry: 'US' }, areaServed: { '@type': 'City', name: 'Temple', sameAs: 'https://en.wikipedia.org/wiki/Temple,_Texas' }, makesOffer: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${s.title} in Temple, TX`, url: `/services/${s.slug}` } })) }) }} />

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
