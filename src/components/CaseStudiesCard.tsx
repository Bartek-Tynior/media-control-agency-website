import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CaseStudiesCardProps {
  big?: boolean;
  imageLocation: string;
  client: string;
  service: string;
}

const CaseStudiesCard: FC<CaseStudiesCardProps> = ({
  big,
  imageLocation,
  client,
  service
}) => {
  return (
    <Link
      href={`/projects/${client.replace(/\s+/g, "-").toLowerCase()}`}
      className={`case-studies-card border border-white/10 shadow-lg ${
        big ? "md:col-span-2" : ""
      } h-[250px] relative`}
      id="case-studies-card"
    >
      <Image
        className="case-studies-card-image brightness-50"
        src={imageLocation}
        width="200"
        height="200"
        alt="Case"
      />
      <div className="case-studies-card-description p-8 bottom-0 w-fit h-fit">
        <h2 className="client-name text-2xl font-bold leading-tight">
          {client}
        </h2>
        <span className="service-type">{service}</span>
      </div>
    </Link>
  );
};

export default CaseStudiesCard;
