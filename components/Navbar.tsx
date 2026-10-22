"use client";

import { useContext } from "react";
import { LanguageContext, FavoritesContext } from "./Providers";
import { Globe, Heart } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { favorites } = useContext(FavoritesContext);
  const isArabic = language === "ar";

  return (
    <nav className="sticky top-0 z-50 bg-[#102A43]/95 backdrop-blur-md text-white border-b border-[#E9B44C]/25 py-4 shadow-md transition-all duration-300 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        
        {/* الشعار واسم المنصة */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 bg-white/10 p-1.5 rounded-2xl border border-white/10 shadow-inner">
            <Logo />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none group-hover:text-[#E9B44C] transition-colors">
              AORA
            </h1>
            <span className="text-[11px] sm:text-xs font-bold text-[#E9B44C] mt-1.5 leading-none tracking-wide opacity-90">
              Academic Opportunities & Resources Access
            </span>
          </div>
        </Link>

        {/* أزرار المفضلة واللغة */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/favorites"
            className="relative group flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl bg-white/10 text-white border border-white/15 hover:bg-[#176B61] hover:border-[#176B61] transition-all duration-300 shadow-xs"
          >
            <Heart size={19} className="text-red-400 fill-red-400 group-hover:scale-110 transition-transform" />
            <span className="font-extrabold text-sm hidden sm:inline">
              {isArabic ? "المفضلة" : "Saved"}
            </span>
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E9B44C] text-[#102A43] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {favorites.length}
              </span>
            )}
          </Link>

          <button
            onClick={toggleLanguage}
            className="group flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl bg-white/10 text-white border border-white/15 hover:bg-[#176B61] hover:border-[#176B61] transition-all duration-300 shadow-xs"
          >
            <Globe size={19} className="text-[#E9B44C] group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
            <span className="font-extrabold text-sm">
              {language === "ar" ? "English" : "العربية"}
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
}