import { motion, useInView } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import Image from "next/image";
import { X } from "lucide-react";
import { useRef } from "react";

const ComparisonSection = ({ dict }: { dict: any }) => {
  const content = dict;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="h-fit py-14 sm:py-16" ref={sectionRef}>
      <div className="flex flex-col items-center justify-center gap-10 text-white sm:gap-12">
        <div className="flex max-w-2xl flex-col items-center justify-center gap-5 text-center">
          <SectionLabel sectionName="Comparison" />
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            {content.title}
          </h2>
          <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
            {content.subtitle}
          </p>
        </div>

        <motion.div
          className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="flex w-full flex-col items-center justify-center gap-4"
            variants={cardVariants}
          >
            <h2 className="text-lg font-medium">{content.competitors.title}</h2>
            <div className="w-full rounded-lg border border-white/20 p-5 shadow-lg sm:p-8">
              <ul className="space-y-4 text-gray-400">
                {content.competitors.list.map((item, index) => (
                  <li
                    key={index}
                    className="flex w-full items-start gap-3 text-gray-500"
                  >
                    <X className="mt-0.5 h-4 w-4 shrink-0 pointer-events-none" />
                    <span className="text-sm font-medium leading-snug antialiased sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="flex w-full flex-col items-center justify-center gap-4"
            variants={cardVariants}
          >
            <h2 className="text-lg font-medium">{content.mca.title}</h2>
            <div className="relative w-full overflow-hidden rounded-lg border border-white/20 bg-white/[0.03] p-5 shadow-lg sm:p-8">
              <ul className="space-y-4">
                {content.mca.list.map((item, index) => (
                  <li className="flex w-full items-start gap-3 text-white" key={index}>
                    <Image
                      className="check-icon mt-0.5 h-4 w-4 shrink-0 pointer-events-none"
                      src="/img/icons/check-icon.svg"
                      width={20}
                      height={20}
                      alt="Check Icon"
                    />
                    <span className="text-sm font-medium leading-snug antialiased sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default ComparisonSection;
