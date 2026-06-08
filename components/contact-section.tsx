'use client'

import { useEffect } from 'react'

export default function ContactSection() {
  useEffect(() => {
    // Load JotForm Feedback (lightbox) script
    if (!document.querySelector('script[src*="feedback2.js"]')) {
      const s1 = document.createElement('script')
      s1.src = 'https://cdn.jotfor.ms/s/static/latest/static/feedback2.js'
      s1.type = 'text/javascript'
      s1.async = true
      s1.onload = () => {
        if (typeof (window as any).JotformFeedback !== 'undefined') {
          new (window as any).JotformFeedback({
            formId: '261336073414047',
            base: 'https://form.jotform.com/',
            windowTitle: 'Contact Us – TXPAGES.com',
            backgroundColor: '#212e64',
            fontColor: '#FFFFFF',
            type: '0',
            height: 500,
            width: 700,
            openOnLoad: false,
          })
        }
      }
      document.body.appendChild(s1)
    }

    // Load embed handler
    if (!document.querySelector('script[src*="for-form-embed-handler"]')) {
      const s2 = document.createElement('script')
      s2.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'
      s2.async = true
      s2.onload = () => {
        if (typeof (window as any).jotformEmbedHandler !== 'undefined') {
          ;(window as any).jotformEmbedHandler(
            "iframe[id='261336073414047']",
            'https://form.jotform.com/'
          )
        }
      }
      document.body.appendChild(s2)
    }
  }, [])

  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#212e64' }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — info */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
              Get in Touch
            </span>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Request Your Free{' '}
              <span style={{ color: '#2ea3f2' }}>Texas Business Visibility Report</span>
            </h2>
            <p className="text-[#8892b0] text-lg leading-relaxed mb-10">
              Tell us about your business and goals. We will audit your current online presence,
              identify your top growth opportunities, and share a no-obligation roadmap — completely free.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <a
                href="tel:2549680162"
                className="flex items-center gap-4 group"
                aria-label="Call TXPAGES at 254-968-0162"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#2ea3f220', color: '#2ea3f2' }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#8892b0] uppercase tracking-wider">Call Us</div>
                  <div className="text-[#ccd6f6] font-semibold group-hover:text-[#2ea3f2] transition-colors">
                    254-968-0162
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: '#2ea3f220', color: '#2ea3f2' }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#8892b0] uppercase tracking-wider">Local Office</div>
                  <address className="text-[#ccd6f6] not-italic leading-relaxed">
                    164 N Graham<br />
                    Stephenville, TX 76401
                  </address>
                  <div className="text-xs text-[#8892b0] mt-1">
                    Mailing: PO Box 294, Cranfills Gap, TX 76637
                  </div>
                </div>
              </div>

              <a
                href=""
                className="flex items-center gap-4 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit TXPAGES website"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#2ea3f220', color: '#2ea3f2' }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#8892b0] uppercase tracking-wider">Website</div>
                  <div className="text-[#ccd6f6] font-semibold group-hover:text-[#2ea3f2] transition-colors">
                    www.txpages.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — lightbox CTA card */}
          <div
            className="rounded-2xl border border-[#2a3870] p-10 flex flex-col items-center justify-center text-center gap-6"
            style={{ backgroundColor: '#1e2a5e', minHeight: '340px' }}
          >
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#2ea3f220' }}
            >
              <svg className="w-8 h-8" style={{ color: '#2ea3f2' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                Free Visibility Report
              </h3>
              <p className="text-[#8892b0] text-sm leading-relaxed max-w-xs mx-auto">
                Get a no-obligation audit of your online presence with a clear roadmap to grow your Texas business.
              </p>
            </div>

            {/* JotForm lightbox trigger — class name is required by JotForm's feedback2.js */}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className="lightbox-261336073414047 inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wide text-white transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: '#2ea3f2', border: '1px solid #2ea3f2' }}
              role="button"
              aria-label="Open contact form for TXPAGES"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us Now
            </a>

            <p className="text-xs text-[#8892b0]">
              No spam. No obligation. Just a free audit.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
