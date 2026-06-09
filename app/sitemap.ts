import type { MetadataRoute } from 'next'
import { SERVICES_DATA } from '@/lib/services-data'

const BASE = 'https://txpages.com'

// Pin dates to actual publish/last-edit dates so GSC sees stable lastmod values.
// Update a page's date here whenever its content materially changes.
const LAUNCH = '2026-01-01'
const LEGAL  = '2026-01-01'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,                lastModified: LAUNCH, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/why-txpages`,     lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/process`,         lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,         lastModified: LAUNCH, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`,            lastModified: LAUNCH, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/privacy-policy`,  lastModified: LEGAL,  changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms-of-service`,lastModified: LEGAL,  changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: LAUNCH,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const areaRoutes: MetadataRoute.Sitemap = [
    'stephenville-tx',
    'huntsville-tx',
    'granbury-tx',
    'highland-lakes-tx',
    'brownwood-tx',
    'temple-tx',
    'abilene-tx',
  ].map((slug) => ({
    url: `${BASE}/areas/${slug}`,
    lastModified: LAUNCH,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = [
    { slug: 'how-texas-small-businesses-can-dominate-local-search-2025', date: '2025-05-08' },
    { slug: 'complete-guide-google-ads-texas-service-businesses',        date: '2025-04-22' },
    { slug: '7-web-design-mistakes-killing-texas-business-conversions',  date: '2025-04-10' },
  ].map(({ slug, date }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes]
}
