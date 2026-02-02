import { Header64 } from "@/components/service-single/Header64";
import { Layout22 } from "@/components/service-single/Layout22";
import { Layout423 } from "@/components/service-single/Layout423";
import { Layout356 } from "@/components/service-single/Layout356";
import { Testimonial22 } from "@/components/service-single/Testimonial22";
import { Cta31 } from "@/components/service-single/Cta31";
import { Faq4 } from "@/components/service-single/Faq4";

export default function ServicePage({ params }: { params: { slug: string } }) {
  // TODO: Fetch service data from WordPress using params.slug

  return (
    <main>
      <Header64 />
      <Layout22 />
      <Layout423 />
      <Layout356 />
      <Testimonial22 />
      <Cta31 />
      <Faq4 />
    </main>
  );
}
