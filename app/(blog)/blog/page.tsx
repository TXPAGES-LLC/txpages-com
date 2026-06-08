import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import CTABanner from '@/components/cta-banner'
import { fetchBlogData, getPublishedPosts, formatPostDate } from '@/lib/blog/source'

export const metadata: Metadata = {
  title: 'Digital Marketing Blog | SEO, PPC & Web Design Tips | TXPAGES',
  description:
    'The TXPAGES blog covers Texas SEO strategies, PPC tips, web design best practices, and local marketing insights to help your business grow online.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Digital Marketing Blog | TXPAGES Texas',
    description:
      'Insights on SEO, PPC, web design, and local marketing for Texas businesses from the team at TXPAGES.',
    url: '/blog',
    type: 'website',
  },
}

const CATEGORY_COLORS: Record<string, string> = {
  SEO: '#2ea3f2',
  PPC: '#be1f32',
  'Web Design': '#974df3',
  'Local SEO': '#2ea3f2',
  'Content Marketing': '#be1f32',
  default: '#2ea3f2',
}

function getCategoryColor(categories: string[]): string {
  const cat = categories[0] ?? ''
  return CATEGORY_COLORS[cat] ?? CATEGORY_COLORS.default
}

export default async function BlogIndexPage() {
  const { posts } = await fetchBlogData()
  const published = getPublishedPosts(posts)

  return (
    <>
      <SiteNav />
      <main id="main-content">
        {/* Hero banner */}
        <section
          className="pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden"
          style={{ backgroundColor: '#212e64' }}
          aria-labelledby="blog-index-heading"
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
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-[#8892b0]" role="list">
                <li>
                  <Link href="/" className="hover:text-[#2ea3f2] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium" aria-current="page">
                  Blog
                </li>
              </ol>
            </nav>

            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
              Blog &amp; Resources
            </span>
            <h1
              id="blog-index-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Digital Marketing Insights for{' '}
              <span style={{ color: '#2ea3f2' }}>Texas Business Owners</span>
            </h1>
            <p className="text-[#8892b0] text-lg max-w-2xl leading-relaxed">
              Practical SEO, PPC, web design, and local marketing advice from the TXPAGES team — built to help Texas businesses grow online.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section
          className="py-20 lg:py-28"
          style={{ backgroundColor: '#0f1530' }}
          aria-label="Blog posts"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {published.length === 0 ? (
              <div className="text-center py-24">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: '#2ea3f218' }}
                >
                  <svg className="w-8 h-8 text-[#2ea3f2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Posts Coming Soon
                </h2>
                <p className="text-[#8892b0] max-w-md mx-auto leading-relaxed">
                  We&apos;re preparing helpful digital marketing content for Texas businesses. Check back soon.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-md bg-[#2ea3f2] text-white font-semibold text-sm hover:bg-[#1a8ed9] transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {published.map((post) => {
                  const color = getCategoryColor(post.categories)
                  const category = post.categories[0] ?? post.tags[0] ?? 'Marketing'
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group rounded-xl border border-[#2a3870] bg-[#1e2a5e] overflow-hidden card-lift flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ea3f2]"
                      aria-label={`Read: ${post.title}`}
                    >
                      {/* Hero image */}
                      {post.heroImageUrl && (
                        <div className="overflow-hidden aspect-video">
                          <img
                            src={post.heroImageUrl}
                            alt={`Hero image for ${post.title}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}

                      {/* Color top strip if no image */}
                      {!post.heroImageUrl && (
                        <div className="h-1 w-full shrink-0" style={{ backgroundColor: color }} aria-hidden="true" />
                      )}

                      <div className="p-6 flex flex-col flex-1">
                        {/* Meta row */}
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="px-2.5 py-1 rounded-full text-xs font-bold shrink-0"
                            style={{ backgroundColor: `${color}20`, color }}
                          >
                            {category}
                          </span>
                          <span className="text-xs text-[#8892b0]">
                            {post.readingTimeMinutes} min read
                          </span>
                        </div>

                        {/* Title */}
                        <h2
                          className="text-base font-bold text-white mb-3 group-hover:text-[#2ea3f2] transition-colors leading-snug"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-sm text-[#8892b0] leading-relaxed mb-5 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Footer row */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2a3870]">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${color}20` }}
                              aria-hidden="true"
                            >
                              <svg className="w-3.5 h-3.5" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <span className="text-xs text-[#8892b0]">{post.author}</span>
                          </div>
                          <span className="text-xs text-[#8892b0]">
                            {formatPostDate(post.publishAt)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
