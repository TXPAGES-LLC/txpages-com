import type { ReactNode } from 'react'

export interface ServiceData {
  title: string
  shortTitle: string
  slug: string
  tagline: string
  description: string
  metaTitle: string
  metaDescription: string
  accentColor: string
  image: string
  imageAlt: string
  heroHeading: string
  heroSubheading: string
  benefits: { heading: string; body: string }[]
  features: { icon: ReactNode; title: string; description: string }[]
  cta: string
}

const iconProps = { className: 'w-6 h-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'aria-hidden': true as const }

export const SERVICES_DATA: ServiceData[] = [
  {
    title: 'Website Design & Development',
    shortTitle: 'Web Design',
    slug: 'web-design',
    tagline: 'High-performance websites built for Texas businesses',
    description:
      'Mobile-first, fast-loading websites engineered for SEO from day one. We design and develop conversion-focused sites that represent your brand and drive real business results.',
    metaTitle: 'Website Design & Development Texas | TXPAGES | Stephenville TX',
    metaDescription:
      'TXPAGES builds high-performance, mobile-first websites for Texas businesses. Fast load speeds, clean UX, and SEO-optimized code. Call 254-968-0162.',
    accentColor: '#2ea3f2',
    image: '/website-development.png',
    imageAlt: 'TXPAGES website design and development on iMac, tablet, and mobile — responsive design, SEO optimized, fast performance for Texas businesses',
    heroHeading: 'Texas Web Design & Development That Converts',
    heroSubheading:
      'We build fast, beautiful, mobile-first websites for Texas businesses that rank on Google and turn visitors into customers.',
    benefits: [
      { heading: 'SEO-Optimized From Day One', body: 'Every site we build follows SEO best practices — semantic HTML, fast load times, structured data, and keyword-targeted copy baked in from the start.' },
      { heading: 'Mobile-First & Fast', body: 'Over 70% of Texas local searches happen on mobile. We design for mobile first, ensuring sub-2s load times and a seamless experience on any device.' },
      { heading: 'Conversion-Focused Design', body: 'Beautiful design means nothing without results. Every layout, CTA, and user flow is crafted to guide visitors toward calling, booking, or buying.' },
      { heading: 'Ongoing Support Included', body: 'Your website is never "done." We provide updates, security patches, and content changes so your site stays fresh and competitive.' },
    ],
    features: [
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>, title: 'Responsive Mobile Design', description: 'Flawless experience on every screen size.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Core Web Vitals Optimized', description: 'Fast LCP, minimal CLS, and low INP for top rankings.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'SSL & Security', description: 'HTTPS, regular backups, and hardened configuration.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>, title: 'CMS Integration', description: 'Easy content management so you stay in control.' },
    ],
    cta: 'Get a Free Website Quote',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    shortTitle: 'SEO',
    slug: 'seo',
    tagline: 'AI-powered Texas SEO that pushes you to the top of Google',
    description:
      'Comprehensive SEO strategies combining technical audits, content creation, and link building to drive organic traffic and qualified leads to your Texas business.',
    metaTitle: 'Texas SEO Services | AI-Powered Search Engine Optimization | TXPAGES',
    metaDescription:
      'AI-powered SEO for Texas businesses. Technical audits, content strategy, and link building that push you to the top of Google. Call TXPAGES: 254-968-0162.',
    accentColor: '#2ea3f2',
    image: '/seo.png',
    imageAlt: 'TXPAGES SEO dashboard showing organic traffic growth, keyword research strategy, backlink metrics, and #1 local ranking results for Texas businesses',
    heroHeading: 'Texas SEO Services That Drive Real Organic Growth',
    heroSubheading:
      'AI-powered SEO strategies, technical audits, and content marketing that move your Texas business to page one of Google — and keep it there.',
    benefits: [
      { heading: 'Technical SEO Audits', body: 'We crawl your entire site to find and fix indexing issues, broken links, slow pages, and schema errors that are holding your rankings back.' },
      { heading: 'Keyword Strategy & Content', body: 'Deep keyword research identifies high-intent Texas search terms your customers are using, then we create content that ranks and converts.' },
      { heading: 'Authority Link Building', body: 'Quality backlinks from relevant Texas and industry websites build your domain authority and signal trustworthiness to Google.' },
      { heading: 'Monthly Rank Tracking', body: 'Transparent monthly reports show you exactly where you rank, how traffic is growing, and which pages are driving the most leads.' },
    ],
    features: [
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>, title: 'Keyword Research', description: 'High-intent Texas keyword mapping for every page.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>, title: 'On-Page Optimization', description: 'Title tags, meta, H-tags, and structured data perfected.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.1-1.1" /></svg>, title: 'Link Building', description: 'Ethical authority backlinks that strengthen your domain.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'Rank Tracking', description: 'Monthly visibility reporting with competitor insights.' },
    ],
    cta: 'Get a Free SEO Audit',
  },
  {
    title: 'Pay-Per-Click (PPC) Management',
    shortTitle: 'PPC',
    slug: 'ppc',
    tagline: 'Data-driven Google Ads that stretch your budget further',
    description:
      'Certified PPC management that maximizes your ad spend ROI. From campaign setup and keyword bidding to ad copy testing and conversion tracking — we handle every detail.',
    metaTitle: 'PPC Management Texas | Google Ads Agency | TXPAGES Stephenville TX',
    metaDescription:
      'Expert PPC management and Google Ads for Texas businesses. Maximize ROI with data-driven campaigns. TXPAGES — call 254-968-0162 for a free PPC audit.',
    accentColor: '#be1f32',
    image: '/ppc.png',
    imageAlt: 'TXPAGES PPC management dashboard showing Google Ads performance with 12,850 clicks, 1,248 conversions, and $6.85 cost-per-conversion for Texas businesses',
    heroHeading: 'Texas PPC Management That Maximizes Every Ad Dollar',
    heroSubheading:
      'Data-driven Google Ads and pay-per-click campaigns that put your Texas business in front of buyers actively searching for what you offer.',
    benefits: [
      { heading: 'Expert Campaign Setup', body: 'We structure campaigns, ad groups, and keyword targeting from scratch using best-practice account architecture that minimizes wasted spend.' },
      { heading: 'Continuous Bid Optimization', body: 'AI-assisted bidding strategies and manual oversight keep your cost-per-click low and your quality scores high across all campaigns.' },
      { heading: 'Landing Page Alignment', body: 'We ensure your ads land on pages optimized for conversions, reducing bounce rates and improving your Google Quality Score.' },
      { heading: 'Transparent ROI Reporting', body: 'Monthly PPC reports show impressions, clicks, conversions, and actual revenue so you always know your return on ad spend.' },
    ],
    features: [
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>, title: 'Google Ads Management', description: 'Search, display, and Shopping campaign expertise.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>, title: 'Keyword Bidding', description: 'Smart bid strategies targeting high-intent queries.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, title: 'Ad Copy Testing', description: 'A/B testing to continuously improve click-through rates.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, title: 'Conversion Tracking', description: 'Full-funnel attribution from click to customer.' },
    ],
    cta: 'Get a Free PPC Audit',
  },
  {
    title: 'Local SEO & Listings Management',
    shortTitle: 'Local SEO',
    slug: 'local-seo',
    tagline: 'Dominate local Texas search and the Google Map Pack',
    description:
      'Complete local SEO and citations management that puts your Texas business at the top of Google Maps, local search results, and every major business directory.',
    metaTitle: 'Local SEO & Listings Management Texas | Google Maps SEO | TXPAGES',
    metaDescription:
      'Dominate local Texas search. TXPAGES manages your Google Business Profile, citations, and local directory listings. Call 254-968-0162 for a free local audit.',
    accentColor: '#be1f32',
    image: '/listings-management.png',
    imageAlt: 'TXPAGES business listings management across Google Business Profile, Facebook, Yelp, Bing Places, Yellow Pages, and Apple Maps for Texas businesses',
    heroHeading: 'Local SEO That Puts Texas Businesses on the Map',
    heroSubheading:
      'Appear at the top of Google Maps and local search results when Texas customers search for businesses like yours. We handle every citation, listing, and review strategy.',
    benefits: [
      { heading: 'Google Business Profile Optimization', body: 'We fully optimize your GBP — categories, photos, posts, Q&A, and service areas — to maximize visibility in the local Map Pack.' },
      { heading: 'Citation Building & Cleanup', body: 'Consistent NAP (Name, Address, Phone) data across 50+ major directories signals trust to Google and improves local rankings.' },
      { heading: 'Review Generation Strategy', body: 'More 5-star reviews mean more clicks and more customers. We implement proven review request workflows for your business.' },
      { heading: 'Hyper-Local Content', body: 'Location-specific landing pages and content targeting Texas cities and neighborhoods you serve drive local organic traffic.' },
    ],
    features: [
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: 'Google Business Profile', description: 'Full setup, optimization, and monthly GBP posting.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>, title: 'Directory Citations', description: '50+ authoritative listings built and synced.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>, title: 'Review Management', description: 'Strategy and tools to grow your 5-star reputation.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>, title: 'Local Landing Pages', description: 'City-specific pages that rank for "near me" searches.' },
    ],
    cta: 'Get a Free Local SEO Audit',
  },
  {
    title: 'Content Marketing Strategy',
    shortTitle: 'Content Marketing',
    slug: 'content-marketing',
    tagline: 'SEO-driven content that builds authority and drives traffic',
    description:
      'Strategic content marketing — blogs, landing pages, and campaigns — that builds your brand authority, attracts qualified organic traffic, and converts readers into customers.',
    metaTitle: 'Content Marketing Strategy Texas | SEO Content Agency | TXPAGES',
    metaDescription:
      'SEO-driven content marketing for Texas businesses. Blogs, landing pages, and campaigns that build authority and drive traffic. Call TXPAGES: 254-968-0162.',
    accentColor: '#974df3',
    image: '/content-marketing.png',
    imageAlt: 'TXPAGES content marketing dashboard showing 15.6K views, 7.2K engagement and content strategy workflow — Plan, Create, Publish, Promote, Analyze for Texas businesses',
    heroHeading: 'Texas Content Marketing That Builds Authority & Drives Traffic',
    heroSubheading:
      'SEO-optimized blogs, landing pages, and content campaigns that position your Texas business as the trusted expert in your market and convert readers into customers.',
    benefits: [
      { heading: 'Strategic Content Planning', body: 'We map out a content calendar aligned with your keyword strategy, seasonal demand, and customer buying journey — so every piece has a purpose.' },
      { heading: 'SEO-Optimized Blog Writing', body: 'Every blog post is crafted to rank for specific keyword clusters, answer customer questions, and build topical authority in your niche.' },
      { heading: 'Landing Page Copywriting', body: 'High-converting landing page copy for services, locations, and campaigns that drives action — not just traffic.' },
      { heading: 'Content Performance Tracking', body: 'We monitor traffic, rankings, and conversions for every content asset and continuously optimize the pieces bringing the most ROI.' },
    ],
    features: [
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>, title: 'Blog Content', description: 'Keyword-targeted articles that rank and engage.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>, title: 'Landing Pages', description: 'Conversion-focused pages for services and locations.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, title: 'Social Content', description: 'Platform-native copy that builds community and trust.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'Performance Reports', description: 'Traffic, ranking, and conversion data every month.' },
    ],
    cta: 'Get a Content Strategy Review',
  },
  {
    title: 'Monthly Reporting & Support',
    shortTitle: 'Reporting & Support',
    slug: 'reporting-support',
    tagline: 'Transparent reporting and proactive ongoing support',
    description:
      'Monthly performance reports, quarterly strategy reviews, and responsive ongoing support that keep your digital marketing accountable, optimized, and ahead of the competition.',
    metaTitle: 'Monthly Reporting & Marketing Support Texas | TXPAGES',
    metaDescription:
      'Transparent monthly marketing reports, quarterly strategy updates, and ongoing support for Texas businesses. TXPAGES keeps your marketing accountable. Call 254-968-0162.',
    accentColor: '#974df3',
    image: '/reporting.png',
    imageAlt: 'TXPAGES reporting dashboard showing $256,450 revenue, 18,785 users, 3,271 conversions, and reporting workflow — Collect, Process, Analyze, Generate Reports for Texas businesses',
    heroHeading: 'Monthly Reporting That Keeps Your Marketing Accountable',
    heroSubheading:
      'Clear, plain-language reports and proactive quarterly strategy reviews ensure your digital marketing investment is always working as hard as possible for your Texas business.',
    benefits: [
      { heading: 'Plain-Language Monthly Reports', body: 'No jargon, no vanity metrics. Each report clearly shows rankings, traffic, leads, conversions, and ROI in terms you actually care about.' },
      { heading: 'Quarterly Strategy Reviews', body: 'Every quarter we meet to review performance, identify new opportunities, and adjust your marketing strategy to reflect algorithm updates and market shifts.' },
      { heading: 'Dedicated Account Support', body: 'You have a direct line to your TXPAGES account manager — no tickets, no hold times. Real humans who know your business and respond quickly.' },
      { heading: 'Continuous Optimization', body: 'Marketing is never set-and-forget. We continuously test, optimize, and improve every channel based on the data from your monthly reports.' },
    ],
    features: [
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, title: 'Monthly Reports', description: 'Comprehensive data covering all active campaigns.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, title: 'Quarterly Reviews', description: 'Strategy sessions to align with your goals.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>, title: 'Dedicated Manager', description: 'A real person who knows your account and goals.' },
      { icon: <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>, title: 'Continuous Optimization', description: 'Data-driven improvements every single month.' },
    ],
    cta: 'Start With a Free Visibility Report',
  },
]

export const SERVICE_SLUGS = SERVICES_DATA.map((s) => s.slug)
