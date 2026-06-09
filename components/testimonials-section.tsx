const TESTIMONIALS = [
  {
    quote:
      'TXPAGES rebuilt our website and took over our SEO. Within four months we were ranking on the first page for every service we offer in our area. The phone just started ringing more.',
    name: 'James R.',
    role: 'Owner, Local HVAC Services',
    stars: 5,
  },
  {
    quote:
      'Before TXPAGES, we had almost no online presence. Now our Google Business profile gets hundreds of views a month, and we have seen a 40% increase in new customer calls. Worth every penny.',
    name: 'Maria T.',
    role: 'Co-Owner, Family Dental Practice',
    stars: 5,
  },
  {
    quote:
      'They manage our entire digital marketing — PPC, SEO, social. We get a monthly report that actually makes sense. I finally feel like I have a partner who understands small business in Texas.',
    name: 'David K.',
    role: 'Owner, Independent Auto Repair',
    stars: 5,
  },
  {
    quote:
      'The TXPAGES team is hands-on and responsive. They explained everything in plain language and set realistic expectations. Our content strategy is bringing in leads from cities we never targeted before.',
    name: 'Sarah M.',
    role: 'Marketing Director, Texas Real Estate Group',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#0f1530' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
            Client Reviews &amp; Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What Texas Business Owners Say{' '}
            <span style={{ color: '#2ea3f2' }}>About TXPAGES</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-xl border border-[#2a3870] bg-[#1e2a5e] p-7 flex flex-col gap-4"
              aria-label={`Testimonial from ${t.name}, ${t.role}`}
            >
              <StarRating count={t.stars} />
              <p className="text-[#ccd6f6] text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3 pt-2 border-t border-[#2a3870]">
                {/* Avatar placeholder */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ backgroundColor: '#2ea3f2' }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-[#8892b0]">{t.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 py-8 border-t border-[#2a3870]">
          <div className="flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-[#ccd6f6] font-semibold">4.9/5 Average Rating</span>
          </div>
          <div className="h-5 w-px bg-[#2a3870] hidden md:block" aria-hidden="true" />
          <span className="text-sm text-[#8892b0]">500+ Texas Businesses Served</span>
          <div className="h-5 w-px bg-[#2a3870] hidden md:block" aria-hidden="true" />
          <span className="text-sm text-[#8892b0]">Locally Owned &amp; Operated</span>
          <div className="h-5 w-px bg-[#2a3870] hidden md:block" aria-hidden="true" />
          <span className="text-sm text-[#8892b0]">Serving Texas Since 2009</span>
        </div>
      </div>
    </section>
  )
}
