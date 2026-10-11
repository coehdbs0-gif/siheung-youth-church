import React from "react";
import { Youtube, Instagram, ExternalLink, Play } from "lucide-react";
import { CHURCH_INFO } from "@/data/churchInfo";
import { RECENT_SERMONS } from "@/data/worshipData";

export default function MediaSection() {
  const latestSermon = RECENT_SERMONS[0];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-700 tracking-wider uppercase block">
            Media & Community
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            영상으로 만나는 청소년교회
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            주일 예배를 다시 보거나, 인스타그램에서 청소년교회의 생생한 소식을 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 유튜브 플레이어 영역 (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800">
              <div className="aspect-video w-full relative">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${latestSermon.youtubeVideoId}?rel=0`}
                  title="청소년교회 최신 설교 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-emerald-400 font-semibold block">
                    {latestSermon.date} 주일 설교
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {latestSermon.title}
                  </h3>
                </div>
                <a
                  href={CHURCH_INFO.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shrink-0"
                >
                  <Youtube className="w-4 h-4" />
                  <span>유튜브 채널 구독</span>
                </a>
              </div>
            </div>
          </div>

          {/* 소셜 및 채널 연동 카드 (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* 인스타그램 배너 카드 */}
            <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-amber-500 rounded-2xl p-6 text-white shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">공식 인스타그램</h3>
                <p className="text-xs text-pink-100 mt-1 leading-relaxed">
                  청소년교회의 주일 풍경, 반별 모임 사진, 행사 비하인드를 가장 빠르게 만나보세요!
                </p>
              </div>
              <a
                href={CHURCH_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold transition shadow"
              >
                <span>인스타그램 방문하기</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
              </a>
            </div>

            {/* 주간 묵상 & 찬양 안내 카드 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-700">
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>매주 업데이트되는 은혜의 자리</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                바쁜 학업 중에도 말씀과 찬양으로 주님과 동행하는 하루를 누려보세요. 설교 전체 목록은 &apos;예배 & 말씀&apos; 메뉴에서 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
