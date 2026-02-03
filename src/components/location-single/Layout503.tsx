"use client";

import React from "react";
import type { Location } from "@/lib/wordpress";

interface Layout503Props {
  location: Location;
}

export function Layout503({ location }: Layout503Props) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Visit Us
            </h2>

            <div className="space-y-4">
              {location.acf.address && (
                <div>
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p>{location.acf.address}</p>
                </div>
              )}

              {location.acf.phone && (
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p>
                    <a href={`tel:${location.acf.phone}`} className="underline">
                      {location.acf.phone}
                    </a>
                  </p>
                </div>
              )}

              {location.acf.email && (
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p>
                    <a href={`mailto:${location.acf.email}`} className="underline">
                      {location.acf.email}
                    </a>
                  </p>
                </div>
              )}

              {location.acf.hours && (
                <div>
                  <h3 className="font-bold text-lg mb-2">Hours</h3>
                  <div dangerouslySetInnerHTML={{ __html: location.acf.hours }} />
                </div>
              )}
            </div>
          </div>

          <div>
            {location.acf.featured_image ? (
              <img
                src={location.acf.featured_image}
                alt={location.title.rendered}
                className="w-full aspect-square object-cover"
              />
            ) : (
              <div className="w-full aspect-square bg-gray-200 flex items-center justify-center">
                <p className="text-gray-400">No image available</p>
              </div>
            )}
          </div>
        </div>

        {location.content.rendered && (
          <div className="mt-12">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: location.content.rendered }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
