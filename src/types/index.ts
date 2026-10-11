export interface ServiceTeamMember {
  role: '인도자' | '대표기도' | '사회자' | '찬양팀' | '예배 담당 반';
  name: string;
  notes?: string;
}

export interface PraiseSong {
  title: string;
  composer?: string;
  order: number;
  youtubeUrl?: string;
  sheetMusicUrl?: string;
}

export interface SermonData {
  id: string;
  date: string;
  title: string;
  scripture: string;
  preacher: string;
  summary: string;
  keyPoints: string[];
  youtubeVideoId: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  endDate?: string;
  type: 'church' | 'school'; // 교회 행사 vs 학사일정/방학
  description?: string;
}

export interface BirthdayStudent {
  id: string;
  name: string; // 원본 이름, 유틸에서 마스킹 렌더링
  month: number;
  day: number;
  grade: string; // 예: 중1, 고2
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: '일반공지' | '행사안내' | '수련회' | '모임';
  content: string;
  imageUrl?: string;
  important?: boolean;
}

export interface PrayerPost {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  content: string;
  isPrivate: boolean;
  pinHash?: string; // 4자리 핀번호
}
