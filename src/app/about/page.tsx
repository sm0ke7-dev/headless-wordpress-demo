import { Header64 } from "@/components/about/Header64";
import { Layout19 } from "@/components/about/Layout19";
import { Layout522 } from "@/components/about/Layout522";
import { Team5 } from "@/components/about/Team5";
import { Stats26 } from "@/components/about/Stats26";
import { Testimonial22 } from "@/components/about/Testimonial22";
import { Cta31 } from "@/components/about/Cta31";
import { getTestimonials } from "@/lib/wordpress";

export default async function AboutPage() {
  // Fetch testimonials from WordPress
  const testimonials = await getTestimonials();

  return (
    <main>
      <div className="bg-green-900 text-white">
        <Header64 />
      </div>
      <div className="bg-green-50">
        <Layout19 />
      </div>
      <div className="bg-white">
        <Layout522 />
      </div>
      <div className="bg-green-900 text-white">
        <Team5 />
      </div>
      <div className="bg-green-50">
        <Stats26 />
      </div>
      <div className="bg-white">
        <Testimonial22 testimonials={testimonials} />
      </div>
      <div className="bg-green-900 text-white">
        <Cta31 />
      </div>
    </main>
  );
}
