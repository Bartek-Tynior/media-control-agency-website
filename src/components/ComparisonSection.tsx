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
    <section className="h-fit py-10 sm:py-16 lg:py-20" ref={sectionRef}>
      <div className="flex flex-col items-center justify-center gap-10 text-white sm:gap-14">
        <div className="flex max-w-2xl flex-col items-center justify-center gap-5 text-center">
          <SectionLabel sectionName="Comparison" />
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
            {content.subtitle}
          </p>
        </div>

        <motion.div
          className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[0.92fr_1.08fr]"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="group relative flex min-h-[30rem] w-full overflow-hidden rounded-xl border border-white/10 bg-[#161616] shadow-[0_26px_90px_rgba(0,0,0,.28)]"
            variants={cardVariants}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.08)_0,transparent_38%)]" />
            <div className="relative flex w-full flex-col justify-between p-5 sm:p-8">
              <div>
                <h2 className="max-w-sm text-2xl font-semibold leading-none text-white/80 sm:text-3xl">
                  {content.competitors.title}
                </h2>
              </div>
              <ul className="mt-10 space-y-4 text-gray-400">
                {content.competitors.list.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="flex w-full items-start gap-3 rounded-md border border-white/25 bg-black/18 p-3 text-gray-400"
                  >
                    <X className="mt-0.5 h-4 w-4 shrink-0 pointer-events-none text-white/35" />
                    <span className="text-sm font-medium leading-snug antialiased sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="group relative flex min-h-[30rem] w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] shadow-[0_34px_120px_rgba(0,0,0,.34)]"
            variants={cardVariants}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-70"
              src="/img/fluid-gradient-logo-palette-grain-3840x1620-h264.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,15,15,.94),rgba(15,15,15,.76)_48%,rgba(15,15,15,.35))]" />
            <div className="absolute inset-x-0 top-0 h-px bg-white/35" />
            <div className="relative flex w-full flex-col justify-between p-5 sm:p-8">
              <div>
                <h2 className="max-w-lg text-3xl font-semibold leading-none text-white sm:text-5xl">
                  {content.mca.title}
                </h2>
              </div>
              <ul className="mt-10 grid grid-cols-1 gap-3">
                {content.mca.list.map((item: string, index: number) => (
                  <li
                    className="flex w-full items-start gap-3 rounded-md border border-white/25 bg-[#0F0F0F]/70 p-3 text-white shadow-[0_16px_45px_rgba(0,0,0,.18)] backdrop-blur-xl"
                    key={index}
                  >
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
