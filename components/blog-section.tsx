const POSTS = [
  {
    category: 'SEO',
    title: 'How Texas Small Businesses Can Dominate Local Search in 2025',
    excerpt:
      'Local SEO has never been more important. Here are the exact strategies TXPAGES uses to put Texas businesses at the top of Google Maps and local search results.',
    date: 'May 8, 2025',
    readTime: '5 min read',
    href: '/blog',
    color: '#2ea3f2',
  },
  {
    category: 'PPC',
    title: 'The Complete Guide to Google Ads for Texas Service Businesses',
    excerpt:
      'Learn how to set up, optimize, and scale Google Ads campaigns that generate qualified leads — without wasting your budget on the wrong clicks.',
    date: 'April 22, 2025',
    readTime: '7 min read',
    href: '/blog',
    color: '#be1f32',
  },
  {
    category: 'Web Design',
    title: '7 Web Design Mistakes Killing Your Texas Business Conversions',
    excerpt:
      'Most local business websites lose leads before visitors even read a word. Discover the most common design errors and how to fix them fast.',
    date: 'April 10, 2025',
    readTime: '4 min read',
    href: '/blog',
    color: '#974df3',
  },
]

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#181f4a' }}
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
              Blog &amp; Resources
            </span>
            <h2
              id="blog-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Digital Marketing Insights for{' '}
              <span style={{ color: '#2ea3f2' }}>Texas Business Owners</span>
            </h2>
          </div>
          <a
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-[#2ea3f2] hover:text-white transition-colors"
            aria-label="Read all TXPAGES digital marketing blog posts"
          >
            Read All Posts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="group rounded-xl border border-[#2a3870] bg-[#1e2a5e] overflow-hidden card-lift flex flex-col"
              aria-label={`Blog post: ${post.title}`}
            >
              {/* Category strip */}
              <div className="h-1 w-full" style={{ backgroundColor: post.color }} aria-hidden="true" />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: `${post.color}20`, color: post.color }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-[#8892b0]">{post.readTime}</span>
                </div>

                <h3
                  className="text-base font-bold text-white mb-3 group-hover:text-[#2ea3f2] transition-colors leading-snug flex-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {post.title}
                </h3>

                <p className="text-sm text-[#8892b0] leading-relaxed mb-5">{post.excerpt}</p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2a3870]">
                  <span className="text-xs text-[#8892b0]">{post.date}</span>
                  <a
                    href={post.href}
                    className="inline-flex items-center gap-1 text-xs font-bold transition-colors"
                    style={{ color: post.color }}
                    aria-label={`Read the full article: ${post.title}`}
                  >
                    Read More
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
