"use client";

import React from "react";
import type { Location } from "@/lib/wordpress";

interface Header64Props {
  location: Location;
}

export function Header64({ location }: Header64Props) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          {location.title.rendered}
        </h1>
        <p className="md:text-md">
          Expert care and real results at your local Physio Pain Center clinic
        </p>
      </div>
    </section>
  );
}
