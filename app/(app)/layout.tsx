'use client';

import React, { useState } from 'react';
import { GlobalSidebar } from '@/components/shell/GlobalSidebar';
import { TopBar } from '@/components/shell/TopBar';
import { MobileDock } from '@/components/shell/MobileDock';
import { MorePanel } from '@/components/shell/MorePanel';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-100 text-slate-900">
      <div className="hidden md:block shrink-0">
        <GlobalSidebar onOpenMore={() => setMoreOpen(true)} />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="fixed inset-0 bg-slate-900/50" onClick={() => setSidebarOpen(false)}></div>
          <div className="relative z-50 w-64 bg-white h-full">
            <GlobalSidebar onOpenMore={() => { setSidebarOpen(false); setMoreOpen(true); }} />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <TopBar
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          onOpenMetis={() => window.location.href = '/metis/'}
        />

        <main className="flex-1 flex overflow-hidden relative pb-16 md:pb-0">
          {children}
        </main>
      </div>

      <MobileDock onOpenMore={() => setMoreOpen(true)} />
      <MorePanel isOpen={moreOpen} onClose={() => setMoreOpen(false)} />
    </div>
  );
}
