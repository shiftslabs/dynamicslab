'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  House,
  Users,
  Sparkle,
  Kanban,
  SquaresFour
} from '@phosphor-icons/react';

interface MobileDockProps {
  onOpenMore?: () => void;
}

export const MobileDock: React.FC<MobileDockProps> = ({ onOpenMore }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around z-30 px-2 shadow-lg">
      {/* Position 1: Base */}
      <Link
        href="/base/"
        className={`flex flex-col items-center justify-center gap-0.5 w-12 text-center ${isActive('/base') ? 'text-brand-deep font-bold' : 'text-slate-500'}`}
      >
        <House size={20} />
        <span className="text-[10px]">Base</span>
      </Link>

      {/* Position 2: CRM */}
      <Link
        href="/crm/"
        className={`flex flex-col items-center justify-center gap-0.5 w-12 text-center ${isActive('/crm') ? 'text-brand-deep font-bold' : 'text-slate-500'}`}
      >
        <Users size={20} />
        <span className="text-[10px]">CRM</span>
      </Link>

      {/* Position 3: Metis (Center Raised) */}
      <Link
        href="/metis/"
        className="flex flex-col items-center justify-center -mt-5"
      >
        <div className="w-12 h-12 rounded-full bg-brand-deep text-white flex items-center justify-center shadow-lg border-2 border-white">
          <Sparkle size={22} className="text-amber-400" />
        </div>
        <span className="text-[10px] font-semibold text-brand-deep mt-0.5">Metis</span>
      </Link>

      {/* Position 4: Projects */}
      <Link
        href="/projects/"
        className={`flex flex-col items-center justify-center gap-0.5 w-12 text-center ${isActive('/projects') ? 'text-brand-deep font-bold' : 'text-slate-500'}`}
      >
        <Kanban size={20} />
        <span className="text-[10px]">Projects</span>
      </Link>

      {/* Position 5: More */}
      <button
        onClick={onOpenMore}
        className={`flex flex-col items-center justify-center gap-0.5 w-12 text-center ${isActive('/more') ? 'text-brand-deep font-bold' : 'text-slate-500'}`}
      >
        <SquaresFour size={20} />
        <span className="text-[10px]">More</span>
      </button>
    </nav>
  );
};
