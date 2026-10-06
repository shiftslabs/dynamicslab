'use client';

import React, { useState, useEffect } from 'react';
import { X, Bell, CheckCircle, Robot, Warning, Info } from '@phosphor-icons/react';
import { store, NotificationItem } from '@/lib/store';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationPanel: React.FC<NotificationPanelProps> = ({ isOpen, onClose }) => {
  const [notifs, setNotifs] = useState<NotificationItem[]>([]);
  const [filter, setFilter] = useState<'All' | 'AI Insights' | 'Reminders' | 'System'>('All');

  useEffect(() => {
    if (isOpen) {
      setNotifs(store.getNotifications());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleMarkRead = (id: string) => {
    store.markNotificationRead(id);
    setNotifs(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const filteredNotifs = notifs.filter(n => filter === 'All' || n.type === filter);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs">
      <div className="w-full max-w-sm bg-white h-full shadow-2xl border-l border-slate-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell size={18} className="text-blue-600" />
            <h3 className="font-bold text-slate-900 text-sm">Notifications</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg">
            <X size={18} />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="p-2 bg-slate-50 border-b border-slate-200 flex gap-1 text-xs">
          {(['All', 'AI Insights', 'Reminders', 'System'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-2.5 py-1 rounded-md font-semibold transition ${
                filter === type ? 'bg-white text-blue-600 shadow-xs border border-slate-200' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Notification List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {filteredNotifs.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs">No notifications in this category.</div>
          ) : (
            filteredNotifs.map((n) => (
              <div
                key={n.id}
                onClick={() => handleMarkRead(n.id)}
                className={`p-3 rounded-xl border transition cursor-pointer ${
                  n.read ? 'bg-white border-slate-200/80 opacity-75' : 'bg-blue-50/50 border-blue-200 font-medium'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">{n.type}</span>
                  <span className="text-[10px] text-slate-400">{n.time}</span>
                </div>
                <div className="text-xs font-bold text-slate-900">{n.title}</div>
                <div className="text-xs text-slate-600 mt-0.5">{n.message}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
