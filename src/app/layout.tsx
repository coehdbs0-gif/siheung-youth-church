import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CHURCH_INFO } from "@/data/churchInfo";

export const metadata: Metadata = {
  title: `${CHURCH_INFO.churchName} ${CHURCH_INFO.departmentName}`,
  description: CHURCH_INFO.slogan,
  keywords: ["시흥제일교회", "청소년교회", "중고등부", "예배", "청소년부", "시흥시 교회"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
