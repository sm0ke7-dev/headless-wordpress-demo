import { Header64 } from "@/components/locations/Header64";
import { LocationGrid } from "@/components/locations/LocationGrid";
import { Faq4 } from "@/components/locations/Faq4";
import { Cta31 } from "@/components/locations/Cta31";
import { getLocations } from "@/lib/wordpress";

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <main>
      <div className="bg-green-900 text-white">
        <Header64 />
      </div>
      <div className="bg-green-50">
        <LocationGrid locations={locations} />
      </div>
      <div className="bg-white">
        <Faq4 />
      </div>
      <div className="bg-green-900 text-white">
        <Cta31 />
      </div>
    </main>
  );
}
