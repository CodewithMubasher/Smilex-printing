import { servicesData } from "@/data/services";
import ServiceDetail from "@/components/service-detail";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  
  return {
    title: `${service?.name || "Service"} | Smilex Printing`,
    description: service?.description || "Professional printing and design services",
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  return <ServiceDetail slug={slug} />;
}
