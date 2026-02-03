"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import Link from "next/link";
import type { Location } from "@/lib/wordpress";

interface LocationGridProps {
  locations: Location[];
}

export function LocationGrid({ locations }: LocationGridProps) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location.id}
              className="flex flex-col border border-border-primary p-6"
            >
              {location.acf.featured_image && (
                <div className="mb-6">
                  <img
                    src={location.acf.featured_image}
                    alt={location.title.rendered}
                    className="w-full aspect-[3/2] object-cover"
                  />
                </div>
              )}

              <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                {location.title.rendered}
              </h3>

              {location.acf.address && (
                <p className="mb-2 text-sm">
                  <strong>Address:</strong> {location.acf.address}
                </p>
              )}

              {location.acf.phone && (
                <p className="mb-2 text-sm">
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${location.acf.phone}`} className="underline">
                    {location.acf.phone}
                  </a>
                </p>
              )}

              {location.acf.email && (
                <p className="mb-4 text-sm">
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${location.acf.email}`} className="underline">
                    {location.acf.email}
                  </a>
                </p>
              )}

              <div className="mt-auto pt-4">
                <Link href={`/locations/${location.slug}`}>
                  <Button variant="secondary" className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
