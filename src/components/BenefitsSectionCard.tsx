import Image from "next/image";
import { FC } from "react";

interface BenefitsSectionCardProps {
  description: string;
}

const BenefitsSectionCard: FC<BenefitsSectionCardProps> = ({ description }) => {
  return (
    <div className="text-white flex w-fit justify-center">
      <Image
        className="check-icon mx-2 w-[0.80rem] h-[0.80rem] pointer-events-none"
        src="/img/icons/check-icon.svg"
        width={20}
        height={20}
        alt="Check Icon"
      />
      <span className="text-xs font-medium antialiased">{description}</span>
    </div>
  );
};

export default BenefitsSectionCard;
