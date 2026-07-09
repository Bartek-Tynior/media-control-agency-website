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
    <div className="flex flex-row flex-wrap gap-3">
      {toolstack.map((tool, id) => {
        return (
          <div
            key={id}
            className="h-9 w-9 rounded-md border border-solid border-[rgba(255,255,255,0.1)] p-[6px] opacity-75 shadow-lg transition-opacity duration-300 ease-in-out hover:opacity-100"
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
