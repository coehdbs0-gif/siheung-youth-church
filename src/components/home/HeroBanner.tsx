import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar, BookOpen } from "lucide-react";
import { CHURCH_INFO } from "@/data/churchInfo";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-navy-900 text-white py-16 md:py-24">
      {/* 백그라운드 디자인 패턴 */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>시흥제일교회 청소년교회 (중·고등부)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            말씀으로 자라가고, <br className="hidden sm:inline" />
            <span className="text-emerald-300">사랑으로 하나되는</span> 청소년 공동체
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            {CHURCH_INFO.vision}
            <br />
            매주 주일 오전 11시, 하나님을 기뻐하는 예배의 자리에 여러분을 초대합니다.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/worship"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-brand-800 hover:bg-slate-100 font-bold text-sm shadow-lg hover:shadow-xl transition transform active:scale-95"
            >
              <BookOpen className="w-4 h-4 text-brand-700" />
              <span>이번 주 예배 순서</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <Link
              href="/calendar"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm backdrop-blur-sm transition"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>통합 일정 & 생일자</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
