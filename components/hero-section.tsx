import Link from 'next/link'

const STATS = [
  { value: '500+', label: 'Texas Businesses Served' },
  { value: '15+', label: 'Years Local Expertise' },
  { value: '3x', label: 'Average Traffic Growth' },
  { value: '98%', label: 'Client Retention Rate' },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f1530 0%, #212e64 60%, #181f4a 100%)' }}
      aria-label="Hero — TXPAGES Texas Digital Marketing"
    >
      {/* Subtle grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#2ea3f2 1px, transparent 1px), linear-gradient(90deg, #2ea3f2 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(46,163,242,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(151,77,243,0.10) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left: copy */}
        <div className="flex-1 min-w-0 max-w-xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2ea3f2]/40 bg-[#2ea3f2]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2ea3f2] animate-pulse" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2ea3f2]">
              Texas Digital Growth Partner
            </span>
          </div>

          {/* H1 — primary keyword in first position */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Creating Digital Experiences
            <br />
            <span style={{ color: '#2ea3f2' }}>That Drive Growth</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#ccd6f6' }}>for Texas Businesses</span>
          </h1>

          {/* Lead paragraph — primary keywords woven in naturally */}
          <p className="text-lg sm:text-xl text-[#8892b0] leading-relaxed mb-8 max-w-2xl">
            TXPAGES is your complete Texas digital marketing partner — delivering AI-powered SEO, PPC management, web design, local listings, and content marketing strategies that drive real, measurable growth for small and mid-sized Texas businesses.
          </p>

          {/* CTA pair */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-[#2ea3f2] text-white font-bold text-base hover:bg-[#1a8ed9] transition-colors focus-visible:outline-2 focus-visible:outline-[#2ea3f2]"
              aria-label="Get your free Texas business visibility report"
            >
              Get Your Free Visibility Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md border border-[#2a3870] text-[#ccd6f6] font-semibold text-base hover:border-[#2ea3f2] hover:text-[#2ea3f2] transition-colors"
              aria-label="Explore TXPAGES digital marketing services"
            >
              Explore Our Services
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2ea3f2]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#8892b0]">Stephenville, TX Local Team</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2ea3f2]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#8892b0]">No Long-Term Contracts</span>
            </div>
          </div>
        </div>{/* end left copy column */}

        {/* Right: hero image */}
        <div className="flex-shrink-0 w-full lg:w-[52%] xl:w-[54%]">
          <img
            src="/txpages-home-page-banner.png"
            alt="Texas digital marketing growth — laptop showing Texas connectivity map, rising bar chart, and smartphone with 5-star local SEO results for Texas businesses"
            width={1400}
            height={933}
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto rounded-2xl object-cover"
            style={{ boxShadow: '0 24px 80px rgba(46,163,242,0.18)' }}
          />
        </div>
        </div>{/* end flex row */}

        {/* Stats row */}
        <div className="mt-16 pt-12 border-t border-[#2a3870] grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{ color: '#2ea3f2', fontFamily: 'var(--font-display)' }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[#8892b0] leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0f1530)' }}
        aria-hidden="true"
      />
    </section>
  )
}
