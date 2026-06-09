import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import CTABanner from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Stephenville, TX | TXPAGES Online Solutions',
  description:
    'TXPAGES provides SEO, PPC, web design, local listings management, content marketing, and monthly reporting to businesses in Stephenville, TX. Call 254-968-0162 for a free visibility report.',
  keywords:
    'digital marketing Stephenville TX, SEO Stephenville Texas, web design Stephenville, PPC Stephenville, local SEO Stephenville TX, TXPAGES Stephenville',
  alternates: { canonical: '/areas/stephenville-tx' },
  openGraph: {
    title: 'Digital Marketing Services in Stephenville, TX | TXPAGES',
    description:
      'Complete digital marketing for Stephenville, TX businesses — SEO, PPC, web design, local listings, and content marketing from a team rooted in Erath County.',
    url: '/areas/stephenville-tx',
  },
}

const SERVICES = [
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    accentColor: '#2ea3f2',
    description:
      'Stephenville businesses need websites that work as hard as they do. We build fast, mobile-first sites that represent your brand accurately, load in under two seconds, and are structured to rank on Google from day one. Whether you run a restaurant on the square, a ranch supply company, or a healthcare practice, your site will look professional and convert visitors into customers.',
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    accentColor: '#2ea3f2',
    description:
      'When someone in Stephenville or Erath County searches for what you offer, your business should appear near the top. We handle technical SEO audits, on-page optimization, content strategy, and authority link building — all focused on the keywords your customers actually use. Our clients in Stephenville have seen consistent ranking improvements within the first 90 days.',
  },
  {
    slug: 'ppc',
    title: 'Pay-Per-Click (PPC) Advertising',
    accentColor: '#be1f32',
    description:
      'Need leads now, not months from now? We build and manage Google Ads campaigns that put your Stephenville business in front of buyers the moment they search. Every campaign includes precise keyword targeting, negative keyword lists, and conversion tracking so you know exactly what your ad spend is returning.',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO & Listings Management',
    accentColor: '#be1f32',
    description:
      "Erath County customers searching \"near me\" need to find you — not a competitor. We optimize your Google Business Profile, manage your online reputation, build consistent citations across 50+ directories including Yelp, Bing Places, and Apple Maps, and implement a review generation strategy that builds the five-star reputation Stephenville businesses deserve.",
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    accentColor: '#974df3',
    description:
      "Content is how your Stephenville business earns trust before a customer ever calls. We write SEO-optimized blog posts, service landing pages, and local content that answers real questions your community is asking — positioning you as the go-to expert in your field in Stephenville and the surrounding area.",
  },
  {
    slug: 'reporting-support',
    title: 'Monthly Reporting & Ongoing Support',
    accentColor: '#974df3',
    description:
      "You should never have to wonder if your marketing is working. Every month we deliver a plain-language report covering rankings, traffic, leads, and return on investment. Quarterly strategy reviews keep your campaigns aligned with your business goals — and a real person based right here in Stephenville is always available when you have a question.",
  },
]

const FAQS = [
  {
    q: 'Does TXPAGES work with businesses in Stephenville, TX specifically?',
    a: 'Yes. TXPAGES is headquartered in Stephenville at 164 N Graham. We have deep familiarity with the local business landscape, Erath County search patterns, and the specific challenges faced by businesses in this area.',
  },
  {
    q: 'How long before I see SEO results in Stephenville?',
    a: 'Most Stephenville clients see measurable ranking improvements within 60–90 days for local and long-tail keywords. More competitive terms take longer, but we focus first on the searches most likely to bring you customers quickly.',
  },
  {
    q: 'Can you help a new Stephenville business get online fast?',
    a: 'Absolutely. We can build and launch a professional website, set up your Google Business Profile, and get your business listed in major directories — all within a few weeks. We have launch packages designed specifically for new and expanding local businesses.',
  },
  {
    q: 'Do I need all six services, or can I start with just one?',
    a: 'You can start with whatever makes the most sense for your situation. Many Stephenville clients begin with web design or local SEO, then add PPC or content marketing as their business grows. We will be honest about what will deliver the best return at your current stage.',
  },
  {
    q: 'What types of businesses in Stephenville do you work with?',
    a: 'We work with service businesses, retail shops, restaurants, medical and dental practices, agriculture-related businesses, contractors, and more across Stephenville and Erath County. If your customers search for you online, we can help them find you.',
  },
]

export default function StephenvillePage() {
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
                <li>
                  <Link href="/" className="hover:text-[#2ea3f2] transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <span className="hover:text-[#2ea3f2] transition-colors cursor-default">Areas We Serve</span>
                </li>
                <li aria-hidden="true">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium" aria-current="page">Stephenville, TX</li>
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
                  <span style={{ color: '#2ea3f2' }}>Stephenville, TX</span>
                </h1>
                <p className="text-[#8892b0] text-lg leading-relaxed mb-8 max-w-xl">
                  TXPAGES is Stephenville&apos;s home-grown digital marketing partner. We help local businesses rank higher, get found on Google, and turn online visitors into paying customers — with no long-term contracts and full transparency on results.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-white text-sm transition-colors"
                    style={{ backgroundColor: '#2ea3f2' }}
                    aria-label="Get a free digital marketing visibility report for your Stephenville business"
                  >
                    Get Your Free Visibility Report
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
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

              {/* Google Map embed using GBP CID */}
              <div className="w-full lg:w-[45%] flex-shrink-0">
                <div className="rounded-2xl overflow-hidden border border-[#2a3870]" style={{ boxShadow: '0 16px 48px rgba(46,163,242,0.12)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.0!2d-98.2028!3d32.2215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc91d7b15c9cfc5db!2sTXPAGES!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&cid=905136393401498971"
                    width="100%"
                    height="340"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TXPAGES location in Stephenville, TX — 164 N Graham, Stephenville, TX 76401"
                    aria-label="Google Map showing TXPAGES office location at 164 N Graham, Stephenville, TX 76401"
                  />
                </div>
                <p className="text-xs text-[#8892b0] mt-3 text-center">
                  164 N Graham, Stephenville, TX 76401 &nbsp;&middot;&nbsp;{' '}
                  <a
                    href="https://maps.google.com/?cid=905136393401498971"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2ea3f2] hover:underline"
                    aria-label="View TXPAGES on Google Maps"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local intro */}
        <section
          className="py-16 lg:py-20"
          style={{ backgroundColor: '#0f1530' }}
          aria-labelledby="local-intro-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="local-intro-heading"
              className="text-2xl sm:text-3xl font-bold text-white mb-6 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Serving Stephenville &amp; Erath County Businesses
            </h2>
            <div className="space-y-4 text-[#8892b0] text-base leading-relaxed">
              <p>
                Stephenville is a growing community — home to Tarleton State University, a thriving agricultural economy, and an expanding base of local retail, service, and healthcare businesses. As the Cowboy Capital of the World, Stephenville businesses face the same digital marketing challenges as businesses in larger Texas cities, but often with smaller budgets and a need for a partner who actually knows the community.
              </p>
              <p>
                TXPAGES was founded here. Our office is on North Graham Street, and we have been helping Erath County businesses build their online presence for years. We know the local market, we understand what Stephenville customers search for, and we build strategies that reflect the reality of doing business in this area — not a generic template designed for Dallas or Houston.
              </p>
              <p>
                Whether you are a new business getting online for the first time or an established company looking to grow your digital presence, we can help you rank in Stephenville, Granbury, Comanche, Glen Rose, and across Central Texas.
              </p>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: '#181f4a' }}
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
                What We Offer
              </span>
              <h2
                id="services-heading"
                className="text-3xl sm:text-4xl font-bold text-white text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                All Services Available in Stephenville, TX
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {SERVICES.map((service, i) => (
                <article
                  key={service.slug}
                  className="rounded-2xl border border-[#2a3870] bg-[#1e2a5e] overflow-hidden"
                  aria-labelledby={`service-heading-${i}`}
                >
                  <div className="h-1 w-full" style={{ backgroundColor: service.accentColor }} aria-hidden="true" />
                  <div className="p-8 sm:p-10">
                    <h3
                      id={`service-heading-${i}`}
                      className="text-xl sm:text-2xl font-bold text-white mb-4 text-balance"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {service.title} in Stephenville, TX
                    </h3>
                    <p className="text-[#8892b0] leading-relaxed mb-6 max-w-3xl">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold transition-colors"
                      style={{ color: service.accentColor }}
                      aria-label={`Learn more about ${service.title} from TXPAGES`}
                    >
                      Learn about our {service.title} service
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA mid-page */}
        <section
          className="py-16"
          style={{ backgroundColor: '#0f1530' }}
          aria-labelledby="mid-cta-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="mid-cta-heading"
              className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to grow your Stephenville business online?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Request a free visibility report and we will show you exactly where your business stands in Stephenville search results and what it would take to improve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-white text-sm transition-colors"
                style={{ backgroundColor: '#2ea3f2' }}
              >
                Get Your Free Visibility Report
              </a>
              <a
                href="tel:2549680162"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-sm border border-[#2a3870] text-[#ccd6f6] hover:border-[#2ea3f2]/50 hover:text-white transition-colors"
              >
                Call 254-968-0162
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: '#181f4a' }}
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
                Common Questions
              </span>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-bold text-white text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                FAQ — Digital Marketing in Stephenville, TX
              </h2>
            </div>

            <dl className="flex flex-col gap-4">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#2a3870] bg-[#1e2a5e] p-7"
                >
                  <dt className="text-base font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {faq.q}
                  </dt>
                  <dd className="text-[#8892b0] text-sm leading-relaxed">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Structured data */}
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
              areaServed: {
                '@type': 'City',
                name: 'Stephenville',
                sameAs: 'https://en.wikipedia.org/wiki/Stephenville,_Texas',
              },
              makesOffer: SERVICES.map((s) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: `${s.title} in Stephenville, TX`,
                  url: `/services/${s.slug}`,
                },
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
