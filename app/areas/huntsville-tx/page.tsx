import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import CTABanner from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Huntsville, TX | TXPAGES Online Solutions',
  description:
    'TXPAGES provides SEO, PPC, web design, local listings management, content marketing, and monthly reporting to businesses in Huntsville, TX. Call 254-968-0162 for a free visibility report.',
  keywords:
    'digital marketing Huntsville TX, SEO Huntsville Texas, web design Huntsville, PPC Huntsville TX, local SEO Huntsville, TXPAGES Huntsville Texas',
  alternates: { canonical: '/areas/huntsville-tx' },
  openGraph: {
    title: 'Digital Marketing Services in Huntsville, TX | TXPAGES',
    description:
      'Complete digital marketing for Huntsville, TX businesses — SEO, PPC, web design, local listings, and content marketing from a Texas-based team that knows the market.',
    url: '/areas/huntsville-tx',
  },
}

const SERVICES = [
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    accentColor: '#2ea3f2',
    description:
      'Huntsville businesses compete for attention from Sam Houston State University students, Walker County residents, and visitors passing through on I-45. We build fast, mobile-first websites that make the right first impression, load quickly on any connection, and are structured from the ground up for Google discoverability. Your site will reflect what makes your business worth choosing.',
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    accentColor: '#2ea3f2',
    description:
      'When Walker County customers search for a product or service you offer, they should find your business — not a competitor from the next town over. We run full technical SEO audits, build out keyword-targeted content, and earn authoritative backlinks that move your rankings in Huntsville search results in a measurable, lasting way.',
  },
  {
    slug: 'ppc',
    title: 'Pay-Per-Click (PPC) Advertising',
    accentColor: '#be1f32',
    description:
      'Huntsville has a steady stream of potential customers searching online every day — for services near the university, along Sam Houston Ave, and throughout Walker County. We build Google Ads campaigns that put your business in front of those buyers the moment they are ready to act, with tight targeting and conversion tracking so you see exactly what your budget is producing.',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO & Listings Management',
    accentColor: '#be1f32',
    description:
      'Customers searching "near me" in Huntsville expect accurate, complete business information. We optimize your Google Business Profile, manage your online reputation, synchronize your listings across 50+ directories, and build a steady stream of genuine reviews — giving your Huntsville business the credibility it needs to win clicks over competitors.',
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    accentColor: '#974df3',
    description:
      'Well-crafted content earns trust before a customer ever contacts you. We write SEO-optimized blog posts, service pages, and local guides tailored to Huntsville and Walker County audiences — answering the questions your prospective customers are already asking and positioning your business as the clear local authority.',
  },
  {
    slug: 'reporting-support',
    title: 'Monthly Reporting & Ongoing Support',
    accentColor: '#974df3',
    description:
      "Every month you receive a straightforward report covering your rankings, traffic sources, lead volume, and return on ad spend — no jargon, no spin. We hold quarterly strategy reviews to keep your campaigns tracking toward real business goals, and a dedicated team member is always reachable when something comes up.",
  },
]

const FAQS = [
  {
    q: 'Does TXPAGES serve businesses in Huntsville, TX?',
    a: 'Yes. We work with businesses throughout Walker County and the Huntsville area. Our team understands the local search landscape around Sam Houston State University and the wider Huntsville community.',
  },
  {
    q: 'How soon can a Huntsville business expect to see SEO results?',
    a: 'Most clients in smaller Texas markets like Huntsville see meaningful ranking movement within 60–90 days on local and long-tail keywords. Broader competitive terms take longer, but we prioritize the searches that bring ready-to-buy customers first.',
  },
  {
    q: 'Can you help a Huntsville business that has no online presence yet?',
    a: 'Absolutely. We handle everything from initial domain setup and website design to Google Business Profile creation and directory submissions. You can go from zero online presence to a fully optimized digital footprint within a few weeks.',
  },
  {
    q: 'Do I have to commit to a long-term contract?',
    a: 'No. We do not lock clients into long-term contracts. We earn continued business by delivering results. Most Huntsville clients stay with us because the work is producing returns, not because they are obligated to.',
  },
  {
    q: 'What kinds of Huntsville businesses do you work with?',
    a: 'We work with service businesses, retailers, restaurants, healthcare and dental practices, law offices, contractors, and more throughout Huntsville and Walker County. If your customers search for you online, we can help them find you.',
  },
]

export default function HuntsvillePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-16">

        {/* Hero */}
        <section
          className="py-20 lg:py-28 relative overflow-hidden"
          style={{ backgroundColor: '#212e64' }}
          aria-labelledby="city-hero-heading"
        >
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
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-[#8892b0]" role="list">
                <li><Link href="/" className="hover:text-[#2ea3f2] transition-colors">Home</Link></li>
                <li aria-hidden="true"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                <li><span className="cursor-default">Areas We Serve</span></li>
                <li aria-hidden="true"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></li>
                <li className="text-white font-medium" aria-current="page">Huntsville, TX</li>
              </ol>
            </nav>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="flex-1 min-w-0">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-4">
                  Areas We Serve
                </span>
                <h1
                  id="city-hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-balance leading-tight mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Digital Marketing Services in{' '}
                  <span style={{ color: '#2ea3f2' }}>Huntsville, TX</span>
                </h1>
                <p className="text-[#8892b0] text-lg leading-relaxed mb-8 max-w-xl">
                  TXPAGES helps Huntsville businesses rank higher on Google, attract more local customers, and build a digital presence that works around the clock — with clear reporting and no long-term lock-ins.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-white text-sm transition-colors"
                    style={{ backgroundColor: '#2ea3f2' }}
                    aria-label="Get a free digital marketing visibility report for your Huntsville business"
                  >
                    Get Your Free Visibility Report
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                  <a
                    href="tel:2549680162"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-sm border border-[#2a3870] text-[#ccd6f6] hover:border-[#2ea3f2]/50 hover:text-white transition-colors"
                    aria-label="Call TXPAGES at 254-968-0162"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    254-968-0162
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-[45%] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden border border-[#2a3870]" style={{ boxShadow: '0 16px 48px rgba(46,163,242,0.12)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55048!2d-95.5507!3d30.7235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644a2d4c4c4c4c5%3A0x1!2sHuntsville%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000001"
                    width="100%"
                    height="340"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Huntsville, TX city center map"
                    aria-label="Google Map of Huntsville, TX"
                  />
                </div>
                <p className="text-xs text-[#8892b0] mt-3 text-center">
                  Serving Huntsville &amp; Walker County, TX
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local intro */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#0f1530' }} aria-labelledby="local-intro-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="local-intro-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Serving Huntsville &amp; Walker County Businesses
            </h2>
            <div className="space-y-4 text-[#8892b0] text-base leading-relaxed">
              <p>
                Huntsville sits at a crossroads — literally and figuratively. With Sam Houston State University anchoring the local economy, a consistent flow of I-45 traffic, and a growing base of local service and retail businesses, the competition for digital visibility in Walker County is real and increasing every year.
              </p>
              <p>
                TXPAGES works with Huntsville businesses across industries to help them show up where their customers are already looking. We build search strategies grounded in how Walker County residents actually use Google — not a boilerplate campaign lifted from a big-city agency playbook.
              </p>
              <p>
                Whether your business depends on the university crowd, the local residential base, or drivers coming through on I-45, we can help you turn online searches into paying customers in Huntsville and the surrounding area.
              </p>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: '#181f4a' }} aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">What We Offer</span>
              <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                All Services Available in Huntsville, TX
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              {SERVICES.map((service, i) => (
                <article key={service.slug} className="rounded-2xl border border-[#2a3870] bg-[#1e2a5e] overflow-hidden" aria-labelledby={`service-heading-${i}`}>
                  <div className="h-1 w-full" style={{ backgroundColor: service.accentColor }} aria-hidden="true" />
                  <div className="p-8 sm:p-10">
                    <h3 id={`service-heading-${i}`} className="text-xl sm:text-2xl font-bold text-white mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title} in Huntsville, TX
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

        {/* Mid CTA */}
        <section className="py-16" style={{ backgroundColor: '#0f1530' }} aria-labelledby="mid-cta-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="mid-cta-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to grow your Huntsville business online?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Request a free visibility report and we will show you exactly where your Huntsville business stands in local search results — and what it would take to reach more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-white text-sm transition-colors" style={{ backgroundColor: '#2ea3f2' }}>
                Get Your Free Visibility Report
              </a>
              <a href="tel:2549680162" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-sm border border-[#2a3870] text-[#ccd6f6] hover:border-[#2ea3f2]/50 hover:text-white transition-colors">
                Call 254-968-0162
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: '#181f4a' }} aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">Common Questions</span>
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-white text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                FAQ — Digital Marketing in Huntsville, TX
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'TXPAGES Online Solutions',
              '@id': 'https://maps.google.com/?cid=905136393401498971',
              url: '',
              telephone: '+12549680162',
              hasMap: 'https://maps.google.com/?cid=905136393401498971',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '164 N Graham',
                addressLocality: 'Stephenville',
                addressRegion: 'TX',
                postalCode: '76401',
                addressCountry: 'US',
              },
              areaServed: { '@type': 'City', name: 'Huntsville', sameAs: 'https://en.wikipedia.org/wiki/Huntsville,_Texas' },
              makesOffer: SERVICES.map((s) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: `${s.title} in Huntsville, TX`, url: `/services/${s.slug}` },
              })),
            }),
          }}
        />

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
