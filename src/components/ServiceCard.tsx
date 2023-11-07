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
    <div className="blured-bg antialiased service-card text-start flex flex-col border border-solid border-white/10 mx-auto px-4 py-8 rounded-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-5">{service.title}</h2>
      <p className="font-medium text-base">{service.description}</p>

      <div className="h-full mt-5 flex items-end">
        <div>
          <h3 className="font-semibold text-base text-zinc-400 mb-3">
            Toolstack
          </h3>
          <Toolstack toolstack={service.toolstack} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
