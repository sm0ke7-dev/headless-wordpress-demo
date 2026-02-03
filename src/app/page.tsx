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
      <div className="bg-green-900 text-white">
        <Header84 />
      </div>
      <div className="bg-green-50">
        <Layout520 />
      </div>
      <div className="bg-white">
        <Layout367 />
      </div>
      <div className="bg-green-900 text-white">
        <Layout423 />
      </div>
      <div className="bg-green-50">
        <Testimonial22 testimonials={testimonials} />
      </div>
      <div className="bg-white">
        <Team5 />
      </div>
      <div className="bg-green-900 text-white">
        <Cta31 />
      </div>
    </main>
  );
}
