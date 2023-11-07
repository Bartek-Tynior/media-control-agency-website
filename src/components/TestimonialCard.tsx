import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface PageProps { 
  className?: string;
}

const TestimonialCard:FC<PageProps> = ({ className }) => {
  return (
    <div className={cn("blured-bg text-start flex flex-col gap-6 border border-solid border-white/10 mx-auto p-8 rounded-lg", className)}>
      <p className="text-xl font-semibold">
        &quot;We were delighted with the pace of work, good communication, and
        planning for project implementation. We liked the creative and modern
        approach to each project.&quot;
      </p>
      <div className="flex gap-x-4">
        <Image
          width="80"
          height="80"
          className="rounded-full w-12 h-12"
          src="/img/person-1.jpg"
          alt=""
        />

        <div className="self-center">
          <h3 className="text-xl font-bold">Jeroen Jansen</h3>
          <h4 className="text-lg font-medium">CEO</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
