"use client";

import { Sparkles } from "lucide-react";

interface AboutSectionProps {
  isArabic: boolean;
}

export default function AboutSection({ isArabic }: AboutSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 bg-[#102A43] text-white border-b-4 border-[#E9B44C]">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E9B44C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#176B61]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E9B44C] text-sm font-bold border border-white/15 shadow-sm">
          <Sparkles size={16} />
          <span>{isArabic ? "عن منصة أورا • AORA" : "About AORA Platform"}</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          {isArabic ? "جسر العبور نحو " : "The Bridge to "}
          <span className="text-[#E9B44C]">{isArabic ? "المستقبل الأكاديمي" : "Academic Future"}</span>
        </h1>

        <p className="text-lg md:text-xl text-[#F7F5EF]/85 max-w-3xl mx-auto leading-relaxed font-medium">
          {isArabic 
            ? "أورا (AORA) ليست مجرد منصة للمنح، بل هي مبادرة وطنية وإنسانية وُجدت لتمكين الطلاب الفلسطينيين في المخيمات والشتات من اقتناص الفرص التعليمية الموثوقة حول العالم."
            : "AORA is not just a scholarship portal; it is an initiative dedicated to empowering Palestinian students in camps and diaspora."}
        </p>
      </div>
    </section>
  );
}