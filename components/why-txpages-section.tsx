const REASONS = [
  {
    number: '01',
    title: 'Local Texas Expertise',
    description:
      'Based in Stephenville, TX, our team understands the Texas market, its communities, and what drives local customers to take action. We are not a national agency — we are your neighbors.',
    accent: '#2ea3f2',
  },
  {
    number: '02',
    title: 'AI-Powered Digital Marketing',
    description:
      'We leverage the latest AI tools and data-driven strategies to maximize your SEO rankings, optimize PPC spend, and uncover growth opportunities your competitors miss.',
    accent: '#2ea3f2',
  },
  {
    number: '03',
    title: 'Complete One-Stop Partnership',
    description:
      'Web design, SEO, PPC, local listings, content — all under one roof. No juggling multiple vendors or losing time to coordination gaps. We handle everything.',
    accent: '#be1f32',
  },
  {
    number: '04',
    title: 'Transparent Reporting',
    description:
      'Monthly performance reports and quarterly strategy reviews keep you in the loop. You see exactly what is working, what we are optimizing, and the ROI on every dollar spent.',
    accent: '#be1f32',
  },
  {
    number: '05',
    title: 'Proven Track Record',
    description:
      'TXPAGES has helped hundreds of Texas businesses grow their online presence — with real case studies and testimonials from businesses like yours across every major industry.',
    accent: '#974df3',
  },
  {
    number: '06',
    title: 'No Long-Term Lock-Ins',
    description:
      'We earn your business every month. Our flexible service agreements let you scale up or adjust your marketing mix as your business grows — without being locked into rigid contracts.',
    accent: '#974df3',
  },
]


export default function WhyTXPAGESSection() {
  return (
    <section
      id="why-txpages"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#181f4a' }}
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
              Why Choose TXPAGES
            </span>
            <h2
              id="why-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Your Digital Growth Partner in{' '}
              <span style={{ color: '#2ea3f2' }}>Texas</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#8892b0] text-lg leading-relaxed mb-6">
              Hundreds of Texas businesses trust TXPAGES to manage their digital presence. We combine local community knowledge with cutting-edge marketing technology to deliver results that matter to your bottom line.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2ea3f2] hover:text-white transition-colors"
              aria-label="Request a free Texas business visibility report from TXPAGES"
            >
              Request Your Free Visibility Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {REASONS.map((reason) => (
            <div
              key={reason.number}
              className="rounded-xl border border-[#2a3870] bg-[#1e2a5e]/60 p-6"
            >
              <div
                className="text-4xl font-black mb-4 leading-none"
                style={{ color: `${reason.accent}30`, fontFamily: 'var(--font-display)' }}
                aria-hidden="true"
              >
                {reason.number}
              </div>
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {reason.title}
              </h3>
              <p className="text-[#8892b0] text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
