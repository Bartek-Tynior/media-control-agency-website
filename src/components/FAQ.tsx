import { useState, useEffect, useRef } from "react";
import websiteContent from "../../website-content";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

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
      className="mx-auto h-fit w-full max-w-3xl pt-14 pb-20 lg:pb-28"
      id="FAQ"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <SectionLabel sectionName="FAQ" />
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:w-1/2">
            {content.title}
          </h2>
        </div>

        {/* Trigger animation only when section comes into view */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Only trigger animation if section is in view
          variants={faqContainerVariants}
        >
          {content.faq_tiles.map(({ title, description, index }) => (
            <motion.div
              key={index}
              className="mb-3"
              variants={faqItemVariants} // Apply animation to each FAQ item
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex min-h-[3.25rem] w-full items-center justify-between gap-4 rounded-md border border-white/20 px-4 py-3 text-left text-white transition hover:border-white/35 hover:bg-white/[0.03] focus:outline-none"
              >
                <span className="text-sm font-medium leading-snug sm:text-base">
                  {title}
                </span>
                <span className="shrink-0 text-lg leading-none text-white/70">
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
                <p className="px-4 pb-4 pt-2 text-sm leading-relaxed text-gray-300 sm:text-base">
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
