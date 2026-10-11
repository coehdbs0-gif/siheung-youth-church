import { CalendarEvent, BirthdayStudent } from "@/types";

export const CALENDAR_EVENTS: CalendarEvent[] = [
  // 10월
  {
    id: "evt-1",
    title: "중간고사 격려 주일 간식 파티",
    date: "2026-10-04",
    type: "church",
    description: "시험기간 학생들을 격려하기 위한 특별 간식 제공 및 기도회",
  },
  {
    id: "evt-2",
    title: "관내 중·고교 2학기 중간고사 기간",
    date: "2026-10-06",
    endDate: "2026-10-10",
    type: "school",
    description: "관내 주요 학교 2학기 1차 지필평가",
  },
  {
    id: "evt-3",
    title: "청소년교회 또래모임 & 교제 주일",
    date: "2026-10-18",
    type: "church",
    description: "반별 나눔 및 레크리에이션",
  },
  {
    id: "evt-4",
    title: "종교개혁기념주일 연합예배",
    date: "2026-10-25",
    type: "church",
    description: "개혁주의 신앙을 되새기는 청소년 특별 예배",
  },
  // 11월
  {
    id: "evt-5",
    title: "대학수학능력시험 (수능)",
    date: "2026-11-12",
    type: "school",
    description: "2027학년도 대학수학능력시험일",
  },
  {
    id: "evt-6",
    title: "수험생 축복 기도회 및 주일 안수기도",
    date: "2026-11-15",
    type: "church",
    description: "고3 및 수험생을 위한 전교인 축복 기도",
  },
  {
    id: "evt-7",
    title: "추수감사주일 청소년 찬양축제",
    date: "2026-11-22",
    type: "church",
    description: "감사의 고백을 드리는 찬양과 감사의 밤",
  },
  // 12월
  {
    id: "evt-8",
    title: "기말고사 기간",
    date: "2026-12-08",
    endDate: "2026-12-12",
    type: "school",
    description: "관내 중·고교 2학기 2차 지필평가",
  },
  {
    id: "evt-9",
    title: "성탄축하 청소년의 밤 & 칸타타",
    date: "2026-12-24",
    type: "church",
    description: "아기 예수님의 탄생을 축하하는 청소년 특별 발표회",
  },
  {
    id: "evt-10",
    title: "겨울방학 시작",
    date: "2026-12-28",
    type: "school",
    description: "각 학교별 2학기 종업식 및 겨울방학 시작",
  },
  // 1월 / 2월
  {
    id: "evt-11",
    title: "2027 청소년교회 동계 비전 수련회",
    date: "2027-01-14",
    endDate: "2027-01-16",
    type: "church",
    description: "2박 3일 말씀과 기도의 동계 수련회 (양평 수련원)",
  },
];

// 월별 생일자 데이터 (이름 원본 -> 화면 렌더링 시 maskName 적용)
export const BIRTHDAY_STUDENTS: BirthdayStudent[] = [
  // 10월
  { id: "b-1", name: "김선우", month: 10, day: 5, grade: "중2" },
  { id: "b-2", name: "이하진", month: 10, day: 14, grade: "고1" },
  { id: "b-3", name: "박준영", month: 10, day: 22, grade: "중3" },
  { id: "b-4", name: "정다은", month: 10, day: 29, grade: "고3" },
  // 11월
  { id: "b-5", name: "최민혁", month: 11, day: 3, grade: "중1" },
  { id: "b-6", name: "송지우", month: 11, day: 11, grade: "고2" },
  { id: "b-7", name: "강도윤", month: 11, day: 20, grade: "중2" },
  // 12월
  { id: "b-8", name: "윤서연", month: 12, day: 8, grade: "중3" },
  { id: "b-9", name: "임하늘", month: 12, day: 19, grade: "고1" },
  { id: "b-10", name: "한지민", month: 12, day: 25, grade: "고3" },
];
