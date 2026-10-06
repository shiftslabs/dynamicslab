'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkle, Users, CurrencyDollar, Kanban } from '@phosphor-icons/react';

export default function BasePage() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="p-6 bg-gradient-to-r from-brand-deep to-indigo-900 text-white rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold">Welcome to Dynamics 7</h1>
          <p className="text-blue-200 text-sm mt-1">Your entire business in one operating system. Run well.</p>
          <div className="mt-4 flex gap-3">
            <Link href="/metis/" className="px-4 py-2 bg-amber-400 text-slate-900 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-amber-300">
              <Sparkle size={16} /> Speak to Metis
            </Link>
            <Link href="/crm/" className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg text-sm font-semibold hover:bg-white/20">
              View CRM Pipeline
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="text-slate-500 text-xs font-semibold uppercase">Active Deals</div>
            <div className="text-2xl font-bold text-slate-900 mt-2">14</div>
            <div className="text-xs text-green-600 font-medium mt-1">+$42,000 forecasted</div>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="text-slate-500 text-xs font-semibold uppercase">Overdue Invoices</div>
            <div className="text-2xl font-bold text-red-600 mt-2">2</div>
            <div className="text-xs text-slate-500 mt-1">$3,400 pending</div>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="text-slate-500 text-xs font-semibold uppercase">Open Projects</div>
            <div className="text-2xl font-bold text-slate-900 mt-2">8</div>
            <div className="text-xs text-blue-600 font-medium mt-1">3 due this week</div>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="text-slate-500 text-xs font-semibold uppercase">Metis Tokens</div>
            <div className="text-2xl font-bold text-slate-900 mt-2">50,000</div>
            <div className="text-xs text-slate-500 mt-1">Daily free tokens ready</div>
          </div>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Today's Operating Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <Users className="text-brand-deep" size={20} />
              <div>
                <div className="text-sm font-semibold">New Contact Added</div>
                <div className="text-xs text-slate-500">Sarah Jenkins (Acme Corp) was synced into CRM</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <CurrencyDollar className="text-green-600" size={20} />
              <div>
                <div className="text-sm font-semibold">Invoice #1042 Paid</div>
                <div className="text-xs text-slate-500">$1,250 received via Stripe</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <Kanban className="text-indigo-600" size={20} />
              <div>
                <div className="text-sm font-semibold">Project Milestone Achieved</div>
                <div className="text-xs text-slate-500">Phase 1 completed for Enterprise Migration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
