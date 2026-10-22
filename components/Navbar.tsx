"use client"; // Interactive component

import { useContext } from "react";
import { LanguageContext } from "./Providers";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe } from "lucide-react"; // Import our Lucide icons

export default function Navbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo/Brand Name */}
        <h1 className="text-xl font-bold text-sky-700 dark:text-sky-400">
          {language === "ar" ? "منصة المنح" : "Scholarships"}
        </h1>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <Globe size={20} />
            <span className="font-semibold text-sm">
              {language === "ar" ? "English" : "العربية"}
            </span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

        </div>
      </div>
    </nav>
  );
}