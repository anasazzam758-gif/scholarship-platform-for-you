"use client";

import { useContext } from "react";
import { LanguageContext } from "./Providers";
import Logo from "./Logo";
import { Heart, ShieldCheck, MessageCircle, PhoneCall } from "lucide-react";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  // أرقام الدعم والتواصل المباشر عبر الواتساب
  const supportWhatsApp1 = "96170000000"; // رقم تجريبي للدعم العام
  const supportWhatsApp2 = "96171111111"; // رقم تجريبي للاستفسارات

  return (
    <footer className="bg-[#102A43] text-[#F7F5EF] pt-16 pb-10 border-t-4 border-[#E9B44C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* القسم العلوي للفوتر */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* معلومات المنصة والشعار (4 أعمدة) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#F7F5EF] p-1.5 rounded-2xl shadow-md">
                <Logo />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">Revitcho</h3>
                <span className="text-sm font-bold text-[#E9B44C]">ريفيتشــو | المنح الدراسية الفلسطينية</span>
              </div>
            </div>
            <p className="text-sm text-[#F7F5EF]/80 font-medium leading-relaxed">
              {isArabic 
                ? "منصة تعليمية موثوقة لمساعدة الطلاب الفلسطينيين في المخيمات والشتات على الوصول للفرص الأكاديمية." 
                : "A trusted educational platform helping Palestinian students in camps and diaspora access academic opportunities."}
            </p>
          </div>

          {/* روابط سريعة (3 أعمدة) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-[#E9B44C] font-bold text-base mb-1">
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h4>
            <a href="#" className="hover:text-[#E9B44C] transition-colors text-sm font-medium">{isArabic ? "الرئيسية" : "Home"}</a>
            <a href="#" className="hover:text-[#E9B44C] transition-colors text-sm font-medium">{isArabic ? "المنح المتاحة" : "Scholarships"}</a>
            <a href="#" className="hover:text-[#E9B44C] transition-colors text-sm font-medium">{isArabic ? "عن المنصة" : "About Us"}</a>
            <a href="#" className="hover:text-[#E9B44C] transition-colors text-sm font-medium">{isArabic ? "تطوع معنا" : "Volunteer With Us"}</a>
          </div>

          {/* تواصل ودعم عبر الواتساب (5 أعمدة) */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <h4 className="text-[#E9B44C] font-bold text-base mb-1 flex items-center gap-2">
              <PhoneCall size={18} />
              <span>{isArabic ? "الدعم والتواصل المباشر" : "Direct Support & Contact"}</span>
            </h4>
            <p className="text-xs text-[#F7F5EF]/70 mb-2">
              {isArabic ? "هل تحتاج مساعدة في التقديم أو الاستفسار عن منحة؟ تواصل معنا فوراً عبر الواتساب:" : "Need help with applications? Reach out directly via WhatsApp:"}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              {/* زر واتساب 1 */}
              <a 
                href={`https://wa.me/${supportWhatsApp1}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle size={16} />
                <span>{isArabic ? "دعم الطلاب العام" : "General Support"}</span>
              </a>

              {/* زر واتساب 2 */}
              <a 
                href={`https://wa.me/${supportWhatsApp2}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all shadow-sm"
              >
                <MessageCircle size={16} className="text-[#E9B44C]" />
                <span>{isArabic ? "استفسارات المنح" : "Scholarship Inquiries"}</span>
              </a>
            </div>

            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 w-fit text-xs text-[#E9B44C] border border-white/10">
              <ShieldCheck size={14} />
              <span>{isArabic ? "خدمة مخصصة لدعم الطلبة الفلسطينيين" : "Dedicated student support service"}</span>
            </div>
          </div>

        </div>

        {/* خط فاصل وحقوق النشر */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5EF]/70">
          <p>
            {isArabic 
              ? "جميع الحقوق محفوظة لمنصة ريفيتشو © 2026" 
              : "All rights reserved to Revitcho Platform © 2026"}
          </p>
          <div className="flex items-center gap-1.5 font-medium">
            <span>{isArabic ? "صُنع بإتقان لدعم الطلاب الفلسطينيين" : "Crafted with care to support Palestinian students"}</span>
            <Heart size={14} className="text-red-400 fill-red-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}