import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  nl: () => import("./dictionaries/nl.json").then((m) => m.default),
};

export const getDictionary = async (locale: "en" | "nl") => {
  try {
    const loader = dictionaries[locale] || dictionaries["en"];
    return await loader();
  } catch (error) {
    // Fallback to English if any error occurs
    return await dictionaries["en"]();
  }
};
