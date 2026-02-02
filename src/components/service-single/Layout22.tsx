"use client";

import React from "react";
import type { Service } from "@/lib/wordpress";

interface Layout22Props {
  service: Service;
}

export function Layout22({ service }: Layout22Props) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              About This Service
            </h2>
            <div
              className="prose prose-lg md:text-md"
              dangerouslySetInnerHTML={{ __html: service.acf.full_description }}
            />
          </div>
          <div>
            <h3 className="mb-6 text-3xl font-bold">Key Benefits</h3>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: service.acf.benefits }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
