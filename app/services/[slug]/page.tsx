import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SERVICES_DATA } from '@/lib/services-data'
import ServicePageLayout from '@/components/service-page-layout'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES_DATA.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      images: [
        {
          url: service.image,
          alt: service.imageAlt,
        },
      ],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES_DATA.find((s) => s.slug === slug)

  if (!service) notFound()

  return <ServicePageLayout service={service} />
}
