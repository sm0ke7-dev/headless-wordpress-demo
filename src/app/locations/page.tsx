import { Header64 } from "@/components/locations/Header64";
import { LocationGrid } from "@/components/locations/LocationGrid";
import { Faq4 } from "@/components/locations/Faq4";
import { Cta31 } from "@/components/locations/Cta31";
import { getLocations } from "@/lib/wordpress";

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <main>
      <Header64 />
      <LocationGrid locations={locations} />
      <Faq4 />
      <Cta31 />
    </main>
  );
}
