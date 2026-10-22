"use client";

import { useContext } from "react";
import { LanguageContext } from "./Providers";
import { getScholarshipStatus, Scholarship } from "@/lib/scholarships";
import { Clock, Calendar, Lock, AlertCircle, CheckCircle, GraduationCap, MapPin, Building, ArrowUpLeft, ArrowUpRight } from "lucide-react";

export default function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
  const { language } = useContext(LanguageContext);
  const status = getScholarshipStatus(scholarship);
  const isArabic = language === "ar";

  const statusConfig = {
    open: {
      color: "bg-[#E6F4F1] text-[#176B61] border-[#176B61]/30",
      icon: <CheckCircle size={15} />,
      label_ar: "متاحة الآن",
      label_en: "Open Now",
    },
    closing_soon: {
      color: "bg-red-100 text-red-700 border-red-300",
      icon: <Clock size={15} />,
      label_ar: "تغلق قريباً",
      label_en: "Closing Soon",
    },
    upcoming: {
      color: "bg-[#E0F2FE] text-[#0369A1] border-[#0369A1]/30",
      icon: <Calendar size={15} />,
      label_ar: "قريباً",
      label_en: "Upcoming",
    },
    closed: {
      color: "bg-slate-200 text-slate-700 border-slate-300",
      icon: <Lock size={15} />,
      label_ar: "مغلقة",
      label_en: "Closed",
    },
    needs_verification: {
      color: "bg-[#FEF3C7] text-[#B45309] border-[#E9B44C]",
      icon: <AlertCircle size={15} />,
      label_ar: "تحتاج إلى تحقق",
      label_en: "Needs Verification",
    }
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-[#102A43]/10 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-[#176B61] transition-all duration-300 p-6 gap-5">
      
      {/* شارة الحالة */}
      <div className="flex justify-between items-center">
        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border ${currentStatus.color}`}>
          {currentStatus.icon}
          {isArabic ? currentStatus.label_ar : currentStatus.label_en}
        </span>
      </div>

      {/* عنوان وتفاصيل المنحة */}
      <div>
        <h3 className="text-xl font-extrabold text-[#102A43] mb-4 group-hover:text-[#176B61] transition-colors">
          {isArabic ? scholarship.title_ar : scholarship.title_en}
        </h3>
        
        <div className="flex flex-col gap-2.5 text-sm text-[#102A43]/75 font-medium">
          <div className="flex items-center gap-2.5">
            <Building size={17} className="shrink-0 text-[#E9B44C]" />
            <span>{isArabic ? scholarship.provider_ar : scholarship.provider_en}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin size={17} className="shrink-0 text-[#176B61]" />
            <span>{isArabic ? scholarship.location_ar : scholarship.location_en}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <GraduationCap size={17} className="shrink-0 text-[#102A43]" />
            <span>{scholarship.degree_levels.join(" • ")}</span>
          </div>
        </div>
      </div>

      {/* زر التفاصيل بالأخضر البترولي */}
      <div className="mt-auto pt-4 border-t border-[#102A43]/10">
        <button className="w-full bg-[#176B61] hover:bg-[#12544C] text-white py-2.5 px-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer">
          <span>{isArabic ? "عرض التفاصيل" : "View Details"}</span>
          {isArabic ? <ArrowUpLeft size={18} /> : <ArrowUpRight size={18} />}
        </button>
      </div>
    </div>
  );
}