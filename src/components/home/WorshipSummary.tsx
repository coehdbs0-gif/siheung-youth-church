import React from "react";
import Link from "next/link";
import { Clock, MapPin, BookOpen, Music, Users, ArrowRight } from "lucide-react";
import { CHURCH_INFO } from "@/data/churchInfo";
import { RECENT_SERMONS, THIS_WEEK_PRAISE_SETLIST } from "@/data/worshipData";

export default function WorshipSummary() {
  const currentSermon = RECENT_SERMONS[0];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-brand-700 tracking-wider uppercase block">
              Sunday Worship
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              이번 주 주일 예배 안내
            </h2>
          </div>
          <Link
            href="/worship"
            className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 group"
          >
            <span>예배위원 및 콘티 전체 보기</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 1. 예배 시간 & 장소 카드 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
              예배 일시 및 장소
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <Clock className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-medium text-slate-500 block">예배 시간</span>
                  <span className="text-base font-bold text-slate-900">{CHURCH_INFO.worshipTime}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <MapPin className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-medium text-slate-500 block">예배 장소</span>
                  <span className="text-sm font-bold text-slate-900">{CHURCH_INFO.worshipPlace}</span>
                  <span className="text-xs text-slate-500 block mt-1">{CHURCH_INFO.address}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/worship"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-semibold transition"
              >
                <Users className="w-4 h-4" />
                <span>이번 주 예배위원 편성표 보기</span>
              </Link>
            </div>
          </div>

          {/* 2. 이번 주 말씀 카드 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 px-2.5 py-1 rounded-md bg-emerald-50">
                  {currentSermon.date} 주일 말씀
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  설교: {currentSermon.preacher}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-3 hover:text-brand-700 transition">
                {currentSermon.title}
              </h3>

              <div className="flex items-center gap-2 text-sm font-semibold text-brand-700 mt-2">
                <BookOpen className="w-4 h-4" />
                <span>본문: {currentSermon.scripture}</span>
              </div>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed line-clamp-3">
                {currentSermon.summary}
              </p>
            </div>

            {/* 이번 주 찬양 프리뷰 */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
                <span className="flex items-center gap-1.5 text-brand-700">
                  <Music className="w-3.5 h-3.5" />
                  이번 주 찬양 맛보기
                </span>
                <Link href="/worship" className="text-slate-400 hover:text-brand-700">
                  전체 콘티
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {THIS_WEEK_PRAISE_SETLIST.slice(0, 3).map((song) => (
                  <span
                    key={song.title}
                    className="inline-block px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded-md"
                  >
                    #{song.order}. {song.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
