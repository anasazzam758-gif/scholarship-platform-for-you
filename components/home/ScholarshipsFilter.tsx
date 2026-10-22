"use client";

interface ScholarshipsFilterProps {
  selectedDegree: string;
  setSelectedDegree: (degree: string) => void;
  isArabic: boolean;
}

export default function ScholarshipsFilter({ selectedDegree, setSelectedDegree, isArabic }: ScholarshipsFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-[#102A43]/15 shadow-xs">
      <button
        onClick={() => setSelectedDegree("all")}
        className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
          selectedDegree === "all" 
            ? "bg-[#102A43] text-white shadow-sm" 
            : "text-[#102A43]/70 hover:bg-[#102A43]/5"
        }`}
      >
        {isArabic ? "الكل" : "All"}
      </button>
      <button
        onClick={() => setSelectedDegree("Bachelor")}
        className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
          selectedDegree === "Bachelor" 
            ? "bg-[#176B61] text-white shadow-sm" 
            : "text-[#102A43]/70 hover:bg-[#176B61]/10"
        }`}
      >
        {isArabic ? "بكالوريوس" : "Bachelor"}
      </button>
      <button
        onClick={() => setSelectedDegree("Master")}
        className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
          selectedDegree === "Master" 
            ? "bg-[#176B61] text-white shadow-sm" 
            : "text-[#102A43]/70 hover:bg-[#176B61]/10"
        }`}
      >
        {isArabic ? "ماجستير" : "Master"}
      </button>
    </div>
  );
}