"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLang } from "@/lib/lang-context";
import { Button } from "@/components/ui/Button";
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
      <Button
        onClick={handleLanguageSwitch}
        className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
      >
        <Languages className="w-4 h-4" />
        {switchTo.toUpperCase()}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
