import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

type FaqTile = {
  title: string;
  description: string;
  index: number;
};

const FAQ = ({ dict }: { dict: any }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Create a ref for the section and track if it's in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once when the section is in view

  const content = dict;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants for the FAQ items
  const faqContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adds a delay between children animations
      },
    },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={ref}
      className="mx-auto h-fit w-full max-w-5xl pb-16 pt-10 sm:pt-16 lg:pb-32"
      id="FAQ"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 lg:max-w-3xl">
          <SectionLabel sectionName="FAQ" />
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
        </div>

        {/* Trigger animation only when section comes into view */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Only trigger animation if section is in view
          variants={faqContainerVariants}
        >
          {content.faq_tiles.map(({ title, description, index }: FaqTile) => (
            <motion.div
              key={index}
              className="mb-4"
              variants={faqItemVariants} // Apply animation to each FAQ item
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex min-h-[4.25rem] w-full items-center justify-between gap-5 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-4 text-left text-white shadow-[0_18px_60px_rgba(0,0,0,.12)] transition hover:border-white/18 hover:bg-white/[0.04] focus:outline-none sm:px-6 sm:py-5"
              >
                <span className="text-base font-medium leading-snug sm:text-lg">
                  {title}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xl leading-none text-white/75">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 pt-3 text-base leading-relaxed text-gray-300 sm:px-6 sm:text-lg">
                  {description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
