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
      className="h-fit w-full max-w-3xl mx-auto py-14"
      id="FAQ"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <SectionLabel sectionName="FAQ" />
          <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
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
              className="mb-4"
              variants={faqItemVariants} // Apply animation to each FAQ item
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 border border-white/20 text-white rounded-md focus:outline-none flex justify-between items-center"
              >
                <span>{title}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
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
                <p className="px-4 py-2 text-gray-300">{description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
