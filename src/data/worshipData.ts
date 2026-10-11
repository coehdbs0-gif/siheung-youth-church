import { ServiceTeamMember, PraiseSong, SermonData } from "@/types";

export const THIS_WEEK_SERVICE_TEAMS: ServiceTeamMember[] = [
  { role: "인도자", name: "김은총 전도사", notes: "예배 총괄 및 말씀 선포" },
  { role: "대표기도", name: "박시온 학생", notes: "고등부 2학년" },
  { role: "사회자", name: "이하은 교사", notes: "중등부 1반 담임" },
  { role: "찬양팀", name: "조이풀 찬양팀", notes: "리더: 정진우, 세션: 고등부 찬양팀" },
  { role: "예배 담당 반", name: "중등 2반 (담당: 강요한 교사)", notes: "주보 배부, 안내 및 헌금위원" },
];

export const THIS_WEEK_PRAISE_SETLIST: PraiseSong[] = [
  {
    order: 1,
    title: "꽃들도 (花も)",
    composer: "JWorship",
    youtubeUrl: "https://www.youtube.com/results?search_query=%EA%BD%83%EB%93%A4%EB%8F%84+%EC%B0%AC%EC%96%91",
    sheetMusicUrl: "#",
  },
  {
    order: 2,
    title: "내 모습 이대로",
    composer: "제이어스 (J-US)",
    youtubeUrl: "https://www.youtube.com/results?search_query=%EB%82%B4+%EB%AA%A8%EC%8A%B5+%EC%9D%B4%EB%8C%80%EB%A1%9C",
    sheetMusicUrl: "#",
  },
  {
    order: 3,
    title: "원하고 바라고 기도합니다",
    composer: "민호기",
    youtubeUrl: "https://www.youtube.com/results?search_query=%EC%9B%90%ED%95%98%EA%B3%A0+%EB%B0%94%EB%9D%BC%EA%B3%A0+%EA%B8%B0%EB%8F%84%ED%95%A9%EB%8B%88%EB%8B%A4",
    sheetMusicUrl: "#",
  },
  {
    order: 4,
    title: "은혜 (내가 누려왔던 모든 것들이)",
    composer: "손경민",
    youtubeUrl: "https://www.youtube.com/results?search_query=%EC%9D%80%ED%98%9C+%EC%86%90%EA%B2%BD%EB%AF%BC",
    sheetMusicUrl: "#",
  },
];

export const RECENT_SERMONS: SermonData[] = [
  {
    id: "sermon-2026-10-11",
    date: "2026-10-11",
    title: "세상의 기준을 넘어, 하나님의 부르심으로",
    scripture: "로마서 12장 1절 ~ 2절",
    preacher: "김은총 전도사",
    summary:
      "우리가 살아가는 학업과 일상 속에서 세상의 시선과 점수가 아닌, 우리를 향한 하나님의 선하시고 온전하신 뜻을 분별하며 참된 예배자로 살아가는 청소년이 됩시다.",
    keyPoints: [
      "1. 우리 몸을 하나님이 기뻐하시는 거룩한 산 제물로 드리는 삶",
      "2. 이 세대를 본받지 않고 마음을 새롭게 함으로 변화를 받는 믿음",
      "3. 하나님의 선하시고 온전하신 뜻을 일상에서 분별하기",
    ],
    youtubeVideoId: "dQw4w9WgXcQ",
  },
  {
    id: "sermon-2026-10-04",
    date: "2026-10-04",
    title: "흔들릴 때 붙잡아야 할 단 하나의 약속",
    scripture: "이사야 41장 10절",
    preacher: "김은총 전도사",
    summary:
      "두려움과 불안이 엄습할 때, 하나님께서 친히 우리의 손을 붙드시고 굳세게 하신다는 약속을 신뢰하며 용기 있게 나아갑시다.",
    keyPoints: [
      "1. 두려워하지 말라 내가 너와 함께 함이라",
      "2. 놀라지 말라 나는 네 하나님이 됨이라",
      "3. 나의 의로운 오른손으로 너를 붙들리라",
    ],
    youtubeVideoId: "dQw4w9WgXcQ",
  },
];
