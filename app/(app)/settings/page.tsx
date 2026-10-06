'use client';

import React, { useState } from 'react';
import { FeatureNav } from '@/components/shell/FeatureNav';
import { Key, Lock, User, CreditCard, HardDrive, Cpu, ShieldCheck } from '@phosphor-icons/react';

const settingsNavItems = [
  { label: 'Profile', href: '/settings/' },
  { label: 'API Keys', href: '/settings/keys/' },
  { label: 'Billing & Plans', href: '/settings/billing/' },
  { label: 'Storage Providers', href: '/settings/storage/' },
  { label: 'AI Provider Keys (BYOK)', href: '/settings/ai/' },
  { label: 'Team & Roles', href: '/settings/team/' },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex-1 flex h-full overflow-hidden">
      <div className="hidden md:block">
        <FeatureNav title="Settings" items={settingsNavItems} />
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-slate-50 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">System Settings</h1>
          <p className="text-slate-500 text-sm">Manage profile, API keys, BYOK AI keys, storage, and team permissions</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <User size={20} className="text-brand-deep" /> Profile Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name</label>
              <input type="text" defaultValue="Krack" className="w-full p-2.5 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address</label>
              <input type="email" defaultValue="krack@babblsoft.site" className="w-full p-2.5 border border-slate-300 rounded-lg text-sm" />
            </div>
          </div>
        </div>

        {/* Connected Storage Toggles */}
        <div className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <HardDrive size={20} className="text-brand-deep" /> User-Provided Storage
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
              <div>
                <div className="font-semibold text-sm">Google Drive</div>
                <div className="text-xs text-slate-500">Store media and documents directly in your Google Drive</div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Connected</span>
            </div>
            <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
              <div>
                <div className="font-semibold text-sm">OneDrive</div>
                <div className="text-xs text-slate-500">Connect Microsoft OneDrive for file sync</div>
              </div>
              <button className="px-3 py-1 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold rounded-lg">Connect</button>
            </div>
            <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
              <div>
                <div className="font-semibold text-sm">Dropbox</div>
                <div className="text-xs text-slate-500">Connect Dropbox storage</div>
              </div>
              <button className="px-3 py-1 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold rounded-lg">Connect</button>
            </div>
          </div>
        </div>

        {/* BYOK AI Keys */}
        <div className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Cpu size={20} className="text-brand-deep" /> Bring Your Own Key (BYOK AI)
          </h2>
          <p className="text-xs text-slate-500">Provide your own API keys. No markup. Encrypted at rest in database.</p>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">OpenRouter API Key</label>
              <input type="password" placeholder="sk-or-v1-..." className="w-full p-2.5 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Groq API Key</label>
              <input type="password" placeholder="gsk_..." className="w-full p-2.5 border border-slate-300 rounded-lg text-sm" />
            </div>
          </div>
          <button className="px-4 py-2 bg-brand-deep text-white font-semibold rounded-lg text-sm hover:bg-brand-dark">Save AI Keys</button>
        </div>
      </div>
    </div>
  );
}
