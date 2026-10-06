'use client';

import React from 'react';
import { FeatureNav } from '@/components/shell/FeatureNav';
import { Plus, Receipt, CheckCircle, Clock } from '@phosphor-icons/react';

const invoicingNavItems = [
  { label: 'All Invoices', href: '/invoicing/' },
  { label: 'Drafts', href: '/invoicing/drafts/' },
  { label: 'Sent', href: '/invoicing/sent/' },
  { label: 'Paid', href: '/invoicing/paid/' },
  { label: 'Overdue', href: '/invoicing/overdue/' },
  { label: 'Settings', href: '/invoicing/settings/' },
];

export default function InvoicingPage() {
  const invoices = [
    { id: 'INV-1042', customer: 'Acme Corp', amount: '$1,250.00', status: 'Paid', dueDate: '2026-03-01' },
    { id: 'INV-1043', customer: 'Globex Inc', amount: '$3,400.00', status: 'Overdue', dueDate: '2026-02-15' },
    { id: 'INV-1044', customer: 'Vortex Tech', amount: '$8,900.00', status: 'Sent', dueDate: '2026-03-20' },
  ];

  return (
    <div className="flex-1 flex h-full overflow-hidden">
      <div className="hidden md:block">
        <FeatureNav title="Invoicing" items={invoicingNavItems} />
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-slate-50">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Invoices</h1>
            <p className="text-slate-500 text-sm">Create, send, and track payments seamlessly</p>
          </div>
          <button className="px-4 py-2 bg-brand-deep text-white rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-brand-dark transition shadow-sm">
            <Plus size={16} /> New Invoice
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3">Invoice ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Due Date</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 transition">
                  <td className="p-3 font-semibold text-brand-deep">{inv.id}</td>
                  <td className="p-3 font-medium text-slate-900">{inv.customer}</td>
                  <td className="p-3 font-bold">{inv.amount}</td>
                  <td className="p-3 text-slate-500">{inv.dueDate}</td>
                  <td className="p-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      inv.status === 'Paid' ? 'bg-green-100 text-green-700' :
                      inv.status === 'Overdue' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
