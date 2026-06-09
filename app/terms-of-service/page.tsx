import type { Metadata } from 'next'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Terms of Service | TXPAGES LLC — Texas Digital Marketing Agency',
  description:
    'Review the Terms of Service for TXPAGES LLC. These terms govern your use of the TXPAGES website and all digital marketing services provided by TXPAGES LLC.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: true, follow: true },
}

const SECTIONS = [
  {
    id: 'company-information',
    heading: '1. Company Information',
    content: (
      <address className="not-italic text-[#8892b0] leading-relaxed">
        TXPAGES LLC<br />
        PO Box 294<br />
        Cranfills Gap, TX 76637<br />
        Email:{' '}
        <a href="mailto:info@txpages.com" className="text-[#2ea3f2] hover:underline">
          info@txpages.com
        </a>
      </address>
    ),
  },
  {
    id: 'services',
    heading: '2. Services',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-4">
          TXPAGES LLC provides digital marketing and related services, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1">
          <li>Website design, development, hosting, and maintenance</li>
          <li>Search engine optimization (SEO)</li>
          <li>Local listings management</li>
                  <li>Google Business Profile management and reputation management</li>
          <li>Google Ads and pay-per-click management</li>
          <li>Content creation and marketing services</li>
          <li>Reporting and analytics services</li>
          <li>Other marketing services agreed upon in writing</li>
        </ul>
        <p className="text-[#8892b0] leading-relaxed mt-4">
          Specific services, pricing, and deliverables shall be outlined in a separate written agreement.
        </p>
      </>
    ),
  },
  {
    id: 'written-agreement',
    heading: '3. Written Agreement Requirement',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        Services will not begin until a written agreement has been executed by the Client and TXPAGES LLC.
      </p>
    ),
  },
  {
    id: 'initial-term',
    heading: '4. Initial Term and Renewal',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">Unless otherwise agreed in writing:</p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1">
          <li>The initial service term is twelve (12) months.</li>
          <li>After the initial term, services automatically renew on a month-to-month basis.</li>
          <li>Either party may terminate services after the initial term by providing at least thirty (30) days&apos; written notice.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'early-termination',
    heading: '5. Early Termination',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        If a Client terminates services before completion of the initial twelve-month term, TXPAGES LLC reserves the right to assess early termination fees, reimbursement of waived setup costs, and/or recovery of unpaid amounts on a case-by-case basis.
      </p>
    ),
  },
  {
    id: 'fees-payment',
    heading: '6. Fees and Payment',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          Clients agree to pay all fees specified in their service agreement.
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1">
          <li>Monthly fees are due according to the agreed billing schedule.</li>
          <li>Setup fees are non-refundable.</li>
          <li>Monthly service fees are non-refundable.</li>
          <li>Failure to use services does not relieve the Client of payment obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'non-payment',
    heading: '7. Non-Payment',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          TXPAGES LLC reserves the right to suspend services immediately upon non-payment. Clients may be granted a grace period of fifteen (15) to thirty (30) days at TXPAGES LLC&apos;s sole discretion. Accounts remaining unpaid beyond the applicable grace period may be subject to:
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1">
          <li>Suspension of services</li>
          <li>Removal of hosted websites from public access</li>
          <li>Suspension of marketing services</li>
          <li>Retention of domain names registered by TXPAGES LLC</li>
          <li>Withholding transfer of Google Business Profile ownership</li>
          <li>A reinstatement fee of $150.00</li>
        </ul>
      </>
    ),
  },
  {
    id: 'collections',
    heading: '8. Collections and Recovery of Costs',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          TXPAGES LLC reserves the right to refer delinquent accounts to a third-party collection agency or pursue other lawful remedies. The Client agrees to be responsible for all reasonable costs incurred in collecting unpaid balances, including:
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1">
          <li>Collection agency fees</li>
          <li>Court costs</li>
          <li>Filing fees</li>
          <li>Reasonable attorneys&apos; fees to the extent permitted by law</li>
        </ul>
      </>
    ),
  },
  {
    id: 'domain-ownership',
    heading: '9. Domain Ownership',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">Unless otherwise agreed in writing:</p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1">
          <li>Domain names purchased or registered by TXPAGES LLC remain the property of TXPAGES LLC.</li>
          <li>Domain transfers may be approved if the Client&apos;s account is current and all outstanding balances have been paid in full.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    heading: '10. Website Ownership and Intellectual Property',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">Unless otherwise agreed in writing, TXPAGES LLC retains ownership of:</p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1 mb-4">
          <li>Website design and layouts</li>
          <li>Custom development work</li>
          <li>Images created by TXPAGES LLC</li>
          <li>Proprietary SEO methodologies</li>
          <li>SEO content strategies</li>
          <li>City pages and location-based SEO content developed by TXPAGES LLC</li>
          <li>Proprietary templates and marketing systems</li>
        </ul>
        <p className="text-[#8892b0] leading-relaxed mb-3">Clients retain ownership of:</p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1 mb-4">
          <li>Client-supplied written content</li>
          <li>Logos</li>
          <li>Trademarks</li>
          <li>Materials owned by the Client before engagement</li>
        </ul>
        <p className="text-[#8892b0] leading-relaxed">
          Clients are not entitled to copies of website source files, design files, or proprietary systems upon termination.
        </p>
      </>
    ),
  },
  {
    id: 'gbp',
    heading: '11. Google Business Profile and Third-Party Accounts',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          Google Business Profile ownership or primary ownership transfers may be approved only if:
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1 mb-4">
          <li>The Client&apos;s account is in good standing; and</li>
          <li>All outstanding balances have been paid in full.</li>
        </ul>
        <p className="text-[#8892b0] leading-relaxed">
          For other third-party services managed by TXPAGES LLC, management access may be discontinued upon termination.
        </p>
      </>
    ),
  },
  {
    id: 'no-guarantees',
    heading: '12. No Guarantees',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">TXPAGES LLC does not guarantee:</p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1 mb-4">
          <li>Search engine rankings</li>
          <li>First-page placement</li>
          <li>Lead volume</li>
          <li>Sales increases</li>
          <li>Advertising performance</li>
          <li>Specific business outcomes</li>
        </ul>
        <p className="text-[#8892b0] leading-relaxed">
          Past performance does not guarantee future results.
        </p>
      </>
    ),
  },
  {
    id: 'client-responsibilities',
    heading: '13. Client Responsibilities',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">Clients agree to:</p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1">
          <li>Provide accurate and complete information</li>
          <li>Maintain rights to all materials supplied</li>
          <li>Obtain necessary permissions and licenses</li>
          <li>Review and approve content before publication</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>
      </>
    ),
  },
  {
    id: 'client-delays',
    heading: '14. Client Delays',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        TXPAGES LLC shall not be responsible for delays resulting from the Client&apos;s failure to provide requested materials, approvals, feedback, or information. Recurring fees continue during periods of Client delay.
      </p>
    ),
  },
  {
    id: 'ai-services',
    heading: '15. AI-Assisted Services',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        TXPAGES LLC may utilize AI-assisted tools to support content creation, graphics, research, and marketing efforts. All AI-assisted outputs remain subject to human oversight, editing, and review.
      </p>
    ),
  },
  {
    id: 'portfolio-rights',
    heading: '16. Portfolio Rights',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          Unless the Client requests otherwise in writing, TXPAGES LLC may:
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1 mb-4">
          <li>Display completed work in its portfolio</li>
          <li>Use client logos and screenshots</li>
          <li>Reference clients in marketing materials</li>
          <li>Showcase examples of services performed</li>
        </ul>
        <p className="text-[#8892b0] leading-relaxed">
          Clients may request to opt out by written notice.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    heading: '17. Third-Party Platforms',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          TXPAGES LLC is not responsible for actions taken by third parties, including but not limited to Google, Meta/Facebook, Bing, Apple, hosting providers, domain registrars, directory providers, and advertising networks.
        </p>
        <p className="text-[#8892b0] leading-relaxed">
          Algorithm changes, outages, suspensions, policy changes, ownership disputes, and similar events shall not constitute a breach of these Terms.
        </p>
      </>
    ),
  },
  {
    id: 'limitation-liability',
    heading: '18. Limitation of Liability',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        To the fullest extent permitted by law, TXPAGES LLC shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from the use of its services. TXPAGES LLC&apos;s total liability shall not exceed the amount paid by the Client for services during the three (3) months immediately preceding the event giving rise to the claim.
      </p>
    ),
  },
  {
    id: 'indemnification',
    heading: '19. Indemnification',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          Clients agree to indemnify and hold harmless TXPAGES LLC from claims arising from:
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1">
          <li>Client-provided materials</li>
          <li>Copyright infringement</li>
          <li>Trademark violations</li>
          <li>Misrepresentations</li>
          <li>Unlawful business practices</li>
        </ul>
      </>
    ),
  },
  {
    id: 'governing-law',
    heading: '20. Governing Law and Venue',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        These Terms shall be governed by the laws of the State of Texas. Any legal action arising under these Terms shall be brought exclusively in the state or federal courts located in Erath County, Texas.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: '21. Changes to These Terms',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        TXPAGES LLC reserves the right to modify these Terms at any time. Updated versions will be posted on the TXPAGES website and become effective upon publication.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: '22. Contact Information',
    content: (
      <address className="not-italic text-[#8892b0] leading-relaxed">
        TXPAGES LLC<br />
        PO Box 294<br />
        Cranfills Gap, TX 76637<br />
        Email:{' '}
        <a href="mailto:info@txpages.com" className="text-[#2ea3f2] hover:underline">
          info@txpages.com
        </a>
      </address>
    ),
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-14"
          style={{ backgroundColor: '#0f1530', borderBottom: '1px solid #2a3870' }}
          aria-labelledby="tos-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-[#8892b0]">
                <li><a href="/" className="hover:text-[#2ea3f2] transition-colors">Home</a></li>
                <li aria-hidden="true"><span>/</span></li>
                <li className="text-[#2ea3f2]" aria-current="page">Terms of Service</li>
              </ol>
            </nav>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">Legal</p>
            <h1
              id="tos-heading"
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Terms of Service
            </h1>
            <p className="text-[#8892b0] text-sm">
              Effective Date: <time dateTime="2026-01-01">January 1, 2026</time>
            </p>
            <p className="text-[#8892b0] leading-relaxed mt-4 max-w-2xl">
              These Terms of Service govern your use of the TXPAGES website and any services provided by TXPAGES LLC. By accessing our website or engaging our services, you agree to be bound by these Terms.
            </p>
          </div>
        </section>

        {/* Content */}
        <section
          className="py-16"
          style={{ backgroundColor: '#0f1530' }}
          aria-label="Terms of Service content"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick nav */}
            <nav
              className="rounded-xl p-6 mb-12"
              style={{ backgroundColor: '#1e2a5e', border: '1px solid #2a3870' }}
              aria-label="Table of contents"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-4">Table of Contents</p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-[#8892b0] hover:text-[#2ea3f2] transition-colors"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div className="flex flex-col gap-12">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`}>
                  <h2
                    id={`${s.id}-heading`}
                    className="text-lg font-bold text-white mb-4 pb-3"
                    style={{
                      borderBottom: '1px solid #2a3870',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {s.heading}
                  </h2>
                  {s.content}
                </section>
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              className="mt-16 rounded-xl p-8 text-center"
              style={{ backgroundColor: '#1e2a5e', border: '1px solid #2a3870' }}
            >
              <p className="text-white font-semibold mb-2">Questions about these terms?</p>
              <p className="text-[#8892b0] text-sm mb-4">
                Email us directly — we&apos;re happy to walk you through how we work before you commit to anything.
              </p>
              <a
                href="mailto:info@txpages.com"
                className="text-[#2ea3f2] hover:underline font-semibold text-sm"
              >
                info@txpages.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
