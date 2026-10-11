"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon, Cake, ChevronLeft, ChevronRight, School, Church, Sparkles, Filter } from "lucide-react";
import { CALENDAR_EVENTS, BIRTHDAY_STUDENTS } from "@/data/calendarData";
import { maskName, formatDate } from "@/lib/utils";

export default function CalendarPage() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(10); // 10월 기준
  const [filterType, setFilterType] = useState<"all" | "church" | "school">("all");

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // 현재 월의 이벤트 필터링
  const monthPrefix = `${currentYear}-${String(currentMonth).padStart(2, "0")}`;
  const currentMonthEvents = CALENDAR_EVENTS.filter((evt) => {
    const isThisMonth = evt.date.startsWith(monthPrefix) || (evt.endDate && evt.endDate.startsWith(monthPrefix));
    if (!isThisMonth) return false;
    if (filterType === "all") return true;
    return evt.type === filterType;
  }).sort((a, b) => a.date.localeCompare(b.date));

  // 현재 월의 생일자 필터링
  const currentMonthBirthdays = BIRTHDAY_STUDENTS.filter(
    (b) => b.month === currentMonth
  ).sort((a, b) => a.day - b.day);

  return (
    <div className="py-10 md:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* 타이틀 헤더 */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-700 tracking-wider uppercase block">
            Integrated Calendar
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            통합 달력 & 학사일정
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            교회 주요 행사와 관내 중·고교 시험/방학 학사일정, 그리고 월별 생일자를 함께 확인하세요.
          </p>
        </div>

        {/* 연월 조작 컨트롤러 & 필터 바 */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition"
              aria-label="이전 달"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-brand-700" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {currentYear}년 {currentMonth}월
              </h2>
            </div>
            <button
              onClick={handleNextMonth}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition"
              aria-label="다음 달"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* 일정 구분 필터 */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl text-xs font-bold">
            <button
              onClick={() => setFilterType("all")}
              className={`px-3 py-1.5 rounded-lg transition ${
                filterType === "all"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              전체 보기
            </button>
            <button
              onClick={() => setFilterType("church")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition ${
                filterType === "church"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Church className="w-3.5 h-3.5" />
              <span>교회 행사</span>
            </button>
            <button
              onClick={() => setFilterType("school")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition ${
                filterType === "school"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <School className="w-3.5 h-3.5" />
              <span>학사일정/방학</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 1. 월별 행사 리스트 (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>이달의 주요 일정</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-semibold">
                  {currentMonthEvents.length}개
                </span>
              </h3>
            </div>

            {currentMonthEvents.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 text-slate-400">
                <CalendarIcon className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                <p className="text-sm font-medium">등록된 일정이 없습니다.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {currentMonthEvents.map((evt) => {
                  const isChurch = evt.type === "church";
                  return (
                    <div
                      key={evt.id}
                      className={`bg-white rounded-2xl p-5 border transition shadow-sm hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isChurch
                          ? "border-emerald-200/80 hover:border-emerald-300"
                          : "border-sky-200/80 hover:border-sky-300"
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-md ${
                              isChurch
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-sky-100 text-sky-800"
                            }`}
                          >
                            {isChurch ? (
                              <Church className="w-3 h-3" />
                            ) : (
                              <School className="w-3 h-3" />
                            )}
                            <span>{isChurch ? "교회 행사" : "학교 학사일정"}</span>
                          </span>

                          <span className="text-xs font-semibold text-slate-500">
                            {formatDate(evt.date)}
                            {evt.endDate ? ` ~ ${formatDate(evt.endDate)}` : ""}
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-slate-900">
                          {evt.title}
                        </h4>

                        {evt.description && (
                          <p className="text-xs text-slate-600">
                            {evt.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* 2. 월별 학생 생일자 안내 카드 (4 cols) - 안전 원칙 마스킹 */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow">
                  <Cake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-amber-950">
                    {currentMonth}월 생일 축하합니다!
                  </h3>
                  <span className="text-xs text-amber-800 font-medium">
                    Happy Birthday 🎉
                  </span>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 inline mr-1" />
                하나님의 존귀한 자녀로 태어난 우리 친구들의 생일을 진심으로 축하하고 축복합니다!
              </div>

              {/* 생일자 목록 */}
              <div className="space-y-2.5">
                {currentMonthBirthdays.length === 0 ? (
                  <p className="text-xs text-amber-800/80 text-center py-4">
                    해당 월에 등록된 생일자가 없습니다.
                  </p>
                ) : (
                  currentMonthBirthdays.map((student) => (
                    <div
                      key={student.id}
                      className="bg-white rounded-xl p-3 border border-amber-100 flex items-center justify-between shadow-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-extrabold text-xs flex items-center justify-center shrink-0">
                          {student.day}일
                        </span>
                        <div>
                          {/* 안전 원칙 적용: 김*우 마스킹 표기 */}
                          <span className="text-sm font-bold text-slate-900 block">
                            {maskName(student.name)}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {student.grade}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                        축복해요 ✨
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* 안전 원칙 고지 배지 */}
              <div className="pt-2 border-t border-amber-200/60">
                <p className="text-[11px] text-slate-500 leading-normal">
                  🛡️ <strong>교회학교 안전 원칙:</strong> 청소년 개인정보 보호를 위해 학생의 성함 가운데 글자를 마스킹 처리하여 게시하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
