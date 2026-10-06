'use client';

import React, { useState, useEffect } from 'react';
import { FeatureNav } from '@/components/shell/FeatureNav';
import { Lightning, Plus, Play, Pause, CheckCircle } from '@phosphor-icons/react';
import { store, MetisworkWorkflow } from '@/lib/store';

const metisworkNav = [
  { label: 'Automation Workflows', href: '/metiswork/' },
  { label: 'Triggers', href: '/metiswork/triggers/' },
  { label: 'Actions', href: '/metiswork/actions/' },
  { label: 'History', href: '/metiswork/history/' },
];

export default function MetisworkPage() {
  const [workflows, setWorkflows] = useState<MetisworkWorkflow[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [trigger, setTrigger] = useState('New Form Submission');
  const [action, setAction] = useState('Send Slack Alert & Create CRM Lead');

  useEffect(() => {
    setWorkflows(store.getMetisworkWorkflows());
  }, []);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    const added = store.addMetisworkWorkflow(name, trigger, action);
    setWorkflows(prev => [added, ...prev]);
    setName('');
    setShowModal(false);
  };

  return (
    <div className="flex-1 flex h-full overflow-hidden">
      <div className="hidden md:block">
        <FeatureNav title="metiswork" items={metisworkNav} />
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-slate-50 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Lightning size={24} className="text-emerald-600" /> metiswork — Execution Layer
            </h1>
            <p className="text-slate-500 text-sm">Automate workflows across CRM, Invoicing, Slack, Figma, and external webhooks</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm flex items-center gap-2 shadow-xs"
          >
            <Plus size={16} /> New Workflow
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workflows.map((wf) => (
            <div key={wf.id} className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-sm">{wf.name}</h3>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase rounded-full">
                  {wf.status}
                </span>
              </div>
              <div className="text-xs space-y-1 text-slate-600">
                <div><span className="font-bold text-slate-400">WHEN:</span> {wf.trigger}</div>
                <div><span className="font-bold text-slate-400">THEN:</span> {wf.action}</div>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>{wf.runs} automated executions</span>
                <button className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
                  <Play size={12} /> Test Run
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-md w-full p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Create Automation Workflow</h3>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Workflow Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm"
                  placeholder="e.g. Sync Stripe Invoices to Google Drive"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Trigger Event</label>
                <input
                  type="text"
                  value={trigger}
                  onChange={e => setTrigger(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Action Result</label>
                <input
                  type="text"
                  value={action}
                  onChange={e => setAction(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm"
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-sm text-slate-600">Cancel</button>
                <button type="submit" className="px-4 py-2 text-sm bg-blue-600 text-white font-semibold rounded-lg">Save Workflow</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
