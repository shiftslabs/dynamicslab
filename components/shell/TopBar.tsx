'use client';

import React from 'react';
import Link from 'next/link';
import {
  Bell,
  WifiHigh,
  SignOut,
  List,
  CaretRight,
  Sparkle
} from '@phosphor-icons/react';

interface TopBarProps {
  currentFeatureTitle?: string;
  onToggleSidebar?: () => void;
  onToggleFeatureNavMobile?: () => void;
  onOpenMetis?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentFeatureTitle = 'Dashboard',
  onToggleSidebar,
  onOpenMetis
}) => {
  return (
    <header className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between z-10 sticky top-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-1.5 text-slate-600 hover:bg-slate-100 rounded-md"
        >
          <List size={20} />
        </button>

        <div className="flex items-center gap-2 text-sm">
          <Link href="/base/" className="font-bold text-blue-600 hover:underline">
            Dynamics 7
          </Link>
          <CaretRight size={14} className="text-slate-400" />
          <span className="font-semibold text-slate-800">{currentFeatureTitle}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
          <WifiHigh size={16} />
          <span>Cloud Online</span>
        </div>

        <button
          onClick={onOpenMetis}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 rounded-full text-xs font-semibold transition"
        >
          <Sparkle size={14} className="text-amber-500" />
          <span>Metis AI</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200/60">
          <Bell size={14} />
          <span>2 Overdue</span>
        </div>

        <Link
          href="/login/"
          className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-sm transition"
        >
          <SignOut size={14} />
          <span>Account</span>
        </Link>
      </div>
    </header>
  );
};
