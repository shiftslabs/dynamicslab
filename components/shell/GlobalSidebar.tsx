'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  House,
  Sparkle,
  SquaresFour,
  Rss,
  Users,
  Gear,
  CaretDown,
  Building,
  CheckCircle,
  Plus
} from '@phosphor-icons/react';

interface GlobalSidebarProps {
  currentTenant?: string;
  user?: { name: string; email: string; plan: string };
  onOpenMore?: () => void;
}

export const GlobalSidebar: React.FC<GlobalSidebarProps> = ({
  currentTenant = 'BabblSoft Inc',
  user = { name: 'Krack', email: 'krack@babblsoft.site', plan: 'Super Tier' },
  onOpenMore
}) => {
  const pathname = usePathname();
  const [tenantDropdownOpen, setTenantDropdownOpen] = useState(false);
  const [activeTenant, setActiveTenant] = useState(currentTenant);

  const tenantsList = ['BabblSoft Inc', 'Personal Workspace', 'Metier Research Labs'];

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col justify-between select-none z-20">
      {/* Top: Tenant Switcher */}
      <div>
        <div className="p-4 border-b border-slate-100 relative">
          <button
            onClick={() => setTenantDropdownOpen(!tenantDropdownOpen)}
            className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition border border-slate-200/80"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-7 h-7 rounded bg-brand-deep flex items-center justify-center text-white text-xs font-bold shrink-0">
                {activeTenant.charAt(0)}
              </div>
              <span className="font-semibold text-slate-800 text-sm truncate">{activeTenant}</span>
            </div>
            <CaretDown size={14} className="text-slate-500 shrink-0" />
          </button>

          {tenantDropdownOpen && (
            <div className="absolute top-16 left-4 right-4 bg-white border border-slate-200 rounded-lg shadow-xl py-2 z-30">
              <div className="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">Switch Tenant</div>
              {tenantsList.map((t) => (
                <button
                  key={t}
                  onClick={() => { setActiveTenant(t); setTenantDropdownOpen(false); }}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 text-left"
                >
                  <span className="truncate">{t}</span>
                  {activeTenant === t && <CheckCircle size={14} className="text-brand-deep" />}
                </button>
              ))}
              <div className="border-t border-slate-100 my-1"></div>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-brand-deep hover:bg-blue-50">
                <Plus size={14} /> Create new company
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Nav Sections */}
        <div className="p-3 space-y-6 overflow-y-auto max-h-[calc(100vh-140px)] no-scrollbar">
          {/* Section 1: Core */}
          <div>
            <div className="px-2 mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Core</div>
            <div className="space-y-0.5">
              <Link
                href="/base/"
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/base') ? 'bg-blue-50 text-brand-deep font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <House size={18} /> Base
              </Link>
              <Link
                href="/metis/"
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/metis') ? 'bg-blue-50 text-brand-deep font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <Sparkle size={18} className="text-amber-500" /> Metis
              </Link>
              <button
                onClick={onOpenMore}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 transition text-left"
              >
                <SquaresFour size={18} /> More (All Features)
              </button>
            </div>
          </div>

          {/* Section 2: System Defaults */}
          <div>
            <div className="px-2 mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">System Defaults</div>
            <div className="space-y-0.5">
              <Link
                href="/pipeline/"
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/pipeline') ? 'bg-blue-50 text-brand-deep font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <Rss size={18} /> Pipeline
              </Link>
              <Link
                href="/crm/"
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/crm') ? 'bg-blue-50 text-brand-deep font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <Users size={18} /> CRM
              </Link>
            </div>
          </div>

          {/* Section 3: Frequently Used */}
          <div>
            <div className="px-2 mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Frequently Used</div>
            <div className="space-y-0.5">
              <Link href="/invoicing/" className={`flex items-center gap-3 px-3 py-1.5 rounded-md text-xs font-medium ${isActive('/invoicing') ? 'bg-blue-50 text-brand-deep' : 'text-slate-600 hover:bg-slate-50'}`}>Invoicing</Link>
              <Link href="/projects/" className={`flex items-center gap-3 px-3 py-1.5 rounded-md text-xs font-medium ${isActive('/projects') ? 'bg-blue-50 text-brand-deep' : 'text-slate-600 hover:bg-slate-50'}`}>Projects</Link>
              <Link href="/finance/" className={`flex items-center gap-3 px-3 py-1.5 rounded-md text-xs font-medium ${isActive('/finance') ? 'bg-blue-50 text-brand-deep' : 'text-slate-600 hover:bg-slate-50'}`}>Finance</Link>
              <Link href="/documents/" className={`flex items-center gap-3 px-3 py-1.5 rounded-md text-xs font-medium ${isActive('/documents') ? 'bg-blue-50 text-brand-deep' : 'text-slate-600 hover:bg-slate-50'}`}>Documents</Link>
              <Link href="/calendar/" className={`flex items-center gap-3 px-3 py-1.5 rounded-md text-xs font-medium ${isActive('/calendar') ? 'bg-blue-50 text-brand-deep' : 'text-slate-600 hover:bg-slate-50'}`}>Calendar</Link>
            </div>
          </div>

          {/* Section 4: Utilities */}
          <div>
            <div className="px-2 mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Utilities</div>
            <Link
              href="/settings/"
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/settings') ? 'bg-blue-50 text-brand-deep font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Gear size={18} /> Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Section 5: Bottom User Card */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/50">
        <Link href="/profile/" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition">
          <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
            {user.name.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <div className="text-xs font-semibold text-slate-800 truncate">{user.name}</div>
            <div className="text-[10px] text-slate-500 truncate">{user.plan}</div>
          </div>
        </Link>
      </div>
    </aside>
  );
};
