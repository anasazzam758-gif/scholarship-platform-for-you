"use client";

import { useContext } from "react";
import { LanguageContext } from "./Providers";
import { Globe } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F5EF]/90 backdrop-blur-md border-b border-[#176B61]/20 px-4 py-3.5 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* اللوجو واسم المنصة */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="group-hover:scale-105 transition-transform duration-300">
            <Logo />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold text-[#102A43] tracking-tight leading-none">
              Revitcho
            </h1>
            <span className="text-sm font-bold text-[#176B61] mt-1 leading-none">
              ريفيتشــو
            </span>
          </div>
        </div>

        {/* زر تبديل اللغة فقط */}
        <div className="flex items-center">
          <button
            onClick={toggleLanguage}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#102A43] border border-[#102A43]/10 hover:bg-[#176B61] hover:text-white transition-all duration-300 shadow-xs cursor-pointer"
          >
            <Globe size={18} className="text-[#176B61] group-hover:text-white transition-colors" />
            <span className="font-bold text-sm">
              {language === "ar" ? "English" : "العربية"}
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
}