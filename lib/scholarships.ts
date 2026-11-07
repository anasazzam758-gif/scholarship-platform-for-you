// lib/scholarships.ts

export type ScholarshipStatus = 'open' | 'closing_soon' | 'upcoming' | 'closed' | 'needs_verification';

export interface ChecklistDocument {
  id: string;
  title_ar: string;
  title_en: string;
  note_ar?: string;
  note_en?: string;
  categoryId?: string;
}

export interface ChecklistCategory {
  id: string;
  title_ar: string;
  title_en: string;
  iconName?: string;
}

export interface PrepStage {
  step: number;
  title_ar: string;
  title_en: string;
  desc_ar: string;
  desc_en: string;
}

export interface GuideSection {
  id: string;
  badge_ar: string;
  badge_en: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  items_ar: string[];
  items_en: string[];
  warning_ar?: string;
  warning_en?: string;
}

export interface ScholarshipDates {
  id: string;
  isVerified: boolean;
  openingDate: string | null;
  deadlineDate: string | null;
}

export interface Scholarship extends ScholarshipDates {
  title_ar: string;
  title_en: string;
  provider_ar: string;
  provider_en: string;
  location_ar: string;
  location_en: string;
  degree_levels: string[];
  studyScope?: 'abroad' | 'local' | 'both';
  officialLink?: string;
  isFeatured?: boolean; 
  summary_ar?: string;
  summary_en?: string;
  eligibility_ar?: string[];
  eligibility_en?: string[];
  checklistCategories?: ChecklistCategory[];
  checklist?: ChecklistDocument[];
  prepStages?: PrepStage[];
  guideSections?: GuideSection[];
  importantNotes_ar?: string[];
  importantNotes_en?: string[];
  [key: string]: any;
}

export function getScholarshipStatus(scholarship: ScholarshipDates, currentDate: Date = new Date()): ScholarshipStatus {
  if (!scholarship.isVerified || !scholarship.openingDate || !scholarship.deadlineDate) {
    return 'needs_verification';
  }

  const openTime = new Date(scholarship.openingDate).getTime();
  const deadlineTime = new Date(scholarship.deadlineDate).getTime();
  const now = currentDate.getTime();

  if (now < openTime) {
    return 'upcoming';
  }

  if (now > deadlineTime) {
    return 'closed';
  }

  // تم ضبطها هنا لتعمل على 30 يوماً (شهر كامل) أو يمكنك تعديلها إلى 20 يوماً
  const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
  if (deadlineTime - now <= thirtyDaysInMs) {
    return 'closing_soon';
  }

  return 'open';
}

export function sortScholarships<T extends Scholarship>(scholarships: T[]): T[] {
  const statusPriority: Record<ScholarshipStatus, number> = {
    'closing_soon': 1,
    'open': 2,
    'upcoming': 3,
    'closed': 4,
    'needs_verification': 5,
  };

  return [...scholarships].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;

    const statusA = getScholarshipStatus(a);
    const statusB = getScholarshipStatus(b);

    if (statusPriority[statusA] !== statusPriority[statusB]) {
      return statusPriority[statusA] - statusPriority[statusB];
    }

    const timeA = a.deadlineDate ? new Date(a.deadlineDate).getTime() : 0;
    const timeB = b.deadlineDate ? new Date(b.deadlineDate).getTime() : 0;

    if (statusA === 'closed') {
      return timeB - timeA;
    } else {
      return timeA - timeB;
    }
  });
}