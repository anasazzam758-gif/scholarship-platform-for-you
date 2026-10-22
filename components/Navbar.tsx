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
    <nav className="sticky top-0 z-50 bg-[#102A43] text-white border-b border-[#E9B44C]/30 px-4 py-3.5 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* اللوجو مع الانتقال للرئيسية */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 bg-white/10 p-1 rounded-xl">
            <Logo />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold text-white tracking-tight leading-none group-hover:text-[#E9B44C] transition-colors">
              Revitcho
            </h1>
            <span className="text-sm font-bold text-[#E9B44C] mt-1 leading-none">
              ريفيتشــو
            </span>
          </div>
        </Link>

        {/* أزرار التحكم (المفضلة وتغيير اللغة) */}
        <div className="flex items-center gap-3">
          
          {/* زر صفحة المفضلة مع عدّاد المنح المحفوظة */}
          <Link
            href="/favorites"
            className="relative group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-[#176B61] hover:border-[#176B61] hover:scale-105 transition-all duration-300 shadow-xs cursor-pointer"
          >
            <Heart size={18} className="text-red-400 fill-red-400 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-sm hidden sm:inline">{isArabic ? "المفضلة" : "Saved"}</span>
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E9B44C] text-[#102A43] text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {favorites.length}
              </span>
            )}
          </Link>

          {/* زر تبديل اللغة */}
          <button
            onClick={toggleLanguage}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-[#176B61] hover:border-[#176B61] hover:scale-105 transition-all duration-300 shadow-xs cursor-pointer"
          >
            <Globe size={18} className="text-[#E9B44C] group-hover:text-white group-hover:rotate-45 transition-all" />
            <span className="font-bold text-sm">
              {language === "ar" ? "English" : "العربية"}
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
}