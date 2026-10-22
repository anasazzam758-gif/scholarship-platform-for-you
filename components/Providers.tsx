"use client"; // This tells Next.js this file runs in the browser, allowing interactive state.

import { ThemeProvider } from "next-themes";
import { createContext, useState, useEffect, ReactNode } from "react";

// 1. Create a "Context" to share the language state across all files.
export const LanguageContext = createContext({
  language: "ar", // Arabic is the default
  toggleLanguage: () => {},
});

export function Providers({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("ar");
  const [mounted, setMounted] = useState(false);

  // 2. This prevents layout errors by waiting for the page to load before applying changes.
  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. This function switches the language and updates the text direction (RTL/LTR).
  const toggleLanguage = () => {
    const newLang = language === "ar" ? "en" : "ar";
    setLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  if (!mounted) return <>{children}</>;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {/* 4. ThemeProvider handles the dark/light mode class on the HTML tag */}
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </LanguageContext.Provider>
  );
}