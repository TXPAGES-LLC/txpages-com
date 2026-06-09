import type { Metadata } from 'next'
import SiteNav from '@/components/site-nav'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | TXPAGES LLC — Texas Digital Marketing Agency',
  description:
    'Read the TXPAGES LLC Privacy Policy. Learn how we collect, use, and protect information obtained through our website and digital marketing services.',
  alternates: { canonical: '/privacy-policy' },
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
    id: 'information-we-collect',
    heading: '2. Information We Collect',
    content: (
      <>
        <h3 className="text-white font-semibold mb-2 mt-0">Information You Voluntarily Provide</h3>
        <p className="text-[#8892b0] leading-relaxed mb-3">You may provide us with:</p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1 mb-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Telephone number</li>
          <li>Company name</li>
          <li>Information submitted through contact forms</li>
          <li>Information provided during consultations or service inquiries</li>
          <li>Any additional information you choose to provide</li>
        </ul>
        <h3 className="text-white font-semibold mb-2">Information Collected Automatically</h3>
        <p className="text-[#8892b0] leading-relaxed mb-3">We may collect certain information automatically, including:</p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Operating system</li>
          <li>Referring website information</li>
          <li>Pages visited</li>
          <li>Time spent on our website</li>
          <li>Website interaction data</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use-information',
    heading: '3. How We Use Information',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">We use collected information to:</p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1">
          <li>Respond to inquiries and requests</li>
          <li>Provide requested services</li>
          <li>Communicate with prospective and existing clients</li>
          <li>Improve our website and user experience</li>
          <li>Analyze website traffic and visitor behavior</li>
          <li>Monitor marketing effectiveness</li>
          <li>Provide reporting and analytics</li>
          <li>Maintain and improve our services</li>
          <li>Protect against fraud, abuse, or unauthorized activity</li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    id: 'contact-forms',
    heading: '4. Contact Forms',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        Information submitted through contact forms is used solely for the purpose of responding to your inquiry, providing requested information, or discussing our services. Submission of a contact form does not create a client relationship.
      </p>
    ),
  },
  {
    id: 'analytics-tracking',
    heading: '5. Analytics and Tracking Technologies',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-5">
          TXPAGES LLC utilizes certain analytics and tracking tools to understand how visitors interact with our website.
        </p>
        <h3 className="text-white font-semibold mb-2">Google Analytics</h3>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          We use Google Analytics to collect information regarding website usage and visitor interactions. Google Analytics may collect:
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1 mb-6">
          <li>Pages visited</li>
          <li>Session duration</li>
          <li>Device information</li>
          <li>Geographic region</li>
          <li>Traffic sources</li>
        </ul>
        <h3 className="text-white font-semibold mb-2">Google Tag Manager</h3>
        <p className="text-[#8892b0] leading-relaxed mb-6">
          We use Google Tag Manager to deploy and manage various website tracking and analytics tools. Google Tag Manager itself does not collect personal information but facilitates the operation of tags used on our website.
        </p>
        <h3 className="text-white font-semibold mb-2">Facebook / Meta Pixel</h3>
        <p className="text-[#8892b0] leading-relaxed">
          We use Meta Pixel to understand visitor behavior and evaluate the effectiveness of our marketing efforts. Meta Pixel may collect information about interactions with our website and may associate that information with your Meta account in accordance with Meta&apos;s own privacy practices.
        </p>
      </>
    ),
  },
  {
    id: 'call-tracking',
    heading: '6. Call Tracking',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          TXPAGES LLC may utilize call tracking technology to evaluate marketing performance and improve service effectiveness. Call tracking may record:
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1 mb-4">
          <li>The originating source of telephone calls</li>
          <li>Call dates and times</li>
          <li>Duration of calls</li>
          <li>Call routing information</li>
        </ul>
        <p className="text-[#8892b0] leading-relaxed">
          Call tracking information is used solely for business, reporting, and marketing optimization purposes.
        </p>
      </>
    ),
  },
  {
    id: 'search-console',
    heading: '7. Google Search Console',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        TXPAGES LLC uses Google Search Console to monitor website performance within Google Search. Google Search Console provides aggregate information regarding search visibility, indexing, keyword performance, and technical website health. Google Search Console does not provide us with personally identifiable search information regarding individual users.
      </p>
    ),
  },
  {
    id: 'payment-information',
    heading: '8. Payment Information',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        TXPAGES LLC does not collect payment information through the TXPAGES website. Payments for services are processed separately through methods agreed upon directly with clients.
      </p>
    ),
  },
  {
    id: 'cookies',
    heading: '9. Cookies',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        At this time, TXPAGES LLC does not intentionally deploy cookies directly for its own purposes beyond those utilized through third-party services described in this Privacy Policy. However, third-party providers such as Google and Meta may use cookies or similar technologies in connection with their services. Users may manage cookie preferences through their browser settings.
      </p>
    ),
  },
  {
    id: 'information-sharing',
    heading: '10. Information Sharing',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          TXPAGES LLC does not sell, rent, or trade personal information to third parties. We may share information only when necessary to:
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1 mb-4">
          <li>Provide requested services</li>
          <li>Work with trusted vendors and service providers</li>
          <li>Comply with legal obligations</li>
          <li>Enforce our agreements</li>
          <li>Protect our rights, safety, or property</li>
        </ul>
        <p className="text-[#8892b0] leading-relaxed">
          Third-party service providers are expected to maintain appropriate safeguards regarding the information they process.
        </p>
      </>
    ),
  },
  {
    id: 'data-security',
    heading: '11. Data Security',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        TXPAGES LLC takes reasonable administrative, technical, and organizational measures to safeguard information under our control. However, no method of internet transmission or electronic storage can be guaranteed to be completely secure. Accordingly, we cannot guarantee absolute security of information transmitted through our website.
      </p>
    ),
  },
  {
    id: 'data-retention',
    heading: '12. Data Retention',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          We retain information only for as long as reasonably necessary to:
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1 mb-4">
          <li>Fulfill the purposes described in this Privacy Policy</li>
          <li>Maintain business records</li>
          <li>Comply with legal obligations</li>
          <li>Resolve disputes</li>
          <li>Enforce our agreements</li>
        </ul>
        <p className="text-[#8892b0] leading-relaxed">
          Retention periods may vary depending on the nature of the information.
        </p>
      </>
    ),
  },
  {
    id: 'childrens-privacy',
    heading: "13. Children's Privacy",
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        The TXPAGES website is not directed toward children under the age of thirteen (13). We do not knowingly collect personal information from children under thirteen years of age. If we become aware that such information has been collected, we will take reasonable steps to delete it.
      </p>
    ),
  },
  {
    id: 'third-party-websites',
    heading: '14. Third-Party Websites',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        Our website may contain links to third-party websites. TXPAGES LLC is not responsible for the privacy practices, content, or security of external websites. Users should review the privacy policies of any third-party websites they visit.
      </p>
    ),
  },
  {
    id: 'your-rights',
    heading: '15. Your Rights and Choices',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-3">
          You may choose not to provide certain information to us. However, doing so may limit our ability to provide requested services or respond to inquiries. You may also:
        </p>
        <ul className="list-disc list-inside text-[#8892b0] leading-relaxed space-y-1.5 pl-1 mb-4">
          <li>Request updates to your information</li>
          <li>Request correction of inaccurate information</li>
          <li>Ask questions regarding our privacy practices</li>
        </ul>
        <p className="text-[#8892b0] leading-relaxed">
          Requests may be submitted using the contact information below.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    heading: '16. Changes to This Privacy Policy',
    content: (
      <p className="text-[#8892b0] leading-relaxed">
        TXPAGES LLC reserves the right to modify this Privacy Policy at any time. Changes will become effective upon posting the revised Privacy Policy on the TXPAGES website. Your continued use of our website after updates are posted constitutes acceptance of the revised Privacy Policy.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: '17. Contact Information',
    content: (
      <>
        <p className="text-[#8892b0] leading-relaxed mb-4">
          If you have questions regarding this Privacy Policy or our information practices, please contact:
        </p>
        <address className="not-italic text-[#8892b0] leading-relaxed mb-6">
          TXPAGES LLC<br />
          PO Box 294<br />
          Cranfills Gap, TX 76637<br />
          Email:{' '}
          <a href="mailto:info@txpages.com" className="text-[#2ea3f2] hover:underline">
            info@txpages.com
          </a>
        </address>
        <p className="text-[#8892b0] leading-relaxed text-sm italic">
          By using this website, you acknowledge that you have read and understand this Privacy Policy and agree to its terms.
        </p>
      </>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-14"
          style={{ backgroundColor: '#0f1530', borderBottom: '1px solid #2a3870' }}
          aria-labelledby="privacy-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-[#8892b0]">
                <li><a href="/" className="hover:text-[#2ea3f2] transition-colors">Home</a></li>
                <li aria-hidden="true"><span>/</span></li>
                <li className="text-[#2ea3f2]" aria-current="page">Privacy Policy</li>
              </ol>
            </nav>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2ea3f2] mb-3">Legal</p>
            <h1
              id="privacy-heading"
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Privacy Policy
            </h1>
            <p className="text-[#8892b0] text-sm">
              Effective Date: <time dateTime="2026-01-01">January 1, 2026</time>
            </p>
            <p className="text-[#8892b0] leading-relaxed mt-4 max-w-2xl">
              TXPAGES LLC respects your privacy and is committed to protecting the information you provide to us. This Privacy Policy explains how we collect, use, disclose, and safeguard information obtained through our website and services.
            </p>
          </div>
        </section>

        {/* Content */}
        <section
          className="py-16"
          style={{ backgroundColor: '#0f1530' }}
          aria-label="Privacy Policy content"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Table of contents */}
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
              <p className="text-white font-semibold mb-2">Questions about your privacy?</p>
              <p className="text-[#8892b0] text-sm mb-4">
                Email us directly and we&apos;ll be happy to answer any questions about how we handle your information.
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
