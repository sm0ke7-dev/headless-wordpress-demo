"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout522() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Approach</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Three principles that matter
            </h2>
            <p className="md:text-md">
              Everything we do rests on these foundations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="relative p-6 sm:col-span-2 md:p-8 lg:p-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&h=800&fit=crop"
                className="size-full object-cover"
                alt="Evidence-based physical therapy"
              />
            </div>
            <div className="relative z-10">
              <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                Evidence
              </p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                We follow the science, not trends
              </h3>
              <p className="text-text-alternative">
                Current research guides every decision. We test, measure, and
                adjust based on what the data shows, not what sounds good.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button variant="secondary-alt">Learn more</Button>
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link-alt"
                  size="link"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop"
                className="size-full object-cover"
                alt="Patient empowerment and recovery"
              />
            </div>
            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                You own your recovery
              </h3>
              <p className="text-text-alternative">
                We teach you to move better, not create dependency on visits.
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link-alt"
                  size="link"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=800&fit=crop"
                className="size-full object-cover"
                alt="Progress tracking and measurement"
              />
            </div>
            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                Numbers tell the real story
              </h3>
              <p className="text-text-alternative">
                Progress gets tracked, reported, and explained at every step.
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link-alt"
                  size="link"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
