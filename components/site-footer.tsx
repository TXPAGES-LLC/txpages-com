import type { ReactNode } from 'react'

const SERVICE_LINKS = [
  { label: 'Website Design & Development', href: '/services/web-design' },
  { label: 'Search Engine Optimization', href: '/services/seo' },
  { label: 'PPC Management', href: '/services/ppc' },
  { label: 'Local SEO & Listings', href: '/services/local-seo' },
  { label: 'Content Marketing', href: '/services/content-marketing' },
  { label: 'Monthly Reporting', href: '/services/reporting-support' },
]

const COMPANY_LINKS = [
  { label: 'Why TXPAGES', href: '/why-txpages' },
  { label: 'Our Process', href: '/process' },
  { label: 'Areas We Serve', href: '/areas/stephenville-tx' },
  { label: 'Blog & Resources', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
]

const SOCIAL_LINKS: { label: string; href: string; icon?: ReactNode }[] = []

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: '#0a0f24', borderTop: '1px solid #2a3870' }}
      role="contentinfo"
      aria-label="TXPAGES site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" aria-label="TXPAGES — Texas Digital Marketing Agency — Home">
              <img
                src="/txpagesonlinesolutions.png"
                alt="TXPAGES Online Solutions — Texas Digital Marketing Agency Logo"
                width={400}
                height={116}
                className="h-24 w-auto object-contain mb-4"
                loading="lazy"
              />
            </a>
            <p className="text-sm text-[#8892b0] leading-relaxed mb-5">
              Your complete digital growth partner in Texas. AI-powered SEO, PPC, web design, and local marketing for small and mid-sized Texas businesses.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md flex items-center justify-center text-[#8892b0] hover:text-[#2ea3f2] hover:bg-[#2ea3f2]/10 transition-colors"
                  aria-label={`TXPAGES on ${s.label}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#8892b0] hover:text-[#2ea3f2] transition-colors"
                    aria-label={`Go to ${link.label} service page`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#8892b0] hover:text-[#2ea3f2] transition-colors"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact TXPAGES
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:2549680162"
                className="flex items-start gap-3 group"
                aria-label="Call TXPAGES at 254-968-0162"
              >
                <svg className="w-4 h-4 text-[#2ea3f2] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-[#8892b0] group-hover:text-[#2ea3f2] transition-colors">254-968-0162</span>
              </a>
              <a
                href=""
                className="flex items-start gap-3 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit TXPAGES.com"
              >
                <svg className="w-4 h-4 text-[#2ea3f2] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-sm text-[#8892b0] group-hover:text-[#2ea3f2] transition-colors">www.txpages.com</span>
              </a>
              <a
                href="https://maps.google.com/?cid=905136393401498971"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
                aria-label="View TXPAGES on Google Maps — 164 N Graham, Stephenville, TX 76401"
              >
                <svg className="w-4 h-4 text-[#2ea3f2] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="text-sm text-[#8892b0] group-hover:text-[#2ea3f2] transition-colors not-italic leading-relaxed">
                  164 N Graham<br />
                  Stephenville, TX 76401
                </address>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a3870] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8892b0]">
            &copy; {currentYear} TXPAGES. All rights reserved. Texas Digital Marketing Agency — Stephenville, TX.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="text-xs text-[#8892b0] hover:text-[#2ea3f2] transition-colors">Privacy Policy</a>
            <span className="text-[#2a3870]" aria-hidden="true">|</span>
            <a href="/terms-of-service" className="text-xs text-[#8892b0] hover:text-[#2ea3f2] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
