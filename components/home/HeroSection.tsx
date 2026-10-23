"use client";

import { Search, Sparkles, ShieldCheck, Sprout, Users } from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isArabic: boolean;
}

export default function HeroSection({ searchQuery, setSearchQuery, isArabic }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-[#102A43]/10">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E9B44C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#176B61]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102A43] text-white text-sm font-bold shadow-sm">
              <Sparkles size={16} className="text-[#E9B44C]" />
              <span>
                {isArabic ? "فرصك التعليمية .. تبدأ، من هنا" : "Your Educational Opportunities .. Start Here"}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#102A43] leading-tight">
              {isArabic ? (
                <>
                  من الطموح...
                  <br />
                  <span className="text-[#176B61]">إلى الفرصة الحقيقية</span>
                </>
              ) : (
                <>
                  From Ambition...
                  <br />
                  <span className="text-[#176B61]">To Real Opportunity</span>
                </>
              )}
            </h2>

            <p className="text-lg md:text-xl text-[#102A43]/80 max-w-2xl leading-relaxed font-medium">
              {isArabic 
                ? "أورا (AORA) هو جسر يربط الطلاب الفلسطينيين في المخيمات والشتات بفرصهم التعليمية الموثوقة حول العالم، متسلحين بالعلم والإصرار نحو المستقبل." 
                : "AORA is a bridge connecting Palestinian students in camps and the diaspora with verified educational opportunities worldwide."}
            </p>
            
            <div className="bg-white p-3 rounded-2xl shadow-lg border border-[#102A43]/15 flex items-center gap-3 max-w-xl">
              <Search className="text-[#176B61] shrink-0 ms-2" size={22} />
              <input 
                type="text"
                placeholder={isArabic ? "ابحث عن منحة، دولة، أو جهة مانحة..." : "Search scholarship, country, or provider..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-[#102A43] placeholder:text-slate-400 font-medium text-sm md:text-base"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#102A43]/15">
              <div className="flex items-center gap-2.5">
                <Sparkles className="text-[#E9B44C] shrink-0" size={20} />
                <span className="text-sm font-bold text-[#102A43]">{isArabic ? "فرص حقيقية" : "Real Opportunities"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="text-[#176B61] shrink-0" size={20} />
                <span className="text-sm font-bold text-[#102A43]">{isArabic ? "موثوقية عالية" : "Trusted Info"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sprout className="text-[#176B61] shrink-0" size={20} />
                <span className="text-sm font-bold text-[#102A43]">{isArabic ? "نمو وتطور" : "Growth"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="text-[#E9B44C] shrink-0" size={20} />
                <span className="text-sm font-bold text-[#102A43]">{isArabic ? "دعم المجتمع" : "Community"}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#102A43] to-[#E9B44C] rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden border-4 border-[#102A43] shadow-2xl bg-[#102A43]">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop" 
                alt="University Student" 
                className="w-full h-[380px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#102A43] via-[#102A43]/90 to-transparent p-6 text-white">
                <p className="font-extrabold text-lg text-[#E9B44C]">
                  {isArabic ? "خطوتك الأولى نحو الجامعة" : "Your First Step Toward University"}
                </p>
                <p className="text-xs text-[#F7F5EF]/90 mt-1">
                  {isArabic ? "منح دراسية محدثة ومؤكدة التواريخ والروابط الرسمية" : "Verified scholarships with official links and deadlines"}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}