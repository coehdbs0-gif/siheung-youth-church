"use client";

import React, { useState } from "react";
import { Users, Music, BookOpen, ExternalLink, Play, CheckCircle2 } from "lucide-react";
import { THIS_WEEK_SERVICE_TEAMS, THIS_WEEK_PRAISE_SETLIST, RECENT_SERMONS } from "@/data/worshipData";
import { CHURCH_INFO } from "@/data/churchInfo";

type WorshipTab = "team" | "praise" | "sermon";

export default function WorshipPage() {
  const [activeTab, setActiveTab] = useState<WorshipTab>("team");
  const [selectedSermonIndex, setSelectedSermonIndex] = useState(0);

  const currentSermon = RECENT_SERMONS[selectedSermonIndex] || RECENT_SERMONS[0];

  return (
    <div className="py-10 md:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 타이틀 */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold text-brand-700 tracking-wider uppercase block">
            Worship & Word
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            예배 & 말씀
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            시흥제일 청소년교회의 예배위원 편성, 이번 주 찬양 콘티, 그리고 설교 말씀을 확인하세요.
          </p>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex border-b border-slate-200 bg-white rounded-2xl p-1.5 shadow-sm mb-8">
          <button
            onClick={() => setActiveTab("team")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition ${
              activeTab === "team"
                ? "bg-brand-700 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>예배위원</span>
          </button>

          <button
            onClick={() => setActiveTab("praise")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition ${
              activeTab === "praise"
                ? "bg-brand-700 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Music className="w-4 h-4" />
            <span>찬양 콘티</span>
          </button>

          <button
            onClick={() => setActiveTab("sermon")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition ${
              activeTab === "sermon"
                ? "bg-brand-700 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>설교 요약</span>
          </button>
        </div>

        {/* 탭 1: 예배위원 안내 (표 형식 제공, 방송팀 제외) */}
        {activeTab === "team" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  이번 주 주일 예배위원 안내
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  예배위원으로 섬기시는 분들은 주일 오전 10시 40분까지 예배실로 모여 기도로 준비해 주시기 바랍니다.
                </p>
              </div>
              <span className="inline-flex self-start sm:self-auto text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
                주일 오전 11:00 예배
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-700 font-bold">
                    <th className="py-3.5 px-4 w-1/4">구분 (역할)</th>
                    <th className="py-3.5 px-4 w-1/3">담당자</th>
                    <th className="py-3.5 px-4">비고 및 안내</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {THIS_WEEK_SERVICE_TEAMS.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/80 transition"
                    >
                      <td className="py-4 px-4 font-bold text-brand-800">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-100">
                          {item.role}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-medium text-slate-900">
                        {item.name}
                      </td>
                      <td className="py-4 px-4 text-xs text-slate-500">
                        {item.notes || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 text-xs text-slate-600 flex items-start gap-2.5 border border-slate-100">
              <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
              <span>
                예배 담당 반(안내/헌금위원) 학생들은 일찍 도착하여 성경책과 주보를 정돈하고 친구들을 맞이해 주세요.
              </span>
            </div>
          </div>
        )}

        {/* 탭 2: 이번 주 찬양 콘티 */}
        {activeTab === "praise" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  이번 주 찬양 콘티 (Praise Setlist)
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  찬양팀과 함께 주일 예배를 기대하며 미리 찬양을 듣고 묵상해 보세요.
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-brand-50 text-brand-700 font-semibold self-start sm:self-auto">
                총 {THIS_WEEK_PRAISE_SETLIST.length}곡
              </span>
            </div>

            <div className="space-y-4">
              {THIS_WEEK_PRAISE_SETLIST.map((song) => (
                <div
                  key={song.order}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-9 h-9 rounded-xl bg-brand-700 text-white font-extrabold flex items-center justify-center shrink-0 text-sm shadow-sm">
                      {song.order}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {song.title}
                      </h3>
                      {song.composer && (
                        <span className="text-xs text-slate-500">
                          {song.composer}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    {song.youtubeUrl && (
                      <a
                        href={song.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 text-xs font-semibold transition"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>찬양 듣기</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-50 text-xs text-amber-800 border border-amber-200">
              🎵 조이풀 찬양팀 연습은 매주 주일 오전 9시 30분 본당 소예배실에서 진행됩니다.
            </div>
          </div>
        )}

        {/* 탭 3: 설교 요약 및 유튜브 영상 */}
        {activeTab === "sermon" && (
          <div className="space-y-6">
            {/* 이전 설교 선택 탭 */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {RECENT_SERMONS.map((sermon, idx) => (
                <button
                  key={sermon.id}
                  onClick={() => setSelectedSermonIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                    selectedSermonIndex === idx
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {sermon.date} {sermon.title.slice(0, 14)}...
                </button>
              ))}
            </div>

            {/* 설교 상세 카드 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-50 text-brand-800 font-bold">
                    {currentSermon.date}
                  </span>
                  <span className="text-xs text-slate-500">
                    설교자: {currentSermon.preacher}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentSermon.title}
                </h2>
                <div className="mt-2 text-sm font-semibold text-brand-700 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>말씀 본문: {currentSermon.scripture}</span>
                </div>
              </div>

              {/* 유튜브 영상 연동 */}
              <div className="rounded-xl overflow-hidden aspect-video bg-slate-900 shadow-md">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${currentSermon.youtubeVideoId}?rel=0`}
                  title={currentSermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* 설교 핵심 요약 */}
              <div className="space-y-4 pt-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-700" />
                  말씀 요약 및 나눔
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {currentSermon.summary}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase">
                    핵심 포인트
                  </h4>
                  <ul className="space-y-2">
                    {currentSermon.keyPoints.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-800 flex items-start gap-2 bg-emerald-50/50 p-3 rounded-lg border border-emerald-100/50"
                      >
                        <span className="text-brand-700 font-bold shrink-0">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <a
                  href={CHURCH_INFO.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700"
                >
                  <span>유튜브에서 더 많은 설교 영상 보기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
