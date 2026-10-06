'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SquaresFour,
  House,
  Users,
  Receipt,
  Kanban,
  ChartBar,
  Sparkle,
  Gear,
  Package,
  Calendar
} from '@phosphor-icons/react';

interface GlobalSidebarProps {
  currentTenant?: string;
  user?: { name: string; email: string; plan: string };
  onOpenMore?: () => void;
}

export const GlobalSidebar: React.FC<GlobalSidebarProps> = ({
  onOpenMore
}) => {
  const pathname = usePathname();

  const navItems = [
    { icon: SquaresFour, label: 'More Grid', onClick: onOpenMore },
    { icon: House, label: 'Base Dashboard', path: '/base/' },
    { icon: Users, label: 'CRM', path: '/crm/' },
    { icon: Receipt, label: 'Invoicing', path: '/invoicing/' },
    { icon: Kanban, label: 'Projects', path: '/projects/' },
    { icon: Package, label: 'Inventory', path: '/inventory/' },
    { icon: ChartBar, label: 'Analytics', path: '/analytics/' },
    { icon: Sparkle, label: 'Metis AI', path: '/metis/' },
    { icon: Calendar, label: 'Calendar', path: '/calendar/' },
    { icon: Gear, label: 'Settings', path: '/settings/' },
  ];

  return (
    <aside className="w-16 h-screen bg-white border-r border-slate-200 flex flex-col items-center py-4 justify-between z-20 select-none">
      <div className="flex flex-col items-center gap-6 w-full">
        <Link href="/base/" className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-md hover:bg-blue-700 transition">
          D7
        </Link>

        <div className="flex flex-col items-center gap-2 w-full px-2">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = item.path ? (pathname === item.path || pathname.startsWith(item.path + '/')) : false;

            if (item.onClick) {
              return (
                <button
                  key={idx}
                  onClick={item.onClick}
                  title={item.label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition"
                >
                  <Icon size={20} />
                </button>
              );
            }

            return (
              <Link
                key={idx}
                href={item.path!}
                title={item.label}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-bold border border-blue-200/80'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </div>
      </div>

      <Link
        href="/profile/"
        title="User Profile"
        className="w-10 h-10 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center hover:bg-slate-900 transition"
      >
        K
      </Link>
    </aside>
  );
};
