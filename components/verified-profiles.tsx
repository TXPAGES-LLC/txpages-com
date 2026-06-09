const PROFILES = [
  {
    label: 'Google Business Profile',
    description: 'Read our reviews on Google',
    href: 'https://maps.google.com/?cid=905136393401498971',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" fill="none">
        <path d="M21.805 10.023H12v3.955h5.637c-.247 1.37-1.01 2.531-2.152 3.31v2.748h3.484c2.038-1.876 3.213-4.638 3.213-7.91 0-.621-.057-1.22-.163-1.803-.073-.302-.134-.3-.214-.3z" fill="#4285F4"/>
        <path d="M12 22c2.763 0 5.08-.917 6.775-2.487l-3.303-2.565c-.916.615-2.088.977-3.472.977-2.667 0-4.927-1.8-5.733-4.222H2.85v2.646A10.25 10.25 0 0012 22z" fill="#34A853"/>
        <path d="M6.267 13.703A6.208 6.208 0 016 12c0-.592.082-1.168.232-1.717V7.637H2.85A10.25 10.25 0 002 12c0 1.653.393 3.215 1.087 4.597l3.18-2.894z" fill="#FBBC05"/>
        <path d="M12 5.807c1.504 0 2.854.517 3.917 1.532l2.938-2.937C16.963 2.891 14.65 2 12 2A10.25 10.25 0 002.85 7.637l3.38 2.628C7.078 7.6 9.338 5.807 12 5.807z" fill="#EA4335"/>
      </svg>
    ),
    accent: '#4285F4',
  },
  {
    label: 'Bing Maps',
    description: 'Find us on Bing Maps',
    href: 'https://www.bing.com/maps?ss=ypid.YN873x6875504846262281297&mkt=en-US',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" fill="currentColor">
        <path d="M5 3v17.3l5.4-2.4 5.3 2.9L19 18V8.7l-8.5-3.2L9 6.9V3H5zm4 5.4l7 2.6v5.2l-7-3.8V8.4z" fill="#00809D"/>
      </svg>
    ),
    accent: '#00809D',
  },
  {
    label: 'Trusted Local Directory',
    description: 'Verified local business listing',
    href: 'https://trustedlocaldirectory.com/listing/txpages-65149d9f3f099.html',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    accent: '#2ea3f2',
  },
  {
    label: 'SuperPages',
    description: 'Our SuperPages business profile',
    href: 'https://www.superpages.com/stephenville-tx/bpp/txpages-559622860',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    accent: '#FF6600',
  },
  {
    label: 'Yellow Pages',
    description: 'Find us on Yellow Pages',
    href: 'https://www.yellowpages.com/stephenville-tx/mip/txpages-559622860',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" fill="currentColor">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2zm0-8h2v6h-2z" fill="#FFB800"/>
      </svg>
    ),
    accent: '#FFB800',
  },
  {
    label: "Judy's Book",
    description: 'Reviews on JudysBook',
    href: 'https://www.judysbook.com/TXPAGES-Advertising-Agency-stephenville-r40037233.htm',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    accent: '#974df3',
  },
]

export default function VerifiedProfiles() {
  return (
    <section
      aria-labelledby="verified-profiles-heading"
      className="py-16 lg:py-20"
      style={{ backgroundColor: '#0f1530' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
            Transparency &amp; Trust
          </span>
          <h2
            id="verified-profiles-heading"
            className="text-2xl sm:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Find Us Online
          </h2>
          <p className="text-[#8892b0] text-base max-w-lg mx-auto leading-relaxed">
            TXPAGES maintains verified profiles on the platforms below. These are the only approved listings — no third-party aggregators or unauthorized profiles.
          </p>
        </div>

        {/* Profile cards */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
        >
          {PROFILES.map((profile) => (
            <li key={profile.label}>
              <a
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.label} — ${profile.description} (opens in new tab)`}
                className="group flex items-center gap-4 rounded-xl border border-[#2a3870] px-5 py-4 transition-all duration-200 hover:border-[#2ea3f2]/50 hover:-translate-y-0.5"
                style={{ backgroundColor: '#1e2a5e' }}
              >
                {/* Icon container */}
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                  style={{ backgroundColor: `${profile.accent}18`, color: profile.accent }}
                >
                  {profile.icon}
                </span>

                {/* Label */}
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold text-white group-hover:text-[#2ea3f2] transition-colors leading-tight">
                    {profile.label}
                  </span>
                  <span className="block text-xs text-[#8892b0] mt-0.5 truncate">
                    {profile.description}
                  </span>
                </span>

                {/* External link arrow */}
                <svg
                  className="w-4 h-4 text-[#8892b0] group-hover:text-[#2ea3f2] shrink-0 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
