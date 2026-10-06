'use client';

import React, { useState } from 'react';
import { FeatureNav } from '@/components/shell/FeatureNav';
import { Plus, MagnifyingGlass, Phone, Envelope, Building } from '@phosphor-icons/react';

const crmNavItems = [
  { label: 'Contacts', href: '/crm/' },
  { label: 'Deals', href: '/crm/deals/' },
  { label: 'Companies', href: '/crm/companies/' },
  { label: 'Settings', href: '/crm/settings/' },
];

export default function CRMPage() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Sarah Jenkins', email: 'sarah@acme.com', phone: '+1 555-0192', company: 'Acme Corp', status: 'Active' },
    { id: '2', name: 'David Miller', email: 'david@globex.io', phone: '+1 555-0381', company: 'Globex Inc', status: 'Lead' },
    { id: '3', name: 'Elena Rostova', email: 'elena@vortex.tech', phone: '+1 555-0842', company: 'Vortex Technologies', status: 'Customer' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newCompany, setNewCompany] = useState('');

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName) return;
    setContacts(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name: newName,
        email: newEmail,
        phone: '+1 555-0000',
        company: newCompany || 'Independent',
        status: 'Lead'
      }
    ]);
    setNewName('');
    setNewEmail('');
    setNewCompany('');
    setShowAddModal(false);
  };

  return (
    <div className="flex-1 flex h-full overflow-hidden">
      <div className="hidden md:block">
        <FeatureNav title="CRM" items={crmNavItems} />
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-slate-50">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Contacts</h1>
            <p className="text-slate-500 text-sm">Manage relationship intelligence and network sync</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-brand-deep text-white rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-brand-dark transition shadow-sm"
          >
            <Plus size={16} /> Add Contact
          </button>
        </div>

        {/* Search & Table */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex items-center gap-3">
            <MagnifyingGlass size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search contacts, emails, or companies..."
              className="w-full text-sm outline-none bg-transparent"
            />
          </div>

          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Company</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {contacts.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 transition">
                  <td className="p-3 font-semibold text-slate-900">{c.name}</td>
                  <td className="p-3 text-slate-600 flex items-center gap-2">
                    <Envelope size={14} className="text-slate-400" /> {c.email}
                  </td>
                  <td className="p-3 text-slate-600">
                    <span className="flex items-center gap-2"><Building size={14} className="text-slate-400" /> {c.company}</span>
                  </td>
                  <td className="p-3 text-slate-600">
                    <span className="flex items-center gap-2"><Phone size={14} className="text-slate-400" /> {c.phone}</span>
                  </td>
                  <td className="p-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-brand-deep">
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Contact Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-md w-full p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Add New Contact</h3>
            <form onSubmit={handleAddContact} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name</label>
                <input
                  type="text"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:border-brand-deep"
                  placeholder="e.g. Jane Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={e => setNewEmail(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:border-brand-deep"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Company</label>
                <input
                  type="text"
                  value={newCompany}
                  onChange={e => setNewCompany(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:border-brand-deep"
                  placeholder="Company Name"
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-brand-deep text-white font-semibold rounded-lg hover:bg-brand-dark"
                >
                  Save Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
