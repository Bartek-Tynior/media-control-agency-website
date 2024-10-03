"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
import { AlignJustify, ArrowRight, X } from "lucide-react";
import websiteContent from "../../website-content";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";

const Navbar = () => {
  const content = websiteContent.essential_elements.navbar;
  const contact = websiteContent.essential_elements.contact;
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

  return (
    <motion.nav
      className={`fixed h-20 w-screen inset-x-0 top-0 z-50 ${
        isOpen ? "" : "blured-bg h-screen"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <MaxWidthWrapper className="flex items-center justify-between max-lg:py-3 py-6">
        {/* Logo Section */}
        <div
          className={`navbar_logo flex z-50 w-fit h-fit ${
            !isOpen ? "" : "bg-[#0F0F0F]/70"
          } rounded-lg px-3 py-2`}
        >
          <Link href={"/"}>
            <Image
              src={content.logo.imageLocation}
              width="100"
              height="60"
              quality={100}
              className="w-[60px] h-auto"
              alt={content.logo.altImage}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="blured-bg rounded-md h-[40px] items-center lg:flex border border-white/10 hidden shadow-lg">
          <ul className="flex px-6 flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {content.links.map((link: any, i: number) => {
              return (
                <li key={link.name} className="link-wrapper z-10 px-2">
                  <Link
                    className="text-sm font-normal"
                    href={isHomePage ? link.link : `/${link.link}`}
                    id={"link_" + link.name.replace(/\s/g, "_").toLowerCase()}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Hamburger Component */}
        <div className="navigation_hamburger flex justify-center items-center lg:hidden">
          {isOpen ? (
            <button
              name="hamburger-button"
              aria-label="open-menu"
              className="flex z-20 hamburger-button"
              onClick={toggleNavbar}
            >
              <AlignJustify className="w-10 h-10" />
            </button>
          ) : (
            <button className="flex z-20 close-button" onClick={toggleNavbar}>
              <X className="w-10 h-10" />
            </button>
          )}
        </div>

        {/* Call-to-action Button */}
        <div className="hidden items-center justify-center lg:flex h-[40px] w-[155px]">
          <Button
            className="gap-2 group h-[40px] text-xs"
            variant="primary"
            size="full-size"
            onClick={() => router.push("/contact")}
          >
            Get in touch
            <ArrowRight className="group-hover:translate-x-2 transition-all" />
          </Button>
        </div>
      </MaxWidthWrapper>

      {/* Mobile Menu */}
      {!isOpen && (
        <div className="menu-mobile-wrap px-5 sm:px-10 md:px-16 pb-10 pt-20">
          <div>
            {content.links.map((link) => {
              return (
                <div key={link.name} className="py-[0.25rem]">
                  <Link
                    href={isHomePage ? link.link : `/${link.link}`}
                    id={"link_" + link.name.replace(/\s/g, "_").toLowerCase()}
                    className="text-lg text-white font-bold hover:text-zinc-300 transform transition-all"
                    onClick={toggleNavbar}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}

            <div className="py-2">
              <Link href="/contact">
                <Button
                  className="gap-2 group text-base h-10 border border-white/10"
                  variant="primary"
                  size="default"
                  onClick={toggleNavbar}
                >
                  Get in touch
                  <ArrowRight className="group-hover:translate-x-2 transition-all" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg text-gray-400 py-2 font-medium">
              Social Media
            </h2>

            <div className="flex flex-col gap-3">
              {contact.instagram}
              {contact.linkedin}
              {contact.facebook}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
