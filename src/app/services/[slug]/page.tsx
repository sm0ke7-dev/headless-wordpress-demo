import { Header64 } from "@/components/service-single/Header64";
import { Layout22 } from "@/components/service-single/Layout22";
import { Layout423 } from "@/components/service-single/Layout423";
import { Layout356 } from "@/components/service-single/Layout356";
import { Testimonial22 } from "@/components/service-single/Testimonial22";
import { Cta31 } from "@/components/service-single/Cta31";
import { Faq4 } from "@/components/service-single/Faq4";
import { getServiceBySlug, getServices } from "@/lib/wordpress";
import { notFound } from "next/navigation";

// Generate static paths for all services
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  // Fetch service data from WordPress using params.slug
  const service = await getServiceBySlug(params.slug);

  // If service not found, show 404
  if (!service) {
    notFound();
  }

  return (
    <main>
      <Header64 service={service} />
      <Layout22 service={service} />
      <Layout423 />
      <Layout356 />
      <Testimonial22 />
      <Cta31 />
      <Faq4 />
    </main>
  );
}
