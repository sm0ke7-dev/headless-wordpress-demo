"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta31() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Ready to move without pain
          </h2>
          <p className="md:text-md">
            Schedule your evaluation today and get a clear plan for recovery.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Book an evaluation">Book an evaluation</Button>
            <Button title="Call now" variant="secondary">
              Call now
            </Button>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop"
          className="size-full object-cover"
          alt="Physical therapy evaluation and recovery"
        />
      </div>
    </section>
  );
}
