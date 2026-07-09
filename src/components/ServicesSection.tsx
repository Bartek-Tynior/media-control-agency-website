"use client";

import { FC } from "react";
import Toolstack from "./Toolstack";
import SectionLabel from "./ui/SectionLabel";
import BenefitsSection from "./BenefitsSection";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Services = ({ dict }: { dict: any }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <>
      <section className="h-fit py-14" id="services" ref={sectionRef}>
        {/* Label Section */}
        <div className="flex flex-col gap-5">
          <SectionLabel sectionName="Services" />
          <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
            {dict.title}
          </h2>
        </div>

        {/* Services Table */}
        <motion.div
          className="mt-10 flex flex-col gap-6"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          {renderServiceRows({ dict })}
        </motion.div>
        <BenefitsSection dict={dict} />
      </section>
    </>
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
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const renderServiceRows = ({ dict }: { dict: any }) => {
  const content = dict;

  return content.list.map((service, index) => (
    <ServiceRow key={index} service={service} />
  ));
};

interface ServiceRowProps {
  service: {
    title: string;
    description: string;
    toolstack: any[];
  };
}

const ServiceRow: FC<ServiceRowProps> = ({ service }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="grid grid-cols-1 gap-6 border-t border-white/15 pt-6 first:border-t-0 first:pt-0 sm:pt-8 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.1fr)] lg:gap-10"
    >
      <div className="flex items-start">
        <h3 className="text-3xl font-bold leading-none text-white sm:text-4xl lg:text-5xl">
          {service.title}
        </h3>
      </div>

      <div className="flex flex-col gap-6">
        <p className="max-w-2xl text-sm font-medium leading-relaxed text-white/70 sm:text-base">
          {service.description}
        </p>

        <div>
          <h4 className="mb-3 text-xs font-bold text-white/30">Toolstack</h4>
          <Toolstack toolstack={service.toolstack} />
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
