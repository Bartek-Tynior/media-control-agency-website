import { FC } from "react";
import Toolstack from "./Toolstack";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    toolstack: any[];
  };
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="blured-bg antialiased service-card text-start flex flex-col border border-solid border-[rgba(255,255,255,0.1)] mx-auto px-4 py-8 rounded-lg">
      <h2 className="text-lg md:text-xl font-bold mb-5">{service.title}</h2>
      <p className="font-medium text-sm md:text-base">{service.description}</p>

      <Toolstack toolstack={service.toolstack} />
    </div>
  );
};

export default ServiceCard;
