"use client";

import { useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScholarshipCard from "@/components/ScholarshipCard";
import HeroSection from "@/components/home/HeroSection";
import StatsDashboard from "@/components/home/StatsDashboard";
import ScholarshipsFilter from "@/components/home/ScholarshipsFilter";
import { LanguageContext } from "@/components/Providers";
import { sortScholarships, getScholarshipStatus, Scholarship } from "@/lib/scholarships";
import { fetchScholarships } from "@/lib/scholarshipsData";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // 1. State لحفظ المنح القادمة من Google Sheet وحالة التحميل
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. جلب البيانات فور فتح الموقع
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await fetchScholarships();
      setScholarships(data);
      setLoading(false);
    }
    loadData();
  }, []);

  // 3. ترتيب المنح وحساب الإحصائيات تلقائياً من البيانات الحية
  const sortedScholarships = sortScholarships(scholarships) as Scholarship[];

  const totalCount = sortedScholarships.length;
  const openCount = sortedScholarships.filter(s => getScholarshipStatus(s) === "open").length;
  const closingSoonCount = sortedScholarships.filter(s => getScholarshipStatus(s) === "closing_soon").length;
  const upcomingCount = sortedScholarships.filter(s => getScholarshipStatus(s) === "upcoming").length;

  const filteredScholarships = sortedScholarships.filter((scholarship) => {
    const query = searchQuery.toLowerCase();
    const title = (isArabic ? scholarship.title_ar : scholarship.title_en).toLowerCase();
    const provider = (isArabic ? scholarship.provider_ar : scholarship.provider_en).toLowerCase();
    const location = (isArabic ? scholarship.location_ar : scholarship.location_en).toLowerCase();

    const matchesSearch = title.includes(query) || provider.includes(query) || location.includes(query);
    const matchesDegree = selectedDegree === "all" || scholarship.degree_levels.includes(selectedDegree);
    
    const status = getScholarshipStatus(scholarship);
    const matchesStatus = statusFilter === "all" || status === statusFilter;

    return matchesSearch && matchesDegree && matchesStatus;
  });

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#102A43] flex flex-col">
      <Navbar />
      
      <div className="flex-1 w-full pt-6 space-y-12">
        <div id="about-section">
          <HeroSection 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            isArabic={isArabic} 
          />
        </div>

        <StatsDashboard 
          totalCount={totalCount}
          openCount={openCount}
          closingSoonCount={closingSoonCount}
          upcomingCount={upcomingCount}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          isArabic={isArabic}
        />

        <section id="scholarships-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h3 className="text-2xl md:text-4xl font-black text-[#102A43]">
                {isArabic ? "أحدث المنح الدراسية" : "Latest Scholarships"}
              </h3>
              <div className="h-2 w-28 bg-[#E9B44C] rounded-full mt-2" />
            </div>

            <ScholarshipsFilter 
              selectedDegree={selectedDegree} 
              setSelectedDegree={setSelectedDegree} 
              isArabic={isArabic} 
            />
          </div>

          {loading ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#102A43]/10 p-8 shadow-sm">
              <p className="text-xl font-extrabold text-[#176B61] animate-pulse">
                {isArabic ? "جاري تحميل أحدث المنح الدراسية..." : "Loading latest scholarships..."}
              </p>
            </div>
          ) : filteredScholarships.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredScholarships.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#102A43]/10 p-8 shadow-sm">
              <p className="text-xl font-bold text-[#102A43] mb-2">
                {isArabic ? "لم نجد نتائج تطابق بحثك أو اختيارك" : "No scholarships found matching your filter"}
              </p>
              <p className="text-sm text-slate-500">
                {isArabic ? "جرب الضغط على 'إجمالي المنح' لإعادة عرض كافة الفرص المتاحة." : "Try clicking 'Total Scholarships' to reset status filter."}
              </p>
            </div>
          )}
        </section>

        <section id="feedback-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 border-t border-[#102A43]/10 pt-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#102A43]/15 shadow-sm text-center max-w-3xl mx-auto space-y-4">
            <h4 className="text-2xl font-black text-[#102A43]">
              {isArabic ? "رأيك يهمنا في تطوير أورا (AORA)" : "Your Feedback Matters to AORA"}
            </h4>
            <p className="text-slate-600 text-sm md:text-base font-medium">
              {isArabic 
                ? "نحن نطور هذه المنصة خصيصاً لتكون السند الأفضل لكل طالب فلسطيني. تواصل معنا عبر الواتساب لأي اقتراح أو تعليق!" 
                : "We are developing this platform to be the best support for every Palestinian student. Contact us via WhatsApp for any feedback!"}
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}