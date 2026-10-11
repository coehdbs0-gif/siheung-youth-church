"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Bus, Copy, Check, ExternalLink } from "lucide-react";
import { CHURCH_INFO } from "@/data/churchInfo";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CHURCH_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-700 tracking-wider uppercase block">
            Location & Directions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            찾아오시는 길 & 예배 장소
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            시흥제일교회 교육관 3층 소예배실(비전홀)에서 매주 주일 오전 11시에 만나요!
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* 지도 뷰어 UI 영역 (7 cols) */}
          <div className="lg:col-span-7 bg-slate-100 min-h-[300px] flex flex-col justify-between p-6 relative border-b lg:border-b-0 lg:border-r border-slate-200">
            {/* 세련된 지도 프리뷰 카드 */}
            <div className="relative w-full h-full min-h-[260px] rounded-xl bg-emerald-50/60 border border-emerald-200/60 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg mb-3 animate-bounce">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="relative z-10 text-base font-bold text-slate-900">
                {CHURCH_INFO.churchName} 교육관 3층
              </h4>
              <p className="relative z-10 text-xs text-slate-600 mt-1">
                {CHURCH_INFO.address}
              </p>

              <div className="relative z-10 mt-5">
                <a
                  href={CHURCH_INFO.naverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition"
                >
                  <Navigation className="w-4 h-4" />
                  <span>네이버 지도에서 길찾기 열기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 세부 장소 안내 및 대중교통 정보 (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-slate-400 block uppercase">
                  Worship Location
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {CHURCH_INFO.worshipPlace}
                </h3>
              </div>

              {/* 주소 및 복사 버튼 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                <div className="text-xs text-slate-700">
                  <span className="font-semibold block text-slate-900">도로명 주소</span>
                  <span>{CHURCH_INFO.address}</span>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition shrink-0 flex items-center gap-1.5"
                  title="주소 복사"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* 대중교통 안내 */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <Bus className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">대중교통 이용 시</span>
                    시흥시청역 또는 능곡역 하차 후 시내버스 이용, &apos;능곡중학교·시흥제일교회&apos; 정류장 하차
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs text-slate-500">
                💡 주차가 필요하신 학부모님께서는 교회 본관 지하 및 지상 주차장을 무료로 이용하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
