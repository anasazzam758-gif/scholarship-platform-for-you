"use client";

import { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // تحديث موقع المؤشر مباشرة عبر الـ DOM لسرعة فائقة بدون أي تأخير
    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    // التفاعل مع الأزرار والروابط لتكبير المؤشر وتغيير لونه للذهبي
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a") ||
        target.getAttribute("role") === "button";

      if (isInteractive !== isHoveredRef.current) {
        isHoveredRef.current = isInteractive;
        const innerCircle = cursor.firstElementChild;
        if (innerCircle) {
          if (isInteractive) {
            innerCircle.classList.add("scale-150", "bg-[#E9B44C]/30", "border-[#E9B44C]", "rotate-12");
            innerCircle.classList.remove("scale-100", "bg-[#176B61]/20", "border-[#176B61]");
          } else {
            innerCircle.classList.remove("scale-150", "bg-[#E9B44C]/30", "border-[#E9B44C]", "rotate-12");
            innerCircle.classList.add("scale-100", "bg-[#176B61]/20", "border-[#176B61]");
          }
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed pointer-events-none z-[99999] hidden md:block will-change-transform"
      style={{ left: -16, top: -16, transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-transform duration-100 ease-out bg-[#176B61]/20 border-2 border-[#176B61]">
        <GraduationCap size={16} className="text-[#102A43]" />
      </div>
    </div>
  );
}