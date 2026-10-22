"use client";

import { useContext } from "react";
import { LanguageContext, FavoritesContext } from "./Providers";
import { getScholarshipStatus, Scholarship } from "@/lib/scholarships";
import { Clock, Calendar, Lock, AlertCircle, CheckCircle, GraduationCap, MapPin, Building, ArrowUpLeft, ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";

export default function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
  const { language } = useContext(LanguageContext);
  const { isFavorite, toggleFavorite } = useContext(FavoritesContext);
  
  const status = getScholarshipStatus(scholarship);
  const isArabic = language === "ar";
  const favorited = isFavorite(scholarship.id);

  const statusConfig = {
    open: {
      color: "bg-[#E6F4F1] text-[#176B61] border-[#176B61]/30",
      icon: <CheckCircle size={16} />,
      label_ar: "متاحة الآن",
      label_en: "Open Now",
    },
    closing_soon: {
      color: "bg-red-100 text-red-700 border-red-300",
      icon: <Clock size={16} />,
      label_ar: "تغلق قريباً",
      label_en: "Closing Soon",
    },
    upcoming: {
      color: "bg-[#E0F2FE] text-[#0369A1] border-[#0369A1]/30",
      icon: <Calendar size={16} />,
      label_ar: "قريباً",
      label_en: "Upcoming",
    },
    closed: {
      color: "bg-slate-200 text-slate-700 border-slate-300",
      icon: <Lock size={16} />,
      label_ar: "مغلقة",
      label_en: "Closed",
    },
    needs_verification: {
      color: "bg-[#FEF3C7] text-[#B45309] border-[#E9B44C]",
      icon: <AlertCircle size={16} />,
      label_ar: "تحتاج إلى تحقق",
      label_en: "Needs Verification",
    }
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-[#102A43]/15 shadow-md hover:-translate-y-2.5 hover:scale-[1.01] hover:shadow-2xl hover:border-[#176B61] transition-all duration-300 p-7 md:p-8 gap-6 cursor-pointer relative">
      
      {/* شارة الحالة وزر القلب (حفظ المنحة) */}
      <div className="flex justify-between items-center">
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold border ${currentStatus.color} group-hover:scale-105 transition-transform`}>
          {currentStatus.icon}
          {isArabic ? currentStatus.label_ar : currentStatus.label_en}
        </span>

        {/* زر القلب التفاعلي */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(scholarship.id);
          }}
          className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
            favorited 
              ? "bg-red-50 text-red-500 border border-red-200 scale-110 shadow-sm" 
              : "bg-slate-100 text-slate-400 hover:text-red-500 hover:bg-red-50 border border-transparent"
          }`}
          title={isArabic ? "حفظ المنحة" : "Save Scholarship"}
        >
          <Heart size={18} className={favorited ? "fill-red-500 scale-110 transition-transform" : ""} />
        </button>
      </div>

      {/* عنوان وتفاصيل المنحة */}
      <div>
        <h3 className="text-xl md:text-2xl font-black text-[#102A43] mb-5 group-hover:text-[#176B61] transition-colors leading-snug">
          {isArabic ? scholarship.title_ar : scholarship.title_en}
        </h3>
        
        <div className="flex flex-col gap-3 text-sm md:text-base text-[#102A43]/80 font-semibold">
          <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
            <Building size={19} className="shrink-0 text-[#E9B44C]" />
            <span>{isArabic ? scholarship.provider_ar : scholarship.provider_en}</span>
          </div>
          <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
            <MapPin size={19} className="shrink-0 text-[#176B61]" />
            <span>{isArabic ? scholarship.location_ar : scholarship.location_en}</span>
          </div>
          <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
            <GraduationCap size={19} className="shrink-0 text-[#102A43]" />
            <span>{scholarship.degree_levels.join(" • ")}</span>
          </div>
        </div>
      </div>

      {/* زر التفاصيل */}
      <div className="mt-auto pt-5 border-t border-[#102A43]/10">
        <Link 
          href={`/scholarships/${scholarship.id}`}
          className="w-full bg-[#176B61] hover:bg-[#12544C] text-white py-3 px-5 rounded-2xl font-extrabold transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md group-hover:scale-[1.02] hover:shadow-xl"
        >
          <span>{isArabic ? "عرض التفاصيل الكاملة" : "View Full Details"}</span>
          {isArabic ? <ArrowUpLeft size={20} className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" /> : <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
        </Link>
      </div>
    </div>
  );
}