"use client";

export default function Logo() {
  return (
    <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-[#F7F5EF] border border-[#176B61]/20 shadow-sm shrink-0">
      <svg
        viewBox="0 0 64 64"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* النجمة الذهبية */}
        <path
          d="M46 6L47.8 10.2L52.4 10.6L48.9 13.6L50 18L46 15.6L42 18L43.1 13.6L39.6 10.6L44.2 10.2L46 6Z"
          fill="#E9B44C"
        />
        {/* رأس الطالب */}
        <circle cx="31" cy="19" r="5" fill="#102A43" />
        {/* جسم الطالب */}
        <path
          d="M20 26C25 29 30 29 33 26L43 15C44.2 13.8 46 15.2 44.8 16.8L35 31C32 35 31 39 31 44C28 38 25 33 19 29C17.5 28 18.5 25 20 26Z"
          fill="#102A43"
        />
        {/* صفحات الكتاب المفتوح */}
        <path d="M12 28C20 29 26 34 30 42V54C25 47 19 43 12 42V28Z" fill="#176B61" />
        <path d="M52 28C44 29 38 34 34 42V54C39 47 45 43 52 42V28Z" fill="#176B61" />
        {/* غلاف الكتاب */}
        <path
          d="M9 32V46C18 47 25 51 32 58C39 51 46 47 55 46V32"
          stroke="#102A43"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}