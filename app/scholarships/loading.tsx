"use client";

import { GraduationCap } from "lucide-react";

export default function ScholarshipLoading() {
  return (
    <div className="fixed inset-0 z-[999999] bg-[#102A43] flex flex-col items-center justify-center text-white select-none">
      <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-[#176B61] border-2 border-[#E9B44C] shadow-2xl animate-bounce">
        <GraduationCap size={44} className="text-[#E9B44C]" />
      </div>
      
      <h2 className="text-3xl font-black mt-6 tracking-wider text-[#F7F5EF]">
        Revitcho
      </h2>
      <span className="text-sm font-bold text-[#E9B44C] mt-1">
        جاري تحميل تفاصيل المنحة الأكاديمية...
      </span>
      
      {/* شريط تحميل متحرك ناعم */}
      <div className="w-40 h-1.5 bg-white/10 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-[#E9B44C] animate-pulse w-full" />
      </div>
    </div>
  );
}