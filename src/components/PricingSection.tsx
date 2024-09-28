import { motion, useInView } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import { Button } from "./ui/Button";
import { useRef } from "react";
import websiteContent from "../../website-content";
import Image from "next/image";
import { X } from "lucide-react";

const PricingComponent = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const content = websiteContent.pricing;

  return (
    <section className="h-fit w-full max-w-3xl mx-auto py-14" ref={sectionRef}>
      <div className="flex flex-col gap-8 items-center justify-center text-white">
        <div className="flex flex-col justify-center items-center gap-5">
          <SectionLabel sectionName="Pricing" />
          <h2 className="text-2xl font-bold leading-tight">{content.title}</h2>
          <p className="text-gray-300">{content.subtitle}</p>

          <motion.div
            className="flex flex-col md:flex-row gap-8"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={containerVariants}
          >
            {renderPricingCards()}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const renderPricingCards = () => {
  const content = websiteContent.pricing;

  return content.packages.map(
    ({ title, description, price, features, withGradient, buttonText}, index) => {
      return (
        <PricingCard
          key={index}
          index={index + 1}
          title={title}
          description={description}
          price={price}
          features={features}
          withGradient={withGradient}
          buttonText={buttonText}
        />
      );
    }
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

interface PricingCardProps {
  index: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  withGradient: boolean;
  buttonText?: string;
}

const PricingCard = ({
  index,
  title,
  description,
  price,
  features,
  withGradient,
  buttonText
}: PricingCardProps) => {
  return (
    <motion.div
      className="relative rounded-lg p-8 border border-white/20 shadow-lg max-w-md w-full overflow-hidden"
      variants={cardVariants}
    >
      {withGradient && (
        <div className="absolute -bottom-14 -right-10 w-72 h-72 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full opacity-70 blur-3xl" />
      )}

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        <h3 className="text-4xl font-bold mb-4">{price}</h3>
        <p className="mb-8">{description}</p>
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li className="flex gap-4 items-center" key={index}>
              { withGradient ? (
                <Image
                className="w-[16px] h-full leading-4"
                src="/img/icons/check-icon.svg"
                alt="Check Icon"
                width={32}
                height={32}
              />
              )
              : (
                <X className="w-[16px] h-full pointer-events-none text-gray-600 leading-4" />
              )}
              {feature}
            </li>
          ))}
        </ul>
        {withGradient ? (
          <Button size="full-size" className="text-white py-3 rounded-lg">
            {buttonText}
          </Button>
        ) : (
          <Button
            size="full-size"
            variant="secondary"
            className="text-white py-3 rounded-lg"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default PricingComponent;
