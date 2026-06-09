import SiteNav from '@/components/site-nav'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import WhyTXPAGESTeaser from '@/components/why-txpages-teaser'
import ProcessTeaser from '@/components/process-teaser'
import TestimonialsSection from '@/components/testimonials-section'
import BlogSection from '@/components/blog-section'
import FAQSection from '@/components/faq-section'
import CTABanner from '@/components/cta-banner'
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
        <WhyTXPAGESTeaser />
        <ProcessTeaser />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <CTABanner />
      </main>
      <SiteFooter />
    </>
  )
}
