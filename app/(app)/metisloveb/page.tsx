'use client';

import React, { useState } from 'react';
import { FeatureNav } from '@/components/shell/FeatureNav';
import { Cpu, Sparkle, MagicWand } from '@phosphor-icons/react';

const metislovebNav = [
  { label: 'AI Business Tools', href: '/metisloveb/' },
  { label: 'Tool History', href: '/metisloveb/history/' },
  { label: 'Settings', href: '/metisloveb/settings/' },
];

const toolsList = [
  { id: '1', title: 'Business Name Generator', category: 'Branding', prompt: 'Generate 5 catchy brand names for a SaaS company' },
  { id: '2', title: 'Pitch Deck Outline', category: 'Strategy', prompt: 'Outline a 10-slide seed pitch deck' },
  { id: '3', title: 'Email Copywriter', category: 'Marketing', prompt: 'Draft a cold sales outreach email for B2B prospects' },
  { id: '4', title: 'Social Post Generator', category: 'Marketing', prompt: 'Create 3 LinkedIn posts announcing a new feature' },
  { id: '5', title: 'Competitor Analyzer', category: 'Research', prompt: 'Analyze key value props of top 3 CRM market leaders' },
  { id: '6', title: 'Brand Voice Defined', category: 'Branding', prompt: 'Generate tone and voice guidelines for professional business glass software' },
];

export default function MetislovebPage() {
  const [selectedTool, setSelectedTool] = useState(toolsList[0]);
  const [prompt, setPrompt] = useState(toolsList[0].prompt);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    setTimeout(() => {
      setResult(`[Metis AI Output for "${selectedTool.title}"]\n\n1. MetierBM Operating System\n2. Dynamics 7 Enterprise\n3. BabblSoft Workspace\n4. Telos Business OS\n5. Metis Glass Platform\n\nRecommendation: MetierBM aligns best with your domain target metierbm.babblsoft.site.`);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="flex-1 flex h-full overflow-hidden">
      <div className="hidden md:block">
        <FeatureNav title="metisloveb" items={metislovebNav} />
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-slate-50 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Cpu size={24} className="text-indigo-600" /> metisloveb — 15 AI Business Tools
          </h1>
          <p className="text-slate-500 text-sm">Metis Love Business suite for branding, pitch decks, copy, and competitive research</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tools List */}
          <div className="space-y-2">
            {toolsList.map((t) => (
              <button
                key={t.id}
                onClick={() => { setSelectedTool(t); setPrompt(t.prompt); setResult(''); }}
                className={`w-full p-3 rounded-xl border text-left transition ${
                  selectedTool.id === t.id
                    ? 'bg-blue-50 border-blue-300 text-blue-600 font-bold shadow-xs'
                    : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] font-bold text-slate-400 uppercase">{t.category}</div>
                <div className="text-xs font-semibold mt-0.5">{t.title}</div>
              </button>
            ))}
          </div>

          {/* Generator Area */}
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MagicWand size={18} className="text-blue-600" /> {selectedTool.title}
            </h2>

            <form onSubmit={handleGenerate} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Instruction / Prompt</label>
                <textarea
                  rows={3}
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-xl text-xs outline-none focus:border-blue-600"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-xs flex items-center gap-2"
              >
                <Sparkle size={14} className="text-amber-400" /> {loading ? 'Generating with Metis...' : 'Run Business Tool'}
              </button>
            </form>

            {result && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-mono whitespace-pre-wrap">
                {result}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
