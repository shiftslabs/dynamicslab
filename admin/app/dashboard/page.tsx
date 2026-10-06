'use client';

import React from 'react';
import { Users, CurrencyDollar, Cpu, ShieldAlert } from '@phosphor-icons/react';

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-6 bg-slate-900 min-h-screen text-white">
      <div>
        <h1 className="text-3xl font-bold">Dynamics 7 Admin Console</h1>
        <p className="text-slate-400 text-sm">System oversight, metered AI configuration, logs & tenant management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-5 bg-slate-800 border border-slate-700 rounded-xl">
          <div className="text-slate-400 text-xs font-semibold uppercase">Total Users</div>
          <div className="text-3xl font-bold mt-2">1,248</div>
        </div>
        <div className="p-5 bg-slate-800 border border-slate-700 rounded-xl">
          <div className="text-slate-400 text-xs font-semibold uppercase">Active Tenants</div>
          <div className="text-3xl font-bold mt-2">312</div>
        </div>
        <div className="p-5 bg-slate-800 border border-slate-700 rounded-xl">
          <div className="text-slate-400 text-xs font-semibold uppercase">Daily AI Tokens Consumed</div>
          <div className="text-3xl font-bold text-amber-400 mt-2">4.2M</div>
        </div>
        <div className="p-5 bg-slate-800 border border-slate-700 rounded-xl">
          <div className="text-slate-400 text-xs font-semibold uppercase">API Health</div>
          <div className="text-3xl font-bold text-green-400 mt-2">99.98%</div>
        </div>
      </div>
    </div>
  );
}
