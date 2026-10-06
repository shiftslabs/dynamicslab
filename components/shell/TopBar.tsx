'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Bell,
  MagnifyingGlass,
  CaretDown,
  SignOut,
  User,
  CreditCard,
  List,
  Check
} from '@phosphor-icons/react';
import { NotificationPanel } from './NotificationPanel';
import { store } from '@/lib/store';

interface TopBarProps {
  currentFeatureTitle?: string;
  onToggleSidebar?: () => void;
  onOpenMetis?: () => void;
}

const featureNavSpecs: Record<string, { label: string; href: string }[]> = {
  crm: [
    { label: 'Contacts', href: '/crm/' },
    { label: 'Deals', href: '/crm/deals/' },
    { label: 'Companies', href: '/crm/companies/' },
    { label: 'Settings', href: '/crm/settings/' },
  ],
  invoicing: [
    { label: 'All Invoices', href: '/invoicing/' },
    { label: 'Drafts', href: '/invoicing/drafts/' },
    { label: 'Sent', href: '/invoicing/sent/' },
    { label: 'Paid', href: '/invoicing/paid/' },
    { label: 'Overdue', href: '/invoicing/overdue/' },
    { label: 'Settings', href: '/invoicing/settings/' },
  ],
  projects: [
    { label: 'Active Projects', href: '/projects/' },
    { label: 'Completed', href: '/projects/completed/' },
    { label: 'Archived', href: '/projects/archived/' },
    { label: 'Settings', href: '/projects/settings/' },
  ],
  metiswork: [
    { label: 'Automation Workflows', href: '/metiswork/' },
    { label: 'Triggers', href: '/metiswork/triggers/' },
    { label: 'Actions', href: '/metiswork/actions/' },
    { label: 'History', href: '/metiswork/history/' },
  ],
  metisloveb: [
    { label: 'AI Business Tools', href: '/metisloveb/' },
    { label: 'Tool History', href: '/metisloveb/history/' },
    { label: 'Settings', href: '/metisloveb/settings/' },
  ],
  settings: [
    { label: 'Profile', href: '/settings/' },
    { label: 'API Keys', href: '/settings/keys/' },
    { label: 'Billing & Plans', href: '/settings/billing/' },
    { label: 'Storage Providers', href: '/settings/storage/' },
    { label: 'AI Provider Keys (BYOK)', href: '/settings/ai/' },
  ]
};

export const TopBar: React.FC<TopBarProps> = ({
  onToggleSidebar,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);
  const [notifPanelOpen, setNotifPanelOpen] = useState(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);

  // Extract feature name from pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  const featureSlug = pathSegments[0] || 'base';
  const pageSlug = pathSegments[1] || 'home';

  const featureName = featureSlug.toUpperCase();
  const pageName = pageSlug.charAt(0).toUpperCase() + pageSlug.slice(1);

  const currentNavItems = featureNavSpecs[featureSlug] || [];

  const handleLogout = () => {
    store.logout();
    router.push('/login/');
  };

  return (
    <header className="h-14 bg-white border-b border-slate-200 px-4 flex items-center justify-between z-30 sticky top-0">
      {/* Left side: Logo / Feature / Page ▼ */}
      <div className="flex items-center gap-3 relative">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-1.5 text-slate-600 hover:bg-slate-100 rounded-md"
        >
          <List size={20} />
        </button>

        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
          <Link href="/base/" className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-xs shadow-xs">
            D7
          </Link>
          <span className="text-slate-900 font-bold">{featureName}</span>
          <span className="text-slate-400 font-normal">/</span>
          <span className="text-slate-600">{pageName}</span>

          <button
            onClick={() => setNavDropdownOpen(!navDropdownOpen)}
            className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition"
          >
            <CaretDown size={14} />
          </button>
        </div>

        {/* Feature Nav Dropdown Card */}
        {navDropdownOpen && (
          <div className="absolute top-10 left-12 w-56 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-40">
            <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {featureName} Sub-Navigation
            </div>
            {currentNavItems.length === 0 ? (
              <div className="px-3 py-2 text-xs text-slate-500 font-medium">No nav for this feature.</div>
            ) : (
              currentNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setNavDropdownOpen(false)}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  <span>{item.label}</span>
                  {pathname === item.href && <Check size={14} className="text-blue-600" />}
                </Link>
              ))
            )}
          </div>
        )}
      </div>

      {/* Right side: Search, Bell with Unread Badge, Avatar */}
      <div className="flex items-center gap-3">
        <button className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition">
          <MagnifyingGlass size={18} />
        </button>

        {/* Bell Button */}
        <button
          onClick={() => setNotifPanelOpen(true)}
          className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition relative"
        >
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Avatar & Menu */}
        <div className="relative">
          <button
            onClick={() => setAvatarMenuOpen(!avatarMenuOpen)}
            className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center border border-white shadow-xs"
          >
            K
          </button>

          {avatarMenuOpen && (
            <div className="absolute right-0 top-10 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-40 text-xs">
              <Link href="/profile/" onClick={() => setAvatarMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50">
                <User size={14} /> Profile
              </Link>
              <Link href="/settings/billing/" onClick={() => setAvatarMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-slate-50">
                <CreditCard size={14} /> Billing & Plan
              </Link>
              <div className="border-t border-slate-100 my-1"></div>
              <button onClick={handleLogout} className="w-full flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 text-left font-semibold">
                <SignOut size={14} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Slide-Over Notification Panel */}
      <NotificationPanel isOpen={notifPanelOpen} onClose={() => setNotifPanelOpen(false)} />
    </header>
  );
};
