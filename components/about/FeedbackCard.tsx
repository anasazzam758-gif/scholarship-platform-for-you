"use client";

import { Star, Calendar } from "lucide-react";

interface FeedbackCardProps {
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export default function FeedbackCard({ name, comment, rating, date }: FeedbackCardProps) {
  return (
    <div className="bg-[#F7F5EF] p-6 rounded-2xl border border-[#102A43]/10 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-black text-[#102A43] text-base">{name}</h4>
          <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
            <Calendar size={12} /> {date}
          </span>
        </div>
        {/* النجوم ⭐ من 1 إلى 5 */}
        <div className="flex items-center gap-1 text-[#E9B44C]">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-[#E9B44C]" />
          ))}
        </div>
      </div>
      <p className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
        "{comment}"
      </p>
    </div>
  );
}