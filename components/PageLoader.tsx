"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GraduationCap } from "lucide-react";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 180);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[999999] bg-[#102A43] flex flex-col items-center justify-center text-white transition-opacity duration-300 select-none">
      <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-[#176B61] border-2 border-[#E9B44C] shadow-2xl animate-bounce">
        <GraduationCap size={44} className="text-[#E9B44C]" />
      </div>
      
      <h2 className="text-4xl font-black mt-6 tracking-wider text-[#F7F5EF]">
        AORA
      </h2>
      <span className="text-sm font-bold text-[#E9B44C] mt-1 text-center px-4">
        Academic Opportunities & Resources Access
      </span>
      <span className="text-xs text-slate-300 mt-1 font-bold">
        الفرص ومصادر الوصول | Please wait...
      </span>
      
      <div className="w-48 h-2.5 bg-white/10 rounded-full mt-6 overflow-hidden p-0.5 border border-white/25 shadow-inner">
        <div 
          className="h-full bg-[#E9B44C] rounded-full transition-all duration-200 ease-out shadow-lg shadow-[#E9B44C]/60" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <span className="text-xs font-mono text-[#E9B44C] mt-2 font-black">{progress}%</span>
    </div>
  );
}