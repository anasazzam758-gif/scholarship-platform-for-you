"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

// سياق اللغة فقط (عربي افتراضياً)
export const LanguageContext = createContext({
  language: "ar",
  toggleLanguage: () => {},
});

export function Providers({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("ar");

  // تحديث اتجاه الصفحة (RTL للعربي و LTR للإنجليزي)
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}