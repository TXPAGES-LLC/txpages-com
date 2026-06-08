const STEPS = [
  {
    step: '1',
    title: 'Discovery',
    description:
      'We start with a deep dive into your business, goals, competitors, and current digital footprint. A thorough audit reveals exactly where opportunities and gaps exist.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: '2',
    title: 'Strategy',
    description:
      'Our Texas marketing team builds a custom growth plan tailored to your budget, timeline, and target market — no cookie-cutter packages.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    step: '3',
    title: 'Implementation',
    description:
      'We execute — building or optimizing your website, launching campaigns, setting up local listings, and publishing targeted content across all channels.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: '4',
    title: 'Reporting',
    description:
      'Monthly performance reports show rankings, traffic, leads, and conversions — with plain-language summaries so you always know your ROI.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    step: '5',
    title: 'Ongoing Support',
    description:
      'Quarterly strategy updates keep your marketing ahead of algorithm changes and market shifts. We are a long-term partner, not a one-time vendor.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#0f1530' }}
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
            Our Process
          </span>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            How We Drive{' '}
            <span style={{ color: '#2ea3f2' }}>Results for Texas Businesses</span>
          </h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto leading-relaxed">
            A proven, repeatable framework that turns digital presence into measurable business growth.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div
            className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px"
            style={{ backgroundColor: '#2a3870' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.step} className="flex flex-col items-center lg:items-center text-center">
                {/* Step bubble */}
                <div
                  className="relative w-20 h-20 rounded-full border-2 flex flex-col items-center justify-center mb-5 shrink-0 z-10"
                  style={{
                    borderColor: '#2ea3f2',
                    backgroundColor: '#0f1530',
                    color: '#2ea3f2',
                  }}
                >
                  {step.icon}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white"
                    style={{ backgroundColor: '#2ea3f2' }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#8892b0] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#2ea3f2] text-white font-bold text-base hover:bg-[#1a8ed9] transition-colors"
            aria-label="Start your TXPAGES digital marketing process"
          >
            Start Your Growth Journey
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
