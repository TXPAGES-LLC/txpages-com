import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'
import CTABanner from '@/components/cta-banner'
import { fetchBlogData, getPublishedPosts, formatPostDate } from '@/lib/blog/source'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { posts } = await fetchBlogData()
  const published = getPublishedPosts(posts)
  const post = published.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Post Not Found | TXPAGES Blog' }
  }

  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt
  const canonical = post.seo?.canonicalUrl || `/blog/${slug}`
  const ogImage = post.seo?.ogImageUrl || post.heroImageUrl

  return {
    title: `${title} | TXPAGES Blog`,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: post.publishAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      ...(ogImage && {
        images: [{ url: ogImage, alt: post.title }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  }
}

const CATEGORY_COLORS: Record<string, string> = {
  SEO: '#2ea3f2',
  PPC: '#be1f32',
  'Web Design': '#974df3',
  'Local SEO': '#2ea3f2',
  'Content Marketing': '#be1f32',
  default: '#2ea3f2',
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const { posts } = await fetchBlogData()
  const published = getPublishedPosts(posts)
  const post = published.find((p) => p.slug === slug)

  if (!post) notFound()

  const category = post.categories[0] ?? post.tags[0] ?? 'Marketing'
  const color = CATEGORY_COLORS[category] ?? CATEGORY_COLORS.default

  // Related posts: same category, excluding current
  const related = published
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.categories.some((c) => post.categories.includes(c)) ||
          p.tags.some((t) => post.tags.includes(t)))
    )
    .slice(0, 3)

  return (
    <>
      <SiteNav />
      <main id="main-content">
        {/* Post hero */}
        <section
          className="pt-28 pb-10 lg:pt-36 lg:pb-14 relative overflow-hidden"
          style={{ backgroundColor: '#212e64' }}
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
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-[#8892b0] flex-wrap" role="list">
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
                <li>
                  <Link href="/blog" className="hover:text-[#2ea3f2] transition-colors">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white font-medium truncate max-w-[180px]" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: `${color}20`, color }}
              >
                {category}
              </span>
              <span className="text-xs text-[#8892b0]">{post.readingTimeMinutes} min read</span>
              <span className="text-xs text-[#8892b0]">{formatPostDate(post.publishAt)}</span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {post.title}
            </h1>

            {/* Author row */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${color}20` }}
                aria-hidden="true"
              >
                <svg className="w-4 h-4" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{post.author}</p>
                {post.updatedAt && (
                  <p className="text-xs text-[#8892b0]">
                    Updated {formatPostDate(post.updatedAt)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        {post.heroImageUrl && (
          <div
            className="w-full"
            style={{ backgroundColor: '#0f1530' }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <img
                src={post.heroImageUrl}
                alt={`Featured image for ${post.title}`}
                className="w-full rounded-xl object-cover"
                style={{ maxHeight: '480px' }}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        )}

        {/* Article body */}
        <section
          className="py-12 lg:py-16"
          style={{ backgroundColor: '#0f1530' }}
          aria-label="Article content"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12 items-start">
              {/* Prose content */}
              <article
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              {/* Sidebar */}
              <aside className="hidden lg:block sticky top-24 mt-0" aria-label="Post sidebar">
                {/* Tags */}
                {post.tags.length > 0 && (
                  <div
                    className="rounded-xl border border-[#2a3870] bg-[#1e2a5e] p-5 mb-4"
                  >
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-4">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs text-[#8892b0] border border-[#2a3870]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA card */}
                <div
                  className="rounded-xl border border-[#2ea3f2]/30 p-5"
                  style={{ backgroundColor: '#1e2a5e' }}
                >
                  <h3 className="text-sm font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    Ready to Grow Your Texas Business?
                  </h3>
                  <p className="text-xs text-[#8892b0] leading-relaxed mb-4">
                    Get a free visibility report and see exactly where your business stands online.
                  </p>
                  <Link
                    href="/#contact"
                    className="block w-full text-center px-4 py-2.5 rounded-md bg-[#2ea3f2] text-white text-xs font-bold hover:bg-[#1a8ed9] transition-colors"
                  >
                    Get Free Report
                  </Link>
                  <a
                    href="tel:2549680162"
                    className="block w-full text-center mt-2 px-4 py-2.5 rounded-md border border-[#2a3870] text-[#8892b0] text-xs font-semibold hover:text-white hover:border-[#2ea3f2]/50 transition-colors"
                  >
                    Call 254-968-0162
                  </a>
                </div>
              </aside>
            </div>

            {/* Tags (mobile) */}
            {post.tags.length > 0 && (
              <div className="lg:hidden mt-10 pt-8 border-t border-[#2a3870]">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md text-xs text-[#8892b0] border border-[#2a3870]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <div className="mt-10 pt-8 border-t border-[#2a3870] flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2ea3f2] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                All Posts
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#2ea3f2] text-white text-sm font-bold hover:bg-[#1a8ed9] transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section
            className="py-16 lg:py-20"
            style={{ backgroundColor: '#181f4a' }}
            aria-labelledby="related-posts-heading"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                id="related-posts-heading"
                className="text-xl font-bold text-white mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rel) => {
                  const relCategory = rel.categories[0] ?? rel.tags[0] ?? 'Marketing'
                  const relColor = CATEGORY_COLORS[relCategory] ?? CATEGORY_COLORS.default
                  return (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group rounded-xl border border-[#2a3870] bg-[#1e2a5e] overflow-hidden card-lift flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ea3f2]"
                      aria-label={`Read: ${rel.title}`}
                    >
                      {rel.heroImageUrl ? (
                        <div className="overflow-hidden aspect-video">
                          <img
                            src={rel.heroImageUrl}
                            alt={`Hero image for ${rel.title}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ) : (
                        <div className="h-1 w-full shrink-0" style={{ backgroundColor: relColor }} aria-hidden="true" />
                      )}
                      <div className="p-5 flex flex-col flex-1">
                        <span
                          className="self-start px-2.5 py-1 rounded-full text-xs font-bold mb-3"
                          style={{ backgroundColor: `${relColor}20`, color: relColor }}
                        >
                          {relCategory}
                        </span>
                        <h3
                          className="text-sm font-bold text-white group-hover:text-[#2ea3f2] transition-colors leading-snug mb-2"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {rel.title}
                        </h3>
                        <p className="text-xs text-[#8892b0] leading-relaxed line-clamp-2 mt-auto pt-3 border-t border-[#2a3870]">
                          {formatPostDate(rel.publishAt)} &middot; {rel.readingTimeMinutes} min read
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
