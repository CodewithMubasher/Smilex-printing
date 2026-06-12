import { servicesData } from "@/data/services";
import ServiceDetail from "@/components/service-detail";
import { notFound } from "next/navigation";

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
  
  if (!service) {
    return {
      title: "Service Not Found | Smilex Printing",
    };
  }

  return {
    title: `${service.name} | Smilex Printing`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
