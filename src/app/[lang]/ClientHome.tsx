"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import About from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Services from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PricingComponent from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";

export default function ClientHome({ dict }: { dict: any }) {
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
      <Hero
        dict={{ ...dict.hero, cornerNote: dict.about.description }}
        projects={dict.case_studies}
      />

      <MaxWidthWrapper>
        {/* <About dict={dict.about} /> */}
        <ProcessSection dict={dict.process} />
        <Services dict={dict.services} />
        <ComparisonSection dict={dict.comparison} />
        {/* <PricingComponent dict={dict.pricing} /> */}
        <FAQ dict={dict.FAQ} />
      </MaxWidthWrapper>
    </>
  );
}
