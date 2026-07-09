"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

type ProcessStep = {
  i?: number;
  title: string;
  description: string;
  tags?: string[];
};

type ProcessSectionProps = {
  dict: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
};

const ProcessSection = ({ dict }: ProcessSectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const totalSteps = dict.steps.length;

  return (
    <section className="h-fit py-14" id="process" ref={sectionRef}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] lg:gap-12">
        <motion.div
          className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={introVariants}
        >
          <SectionLabel sectionName="Process" />
          <h2 className="text-2xl font-bold leading-tight">{dict.title}</h2>
          <p className="text-base text-gray-300">{dict.subtitle}</p>
        </motion.div>

        <div className="relative flex flex-col gap-4 lg:gap-0">
          {dict.steps.map((step, index) => (
            <ProcessCard
              key={`${step.title}-${index}`}
              step={step}
              index={index}
              totalSteps={totalSteps}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const introVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const cardRevealVariants = {
  hidden: { opacity: 0, y: 64 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

type ProcessCardProps = {
  step: ProcessStep;
  index: number;
  totalSteps: number;
};

const ProcessCard = ({ step, index, totalSteps }: ProcessCardProps) => {
  const cardRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.99, 1, 0.97]);
  const y = useTransform(scrollYProgress, [0, 0.45, 1], [24, 0, -10]);
  const stepNumber = step.i ?? index + 1;
  const stepLabel = String(stepNumber).padStart(2, "0");
  const totalLabel = String(totalSteps).padStart(2, "0");
  const stackOffset = index * 14;

  return (
    <motion.article
      ref={cardRef}
      className="relative lg:sticky lg:min-h-[36vh] last:lg:min-h-0"
      style={{
        top: `calc(5.25rem + ${stackOffset}px)`,
        zIndex: index + 1,
        scale: prefersReducedMotion ? 1 : scale,
        y: prefersReducedMotion ? 0 : y,
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.28 }}
      variants={cardRevealVariants}
    >
      <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-white/20 bg-[#0F0F0F]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:min-h-[300px] sm:p-8 lg:min-h-[320px] lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0)_38%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/25" />

        <div className="relative z-10 flex h-full min-h-[232px] flex-col justify-between sm:min-h-[236px] lg:min-h-[240px]">
          <div className="flex items-start justify-between gap-6">
            <p className="text-xs font-bold tracking-wide text-white/35">
              <span className="text-white">{stepLabel}</span> / {totalLabel}
            </p>
          </div>

          <div>
            <h3 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {step.title}
            </h3>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-gray-300 sm:text-base">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProcessSection;
