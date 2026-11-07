"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!isDesktop) return null;

  return (
    <div
      id="custom-cursor"
      className={`fixed top-0 left-0 pointer-events-none z-[99999] rounded-full transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2 ${
        isPointer
          ? "w-8 h-8 bg-[#E9B44C]/25 border-2 border-[#E9B44C] scale-125"
          : "w-3.5 h-3.5 bg-[#176B61] ring-2 ring-[#E9B44C]/60"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}