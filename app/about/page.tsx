"use client";

import { useContext } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageContext } from "@/components/Providers";
import AboutSection from "@/components/about/AboutSection";
import MissionSection from "@/components/about/MissionSection";
import FeedbackSection from "@/components/about/FeedbackSection";

export default function AboutPage() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#102A43] flex flex-col font-sans">
      <Navbar />

      <div className="flex-1 w-full space-y-20 pb-20">
        
        {/* قسم الهيرو */}
        <AboutSection isArabic={isArabic} />

        {/* باقي الأقسام والآراء */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 w-full">
          <MissionSection isArabic={isArabic} />
          <FeedbackSection isArabic={isArabic} />
        </div>

      </div>

      <Footer />
    </main>
  );
}