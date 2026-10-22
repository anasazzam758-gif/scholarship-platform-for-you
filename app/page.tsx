import Navbar from "@/components/Navbar";
import { getScholarshipStatus, sortScholarships } from "@/lib/scholarships";

export default function Home() {
  // 1. DUMMY DATA: We create 3 fake scholarships to test our logic
  const fakeScholarships = [
    {
      id: "1",
      name: "منحة مغلقة (Closed)",
      isVerified: true,
      openingDate: "2026-01-01",
      deadlineDate: "2026-02-01", // In the past!
    },
    {
      id: "2",
      name: "منحة تنتهي قريباً (Closing Soon)",
      isVerified: true,
      openingDate: "2026-09-01",
      // Set to 3 days from today (assuming today is late Oct 2026)
      deadlineDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), 
    },
    {
      id: "3",
      name: "منحة قادمة (Upcoming)",
      isVerified: true,
      // Set to open next month
      openingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), 
      deadlineDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
    }
  ];

  // 2. USE OUR ENGINE: Sort them automatically
  const sortedScholarships = sortScholarships(fakeScholarships);

  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 mt-10">
        <h2 className="text-2xl font-bold mb-6">
          اختبار محرك المنح | Scholarship Engine Test
        </h2>

        <div className="space-y-4">
          {/* 3. DISPLAY THEM: Loop through the sorted array */}
          {sortedScholarships.map((scholarship) => {
            const status = getScholarshipStatus(scholarship);
            
            return (
              <div key={scholarship.id} className="p-4 border rounded-lg bg-white dark:bg-slate-800 dark:border-slate-700 flex justify-between items-center">
                <h3 className="font-bold text-lg">{scholarship.name}</h3>
                
                {/* 4. SHOW BADGE BASED ON STATUS */}
                <span className={`px-3 py-1 rounded-full text-sm font-bold
                  ${status === 'closing_soon' ? 'bg-red-100 text-red-700' : ''}
                  ${status === 'upcoming' ? 'bg-blue-100 text-blue-700' : ''}
                  ${status === 'closed' ? 'bg-gray-100 text-gray-700' : ''}
                `}>
                  {status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}