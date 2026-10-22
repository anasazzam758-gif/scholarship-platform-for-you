"use client";

import ApplicationChecklist from "@/components/ApplicationChecklist";
import { useContext } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { LanguageContext } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getScholarshipStatus } from "@/lib/scholarships";
import { SCHOLARSHIPS_DATA } from "@/lib/scholarshipsData";
import { 
  ArrowRight, ArrowLeft, Building, MapPin, GraduationCap, 
  Calendar, CheckCircle, Clock, Lock, AlertCircle, ExternalLink, ShieldCheck, FileCheck, Globe, Home 
} from "lucide-react";

export default function ScholarshipDetailPage() {
  const { language } = useContext(LanguageContext);
  const params = useParams();
  const isArabic = language === "ar";
  
  const scholarshipId = params.slug as string;
  const scholarship = SCHOLARSHIPS_DATA.find((s) => s.id === scholarshipId);

  if (!scholarship) {
    return (
      <main className="min-h-screen bg-[#F7F5EF] text-[#102A43] flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-6xl mx-auto w-full">
          <h2 className="text-3xl font-black mb-4">
            {isArabic ? "المنحة غير موجودة" : "Scholarship Not Found"}
          </h2>
          <p className="text-slate-600 mb-6 font-bold">
            {isArabic ? "عذراً، لم نتمكن من العثور على تفاصيل هذه المنحة." : "Sorry, we could not find the details for this scholarship."}
          </p>
          <Link 
            href="/"
            className="bg-[#176B61] text-white px-6 py-3 rounded-xl font-extrabold shadow-md hover:bg-[#12544C]"
          >
            {isArabic ? "العودة للرئيسية" : "Back to Home"}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const status = getScholarshipStatus(scholarship);

  const statusConfig = {
    open: { color: "bg-[#E6F4F1] text-[#176B61] border-[#176B61]/30", icon: <CheckCircle size={18} />, label_ar: "متاحة الآن للتقديم", label_en: "Open for Application" },
    closing_soon: { color: "bg-red-100 text-red-700 border-red-300", icon: <Clock size={18} />, label_ar: "تغلق قريباً جداً", label_en: "Closing Soon" },
    upcoming: { color: "bg-[#E0F2FE] text-[#0369A1] border-[#0369A1]/30", icon: <Calendar size={18} />, label_ar: "منحة قادمة", label_en: "Upcoming Scholarship" },
    closed: { color: "bg-slate-200 text-slate-700 border-slate-300", icon: <Lock size={18} />, label_ar: "مغلقة", label_en: "Closed" },
    needs_verification: { color: "bg-[#FEF3C7] text-[#B45309] border-[#E9B44C]", icon: <AlertCircle size={18} />, label_ar: "تحتاج إلى تحقق رسمي", label_en: "Needs Verification" }
  };

  const scopeConfig = {
    abroad: { label_ar: "مناسبة للدراسة خارج بلد الإقامة", label_en: "Suitable for Studying Abroad", color: "bg-blue-50 text-blue-700 border-blue-200", icon: <Globe size={18} /> },
    local: { label_ar: "مناسبة للدراسة داخل بلد الإقامة", label_en: "Suitable for Local Study", color: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: <Home size={18} /> },
    both: { label_ar: "متاحة للدراسة محلياً ودولياً", label_en: "Available Locally & Internationally", color: "bg-purple-50 text-purple-700 border-purple-200", icon: <Globe size={18} /> }
  };

  const currentStatus = statusConfig[status];
  const currentScope = scholarship.studyScope && scopeConfig[scholarship.studyScope] ? scopeConfig[scholarship.studyScope] : scopeConfig.abroad;

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#102A43] flex flex-col">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full space-y-8">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-extrabold text-[#176B61] hover:text-[#102A43]"
        >
          {isArabic ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          <span>{isArabic ? "العودة إلى قائمة المنح" : "Back to Scholarships"}</span>
        </Link>

        <div className="bg-white rounded-3xl border border-[#102A43]/15 shadow-lg p-6 sm:p-10 space-y-8">
          
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-extrabold border ${currentStatus.color}`}>
                {currentStatus.icon}
                {isArabic ? currentStatus.label_ar : currentStatus.label_en}
              </span>

              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-extrabold border ${currentScope.color}`}>
                {currentScope.icon}
                {isArabic ? currentScope.label_ar : currentScope.label_en}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-[#102A43] leading-tight">
              {isArabic ? scholarship.title_ar : scholarship.title_en}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F7F5EF] p-6 rounded-2xl border border-[#102A43]/10">
            <div className="flex items-center gap-3">
              <Building className="text-[#E9B44C] shrink-0" size={24} />
              <div>
                <span className="block text-xs text-slate-500 font-bold">{isArabic ? "الجهة المانحة" : "Provider"}</span>
                <span className="font-extrabold text-[#102A43]">{isArabic ? scholarship.provider_ar : scholarship.provider_en}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-[#176B61] shrink-0" size={24} />
              <div>
                <span className="block text-xs text-slate-500 font-bold">{isArabic ? "بلد الدراسة" : "Location"}</span>
                <span className="font-extrabold text-[#102A43]">{isArabic ? scholarship.location_ar : scholarship.location_en}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="text-[#102A43] shrink-0" size={24} />
              <div>
                <span className="block text-xs text-slate-500 font-bold">{isArabic ? "الدرجات الأكاديمية" : "Degree Level"}</span>
                <span className="font-extrabold text-[#102A43]">{scholarship.degree_levels.join(" • ")}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="text-[#176B61] shrink-0" size={24} />
              <div>
                <span className="block text-xs text-slate-500 font-bold">{isArabic ? "آخر موعد للتقديم" : "Deadline"}</span>
                <span className="font-extrabold text-[#102A43]">
                  {scholarship.deadlineDate ? new Date(scholarship.deadlineDate).toLocaleDateString(isArabic ? "ar-EG" : "en-US") : "Not Confirmed"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm">
            <ShieldCheck size={22} className="shrink-0 mt-0.5 text-emerald-600" />
            <div>
              <span className="font-black block">{isArabic ? "معلومات مؤكدة وموثوقة" : "Verified Information"}</span>
              <span className="font-bold">{isArabic ? "تم التدقيق في هذه الفرصة من قبل فريق أورا (AORA) لضمان ملاءمتها للطلاب الفلسطينيين." : "This opportunity has been reviewed by AORA team to ensure relevance for Palestinian students."}</span>
            </div>
          </div>

          {/* قائمة تتبع المستندات المطلوبة (ثابتة بدون هوفر مزعج) */}
          <ApplicationChecklist scholarshipId={scholarship.id} isArabic={isArabic} />

          {/* الجملة الإرشادية قبل زر التقديم */}
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-[#E6F4F1]/60 border border-[#176B61]/30 text-[#102A43] text-sm font-extrabold">
            <FileCheck size={22} className="shrink-0 mt-0.5 text-[#176B61]" />
            <div>
              {isArabic 
                ? "بعد التأكد من أن هذه المستندات المطلوبة موجودة وجاهزة لديك، يمكنك الآن التقدم مباشرة عبر الرابط الرسمي أدناه."
                : "After ensuring that these required documents are ready, you can now proceed to apply directly via the official link below."}
            </div>
          </div>

          <div className="pt-6 border-t border-[#102A43]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-bold">
              {isArabic ? "سيتم توجيهك إلى البوابة الرسمية للمنحة لإتمام طلبك." : "You will be redirected to the official scholarship portal to complete your application."}
            </span>
            
            <a 
              href="https://www.daad.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#176B61] hover:bg-[#12544C] text-white font-extrabold px-8 py-4 rounded-xl shadow-md"
            >
              <span>{isArabic ? "التقديم عبر الموقع الرسمي" : "Apply on Official Website"}</span>
              <ExternalLink size={18} />
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}