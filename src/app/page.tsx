"use client";

import About from "@/components/About";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Services from "@/components/Services";
import { useEffect } from "react";
import Lenis from "lenis";
import FooterCard from "@/components/FooterCTA";
import ProcessSection from "@/components/ProcessSection";
import PricingComponent from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Hero />

      <MaxWidthWrapper>
        <About />
        <CaseStudiesSection />
        <ProcessSection />
        <Services />
        <ComparisonSection />
        <PricingComponent />
        <FAQ />
        <FooterCard />
      </MaxWidthWrapper>
    </>
  );
}
