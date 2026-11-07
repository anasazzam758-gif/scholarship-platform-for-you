"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Circle, FolderKanban, RotateCcw, Sparkles, CheckCheck } from "lucide-react";
import { ChecklistDocument, ChecklistCategory } from "@/lib/scholarships";

const FALLBACK_DOCUMENTS: ChecklistDocument[] = [
  { id: "id_card", title_ar: "بطاقة الهوية أو وثيقة إثبات الشخصية", title_en: "ID Card or Personal Identification" },
  { id: "transcript", title_ar: "كشوف العلامات المدرسية للسنوات السابقة", title_en: "Previous School Transcripts" },
  { id: "financial", title_ar: "إثبات الوضع المالي للعائلة (Financial Aid)", title_en: "Family Financial Aid Information" },
];

export default function ApplicationChecklist({
  scholarshipId,
  isArabic,
  customDocuments,
  categories,
}: {
  scholarshipId: string;
  isArabic: boolean;
  customDocuments?: ChecklistDocument[];
  categories?: ChecklistCategory[];
}) {
  const documents = customDocuments && customDocuments.length > 0 ? customDocuments : FALLBACK_DOCUMENTS;
  const hasCategories = categories && categories.length > 0;

  const storageKey = `aora_checklist_${scholarshipId}`;
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setCompletedItems(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
    if (categories && categories.length > 0) {
      setActiveCategory(categories[0].id);
    } else {
      setActiveCategory("all");
    }
  }, [storageKey, categories]);

  const toggleItem = (id: string) => {
    setCompletedItems((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  };

  const resetChecklist = () => {
    setCompletedItems([]);
    localStorage.removeItem(storageKey);
  };

  const markCategoryComplete = (catId: string) => {
    const targetIds = documents
      .filter((d) => catId === "all" || d.categoryId === catId)
      .map((d) => d.id);

    setCompletedItems((prev) => {
      const updated = Array.from(new Set([...prev, ...targetIds]));
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  };

  const totalCount = documents.length;
  const validCompletedCount = completedItems.filter((id) => documents.some((doc) => doc.id === id)).length;
  const progress = totalCount > 0 ? Math.round((validCompletedCount / totalCount) * 100) : 0;

  const visibleDocuments =
    !hasCategories || activeCategory === "all"
      ? documents
      : documents.filter((doc) => doc.categoryId === activeCategory);

  return (
    <div className="bg-gradient-to-br from-[#F7F5EF] via-white to-[#F7F5EF] rounded-3xl p-6 md:p-8 border-2 border-[#102A43]/15 shadow-md space-y-6 relative overflow-hidden">
      {/* خلفية جمالية ناعمة */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-[#E9B44C]/10 rounded-full blur-3xl pointer-events-none" />

      {/* الرأس والإحصائيات */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#102A43]/10 relative z-10">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#176B61]/10 text-[#176B61] text-xs font-black">
            <FolderKanban size={14} />
            <span>{isArabic ? "حقيبة التجهيز العملية (ULYP Scholarship Folder)" : "Interactive Preparation Checklist"}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#102A43]">
            {isArabic ? "قائمة تجهيز المستندات والمتطلبات قبل فتح الطلب" : "Pre-Application Documents & Requirements Checklist"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-bold">
            {isArabic
              ? "ضع علامة على كل مستند تجهزه. العناصر التي لا تنطبق على حالتك يمكنك تركها أو تحديدها لتتبع تقدمك."
              : "Check off each document as you prepare it. Progress is automatically saved on your device."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 self-start lg:self-center shrink-0">
          <div className="flex items-center gap-3 bg-[#102A43] text-white px-4 py-2.5 rounded-2xl shadow-sm">
            <div className="text-end">
              <span className="block text-[11px] text-[#E9B44C] font-extrabold">
                {isArabic ? "الإنجاز الكلي" : "Total Ready"}
              </span>
              <span className="text-sm font-black">
                {validCompletedCount} / {totalCount} {isArabic ? "جاهز" : "Ready"} ({progress}%)
              </span>
            </div>
          </div>

          {validCompletedCount > 0 && (
            <button
              type="button"
              onClick={resetChecklist}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-extrabold border border-red-200 transition-all cursor-pointer"
            >
              <RotateCcw size={14} />
              <span>{isArabic ? "إعادة ضبط" : "Reset"}</span>
            </button>
          )}
        </div>
      </div>

      {/* شريط التقدم الذكي */}
      <div className="space-y-2 relative z-10">
        <div className="w-full h-4 bg-slate-200/80 rounded-full overflow-hidden p-0.5 border border-[#102A43]/10">
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out ${
              progress === 100
                ? "bg-gradient-to-r from-[#176B61] via-[#E9B44C] to-[#176B61]"
                : "bg-gradient-to-r from-[#102A43] to-[#176B61]"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
        {progress === 100 && (
          <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#176B61] bg-[#E6F4F1] px-4 py-2.5 rounded-xl border border-[#176B61]/30 animate-pulse">
            <Sparkles size={18} className="text-[#E9B44C] shrink-0" />
            <span>
              {isArabic
                ? "مبروك! حقيبة أوراقك مكتملة 100% — أنت الآن جاهز تماماً لفتح بوابة المنحة وتعبئة الطلب دفعة واحدة!"
                : "Congratulations! Your document folder is 100% ready — you can now apply with full confidence!"}
            </span>
          </div>
        )}
      </div>

      {/* أزرار التبويبات (المجلدات الـ 7) */}
      {hasCategories && (
        <div className="space-y-3 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-500">
              {isArabic ? "تصفح حسب المجلد:" : "Filter by Folder:"}
            </span>
            <button
              type="button"
              onClick={() => markCategoryComplete(activeCategory)}
              className="inline-flex items-center gap-1 text-xs font-extrabold text-[#176B61] hover:text-[#102A43] cursor-pointer"
            >
              <CheckCheck size={15} />
              <span>{isArabic ? "تحديد كل عناصر هذا المجلد" : "Mark folder complete"}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {categories!.map((cat) => {
              const catDocs = documents.filter((d) => d.categoryId === cat.id);
              const catDone = catDocs.filter((d) => completedItems.includes(d.id)).length;
              const isSelected = activeCategory === cat.id;
              const isAllCatDone = catDocs.length > 0 && catDone === catDocs.length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer border ${
                    isSelected
                      ? "bg-[#102A43] text-white border-[#102A43] shadow-md scale-[1.02]"
                      : isAllCatDone
                      ? "bg-[#E6F4F1] text-[#176B61] border-[#176B61]/40"
                      : "bg-white text-[#102A43]/80 border-[#102A43]/15 hover:border-[#176B61]"
                  }`}
                >
                  <span>{isArabic ? cat.title_ar : cat.title_en}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                      isSelected
                        ? "bg-[#E9B44C] text-[#102A43]"
                        : isAllCatDone
                        ? "bg-[#176B61] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {catDone}/{catDocs.length}
                  </span>
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer border ${
                activeCategory === "all"
                  ? "bg-[#176B61] text-white border-[#176B61] shadow-md"
                  : "bg-white text-[#102A43]/80 border-[#102A43]/15 hover:border-[#176B61]"
              }`}
            >
              {isArabic ? `عرض الكل (${totalCount})` : `View All (${totalCount})`}
            </button>
          </div>
        </div>
      )}

      {/* شبكة المستندات التفاعلية */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
        {visibleDocuments.map((doc) => {
          const isChecked = completedItems.includes(doc.id);
          return (
            <div
              key={doc.id}
              onClick={() => toggleItem(doc.id)}
              className={`group flex items-start gap-3.5 p-4 rounded-2xl border transition-all duration-200 select-none cursor-pointer ${
                isChecked
                  ? "bg-[#E6F4F1]/90 border-[#176B61] text-[#102A43] shadow-xs"
                  : "bg-white border-[#102A43]/15 text-[#102A43] hover:border-[#E9B44C] hover:shadow-sm"
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isChecked ? (
                  <CheckCircle2 size={22} className="text-[#176B61] fill-[#E6F4F1] scale-110 transition-transform" />
                ) : (
                  <Circle size={22} className="text-slate-300 group-hover:text-[#E9B44C] transition-colors" />
                )}
              </div>
              <div className="space-y-1">
                <span
                  className={`block text-sm font-extrabold leading-snug transition-colors ${
                    isChecked ? "line-through text-slate-500" : "text-[#102A43]"
                  }`}
                >
                  {isArabic ? doc.title_ar : doc.title_en}
                </span>
                {(isArabic ? doc.note_ar : doc.note_en) && (
                  <span className="block text-xs text-slate-500 font-semibold">
                    {isArabic ? doc.note_ar : doc.note_en}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}