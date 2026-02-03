import { Header64 } from "@/components/services/Header64";
import { Layout423 } from "@/components/services/Layout423";
import { Layout525 } from "@/components/services/Layout525";
import { Testimonial22 } from "@/components/services/Testimonial22";
import { Cta31 } from "@/components/services/Cta31";
import { getServices } from "@/lib/wordpress";

export default async function ServicesPage() {
  // Fetch services from WordPress
  const services = await getServices();

  return (
    <main>
      <Header64 />
      <Layout423 services={services} />
      <Layout525 services={services} />
      <Testimonial22 />
      <Cta31 />
    </main>
  );
}
