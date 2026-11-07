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