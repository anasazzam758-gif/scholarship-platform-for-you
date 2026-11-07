"use client";

import { Target, Eye, Gift, Users, HeartHandshake, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

interface MissionSectionProps {
  isArabic: boolean;
}

export default function MissionSection({ isArabic }: MissionSectionProps) {
  return (
    <div className="space-y-16">
      
      {/* الرسالة والرؤية */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#102A43]/15 shadow-sm relative overflow-hidden group hover:border-[#176B61] transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#176B61]/5 rounded-bl-full pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-[#176B61]/10 flex items-center justify-center text-[#176B61] mb-6">
            <Target size={30} />
          </div>
          <h3 className="text-2xl font-black text-[#102A43] mb-3">
            {isArabic ? "رسالتنا (Our Mission)" : "Our Mission"}
          </h3>
          <p className="text-[#102A43]/80 leading-relaxed font-medium">
            {isArabic 
              ? "لماذا أنشأنا المنصة؟ انطلقنا لنكون المظلة الموثوقة التي ترفع عن أهالينا والطلاب عناء البحث المتشتت، وتقديم معلومات دقيقة، محدثة، ومؤكدة الروابط والمواعيد لكل منحة جامعية."
              : "Why we created the platform: To be a trusted umbrella eliminating scattered searches by providing verified, accurate, and up-to-date scholarship information."}
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#102A43]/15 shadow-sm relative overflow-hidden group hover:border-[#E9B44C] transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9B44C]/10 rounded-bl-full pointer-events-none" />
          <div className="w-14 h-14 rounded-2xl bg-[#E9B44C]/15 flex items-center justify-center text-[#E9B44C] mb-6">
            <Eye size={30} />
          </div>
          <h3 className="text-2xl font-black text-[#102A43] mb-3">
            {isArabic ? "رؤيتنا المستقبلية (Our Vision)" : "Our Vision"}
          </h3>
          <p className="text-[#102A43]/80 leading-relaxed font-medium">
            {isArabic 
              ? "شو هدفنا بالمستقبل؟ بناء جيل متعلم وقوي علمياً، قادراً على الوصول لأفضل الجامعات العالمية والمحلية، متسلحاً بالعلم والإصرار لخدمة مجتمعه وبناء وطنه."
              : "Building an educated, scientifically empowered generation capable of accessing top global and local universities."}
          </p>
        </div>
      </div>

      {/* الخدمات التي نقدمها */}
      <div className="bg-[#102A43] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#E9B44C]/10 rounded-full blur-2xl" />
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-[#E9B44C] text-[#102A43] rounded-2xl">
            <Gift size={24} />
          </div>
          <h3 className="text-2xl md:text-3xl font-black">
            {isArabic ? "ماذا نقدم للطلاب؟ (What We Offer)" : "What We Offer"}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h4 className="text-[#E9B44C] font-bold text-lg mb-2">
              {isArabic ? "منح دراسية مؤكدة" : "Verified Scholarships"}
            </h4>
            <p className="text-sm text-[#F7F5EF]/80">
              {isArabic ? "قاعدة بيانات محدثة تتضمن تفاصيل المنح، الشروط، والمواعيد النهائية مع الروابط الرسمية المباشرة." : "Updated database with requirements, deadlines, and official links."}
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h4 className="text-[#E9B44C] font-bold text-lg mb-2">
              {isArabic ? "توجيه وإرشاد أكاديمي" : "Academic Guidance"}
            </h4>
            <p className="text-sm text-[#F7F5EF]/80">
              {isArabic ? "مواكبة المستجدات والمقالات الإرشادية لتسهيل خطوات التقديم وكتابة رسائل الدافع." : "Guidance articles to simplify application steps and motivation letters."}
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h4 className="text-[#E9B44C] font-bold text-lg mb-2">
              {isArabic ? "تنبيهات حالة المنحة" : "Status Alerts"}
            </h4>
            <p className="text-sm text-[#F7F5EF]/80">
              {isArabic ? "تصنيف فوري يوضح المنح المفتوحة، التي ستغلق قريباً، والقادمة لتفادي تفويت أي فرصة." : "Immediate sorting of open, closing soon, and upcoming scholarships."}
            </p>
          </div>
        </div>
      </div>

      {/* من نساعد والقيم */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#102A43]/15 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#176B61]/10 text-[#176B61] rounded-2xl">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-black text-[#102A43]">
              {isArabic ? "من نساعد؟ (Who We Help)" : "Who We Help"}
            </h3>
          </div>
          <p className="text-[#102A43]/80 leading-relaxed font-medium">
            {isArabic 
              ? "نضع نصب أعيننا دائماً الطلاب الفلسطينيين الشجعان في كافة أماكن تواجددهم:"
              : "We always focus on supporting Palestinian students across all regions:"}
          </p>
          <ul className="space-y-3 font-bold text-sm text-[#102A43]">
            <li className="flex items-center gap-3 bg-[#F7F5EF] p-3 rounded-xl border border-[#102A43]/10">
              <CheckCircle2 className="text-[#176B61] shrink-0" size={18} />
              <span>{isArabic ? "الطلاب الفلسطينيون في مخيمات اللجوء والشتات" : "Palestinian students in refugee camps & diaspora"}</span>
            </li>
            <li className="flex items-center gap-3 bg-[#F7F5EF] p-3 rounded-xl border border-[#102A43]/10">
              <CheckCircle2 className="text-[#176B61] shrink-0" size={18} />
              <span>{isArabic ? "الطلاب الطامحون لمتابعة دراستهم الجامعية الأولى أو الدراسات العليا" : "Students aspiring for undergraduate or postgraduate studies"}</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#102A43]/15 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#E9B44C]/15 text-[#E9B44C] rounded-2xl">
              <HeartHandshake size={24} />
            </div>
            <h3 className="text-2xl font-black text-[#102A43]">
              {isArabic ? "قيمنا الأساسية (Our Values)" : "Our Values"}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#F7F5EF] p-4 rounded-2xl border border-[#102A43]/10 text-center space-y-2">
              <ShieldCheck className="mx-auto text-[#176B61]" size={28} />
              <h4 className="font-extrabold text-[#102A43] text-sm">{isArabic ? "الشفافية" : "Transparency"}</h4>
              <p className="text-xs text-slate-600">{isArabic ? "بيانات حقيقية وروابط رسمية." : "Real data & links."}</p>
            </div>
            <div className="bg-[#F7F5EF] p-4 rounded-2xl border border-[#102A43]/10 text-center space-y-2">
              <Sparkles className="mx-auto text-[#E9B44C]" size={28} />
              <h4 className="font-extrabold text-[#102A43] text-sm">{isArabic ? "سهولة الوصول" : "Accessibility"}</h4>
              <p className="text-xs text-slate-600">{isArabic ? "تصميم مبسط للجميع." : "Simple interface."}</p>
            </div>
            <div className="bg-[#F7F5EF] p-4 rounded-2xl border border-[#102A43]/10 text-center space-y-2">
              <Users className="mx-auto text-[#176B61]" size={28} />
              <h4 className="font-extrabold text-[#102A43] text-sm">{isArabic ? "تكافؤ الفرص" : "Equal Opportunity"}</h4>
              <p className="text-xs text-slate-600">{isArabic ? "إتاحة الفرص للجميع." : "Opportunities for all."}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}