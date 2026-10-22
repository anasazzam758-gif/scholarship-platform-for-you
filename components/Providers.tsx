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

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  // استرجاع المنح المحفوظة من الـ localStorage عند فتح الموقع
  useEffect(() => {
    const saved = localStorage.getItem("revitcho_favorites");
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // إضافة أو إزالة منحة من المفضلة وحفظها في الـ localStorage
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem("revitcho_favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
        {children}
      </FavoritesContext.Provider>
    </LanguageContext.Provider>
  );
}