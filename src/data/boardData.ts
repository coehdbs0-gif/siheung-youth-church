import { Notice, PrayerPost } from "@/types";

export const NOTICES: Notice[] = [
  {
    id: "notice-1",
    title: "[공지] 2026 하반기 청소년교회 출석 챌린지 및 또래 모임 안내",
    date: "2026-10-08",
    category: "일반공지",
    important: true,
    content:
      "할렐루야! 가을을 맞이하여 청소년교회에서 함께 은혜를 나누는 '출석 챌린지'와 '반별 또래 모임'이 시작됩니다. 매주 주일 11시 예배에 늦지 않게 함께 모여 예배해요!\n\n- 일시: 10월 11일(주일)부터 4주간\n- 혜택: 4주 연속 출석 및 큐티 나눔 달성 반에게 특별한 선물 증정\n- 문의: 각 반 담임선생님 및 김은총 전도사",
  },
  {
    id: "notice-2",
    title: "[수련회] 2027 청소년교회 동계 비전 수련회 1차 안내 및 기도제목",
    date: "2026-10-01",
    category: "수련회",
    important: true,
    content:
      "2027년 1월 14일(수)~16일(금) 양평 비전수련원에서 '믿음으로 일어서는 세대'라는 주제로 동계 수련회가 진행됩니다. 청소년 여러분과 선생님들의 많은 관심과 기도를 부탁드립니다.",
  },
  {
    id: "notice-3",
    title: "[간식] 2학기 중간고사 응원 간식 박스 배부 안내",
    date: "2026-09-27",
    category: "행사안내",
    important: false,
    content:
      "시험 공부로 지친 우리 청소년 친구들을 위해 교회에서 정성껏 준비한 '응원 간식 박스'를 주일 예배 후 나누어 드립니다. 힘내서 공부하고 주님 안에서 평안을 누리세요!",
  },
  {
    id: "notice-4",
    title: "[모임] 조이풀 찬양팀 세션 및 싱어 추가 모집",
    date: "2026-09-15",
    category: "모임",
    important: false,
    content:
      "함께 주님을 찬양할 고등부·중등부 친구들을 기다립니다. 드럼, 일렉기타, 건반, 싱어에 관심 있는 친구들은 언제든 김은총 전도사님께 연락해 주세요.",
  },
];

export const INITIAL_PRAYER_POSTS: PrayerPost[] = [
  {
    id: "prayer-1",
    title: "중간고사 시험 기간 마음의 평안을 위해 기도 부탁드립니다",
    author: "익명 친구",
    createdAt: "2026-10-09",
    content: "시험이 다가오니 많이 불안하고 집중이 잘 안 돼요. 주님 안에서 평안하게 준비할 수 있도록 함께 기도해 주세요.",
    isPrivate: false,
  },
  {
    id: "prayer-2",
    title: "[비밀글] 진로와 학업에 대한 고민 상담 드립니다",
    author: "학생 (중등부)",
    createdAt: "2026-10-07",
    content: "전도사님, 요즘 부모님과 진로 문제로 자주 다투고 마음이 많이 힘듭니다. 어떻게 기도하고 대화해야 할지 지혜를 구하고 싶어요.",
    isPrivate: true,
    pinHash: "1234", // 데모 핀번호
  },
  {
    id: "prayer-3",
    title: "가족들의 건강과 믿음의 회복을 위해",
    author: "고등부 학생",
    createdAt: "2026-10-02",
    content: "환절기에 가족들이 감기로 고생 중입니다. 건강하게 회복되고 온 가족이 함께 주일 예배에 참여할 수 있도록 기도해 주세요.",
    isPrivate: false,
  },
  {
    id: "prayer-4",
    title: "[비밀글] 친구 관계에 대한 조언을 듣고 싶어요",
    author: "고민 친구",
    createdAt: "2026-09-28",
    content: "학교에서 친구들과의 관계 때문에 사소한 오해가 생겼는데 어떻게 풀어나가야 할지 모르겠어요. 비밀 상담 부탁드립니다.",
    isPrivate: true,
    pinHash: "0000",
  },
];
