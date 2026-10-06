'use client';

import React from 'react';
import Link from 'next/link';
import {
  Bell,
  MagnifyingGlass,
  Sparkle,
  List,
  CaretDown
} from '@phosphor-icons/react';

interface TopBarProps {
  currentFeatureTitle?: string;
  onToggleSidebar?: () => void;
  onToggleFeatureNavMobile?: () => void;
  onOpenMetis?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentFeatureTitle = 'CRM',
  onToggleSidebar,
  onToggleFeatureNavMobile,
  onOpenMetis
}) => {
  return (
    <header className="h-14 bg-white border-b border-slate-200 px-4 flex items-center justify-between z-10 sticky top-0">
      {/* Left side: Logo & Title / Mobile Toggles */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-1.5 text-slate-600 hover:bg-slate-100 rounded-md"
        >
          <List size={20} />
        </button>

        <Link href="/base/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-brand-deep rounded-md flex items-center justify-center font-black text-white text-xs tracking-wider">
            D7
          </div>
          <span className="font-bold text-slate-900 tracking-tight text-base hidden sm:inline">
            Dynamics 7
          </span>
        </Link>

        {/* Mobile Chevron for Feature Nav dropdown */}
        <button
          onClick={onToggleFeatureNavMobile}
          className="md:hidden flex items-center gap-1 text-slate-700 bg-slate-100 px-2 py-1 rounded text-xs font-semibold"
        >
          <span>{currentFeatureTitle}</span>
          <CaretDown size={12} />
        </button>
      </div>

      {/* Right side: Actions & Profile */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMetis}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-brand-deep hover:bg-blue-100 text-xs font-semibold transition"
        >
          <Sparkle size={14} className="text-amber-500" />
          <span>Ask Metis</span>
        </button>

        <button className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition">
          <MagnifyingGlass size={18} />
        </button>

        <button className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition relative">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <Link href="/profile/" className="w-8 h-8 rounded-full bg-brand-deep text-white flex items-center justify-center font-semibold text-xs border border-white shadow-sm">
          K
        </Link>
      </div>
    </header>
  );
};
