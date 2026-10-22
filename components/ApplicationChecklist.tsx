"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Circle, CheckSquare } from "lucide-react";

interface ChecklistItem {
  id: string;
  title_ar: string;
  title_en: string;
}

const DEFAULT_DOCUMENTS: ChecklistItem[] = [
  { id: "cv", title_ar: "السيرة الذاتية (CV)", title_en: "Curriculum Vitae (CV)" },
  { id: "motivation", title_ar: "رسالة الدافع (Motivation Letter)", title_en: "Motivation Letter" },
  { id: "transcript", title_ar: "كشف العلامات الأكاديمي", title_en: "Academic Transcripts" },
  { id: "language", title_ar: "شهادة إتقان اللغة (إن وجدت)", title_en: "Language Certificate (if required)" },
  { id: "recommendation", title_ar: "خطابات التوصية (Recommendation Letters)", title_en: "Recommendation Letters" },
  { id: "passport", title_ar: "جواز السفر ساري المفعول", title_en: "Valid Passport" },
];

export default function ApplicationChecklist({ scholarshipId, isArabic }: { scholarshipId: string; isArabic: boolean }) {
  const storageKey = `aora_checklist_${scholarshipId}`;
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setCompletedItems(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, [storageKey]);

  const toggleItem = (id: string) => {
    setCompletedItems((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  };

  const progress = Math.round((completedItems.length / DEFAULT_DOCUMENTS.length) * 100);

  return (
    <div className="bg-[#F7F5EF]/50 rounded-3xl p-6 md:p-8 border border-[#102A43]/15 space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#102A43]/10">
        <div>
          <h3 className="text-xl font-black text-[#102A43] flex items-center gap-2">
            <CheckSquare className="text-[#176B61]" size={22} />
            <span>{isArabic ? "قائمة المستندات المطلوبة للتقديم" : "Application Documents Checklist"}</span>
          </h3>
          <p className="text-xs text-slate-600 mt-1 font-bold">
            {isArabic ? "انقر على المستند لتحديده كمكتمل ومتابعة جاهزية أوراقك." : "Click on a document to mark it as ready."}
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-[#102A43]/10 self-start sm:self-auto">
          <span className="text-xs font-extrabold text-[#102A43]">
            {isArabic ? "نسبة التجهيز:" : "Progress:"}
          </span>
          <span className="text-sm font-black text-[#176B61]">{progress}%</span>
        </div>
      </div>

      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#176B61] transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {DEFAULT_DOCUMENTS.map((doc) => {
          const isChecked = completedItems.includes(doc.id);
          return (
            <div
              key={doc.id}
              onClick={() => toggleItem(doc.id)}
              className={`flex items-center gap-3 p-4 rounded-2xl border select-none ${
                isChecked 
                  ? "bg-[#E6F4F1] border-[#176B61]/40 text-[#102A43]" 
                  : "bg-white border-slate-200 text-slate-700"
              }`}
            >
              {isChecked ? (
                <CheckCircle2 size={20} className="text-[#176B61] shrink-0" />
              ) : (
                <Circle size={20} className="text-slate-400 shrink-0" />
              )}
              <span className={`text-sm font-extrabold ${isChecked ? "line-through text-slate-500" : ""}`}>
                {isArabic ? doc.title_ar : doc.title_en}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}