'use client'

import { useState } from 'react'

const FAQS = [
  {
    question: 'How long does it take to see results from Texas SEO?',
    answer:
      'Most Texas businesses start seeing measurable improvements in local rankings and organic traffic within 3–6 months of consistent SEO work. Competitive markets may take longer, but we set clear expectations and milestones from the start. PPC and local listings can drive results much faster — sometimes within weeks.',
  },
  {
    question: 'What makes TXPAGES different from other Texas digital marketing agencies?',
    answer:
      'We are a locally rooted Texas team based in Stephenville — not a national agency treating you as an account number. We combine deep local market knowledge with AI-powered tools and transparent reporting. Every client gets a dedicated point of contact and real access to their team.',
  },
  {
    question: 'Do you offer web design services alongside SEO and PPC?',
    answer:
      'Yes. TXPAGES is a complete one-stop digital marketing partner. We design and develop fast, mobile-first websites optimized for SEO from the ground up. You never have to coordinate between a separate web designer and SEO agency — we handle it all.',
  },
  {
    question: 'How much does digital marketing cost for a Texas small business?',
    answer:
      'Pricing varies based on your goals, competition, and the services selected. We offer customized packages rather than rigid tiers so you only pay for what you need. Contact us for a free discovery call and visibility report — there is no obligation.',
  },
  {
    question: 'Can TXPAGES manage my Google Business Profile, reputation, and local listings?',
    answer:
      'Absolutely. Local SEO, listings management, and reputation management are core services we provide together. We optimize your Google Business Profile, build consistent citations across 50+ directories, implement a review generation strategy, and monitor your online reputation — so your business information stays accurate and your star rating stays strong.',
  },
  {
    question: 'Do you lock clients into long-term contracts?',
    answer:
      'No. We operate on flexible monthly service agreements. We believe in earning your business every month through results and communication — not contractual lock-ins. Most clients choose to stay because they see the value, not because they are required to.',
  },
  {
    question: 'What kinds of businesses does TXPAGES work with?',
    answer:
      'We specialize in serving small and mid-sized Texas businesses across industries including home services, healthcare, legal, auto, retail, restaurants, real estate, and more. If your business depends on customers finding you online, we can help.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#0f1530' }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Frequently Asked Questions About{' '}
            <span style={{ color: '#2ea3f2' }}>Texas Digital Marketing</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3" role="list">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="rounded-xl border overflow-hidden transition-colors"
                style={{
                  borderColor: isOpen ? '#2ea3f2' : '#2a3870',
                  backgroundColor: '#1e2a5e',
                }}
                role="listitem"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span
                    className="text-base font-semibold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: isOpen ? '#2ea3f2' : '#2a3870',
                      color: isOpen ? '#fff' : '#8892b0',
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3.5 h-3.5 transition-transform"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className="px-6 pb-5"
                  >
                    <p className="text-sm text-[#8892b0] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-12 text-center">
          <p className="text-[#8892b0] mb-4">Still have questions? We are here to help.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-[#2ea3f2] text-[#2ea3f2] font-semibold text-sm hover:bg-[#2ea3f2] hover:text-white transition-colors"
            aria-label="Contact TXPAGES with your digital marketing questions"
          >
            Ask Us Anything
          </a>
        </div>
      </div>
    </section>
  )
}
