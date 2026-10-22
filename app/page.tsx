"use client";

import { useContext } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScholarshipCard from "@/components/ScholarshipCard";
import { LanguageContext } from "@/components/Providers";
import { sortScholarships } from "@/lib/scholarships";
import { SCHOLARSHIPS_DATA } from "@/lib/scholarshipsData";
import { ShieldCheck, Sparkles, Sprout, Users } from "lucide-react";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  // استخدام البيانات المنظمة من ملفنا الجديد
  const sortedScholarships = sortScholarships(SCHOLARSHIPS_DATA);

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#102A43] flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-[#102A43]/10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E9B44C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#176B61]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* النص الرئيسي */}
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
                  ? "ريفيتشو هو جسر يربط الطلاب الفلسطينيين في المخيمات والشتات بفرصهم التعليمية الموثوقة حول العالم، متسلحين بالعلم والإصرار نحو المستقبل." 
                  : "Revitcho is a bridge connecting Palestinian students in camps and the diaspora with verified educational opportunities worldwide."}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="bg-[#176B61] hover:bg-[#12544C] text-white px-8 py-3.5 rounded-2xl font-extrabold text-base transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#176B61]/25">
                  {isArabic ? "تصفح المنح المتاحة" : "Browse Open Scholarships"}
                </button>
                <button className="bg-[#102A43] hover:bg-[#1b3d60] text-white px-8 py-3.5 rounded-2xl font-extrabold text-base transition-all duration-300 hover:-translate-y-1 shadow-md">
                  {isArabic ? "عن ريفيتشو" : "About Revitcho"}
                </button>
              </div>

              {/* القيم الأربعة */}
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

            {/* قسم الصورة */}
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

      {/* قسم بطاقات المنح الأحدث (بحجم بارز ومكبر قليلاً) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-2xl md:text-4xl font-black text-[#102A43]">
              {isArabic ? "أحدث المنح الدراسية" : "Latest Scholarships"}
            </h3>
            <div className="h-2 w-28 bg-[#E9B44C] rounded-full mt-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}