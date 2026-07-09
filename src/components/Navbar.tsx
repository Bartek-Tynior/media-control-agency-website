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

const Navbar = ({ lang, dict }) => {
  const content = dict.essential_elements.navbar;
  const contact = dict.essential_elements.contact;
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
    setIsHomePage(pathname === `/${lang}` || pathname === `/${lang}/`);
  }, [pathname, lang]);

  return (
    <motion.nav
      className={`fixed h-20 w-screen inset-x-0 top-0 z-50 ${
        isOpen ? "" : "bg-[#0F0F0F]/90 backdrop-blur-2xl h-screen"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <MaxWidthWrapper className="flex items-center justify-between max-lg:py-3 py-6">
        {/* Logo Section */}
        <div className="navbar_logo z-50 flex h-fit w-fit rounded-md border border-white/10 bg-[rgba(15,15,15,0.84)] px-2.5 py-2 shadow-[0_16px_45px_rgba(0,0,0,.24)] backdrop-blur-xl lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0">
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
        <div className="hidden h-[40px] items-center rounded-md border border-white/25 bg-[#0F0F0F]/95 text-white shadow-[0_16px_45px_rgba(0,0,0,.34)] backdrop-blur-2xl lg:flex">
          <ul className="flex px-6 flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {content.links.map((link: any, i: number) => {
              return (
                <li key={link.name} className="link-wrapper z-10 px-2">
                  <Link
                    className="text-sm font-medium text-white"
                    href={`/${lang}${link.link}`}
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
              className="hamburger-button z-20 flex rounded-md border border-white/25 bg-[#0F0F0F]/95 p-2 text-white shadow-[0_16px_45px_rgba(0,0,0,.34)] backdrop-blur-2xl"
              onClick={toggleNavbar}
            >
              <AlignJustify className="h-6 w-6" />
            </button>
          ) : (
            <button
              className="close-button z-20 flex rounded-md border border-white/25 bg-[#0F0F0F]/95 p-2 text-white shadow-[0_16px_45px_rgba(0,0,0,.34)] backdrop-blur-2xl"
              onClick={toggleNavbar}
            >
              <X className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Call-to-action Button */}
        <div className="hidden items-center justify-center lg:flex h-[40px] w-[155px]">
          <button
            className="group inline-flex h-[40px] w-full items-center justify-center gap-2 rounded-md border border-white/25 bg-[#0F0F0F]/95 px-6 text-xs font-medium text-white shadow-[0_16px_45px_rgba(0,0,0,.34)] backdrop-blur-2xl transition hover:bg-black"
            onClick={() => router.push(`/${lang}${contact.CTA.link}`)}
            type="button"
          >
            {contact.CTA.text}
            <ArrowRight className="group-hover:translate-x-2 transition-all" />
          </button>
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
                    href={`/${lang}${link.link}`}
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
              <Link href={`/${lang}${contact.CTA.link}`}>
                <Button
                  className="gap-2 group text-base h-10 border border-white/10"
                  variant="primary"
                  size="default"
                  onClick={toggleNavbar}
                >
                  {contact.CTA.text}
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
              {["instagram", "linkedin", "facebook"].map((platform) => {
                const social = contact[platform];
                return (
                  <a
                    key={platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={social.icon}
                      alt={social.iconAlt}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-base text-gray-300 font-semibold">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
