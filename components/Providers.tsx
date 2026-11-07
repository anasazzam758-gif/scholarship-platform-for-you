"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

export const LanguageContext = createContext({
  language: "ar",
  toggleLanguage: () => {},
});

export const FavoritesContext = createContext<{
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
});

export function Providers({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("ar");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. استرجاع اللغة والمنح المحفوظة من الـ localStorage مرة واحدة عند فتح الموقع
  useEffect(() => {
    const savedLang = localStorage.getItem("aora_language");
    if (savedLang === "ar" || savedLang === "en") {
      setLanguage(savedLang);
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLang;
    }

    const savedFavs = localStorage.getItem("aora_favorites") || localStorage.getItem("revitcho_favorites");
    if (savedFavs) {
      try {
        setFavorites(JSON.parse(savedFavs));
      } catch (e) {
        console.error(e);
      }
    }

    setIsLoaded(true);
  }, []);

  // 2. تحديث اتجاه الصفحة وحفظ اللغة فقط بعد تحميل الإعدادات الأولية
  useEffect(() => {
    if (!isLoaded) return;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("aora_language", language);
  }, [language, isLoaded]);

  // 3. إضافة أو إزالة منحة من المفضلة وحفظها في الـ localStorage
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      localStorage.setItem("aora_favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const nextLang = prev === "ar" ? "en" : "ar";
      localStorage.setItem("aora_language", nextLang);
      return nextLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
        {children}
      </FavoritesContext.Provider>
    </LanguageContext.Provider>
  );
}