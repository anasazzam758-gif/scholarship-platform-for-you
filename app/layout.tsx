import type { Metadata } from "next";
import { Tajawal, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader"; // 👈 استدعاء شاشة التحميل الاحترافية

const tajawal = Tajawal({ 
  subsets: ["arabic"], 
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal" 
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Revitcho | ريفيتشو",
  description: "Your Educational Opportunities .. Start Here | فرصك التعليمية .. تبدأ، من هنا",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} ${inter.variable} font-tajawal bg-[#F7F5EF] text-[#102A43] min-h-screen selection:bg-[#176B61] selection:text-white`}>
        <Providers>
          <PageLoader /> {/* 👈 تفعيل التحميل الاحترافي */}
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}