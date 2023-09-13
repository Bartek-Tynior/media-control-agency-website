import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
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
