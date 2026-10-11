/**
 * 교회학교 안전 원칙에 따른 이름 마스킹 처리
 * 예: 김선우 -> 김*우, 이진 -> 이*, 남궁민수 -> 남궁*수
 */
export function maskName(name: string): string {
  if (!name) return '';
  const trimmed = name.trim();
  const len = trimmed.length;

  if (len <= 1) return trimmed;
  if (len === 2) {
    return `${trimmed[0]}*`;
  }
  if (len === 3) {
    return `${trimmed[0]}*${trimmed[2]}`;
  }
  // 4글자 이상
  const midStart = 1;
  const midEnd = len - 1;
  const maskedMid = '*'.repeat(midEnd - midStart);
  return `${trimmed.slice(0, midStart)}${maskedMid}${trimmed.slice(midEnd)}`;
}

/**
 * 날짜 문자열 포맷팅 (YYYY-MM-DD -> YYYY년 M월 D일)
 */
export function formatDate(dateString: string): string {
  try {
    const [year, month, day] = dateString.split('-');
    if (!year || !month || !day) return dateString;
    return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
  } catch {
    return dateString;
  }
}
