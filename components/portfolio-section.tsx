const PROJECTS = [
  {
    category: 'Web Design & SEO',
    title: 'Texas Auto Dealership',
    result: '312% increase in organic search traffic within 6 months.',
    tags: ['Web Design', 'SEO', 'Local Listings'],
    color: '#2ea3f2',
    placeholder: '/placeholder.svg?height=220&width=420',
  },
  {
    category: 'PPC Management',
    title: 'Stephenville HVAC Company',
    result: 'Cost-per-lead reduced by 58% with targeted Google Ads campaign.',
    tags: ['PPC', 'Google Ads', 'Conversion Optimization'],
    color: '#be1f32',
    placeholder: '/placeholder.svg?height=220&width=420',
  },
  {
    category: 'Local SEO',
    title: 'Erath County Law Firm',
    result: 'Ranked #1 in Google Maps for 12 target local keywords.',
    tags: ['Local SEO', 'Google Business', 'Citations'],
    color: '#974df3',
    placeholder: '/placeholder.svg?height=220&width=420',
  },
]

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#181f4a' }}
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
              Portfolio &amp; Case Studies
            </span>
            <h2
              id="portfolio-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Real Results for Real{' '}
              <span style={{ color: '#2ea3f2' }}>Texas Businesses</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-[#2ea3f2] hover:text-white transition-colors"
            aria-label="See all TXPAGES case studies and portfolio work"
          >
            View All Case Studies
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group rounded-xl border border-[#2a3870] bg-[#1e2a5e] overflow-hidden card-lift"
              aria-label={`Case study: ${project.title}`}
            >
              {/* Image area */}
              <div className="relative overflow-hidden h-48" style={{ backgroundColor: '#212e64' }}>
                <img
                  src={project.placeholder}
                  alt={`${project.title} — TXPAGES Texas Digital Marketing case study`}
                  className="w-full h-full object-cover opacity-40"
                  loading="lazy"
                  width={420}
                  height={220}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${project.color}20`, border: `2px solid ${project.color}50` }}
                  >
                    <svg className="w-7 h-7" style={{ color: project.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: `${project.color}25`, color: project.color }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-[#8892b0] leading-relaxed mb-4">{project.result}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-medium"
                      style={{ backgroundColor: '#2a3870', color: '#8892b0' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
