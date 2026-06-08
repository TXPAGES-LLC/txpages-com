import SiteNav from '@/components/site-nav'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import WhyTXPAGESSection from '@/components/why-txpages-section'
import ProcessSection from '@/components/process-section'
import TestimonialsSection from '@/components/testimonials-section'
import BlogSection from '@/components/blog-section'
import FAQSection from '@/components/faq-section'
import CTABanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'
import SiteFooter from '@/components/site-footer'
import StructuredData from '@/components/structured-data'

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <SiteNav />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <WhyTXPAGESSection />
        <ProcessSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <CTABanner />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
