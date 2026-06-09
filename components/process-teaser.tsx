import Link from 'next/link'

const STEPS_PREVIEW = [
  { step: '1', title: 'Discovery', description: 'We audit your digital footprint and identify where real opportunities exist.' },
  { step: '2', title: 'Strategy', description: 'A custom growth plan built around your budget, market, and business goals.' },
  { step: '3', title: 'Implementation', description: 'We execute across SEO, paid ads, web, listings, and content — all in sync.' },
  { step: '4', title: 'Reporting & Support', description: 'Monthly reports and ongoing optimization keep results moving forward.' },
]

export default function ProcessTeaser() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ backgroundColor: '#0f1530' }}
      aria-labelledby="process-teaser-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
              Our Process
            </span>
            <h2
              id="process-teaser-heading"
              className="text-3xl sm:text-4xl font-bold text-white text-balance leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              How We Drive Results for{' '}
              <span style={{ color: '#2ea3f2' }}>Texas Businesses</span>
            </h2>
          </div>
          <Link
            href="/process"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-[#2ea3f2] hover:text-white transition-colors"
            aria-label="See the full TXPAGES digital marketing process"
          >
            See the Full Process
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Steps row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS_PREVIEW.map((step, i) => (
            <div key={step.step} className="relative flex flex-col">
              {/* Connector line between cards on desktop */}
              {i < STEPS_PREVIEW.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px -translate-y-1/2 z-0"
                  style={{ backgroundColor: '#2a3870', width: 'calc(100% - 2rem)' }}
                  aria-hidden="true"
                />
              )}
              <div className="rounded-xl border border-[#2a3870] bg-[#1e2a5e]/60 p-6 relative z-10 h-full">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-black text-white mb-4"
                  style={{ backgroundColor: '#2ea3f2', fontFamily: 'var(--font-display)' }}
                  aria-label={`Step ${step.step}`}
                >
                  {step.step}
                </span>
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#8892b0] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
