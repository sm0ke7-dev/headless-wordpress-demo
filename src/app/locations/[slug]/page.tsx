import { Header64 } from "@/components/location-single/Header64";
import { Layout503 } from "@/components/location-single/Layout503";
import { Team5 } from "@/components/location-single/Team5";
import { Gallery18 } from "@/components/location-single/Gallery18";
import { Contact19 } from "@/components/location-single/Contact19";
import { Contact6 } from "@/components/location-single/Contact6";

export default function LocationPage({ params }: { params: { slug: string } }) {
  // TODO: Fetch location data from WordPress using params.slug

  return (
    <main>
      <Header64 />
      <Layout503 />
      <Team5 />
      <Gallery18 />
      <Contact19 />
      <Contact6 />
    </main>
  );
}
