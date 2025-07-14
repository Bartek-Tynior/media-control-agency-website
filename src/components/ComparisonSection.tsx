import { motion, useInView } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import Image from "next/image";
import { X } from "lucide-react";
import websiteContent from "../../website-content";
import { useRef } from "react";

const ComparisonSection = ({ dict }: { dict: any }) => {
  const content = dict;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="h-fit py-14" ref={sectionRef}>
      <div className="flex flex-col gap-12 items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center gap-5">
          <SectionLabel sectionName="Comparison" />
          <h2 className="text-2xl font-bold leading-tight">{content.title}</h2>
          <p className="text-base text-gray-300">{content.subtitle}</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col justify-center gap-4 items-center w-full"
            variants={cardVariants}
          >
            <h2 className="text-lg">What others do.</h2>
            <div className="border border-white/20 w-full rounded-lg p-8 shadow-lg">
              <ul className="space-y-4 text-gray-400">
                {content.competitors.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-500 flex w-fit justify-center"
                  >
                    <X className="mx-2 w-[0.80rem] h-[0.80rem] pointer-events-none" />
                    <span className="text-sm font-medium antialiased leading-3">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-4 items-center w-full"
            variants={cardVariants}
          >
            <h2 className="text-lg">What we do.</h2>
            <div className="relative border border-white/20 w-full rounded-lg p-8 shadow-lg overflow-hidden">
              <div className="absolute -top-32 -right-10 w-72 h-72 bg-custom-gradient rounded-full opacity-70 blur-3xl" />

              <div className="relative z-10">
                <ul className="space-y-4">
                  {content.mca.map((item, index) => (
                    <li
                      className="text-white flex w-fit justify-center"
                      key={index}
                    >
                      <Image
                        className="check-icon mx-2 w-[0.80rem] h-[0.80rem] pointer-events-none"
                        src="/img/icons/check-icon.svg"
                        width={20}
                        height={20}
                        alt="Check Icon"
                      />
                      <span className="text-sm font-medium antialiased leading-3">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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
