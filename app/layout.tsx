import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";

// خط عربي محترم، رسمي، وواضح جداً للقراءة
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai"
});

export const metadata: Metadata = {
  title: "AORA | أورا - المنح الدراسية",
  description: "Opportunities & Resources Access | فرصك التعليمية .. تبدأ، من هنا",
  icons: {
    icon: "/public/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${almarai.variable} bg-[#F7F5EF] text-[#102A43] min-h-screen selection:bg-[#176B61] selection:text-white`}>
        <Providers>
          <PageLoader />
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}