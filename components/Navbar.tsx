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
    <nav className="sticky top-0 z-50 bg-[#102A43]/95 backdrop-blur-md text-white border-b border-[#E9B44C]/30 py-3 shadow-md transition-all duration-300 w-full">
      {/* توحيد الحاوية مع نفس الـ max-w المستخدم في الصفحة والفوتر */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        
        {/* الشعار واسم المنصة */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
          <div className="group-hover:scale-105 transition-transform duration-300 bg-white/10 p-1.5 rounded-xl border border-white/15">
            <Logo className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-normal leading-none group-hover:text-[#E9B44C] transition-colors">
              AORA
            </h1>
            <span className="text-[9px] sm:text-[11px] font-semibold text-[#E9B44C] mt-1 leading-none tracking-normal opacity-90">
              Academic Opportunities & Resources Access
            </span>
          </div>
        </Link>

        {/* أزرار المفضلة واللغة */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/favorites"
            className="relative flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-[#176B61] hover:border-[#176B61] transition-all text-xs sm:text-sm font-bold shadow-sm"
          >
            <Heart size={16} className="text-red-400 fill-red-400" />
            <span className="hidden sm:inline">
              {isArabic ? "المفضلة" : "Saved"}
            </span>
            {favorites.length > 0 && (
              <span className="bg-[#E9B44C] text-[#102A43] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {favorites.length}
              </span>
            )}
          </Link>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-[#176B61] hover:border-[#176B61] transition-all text-xs sm:text-sm font-bold shadow-sm"
          >
            <Globe size={16} className="text-[#E9B44C]" />
            <span>
              {language === "ar" ? "English" : "العربية"}
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
}