import React from "react";
import Link from "next/link";
import { MapPin, Clock, ExternalLink, Instagram, Youtube, Heart } from "lucide-react";
import { CHURCH_INFO } from "@/data/churchInfo";

export default function Footer() {
  return (
    <footer className="bg-brand-navy-900 text-slate-300 border-t border-brand-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 부서 소개 & 슬로건 */}
          <div className="space-y-3">
            <h3 className="text-white text-lg font-bold">
              {CHURCH_INFO.churchName} {CHURCH_INFO.departmentName}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {CHURCH_INFO.slogan}
            </p>
            <p className="text-xs text-slate-500">
              담당 교역자: {CHURCH_INFO.pastor.name} ({CHURCH_INFO.pastor.email})
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CHURCH_INFO.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-navy-800 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition"
                title="공식 유튜브 채널"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={CHURCH_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-brand-navy-800 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition"
                title="공식 인스타그램"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 예배 시간 및 장소 */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wide uppercase">
              예배 안내
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-200 mt-0.5 shrink-0" />
                <span>{CHURCH_INFO.worshipTime}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-200 mt-0.5 shrink-0" />
                <span>{CHURCH_INFO.worshipPlace}</span>
              </div>
              <p className="text-xs text-slate-400 pl-6.5">
                {CHURCH_INFO.address}
              </p>
            </div>
          </div>

          {/* 오시는 길 및 빠른 링크 */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wide uppercase">
              오시는 길 안내
            </h4>
            <p className="text-sm text-slate-400">
              네이버 지도에서 시흥제일교회 위치와 대중교통 경로를 바로 확인하세요.
            </p>
            <div>
              <a
                href={CHURCH_INFO.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow transition"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>네이버 지도에서 위치 보기</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="mt-10 pt-6 border-t border-brand-navy-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            &copy; {new Date().getFullYear()} {CHURCH_INFO.churchName} 청소년교회. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/worship" className="hover:text-slate-300">
              예배순서
            </Link>
            <Link href="/calendar" className="hover:text-slate-300">
              학사달력
            </Link>
            <Link href="/board" className="hover:text-slate-300">
              상담비밀글
            </Link>
            <Link href="/teachers" className="hover:text-slate-300">
              교사용 출석부
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
