import Image from "next/image";

type Toolstack = {
  name: string;
  imageLocation: string;
  imageAlt: string;
};

interface ToolstackProps {
  toolstack: Toolstack[];
}

const Toolstack = ({ toolstack }: ToolstackProps) => {
  return (
    <div className="flex flex-row gap-3">
      {toolstack.map((tool, id) => {
        return (
          <div
            key={id}
            className="w-[2.5rem] h-[2.5rem] blured-bg p-[5px] shadow-lg rounded-md border border-solid border-[rgba(255,255,255,0.1)]"
          >
            <Image
              className="w-full h-full object-fit pointer-events-none"
              src={tool.imageLocation}
              width={40}
              height={40}
              alt={tool.imageAlt}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Toolstack;
