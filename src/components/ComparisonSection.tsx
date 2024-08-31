import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

const ComparisonSection = () => {
  return (
    <section className="h-fit py-14">
      <div className="flex flex-col gap-12 items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center gap-5">
          <SectionLabel sectionName="Comparison" />
          <h2 className="text-2xl font-bold leading-tight">
            But, why would you want to work with us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
          <motion.div
            className="flex flex-col justify-center gap-4 items-center w-full"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-lg">What others do.</h2>
            <div className="border border-white/20 w-full rounded-lg p-8 shadow-lg">
              <ul className="space-y-4 text-gray-400">
                <li>Overly expensive</li>
                <li>Outdated designs</li>
                <li>Long delivery times</li>
                <li>Lack of industry research</li>
                <li>Slow communication</li>
                <li>No personal approach</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-4 items-center w-full"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-lg">What we do.</h2>
            <div className="relative border border-white/20 w-full rounded-lg p-8 shadow-lg overflow-hidden">
              <div className="absolute -top-32 -right-10 w-72 h-72 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full opacity-70 blur-3xl" />

              <div className="relative z-10">
                <ul className="space-y-4">
                  <li>Senior designs for junior prices</li>
                  <li>Tailored best-fit solutions</li>
                  <li>Avg. 24-48 hours delivery time</li>
                  <li>15+ Years of industry-specific expertise</li>
                  <li>Constant, proactive communication</li>
                  <li>24/7 Whatsapp support</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
