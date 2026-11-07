"use client";

import { useState } from "react";
import { Send, ShieldCheck } from "lucide-react";

interface FeedbackFormProps {
  isArabic: boolean;
  onSubmitted: () => void;
}

export default function FeedbackForm({ isArabic, onSubmitted }: FeedbackFormProps) {
  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [ratingInput, setRatingInput] = useState(5);
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !commentInput.trim()) return;

    const newComment = {
      id: Date.now().toString(),
      name: nameInput,
      comment: commentInput,
      rating: ratingInput,
      date: new Date().toISOString().split('T')[0],
      status: "pending" // بانتظار موافقة الإدارة (Admin Review) لحماية المنصة من Spam
    };

    const pendingList = JSON.parse(localStorage.getItem("aora_pending_feedback") || "[]");
    pendingList.push(newComment);
    localStorage.setItem("aora_pending_feedback", JSON.stringify(pendingList));

    setSubmittedMessage(
      isArabic 
        ? "تم إرسال رأيك بنجاح! سيظهر في الصفحة فور مراجعته واعتماده من الإدارة." 
        : "Feedback submitted successfully! It will appear after administrative review."
    );
    setNameInput("");
    setCommentInput("");
    setRatingInput(5);

    if (onSubmitted) onSubmitted();

    setTimeout(() => {
      setSubmittedMessage("");
    }, 6000);
  };

  return (
    <div className="mt-12 pt-8 border-t border-[#102A43]/10">
      <h4 className="text-xl font-black text-[#102A43] mb-2">
        {isArabic ? "أضف رأيك أو تجربتك مع المنصة" : "Share Your Experience with Us"}
      </h4>
      <p className="text-xs text-slate-600 mb-6">
        {isArabic 
          ? "ملاحظة هامة: لحماية المجتمع وتجنب أي محتوى غير مرغوب فيه (Spam)، يمر كل تعليق جديد عبر قائمة المراجعة الإدارية ولا ينشر علناً إلا بعد موافقة الإدارة."
          : "Note: To prevent spam, all new comments go to a pending review queue and will be published after admin approval."}
      </p>

      {submittedMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-[#176B61]/10 border border-[#176B61] text-[#176B61] font-bold text-sm flex items-center gap-3">
          <ShieldCheck size={20} className="shrink-0" />
          <span>{submittedMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#102A43]">
              {isArabic ? "اسمك الكريم" : "Your Name"}
            </label>
            <input 
              type="text"
              required
              placeholder={isArabic ? "مثال: محمد الفلسطيني" : "e.g., Mohammed Ali"}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="w-full bg-[#F7F5EF] px-4 py-3 rounded-xl border border-[#102A43]/15 outline-none font-medium text-sm text-[#102A43] focus:border-[#176B61]"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#102A43]">
              {isArabic ? "التقييم بالنجوم" : "Rating (1 to 5)"}
            </label>
            <select
              value={ratingInput}
              onChange={(e) => setRatingInput(Number(e.target.value))}
              className="w-full bg-[#F7F5EF] px-4 py-3 rounded-xl border border-[#102A43]/15 outline-none font-bold text-sm text-[#102A43] focus:border-[#176B61]"
            >
              <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
              <option value={4}>⭐⭐⭐⭐ (4/5)</option>
              <option value={3}>⭐⭐⭐ (3/5)</option>
              <option value={2}>⭐⭐ (2/5)</option>
              <option value={1}>⭐ (1/5)</option>
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-[#102A43]">
            {isArabic ? "تعليقك أو تجربتك" : "Your Comment"}
          </label>
          <textarea 
            required
            rows={4}
            placeholder={isArabic ? "اكتب رأيك بكل شفافية لمساعدة زملائك الطلاب..." : "Write your review..."}
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            className="w-full bg-[#F7F5EF] p-4 rounded-xl border border-[#102A43]/15 outline-none font-medium text-sm text-[#102A43] focus:border-[#176B61] resize-none"
          />
        </div>

        <button 
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#176B61] hover:bg-[#13554d] text-white text-sm font-black transition-all shadow-md w-full sm:w-auto cursor-pointer"
        >
          <Send size={18} />
          <span>{isArabic ? "إرسال التعليق للمراجعة" : "Submit for Review"}</span>
        </button>
      </form>
    </div>
  );
}