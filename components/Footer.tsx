"use client";

import { useContext } from "react";
import { LanguageContext } from "./Providers";
import Logo from "./Logo";
import { Heart, Globe, ShieldCheck, ArrowUpRight, ArrowUpLeft } from "lucide-react";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  return (
    <footer className="bg-[#102A43] text-[#F7F5EF] pt-16 pb-10 border-t-4 border-[#E9B44C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* القسم العلوي للفوتر */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 items-center">
          
          {/* معلومات المنصة والشعار (5 أعمدة) */}
          <div className="md:col-span-5 flex items-center gap-4">
            <div className="bg-[#F7F5EF] p-1.5 rounded-2xl shadow-md">
              <Logo />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">Revitcho</h3>
              <span className="text-sm font-bold text-[#E9B44C]">ريفيتشــو | المنح الدراسية الفلسطينية</span>
            </div>
          </div>

          {/* روابط سريعة (4 أعمدة) */}
          <div className="md:col-span-4 flex flex-wrap gap-6 justify-start md:justify-center font-medium text-sm">
            <a href="#" className="hover:text-[#E9B44C] transition-colors">{isArabic ? "الرئيسية" : "Home"}</a>
            <a href="#" className="hover:text-[#E9B44C] transition-colors">{isArabic ? "المنح المتاحة" : "Scholarships"}</a>
            <a href="#" className="hover:text-[#E9B44C] transition-colors">{isArabic ? "عن المنصة" : "About"}</a>
            <a href="#" className="hover:text-[#E9B44C] transition-colors">{isArabic ? "تطوع معنا" : "Volunteer"}</a>
          </div>

          {/* زر أو تنبيه سريع (3 أعمدة) */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-xs font-bold text-[#E9B44C] border border-white/10">
              <ShieldCheck size={16} />
              <span>{isArabic ? "منصة موثوقة وآمنة" : "Trusted Platform"}</span>
            </div>
          </div>

        </div>

        {/* خط فاصل */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5EF]/70">
          <p>
            {isArabic 
              ? "جميع الحقوق محفوظة لمنصة ريفيتشو © 2026" 
              : "All rights reserved to Revitcho Platform © 2026"}
          </p>
          <div className="flex items-center gap-1.5 font-medium">
            <span>{isArabic ? "صُنع بإتقان لدعم الطلاب الفلسطينيين" : "Crafted with care to support Palestinian students"}</span>
            <Heart size={14} className="text-red-400 fill-red-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}