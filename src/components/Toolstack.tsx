import Image from "next/image";

type Toolstack = {
  name: string;
  imageLocation: string;
  imageAlt: string
};

interface ToolstackProps {
  toolstack: Toolstack[];
}

const Toolstack = ({ toolstack }: ToolstackProps) => {
  return (
    <div className="mt-8">
      <h3 className="font-semibold text-base text-zinc-400 mb-3">Toolstack</h3>
      <div className="flex flex-row gap-3">
        {toolstack.map((tool) => {
          return (
            <div className="w-[3.5rem] h-[3.5rem] blured-bg p-2 rounded-md border border-solid border-[rgba(255,255,255,0.1)]">
              <Image
                className="w-full h-full object-fit"
                src={tool.imageLocation}
                width={40}
                height={40}
                alt={tool.imageAlt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toolstack;
