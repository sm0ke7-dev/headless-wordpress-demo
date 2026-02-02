"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout367() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What to expect
            </h2>
            <p className="md:text-md">
              We start with facts, not assumptions about your pain.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      className="size-12"
                      alt="Relume logo 1"
                    />
                  </div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Initial evaluation
                  </h3>
                  <p>
                    We assess your movement, strength, and what limits you most.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Schedule</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      className="size-12"
                      alt="Relume logo 2"
                    />
                  </div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Initial evaluation
                  </h3>
                  <p>
                    We assess your movement, strength, and what limits you most.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Schedule</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary md:col-span-2 md:row-span-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 text-sm font-semibold">Progress</p>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Track results and adjust as you improve
                  </h3>
                  <p>
                    You measure your gains in strength, range, and function. We
                    adjust your plan based on what the data shows. No guessing,
                    no endless cycles.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Continue" variant="secondary">
                    Continue
                  </Button>
                  <Button
                    title="Learn"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
