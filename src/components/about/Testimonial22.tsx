"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import type { Testimonial } from "@/lib/wordpress";

interface Testimonial22Props {
  testimonials: Testimonial[];
}

export function Testimonial22({ testimonials }: Testimonial22Props) {
  // Show only first 3 testimonials
  const displayTestimonials = testimonials.slice(0, 3);
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Real results
          </h2>
          <p className="md:text-md">
            "I stopped waiting and started moving. Six weeks in, I'm back to
            running."
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8"
            >
              <div className="rb-5 mb-5 md:mb-6">
                <blockquote className="md:text-md mb-6">
                  {testimonial.acf.testimonial_text}
                </blockquote>
                <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                  <div>
                    {testimonial.acf.client_photo ? (
                      <img
                        src={testimonial.acf.client_photo}
                        alt={testimonial.acf.client_name}
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="size-12 min-h-12 min-w-12 rounded-full bg-gray-200" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.acf.client_name}</p>
                    {testimonial.acf.company_title && (
                      <p>{testimonial.acf.company_title}</p>
                    )}
                    {testimonial.acf.rating && (
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < testimonial.acf.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
