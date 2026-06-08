export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TXPAGES',
    alternateName: 'Texas AI SEO, PPC & Web Design Services',
    url: '',
    logo: 'https://txpages.com/wp-content/uploads/2025/04/new-logo.png',
    description:
      'TXPAGES is a Texas digital marketing agency providing AI-powered SEO, PPC management, web design, local SEO, and content marketing services for small and mid-sized Texas businesses.',
    telephone: '+1-254-968-0162',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '164 N Graham',
      addressLocality: 'Stephenville',
      addressRegion: 'TX',
      postalCode: '76401',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    sameAs: [
      'https://www.facebook.com/txpages',
      'https://www.linkedin.com/company/txpages',
      'https://twitter.com/txpages',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Texas Digital Marketing Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services Texas' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PPC Management Texas' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design Texas' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO Texas' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Marketing Texas' } },
      ],
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TXPAGES — Texas Digital Marketing Agency',
    url: '',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: '/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': '/#localbusiness',
    name: 'TXPAGES',
    description:
      'Texas digital marketing agency specializing in AI-powered SEO, PPC, web design, and local marketing for Texas small and mid-sized businesses.',
    url: '',
    telephone: '+1-254-968-0162',
    image: 'https://txpages.com/wp-content/uploads/2025/04/new-logo.png',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '164 N Graham',
      addressLocality: 'Stephenville',
      addressRegion: 'TX',
      postalCode: '76401',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.2207,
      longitude: -98.2025,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '87',
      bestRating: '5',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to see results from Texas SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Texas businesses start seeing measurable improvements in local rankings and organic traffic within 3–6 months of consistent SEO work.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes TXPAGES different from other Texas digital marketing agencies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TXPAGES is a locally rooted Texas team based in Stephenville — not a national agency. We combine deep local market knowledge with AI-powered tools and transparent reporting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer web design services alongside SEO and PPC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. TXPAGES is a complete one-stop digital marketing partner. We design and develop fast, mobile-first websites optimized for SEO from the ground up.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you lock clients into long-term contracts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We operate on flexible monthly service agreements. We believe in earning your business every month through results and communication.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
