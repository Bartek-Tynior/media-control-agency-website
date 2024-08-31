import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

const PricingComponent = () => {
  return (
    <section className="h-fit w-full max-w-3xl mx-auto py-14">
      <div className="flex flex-col gap-8 items-center justify-center text-white">
        <div className="flex flex-col justify-center items-center gap-5">
          <SectionLabel sectionName="Pricing" />
          <h2 className="text-2xl font-bold leading-tight">
            Let's make it happen.
          </h2>
          <p className="text-gray-300">
            We offer a subscription-based design service for founders and
          </p>
        </div>

        {/* <motion.h1
        className="text-4xl md:text-5xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Let's make it <i>happen.</i>
      </motion.h1> */}

        <motion.div
          className="relative rounded-lg p-8 border border-white/20 shadow-lg max-w-md w-full overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute -bottom-14 -right-10 w-72 h-72 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full opacity-70 blur-3xl" />

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Design Subscription</h2>
            </div>
            <h3 className="text-4xl font-bold mb-4">€2896</h3>
            <p className="mb-8">
              Excellent for founders wanting to upgrade their brand to the next
              level with a new logo, brand identity and website.
            </p>
            <ul className="space-y-2 mb-8">
              <li>✨ Unlimited requests</li>
              <li>✨ Unlimited revisions</li>
              <li>✨ Average 24-48 hours delivery</li>
              <li>✨ Unlimited brands / users</li>
              <li>✨ Framer / Webflow development</li>
            </ul>
            <motion.button
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingComponent;
