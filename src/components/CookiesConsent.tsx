"use client";

import { hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState<boolean | null>(null); // Change initial state to null

  useEffect(() => {
    // Check if the consent cookie is already set
    const consentExists = hasCookie("localConsent");
    setShowConsent(!consentExists); // Show consent if cookie doesn't exist
  }, []);

  const acceptCookie = () => {
    setShowConsent(false); // Hide the consent after acceptance
    setCookie("localConsent", "true", { path: "/" });
  };

  const denyCookie = () => {
    setShowConsent(false); // Hide the consent after denial
    setCookie("localConsent", "false", { path: "/" });
  };

  // Render nothing if showConsent is null (checking state)
  if (showConsent === null) {
    return null;
  }

  // Render the consent banner if showConsent is true
  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-3 z-[60] flex justify-center px-3 sm:bottom-6">
      <div className="mx-auto w-full max-w-[39rem] rounded-lg border border-white/10 bg-[rgba(15,15,15,0.92)] p-3 shadow-[0_18px_60px_rgba(0,0,0,.38)] backdrop-blur-xl sm:p-4">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex-1 text-[0.8rem] text-white sm:text-sm">
            <p className="mb-1 font-medium leading-none">Cookie Consent</p>
            <p className="max-w-[31rem] leading-snug text-white/74">
              We use cookies to improve navigation, analytics, and marketing.
              View our Privacy Policy for more information.
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:gap-3">
            <Button
              className="h-9 rounded-md border border-white/35 bg-transparent px-5 py-2 text-xs text-white hover:bg-white/10"
              onClick={denyCookie}
            >
              Deny
            </Button>
            <Button
              variant="third"
              className="h-9 rounded-md bg-white px-5 py-2 text-xs text-black hover:bg-gray-200"
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
