import BenefitsSection from "./BenefitsSection";
import TestimonialsSwiper from "./TestimonialsSwiper";
import SectionLabel from "./ui/SectionLabel";

const TestimonialsSection = () => {
  return (
    <section className="h-screen pt-[6rem]" id="testimonials">
      <div className="flex flex-col gap-2">
        <SectionLabel sectionName="Testimonials" />
        <h3 className="text-4xl mb-6 lg:w-1/2 font-bold leading-tight">
          At all times, our clients take precedence.
        </h3>
      </div>

      <TestimonialsSwiper />

      <BenefitsSection />
    </section>
  );
};

export default TestimonialsSection;
