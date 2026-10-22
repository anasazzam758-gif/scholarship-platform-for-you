"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { LanguageContext } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getScholarshipStatus, Scholarship } from "@/lib/scholarships";
import { 
  ArrowRight, ArrowLeft, Building, MapPin, GraduationCap, 
  Calendar, CheckCircle, Clock, Lock, AlertCircle, ExternalLink, ShieldCheck 
} from "lucide-react";

export default function ScholarshipDetailPage() {
  const { language } = useContext(LanguageContext);
  const params = useParams();
  const isArabic = language === "ar";
  
  // الـ id أو الـ slug الخاص بالمنحة القادم من الرابط
  const scholarshipId = params.slug as string;

  // بيانات تجريبية مطابقة للموجودة في الصفحة الرئيسية
  const scholarshipsData: Scholarship[] = [
    {
      id: "1",
      isVerified: true,
      openingDate: "2026-09-01",
      deadlineDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
      title_ar: "منحة ريفيتشو للتميز الأكاديمي",
      title_en: "Revitcho Academic Excellence Scholarship",
      provider_ar: "مؤسسة ريفيتشو التعليمية",
      provider_en: "Revitcho Educational Foundation",
      location_ar: "ألمانيا",
      location_en: "Germany",
      degree_levels: ["Bachelor", "Master"],
    },
    {
      id: "2",
      isVerified: true,
      openingDate: "2026-09-15",
      deadlineDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString(),
      title_ar: "منحة الرواد للطلبة الفلسطينيين",
      title_en: "Pioneers Grant for Palestinian Students",
      provider_ar: "صندوق التعليم الدولي",
      provider_en: "International Education Fund",
      location_ar: "المملكة المتحدة",
      location_en: "United Kingdom",
      degree_levels: ["Bachelor"],
    },
    {
      id: "3",
      isVerified: true,
      openingDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
      deadlineDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
      title_ar: "منحة جسور المستقبل الجامعية",
      title_en: "Future Bridges Undergraduate Grant",
      provider_ar: "تحالف الجامعات الأوروبية",
      provider_en: "European Universities Alliance",
      location_ar: "تركيا وأوروبا",
      location_en: "Turkey & Europe",
      degree_levels: ["Bachelor", "Master"],
    }
  ];

  // نبحث عن المنحة المطابقة للـ ID
  const scholarship = scholarshipsData.find((s) => s.id === scholarshipId);

  // إذا لم تُوجد المنحة
  if (!scholarship) {
    return (
      <main className="min-h-screen bg-[#F7F5EF] text-[#102A43] flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-3xl font-black mb-4">
            {isArabic ? "المنحة غير موجودة" : "Scholarship Not Found"}
          </h2>
          <p className="text-slate-600 mb-6">
            {isArabic ? "عذراً، لم نتمكن من العثور على تفاصيل هذه المنحة." : "Sorry, we could not find the details for this scholarship."}
          </p>
          <Link 
            href="/"
            className="bg-[#176B61] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#12544C] transition"
          >
            {isArabic ? "العودة للرئيسية" : "Back to Home"}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const status = getScholarshipStatus(scholarship);

  // إعدادات شاشة الحالة
  const statusConfig = {
    open: { color: "bg-[#E6F4F1] text-[#176B61] border-[#176B61]/30", icon: <CheckCircle size={18} />, label_ar: "متاحة الآن للتقديم", label_en: "Open for Application" },
    closing_soon: { color: "bg-red-100 text-red-700 border-red-300", icon: <Clock size={18} />, label_ar: "تغلق قريباً جداً", label_en: "Closing Soon" },
    upcoming: { color: "bg-[#E0F2FE] text-[#0369A1] border-[#0369A1]/30", icon: <Calendar size={18} />, label_ar: "منحة قادمة", label_en: "Upcoming Scholarship" },
    closed: { color: "bg-slate-200 text-slate-700 border-slate-300", icon: <Lock size={18} />, label_ar: "مغلقة", label_en: "Closed" },
    needs_verification: { color: "bg-[#FEF3C7] text-[#B45309] border-[#E9B44C]", icon: <AlertCircle size={18} />, label_ar: "تحتاج إلى تحقق رسمي", label_en: "Needs Verification" }
  };

  const currentStatus = statusConfig[status];

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#102A43] flex flex-col">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12 flex-1 w-full">
        
        {/* زر العودة */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-[#176B61] hover:text-[#102A43] mb-8 transition-colors"
        >
          {isArabic ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          <span>{isArabic ? "العودة إلى قائمة المنح" : "Back to Scholarships"}</span>
        </Link>

        {/* بطاقة تفاصيل المنحة الرئيسية */}
        <div className="bg-white rounded-3xl border border-[#102A43]/10 shadow-lg p-8 md:p-10 space-y-8">
          
          {/* الحالة والعنوان */}
          <div className="space-y-4">
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border ${currentStatus.color}`}>
              {currentStatus.icon}
              {isArabic ? currentStatus.label_ar : currentStatus.label_en}
            </span>

            <h1 className="text-3xl md:text-4xl font-black text-[#102A43] leading-tight">
              {isArabic ? scholarship.title_ar : scholarship.title_en}
            </h1>
          </div>

          {/* شبكة المعلومات الأساسية */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F7F5EF] p-6 rounded-2xl border border-[#102A43]/5">
            <div className="flex items-center gap-3">
              <Building className="text-[#E9B44C]" size={22} />
              <div>
                <span className="block text-xs text-slate-500 font-semibold">{isArabic ? "الجهة المانحة" : "Provider"}</span>
                <span className="font-bold text-[#102A43]">{isArabic ? scholarship.provider_ar : scholarship.provider_en}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-[#176B61]" size={22} />
              <div>
                <span className="block text-xs text-slate-500 font-semibold">{isArabic ? "بلد الدراسة" : "Location"}</span>
                <span className="font-bold text-[#102A43]">{isArabic ? scholarship.location_ar : scholarship.location_en}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="text-[#102A43]" size={22} />
              <div>
                <span className="block text-xs text-slate-500 font-semibold">{isArabic ? "الدرجات الأكاديمية" : "Degree Level"}</span>
                <span className="font-bold text-[#102A43]">{scholarship.degree_levels.join(" • ")}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="text-[#176B61]" size={22} />
              <div>
                <span className="block text-xs text-slate-500 font-semibold">{isArabic ? "آخر موعد للتقديم" : "Deadline"}</span>
                <span className="font-bold text-[#102A43]">
                  {scholarship.deadlineDate ? new Date(scholarship.deadlineDate).toLocaleDateString() : "Not Confirmed"}
                </span>
              </div>
            </div>
          </div>

          {/* تنبيه بالموثوقية */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
            <ShieldCheck size={20} className="shrink-0 mt-0.5 text-emerald-600" />
            <div>
              <span className="font-bold block">{isArabic ? "معلومات مؤكدة" : "Verified Information"}</span>
              <span>{isArabic ? "تم التدقيق في هذه الفرصة لضمان ملاءمتها للطلاب الفلسطينيين." : "This opportunity has been reviewed to ensure relevance for Palestinian students."}</span>
            </div>
          </div>

          {/* زر التقديم الرسمي */}
          <div className="pt-6 border-t border-[#102A43]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium">
              {isArabic ? "سيتم توجيهك إلى موقع المنحة الرسمي الموثوق." : "You will be redirected to the official scholarship portal."}
            </span>
            
            <a 
              href="https://www.daad.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#176B61] hover:bg-[#12544C] text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>{isArabic ? "الانتقال إلى الموقع الرسمي" : "Visit Official Website"}</span>
              <ExternalLink size={18} />
            </a>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}