"use client";

import React from "react";

export function Stats26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Outcomes that speak for themselves
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              We track what matters. Our patients return to their lives with
              measurable strength gains, reduced pain, and restored confidence
              in movement.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <div className="border border-border-primary p-8">
            <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              2,400+
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Patients treated successfully
            </h3>
            <p className="mt-2">From acute injury to chronic pain management</p>
          </div>
          <div className="border border-border-primary p-8">
            <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              6 weeks
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Average time to measurable progress
            </h3>
            <p className="mt-2">
              Most patients see improvement within first month
            </p>
          </div>
          <div className="border border-border-primary p-8">
            <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              94%
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Return to activity rate
            </h3>
            <p className="mt-2">Patients achieve their functional goals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
