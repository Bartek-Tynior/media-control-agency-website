"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";
import websiteContent from "../../website-content";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const navLinks = websiteContent.navbar;
  const [isOpen, setOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(false);

  const toggleNavbar = () => {
    setOpen(!isOpen);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    if (!isOpen) {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [pathname]);

  useLayoutEffect(() => {
    const sections = gsap.utils.toArray(
      document.getElementsByTagName("section")
    );
    const navLinks = gsap.utils.toArray(".link-wrapper");
    const menu_shape = document.querySelector(".menu_wrapper");

    let ctx = gsap.context(() => {
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          end: () => `+=${section?.offsetHeight} 50%`,
          onEnter: () => {
            const position = navLinks[i]?.offsetLeft;

            if (navLinks[i + 1]) {
              gsap.to(menu_shape, {
                x: `${position}`,
                width: `${navLinks[i]?.offsetWidth}`,
                color: "white",
              });
            }
          },
          onLeave: () => {
            const position = navLinks[i + 1]?.offsetLeft;

            if (navLinks[i + 1]) {
              gsap.to(menu_shape, {
                x: `${position}`,
                width: `${navLinks[i + 1]?.offsetWidth}`,
                color: "white",
              });
            }
          },
          onEnterBack: () => {
            const positionBack = navLinks[i]?.offsetLeft;

            gsap.to(menu_shape, {
              x: `${positionBack}`,
              width: `${navLinks[i]?.offsetWidth}`,
              color: "white",
            });
          },
        });
      });
    });

    return () => ctx.revert();
  });

  return (
    <nav
      className={`h-[6rem] z-10 w-full fixed flex justify-between px-6 py-4`}
    >
      <div className="navbar_logo flex z-20">
        <Link
          href={"/"}
          className="text-2xl font-bold tracking-tight leading-5 text-white"
        >
          <Image src={"/img/logo.png"} width="100" height="60" alt="logo" />
        </Link>
      </div>

      {!isOpen && (
        <div className="menu-mobile-wrap" id="menu_mobile_wrap">
          <div className="menu-mobile-wrap-content">
            <div className="menu">
              {navLinks.map((link, i) => {
                return (
                  <div key={link.name} className="link-wrapper py-[0.5rem]">
                    <Link
                      className="text-3xl text-white font-bold"
                      onClick={toggleNavbar}
                      href={link.link}
                      passHref
                      scroll={false}
                      id={"link_" + i++}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              })}

              <Button variant="default">Lets get started</Button>

              <div className="navbar_bottom_section-wrapper">
                <p className="text-2xl text-gray-400 py-2 font-medium">
                  Social Media
                </p>

                <div className="navbar_social_links-wrapper flex ">
                  <div className="navbar_social_links-wrapper-section flex flex-col gap-2">
                    <a className="navbar_social-link-button flex">
                      <div className="icon-socials pr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current text-white"
                          viewBox="0 0 24 24"
                          width="30px"
                          height="30px"
                        >
                          {" "}
                          <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                        </svg>
                      </div>
                      <div className="text-socials">
                        <span className="text-2xl text-white">Instagram</span>
                      </div>
                    </a>
                    <a className="navbar_social-link-button flex">
                      <div className="icon-socials pr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current text-white"
                          viewBox="0 0 32 32"
                          width="30px"
                          height="30px"
                        >
                          <path d="M 1 6.75 L 1 25.25 L 9.9375 25.25 C 10.765625 25.25 16.46875 25.082031 16.46875 19.875 C 16.46875 16.621094 14.230469 15.515625 13.09375 15.1875 C 13.929688 14.792969 15.59375 13.855469 15.59375 11.34375 C 15.59375 9.945313 15.394531 6.75 9.6875 6.75 Z M 21.375 8.46875 L 21.375 10.15625 L 28.28125 10.15625 L 28.28125 8.46875 Z M 5.0625 9.90625 L 8.875 9.90625 C 9.234375 9.90625 11.65625 9.714844 11.65625 12.03125 C 11.65625 14.011719 9.90625 14.21875 9.1875 14.21875 L 5.0625 14.21875 Z M 25 11.6875 C 19.777344 11.6875 18.6875 16.222656 18.6875 18.1875 C 18.6875 24.019531 23.46875 24.6875 25 24.6875 C 29.128906 24.6875 30.300781 22.015625 30.78125 20.53125 L 27.78125 20.53125 C 27.664063 20.914063 26.789063 22.15625 25.125 22.15625 C 22.335938 22.15625 22.09375 19.976563 22.09375 19 L 30.96875 19 C 31.148438 15.625 29.671875 11.6875 25 11.6875 Z M 24.90625 14.21875 C 25.738281 14.21875 26.410156 14.460938 26.8125 14.90625 C 27.214844 15.355469 27.511719 16.011719 27.59375 16.875 L 22.09375 16.875 C 22.109375 16.636719 22.164063 16.363281 22.25 16.0625 C 22.335938 15.753906 22.46875 15.460938 22.6875 15.1875 C 22.90625 14.917969 23.210938 14.683594 23.5625 14.5 C 23.921875 14.3125 24.367188 14.21875 24.90625 14.21875 Z M 5.0625 17 L 9.46875 17 C 10.34375 17 12.40625 17.136719 12.40625 19.65625 C 12.40625 22.097656 9.808594 22.09375 9.40625 22.09375 L 5.0625 22.09375 Z" />
                        </svg>{" "}
                      </div>
                      <div className="text-socials">
                        <span className="text-2xl text-white">Behance</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="blured-bg rounded-xl lg:flex text-white hidden">
        <ul className="px-2 mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
          {navLinks.map((link: any, i: number) => {
            return (
              <li
                key={link.name}
                className="link-wrapper z-10 px-[1.25rem] py-[1rem]"
              >
                <Link
                  className="text-base font-bold"
                  href={isHomePage ? link.link : `/${link.link}`}
                  id={"link_" + link.name.replace(/\s/g, "_").toLowerCase()}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          {isHomePage && (
            <div className="menu_wrapper">
              <div className="menu_shape-bg"></div>
            </div>
          )}
        </ul>
      </div>

      <div className="navigation_hamburger flex lg:hidden">
        {isOpen && (
          <button className="hamburger" onClick={toggleNavbar}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line-2"></div>
          </button>
        )}

        {!isOpen && (
          <button className="close-btn" onClick={toggleNavbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white"
              viewBox="0 0 50 50"
              width="40px"
              height="40px"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
            </svg>
          </button>
        )}
      </div>

      <div className="hidden items-center justify-center lg:flex">
        <Button
          className="gap-2 group"
          size="full-size"
          onClick={() => router.push("/contact")}
        >
          Let's get started
          <ArrowRight className="group-hover:translate-x-2 transition-all" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
