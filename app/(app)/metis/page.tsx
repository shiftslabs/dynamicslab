'use client';

import React, { useState } from 'react';
import { FeatureNav } from '@/components/shell/FeatureNav';
import { Sparkle, PaperPlaneRight, Microphone, Robot, User } from '@phosphor-icons/react';

const metisNavItems = [
  { label: 'Chat', href: '/metis/' },
  { label: 'Memory', href: '/metis/memory/' },
  { label: 'Voice Mode', href: '/metis/voice/' },
  { label: 'Settings', href: '/metis/settings/' },
];

export default function MetisPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Good morning, Krack. I have analyzed your CRM pipeline and financial cash flow. You have 2 overdue invoices ($3,400) and 3 priority deal follow-ups today. How would you like to proceed?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: `Understood. I will draft a polite invoice reminder email and update the CRM notes for "${userMsg}". Would you like me to execute this action?` }
      ]);
    }, 600);
  };

  return (
    <div className="flex-1 flex h-full overflow-hidden">
      <div className="hidden md:block">
        <FeatureNav title="Metis AI" items={metisNavItems} />
      </div>

      <div className="flex-1 flex flex-col h-full bg-slate-50 overflow-hidden">
        {/* Banner */}
        <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-deep text-amber-400 flex items-center justify-center shadow-md">
              <Sparkle size={22} />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 text-lg">Metis AI Companion</h1>
              <p className="text-xs text-slate-500">Connected to CRM, Finance, Projects & Memory Archive</p>
            </div>
          </div>
          <div className="px-3 py-1 bg-blue-50 border border-blue-200 text-brand-deep text-xs font-semibold rounded-full">
            Free Tokens: 50,000 / 50,000 Today
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 max-w-4xl mx-auto w-full">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-brand-deep text-white flex items-center justify-center shrink-0 text-xs">
                  <Robot size={16} />
                </div>
              )}
              <div className={`p-4 rounded-2xl max-w-lg text-sm shadow-sm ${
                m.role === 'user'
                  ? 'bg-brand-deep text-white rounded-br-none'
                  : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
              }`}>
                {m.content}
              </div>
              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                  K
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-slate-200">
          <form onSubmit={handleSend} className="max-w-4xl mx-auto flex items-center gap-2">
            <button type="button" className="p-2.5 text-slate-500 hover:text-brand-deep hover:bg-slate-100 rounded-lg transition">
              <Microphone size={20} />
            </button>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask Metis to review cash flow, summarize documents, or create a proposal..."
              className="flex-1 p-3 border border-slate-300 rounded-xl text-sm outline-none focus:border-brand-deep"
            />
            <button
              type="submit"
              className="p-3 bg-brand-deep text-white rounded-xl hover:bg-brand-dark transition shadow-md"
            >
              <PaperPlaneRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
