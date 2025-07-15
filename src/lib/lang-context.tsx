// lib/lang-context.tsx
"use client";

import { createContext, useContext } from "react";

type LangContextType = {
  lang: string;
  dict: Record<string, any>;
};

const LangContext = createContext<LangContextType | null>(null);

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context)
    throw new Error("useLang must be used inside LangContextProvider");
  return context;
};

export const LangContextProvider = ({
  children,
  lang,
  dict,
}: {
  children: React.ReactNode;
  lang: string;
  dict: Record<string, any>;
}) => {
  return (
    <LangContext.Provider value={{ lang, dict }}>
      {children}
    </LangContext.Provider>
  );
};
