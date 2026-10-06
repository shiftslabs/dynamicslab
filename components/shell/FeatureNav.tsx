'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavItem {
  label: string;
  href: string;
}

interface FeatureNavProps {
  title: string;
  items: NavItem[];
}

export const FeatureNav: React.FC<FeatureNavProps> = ({ title, items }) => {
  const pathname = usePathname();

  return (
    <div className="w-56 h-screen bg-slate-50 border-r border-slate-200 flex flex-col z-10 shrink-0">
      <div className="p-4 border-b border-slate-200">
        <h3 className="font-bold text-slate-800 text-base">{title}</h3>
      </div>
      <nav className="p-2 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
                active
                  ? 'bg-white text-brand-deep font-semibold shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
