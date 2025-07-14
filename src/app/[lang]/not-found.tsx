import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import websiteContent from "../../../website-content";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  const content = websiteContent.other_pages.not_found;

  return (
    <MaxWidthWrapper>
      <div className="min-h-screen pt-[10rem] mb-5">
        <div className="flex flex-col text-center justify-center items-center">
          <h1 className="text-2xl mb-6">{content.title}</h1>
          <h2 className="text-sm max-w-md text-gray-300">{content.description}</h2>
          <Image
            src={content.imageLocation}
            className="w-[100px] mt-10 pointer-events-none"
            alt=""
            width={600}
            height={600}
          />
          <Link className="mt-10" href="/">
            <Button
              className="gap-2 group text-sm"
              variant="primary"
              size="lg"
            >
              {content.return_home}
              <ArrowRight className="group-hover:translate-x-2 transition-all" />
            </Button>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
