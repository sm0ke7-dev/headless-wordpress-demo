"use client";

import { Button } from "@relume_io/relume-ui";
import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import type { Service } from "@/lib/wordpress";

interface Layout525Props {
  services: Service[];
}

export function Layout525({ services }: Layout525Props) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Services</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What we treat
            </h2>
            <p className="md:text-md">Specialized care for your injury</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative flex flex-col justify-center p-6 md:p-8 ${
                index === 0 ? 'lg:p-12' : 'lg:p-6'
              }`}
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src={service.acf.featured_image || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                  className="size-full object-cover"
                  alt={service.title.rendered}
                />
              </div>
              <div className="relative z-10">
                <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                  Service
                </p>
                <h2
                  className={`mb-5 font-bold leading-[1.2] text-text-alternative md:mb-6 ${
                    index === 0
                      ? 'text-4xl md:text-5xl lg:text-6xl'
                      : 'text-xl md:text-2xl'
                  }`}
                >
                  {service.title.rendered}
                </h2>
                <p className="text-text-alternative">
                  {service.acf.short_description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Link href={`/services/${service.slug}`}>
                    <Button title="Learn More" variant="secondary-alt">
                      Learn More
                    </Button>
                  </Link>
                  <Link href={`/services/${service.slug}`}>
                    <Button
                      title="Details"
                      variant="link-alt"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
