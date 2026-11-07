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
      "المسجلون حالياً في الصف الثاني عشر (Grade 12) فقط في مدارس الأونروا (UNRWA)، المدارس الرسمية، أو المدارس الخاصة.",
      "إنجاز شهادة البكالوريا (الثانوية العامة) في صيف 2027.",
      "تقديم امتحان الـ SAT إلزامي (آخر دورة مقبولة هي دورة شهر آذار/مارس).",
      "استيفاء الحد الأدنى من متطلبات الكفاءة في اللغة الإنجليزية.",
      "سجل أكاديمي قوي في الصفوف التاسع والعاشر والحادي عشر (Grade 9 to 11).",
      "إثبات الحاجة المادية (Demonstrate financial need).",
      "المشاركة في خدمة المجتمع والأدوار القيادية تُعتبر ميزة إضافية مهمة."
    ],
    eligibility_en: [
      "Palestinian, Lebanese, or Syrian students residing in Lebanon.",
      "Currently enrolled in Grade 12 only (UNRWA, public, or private schools).",
      "Completing their baccalaureate this summer (2027).",
      "Taking the SAT (mandatory) – The last accepted SAT exam scores is the March session.",
      "Meet the minimum English proficiency requirements.",
      "Strong academic record in Grade 9 to 11.",
      "Demonstrate financial need.",
      "Community service and leadership involvement are considered an advantage."
    ],

    // 🗂️ المجلدات الـ 7 لتجهيز الـ 37 مستنداً
    checklistCategories: [
      { id: "personal", title_ar: "1. الشخصية (Personal)", title_en: "1. Personal" },
      { id: "parents", title_ar: "2. الوالدين (Parents)", title_en: "2. Parents" },
      { id: "household", title_ar: "3. الأسرة والممتلكات (Household)", title_en: "3. Household" },
      { id: "education", title_ar: "4. الدراسية (Education)", title_en: "4. Education" },
      { id: "proficiency", title_ar: "5. المقالات واللغة (Proficiency)", title_en: "5. Proficiency" },
      { id: "scholarships", title_ar: "6. المنح الأخرى (Scholarships)", title_en: "6. Scholarships" },
      { id: "university", title_ar: "7. الجامعات والامتحانات (University)", title_en: "7. University" }
    ],

    // ✅ الـ 37 مستنداً بالتفصيل
    checklist: [
      // 1. Personal (5)
      { id: "p1", categoryId: "personal", title_ar: "صورة الهوية الشخصية (واضحة للوجه الأول والثاني)", title_en: "Personal ID Card (Clear front & back scan)" },
      { id: "p2", categoryId: "personal", title_ar: "صورة شخصية رسمية (وجه واضح بخلفية بيضاء)", title_en: "Passport-style Personal Photo (White background)" },
      { id: "p3", categoryId: "personal", title_ar: "إثبات الجنسية الإضافية (إن وجدت لديك جنسية ثانية)", title_en: "Proof of Additional Nationality (If applicable)" },
      { id: "p4", categoryId: "personal", title_ar: "كرت تسجيل الأونروا - كرت الإعاشة (UNRWA Card إن وجد)", title_en: "UNRWA Registration Card (If applicable)" },
      { id: "p5", categoryId: "personal", title_ar: "إفادة سكن من المختار (إذا كنت تسكن في المخيم)", title_en: "Residence Certificate from Mukhtar (If living in a camp)" },

      // 2. Parents (6)
      { id: "pa1", categoryId: "parents", title_ar: "صورة هوية الأب (واضحة للوجهين)", title_en: "Father's ID Card (Clear both sides)" },
      { id: "pa2", categoryId: "parents", title_ar: "كشف راتب الأب (Pay Slip) موقع ومختوم من جهة العمل (إن كان موظفاً)", title_en: "Father's Signed Pay Slip from Employer (If employed)" },
      { id: "pa3", categoryId: "parents", title_ar: "صورة هوية الأم (واضحة للوجهين)", title_en: "Mother's ID Card (Clear both sides)" },
      { id: "pa4", categoryId: "parents", title_ar: "كشف راتب الأم (Pay Slip) موقع ومختوم من جهة العمل (إن كانت موظفة)", title_en: "Mother's Signed Pay Slip from Employer (If employed)" },
      { id: "pa5", categoryId: "parents", title_ar: "معلومات التقاعد والدخل السنوي للوالدين (إن انطبق)", title_en: "Retirement & Annual Income Details (If applicable)" },
      { id: "pa6", categoryId: "parents", title_ar: "بيانات الممتلكات والعقارات وتقدير قيمتها المالية", title_en: "Property & Real Estate Details with Estimated Value" },

      // 3. Household (5)
      { id: "h1", categoryId: "household", title_ar: "إخراج قيد عائلي / بطاقة تسجيل العائلة (Family Registration Card)", title_en: "Family Registration Card" },
      { id: "h2", categoryId: "household", title_ar: "كشف حساب بنكي واضح (Bank Statement)", title_en: "Clear Bank Statement" },
      { id: "h3", categoryId: "household", title_ar: "دفتر تسجيل السيارة (Car Registration Card - إن وجدت)", title_en: "Car Registration Card (If owned)" },
      { id: "h4", categoryId: "household", title_ar: "عقد إيجار المنزل (إن كان مستأجراً) أو إثبات الملكية (إن كان ملكاً)", title_en: "Rental Contract (if rented) or Ownership Certificate (if owned)" },
      { id: "h5", categoryId: "household", title_ar: "إفادة السكن للأسرة (إذا كنت مقيماً في المخيم)", title_en: "Household Residence Certificate (If residing in a camp)" },

      // 4. Education (8)
      { id: "e1", categoryId: "education", title_ar: "شهادة الصف التاسع الرسمية (Grade 9 Transcript)", title_en: "Official Grade 9 Transcript" },
      { id: "e2", categoryId: "education", title_ar: "شهادة الصف العاشر الرسمية (Grade 10 Transcript)", title_en: "Official Grade 10 Transcript" },
      { id: "e3", categoryId: "education", title_ar: "شهادة الصف الحادي عشر الرسمية (Grade 11 Transcript)", title_en: "Official Grade 11 Transcript" },
      { id: "e4", categoryId: "education", title_ar: "التأكد من وجود ختم وتوقيع رسمي على جميع الشهادات المدرسية", title_en: "Verify Official Stamp & Signature on All School Certificates" },
      { id: "e5", categoryId: "education", title_ar: "كشف العلامات التفصيلي (المعدل النهائي وعلامة اللغة الإنجليزية)", title_en: "Detailed Grade Transcript (Final Average & English Grade)" },
      { id: "e6", categoryId: "education", title_ar: "إثبات التسجيل الدراسي الحالي في الصف الثاني عشر (Grade 12)", title_en: "Current Grade 12 Enrollment Proof" },
      { id: "e7", categoryId: "education", title_ar: "بيان الرسوم الدراسية (أو Enrollment Certificate لطلاب مدارس الأونروا)", title_en: "Tuition Fee Statement (or Enrollment Certificate for UNRWA schools)" },
      { id: "e8", categoryId: "education", title_ar: "إثبات الخصم المدرسي أو المنحة المدرسية مع ذكر النسبة والسبب (إن وجد)", title_en: "School Discount/Scholarship Proof with Percentage & Reason (If any)" },

      // 5. Proficiency (4)
      { id: "pr1", categoryId: "proficiency", title_ar: "مقالات المنحة (Essays) مكتوبة بجهدك الشخصي بصيغة Word Document", title_en: "Personal Essays saved as Word Document (.docx) - No AI/Plagiarism" },
      { id: "pr2", categoryId: "proficiency", title_ar: "الفيديو الشخصي المطلوب (صورة واضحة وصوت مسموع ضمن المدة المحددة)", title_en: "Required Personal Video (Clear video & audio within time limit)" },
      { id: "pr3", categoryId: "proficiency", title_ar: "إثبات امتحان اللغة الإنجليزية IELTS أو TOEFL (إن كان مطلوباً منك)", title_en: "IELTS or TOEFL Proof (If required)" },
      { id: "pr4", categoryId: "proficiency", title_ar: "رقم TRF لنتيجة IELTS أو رقم النتيجة الرسمي لـ TOEFL", title_en: "IELTS TRF Number or Official TOEFL Score Number" },

      // 6. Scholarships (4)
      { id: "s1", categoryId: "scholarships", title_ar: "إثبات التقديم على المنح الأخرى مع إيصالات التأكيد (إن قدمت)", title_en: "Proof of Application to Other Scholarships with Receipts (If applied)" },
      { id: "s2", categoryId: "scholarships", title_ar: "أو مستند يوضح عدم التقديم على منح أخرى مع ذكر السبب (إلزامي في الحالتين)", title_en: "OR Written Statement Explaining Why You Didn't Apply to Other Scholarships" },
      { id: "s3", categoryId: "scholarships", title_ar: "إثباتات القبول في المنح الخارجية أو الخاصة (إن وجدت)", title_en: "Acceptance Proofs from Other Scholarships (If received)" },
      { id: "s4", categoryId: "scholarships", title_ar: "إثبات المساعدة المالية الجامعية (Financial Aid Proof) بعد القبول", title_en: "University Financial Aid Proof (Upon receiving admission)" },

      // 7. University (5)
      { id: "u1", categoryId: "university", title_ar: "نسخة وتفاصيل كل طلب جامعة قدمت إليه (الاسم، التخصص، وتاريخ التقديم)", title_en: "Copy & Details of Every University Application (Name, Major, Date)" },
      { id: "u2", categoryId: "university", title_ar: "تحديد 3 تخصصات جامعية مرتبة حسب الأولوية + حسم قرار السفر أو الدراسة محلياً", title_en: "Select Top 3 Majors in Order + Final Decision on Studying Locally or Abroad" },
      { id: "u3", categoryId: "university", title_ar: "خطابات القبول الجامعي (PDF أو تحويل الإيميل الرسمي عبر خاصية Request)", title_en: "University Acceptance Letters (PDF or Forwarded Email via Request)" },
      { id: "u4", categoryId: "university", title_ar: "إثبات نتائج الامتحانات الرسمية أو رقم بطاقة الترشيح عند صدورها", title_en: "Official Exam Results PDF or Nomination Card Number" },
      { id: "u5", categoryId: "university", title_ar: "إيصال إرسال علامة الـ SAT رسمياً عبر College Board إلى Unite Lebanon Youth Project", title_en: "Official SAT Score Send Receipt via College Board to ULYP" }
    ],

    // 🚀 المراحل الـ 6 للتحضير العملي
    prepStages: [
      {
        step: 1,
        title_ar: "المرحلة الأولى: جمع الأوراق الرسمية",
        title_en: "Stage 1: Gathering Official Documents",
        desc_ar: "أنشئ مجلداً على جهازك باسم ULYP Scholarship واجمع الهويات (الوجهين)، الصور الشخصية بخلفية بيضاء، كشوف الرواتب الموقعة، إخراج القيد، إثبات السكن، وشهادات الصفوف 9 و10 و11 المختومة.",
        desc_en: "Create a folder named ULYP Scholarship and gather IDs (both sides), white-background photos, signed pay slips, family registration, residence proof, and stamped Grades 9–11 transcripts."
      },
      {
        step: 2,
        title_ar: "المرحلة الثانية: تجميع الحسابات والمعلومات المالية",
        title_en: "Stage 2: Family & Annual Financial Calculations",
        desc_ar: "اجلس مع عائلتك واحسب الدخل السنوي (الراتب الشهري × 12)، مساهمة الإخوة العاملين، قيمة الممتلكات، والمصاريف السنوية للبيت (إيجار، فواتير، طعام، طبابة، مواصلات) بدقة.",
        desc_en: "Sit with your family to calculate annual income (monthly × 12), working siblings' contributions, property values, and exact annual household expenses."
      },
      {
        step: 3,
        title_ar: "المرحلة الثالثة: التحضير الأكاديمي واختيار التخصصات",
        title_en: "Stage 3: Academic Prep & Choosing 3 Majors",
        desc_ar: "جهّز معدلاتك النهائية وعلامة الإنجليزي، بيان الأقساط أو إفادة الأونروا، ورتّب 3 تخصصات جامعية حسب رغبتك، واحسم قرارك النهائي بشأن الدراسة محلياً أو السفر للخارج.",
        desc_en: "Prepare your final averages, English grade, tuition statement, rank your top 3 university majors, and finalize your decision regarding studying abroad."
      },
      {
        step: 4,
        title_ar: "المرحلة الرابعة: كتابة المقالات (Essays) وتصوير الفيديو",
        title_en: "Stage 4: Writing Essays & Recording Video",
        desc_ar: "اكتب مقالاتك بنفسك في ملف Word (يُمنع منعاً باتاً استخدام ChatGPT أو النسخ Plagiarism)، وصوّر الفيديو المطلوب في مكان هادئ بإضاءة واضحة وصوت مسموع ضمن الوقت المحدد.",
        desc_en: "Write your essays yourself in a Word document (ChatGPT and plagiarism are strictly prohibited), and record a clear, audible video within the required duration."
      },
      {
        step: 5,
        title_ar: "المرحلة الخامسة: ترتيب الملفات وإرسال الـ SAT",
        title_en: "Stage 5: Organizing Files & Sending SAT Scores",
        desc_ar: "سمِّ جميع الملفات الممسوحة ضوئياً بأسماء إنجليزية واضحة، وأرسل نتائج الـ SAT من حساب College Board إلى Unite Lebanon Youth Project واحتفظ بإيصال التأكيد.",
        desc_en: "Rename all scanned files clearly in English, send your SAT scores via College Board to Unite Lebanon Youth Project, and save the confirmation receipt."
      },
      {
        step: 6,
        title_ar: "المرحلة السادسة: التعبئة دفعة واحدة ومتابعة القبولات",
        title_en: "Stage 6: One-Go Submission & University Tracking",
        desc_ar: "بعد اكتمال جاهزيتك 100%، افتح بوابة ULYP وعبّئ الطلب بثقة، ثم تابع رفع طلبات الجامعات والمنح الأخرى وخطابات القبول أولاً بأول لتتحول حالتها من Awaiting إلى Pending.",
        desc_en: "Once 100% ready, fill out the ULYP portal smoothly, then track university and external scholarship applications so their status updates from Awaiting to Pending."
      }
    ],

    // 📚 أقسام الدليل التفصيلية (تفتح وتغلق بأسلوب الأكورديون العصري)
    guideSections: [
      {
        id: "financial-calc",
        badge_ar: "حسابات العائلة",
        badge_en: "Family Finances",
        title_ar: "المعلومات المالية السنوية التي يجب تجهيزها كتابةً",
        title_en: "Annual Financial Information to Prepare in Writing",
        description_ar: "المنصة لا تطلب رفع أوراق فقط، بل تطلب إدخال أرقام سنوية دقيقة (اضرب المصروف أو الدخل الشهري × 12):",
        description_en: "The portal requires entering exact annual figures (multiply monthly income or expenses by 12):",
        items_ar: [
          "بيانات الوالدين الكاملة بالإنجليزية: المهنة، مكان العمل، الدخل السنوي مع تحديد العملة، أو تفاصيل التقاعد (آخر وظيفة وقيمة المعاش).",
          "معلومات الإخوة والأخوات: مكان الدراسة أو العمل، هل حصل أحدهم على منحة ULYP سابقاً، ومقدار مساهمة الأخ العامل في مصاريف البيت.",
          "المصاريف السنوية للأسرة: السكن (الإيجار السنوي وعدد غرف النوم)، الهواتف، الكهرباء والمياه، الإنترنت، الطعام والبقالة، الملابس، المنظفات، المواصلات، الأدوية والفحوصات الطبية.",
          "الممتلكات والعقارات: توضيح ما يملكه الوالدان من منازل أو أراضٍ أو بساتين مع تقدير قيمتها.",
          "المساعدات المالية الخارجية (Financial Assistance): أي دعم مالي من الأقارب (كالعم أو الجد) أو من المؤسسات مثل UNRWA مع ذكر المبلغ وطبيعة المساعدة."
        ],
        items_en: [
          "Parents' full details in English: occupation, workplace, annual income & currency, or retirement details.",
          "Siblings' details: school/university or job, past ULYP scholarship status, and financial contribution to the household.",
          "Annual household expenses: housing/rent, number of bedrooms, phones, utilities, internet, groceries, clothing, transport, and medical costs.",
          "Real estate & assets: houses, land, or orchards owned by parents with estimated values.",
          "External Financial Assistance: support from relatives (uncle, grandfather) or organizations like UNRWA with amounts."
        ]
      },
      {
        id: "academic-majors",
        badge_ar: "الدراسة والجامعات",
        badge_en: "Academics & Universities",
        title_ar: "اختيار التخصصات الـ 3 ومتابعة طلبات الجامعات والمنح",
        title_en: "Selecting 3 Majors & Tracking University/Scholarship Applications",
        description_ar: "خطوات حاسمة تتعلق بقرارك الأكاديمي وطريقة توثيق القبولات الجامعية والمنح الخارجية:",
        description_en: "Crucial steps regarding your academic choices and documenting university and scholarship admissions:",
        items_ar: [
          "اختيار 3 تخصصات جامعية بالترتيب حسب الأفضلية (الخيار الأول، البديل الثاني، الخيار الثالث) مع مراعاة التخصصات المدعومة من المنحة.",
          "قرار السفر للخارج: إذا اخترت الدراسة في الخارج (السفر)، فهذا القرار نهائي ولا يمكن تغييره لاحقاً وفقاً للدليل.",
          "متابعة الجامعات: سواء رشحتك ULYP لجامعة أو قدمت بمفردك، يجب تسجيل اسم الجامعة، التخصص، وتاريخ التقديم، ثم رفع القبول PDF أو تحويل الإيميل الرسمي عبر خاصية Request.",
          "المنح الخارجية (Global مثل MAF, Tomooh, YTB) والخاصة بالجامعات (Specific مثل MEPI, USAID, Mastercard): يجب رفع إثبات التقديم وإيصال التأكيد.",
          "إلزامي في قسم Media: حتى لو لم تتقدم لأي منحة أخرى، يجب رفع مستند رسمي يوضح عدم التقديم مع ذكر السبب."
        ],
        items_en: [
          "Choose up to 3 majors in order of preference aligned with ULYP-supported fields.",
          "Travel Decision: Choosing to study abroad is final and cannot be changed later according to the guide.",
          "University Tracking: Log every university application (ULYP-nominated or self-applied) and upload PDF acceptance or forward the official email via Request.",
          "Global (MAF, Tomooh, YTB) & Specific (MEPI, USAID, Mastercard) Scholarships: Upload proof of application and confirmation receipts.",
          "Mandatory Media Requirement: If you did not apply to other scholarships, you must upload a document stating that along with the reason."
        ]
      },
      {
        id: "sat-essays",
        badge_ar: "المقالات والامتحانات",
        badge_en: "Essays, SAT & English",
        title_ar: "تعليمات المقالات (Essays)، الفيديو، وإرسال علامات SAT و IELTS/TOEFL",
        title_en: "Instructions for Essays, Video, SAT & IELTS/TOEFL Submission",
        description_ar: "تفاصيل قسم الكفاءة (Proficiency) وإرسال النتائج الرسمية بدون أخطاء:",
        description_en: "Details for the Proficiency section and official test score submissions:",
        items_ar: [
          "المقالات (Essays): تُرفع بصيغة Word Document فقط، ويُمنع منعاً باتاً استخدام ChatGPT أو الانتحال (Plagiarism).",
          "الفيديو الشخصي: التزم بالمدة المحددة في البوابة وتأكد من وضوح الصورة ونقاء الصوت.",
          "خطوات إرسال الـ SAT: ادخل إلى حساب College Board -> افتح My SAT -> صفحة إرسال النتائج -> ابحث عن اسم الجهة Unite Lebanon Youth Project -> أرسل النتيجة واحتفظ بإيصال التأكيد.",
          "إثبات اللغة الإنجليزية: لـ IELTS أدخل رقم TRF من بوابة المختبرين، ولـ TOEFL أدخل رقم النتيجة الظاهر في حسابك ثم اضغط Submit."
        ],
        items_en: [
          "Essays: Must be uploaded as a Word Document. Using ChatGPT or plagiarism is strictly forbidden.",
          "Personal Video: Adhere to the portal's time limit with clear video and audible sound.",
          "SAT Score Send: Log into College Board -> My SAT -> Score Send -> Search 'Unite Lebanon Youth Project' -> Submit and save the confirmation receipt.",
          "English Proof: For IELTS enter your TRF number; for TOEFL enter the score ID from your account and click Submit."
        ],
        warning_ar: "تنبيه مهم: لا تعتمد مواعيد الـ SAT القديمة المذكورة في أمثلة الدليل (مارس 2025)؛ آخر دورة SAT مقبولة لهذا الموسم هي دورة شهر آذار/مارس قبل موعد إغلاق المنحة في 10 نيسان 2027.",
        warning_en: "Important Note: Ignore outdated 2025 SAT dates shown in guide screenshots; the last accepted SAT session is March prior to the April 10, 2027 deadline."
      }
    ]
  },
  {
    id: "default-1",
    isVerified: true,
    openingDate: "2026-11-01",
    deadlineDate: "2026-12-20",
    title_ar: "منح الجامعة الأميركية في بيروت (SAUB)",
    title_en: "AUB Financial Aid & Merit Scholarships (SAUB)",
    provider_ar: "الجامعة الأميركية في بيروت (AUB)",
    provider_en: "American University of Beirut (AUB)",
    location_ar: "لبنان",
    location_en: "Lebanon",
    degree_levels: ["Bachelor", "Master"],
    studyScope: "local",
    officialLink: "https://www.aub.edu.lb/admissions/Pages/Deadlines.aspx",
    summary_ar: "برنامج المساعدات المالية ومنح التفوق في الجامعة الأميركية في بيروت لدعم الطلاب المتميزين أكاديمياً.",
    summary_en: "Financial aid and merit scholarships at the American University of Beirut supporting academically distinguished students.",
    checklist: [
      { id: "aub-1", title_ar: "بطاقة الهوية أو جواز السفر", title_en: "ID Card or Passport" },
      { id: "aub-2", title_ar: "كشوف العلامات المدرسية للسنوات الثلاث الأخيرة", title_en: "School Transcripts (Last 3 Years)" },
      { id: "aub-3", title_ar: "نتيجة امتحان الـ SAT وإثبات الكفاءة باللغة الإنجليزية", title_en: "SAT Scores & English Proficiency" },
      { id: "aub-4", title_ar: "مستندات إثبات الدخل والوضع المالي للأسرة", title_en: "Family Income & Financial Aid Documents" }
    ]
  },
  {
    id: "default-3",
    isVerified: true,
    openingDate: "2026-09-01",
    deadlineDate: "2026-11-12",
    title_ar: "منحة أورا للتميز الأكاديمي",
    title_en: "AORA Academic Excellence Scholarship",
    provider_ar: "مؤسسة أورا التعليمية",
    provider_en: "AORA Educational Foundation",
    location_ar: "ألمانيا",
    location_en: "Germany",
    degree_levels: ["Bachelor", "Master"],
    studyScope: "abroad",
    officialLink: "https://www.daad.de",
    summary_ar: "منحة مخصصة لدعم الطلبة المتفوقين الراغبين باستكمال دراستهم الجامعية في الجامعات الألمانية.",
    summary_en: "A scholarship dedicated to supporting outstanding students wishing to pursue their university studies in Germany."
  }
];

export async function fetchScholarships(): Promise<Scholarship[]> {
  return sortScholarships(SCHOLARSHIPS_DATA);
}