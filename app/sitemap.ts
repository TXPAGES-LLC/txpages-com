import type { MetadataRoute } from 'next'
import { SERVICES_DATA } from '@/lib/services-data'

const BASE = 'https://txpages.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/why-txpages`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/process`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms-of-service`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
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
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = [
    'how-texas-small-businesses-can-dominate-local-search-2025',
    'complete-guide-google-ads-texas-service-businesses',
    '7-web-design-mistakes-killing-texas-business-conversions',
  ].map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes]
}
