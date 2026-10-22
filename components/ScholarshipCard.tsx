"use client";

import { Scholarship, getScholarshipStatus } from "@/lib/scholarships";
import { useContext } from "react";
import { LanguageContext, FavoritesContext } from "@/components/Providers";
import { MapPin, Building, Calendar, Heart, Globe, Home, CheckCircle, Clock, Lock, AlertCircle, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
  const { language } = useContext(LanguageContext);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isArabic = language === "ar";

  const isFavorite = favorites.includes(scholarship.id);
  const status = getScholarshipStatus(scholarship);

  const statusConfig = {
    open: { color: "bg-[#E6F4F1] text-[#176B61] border-[#176B61]/30", icon: <CheckCircle size={13} />, label_ar: "متاحة", label_en: "Open" },
    closing_soon: { color: "bg-red-50 text-red-700 border-red-200", icon: <Clock size={13} />, label_ar: "تغلق قريباً", label_en: "Closing Soon" },
    upcoming: { color: "bg-sky-50 text-sky-700 border-sky-200", icon: <Calendar size={13} />, label_ar: "قادمة", label_en: "Upcoming" },
    closed: { color: "bg-slate-100 text-slate-600 border-slate-200", icon: <Lock size={13} />, label_ar: "مغلقة", label_en: "Closed" },
    needs_verification: { color: "bg-amber-50 text-amber-700 border-amber-200", icon: <AlertCircle size={13} />, label_ar: "تدقيق", label_en: "Verify" }
  };

  const currentStatus = statusConfig[status];

  const scopeConfig = {
    abroad: {
      label_ar: "خارج بلد الإقامة",
      label_en: "Study Abroad",
      color: "bg-blue-50 text-blue-700 border-blue-200",
      icon: <Globe size={13} />
    },
    local: {
      label_ar: "داخل بلد الإقامة",
      label_en: "Local Study",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: <Home size={13} />
    },
    both: {
      label_ar: "محلي ودولي",
      label_en: "Local & Abroad",
      color: "bg-purple-50 text-purple-700 border-purple-200",
      icon: <Globe size={13} />
    }
  };

  const scope = scholarship.studyScope && scopeConfig[scholarship.studyScope] 
    ? scopeConfig[scholarship.studyScope] 
    : scopeConfig.abroad;

  return (
    <div className="card-hover bg-white rounded-3xl p-6 border border-[#102A43]/15 shadow-sm flex flex-col justify-between group relative">
      
      {/* الشارات العلوية + زر المفضلة */}
      <div className="flex items-start justify-between gap-2 mb-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold border ${currentStatus.color}`}>
            {currentStatus.icon}
            <span>{isArabic ? currentStatus.label_ar : currentStatus.label_en}</span>
          </span>

          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold border ${scope.color}`}>
            {scope.icon}
            <span>{isArabic ? scope.label_ar : scope.label_en}</span>
          </span>
        </div>

        <button
          onClick={() => toggleFavorite(scholarship.id)}
          aria-label="Toggle Favorite"
          className="p-2.5 rounded-full bg-[#F7F5EF] hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all shrink-0 shadow-xs"
        >
          <Heart size={18} className={isFavorite ? "fill-red-500 text-red-500 scale-110" : ""} />
        </button>
      </div>

      {/* تفاصيل الكارد */}
      <div className="space-y-3">
        <h3 className="text-xl font-black text-[#102A43] group-hover:text-[#176B61] transition-colors leading-snug line-clamp-2">
          {isArabic ? scholarship.title_ar : scholarship.title_en}
        </h3>

        <div className="space-y-2 text-sm text-slate-600 font-bold pt-1">
          <div className="flex items-center gap-2">
            <Building size={16} className="text-[#E9B44C] shrink-0" />
            <span className="truncate">{isArabic ? scholarship.provider_ar : scholarship.provider_en}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#176B61] shrink-0" />
            <span className="truncate">{isArabic ? scholarship.location_ar : scholarship.location_en}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap size={16} className="text-[#102A43] shrink-0" />
            <span className="truncate">{scholarship.degree_levels.join(" • ")}</span>
          </div>
        </div>
      </div>

      {/* ذيل الكارد وزر التفاصيل */}
      <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-extrabold text-slate-400">
          {scholarship.deadlineDate 
            ? `${isArabic ? "ينتهي:" : "Ends:"} ${new Date(scholarship.deadlineDate).toLocaleDateString(isArabic ? "ar-EG" : "en-US")}`
            : (isArabic ? "محدثة" : "Updated")}
        </span>

        <Link
          href={`/scholarships/${scholarship.id}`}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#176B61] hover:bg-[#12544C] text-white text-xs font-extrabold transition-all shadow-sm"
        >
          {isArabic ? "عرض التفاصيل" : "View Details"}
        </Link>
      </div>

    </div>
  );
}