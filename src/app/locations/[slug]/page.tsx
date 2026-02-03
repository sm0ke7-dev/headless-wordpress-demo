import { Header64 } from "@/components/location-single/Header64";
import { Layout503 } from "@/components/location-single/Layout503";
import { Team5 } from "@/components/location-single/Team5";
import { Gallery18 } from "@/components/location-single/Gallery18";
import { Contact19 } from "@/components/location-single/Contact19";
import { Contact6 } from "@/components/location-single/Contact6";
import { getLocationBySlug, getLocations } from "@/lib/wordpress";
import { notFound } from "next/navigation";

// Generate static paths for all locations
export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params first (Next.js 15+ requirement)
  const { slug } = await params;

  // Fetch location data from WordPress using slug
  const location = await getLocationBySlug(slug);

  // If location not found, show 404
  if (!location) {
    notFound();
  }

  return (
    <main>
      <Header64 location={location} />
      <Layout503 location={location} />
      <Team5 />
      <Gallery18 />
      <Contact19 location={location} />
      <Contact6 />
    </main>
  );
}
