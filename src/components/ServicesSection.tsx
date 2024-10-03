"use client";

import { FC } from "react";
import Toolstack from "./Toolstack";
import websiteContent from "../../website-content";
import SectionLabel from "./ui/SectionLabel";
import BenefitsSection from "./BenefitsSection";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <>
      <section className="h-fit py-14" id="services" ref={sectionRef}>
        {/* Label Section */}
        <div className="flex flex-col gap-5">
          <SectionLabel sectionName="Services" />
          <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
            This is what we do.
          </h2>
        </div>

        {/* Cards Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 rounded"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          {renderServiceCards()}
        </motion.div>
        <BenefitsSection />
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
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const renderServiceCards = () => {
  const content = websiteContent.services;

  return content.map((service, index) => (
    <ServiceCard key={index} service={service} />
  ));
};

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    toolstack: any[];
  };
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="service-card text-start flex z-40 flex-col border border-solid border-white/20 mx-auto px-4 py-8 rounded-lg shadow-lg"
    >
      <h2 className="text-base font-bold mb-5">{service.title}</h2>
      <p className="font-medium text-sm text-white/70">{service.description}</p>

      <div className="h-full mt-5 flex items-end">
        <div>
          <h3 className="font-bold text-xs text-white/30 mb-3">Toolstack</h3>
          <Toolstack toolstack={service.toolstack} />
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
