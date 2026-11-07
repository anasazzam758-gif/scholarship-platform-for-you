// lib/scholarshipsData.ts
import { Scholarship, sortScholarships } from "./scholarships";

export const SCHOLARSHIPS_DATA: Scholarship[] = [
  {
    id: "ulyp-bridge-2027",
    isFeatured: true,
    isVerified: true,
    openingDate: "2026-10-15",
    deadlineDate: "2027-04-10",
    title_ar: "منحة برنامج بريدج الجامعية (ULYP - BRIDGE)",
    title_en: "ULYP Bridge Undergraduate Scholarship Program",
    provider_ar: "مشروع توحيد الشباب اللبناني (ULYP)",
    provider_en: "Unite Lebanon Youth Project (ULYP)",
    location_ar: "لبنان والخارج",
    location_en: "Lebanon & Abroad",
    degree_levels: ["Bachelor"],
    studyScope: "both",
    officialLink: "https://studentsulyp.org/bridge/home",

    summary_ar:
      "منحة تنافسية شاملة مبنية على التفوق الأكاديمي، الحاجة المادية، والروح القيادية، مقدمة حصرياً من مؤسسة ULYP لربط طلاب الصف الثاني عشر (البكالوريا) في لبنان بمنح جامعية كاملة أو جزئية لمرحلة البكالوريوس داخل لبنان وخارجه.",
    summary_en:
      "A comprehensive merit, need, and leadership-based scholarship offered exclusively by ULYP that connects Grade 12 students in Lebanon to undergraduate scholarships in Lebanon and abroad.",

    eligibility_ar: [
      "الطلاب الفلسطينيون، اللبنانيون، أو السوريون المقيمون في لبنان.",
      "المسجلون حالياً في الصف الثاني عشر (Grade 12) فقط.",
      "إنجاز شهادة البكالوريا (الثانوية العامة) في صيف 2027.",
      "تقديم امتحان الـ SAT إلزامي (آخر دورة مقبولة هي دورة شهر آذار/مارس).",
      "استيفاء الحد الأدنى من متطلبات الكفاءة في اللغة الإنجليزية.",
      "سجل أكاديمي قوي في الصفوف التاسع والعاشر والحادي عشر (Grade 9 to 11).",
      "إثبات الحاجة المادية (Demonstrate financial need)."
    ],
    eligibility_en: [
      "Palestinian, Lebanese, or Syrian students residing in Lebanon.",
      "Currently enrolled in Grade 12 only.",
      "Completing their baccalaureate this summer (2027).",
      "Taking the SAT (mandatory) – Last accepted session is March.",
      "Meet the minimum English proficiency requirements.",
      "Strong academic record in Grade 9 to 11.",
      "Demonstrate financial need."
    ],

    // 🗂️ المجلدات لتجهيز المستندات الرسمية فقط
    checklistCategories: [
      { id: "personal", title_ar: "1. الشخصية (Personal)", title_en: "1. Personal" },
      { id: "parents", title_ar: "2. الوالدين (Parents)", title_en: "2. Parents" },
      { id: "household", title_ar: "3. الأسرة والممتلكات (Household)", title_en: "3. Household" },
      { id: "education", title_ar: "4. الدراسية (Education)", title_en: "4. Education" },
      { id: "scholarships", title_ar: "5. المنح الأخرى (Scholarships)", title_en: "5. Scholarships" },
      { id: "university", title_ar: "6. الجامعات والامتحانات (University)", title_en: "6. University" }
    ],

    // ✅ المستندات الورقية الرسمية فقط
    checklist: [
      // 1. Personal
      { id: "p1", categoryId: "personal", title_ar: "صورة الهوية الشخصية (واضحة للوجه الأول والثاني)", title_en: "Personal ID Card (Clear front & back scan)" },
      { id: "p2", categoryId: "personal", title_ar: "صورة شخصية رسمية (وجه واضح بخلفية بيضاء)", title_en: "Passport-style Personal Photo (White background)" },
      { id: "p4", categoryId: "personal", title_ar: "كرت تسجيل الأونروا - كرت الإعاشة (UNRWA Card إن وجد)", title_en: "UNRWA Registration Card (If applicable)" },
      { id: "p5", categoryId: "personal", title_ar: "إفادة سكن من المختار (إذا كنت تسكن في المخيم)", title_en: "Residence Certificate from Mukhtar (If living in a camp)" },

      // 2. Parents
      { id: "pa1", categoryId: "parents", title_ar: "صورة هوية الأب (واضحة للوجهين)", title_en: "Father's ID Card (Clear both sides)" },
      { id: "pa2", categoryId: "parents", title_ar: "كشف راتب الأب (Pay Slip) موقع ومختوم", title_en: "Father's Signed Pay Slip from Employer" },
      { id: "pa3", categoryId: "parents", title_ar: "صورة هوية الأم (واضحة للوجهين)", title_en: "Mother's ID Card (Clear both sides)" },
      { id: "pa4", categoryId: "parents", title_ar: "كشف راتب الأم (Pay Slip) موقع ومختوم", title_en: "Mother's Signed Pay Slip from Employer" },

      // 3. Household
      { id: "h1", categoryId: "household", title_ar: "إخراج قيد عائلي / بطاقة تسجيل العائلة", title_en: "Family Registration Card" },
      { id: "h2", categoryId: "household", title_ar: "كشف حساب بنكي واضح (Bank Statement)", title_en: "Clear Bank Statement" },
      { id: "h3", categoryId: "household", title_ar: "دفتر تسجيل السيارة (إن وجدت)", title_en: "Car Registration Card (If owned)" },
      { id: "h4", categoryId: "household", title_ar: "عقد إيجار المنزل أو إثبات الملكية", title_en: "Rental Contract or Ownership Certificate" },

      // 4. Education
      { id: "e1", categoryId: "education", title_ar: "شهادة الصف التاسع الرسمية (Grade 9 Transcript)", title_en: "Official Grade 9 Transcript" },
      { id: "e2", categoryId: "education", title_ar: "شهادة الصف العاشر الرسمية (Grade 10 Transcript)", title_en: "Official Grade 10 Transcript" },
      { id: "e3", categoryId: "education", title_ar: "شهادة الصف الحادي عشر الرسمية (Grade 11 Transcript)", title_en: "Official Grade 11 Transcript" },
      { id: "e5", categoryId: "education", title_ar: "كشف العلامات التفصيلي (المعدل وعلامة الإنجليزي)", title_en: "Detailed Grade Transcript (Final Average & English Grade)" },
      { id: "e6", categoryId: "education", title_ar: "إثبات التسجيل الدراسي الحالي في الصف الثاني عشر", title_en: "Current Grade 12 Enrollment Proof" },
      { id: "e7", categoryId: "education", title_ar: "بيان الرسوم الدراسية أو إفادة الأونروا", title_en: "Tuition Fee Statement or UNRWA Enrollment" },

      // 5. Scholarships
      { id: "s1", categoryId: "scholarships", title_ar: "إثبات التقديم على المنح الأخرى (إن قدمت)", title_en: "Proof of Application to Other Scholarships" },
      { id: "s3", categoryId: "scholarships", title_ar: "إثباتات القبول في المنح الخارجية (إن وجدت)", title_en: "Acceptance Proofs from Other Scholarships" },

      // 6. University
      { id: "u3", categoryId: "university", title_ar: "خطابات القبول الجامعي (Acceptance Letters)", title_en: "University Acceptance Letters" },
      { id: "u4", categoryId: "university", title_ar: "إثبات نتائج الامتحانات الرسمية أو رقم الترشيح", title_en: "Official Exam Results PDF or Nomination Card" },
      { id: "u5", categoryId: "university", title_ar: "إيصال إرسال علامة الـ SAT رسمياً إلى ULYP", title_en: "Official SAT Score Send Receipt to ULYP" }
    ],

    // المراحل والنصائح
    prepStages: [
      { step: 1, title_ar: "المرحلة الأولى: جمع الأوراق الرسمية", title_en: "Stage 1: Gathering Official Documents", desc_ar: "اجمع الهويات وإخراج القيد والشهادات المدرسية وضعها في ملف واحد.", desc_en: "Gather IDs, family registration, and school certificates." },
      { step: 2, title_ar: "المرحلة الثانية: تجهيز الحسابات", title_en: "Stage 2: Financial Calculations", desc_ar: "احسب الدخل السنوي للأسرة والمصاريف بدقة تمهيداً لتعبئتها في الطلب.", desc_en: "Calculate annual family income and exact expenses." },
      { step: 3, title_ar: "المرحلة الثالثة: اختيار التخصصات", title_en: "Stage 3: Academic Prep", desc_ar: "حدد 3 تخصصات جامعية ترغب بدراستها ورتبها حسب الأولوية.", desc_en: "Choose and rank 3 university majors." },
      { step: 4, title_ar: "المرحلة الرابعة: المقالات والفيديو", title_en: "Stage 4: Essays & Video", desc_ar: "اكتب مقالاتك بجهدك الشخصي وصور فيديو التقديم حسب شروط المنحة (التفاصيل داخل بوابة التقديم).", desc_en: "Write your essays and record the required personal video as instructed in the portal." }
    ],
    guideSections: []
  },
  {
    id: "mepi-tl-2027",
    isVerified: true,
    openingDate: "2026-08-01",
    deadlineDate: "2026-11-18",
    title_ar: "منحة قادة الغد (Tomorrow’s Leaders)",
    title_en: "Tomorrow’s Leaders Scholarship (MEPI TL)",
    provider_ar: "وزارة الخارجية الأمريكية – MEPI",
    provider_en: "U.S. Department of State – MEPI",
    location_ar: "لبنان ومصر (AUB, LAU, AUC)",
    location_en: "Lebanon & Egypt (AUB, LAU, AUC)",
    degree_levels: ["Bachelor"],
    studyScope: "abroad",
    officialLink: "https://www.tomorrowsleadersprogram.org/",
    
    summary_ar:
      "منحة دراسية ممولة بالكامل وبرنامج تطوير قيادي مقدم من وزارة الخارجية الأمريكية (MEPI) للطلاب المتميزين من منطقة الشرق الأوسط وشمال أفريقيا للدراسة في الجامعة الأميركية في بيروت (AUB)، الجامعة اللبنانية الأميركية (LAU)، أو الجامعة الأميركية بالقاهرة (AUC). تشمل التغطية الرسوم، السكن، تذاكر السفر، التأمين، راتب شهري، ولابتوب.",
    summary_en:
      "A fully funded undergraduate scholarship and leadership development program by the US Department of State (MEPI) for outstanding students from the MENA region to study at AUB, LAU, or AUC. The scholarship covers tuition, housing, travel, insurance, a monthly stipend, and a laptop.",
      
    eligibility_ar: [
      "طلاب الصف الثالث الثانوي حالياً أو خريجو الثانوية لعام 2026 (يُقبل خريجو 2025 من سوريا، الضفة الغربية، الطلاب الفلسطينيون في دول ثالثة، اليمن، العراق، وليبيا).",
      "أن يكون المتقدم من الدول المؤهلة (الجزائر، مصر، العراق، الأردن، لبنان، ليبيا، المغرب، سوريا، تونس، الضفة الغربية، والطلاب الفلسطينيون المقيمون في دولة ثالثة).",
      "سجل أكاديمي قوي (معدل 80% أو أعلى كمعيار عام).",
      "إجادة اللغة الإنجليزية وامتلاك إمكانات قيادية ونضج وقدرة على التكيف.",
      "الاستعداد لبدء الدراسة الجامعية بدوام كامل في أغسطس 2027.",
      "المواطنون الأمريكيون والمقيمون الدائمون قانونياً في الولايات المتحدة (Green Card) غير مؤهلين."
    ],
    eligibility_en: [
      "Current high school seniors or 2026 graduates (2025 graduates from Syria, West Bank, Palestinian students in a third country, Yemen, Iraq, and Libya are also eligible).",
      "Citizen of an eligible MENA country (Algeria, Egypt, Iraq, Jordan, Lebanon, Libya, Morocco, Syria, Tunisia, West Bank, and Palestinian students residing in a third country).",
      "Strong academic record (generally 80% or above).",
      "English proficiency and demonstrated leadership potential, maturity, and adaptability.",
      "Ability to travel and start studies in August 2027.",
      "U.S. citizens and permanent residents are ineligible."
    ]
  }
];

export async function fetchScholarships(): Promise<Scholarship[]> {
  return sortScholarships(SCHOLARSHIPS_DATA);
}