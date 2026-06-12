import ServiceDetail from '@/components/service-detail'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  return <ServiceDetail slug={params.slug} />
}
