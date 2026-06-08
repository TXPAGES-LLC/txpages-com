export default function CTABanner() {
  return (
    <section
      className="py-16 lg:py-20"
      style={{ backgroundColor: '#2ea3f2' }}
      aria-label="Call to action — Start growing your Texas business with TXPAGES"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Ready to Grow Your Texas Business Online?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Join hundreds of Texas businesses that trust TXPAGES for SEO, PPC, web design, and local marketing. Your free visibility report takes less than 2 minutes to request.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-base text-[#2ea3f2] hover:text-[#1a8ed9] transition-colors"
            style={{ backgroundColor: '#ffffff' }}
            aria-label="Get your free Texas business visibility report from TXPAGES"
          >
            Get Your Free Visibility Report
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="tel:2549680162"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-base text-white border-2 border-white/60 hover:border-white transition-colors"
            aria-label="Call TXPAGES at 254-968-0162"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            254-968-0162
          </a>
        </div>
      </div>
    </section>
  )
}
