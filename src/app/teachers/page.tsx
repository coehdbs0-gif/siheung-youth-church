"use client";

import React, { useState, useEffect } from "react";
import { Lock, FileSpreadsheet, ExternalLink, CheckCircle, AlertCircle, LogOut, Users, ShieldAlert } from "lucide-react";
import { CHURCH_INFO } from "@/data/churchInfo";

export default function TeachersPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // 세션 유지 확인
    const isAuth = sessionStorage.getItem("siheung_teacher_auth");
    if (isAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CHURCH_INFO.teacherAccessCode) {
      setIsAuthenticated(true);
      sessionStorage.setItem("siheung_teacher_auth", "true");
      setErrorMessage("");
    } else {
      setErrorMessage("교사 인증 비밀번호가 일치하지 않습니다. (문의: 김은총 전도사)");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("siheung_teacher_auth");
    setPassword("");
  };

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-700 tracking-wider uppercase block">
            Teachers Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            교사 전용 페이지
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            시흥제일 청소년교회 교사 선생님들을 위한 출석부 및 사역 지원 공간입니다.
          </p>
        </div>

        {/* 1. 인증 전: 비밀번호 입력 화면 */}
        {!isAuthenticated ? (
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mx-auto shadow-inner">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                교사 인증 비밀번호 입력
              </h2>
              <p className="text-xs text-slate-500">
                청소년교회 교사 선생님께 부여된 접근 비밀번호를 입력해 주세요.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto">
              <div>
                <input
                  type="password"
                  required
                  autoFocus
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorMessage("");
                  }}
                  placeholder="비밀번호 입력 (예: 1234)"
                  className="w-full text-center text-lg px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-brand-500 shadow-xs"
                />
                {errorMessage && (
                  <p className="text-xs text-red-600 text-center mt-2 flex items-center justify-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errorMessage}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md transition transform active:scale-95"
              >
                인증 및 접속하기
              </button>
            </form>

            <div className="pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400">
                비밀번호를 분실하셨거나 새로 임명되신 선생님은 부서 총무 또는 담당 교역자에게 문의해 주세요.
              </p>
            </div>
          </div>
        ) : (
          /* 2. 인증 완료: 구글 엑셀 출석부 연결 화면 */
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200 shadow-md space-y-8 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>교사 인증 완료</span>
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:bg-slate-100 transition"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>접속 종료</span>
              </button>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-slate-900">
                온라인 구글 출석부 바로가기
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                현재 부서에서 사용 중인 공식 구글 스프레드시트 출석부로 안전하게 이동합니다. 주일 출석 체크와 심방 메모를 작성해 주세요.
              </p>
            </div>

            {/* 구글 스프레드시트 이동 대형 액션 카드 */}
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow">
                  <FileSpreadsheet className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    2026 청소년교회 출석관리 엑셀
                  </h3>
                  <span className="text-xs text-emerald-800 font-medium">
                    Google Sheets 연동 링크
                  </span>
                </div>
              </div>

              <a
                href={CHURCH_INFO.teacherAttendanceSheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition transform active:scale-95 shrink-0"
              >
                <span>출석부 열기</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* 교사 안내 수칙 카드 */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-700" />
                <span>주일 출석 체크 안내 사항</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-700 font-bold">•</span>
                  <span>매주 주일 오후 2시까지 반별 출석 체크 및 결석 학생 심방 내역을 기록해 주세요.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-700 font-bold">•</span>
                  <span>장기 결석 학생이나 기도제목이 있는 경우 담당 교역자에게 함께 공유해 주시기 바랍니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-700 font-bold">•</span>
                  <span>개인정보 보호를 위해 공용 PC에서 이용 후 반드시 브라우저 창을 닫아주세요.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
