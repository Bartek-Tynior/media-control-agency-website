import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <Hero />
        <AboutSection />
        <CaseStudiesSection />
        <Services />
        <ContactSection />
        <FAQ />
      </MaxWidthWrapper>
    </>
  );
}
