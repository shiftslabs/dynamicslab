'use client';

import React from 'react';
import {
  CurrencyDollar,
  TrendUp,
  ShoppingBag,
  Stack,
  Warning,
  Sparkle
} from '@phosphor-icons/react';

export default function BasePage() {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-slate-50 space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Dashboard</h1>
        <p className="text-slate-500 text-xs mt-1 font-medium">{currentDate}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Today's Revenue</span>
            <CurrencyDollar size={18} className="text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">$0</div>
          <div className="text-xs text-slate-400 font-medium">0 sales recorded</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Today's Net Profit</span>
            <TrendUp size={18} className="text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">$0</div>
          <div className="text-xs text-slate-400 font-medium">Gross $0 - Exp $0</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Week's Revenue</span>
            <ShoppingBag size={18} className="text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">$0</div>
          <div className="text-xs text-slate-400 font-medium">0 sales recorded</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Week's Net Profit</span>
            <TrendUp size={18} className="text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">$0</div>
          <div className="text-xs text-slate-400 font-medium">Gross $0 - Exp $0</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Stock Units</span>
            <Stack size={18} className="text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">7,082 <span className="text-xs font-semibold text-slate-500">units</span></div>
          <div className="text-xs text-slate-400 font-medium">401 active SKUs</div>
        </div>

        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Stock Value</span>
            <CurrencyDollar size={18} className="text-blue-600" />
          </div>
          <div className="text-2xl font-black text-blue-600">$12,367,380</div>
          <div className="text-xs text-slate-400 font-medium">Inventory valuation</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2 max-w-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Low Stock Alerts</span>
            <Warning size={18} className="text-blue-600" />
          </div>
          <div className="text-3xl font-black text-blue-600">178</div>
          <div className="text-xs text-slate-400 font-medium">At or below reorder threshold</div>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs md:col-span-2 space-y-4">
          <h2 className="text-sm font-bold text-slate-800">Revenue & Net Profit — Last 7 Days</h2>
          <div className="h-40 flex items-center justify-center border-t border-slate-100 text-slate-400 text-xs">
            No sales or transactions recorded in the selected period.
          </div>
        </div>
      </div>
    </div>
  );
}
