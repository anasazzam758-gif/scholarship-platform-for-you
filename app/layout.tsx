import type { Metadata, Viewport } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#102A43",
};

const SITE_URL = "https://scholarship-platform-for-you-ll8f.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AORA | منصة أورا للفرص الأكاديمية والمنح الدراسية",
    template: "%s | AORA",
  },
  description: "المنصة الأكاديمية الأولى لدعم الطلاب الفلسطينيين في الوصول لأحدث المنح الدراسية والفرص التعليمية الموثوقة حول العالم.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={almarai.variable}>
      <body className="antialiased font-sans bg-[#F7F5EF] text-[#102A43] min-h-screen">
        <Providers>
          <PageLoader />
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}