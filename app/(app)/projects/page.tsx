'use client';

import React from 'react';
import { FeatureNav } from '@/components/shell/FeatureNav';
import { Plus } from '@phosphor-icons/react';

const projectsNavItems = [
  { label: 'Active Projects', href: '/projects/' },
  { label: 'Completed', href: '/projects/completed/' },
  { label: 'Archived', href: '/projects/archived/' },
  { label: 'Settings', href: '/projects/settings/' },
];

export default function ProjectsPage() {
  return (
    <div className="flex-1 flex h-full overflow-hidden">
      <div className="hidden md:block">
        <FeatureNav title="Projects" items={projectsNavItems} />
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-slate-50">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Projects</h1>
            <p className="text-slate-500 text-sm">Gantt views, tasks, dependencies, and delivery</p>
          </div>
          <button className="px-4 py-2 bg-brand-deep text-white rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-brand-dark transition shadow-sm">
            <Plus size={16} /> New Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-base">Enterprise OS Rollout</h3>
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">In Progress</span>
            </div>
            <p className="text-xs text-slate-500">Full deployment of Dynamics 7 for 250 enterprise seats.</p>
            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Progress</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-brand-deep h-full w-[65%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
