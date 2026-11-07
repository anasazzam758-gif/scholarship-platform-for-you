
"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScholarshipCard from "@/components/ScholarshipCard";

import { LanguageContext, FavoritesContext } from "@/components/Providers";
import { Scholarship, sortScholarships } from "@/lib/scholarships";
import { fetchScholarships } from "@/lib/scholarshipsData";

import { Heart, ArrowLeft, Search } from "lucide-react";

export default function FavoritesPage() {
  const { language } = useContext(LanguageContext);
  const { favorites } = useContext(FavoritesContext);

  const isArabic = language === "ar";

  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // جلب المنح من Google Sheets
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchScholarships();
        setScholarships(data);
      } catch (err) {
        console.error("Failed to load scholarships:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // ترتيب المنح
  const sortedScholarships = sortScholarships(
    scholarships
  ) as Scholarship[];

  // عرض المنح التي أضافها المستخدم للمفضلة فقط
  const favoriteScholarships = sortedScholarships.filter(
    (scholarship) => favorites.includes(scholarship.id)
  );

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#102A43] flex flex-col">
      <Navbar />

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* عنوان الصفحة */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-red-50 p-3 rounded-2xl">
              <Heart
                size={28}
                className="text-red-500 fill-red-500"
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-[#102A43]">
              {isArabic ? "منحي المفضلة" : "My Saved Scholarships"}
            </h1>
          </div>

          <p className="text-slate-500 font-medium">
            {isArabic
              ? "جميع المنح الدراسية التي قمت بحفظها للوصول إليها بسهولة."
              : "All the scholarships you saved for easy access."}
          </p>

          {!loading && !error && (
            <div className="mt-5 inline-flex items-center gap-2 bg-white border border-[#102A43]/10 px-4 py-2 rounded-xl shadow-sm">
              <Heart size={16} className="text-red-500" />
              <span className="font-extrabold text-[#176B61]">
                {favorites.length}
              </span>
              <span className="text-sm font-bold text-slate-500">
                {isArabic ? "منحة محفوظة" : "Saved Scholarships"}
              </span>
            </div>
          )}
        </div>

        {/* العودة للرئيسية */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#176B61] hover:text-[#102A43] font-bold transition-colors"
          >
            <ArrowLeft size={18} />
            {isArabic ? "العودة إلى الرئيسية" : "Back to Home"}
          </Link>
        </div>

        {/* حالة التحميل */}
        {loading ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-[#102A43]/10 shadow-sm">
            <div className="animate-pulse flex flex-col items-center gap-4">
              <Heart size={40} className="text-red-400" />
              <p className="text-lg font-extrabold text-[#176B61]">
                {isArabic
                  ? "جاري تحميل منحك المفضلة..."
                  : "Loading your saved scholarships..."}
              </p>
            </div>
          </div>
        ) : error ? (
          /* حالة الخطأ */
          <div className="text-center py-20 bg-white rounded-3xl border border-red-100 shadow-sm">
            <p className="text-xl font-black text-red-600 mb-3">
              {isArabic
                ? "حدث خطأ أثناء تحميل المنح"
                : "Failed to load scholarships"}
            </p>

            <p className="text-slate-500 mb-6">
              {isArabic
                ? "يرجى تحديث الصفحة والمحاولة مرة أخرى."
                : "Please refresh the page and try again."}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#176B61] text-white rounded-xl font-bold hover:bg-[#12544C]"
            >
              {isArabic ? "إعادة المحاولة" : "Try Again"}
            </button>
          </div>
        ) : favoriteScholarships.length > 0 ? (
          /* عرض المنح المحفوظة */
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-black">
                {isArabic ? "المنح المحفوظة" : "Saved Scholarships"}
              </h2>

              <span className="text-sm font-bold text-slate-400">
                {favoriteScholarships.length}{" "}
                {isArabic ? "نتيجة" : "Results"}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoriteScholarships.map((scholarship) => (
                <ScholarshipCard
                  key={scholarship.id}
                  scholarship={scholarship}
                />
              ))}
            </div>
          </>
        ) : (
          /* حالة عدم وجود منح محفوظة */
          <div className="text-center py-20 px-6 bg-white rounded-3xl border border-[#102A43]/10 shadow-sm">

            <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
              <Heart size={38} className="text-red-300" />
            </div>

            <h2 className="text-2xl font-black text-[#102A43] mb-3">
              {isArabic
                ? "قائمة المفضلة فارغة!"
                : "Your Favorites Are Empty!"}
            </h2>

            <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
              {isArabic
                ? "لم تقم بحفظ أي منحة حتى الآن. تصفح المنح الدراسية واضغط على رمز القلب لحفظ الفرص التي تهمك."
                : "You haven't saved any scholarships yet. Browse scholarships and click the heart icon to save opportunities you're interested in."}
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#176B61] hover:bg-[#12544C] text-white rounded-xl font-extrabold shadow-md transition-all"
            >
              <Search size={18} />
              {isArabic
                ? "اكتشف المنح الدراسية"
                : "Explore Scholarships"}
            </Link>

          </div>
        )}

      </div>

      <Footer />
    </main>
  );
}
