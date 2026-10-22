"use client";

import { useContext } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScholarshipCard from "@/components/ScholarshipCard";
import { LanguageContext, FavoritesContext } from "@/components/Providers";
import { SCHOLARSHIPS_DATA } from "@/lib/scholarshipsData";
import { Heart, ArrowRight, ArrowLeft } from "lucide-react";

export default function FavoritesPage() {
  const { language } = useContext(LanguageContext);
  const { favorites } = useContext(FavoritesContext);
  const isArabic = language === "ar";

  // فلترة المنح لجلب فقط المنح المحفوظة في المفضلة
  const savedScholarships = SCHOLARSHIPS_DATA.filter((s) => favorites.includes(s.id));

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#102A43] flex flex-col">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex-1 w-full">
        
        {/* رأس الصفحة */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-2xl bg-red-100 text-red-600 shadow-xs">
                <Heart size={26} className="fill-red-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-[#102A43]">
                {isArabic ? "المنح المحفوظة (المفضلة)" : "Saved Scholarships"}
              </h1>
            </div>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              {isArabic 
                ? "الفرص الأكاديمية التي قمت بحفظها لمراجعتها والتقديم عليها لاحقاً." 
                : "The academic opportunities you have saved for later review."}
            </p>
          </div>

          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#176B61] hover:text-[#102A43] transition-colors bg-white px-5 py-3 rounded-2xl border border-[#102A43]/15 shadow-xs w-fit"
          >
            {isArabic ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
            <span>{isArabic ? "العودة للرئيسية" : "Back to Home"}</span>
          </Link>
        </div>

        <div className="h-2 w-32 bg-[#E9B44C] rounded-full mb-12" />

        {/* عرض المنح المحفوظة أو رسالة فارغة */}
        {savedScholarships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#102A43]/10 p-8 shadow-sm max-w-xl mx-auto">
            <div className="w-20 h-20 bg-red-50 text-red-400 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
              <Heart size={36} />
            </div>
            <p className="text-2xl font-black text-[#102A43] mb-2">
              {isArabic ? "لا توجد منح محفوظة حالياً" : "No saved scholarships yet"}
            </p>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              {isArabic ? "تصفح المنح المتاحة واضغط على أيقونة القلب في أي بطاقة لحفظ الفرص التي تهمك ومتابعتها." : "Browse available scholarships and click the heart icon on any card to save opportunities."}
            </p>
            <Link 
              href="/"
              className="bg-[#176B61] hover:bg-[#12544C] text-white px-8 py-3.5 rounded-2xl font-extrabold transition-all shadow-lg inline-block cursor-pointer"
            >
              {isArabic ? "تصفح المنح الدراسية" : "Browse Scholarships"}
            </Link>
          </div>
        )}

      </div>

      <Footer />
    </main>
  );
}