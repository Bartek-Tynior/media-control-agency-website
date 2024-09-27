import Image from "next/image";
import websiteContent from "../../website-content";
import SectionLabel from "./ui/SectionLabel";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProcessSection = () => {
  const content = websiteContent.process;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      className="h-fit py-14 flex overflow-hidden"
      id="process"
      ref={sectionRef}
    >
      <div className="flex flex-col gap-5">
        <SectionLabel sectionName="Process" />
        <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
          {content.title}
        </h2>
        <p className="text-sm text-gray-300">{content.subtitle}</p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 rounded"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          {renderProcessCards()}
        </motion.div>
      </div>
    </section>
  );
};

const renderProcessCards = () => {
  const content = websiteContent.process;

  return content.steps.map(({ title, description }, index) => {
    const isLast = index === 2;

    return (
      <FeatureCard
        key={index}
        index={index + 1}
        title={title}
        description={description}
        isLast={isLast}
      />
    );
  });
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

interface FeatureCardProps {
  index: number;
  title: string;
  description: string;
  isLast: boolean;
}

const FeatureCard = ({ index, title, description, isLast }: FeatureCardProps) => (
  <motion.div
    className="relative p-6 border border-white/20 rounded-xl overflow-hidden shadow-lg"
    variants={cardVariants}
  >
    <div className="relative z-10">
      <div className="flex justify-between">
        <h3 className="text-base font-bold text-white mb-2">{title}</h3>
        {!isLast && (
          <Image
            src="/img/icons/drawn-arrow.svg"
            alt="Arrow Right"
            width={30}
            height={30}
          />
        )}
      </div>
      <p className="text-gray-300 font-medium text-sm">{description}</p>
    </div>
  </motion.div>
);

export default ProcessSection;
