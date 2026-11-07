"use client";

import { useState, useEffect } from "react";
import { Star, Search, MessageSquareQuote } from "lucide-react";
import FeedbackCard from "./FeedbackCard";
import FeedbackForm from "./FeedbackForm";

interface FeedbackSectionProps {
  isArabic: boolean;
}

interface CommentItem {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
  status: "approved" | "pending";
}

export default function FeedbackSection({ isArabic }: FeedbackSectionProps) {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const loadComments = () => {
    const initialComments: CommentItem[] = [
      {
        id: "1",
        name: isArabic ? "أحمد الفلسطيني" : "Ahmed Palestinian",
        comment: isArabic ? "منصة عظيمة جداً، ساعدتني كثيراً في معرفة مواعيد المنح وكيفية التقديم لها وأنا في الشتات." : "Great platform, really helped me track scholarship deadlines while in diaspora.",
        rating: 5,
        date: "2026-10-20",
        status: "approved"
      },
      {
        id: "2",
        name: isArabic ? "سارة أحمد" : "Sara Ahmed",
        comment: isArabic ? "التصميم فخم ومرتب وسهل الاستخدام، شكراً لكل من ساهم في دعم الطلاب." : "Luxurious and neat design, thank you for supporting students.",
        rating: 5,
        date: "2026-10-21",
        status: "approved"
      }
    ];

    const saved = localStorage.getItem("aora_approved_feedback");
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (e) {
        setComments(initialComments);
      }
    } else {
      setComments(initialComments);
      localStorage.setItem("aora_approved_feedback", JSON.stringify(initialComments));
    }
  };

  useEffect(() => {
    loadComments();
  }, [isArabic]);

  const approvedComments = comments.filter(c => c.status === "approved");
  const filteredComments = approvedComments.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.comment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalReviews = approvedComments.length;
  const averageRating = totalReviews > 0 
    ? (approvedComments.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews).toFixed(1) 
    : "5.0";

  return (
    <section id="feedback" className="bg-white rounded-3xl p-8 md:p-12 border border-[#102A43]/15 shadow-sm space-y-10">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#102A43]/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-[#176B61] font-bold text-sm mb-1">
            <MessageSquareQuote size={20} />
            <span>{isArabic ? "مجتمع أورا" : "AORA Community"}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#102A43]">
            {isArabic ? "آراء الطلاب والتعليقات" : "Student Feedback & Reviews"}
          </h3>
        </div>

        <div className="flex items-center gap-4 bg-[#F7F5EF] px-5 py-3 rounded-2xl border border-[#102A43]/10">
          <div className="flex items-center gap-1 text-[#E9B44C]">
            <Star className="fill-[#E9B44C]" size={22} />
            <span className="text-xl font-black text-[#102A43]">{averageRating}</span>
          </div>
          <div className="text-xs text-slate-600 font-medium border-s border-slate-300 ps-4">
            <p className="font-bold text-[#102A43]">{totalReviews} {isArabic ? "تقييم معتمد" : "Verified Reviews"}</p>
            <p>{isArabic ? "نظام مراجعة إداري موثوق" : "Admin-reviewed system"}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-full">
          <Search className="absolute top-1/2 -translate-y-1/2 right-4 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder={isArabic ? "ابحث في تعليقات الطلاب..." : "Search student reviews..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F7F5EF] px-4 py-3.5 pe-12 rounded-2xl border border-[#102A43]/15 outline-none font-medium text-sm text-[#102A43] focus:border-[#176B61] transition-all"
          />
        </div>
      </div>

      {filteredComments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredComments.map((item) => (
            <FeedbackCard 
              key={item.id}
              name={item.name}
              comment={item.comment}
              rating={item.rating}
              date={item.date}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-[#F7F5EF] rounded-2xl border border-dashed border-[#102A43]/20">
          <p className="text-slate-500 font-medium text-sm">
            {isArabic ? "لا توجد تعليقات تطابق بحثك الحالي." : "No reviews match your search."}
          </p>
        </div>
      )}

      <FeedbackForm isArabic={isArabic} onSubmitted={loadComments} />

    </section>
  );
}