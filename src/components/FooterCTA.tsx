import { Button } from "./ui/Button";
import websiteContent from "../../website-content";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterCard: React.FC = () => {
  const content = websiteContent.footer_card;

  // Create a reference to track the section's position
  const ref = useRef(null);

  // Use the useInView hook to track if the section is visible in the viewport
  const isInView = useInView(ref, { once: true }); // Trigger only once

  // Define animation variants for entering and exiting
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref} // Attach the ref to this container
      className="relative flex flex-col items-center justify-center py-20 text-white"
      id="contact"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[200px] h-[500px] bg-custom-gradient rounded-full filter blur-3xl opacity-70"></div>
      </div>

      {/* Apply Framer Motion's motion.div for the animation */}
      <motion.div
        className="relative p-8 blured-bg text-white border border-white/10 shadow-lg rounded-lg max-w-xl text-center"
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate when it comes into view
      >
        <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
        <p className="text-gray-300 mb-6">{content.subtitle}</p>
        <a href="/contact">
          <Button variant="primary">{content.button.text}</Button>
        </a>
      </motion.div>
    </div>
  );
};

export default FooterCard;
