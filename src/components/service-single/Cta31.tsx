"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta31() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Start your evaluation today
          </h2>
          <p className="md:text-md">
            No waiting. No guessing. Just answers and a plan that works.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Book">Book</Button>
            <Button title="Call" variant="secondary">
              Call
            </Button>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop"
          className="size-full object-cover"
          alt="Physical therapy evaluation session"
        />
      </div>
    </section>
  );
}
