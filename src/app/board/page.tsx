"use client";

import React, { useState, useEffect } from "react";
import {
  Bell,
  HeartHandshake,
  Lock,
  Unlock,
  PlusCircle,
  X,
  ShieldCheck,
  Send,
  Eye,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { NOTICES, INITIAL_PRAYER_POSTS } from "@/data/boardData";
import { Notice, PrayerPost } from "@/types";

export default function BoardPage() {
  const [activeTab, setActiveTab] = useState<"notice" | "prayer">("notice");

  // 공지사항 상세 모달 상태
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  // 기도제목/상담 목록 상태 (초기 데이터 + 로컬스토리지)
  const [prayerPosts, setPrayerPosts] = useState<PrayerPost[]>(INITIAL_PRAYER_POSTS);

  // 새 글 작성 모달
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newContent, setNewContent] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);
  const [pin, setPin] = useState("");

  // 비밀글 열람 모달
  const [unlockTargetPost, setUnlockTargetPost] = useState<PrayerPost | null>(null);
  const [unlockPinInput, setUnlockPinInput] = useState("");
  const [unlockedPostId, setUnlockedPostId] = useState<string | null>(null);
  const [pinError, setPinError] = useState(false);

  // 로컬스토리지에서 이전 글 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("siheung_prayer_posts");
    if (saved) {
      try {
        setPrayerPosts(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved prayer posts", e);
      }
    }
  }, []);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    if (isPrivate && (!pin || pin.length < 4)) {
      alert("비밀글 작성을 위해 4자리 비밀번호를 입력해 주세요.");
      return;
    }

    const newPost: PrayerPost = {
      id: `prayer-${Date.now()}`,
      title: newTitle.trim(),
      author: newAuthor.trim() || "익명 학생",
      createdAt: new Date().toISOString().split("T")[0],
      content: newContent.trim(),
      isPrivate: isPrivate,
      pinHash: isPrivate ? pin.trim() : undefined,
    };

    const updated = [newPost, ...prayerPosts];
    setPrayerPosts(updated);
    localStorage.setItem("siheung_prayer_posts", JSON.stringify(updated));

    // 폼 초기화
    setNewTitle("");
    setNewAuthor("");
    setNewContent("");
    setIsPrivate(true);
    setPin("");
    setIsWriteModalOpen(false);
    alert("기도제목 및 상담글이 안전하게 등록되었습니다.");
  };

  const handleOpenUnlockModal = (post: PrayerPost) => {
    if (!post.isPrivate) {
      setUnlockedPostId(post.id);
      return;
    }
    // 이미 해제된 상태인 경우
    if (unlockedPostId === post.id) {
      return;
    }
    setUnlockTargetPost(post);
    setUnlockPinInput("");
    setPinError(false);
  };

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!unlockTargetPost) return;

    // 마스터 비밀번호(교역자 관리자용 1234) 또는 작성 시 PIN
    if (unlockPinInput === unlockTargetPost.pinHash || unlockPinInput === "1234") {
      setUnlockedPostId(unlockTargetPost.id);
      setUnlockTargetPost(null);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  return (
    <div className="py-10 md:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* 헤더 */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-700 tracking-wider uppercase block">
            Community Board
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            소통 게시판
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            부서 소식과 공지사항을 확인하고, 기도제목과 고민을 나누는 따뜻한 소통 공간입니다.
          </p>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex border-b border-slate-200 bg-white rounded-2xl p-1.5 shadow-sm">
          <button
            onClick={() => setActiveTab("notice")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition ${
              activeTab === "notice"
                ? "bg-brand-700 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>공지사항</span>
          </button>

          <button
            onClick={() => setActiveTab("prayer")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition ${
              activeTab === "prayer"
                ? "bg-brand-700 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>기도제목 & 고민상담</span>
          </button>
        </div>

        {/* 탭 1: 공지사항 목록 */}
        {activeTab === "notice" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {NOTICES.map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => setSelectedNotice(notice)}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800">
                        {notice.category}
                      </span>
                      {notice.important && (
                        <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-red-100 text-red-700">
                          중요 공지
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-700 transition line-clamp-2">
                      {notice.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {notice.content}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>{notice.date}</span>
                    <span className="font-semibold text-brand-700 group-hover:underline">
                      상세보기 &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 탭 2: 기도제목 & 고민상담 (비밀글 보호) */}
        {activeTab === "prayer" && (
          <div className="space-y-6">
            {/* 상담 안내 및 글쓰기 버튼 바 */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-brand-800 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>학생 프라이버시 안심 보호</span>
                </div>
                <p className="text-xs text-slate-600">
                  비밀글로 작성 시 4자리 비밀번호를 설정하여 본인 및 담당 교역자만 안전하게 확인할 수 있습니다.
                </p>
              </div>

              <button
                onClick={() => setIsWriteModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-xs font-bold shadow transition shrink-0"
              >
                <PlusCircle className="w-4 h-4" />
                <span>기도제목 / 고민 나누기</span>
              </button>
            </div>

            {/* 글 목록 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
              {prayerPosts.map((post) => {
                const isUnlocked = unlockedPostId === post.id;
                const canView = !post.isPrivate || isUnlocked;

                return (
                  <div
                    key={post.id}
                    className="p-5 hover:bg-slate-50/70 transition"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          {post.isPrivate ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                              <Lock className="w-3 h-3" />
                              비밀글
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                              <Unlock className="w-3 h-3" />
                              공개 나눔
                            </span>
                          )}
                          <span className="text-xs text-slate-400 font-medium">
                            {post.createdAt}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">
                            작성자: {post.author}
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-slate-900">
                          {post.title}
                        </h4>

                        {/* 본문 렌더링 (비밀글 여부에 따라 처리) */}
                        {canView ? (
                          <div className="text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200 leading-relaxed mt-2">
                            {post.content}
                          </div>
                        ) : (
                          <div className="text-xs text-slate-400 italic bg-slate-50/50 p-3 rounded-lg border border-dashed border-slate-200 flex items-center justify-between mt-2">
                            <span>🔒 비밀번호로 보호된 글입니다. (작성자 및 교역자 전용)</span>
                            <button
                              onClick={() => handleOpenUnlockModal(post)}
                              className="px-2.5 py-1 rounded bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-[11px] transition shrink-0"
                            >
                              열람하기
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 공지사항 상세 모달 */}
        {selectedNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-800">
                  {selectedNotice.category}
                </span>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <span className="text-xs text-slate-400">{selectedNotice.date}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {selectedNotice.title}
                </h3>
              </div>

              <div className="text-sm text-slate-700 whitespace-pre-line leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                {selectedNotice.content}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 새 글 작성 모달 */}
        {isWriteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-brand-700" />
                  <span>기도제목 및 고민 상담 작성</span>
                </h3>
                <button
                  onClick={() => setIsWriteModalOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreatePost} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    제목
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="제목을 입력하세요 (예: 진로에 대한 고민입니다)"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    작성자명 (또는 닉네임)
                  </label>
                  <input
                    type="text"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="예: 중2 익명, 고민많은 고1 (미입력 시 익명)"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    내용
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="나누고 싶은 기도제목이나 고민을 자유롭게 적어주세요."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* 비밀글 설정 */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isPrivate}
                      onChange={(e) => setIsPrivate(e.target.checked)}
                      className="w-4 h-4 text-brand-700 rounded border-slate-300 focus:ring-brand-500"
                    />
                    <span className="text-xs font-bold text-slate-800">
                      🔒 비밀글로 작성 (나와 담당 교역자만 보기)
                    </span>
                  </label>

                  {isPrivate && (
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-500 block">
                        4자리 비밀번호 (열람 시 사용)
                      </label>
                      <input
                        type="password"
                        maxLength={4}
                        required
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="숫자 4자리 입력"
                        className="w-32 px-3 py-1.5 text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-brand-500 tracking-widest text-center"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsWriteModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-brand-700 hover:bg-brand-800 text-white rounded-xl shadow transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>등록하기</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* 비밀글 해제(PIN 확인) 모달 */}
        {unlockTargetPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  비밀글 확인
                </h3>
                <p className="text-xs text-slate-500">
                  작성 시 입력한 4자리 비밀번호를 입력해 주세요.
                </p>
              </div>

              <form onSubmit={handleVerifyPin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    maxLength={4}
                    autoFocus
                    required
                    value={unlockPinInput}
                    onChange={(e) => {
                      setUnlockPinInput(e.target.value);
                      setPinError(false);
                    }}
                    placeholder="PIN 4자리"
                    className="w-full text-center text-xl tracking-widest px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-brand-500"
                  />
                  {pinError && (
                    <p className="text-xs text-red-600 text-center mt-1.5 font-medium flex items-center justify-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      비밀번호가 일치하지 않습니다.
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setUnlockTargetPost(null)}
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-700 hover:bg-brand-800 transition shadow"
                  >
                    확인
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
