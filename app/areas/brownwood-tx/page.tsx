import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import CTABanner from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Brownwood, TX | TXPAGES Online Solutions',
  description:
    'TXPAGES provides SEO, PPC, web design, local listings management, content marketing, and monthly reporting to businesses in Brownwood, TX. Call 254-968-0162 for a free visibility report.',
  keywords:
    'digital marketing Brownwood TX, SEO Brownwood Texas, web design Brownwood, PPC Brownwood TX, local SEO Brownwood Brown County, TXPAGES Brownwood Texas',
  alternates: { canonical: '/areas/brownwood-tx' },
  openGraph: {
    title: 'Digital Marketing Services in Brownwood, TX | TXPAGES',
    description:
      'Complete digital marketing for Brownwood, TX businesses — SEO, PPC, web design, local listings, and content marketing. Serving Brown County and surrounding West Texas communities.',
    url: '/areas/brownwood-tx',
  },
}

const SERVICES = [
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    accentColor: '#2ea3f2',
    description:
      "Brownwood is the commercial hub of Brown County and the surrounding region — which means your website needs to serve customers from across a wide geographic area, not just the city limits. We build professional, fast-loading websites optimized for the searches Brown County residents and businesses actually perform, with designs that project the credibility needed to win customers from neighboring counties.",
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    accentColor: '#2ea3f2',
    description:
      'In markets like Brownwood, the businesses that dominate Google are usually the ones with the most consistent, long-term SEO investment — not necessarily the largest ones. We build search strategies that give Brownwood businesses a sustainable ranking advantage through technical optimization, content development, and authority building targeted at Brown County search patterns.',
  },
  {
    slug: 'ppc',
    title: 'Pay-Per-Click (PPC) Advertising',
    accentColor: '#be1f32',
    description:
      'Brown County customers use Google to find businesses the same way customers everywhere do — and paid search in smaller markets often delivers a lower cost-per-click than major metros. We build Google Ads campaigns that put your Brownwood business at the top of those results with disciplined budget management and clear conversion tracking.',
  },
  {
    slug: 'local-seo',
    title: 'Local SEO & Listings Management',
    accentColor: '#be1f32',
    description:
      "Brownwood serves as the regional center for healthcare, retail, and services across multiple surrounding counties. We optimize your Google Business Profile, manage your online reputation, and build directory listings to make sure customers searching from Comanche, Coleman, San Saba, and other nearby areas find your Brownwood business first.",
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    accentColor: '#974df3',
    description:
      "Howard Payne University, Lake Brownwood, and the region's agricultural roots give Brownwood a distinct local identity. We create content that speaks to the Brown County audience — answering the questions your prospective customers are searching for and establishing your business as the trusted local choice in your industry.",
  },
  {
    slug: 'reporting-support',
    title: 'Monthly Reporting & Ongoing Support',
    accentColor: '#974df3',
    description:
      "Every month you receive a straightforward performance report — rankings, traffic, leads, and spend — with no jargon. We hold quarterly strategy sessions to review what is working and adjust for the seasonal patterns that affect Brown County businesses, and we are always reachable when you need to talk through something.",
  },
]

const FAQS = [
  {
    q: 'Does TXPAGES serve businesses in Brownwood, TX?',
    a: 'Yes. We work with businesses throughout Brown County and the surrounding area, including businesses that serve customers from Comanche, Coleman, San Saba, and other regional counties centered on Brownwood.',
  },
  {
    q: 'Is digital marketing cost-effective for a smaller market like Brownwood?',
    a: 'Often more so than in larger cities. Competition for search rankings and ad placements in Brownwood is lower than in major metros, which means your budget goes further and your business can achieve top visibility faster than it would in Dallas or Austin.',
  },
  {
    q: 'Can you help a Brownwood business reach customers from surrounding counties?',
    a: 'Absolutely. We build service area SEO strategies, multi-city landing pages, and Google Ads geographic targeting that extends your reach to the counties and communities that look to Brownwood as their regional hub.',
  },
  {
    q: 'How do I know if my Brownwood business needs SEO or PPC?',
    a: 'Most businesses benefit from both, but the right starting point depends on your timeline and budget. PPC produces results faster; SEO builds long-term, compounding returns. We can review your situation and recommend where to start for the best early return.',
  },
  {
    q: 'What industries do you serve in Brownwood?',
    a: "We work with healthcare providers, agricultural businesses, retail stores, restaurants, service contractors, legal and professional services, and more throughout Brownwood and Brown County.",
  },
]

export default function BrownwoodPage() {
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
                <li className="text-white font-medium" aria-current="page">Brownwood, TX</li>
              </ol>
            </nav>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="flex-1 min-w-0">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-4">Areas We Serve</span>
                <h1 id="city-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-balance leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Digital Marketing Services in{' '}
                  <span style={{ color: '#2ea3f2' }}>Brownwood, TX</span>
                </h1>
                <p className="text-[#8892b0] text-lg leading-relaxed mb-8 max-w-xl">
                  TXPAGES helps Brownwood businesses dominate local search, attract customers from across Brown County and the surrounding region, and build a digital presence that reflects the quality of their work.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md font-bold text-white text-sm transition-colors" style={{ backgroundColor: '#2ea3f2' }} aria-label="Get a free digital marketing visibility report for your Brownwood business">
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54800!2d-99.0120!3d31.7093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865a5a5a5a5a5a5b%3A0x1!2sBrownwood%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000004" width="100%" height="340" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Brownwood, TX city center map" aria-label="Google Map of Brownwood, TX" />
                </div>
                <p className="text-xs text-[#8892b0] mt-3 text-center">Serving Brownwood &amp; Brown County, TX</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20" style={{ backgroundColor: '#0f1530' }} aria-labelledby="local-intro-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="local-intro-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Serving Brownwood &amp; Brown County Businesses
            </h2>
            <div className="space-y-4 text-[#8892b0] text-base leading-relaxed">
              <p>
                Brownwood is the commercial and healthcare hub for a large swath of West-Central Texas — drawing customers from Brown, Comanche, Coleman, Mills, and San Saba counties. For businesses here, a strong online presence is not just a local advantage; it is a regional one.
              </p>
              <p>
                Howard Payne University, a solid agricultural economy, and a growing healthcare sector give Brownwood a diverse economic base. TXPAGES helps businesses across every sector of that economy compete effectively in search results — from service contractors serving rural customers to medical practices drawing patients from surrounding counties.
              </p>
              <p>
                We understand the pace and priorities of West Texas business culture, and we build marketing strategies that respect your budget and deliver honest, measurable results — no hype, no long-term lock-ins.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ backgroundColor: '#181f4a' }} aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">What We Offer</span>
              <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-white text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                All Services Available in Brownwood, TX
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              {SERVICES.map((service, i) => (
                <article key={service.slug} className="rounded-2xl border border-[#2a3870] bg-[#1e2a5e] overflow-hidden" aria-labelledby={`service-heading-${i}`}>
                  <div className="h-1 w-full" style={{ backgroundColor: service.accentColor }} aria-hidden="true" />
                  <div className="p-8 sm:p-10">
                    <h3 id={`service-heading-${i}`} className="text-xl sm:text-2xl font-bold text-white mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title} in Brownwood, TX
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
              Ready to grow your Brownwood business online?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Get a free visibility report and see exactly where your Brownwood business stands in Brown County search results — and what it would take to reach more customers across the region.
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
                FAQ — Digital Marketing in Brownwood, TX
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

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TXPAGES Online Solutions', '@id': 'https://maps.google.com/?cid=905136393401498971', url: '', telephone: '+12549680162', hasMap: 'https://maps.google.com/?cid=905136393401498971', address: { '@type': 'PostalAddress', streetAddress: '164 N Graham', addressLocality: 'Stephenville', addressRegion: 'TX', postalCode: '76401', addressCountry: 'US' }, areaServed: { '@type': 'City', name: 'Brownwood', sameAs: 'https://en.wikipedia.org/wiki/Brownwood,_Texas' }, makesOffer: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${s.title} in Brownwood, TX`, url: `/services/${s.slug}` } })) }) }} />

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
