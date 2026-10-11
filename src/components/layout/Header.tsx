"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram, BookOpen, Calendar, MessageSquare, Lock, Church } from "lucide-react";
import { CHURCH_INFO } from "@/data/churchInfo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "홈" },
    { href: "/worship", label: "예배 & 말씀", icon: BookOpen },
    { href: "/calendar", label: "통합 달력", icon: Calendar },
    { href: "/board", label: "소통 게시판", icon: MessageSquare },
    { href: "/teachers", label: "교사 전용", icon: Lock },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 & 부서명 */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-700 flex items-center justify-center text-white shadow-sm group-hover:bg-brand-800 transition">
              <Church className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-brand-700 tracking-wider block">
                {CHURCH_INFO.churchName}
              </span>
              <span className="text-base font-bold text-slate-900 group-hover:text-brand-700 transition">
                {CHURCH_INFO.departmentName}
              </span>
            </div>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition ${
                    active
                      ? "text-brand-700 bg-brand-50 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* 인스타그램 바로가기 및 모바일 햄버거 버튼 */}
          <div className="flex items-center gap-2">
            <a
              href={CHURCH_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="청소년교회 공식 인스타그램"
              className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition"
              title="공식 인스타그램 바로가기"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* 모바일 햄버거 토글 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition"
              aria-label="메뉴 열기"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  active
                    ? "text-brand-700 bg-brand-50 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {Icon && <Icon className="w-4 h-4 text-slate-400" />}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
