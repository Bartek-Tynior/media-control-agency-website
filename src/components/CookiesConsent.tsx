"use client";

import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="w-screen flex justify-center fixed z-50 bottom-6">
      <div className="blured-bg border-white/10 max-w-screen-xl mx-5 rounded-lg">
        <div className="max-w-screen-xl px-5 sm:px-10 md:px-15 h-full flex gap-5 py-3 items-center backdrop-blur-xl">
          <span className="text-base flex items-center">
            This website uses cookies to improve user experience. By using our
            website you consent to all cookies in accordance with our Privacy
            Policy.
          </span>
          <Button
            className={cn("flex items-center")}
            onClick={() => acceptCookie()}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookiesConsent;
