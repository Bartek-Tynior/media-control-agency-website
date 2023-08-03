import BenefitsSection from "./BenefitsSection";
import TestimonialsSwiper from "./TestimonialsSwiper";

const TestimonialsSection = () => {
  return (
    <section className="h-screen pt-[6rem]">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold py-2 px-4 bg-gray-700 w-fit rounded-lg">
          Testimonials
        </h2>
        <h3 className="text-4xl mb-6 lg:w-1/2 font-bold leading-tight">
          We stand for our client and our client stands for us.
        </h3>
      </div>

      <TestimonialsSwiper />

      <BenefitsSection />
    </section>
  );
};

export default TestimonialsSection;
