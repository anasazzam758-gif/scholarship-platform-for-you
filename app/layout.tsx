import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import CustomCursor from "@/components/CustomCursor";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aora-platform.vercel.app"), // سيتم تحديثه برابط Vercel الفعلي بعد النشر
  title: {
    default: "AORA | منصة أورا للفرص الأكاديمية والمنح الدراسية",
    template: "%s | AORA",
  },
  description: "المنصة الأكاديمية الأولى لدعم الطلاب الفلسطينيين في الوصول لأحدث المنح الدراسية والفرص التعليمية الموثوقة حول العالم.",
  keywords: [
    "منح دراسية",
    "طلاب فلسطين",
    "منح للفلسطينيين",
    "AORA",
    "أورا",
    "تعليم عالي",
    "منح بكالوريوس",
    "منح ماجستير",
    "Scholarships for Palestinians"
  ],
  authors: [{ name: "AORA Team" }],
  creator: "AORA",
  icons: {
    icon: "/logo-icon.svg",
    shortcut: "/logo-icon.svg",
    apple: "/logo-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "https://aora-platform.vercel.app",
    siteName: "AORA Platform",
    title: "AORA | بوابة المنح والفرص الأكاديمية للطلاب الفلسطينيين",
    description: "اكتشف أحدث المنح الدراسية المتاحة وقوائم المستندات المطلوبة وقدّم بثقة مع منصة أورا.",
    images: [
      {
        url: "/logo-icon.svg",
        width: 1200,
        height: 630,
        alt: "AORA Educational Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AORA | فرص أكاديمية للطلاب الفلسطينيين",
    description: "دليلك الموثوق للوصول إلى المنح الدراسية العالمية.",
    images: ["/logo-icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={almarai.variable}>
      <body className="antialiased font-sans bg-[#F7F5EF] text-[#102A43]">
        <Providers>
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}