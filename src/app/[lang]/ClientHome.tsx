"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import About from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Services from "@/components/ServicesSection";
import FooterCard from "@/components/FooterCTA";
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
      <Hero dict={dict.hero} />

      <MaxWidthWrapper>
        <About dict={dict.about} />
        <CaseStudiesSection dict={dict.case_studies} />
        <ProcessSection dict={dict.process} />
        <Services dict={dict.services} />
        <ComparisonSection dict={dict.comparison} />
        <PricingComponent dict={dict.pricing} />
        <FAQ dict={dict.FAQ} />
        <FooterCard dict={dict.footer_card} />
      </MaxWidthWrapper>
    </>
  );
}
