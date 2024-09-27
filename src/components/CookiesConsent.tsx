"use client";

import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    // Check if the consent cookie is already set
    setShowConsent(!hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);
    setCookie("localConsent", "true", { path: "/" });
  };

  const denyCookie = () => {
    setShowConsent(false);
    setCookie("localConsent", "false", { path: "/" });
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-6 w-full flex justify-center z-50">
      <div className="bg-white/10 border border-gray-200/10 rounded-lg p-5 shadow-lg backdrop-blur-xl max-w-screen-md mx-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 text-sm text-white">
            <p className="mb-2 font-medium">Cookie Consent</p>
            <p className="leading-snug">
              By clicking <span className="font-bold">"Accept"</span>, you agree
              to the storing of cookies on your device to enhance site
              navigation, analyze site usage, and assist in our marketing
              efforts. View our Privacy Policy for more information.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              className="border border-white/50 bg-transparent hover:bg-white/10 text-white px-4 py-2 rounded-md"
              onClick={denyCookie}
            >
              Deny
            </Button>
            <Button
              className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={acceptCookie}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesConsent;
