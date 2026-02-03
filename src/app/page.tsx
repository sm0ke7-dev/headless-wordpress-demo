import { Header84 } from "@/components/home/Header84";
import { Layout520 } from "@/components/home/Layout520";
import { Layout367 } from "@/components/home/Layout367";
import { Layout423 } from "@/components/home/Layout423";
import { Testimonial22 } from "@/components/home/Testimonial22";
import { Team5 } from "@/components/home/Team5";
import { Cta31 } from "@/components/home/Cta31";
import { getTestimonials } from "@/lib/wordpress";

export default async function HomePage() {
  const testimonials = await getTestimonials();

  return (
    <main>
      <Header84 />
      <Layout520 />
      <Layout367 />
      <Layout423 />
      <Testimonial22 testimonials={testimonials} />
      <Team5 />
      <Cta31 />
    </main>
  );
}
