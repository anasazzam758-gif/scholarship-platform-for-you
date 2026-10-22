"use client";

import { useContext, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageContext } from "@/components/Providers";
import { Sparkles, ShieldCheck, Heart, Star, Send, MessageSquare, Target, History, Globe, Trash2 } from "lucide-react";

interface CommentItem {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
  likes: number; // حقل خاص بعدد القلوب/الإعجابات
}

export default function AboutPage() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  const [comments, setComments] = useState<CommentItem[]>([]);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("revitcho_feedback");
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      const initialComments: CommentItem[] = [
        {
          id: "1",
          name: isArabic ? "أحمد الفلسطيني" : "Ahmed Palestinian",
          comment: isArabic ? "منصة عظيمة جداً، ساعدتني كثيراً في معرفة مواعيد المنح وكيفية التقديم لها وأنا في الشتات." : "Great platform, really helped me track scholarship deadlines.",
          rating: 5,
          date: "2026-10-20",
          likes: 12
        },
        {
          id: "2",
          name: isArabic ? "سارة أحمد" : "Sara Ahmed",
          comment: isArabic ? "التصميم فخم ومرتب وسهل الاستخدام، شكراً لكل من ساهم في دعم الطلاب." : "Luxurious and neat design, thank you for supporting students.",
          rating: 5,
          date: "2026-10-21",
          likes: 8
        }
      ];
      setComments(initialComments);
      localStorage.setItem("AORA_feedback", JSON.stringify(initialComments));
    }
  }, [isArabic]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) return;

    const newComment: CommentItem = {
      id: Date.now().toString(),
      name,
      comment: commentText,
      rating,
      date: new Date().toISOString().split("T")[0],
      likes: 0
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem("AORA_feedback", JSON.stringify(updated));
    setName("");
    setCommentText("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  // دالة الإعجاب (وضع قلب على التعليق)
  const handleLike = (id: string) => {
    const updated = comments.map((item) => {
      if (item.id === id) {
        return { ...item, likes: item.likes + 1 };
      }
      return item;
    });
    setComments(updated);
    localStorage.setItem("AORA_feedback", JSON.stringify(updated));
  };

  // صلاحية المشرف لحذف التعليقات غير اللائقة
  const handleDeleteComment = (id: string) => {
    const updated = comments.filter((item) => item.id !== id);
    setComments(updated);
    localStorage.setItem("AORA_feedback", JSON.stringify(updated));
  };

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#102A43] flex flex-col">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 w-full space-y-16">
        
        {/* عن المنصة */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#102A43]/15 shadow-md space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E9B44C]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#176B61]/1 text-[#176B61] text-xs font-black border border-[#176B61]/30">
              <Sparkles size={14} />
              <span>{isArabic ? "قصتنا ورؤيتنا الأكاديمية" : "Our Story & Vision"}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#102A43] leading-tight">
              {isArabic ? "منصة أورا .. جسرك نحو المستقبل" : "Academic Opportunities & Resources Access Platform .. Your Bridge to the Future"}
            </h1>
            <div className="h-2 w-32 bg-[#E9B44C] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#102A43]/80 font-medium leading-relaxed">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#102A43] text-white shrink-0 mt-1">
                  <History size={20} />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#102A43] mb-1">{isArabic ? "تاريخ الانطلاق والنشأة" : "Launch & Origins"}</h3>
                  <p className="text-sm">
                    {isArabic 
                      ? "انطلقت منصة أورا في عام 2026 كبادرة وطنية وأكاديمية متخصصة، وُلدت من رحم الحاجة الملحة لتمكين الطلاب الفلسطينيين في المخيمات والشتات من الوصول للفرص التعليمية العالمية بكل مأسسة واحترافية." 
                      : "Launched in 2026, Academic Opportunities & Resources Access {AORA} was born out of the urgent need to empower Palestinian students in camps and diaspora."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#176B61] text-white shrink-0 mt-1">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#102A43] mb-1">{isArabic ? "الفكرة والهدف الأساسي" : "Core Idea & Goal"}</h3>
                  <p className="text-sm">
                    {isArabic 
                      ? "الفكرة تكمن في كسر الحواجز الجغرافية والمالية عبر توفير منصة مركزية واحدة تدقق المنح الدراسية، تضمن صحة تواريخها، وتوفر إرشاداً مباشراً عبر قنوات التواصل." 
                      : "The idea is to break geographical and financial barriers by providing a centralized verified scholarship platform."}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F7F5EF] p-6 rounded-2xl border border-[#102A43]/10 space-y-4">
              <h3 className="font-black text-[#102A43] text-lg flex items-center gap-2">
                <Globe className="text-[#176B61]" size={22} />
                <span>{isArabic ? "لشو بتساعد هذه المنصة؟" : "What Does This Platform Help With?"}</span>
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#176B61] shrink-0" />
                  <span>{isArabic ? "تجميع المنح الجامعية المؤكدة في مكان واحد." : "Aggregating verified university grants."}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#176B61] shrink-0" />
                  <span>{isArabic ? "متابعة المواعيد النهائية وحالات الإغلاق بذكاء." : "Tracking deadlines and status changes smartly."}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#176B61] shrink-0" />
                  <span>{isArabic ? "توفير دعم مباشر ومجاني للطلبة عبر الواتساب." : "Providing direct free student support via WhatsApp."}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* قسم التعليقات والآراء والتقييمات */}
        <div id="feedback" className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#102A43]">
                {isArabic ? "التعليقات والآراء والتقييمات" : "Feedback & Ratings"}
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                {isArabic ? "شاركنا برأيك أو اترك تقييمك (مع صلاحية المشرف لإدارة التعليقات وتفعيل القلب)." : "Share your thoughts or leave a rating."}
              </p>
            </div>
            <div className="flex items-center gap-1 bg-[#E9B44C]/20 px-4 py-2 rounded-2xl text-[#102A43] font-black text-sm">
              <Star size={18} className="fill-[#E9B44C] text-[#E9B44C]" />
              <span>4.9 / 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* نموذج كتابة تعليق */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#102A43]/15 shadow-md">
              <h3 className="text-xl font-extrabold text-[#102A43] mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-[#176B61]" />
                <span>{isArabic ? "اكتب تعليقك لنا" : "Write Your Comment"}</span>
              </h3>

              {submitted && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  {isArabic ? "شكراً لك! تم إضافة تعليقك بنجاح." : "Thank you! Your feedback has been added."}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">{isArabic ? "الاسم الكريم" : "Your Name"}</label>
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isArabic ? "أدخل اسمك..." : "Enter your name..."}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#102A43]/15 text-sm font-medium outline-none focus:border-[#176B61]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">{isArabic ? "التقييم" : "Rating"}</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 cursor-pointer"
                      >
                        <Star size={22} className={star <= rating ? "fill-[#E9B44C] text-[#E9B44C]" : "text-slate-300"} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">{isArabic ? "التعليق أو الاقتراح" : "Comment or Suggestion"}</label>
                  <textarea 
                    required
                    rows={4}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder={isArabic ? "اكتب رأيك هنا..." : "Write your feedback here..."}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F5EF] border border-[#102A43]/15 text-sm font-medium outline-none focus:border-[#176B61] resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#176B61] hover:bg-[#12544C] text-white py-3 rounded-xl font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={16} />
                  <span>{isArabic ? "إرسال التعليق" : "Submit Feedback"}</span>
                </button>
              </form>
            </div>

            {/* عرض التعليقات مع إمكانية وضع قلب ❤️ وحذف التعليق */}
            <div className="lg:col-span-7 space-y-4">
              {comments.length > 0 ? (
                comments.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-3xl border border-[#102A43]/10 shadow-xs space-y-3 relative">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-[#102A43] text-base">{item.name}</span>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} size={14} className="fill-[#E9B44C] text-[#E9B44C]" />
                          ))}
                        </div>
                        
                        {/* زر حذف التعليق (صلاحية المشرف) */}
                        <button
                          onClick={() => handleDeleteComment(item.id)}
                          className="text-slate-300 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                          title={isArabic ? "حذف التعليق (صلاحية المشرف)" : "Delete comment"}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <p className="text-slate-700 text-sm font-medium leading-relaxed">
                      "{item.comment}"
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="text-[11px] text-slate-400 font-semibold">{item.date}</span>

                      {/* زر الإعجاب (وضع قلب ❤️) */}
                      <button 
                        onClick={() => handleLike(item.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-xs font-bold cursor-pointer group"
                      >
                        <Heart size={15} className="fill-red-500 text-red-500 group-hover:scale-125 transition-transform" />
                        <span>{item.likes}</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white p-8 rounded-3xl border border-[#102A43]/10 text-center text-slate-500">
                  {isArabic ? "لا توجد تعليقات حالياً." : "No comments yet."}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}