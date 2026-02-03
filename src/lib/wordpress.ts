// WordPress API Configuration
const WP_API_URL = 'http://physio-physical-therapy.local/wp-json/wp/v2';

/**
 * Helper function to get image URL from WordPress media ID
 */
async function getImageUrl(imageId: number | string): Promise<string> {
  // If it's already a URL string, return it
  if (typeof imageId === 'string') {
    return imageId;
  }

  // If it's 0 or falsy, return empty string
  if (!imageId) {
    return '';
  }

  try {
    const res = await fetch(`${WP_API_URL}/media/${imageId}`);
    if (!res.ok) {
      return '';
    }
    const media = await res.json();
    return media.source_url || '';
  } catch (error) {
    console.error('Error fetching media:', error);
    return '';
  }
}

// Type definitions for our WordPress data
export interface Service {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  acf: {
    featured_image: string | number;
    hero_image: string | number;
    short_description: string;
    full_description: string;
    benefits: string;
  };
}

export interface Location {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  acf: {
    address: string;
    phone: string;
    email: string;
    hours: string;
    featured_image: string | number;
  };
}

export interface Testimonial {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    client_name: string;
    client_photo: string | number;
    rating: number;
    company_title: string;
    testimonial_text: string;
  };
}

/**
 * Fetch all services from WordPress
 */
export async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${WP_API_URL}/service`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!res.ok) {
      throw new Error('Failed to fetch services');
    }

    const services = await res.json();

    // Convert image IDs to URLs
    const servicesWithImages = await Promise.all(
      services.map(async (service: Service) => {
        if (service.acf.featured_image) {
          service.acf.featured_image = await getImageUrl(service.acf.featured_image);
        }
        if (service.acf.hero_image) {
          service.acf.hero_image = await getImageUrl(service.acf.hero_image);
        }
        return service;
      })
    );

    return servicesWithImages;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

/**
 * Fetch a single service by slug
 */
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const res = await fetch(`${WP_API_URL}/service?slug=${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch service');
    }

    const services = await res.json();
    const service = services[0] || null;

    // Convert image IDs to URLs
    if (service && service.acf.featured_image) {
      service.acf.featured_image = await getImageUrl(service.acf.featured_image);
    }
    if (service && service.acf.hero_image) {
      service.acf.hero_image = await getImageUrl(service.acf.hero_image);
    }

    return service;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

/**
 * Fetch all locations from WordPress
 */
export async function getLocations(): Promise<Location[]> {
  try {
    const res = await fetch(`${WP_API_URL}/location`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch locations');
    }

    const locations = await res.json();

    // Convert image IDs to URLs
    const locationsWithImages = await Promise.all(
      locations.map(async (location: Location) => {
        if (location.acf.featured_image) {
          location.acf.featured_image = await getImageUrl(location.acf.featured_image);
        }
        return location;
      })
    );

    return locationsWithImages;
  } catch (error) {
    console.error('Error fetching locations:', error);
    return [];
  }
}

/**
 * Fetch a single location by slug
 */
export async function getLocationBySlug(slug: string): Promise<Location | null> {
  try {
    const res = await fetch(`${WP_API_URL}/location?slug=${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch location');
    }

    const locations = await res.json();
    const location = locations[0] || null;

    // Convert image ID to URL
    if (location && location.acf.featured_image) {
      location.acf.featured_image = await getImageUrl(location.acf.featured_image);
    }

    return location;
  } catch (error) {
    console.error('Error fetching location:', error);
    return null;
  }
}

/**
 * Fetch all testimonials from WordPress
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch(`${WP_API_URL}/testimonial`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch testimonials');
    }

    const testimonials = await res.json();

    // Convert image IDs to URLs
    const testimonialsWithImages = await Promise.all(
      testimonials.map(async (testimonial: Testimonial) => {
        if (testimonial.acf.client_photo) {
          testimonial.acf.client_photo = await getImageUrl(testimonial.acf.client_photo);
        }
        return testimonial;
      })
    );

    return testimonialsWithImages;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}
