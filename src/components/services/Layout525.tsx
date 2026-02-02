"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout525() {
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
          <div className="relative flex flex-col justify-center p-6 md:p-8 lg:p-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                Injury
              </p>
              <h2 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                Sports injury rehabilitation
              </h2>
              <p className="text-text-alternative">
                Sprains, strains, overuse injuries. We get athletes back to
                training with a plan that prevents re-injury.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Explore" variant="secondary-alt">
                  Explore
                </Button>
                <Button
                  title="Learn"
                  variant="link-alt"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/50" />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="mb-3 md:mb-4">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                        className="size-12"
                        alt="Relume logo"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                      Post-operative recovery programs
                    </h3>
                    <p className="text-text-alternative">
                      Surgery is the start, not the end. We guide you through
                      each phase of healing with precision.
                    </p>
                  </div>
                  <div className="mt-5 flex items-center md:mt-6">
                    <Button
                      title="Learn"
                      variant="link-alt"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/50" />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="mb-3 md:mb-4">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                        className="size-12"
                        alt="Relume logo"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                      Chronic pain management solutions
                    </h3>
                    <p className="text-text-alternative">
                      Long-term pain doesn't need to be permanent. We build
                      strategies that reduce pain and restore function.
                    </p>
                  </div>
                  <div className="mt-5 flex items-center md:mt-6">
                    <Button
                      title="Learn"
                      variant="link-alt"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col p-6 md:p-8 lg:p-12">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                      className="size-12"
                      alt="Relume logo"
                    />
                  </div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                    Return-to-play programs
                  </h3>
                  <p className="text-text-alternative">
                    Sport-specific training to get you back in the game safely
                    and stronger than before.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Explore" variant="secondary-alt">
                    Explore
                  </Button>
                  <Button
                    title="Learn"
                    variant="link-alt"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
