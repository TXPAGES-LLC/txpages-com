'use client'

import { useState, useEffect, useRef, type ReactElement } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SERVICES_DATA } from '@/lib/services-data'

const SERVICE_ICONS: Record<string, ReactElement> = {
  'web-design': (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  'seo': (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  'ppc': (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
    </svg>
  ),
  'local-seo': (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  'content-marketing': (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  'reporting-support': (
    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
}

const OTHER_NAV_LINKS = [
  { label: 'Why TXPAGES', href: '/why-txpages' },
  { label: 'Our Process', href: '/process' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  const isOnHomepage = pathname === '/'

  const handleAnchorClick = (href: string) => {
    setMenuOpen(false)
    if (isOnHomepage && href.startsWith('/#')) {
      const id = href.slice(2)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md border-b border-gray-200' : 'border-b border-gray-100'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="TXPAGES — Texas Digital Marketing Agency — Home"
        >
          <img
            src="/txpagesonlinesolutions.png"
            alt="TXPAGES Online Solutions — Texas Digital Marketing Agency"
            width={180}
            height={52}
            className="h-10 w-auto object-contain"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {/* Services dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen((v) => !v)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#1e2a5e] hover:text-[#2ea3f2] transition-colors duration-200 rounded-md hover:bg-[#2ea3f2]/10 cursor-pointer"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="services-dropdown"
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown panel */}
            {servicesOpen && (
              <div
                id="services-dropdown"
                role="menu"
                aria-label="Services submenu"
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] rounded-xl border border-gray-200 bg-white shadow-2xl p-3"
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="grid grid-cols-2 gap-1">
                  {SERVICES_DATA.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-start gap-3 rounded-lg p-3 hover:bg-[#2ea3f2]/10 transition-colors group"
                    >
                      <span
                        className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-md shrink-0 transition-colors"
                        style={{ backgroundColor: `${service.accentColor}18`, color: service.accentColor }}
                      >
                        {SERVICE_ICONS[service.slug]}
                      </span>
                      <span className="flex flex-col min-w-0">
                        <span className="text-sm font-semibold text-[#1e2a5e] group-hover:text-[#2ea3f2] transition-colors leading-tight">
                          {service.shortTitle}
                        </span>
                        <span className="text-xs text-gray-500 leading-snug mt-0.5 line-clamp-2">
                          {service.tagline}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <Link
                    href="/#services"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#2ea3f2] hover:text-white transition-colors py-1"
                  >
                    View All Services
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </li>

          {OTHER_NAV_LINKS.map((link) => (
            <li key={link.href}>
              {isOnHomepage && link.href.startsWith('/#') ? (
                <button
                  onClick={() => handleAnchorClick(link.href)}
                  className="px-3 py-2 text-sm font-medium text-[#1e2a5e] hover:text-[#2ea3f2] transition-colors duration-200 rounded-md hover:bg-[#2ea3f2]/10 cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-[#1e2a5e] hover:text-[#2ea3f2] transition-colors duration-200 rounded-md hover:bg-[#2ea3f2]/10"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:2549680162"
            className="text-sm font-semibold text-[#2ea3f2] hover:text-white transition-colors"
            aria-label="Call TXPAGES at 254-968-0162"
          >
            254-968-0162
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md bg-[#2ea3f2] text-white text-sm font-semibold hover:bg-[#1a8ed9] transition-colors"
          >
            Free Visibility Report
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md text-[#1e2a5e] hover:text-[#2ea3f2] hover:bg-[#2ea3f2]/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" role="list">
            {/* Services accordion */}
            <li>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#1e2a5e] hover:text-[#2ea3f2] hover:bg-[#2ea3f2]/10 rounded-md transition-colors cursor-pointer"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <ul className="mt-1 ml-4 flex flex-col gap-0.5 border-l border-gray-200 pl-4" role="list">
                  {SERVICES_DATA.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-gray-600 hover:text-[#2ea3f2] rounded-md hover:bg-[#2ea3f2]/10 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span style={{ color: service.accentColor }}>
                          {SERVICE_ICONS[service.slug]}
                        </span>
                        {service.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {OTHER_NAV_LINKS.map((link) => (
              <li key={link.href}>
                {isOnHomepage && link.href.startsWith('/#') ? (
                  <button
                    onClick={() => handleAnchorClick(link.href)}
                    className="w-full text-left px-4 py-3 text-base font-medium text-[#1e2a5e] hover:text-[#2ea3f2] hover:bg-[#2ea3f2]/10 rounded-md transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-[#1e2a5e] hover:text-[#2ea3f2] hover:bg-[#2ea3f2]/10 rounded-md transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}

            <li className="pt-3 border-t border-gray-200 mt-2">
              <a
                href="tel:2549680162"
                className="flex items-center gap-2 px-4 py-3 text-[#2ea3f2] font-semibold"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                254-968-0162
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="block w-full mt-1 px-4 py-3 rounded-md bg-[#2ea3f2] text-white font-semibold hover:bg-[#1a8ed9] transition-colors text-center"
                onClick={() => setMenuOpen(false)}
              >
                Get Free Visibility Report
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
