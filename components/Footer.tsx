"use client";

import { useContext } from "react";
import { LanguageContext } from "./Providers";
import Logo from "./Logo";
import { Heart, ShieldCheck, MessageCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const router = useRouter();
  const isArabic = language === "ar";

  const whatsAppNumber = "96170000000"; 

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      if (id === "footer-contact") {
        const whatsappBox = document.getElementById("whatsapp-glow-box");
        if (whatsappBox) {
          whatsappBox.classList.add("scale-110", "ring-4", "ring-[#E9B44C]", "bg-[#20ba5a]");
          setTimeout(() => {
            whatsappBox.classList.remove("scale-110", "ring-4", "ring-[#E9B44C]", "bg-[#20ba5a]");
          }, 3000);
        }
      }
    }
  };

  return (
    <footer id="footer-contact" className="bg-[#102A43] text-[#F7F5EF] pt-16 pb-10 border-t-4 border-[#E9B44C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => router.push("/")}>
              <div className="bg-[#F7F5EF] p-1.5 rounded-2xl shadow-md group-hover:scale-110 transition-transform">
                <Logo />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">AORA</h3>
                <span className="text-xs font-bold text-[#E9B44C]">Academic Opportunities & Resources Access</span>
              </div>
            </div>
            <p className="text-sm text-[#F7F5EF]/80 font-medium leading-relaxed">
              {isArabic 
                ? "منصة أورا التعليمية الموثوقة لمساعدة الطلاب الفلسطينيين في المخيمات والشتات على الوصول للفرص الأكاديمية." 
                : "AORA trusted educational platform helping Palestinian students in camps and diaspora access academic opportunities."}
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-[#E9B44C] font-bold text-base mb-1">
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h4>
            <Link href="/" className="hover:text-[#E9B44C] hover:translate-x-1.5 transition-all text-sm font-medium inline-block">
              {isArabic ? "الرئيسية" : "Home"}
            </Link>
            <Link href="/#scholarships-section" className="hover:text-[#E9B44C] hover:translate-x-1.5 transition-all text-sm font-medium inline-block">
              {isArabic ? "المنح المتاحة" : "Scholarships"}
            </Link>
            <Link href="/about" className="hover:text-[#E9B44C] hover:translate-x-1.5 transition-all text-sm font-medium inline-block">
              {isArabic ? "عن المنصة" : "About Us"}
            </Link>
            <a href="#footer-contact" onClick={(e) => scrollToSection(e, "footer-contact")} className="hover:text-[#E9B44C] hover:translate-x-1.5 transition-all text-sm font-medium inline-block">
              {isArabic ? "تواصلوا معنا" : "Contact Us"}
            </a>
            <Link href="/about#feedback" className="hover:text-[#E9B44C] hover:translate-x-1.5 transition-all text-sm font-medium inline-block">
              {isArabic ? "التعليقات والآراء" : "Feedback & Comments"}
            </Link>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-[#E9B44C] font-bold text-base mb-1 flex items-center gap-2">
              <PhoneCall size={18} />
              <span>{isArabic ? "تواصل معنا" : "Contact Us"}</span>
            </h4>
            
            <p className="text-xs text-[#F7F5EF]/85 leading-relaxed font-medium">
              {isArabic 
                ? "إذا كان لديك أي سؤال، أو رغبة في تقديم مساعدة مادية أو معنوية، نحن هنا لنكون سنداً لك في كل خطوة نحو مستقبل أفضل." 
                : "If you have any questions or wish to provide moral or financial support, we are here to support you every step of the way."}
            </p>
            
            <div className="relative inline-block w-fit mt-2">
              <div className="absolute -inset-1 rounded-2xl bg-[#25D366] opacity-75 blur-sm animate-pulse" />
              <a 
                id="whatsapp-glow-box"
                href={`https://wa.me/${whatsAppNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-black transition-all duration-300 shadow-xl hover:scale-110 cursor-pointer"
              >
                <MessageCircle size={20} className="animate-bounce" />
                <span>{isArabic ? "انقر هنا للتواصل عبر الواتساب" : "Click to Chat via WhatsApp"}</span>
              </a>
            </div>

            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 w-fit text-xs text-[#E9B44C] border border-white/10">
              <ShieldCheck size={14} />
              <span>{isArabic ? "دعم متواصل ومخصص للطلبة" : "Dedicated student support"}</span>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5EF]/70">
          <p>
            {isArabic 
              ? "جميع الحقوق محفوظة لمنصة AORA © 2026" 
              : "All rights reserved to AORA Platform © 2026"}
          </p>
          <div className="flex items-center gap-1.5 font-medium">
            <span>{isArabic ? "صُنع بإتقان لدعم الطلاب الفلسطينيين" : "Crafted with care to support Palestinian students"}</span>
            <Heart size={14} className="text-red-400 fill-red-400 hover:scale-125 transition-transform" />
          </div>
        </div>

      </div>
    </footer>
  );
}