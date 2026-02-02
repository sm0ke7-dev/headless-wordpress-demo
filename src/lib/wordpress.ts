// WordPress API Configuration
const WP_API_URL = 'http://physio-physical-therapy.local/wp-json/wp/v2';

// Type definitions for our WordPress data
export interface Service {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  acf: {
    featured_image: string;
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
    featured_image: string;
  };
}

export interface Testimonial {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    client_name: string;
    client_photo: string;
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

    return res.json();
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
    return services[0] || null;
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

    return res.json();
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
    return locations[0] || null;
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

    return res.json();
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}
