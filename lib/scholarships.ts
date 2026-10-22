// lib/scholarships.ts

// 1. Define the exactly 5 statuses we agreed on in the requirements
export type ScholarshipStatus = 'open' | 'closing_soon' | 'upcoming' | 'closed' | 'needs_verification';

// 2. Define what a basic scholarship looks like for our math
export interface ScholarshipDates {
  id: string;
  isVerified: boolean;
  openingDate: string | null;  // Example: "2026-11-01"
  deadlineDate: string | null; // Example: "2026-12-01"
}

// هذا النوع يمثل المنحة الكاملة التي سنعرضها في واجهة المستخدم
export interface Scholarship extends ScholarshipDates {
  title_ar: string;
  title_en: string;
  provider_ar: string;
  provider_en: string;
  location_ar: string;
  location_en: string;
  degree_levels: string[]; 
  studyScope?: 'abroad' | 'local' | 'both'; // 👈 أضفنا هذا السطر لتحديد نطاق الدراسة (خارج, محلي, كلاهما)
}

/**
 * FUNCTION 1: Get Scholarship Status
 * يحدد حالة المنحة بناءً على تاريخ اليوم
 */
export function getScholarshipStatus(scholarship: ScholarshipDates, currentDate: Date = new Date()): ScholarshipStatus {
  // Rule 1: If it's not verified by admin, or missing dates
  if (!scholarship.isVerified || !scholarship.openingDate || !scholarship.deadlineDate) {
    return 'needs_verification';
  }

  const openTime = new Date(scholarship.openingDate).getTime();
  const deadlineTime = new Date(scholarship.deadlineDate).getTime();
  const now = currentDate.getTime();

  // Rule 2: If the opening date hasn't arrived yet
  if (now < openTime) {
    return 'upcoming';
  }

  // Rule 3: If the deadline has already passed
  if (now > deadlineTime) {
    return 'closed';
  }

  // Rule 4: If deadline is within the next 7 days (7 days * 24h * 60m * 60s * 1000ms)
  const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
  if (deadlineTime - now <= sevenDaysInMs) {
    return 'closing_soon';
  }

  // Rule 5: If it's open and more than 7 days left
  return 'open';
}

/**
 * FUNCTION 2: Sort Scholarships
 * يرتب المنح: المفتوح أولاً، ثم القادم، ثم المغلق، ثم غير المؤكد
 */
export function sortScholarships(scholarships: ScholarshipDates[]): ScholarshipDates[] {
  // We assign a priority number to each status to sort them (Lower number = appears first)
  const statusPriority: Record<ScholarshipStatus, number> = {
    'closing_soon': 1, // Most urgent!
    'open': 2,
    'upcoming': 3,
    'closed': 4,
    'needs_verification': 5,
  };

  return [...scholarships].sort((a, b) => {
    const statusA = getScholarshipStatus(a);
    const statusB = getScholarshipStatus(b);

    // 1. Sort by Status Priority first
    if (statusPriority[statusA] !== statusPriority[statusB]) {
      return statusPriority[statusA] - statusPriority[statusB];
    }

    // 2. If both have the SAME status, sort by date
    const timeA = a.deadlineDate ? new Date(a.deadlineDate).getTime() : 0;
    const timeB = b.deadlineDate ? new Date(b.deadlineDate).getTime() : 0;

    if (statusA === 'closed') {
      // For closed: show the MOST RECENTLY closed first (Descending)
      return timeB - timeA;
    } else {
      // For open/upcoming: show the CLOSEST date first (Ascending)
      return timeA - timeB;
    }
  });
}