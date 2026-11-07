'use client';

import React, { useState, useEffect } from 'react';

// 1. تعريف واجهة البيانات للتعليقات
interface CommentItem {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
  likes: number;
}

export default function AboutPage() {
  // 2. تعريف الحالات المتغيرة (State) المطلوبة
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [isArabic, setIsArabic] = useState<boolean>(true); // يمكنك تعديلها حسب نظام اللغات لديك

  useEffect(() => {
    const saved = localStorage.getItem("aora_feedback") || localStorage.getItem("AORA_feedback") || localStorage.getItem("revitcho_feedback");
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
      localStorage.setItem("aora_feedback", JSON.stringify(initialComments));
    }
  }, [isArabic]);

  return (
    <main className="p-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        {isArabic ? "حول المنصة والآراء" : "About Us & Feedback"}
      </h1>
      
      {/* عرض التعليقات */}
      <div className="space-y-4">
        {comments.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-sm bg-white dark:bg-zinc-900">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{item.name}</span>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{item.comment}</p>
          </div>
        ))}
      </div>
    </main>
  );
}