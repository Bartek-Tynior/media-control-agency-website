"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { useLayoutEffect } from "react";

export default function Home() {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let sections = document.querySelectorAll(".animate");

      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom bottom",
          },
          ease: "back",
          autoAlpha: 0,
          y: 80,
          stagger: 0.3,
          duration: 1,
        });

        return () => ctx.revert();
      });
    });
  });

  return (
    <> 
      <Hero />
      <AboutSection />
      <Services />
      <ContactSection />
      <FAQ />
    </>
  );
}
