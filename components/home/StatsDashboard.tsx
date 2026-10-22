"use client";

import { Layers, CheckCircle, Clock, Calendar } from "lucide-react";

interface StatsDashboardProps {
  totalCount: number;
  openCount: number;
  closingSoonCount: number;
  upcomingCount: number;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  isArabic: boolean;
}

export default function StatsDashboard({
  totalCount,
  openCount,
  closingSoonCount,
  upcomingCount,
  statusFilter,
  setStatusFilter,
  isArabic
}: StatsDashboardProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-25">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        
        {/* 1. متاحة للتقديم (لون ساطع وأخضر بترولي حيوي) */}
        <div 
          onClick={() => setStatusFilter("open")}
          className={`group bg-white p-6 rounded-3xl border shadow-md flex items-center justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${
            statusFilter === "open" ? "border-[#176B61] ring-2 ring-[#176B61]/30 bg-[#176B61]/5" : "border-[#102A43]/15 hover:border-[#176B61]"
          }`}
        >
          <div>
            <span className="block text-xs font-extrabold text-[#176B61] mb-1">{isArabic ? "متاحة للتقديم" : "Open Now"}</span>
            <span className="text-3xl font-black text-[#176B61]">{openCount}</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#E6F4F1] text-[#176B61] flex items-center justify-center group-hover:rotate-6 transition-transform">
            <CheckCircle size={24} />
          </div>
        </div>

        {/* 2. تغلق قريباً (لون ساطع وتحذيري جذاب) */}
        <div 
          onClick={() => setStatusFilter("closing_soon")}
          className={`group bg-white p-6 rounded-3xl border shadow-md flex items-center justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${
            statusFilter === "closing_soon" ? "border-red-500 ring-2 ring-red-500/30 bg-red-50/50" : "border-[#102A43]/15 hover:border-red-500"
          }`}
        >
          <div>
            <span className="block text-xs font-extrabold text-red-600 mb-1">{isArabic ? "تغلق قريباً" : "Closing Soon"}</span>
            <span className="text-3xl font-black text-red-700">{closingSoonCount}</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center group-hover:rotate-6 transition-transform">
            <Clock size={24} />
          </div>
        </div>

        {/* 3. منح قادمة (لون ساطع وسماوي مريح) */}
        <div 
          onClick={() => setStatusFilter("upcoming")}
          className={`group bg-white p-6 rounded-3xl border shadow-md flex items-center justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${
            statusFilter === "upcoming" ? "border-sky-500 ring-2 ring-sky-500/30 bg-sky-50/50" : "border-[#102A43]/15 hover:border-sky-500"
          }`}
        >
          <div>
            <span className="block text-xs font-extrabold text-sky-600 mb-1">{isArabic ? "منح قادمة" : "Upcoming"}</span>
            <span className="text-3xl font-black text-sky-700">{upcomingCount}</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-sky-600 flex items-center justify-center group-hover:rotate-6 transition-transform">
            <Calendar size={24} />
          </div>
        </div>

        {/* 4. إجمالي المنح (الكارد الرمادي/الكحلي الهادئ أصبح في الآخر تماماً مثل ما طلبت) */}
        <div 
          onClick={() => setStatusFilter("all")}
          className={`group bg-white p-6 rounded-3xl border shadow-md flex items-center justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${
            statusFilter === "all" ? "border-[#102A43] ring-2 ring-[#102A43]/30 bg-[#102A43]/5" : "border-[#102A43]/15 hover:border-[#102A43]"
          }`}
        >
          <div>
            <span className="block text-xs font-extrabold text-slate-500 mb-1">{isArabic ? "إجمالي المنح" : "Total Scholarships"}</span>
            <span className="text-3xl font-black text-[#102A43]">{totalCount}</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#102A43]/10 text-[#102A43] flex items-center justify-center group-hover:rotate-6 transition-transform">
            <Layers size={24} />
          </div>
        </div>

      </div>
    </section>
  );
}