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
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  const content = websiteContent.navbar;
  const contactInfo = websiteContent.contact;
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
    setIsHomePage(pathname === "/");
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(
      document.getElementsByTagName("section")
    );
    const navLinks = gsap.utils.toArray(".link-wrapper");
    const menu_shape = document.querySelector(".menu_wrapper");

    let ctx = gsap.context(() => {
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section as HTMLElement,
          start: "top 50%",
          end: () => `+=${(section as HTMLElement)?.offsetHeight} 50%`,
          onEnter: () => {
            const position = (navLinks[i] as HTMLElement)?.offsetLeft;

            if (navLinks[i + 1]) {
              gsap.to(menu_shape, {
                x: `${position}`,
                width: `${(navLinks[i] as HTMLElement)?.offsetWidth}`,
                color: "white",
              });
            }
          },
          onLeave: () => {
            const navLinks = gsap.utils.toArray(
              ".link-wrapper"
            ) as HTMLElement[];
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
            const positionBack = (navLinks[i] as HTMLElement)?.offsetLeft;

            gsap.to(menu_shape, {
              x: `${positionBack}`,
              width: `${(navLinks[i] as HTMLElement)?.offsetWidth}`,
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
      className={`fixed h-14 inset-x-0 top-0 z-30 ${
        isOpen
          ? "max-lg:bg-[rgba(255,255,255,0.0)] max-lg:backdrop-blur-md max-lg:shadow-[7px_7px_12px_0_rgba(0,_0,_0,_0.1)]"
          : ""
      }`}
    >
      <MaxWidthWrapper className="flex justify-between py-6">
        {/* Logo Section */}
        <div className="navbar_logo flex z-20 w-[175px]">
          <Link href={"/"}>
            <Image
              src={content.logo.imageLocation}
              width="100"
              height="60"
              quality={100}
              className="lg:w-[88px] w-[60px] pointer-events-none"
              alt={content.logo.altImage}
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        {!isOpen && (
          <div className="menu-mobile-wrap" id="menu_mobile_wrap">
            <div>
              {content.links.map((link) => {
                return (
                  <div key={link.name} className="py-[0.5rem]">
                    <Link
                      href={isHomePage ? link.link : `/${link.link}`}
                      id={"link_" + link.name.replace(/\s/g, "_").toLowerCase()}
                      className="text-3xl text-white font-bold hover:text-zinc-300 transform transition-all"
                      onClick={toggleNavbar}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              })}

              <Link href="/contact">
                <Button variant="default" onClick={toggleNavbar}>
                  Lets get started
                </Button>
              </Link>
            </div>

            <div className="flex flex-col">
              <h2 className="text-2xl text-gray-400 py-2 font-medium">
                Social Media
              </h2>

              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center gap-3 text-xl">
                  {contactInfo.instagram}
                  <a href="https://www.instagram.com/mediacontrolag/">
                    Instagram
                  </a>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="blured-bg rounded-[80px] h-[50px] lg:flex border border-white/10 hidden">
          <ul className="flex px-16 flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {content.links.map((link: any, i: number) => {
              return (
                <li key={link.name} className="link-wrapper z-10 px-[0.75rem]">
                  <Link
                    className="text-base font-normal"
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

        {/* Mobile Hamburger Component */}
        <div className="navigation_hamburger flex justify-center items-center lg:hidden">
          {isOpen ? (
            <button className="hamburger" onClick={toggleNavbar}>
              <div className="hamburger-line"></div>
              <div className="hamburger-line-2"></div>
            </button>
          ) : (
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

        {/* Call-to-action Button */}
        <div className="hidden items-center justify-center lg:flex w-[175px]">
          <Button
            className="gap-2 group h-[50px] text-base border border-white/10"
            variant="default"
            size="full-size"
            onClick={() => router.push("/contact")}
          >
            Get in touch
            <ArrowRight className="group-hover:translate-x-2 transition-all" />
          </Button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
