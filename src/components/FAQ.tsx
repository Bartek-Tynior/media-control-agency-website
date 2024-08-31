import { useState, useEffect } from "react";
import websiteContent from "../../website-content";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = websiteContent.FAQ;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="h-fit w-full max-w-3xl mx-auto py-14" id="FAQ">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <SectionLabel sectionName="FAQ" />
          <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
            {content.title}
          </h2>
        </div>

        <div>
          {content.faq_sections.map(({ title, description, index }) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 border border-white/20 text-white rounded-md focus:outline-none flex justify-between items-center"
              >
                <span>{title}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {mounted && (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
