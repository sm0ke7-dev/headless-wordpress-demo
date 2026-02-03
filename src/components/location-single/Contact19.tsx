"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import type { Location } from "@/lib/wordpress";

interface Contact19Props {
  location: Location;
}

export function Contact19({ location }: Contact19Props) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Reach us</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Get in touch
          </h2>
          <p className="md:text-md">
            Questions about your condition or ready to start? We're here to
            help.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          {location.acf.email && (
            <div>
              <div className="mb-5 lg:mb-6">
                <BiEnvelope className="size-12" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                Email
              </h3>
              <p className="mb-5 md:mb-6">
                Send us a message and we'll respond within one business day
              </p>
              <a className="underline" href={`mailto:${location.acf.email}`}>
                {location.acf.email}
              </a>
            </div>
          )}

          {location.acf.phone && (
            <div>
              <div className="mb-5 lg:mb-6">
                <BiPhone className="size-12" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                Phone
              </h3>
              <p className="mb-5 md:mb-6">
                Give us a call during business hours
              </p>
              <a className="underline" href={`tel:${location.acf.phone}`}>
                {location.acf.phone}
              </a>
            </div>
          )}

          {location.acf.address && (
            <div>
              <div className="mb-5 lg:mb-6">
                <BiMap className="size-12" />
              </div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                Address
              </h3>
              <p className="mb-5 md:mb-6">
                Visit us at our clinic location
              </p>
              <address className="not-italic">
                {location.acf.address}
              </address>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
