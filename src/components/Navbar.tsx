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
      className={`h-[6rem] z-50 w-full fixed flex justify-between px-6 py-4`}
    >
      <div className="navbar_logo flex z-20">
        <Link
          href={"/"}
          className="text-2xl font-bold tracking-tight leading-5 text-white"
        >
          <Image src="/img/logo.png" width="100" height="60" alt="logo" />
        </Link>
      </div>

      {!isOpen && (
        <div className="menu-mobile-wrap" id="menu_mobile_wrap">
          <div>
            {navLinks.map((link, i) => {
              return (
                <div key={link.name} className="py-[0.5rem]">
                  <Link
                    href={isHomePage ? link.link : `/${link.link}`}
                    id={"link_" + link.name.replace(/\s/g, "_").toLowerCase()}
                    className="text-3xl text-white font-bold"
                    onClick={toggleNavbar}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}

            <Link href="/contact">
              <Button variant="default" onClick={() => setOpen(true)}>Lets get started</Button>
            </Link>
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl text-gray-400 py-2 font-medium">
              Social Media
            </h2>

            <div className="flex flex-col gap-3">
              <a href="" className="inline-flex items-center gap-3 text-xl">
                <Image
                  className="w-8 h-8"
                  src="/img/icons/instagram-icon.png"
                  alt=""
                  width={200}
                  height={200}
                />
                Instagram
              </a>

              <a href="" className="inline-flex items-center gap-3 text-xl">
                <Image
                  className="w-8 h-8"
                  src="/img/icons/linkedin-icon.png"
                  alt=""
                  width={200}
                  height={200}
                />
                LinkedIn
              </a>
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
          variant="default"
          size="full-size"
          onClick={() => router.push("/contact")}
        >
          Get in touch
          <ArrowRight className="group-hover:translate-x-2 transition-all" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
