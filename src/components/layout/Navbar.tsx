"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => setIsDropdownOpen((prev) => !prev);
  const openOnDesktopDropdownMenu = () => !isMobile && setIsDropdownOpen(true);
  const closeOnDesktopDropdownMenu = () => !isMobile && setIsDropdownOpen(false);

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";

  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar() {
  const nav = useNavbar();

  return (
    <section
      className="relative z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-background-primary px-[5%] md:min-h-18"
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <Link href="/">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt="Logo"
          />
        </Link>

        <div className="absolute hidden h-screen overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            <Link
              href="/about"
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              About us
            </Link>
            <Link
              href="/services"
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Services
            </Link>
            <Link
              href="/locations"
              className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Locations
            </Link>
            <div
              onMouseEnter={nav.openOnDesktopDropdownMenu}
              onMouseLeave={nav.closeOnDesktopDropdownMenu}
            >
              <button
                className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                onClick={nav.openOnMobileDropdownMenu}
              >
                <span>Resources</span>
                <motion.span
                  animate={nav.animateDropdownMenuIcon}
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: {
                      opacity: 1,
                      height: "var(--height-open, auto)",
                      display: "block",
                    },
                    close: {
                      opacity: 0,
                      height: "var(--height-close, 0)",
                      display: "none",
                    },
                  }}
                  animate={nav.animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                >
                  <div className="mx-auto flex size-full max-w-full items-center justify-between">
                    <div className="flex w-full flex-col lg:flex-row">
                      <div className="auto-cols-1 grid flex-1 grid-cols-1 gap-x-8 gap-y-6 py-4 sm:py-8 md:grid-cols-3 lg:gap-y-0 lg:pr-8">
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.4] md:leading-[1.3]">
                            Our approach
                          </h4>
                          <Link
                            href="/about"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Our team</h5>
                              <p className="hidden text-sm md:block">
                                Meet the clinicians
                              </p>
                            </div>
                          </Link>
                          <Link
                            href="/about"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Blog</h5>
                              <p className="hidden text-sm md:block">
                                Articles and insights
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.4] md:leading-[1.3]">
                            Locations
                          </h4>
                          <Link
                            href="/locations"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">View all locations</h5>
                              <p className="hidden text-sm md:block">
                                Find a clinic near you
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.4] md:leading-[1.3]">
                            Support
                          </h4>
                          <Link
                            href="/about"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                alt="Icon"
                                className="shrink-0"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Contact</h5>
                              <p className="hidden text-sm md:block">
                                Get in touch
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.nav>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button title="Call" variant="secondary" size="sm">
              Call
            </Button>
            <Button title="Book" size="sm">
              Book
            </Button>
          </div>
        </div>

        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={nav.toggleMobileMenu}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={nav.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={nav.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: "1.5rem",
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={nav.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
          animate={nav.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={nav.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="absolute left-0 right-0 top-0 block h-dvh overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-8 pt-4"
          >
            <div className="flex flex-col">
              <Link href="/about" className="block py-3 text-md">
                About us
              </Link>
              <Link href="/services" className="block py-3 text-md">
                Services
              </Link>
              <Link href="/locations" className="block py-3 text-md">
                Locations
              </Link>
              <div className="mt-6 flex flex-col gap-4">
                <Button title="Call" variant="secondary" size="sm">
                  Call
                </Button>
                <Button title="Book" size="sm">
                  Book
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
