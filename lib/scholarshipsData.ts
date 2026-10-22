// lib/scholarshipsData.ts
import { Scholarship } from "./scholarships";

export const SCHOLARSHIPS_DATA: Scholarship[] = [
  {
    id: "1",
    isVerified: true,
    openingDate: "2026-09-01",
    deadlineDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
    title_ar: "منحة أورا للتميز الأكاديمي",
    title_en: "AORA Academic Excellence Scholarship",
    provider_ar: "مؤسسة أورا التعليمية",
    provider_en: "AORA Educational Foundation",
    location_ar: "ألمانيا",
    location_en: "Germany",
    degree_levels: ["Bachelor", "Master"],
    studyScope: "abroad",
  },
  {
    id: "2",
    isVerified: true,
    openingDate: "2026-09-15",
    deadlineDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString(),
    title_ar: "منحة الرواد للطلبة الفلسطينيين",
    title_en: "Pioneers Grant for Palestinian Students",
    provider_ar: "صندوق التعليم الدولي",
    provider_en: "International Education Fund",
    location_ar: "المملكة المتحدة",
    location_en: "United Kingdom",
    degree_levels: ["Bachelor"],
    studyScope: "abroad",
  },
  {
    id: "3",
    isVerified: true,
    openingDate: "2026-10-01",
    deadlineDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
    title_ar: "منحة جسور المستقبل الجامعية",
    title_en: "Future Bridges Undergraduate Grant",
    provider_ar: "تحالف الجامعات الأوروبية",
    provider_en: "European Universities Alliance",
    location_ar: "تركيا وأوروبا",
    location_en: "Turkey & Europe",
    degree_levels: ["Bachelor", "Master"],
    studyScope: "both",
  }
];