// app/scholarships/[slug]/page.tsx
"use client";

import ApplicationChecklist from "@/components/ApplicationChecklist";
import { useContext, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { LanguageContext } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getScholarshipStatus } from "@/lib/scholarships";
import { SCHOLARSHIPS_DATA } from "@/lib/scholarshipsData";
import {
  ArrowRight, ArrowLeft, Building, MapPin, GraduationCap,
  Calendar, CheckCircle, Clock, Lock, AlertCircle, ExternalLink,
  ShieldCheck, FileCheck, Globe, Home, Info, UserCheck,
  ChevronDown, ChevronUp, Compass, AlertTriangle, Sparkles
} from "lucide-react";

export default function ScholarshipDetailPage() {
  const { language } = useContext(LanguageContext);
  const params = useParams();
  const isArabic = language === "ar";

  const scholarshipId = params.slug as string;
  const scholarship = SCHOLARSHIPS_DATA.find((s) => s.id === scholarshipId) || null;

  // State لبطاقة تقليب مراحل التحضير الـ 6
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  // State لأقسام الدليل التفاعلية (مفتوحة افتراضياً لأول قسم)
  const [openGuideId, setOpenGuideId] = useState<string | null>("financial-calc");

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

  const summaryText = isArabic ? scholarship.summary_ar : scholarship.summary_en;
  const eligibilityList = isArabic ? scholarship.eligibility_ar : scholarship.eligibility_en;
  const prepStages = scholarship.prepStages || [];
  const guideSections = scholarship.guideSections || [];

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

        <div className="bg-white rounded-3xl border border-[#102A43]/15 shadow-lg p-6 sm:p-10 space-y-10">
          {/* العنوان والشارات */}
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

              {scholarship.isFeatured && (
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-black bg-[#102A43] text-[#E9B44C] shadow-xs">
                  <Sparkles size={16} />
                  <span>{isArabic ? "دليل تحضير شامل (119 صفحة ملخصة)" : "Full Prep Guide Included"}</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-[#102A43] leading-tight">
              {isArabic ? scholarship.title_ar : scholarship.title_en}
            </h1>
          </div>

          {/* المعلومات الأساسية الأربعة */}
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
                <span className="font-extrabold text-red-700">
                  {scholarship.deadlineDate ? new Date(scholarship.deadlineDate).toLocaleDateString(isArabic ? "ar-EG" : "en-US", { year: "numeric", month: "long", day: "numeric" }) : "Not Confirmed"}
                </span>
              </div>
            </div>
          </div>

          {/* 1. قسم الملخص (Summary) */}
          {summaryText && (
            <div className="bg-[#F7F5EF]/60 p-6 rounded-2xl border border-[#102A43]/10 space-y-2">
              <h3 className="text-lg font-black text-[#102A43] flex items-center gap-2">
                <Info size={20} className="text-[#176B61]" />
                <span>{isArabic ? "نبذة عن المنحة" : "Scholarship Overview"}</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed">
                {summaryText}
              </p>
            </div>
          )}

          {/* 2. قسم شروط الأهلية (Who Can Apply) */}
          {eligibilityList && eligibilityList.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-[#102A43]/15 space-y-4">
              <h3 className="text-lg font-black text-[#102A43] flex items-center gap-2">
                <UserCheck size={22} className="text-[#E9B44C]" />
                <span>{isArabic ? "من يحق له التقديم؟ (شروط الأهلية)" : "Who Can Apply? (Eligibility Criteria)"}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {eligibilityList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F5EF]/70 border border-[#102A43]/10 text-sm font-bold text-[#102A43]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#176B61] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. بطاقة تقليب خطة التحضير من 6 مراحل (Interactive Step Flipper) */}
          {prepStages.length > 0 && (
            <div className="bg-[#102A43] text-white rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xl">
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#176B61]/30 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4 relative z-10">
                <div className="flex items-center gap-2.5">
                  <Compass size={24} className="text-[#E9B44C] shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      {isArabic ? "خارطة الطريق: كيف تنفذ التحضير في 6 مراحل؟" : "6-Stage Preparation Roadmap"}
                    </h3>
                    <p className="text-xs text-[#F7F5EF]/80 font-medium">
                      {isArabic ? "قلّب بين المراحل بالترتيب قبل أن تفتح موقع المنحة وتبدأ بالتعبئة" : "Flip through the stages in order before opening the application portal"}
                    </p>
                  </div>
                </div>

                {/* أزرار أرقام المراحل */}
                <div className="flex items-center gap-1.5">
                  {prepStages.map((st, idx) => (
                    <button
                      key={st.step}
                      type="button"
                      onClick={() => setActiveStageIndex(idx)}
                      className={`w-8 h-8 rounded-xl text-xs font-black transition-all cursor-pointer ${
                        activeStageIndex === idx
                          ? "bg-[#E9B44C] text-[#102A43] scale-110 shadow-md"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {st.step}
                    </button>
                  ))}
                </div>
              </div>

              {/* محتوى المرحلة الحالية */}
              <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/15 space-y-3 relative z-10 min-h-[130px] flex flex-col justify-center">
                <span className="text-xs font-black text-[#E9B44C] uppercase tracking-wider">
                  {isArabic
                    ? `المرحلة ${prepStages[activeStageIndex].step} من ${prepStages.length}`
                    : `Stage ${prepStages[activeStageIndex].step} of ${prepStages.length}`}
                </span>
                <h4 className="text-xl font-black text-white">
                  {isArabic ? prepStages[activeStageIndex].title_ar : prepStages[activeStageIndex].title_en}
                </h4>
                <p className="text-sm text-[#F7F5EF]/90 font-medium leading-relaxed">
                  {isArabic ? prepStages[activeStageIndex].desc_ar : prepStages[activeStageIndex].desc_en}
                </p>
              </div>

              {/* أزرار التقليب (السابق / التالي) */}
              <div className="flex items-center justify-between pt-2 relative z-10">
                <button
                  type="button"
                  disabled={activeStageIndex === 0}
                  onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-extrabold transition-all cursor-pointer"
                >
                  {isArabic ? "→ المرحلة السابقة" : "← Previous Stage"}
                </button>

                <button
                  type="button"
                  disabled={activeStageIndex === prepStages.length - 1}
                  onClick={() => setActiveStageIndex((prev) => Math.min(prepStages.length - 1, prev + 1))}
                  className="px-5 py-2 rounded-xl bg-[#E9B44C] hover:bg-[#d9a33e] disabled:opacity-30 text-[#102A43] text-xs font-black transition-all cursor-pointer shadow-sm"
                >
                  {isArabic ? "المرحلة التالية ←" : "Next Stage →"}
                </button>
              </div>
            </div>
          )}

          {/* 4. أقسام الدليل التفاعلية (الحسابات المالية، الجامعات، الـ SAT والمقالات) */}
          {guideSections.length > 0 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-black text-[#102A43]">
                  {isArabic ? "تفاصيل مهمة يجب جمعها وتحضيرها من العائلة والمدرسة" : "Essential Details to Gather from Family & School"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-bold">
                  {isArabic ? "اضغط على أي قسم لفتح التفاصيل والنصائح الرسمية المستخلصة من دليل التقديم:" : "Click on any section below to expand official guidelines:"}
                </p>
              </div>

              <div className="space-y-3">
                {guideSections.map((sec) => {
                  const isOpen = openGuideId === sec.id;
                  const items = isArabic ? sec.items_ar : sec.items_en;
                  const warning = isArabic ? sec.warning_ar : sec.warning_en;

                  return (
                    <div
                      key={sec.id}
                      className={`rounded-2xl border transition-all overflow-hidden ${
                        isOpen ? "bg-white border-[#176B61] shadow-md" : "bg-[#F7F5EF]/70 border-[#102A43]/15 hover:border-[#176B61]/50"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenGuideId(isOpen ? null : sec.id)}
                        className="w-full p-5 flex items-center justify-between gap-4 text-start cursor-pointer"
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-3 py-1 rounded-full bg-[#176B61] text-white text-xs font-extrabold">
                            {isArabic ? sec.badge_ar : sec.badge_en}
                          </span>
                          <h4 className="text-base sm:text-lg font-black text-[#102A43]">
                            {isArabic ? sec.title_ar : sec.title_en}
                          </h4>
                        </div>
                        <div className="p-2 rounded-xl bg-[#102A43]/5 text-[#102A43] shrink-0">
                          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-4">
                          <p className="text-sm text-slate-600 font-bold">
                            {isArabic ? sec.description_ar : sec.description_en}
                          </p>
                          <ul className="space-y-2.5">
                            {items.map((point, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm font-bold text-[#102A43]">
                                <span className="w-2 h-2 rounded-full bg-[#E9B44C] mt-2 shrink-0" />
                                <span className="leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>

                          {warning && (
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-[#E9B44C] text-amber-900 text-xs sm:text-sm font-extrabold">
                              <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                              <span>{warning}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 5. قائمة الـ 37 مستنداً التفاعلية المقسمة بالمجلدات */}
          <ApplicationChecklist
            scholarshipId={scholarship.id}
            isArabic={isArabic}
            customDocuments={scholarship.checklist}
            categories={scholarship.checklistCategories}
          />

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm">
            <ShieldCheck size={22} className="shrink-0 mt-0.5 text-emerald-600" />
            <div>
              <span className="font-black block">{isArabic ? "معلومات مؤكدة وموثوقة" : "Verified Information"}</span>
              <span className="font-bold">
                {isArabic
                  ? "تم استخلاص وتدقيق هذه المتطلبات من الدليل الرسمي للمنحة من قبل فريق أورا (AORA) لضمان جاهزيتك الكاملة قبل فتح الطلب."
                  : "These requirements have been extracted and verified from the official guide by AORA team to ensure your complete readiness."}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-5 rounded-2xl bg-[#E6F4F1]/60 border border-[#176B61]/30 text-[#102A43] text-sm font-extrabold">
            <FileCheck size={22} className="shrink-0 mt-0.5 text-[#176B61]" />
            <div>
              {isArabic
                ? "نصيحة أورا الذهبية: لا تفتح بوابة التقديم الآن لتعبئة الطلب بشكل متقطع! جهّز أوراقك وحساباتك المالية أعلاه أولاً، ثم ادخل عبر الرابط الرسمي أدناه وعبّئ طلبك دفعة واحدة بكل ثقة."
                : "AORA Golden Tip: Prepare all your documents and financial figures above first, then click the official link below to complete your application in one confident session."}
            </div>
          </div>

          {/* زر التقديم الرسمي */}
          <div className="pt-6 border-t border-[#102A43]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-bold">
              {isArabic ? "سيتم توجيهك إلى بوابة التقديم الرسمية (studentsulyp.org) لإتمام طلبك." : "You will be redirected to the official application portal to complete your application."}
            </span>

            <a
              href={scholarship.officialLink || "https://studentsulyp.org/bridge/home"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#176B61] hover:bg-[#12544C] text-white font-extrabold px-8 py-4 rounded-xl shadow-md"
            >
              <span>{isArabic ? "التقديم عبر البوابة الرسمية للمنحة" : "Apply on Official Portal"}</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}