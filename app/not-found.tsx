'use client';

import React from 'react';
import Link from 'next/link';
import { House, ArrowLeft } from '@phosphor-icons/react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white text-xl mb-6 shadow-lg shadow-blue-900/50">
        D7
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">404 — Page Not Found</h1>
      <p className="text-slate-400 text-sm max-w-md mb-8">
        The route or feature view you requested does not exist or has moved within the DynamicsLab operating environment.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="/base/"
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition flex items-center gap-2"
        >
          <House size={18} /> Return to Operating Base
        </Link>
        <Link
          href="/"
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold rounded-xl text-sm transition flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Public Landing Page
        </Link>
      </div>
    </div>
  );
}
