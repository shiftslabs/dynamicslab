'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Dynamics 7 Admin Console</h1>
          <p className="text-slate-400 text-xs">Manage users, tenants, metered AI token refill/resets, and feature flags</p>
        </div>
        <Link href="/base/" className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-semibold text-white">
          Back to App
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="text-slate-400 text-xs font-semibold uppercase">Total Users</div>
          <div className="text-2xl font-bold mt-2">1,248</div>
        </div>
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="text-slate-400 text-xs font-semibold uppercase">Active Tenants</div>
          <div className="text-2xl font-bold mt-2">312</div>
        </div>
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="text-slate-400 text-xs font-semibold uppercase">Daily Free AI Tokens Refilled</div>
          <div className="text-2xl font-bold text-amber-400 mt-2">4.2M</div>
        </div>
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="text-slate-400 text-xs font-semibold uppercase">System Uptime</div>
          <div className="text-2xl font-bold text-emerald-400 mt-2">100.0%</div>
        </div>
      </div>
    </div>
  );
}
