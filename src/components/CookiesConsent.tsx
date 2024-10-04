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
    <div className="fixed bottom-6 w-full flex justify-center z-50">
      <div className="bg-white/10 border border-gray-200/10 rounded-lg p-5 shadow-lg backdrop-blur-xl max-w-screen-md mx-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 text-sm text-white">
            <p className="mb-2 font-medium">Cookie Consent</p>
            <p className="leading-snug">
              By clicking <span className="font-bold">&quotAccept&quot</span>,
              you agree to the storing of cookies on your device to enhance site
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
