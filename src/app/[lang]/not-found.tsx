"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useLang } from "@/lib/lang-context";

export const metadata = {
  title: "Not Found",
};

const NotFound = () => {
  const { dict } = useLang();
  
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen pt-[10rem] mb-5">
        <div className="flex flex-col text-center justify-center items-center">
          <h1 className="text-2xl mb-6">{dict.other_pages.not_found.title}</h1>
          <h2 className="text-sm max-w-md text-gray-300">
            {dict.other_pages.not_found.description}
          </h2>
          <Image
            src={dict.other_pages.not_found.imageLocation}
            className="w-[100px] mt-10 pointer-events-none"
            alt=""
            width={600}
            height={600}
          />
          <Link className="mt-10" href="/">
            <Button className="gap-2 group text-sm" variant="primary" size="lg">
              {dict.other_pages.not_found.return_home}
              <ArrowRight className="group-hover:translate-x-2 transition-all" />
            </Button>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default NotFound;
