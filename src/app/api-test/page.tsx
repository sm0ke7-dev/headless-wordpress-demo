import { getServices, getLocations, getTestimonials } from '@/lib/wordpress';

export default async function ApiTestPage() {
  const services = await getServices();
  const locations = await getLocations();
  const testimonials = await getTestimonials();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">WordPress API Test</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Services ({services.length})</h2>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="border p-4 rounded">
              <h3 className="font-bold">{service.title.rendered}</h3>
              <p className="text-sm text-gray-600">{service.slug}</p>
              <p className="mt-2">{service.acf.short_description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Locations ({locations.length})</h2>
        <div className="space-y-4">
          {locations.map((location) => (
            <div key={location.id} className="border p-4 rounded">
              <h3 className="font-bold">{location.title.rendered}</h3>
              <p className="text-sm text-gray-600">{location.slug}</p>
              <p className="mt-2">{location.acf.address}</p>
              <p>{location.acf.phone}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Testimonials ({testimonials.length})</h2>
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="border p-4 rounded">
              <h3 className="font-bold">{testimonial.acf.client_name}</h3>
              <p className="text-sm text-gray-600">Rating: {testimonial.acf.rating}/5</p>
              <p className="mt-2" dangerouslySetInnerHTML={{ __html: testimonial.content.rendered }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
