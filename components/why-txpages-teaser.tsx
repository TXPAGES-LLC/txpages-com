import Link from 'next/link'

const HIGHLIGHTS = [
  {
    title: 'Local Texas Expertise',
    description: 'Based in Stephenville — we know the Texas market, its communities, and what drives local customers.',
    accent: '#2ea3f2',
  },
  {
    title: 'AI-Powered Strategies',
    description: 'We use the latest AI tools and data to maximize SEO rankings and uncover growth your competitors miss.',
    accent: '#2ea3f2',
  },
  {
    title: 'Transparent Reporting',
    description: 'Monthly reports and quarterly reviews keep you in the loop on every dollar and every result.',
    accent: '#be1f32',
  },
  {
    title: 'No Long-Term Lock-Ins',
    description: 'Flexible agreements that scale with your business — we earn your business every single month.',
    accent: '#be1f32',
  },
]

export default function WhyTXPAGESTeaser() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ backgroundColor: '#181f4a' }}
      aria-labelledby="why-teaser-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
              Why Choose TXPAGES
            </span>
            <h2
              id="why-teaser-heading"
              className="text-3xl sm:text-4xl font-bold text-white text-balance leading-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Your Digital Growth Partner in{' '}
              <span style={{ color: '#2ea3f2' }}>Texas</span>
            </h2>
            <p className="text-[#8892b0] text-base leading-relaxed mb-8">
              Hundreds of Texas businesses trust TXPAGES to manage their digital presence. We combine local community knowledge with cutting-edge marketing technology to deliver results that matter.
            </p>
            <Link
              href="/why-txpages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-bold text-sm text-white transition-colors"
              style={{ backgroundColor: '#2ea3f2' }}
              aria-label="Learn more about why Texas businesses choose TXPAGES"
            >
              Learn Why Businesses Choose Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#2a3870] bg-[#1e2a5e]/60 p-5"
              >
                <div
                  className="w-2 h-2 rounded-full mb-3"
                  style={{ backgroundColor: item.accent }}
                  aria-hidden="true"
                />
                <h3
                  className="text-sm font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#8892b0] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
