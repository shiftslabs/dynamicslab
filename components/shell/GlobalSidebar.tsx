'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  House,
  Sparkle,
  SquaresFour,
  Cpu,
  BookBookmark,
  Lightning,
  Gear,
  CaretDown,
  Check,
  Plus,
  Pin,
  PushPin
} from '@phosphor-icons/react';
import { store } from '@/lib/store';

interface GlobalSidebarProps {
  currentTenant?: string;
  user?: { name: string; email: string; plan: string };
  onOpenMore?: () => void;
}

export const GlobalSidebar: React.FC<GlobalSidebarProps> = ({
  currentTenant = 'BabblSoft Inc',
  user = { name: 'Krack', email: 'krack@babblsoft.site', plan: 'Super' },
  onOpenMore
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [tenantDropdownOpen, setTenantDropdownOpen] = useState(false);
  const [activeTenant, setActiveTenant] = useState(currentTenant);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(store.getFavorites());
  }, []);

  const tenantsList = ['BabblSoft Inc', 'Personal Workspace', 'Metier Research Labs'];

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <aside className="w-60 h-screen bg-white border-r border-slate-200 flex flex-col justify-between select-none z-20 shrink-0 text-slate-800">
      <div>
        {/* Section 1: Tenant Switcher */}
        <div className="p-3 border-b border-slate-100 relative">
          <button
            onClick={() => setTenantDropdownOpen(!tenantDropdownOpen)}
            className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition border border-slate-200/80 bg-slate-50/50"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {activeTenant.charAt(0)}
              </div>
              <span className="font-semibold text-slate-800 text-xs truncate">{activeTenant}</span>
            </div>
            <CaretDown size={12} className="text-slate-500 shrink-0" />
          </button>

          {tenantDropdownOpen && (
            <div className="absolute top-14 left-3 right-3 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40 text-xs">
              <div className="px-3 py-1 font-bold text-slate-400 uppercase text-[10px] tracking-wider">Switch Workspace</div>
              {tenantsList.map((t) => (
                <button
                  key={t}
                  onClick={() => { setActiveTenant(t); setTenantDropdownOpen(false); }}
                  className="w-full flex items-center justify-between px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 text-left"
                >
                  <span className="truncate">{t}</span>
                  {activeTenant === t && <Check size={14} className="text-blue-600" />}
                </button>
              ))}
              <div className="border-t border-slate-100 my-1"></div>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 font-semibold">
                <Plus size={14} /> Create new company
              </button>
            </div>
          )}
        </div>

        {/* Navigation Sections */}
        <div className="p-3 space-y-5 overflow-y-auto max-h-[calc(100vh-120px)] no-scrollbar text-xs">
          {/* Section 2: Core */}
          <div>
            <div className="px-2 mb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Core</div>
            <div className="space-y-0.5">
              <Link href="/base/" className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg font-medium transition ${isActive('/base') ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
                <House size={16} /> Base
              </Link>
              <Link href="/metis/" className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg font-medium transition ${isActive('/metis') ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
                <Sparkle size={16} className="text-amber-500" /> Metis
              </Link>
              <button onClick={onOpenMore} className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg font-medium text-slate-600 hover:bg-slate-50 transition text-left">
                <SquaresFour size={16} /> More Grid
              </button>
            </div>
          </div>

          {/* Section 3: AI Suite */}
          <div>
            <div className="px-2 mb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Suite</div>
            <div className="space-y-0.5">
              <Link href="/metisloveb/" className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg font-medium transition ${isActive('/metisloveb') ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
                <Cpu size={16} className="text-indigo-600" /> metisloveb
              </Link>
              <Link href="/metiswork/" className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg font-medium transition ${isActive('/metiswork') ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
                <Lightning size={16} className="text-emerald-600" /> metiswork
              </Link>
              <Link href="/metisbook/" className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg font-medium transition ${isActive('/metisbook') ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
                <BookBookmark size={16} className="text-blue-600" /> metisbook
              </Link>
            </div>
          </div>

          {/* Section 4: Favorites (Pinned) */}
          <div>
            <div className="px-2 mb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>Favorites</span>
              <PushPin size={12} />
            </div>
            <div className="space-y-0.5">
              {favorites.map((fav) => {
                const label = fav.replace(/\//g, '').toUpperCase();
                return (
                  <Link key={fav} href={fav} className={`block px-2.5 py-1.5 rounded-lg font-medium transition ${isActive(fav) ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Section 5: Settings */}
          <div>
            <div className="px-2 mb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Utilities</div>
            <Link href="/settings/" className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg font-medium transition ${isActive('/settings') ? 'bg-blue-50 text-blue-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Gear size={16} /> Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Section 6: User Card */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/50">
        <Link href="/profile/" className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-slate-100 transition">
          <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
            {user.name.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <div className="text-xs font-semibold text-slate-800 truncate">{user.name}</div>
            <div className="text-[10px] text-slate-500 truncate">{user.plan} Tier</div>
          </div>
        </Link>
      </div>
    </aside>
  );
};
