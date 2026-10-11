import React from "react";
import { UserCheck, MessageCircleHeart, Mail } from "lucide-react";
import { CHURCH_INFO } from "@/data/churchInfo";

export default function PastorIntro() {
  const { pastor } = CHURCH_INFO;

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-50 to-slate-50 rounded-2xl p-6 sm:p-8 border border-emerald-100/80 shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
            {/* 프로필 아바타 / 사진 영역 */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-brand-700 to-emerald-500 flex items-center justify-center text-white shadow-md relative overflow-hidden border-2 border-white">
                <UserCheck className="w-14 h-14 text-white/90" />
                <div className="absolute bottom-0 inset-x-0 bg-brand-800/80 text-[11px] py-1 text-center font-medium">
                  {pastor.title}
                </div>
              </div>
              <div className="mt-3 text-center">
                <span className="text-base font-bold text-slate-900 block">{pastor.name}</span>
                <span className="text-xs text-brand-700 font-medium">{pastor.title}</span>
              </div>
            </div>

            {/* 교역자 메시지 카드 */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-700 text-xs font-semibold">
                <MessageCircleHeart className="w-3.5 h-3.5" />
                <span>담당 교역자의 한마디</span>
              </div>

              <blockquote className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal italic">
                &ldquo;{pastor.message}&rdquo;
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>이메일 문의: {pastor.email}</span>
                </div>
                <div className="text-slate-400">|</div>
                <span className="text-brand-700 font-medium">
                  언제든 신앙 상담과 기도 나눔을 환영합니다
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
