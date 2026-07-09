"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLang } from "@/lib/lang-context";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useLang();

  const switchTo = lang === "en" ? "nl" : "en";

  // Remove current locale prefix from path
  const newPath = pathname.replace(/^\/(en|nl)/, "");

  const handleLanguageSwitch = () => {
    router.push(`/${switchTo}${newPath}`);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={handleLanguageSwitch}
        className="inline-flex h-[40px] items-center justify-center gap-2 rounded-md border border-white/25 bg-[#0F0F0F]/95 px-4 text-xs font-medium text-white shadow-[0_16px_45px_rgba(0,0,0,.34)] backdrop-blur-2xl transition hover:bg-black"
        type="button"
      >
        <Languages className="w-4 h-4" />
        {switchTo.toUpperCase()}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
