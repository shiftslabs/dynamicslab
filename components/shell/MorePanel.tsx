'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  X,
  CaretDown,
  CaretRight,
  Sparkle,
  CurrencyDollar,
  Briefcase,
  UsersThree,
  Megaphone,
  Headset,
  ChartBar,
  ShoppingCart,
  ChatCircleText,
  FileText,
  Brain,
  Calendar,
  Lightning,
  Cpu
} from '@phosphor-icons/react';

interface MorePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  {
    id: 'sales',
    name: 'Sales',
    icon: CurrencyDollar,
    features: [
      { name: 'CRM', path: '/crm/', desc: 'Contacts, deals, companies & revenue forecasting' },
      { name: 'Leads', path: '/leads/', desc: 'Capture, score, nurture & track conversion' },
      { name: 'Proposals', path: '/proposals/', desc: 'Create, send & track acceptance' },
      { name: 'Quotes', path: '/quotes/', desc: 'Create quotes & convert to invoices' },
      { name: 'Pipeline', path: '/pipeline/', desc: 'Curated market trends & competitor updates' },
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: CurrencyDollar,
    features: [
      { name: 'Invoicing', path: '/invoicing/', desc: 'Invoices, reminders & partial payments' },
      { name: 'Payments', path: '/payments/', desc: 'Record balances, refunds & receipts' },
      { name: 'Finance', path: '/finance/', desc: 'Income, expenses, budgets & net worth' },
      { name: 'Taxes', path: '/taxes/', desc: 'Deductions, filings & reminders' },
      { name: 'Subscriptions', path: '/subscriptions/', desc: 'Monthly spend & renewal alerts' },
      { name: 'Expenses', path: '/expenses/', desc: 'Expense reports & approvals' },
    ]
  },
  {
    id: 'operations',
    name: 'Operations',
    icon: Briefcase,
    features: [
      { name: 'Projects', path: '/projects/', desc: 'Tasks, Gantt views & dependencies' },
      { name: 'Tasks', path: '/tasks/', desc: 'To-do list & priority organization' },
      { name: 'Time Tracking', path: '/time/', desc: 'Billable hours & timesheets' },
      { name: 'Inventory', path: '/inventory/', desc: 'Stock levels & warehouse locations' },
      { name: 'Supply Chain', path: '/supply-chain/', desc: 'Suppliers & logistics' },
      { name: 'Procurement', path: '/procurement/', desc: 'Purchase orders & receiving' },
      { name: 'Vendors', path: '/vendors/', desc: 'Vendor management & performance' },
      { name: 'Assets', path: '/assets/', desc: 'Depreciation & maintenance' },
    ]
  },
  {
    id: 'people',
    name: 'People',
    icon: UsersThree,
    features: [
      { name: 'Team', path: '/team/', desc: 'Directory, roles & permissions' },
      { name: 'HR', path: '/hr/', desc: 'Onboarding, leave & attendance' },
      { name: 'Payroll', path: '/payroll/', desc: 'Salary, deductions & payslips' },
      { name: 'Recruitment', path: '/recruitment/', desc: 'Applicants & interview scheduling' },
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: Megaphone,
    features: [
      { name: 'Campaigns', path: '/campaigns/', desc: 'Email & social campaigns' },
      { name: 'Email Marketing', path: '/email/', desc: 'Bulk emails & templates' },
      { name: 'Social Media', path: '/social/', desc: 'Post scheduling & engagement' },
      { name: 'SEO', path: '/seo/', desc: 'Keywords, rankings & audits' },
      { name: 'Forms', path: '/forms/', desc: 'Landing pages & lead capture' },
    ]
  },
  {
    id: 'support',
    name: 'Support',
    icon: Headset,
    features: [
      { name: 'Tickets', path: '/tickets/', desc: 'Support tickets & SLA tracking' },
      { name: 'Live Chat', path: '/live-chat/', desc: 'Website chat & canned responses' },
      { name: 'Knowledge Base', path: '/knowledge-base/', desc: 'Internal wiki & public docs' },
    ]
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: ChartBar,
    features: [
      { name: 'Reports', path: '/reports/', desc: 'Financial, sales & custom reports' },
      { name: 'Analytics', path: '/analytics/', desc: 'Traffic & conversion tracking' },
      { name: 'Dashboards', path: '/dashboards/', desc: 'Real-time custom widgets' },
      { name: 'Reports Builder', path: '/reports-builder/', desc: 'Drag-and-drop report templates' },
    ]
  },
  {
    id: 'commerce',
    name: 'Commerce',
    icon: ShoppingCart,
    features: [
      { name: 'Products', path: '/products/', desc: 'SKUs, pricing & variants' },
      { name: 'Orders', path: '/orders/', desc: 'Fulfillment & shipping details' },
      { name: 'Storefront', path: '/storefront/', desc: 'Online store checkout' },
      { name: 'Shipping', path: '/shipping/', desc: 'Shipping rates & tracking' },
      { name: 'Partners', path: '/partners/', desc: 'Partner management & referrals' },
      { name: 'Reviews', path: '/reviews/', desc: 'Customer reviews & feedback' },
    ]
  },
  {
    id: 'collaboration',
    name: 'Collaboration',
    icon: ChatCircleText,
    features: [
      { name: 'Chat', path: '/chat/', desc: 'Team channels & direct messages' },
      { name: 'Meetings', path: '/meetings/', desc: 'Agendas, minutes & action items' },
      { name: 'Video Calls', path: '/video/', desc: 'Video conferencing & recording' },
      { name: 'Announcements', path: '/announcements/', desc: 'Company announcements & read receipts' },
    ]
  },
  {
    id: 'content',
    name: 'Content',
    icon: FileText,
    features: [
      { name: 'Documents', path: '/documents/', desc: 'Rich text docs, databases & wikis' },
      { name: 'Website Builder', path: '/website/', desc: 'Drag-and-drop landing builder' },
      { name: 'Blog', path: '/blog/', desc: 'Articles, comments & SEO' },
    ]
  },
  {
    id: 'ai',
    name: 'AI Suite',
    icon: Brain,
    features: [
      { name: 'Metis', path: '/metis/', desc: 'AI companion, voice mode & insights' },
      { name: 'metiswork', path: '/metiswork/', desc: 'Zapier alternative automation engine' },
      { name: 'metisloveb', path: '/metisloveb/', desc: '15 AI business generation tools' },
      { name: 'metisbook', path: '/metisbook/', desc: 'Research notebook & summaries' },
      { name: 'MorningBrief', path: '/morningbrief/', desc: 'Daily personalized story overview' },
      { name: 'Memory', path: '/memory/', desc: 'Business archive & Legacy Mode' },
    ]
  },
  {
    id: 'workspace',
    name: 'Workspace',
    icon: Calendar,
    features: [
      { name: 'Calendar', path: '/calendar/', desc: 'Day, week & month scheduling' },
      { name: 'Focus', path: '/focus/', desc: 'Pomodoro timer & ambient sounds' },
    ]
  }
];

export const MorePanel: React.FC<MorePanelProps> = ({ isOpen, onClose }) => {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const toggleCategory = (id: string) => {
    setCollapsed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto my-6 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="p-6 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Dynamics 7 Suite v3.0</h2>
            <p className="text-slate-400 text-sm">70 Features. One Operating System.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 bg-blue-900 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xl font-bold">Good morning, Krack</div>
              <p className="text-blue-200 text-sm mt-1">
                5 deals in pipeline. 2 invoices overdue. 1 insight from Metis.
              </p>
            </div>
            <Link
              href="/metis/"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-4 py-2 rounded-lg font-semibold hover:bg-amber-300 transition text-sm w-fit"
            >
              <Sparkle size={18} /> Open Metis
            </Link>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isCollapsed = collapsed[cat.id];

              return (
                <div key={cat.id} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                  <button
                    onClick={() => toggleCategory(cat.id)}
                    className="w-full flex items-center justify-between p-4 bg-white border-b border-slate-200 font-bold text-slate-800 hover:bg-slate-50 transition text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={18} className="text-blue-600" />
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">({cat.features.length})</span>
                    </div>
                    {isCollapsed ? <CaretRight size={14} /> : <CaretDown size={14} />}
                  </button>

                  {!isCollapsed && (
                    <div className="p-3 space-y-2">
                      {cat.features.map((feat) => (
                        <Link
                          key={feat.name}
                          href={feat.path}
                          onClick={onClose}
                          className="block p-2 rounded-lg bg-white border border-slate-200/60 hover:border-blue-500 hover:shadow-xs transition"
                        >
                          <div className="font-bold text-slate-900 text-xs">{feat.name}</div>
                          <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{feat.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
