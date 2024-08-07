import { cn } from "@/lib/utils";
import { FC } from "react";

interface SectionLabelProps {
  sectionName: string;
  className?: string;
}

const SectionLabel: FC<SectionLabelProps> = ({ sectionName, className }) => {
  return (
    <h2
      className={cn(
        "text-xs py-2 px-4 blured-bg w-fit border border-white/10 rounded-md shadow-lg",
        className
      )}
    >
      {sectionName}
    </h2>
  );
};

export default SectionLabel;
