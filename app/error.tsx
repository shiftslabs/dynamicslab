'use client';

import React from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center font-black text-white text-xl mb-6">
        !
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">System Interruption</h1>
      <p className="text-slate-400 text-sm max-w-md mb-6">
        DynamicsLab encountered an internal processing issue. The error has been isolated.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm"
        >
          Retry
        </button>
        <Link
          href="/base/"
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold rounded-xl text-sm"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
