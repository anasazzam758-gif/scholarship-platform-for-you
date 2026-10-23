"use client";

import { useEffect, useState } from "react";
import NextTopLoader from "nextjs-toploader";
import Logo from "./Logo";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // إبقاء شاشة البداية لمدة ثانيتين ونصف لتعطي هيبة للموقع
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. شريط التحميل العلوي عند التنقل بين الصفحات */}
      <NextTopLoader
        color="#E9B44C"
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={400}
        shadow="0 0 12px #E9B44C, 0 0 5px #176B61"
      />

      {/* 2. شاشة التحميل الافتتاحية عند الدخول */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#102A43] transition-opacity duration-700">
          <div className="relative flex flex-col items-center">
            {/* حلقة دائرية تفتل حول الشعار */}
            <div className="w-24 h-24 rounded-full border-4 border-[#E9B44C]/20 border-t-[#E9B44C] animate-spin mb-6" />

            <div className="absolute top-5">
              <Logo className="w-14 h-14" />
            </div>

            <h2 className="text-3xl font-black text-white tracking-widest animate-pulse">
              AORA
            </h2>
            

            {/* خط التحميل السفلي المتحرك */}
            <div className="w-48 h-1.5 bg-white/10 rounded-full mt-6 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#176B61] via-[#E9B44C] to-[#176B61] w-full animate-[shimmer_1.5s_infinite]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}