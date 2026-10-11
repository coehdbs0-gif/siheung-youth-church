import React from "react";
import HeroBanner from "@/components/home/HeroBanner";
import PastorIntro from "@/components/home/PastorIntro";
import WorshipSummary from "@/components/home/WorshipSummary";
import MediaSection from "@/components/home/MediaSection";
import LocationSection from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. 슬로건 및 비전 히어로 배너 */}
      <HeroBanner />

      {/* 2. 담당 교역자 소개 메시지 카드 */}
      <PastorIntro />

      {/* 3. 이번 주 예배 요약 섹션 */}
      <WorshipSummary />

      {/* 4. 최신 유튜브 설교 영상 & 인스타그램 연동 */}
      <MediaSection />

      {/* 5. 네이버 지도 연동 예배장소 안내 */}
      <LocationSection />
    </div>
  );
}
