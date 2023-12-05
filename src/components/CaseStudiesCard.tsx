import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CaseStudiesCardProps {
  id: number;
  image: {
    type: string;
    src: string;
  };
  client: string;
  service: string;
}

const CaseStudiesCard: FC<CaseStudiesCardProps> = ({
  id,
  image,
  client,
  service,
}) => {
  return (
    <Link
      href={`/projects/${client.replace(/\s+/g, "-").toLowerCase()}`}
      className={`case-studies-card border border-white/10 shadow-lg col-span-2 h-full relative ${'card' + id}`}
      id={`case-studies-card-${client.replace(/\s+/g, "-").toLowerCase()}}`}
    >
      {(image.type === "video" && (
        <video
          autoPlay
          muted
          loop
          className="w-full object-cover case-studies-card-image brightness-75"
        >
          <source src={image.src} type="video/mp4" />
        </video>
      )) || (
        <Image
          className="case-studies-card-image brightness-50"
          src={image.src}
          width="200"
          height="200"
          alt="Case"
        />
      )}

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
