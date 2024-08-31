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
    <div className="service-card text-start flex z-40 flex-col border border-solid border-white/20 mx-auto px-4 py-8 rounded-lg shadow-lg">
      <h2 className="text-base font-bold mb-5">
        {service.title}
      </h2>
      <p className="font-medium text-sm text-white/70">{service.description}</p>

      <div className="h-full mt-5 flex items-end">
        <div>
          <h3 className="font-bold text-xs text-white/30 mb-3">
            Toolstack
          </h3>
          <Toolstack toolstack={service.toolstack} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
