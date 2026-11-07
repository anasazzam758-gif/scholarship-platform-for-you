"use client";

import { useEffect, useState } from "react";
import NextTopLoader from "nextjs-toploader";
import Logo from "./Logo";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // إذا دخل المستخدم للموقع مسبقاً في هذه الجلسة، لا نعيد عرض شاشة الانتظار الطويلة
    const hasLoadedBefore = sessionStorage.getItem("aora_loaded");
    const delay = hasLoadedBefore ? 300 : 900;

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, delay);

    const removeTimer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("aora_loaded", "true");
    }, delay + 400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {/* 1. شريط التحميل العلوي السريع عند التنقل بين الصفحات */}
      <NextTopLoader
        color="#E9B44C"
        initialPosition={0.15}
        crawlSpeed={150}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease-out"
        speed={300}
        shadow="0 0 10px #E9B44C"
      />

      {/* 2. شاشة التحميل الافتتاحية السريعة والناعمة */}
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#102A43] transition-opacity duration-400 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="relative flex flex-col items-center">
            {/* حلقة دائرية تدور حول الشعار */}
            <div className="w-24 h-24 rounded-full border-4 border-[#E9B44C]/20 border-t-[#E9B44C] animate-spin mb-6" />

            <div className="absolute top-5">
              <Logo className="w-14 h-14" />
            </div>

            <h2 className="text-3xl font-black text-white tracking-widest animate-pulse">
              AORA
            </h2>

            {/* خط التحميل السفلي المتحرك */}
            <div className="w-48 h-1.5 bg-white/10 rounded-full mt-6 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#176B61] via-[#E9B44C] to-[#176B61] w-full animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}