"use client";

import About from "@/components/About";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Services from "@/components/Services";
import { useEffect } from "react";
import Lenis from 'lenis'

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <MaxWidthWrapper>
        <Hero />
        <About />
        <CaseStudiesSection />
        <Services />
        <ContactSection />
        <FAQ />
      </MaxWidthWrapper>
    </>
  );
}
