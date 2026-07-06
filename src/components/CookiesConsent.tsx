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
      <div className="mx-auto w-full max-w-screen-sm rounded-lg border border-gray-200/10 bg-[#0F0F0F]/90 p-3 shadow-[0_18px_60px_rgba(0,0,0,.38)] backdrop-blur-xl sm:p-5">
        <div className="flex flex-col items-start justify-between gap-2.5 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex-1 text-xs text-white sm:text-sm">
            <p className="mb-1.5 font-medium">Cookie Consent</p>
            <p className="leading-relaxed text-white/78 sm:leading-snug">
              By clicking{" "}
              <span className="font-bold text-white">{'"Accept"'}</span>,
              you agree to cookies that improve navigation, analytics, and
              marketing. View our Privacy Policy for more information.
            </p>
          </div>
          <div className="flex w-full gap-2 sm:w-auto sm:gap-3">
            <Button
              className="h-9 flex-1 rounded-md border border-white/35 bg-transparent px-4 py-2 text-xs text-white hover:bg-white/10 sm:flex-none"
              onClick={denyCookie}
            >
              Deny
            </Button>
            <Button
              variant="third"
              className="h-9 flex-1 rounded-md bg-white px-4 py-2 text-xs text-black hover:bg-gray-200 sm:flex-none"
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
