"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header84() {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 border border-border-primary lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Rehab that works. Results you can measure.
            </h1>
            <p className="md:text-md">
              We treat pain with precision. No guessing, no endless rest. Just
              clear methods that get you moving again.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Book an Evaluation" variant="primary">
                Book an Evaluation
              </Button>
              <Button title="Call Now" variant="secondary">
                Call Now
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
