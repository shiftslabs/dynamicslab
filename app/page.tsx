import React from 'react';
import Link from 'next/link';

export default function RootLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center font-black text-white text-sm">
            D7
          </div>
          <span className="text-xl font-bold tracking-tight text-white">DynamicsLab</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#philosophy" className="hover:text-white transition">Philosophy</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/base/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-sm transition">
            Launch Operating System
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 space-y-24">
        <section className="text-center space-y-6 pt-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span> Dynamics 7 — MetierBM 2.0
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Your entire business operating system. <span className="text-blue-500">Run well.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            One app. One login. One database. Holds your contacts, deals, invoices, projects, documents, money, and AI companion Metis under one roof.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/base/" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base shadow-lg shadow-blue-900/40 transition w-full sm:w-auto">
              Open Dynamics 7 App
            </Link>
            <Link href="/crm/" className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold rounded-xl text-base transition w-full sm:w-auto">
              Explore CRM Pipeline
            </Link>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section id="features" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Unified Operating System</h2>
            <p className="text-slate-400 text-sm">65 Features structured into 12 core categories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900/50 border border-blue-700/50 flex items-center justify-center text-blue-400 font-bold">01</div>
              <h3 className="text-xl font-bold">Sales & CRM</h3>
              <p className="text-slate-400 text-sm">Contacts, deals, companies, pipeline feed, proposals, and quotes with relationship intelligence.</p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-900/50 border border-indigo-700/50 flex items-center justify-center text-indigo-400 font-bold">02</div>
              <h3 className="text-xl font-bold">Metis AI Companion</h3>
              <p className="text-slate-400 text-sm">Metis connects your data dots, remembers patterns, offers voice mode, research notebook, and morning brief.</p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-900/50 border border-emerald-700/50 flex items-center justify-center text-emerald-400 font-bold">03</div>
              <h3 className="text-xl font-bold">Finance & Operations</h3>
              <p className="text-slate-400 text-sm">Invoicing, payments, budgets, subscriptions, Gantt project views, inventory, and supply chain.</p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section id="pricing" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Simple, Fair Pricing</h2>
            <p className="text-slate-400 text-sm">All 65 features available across all tiers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
              <div className="text-sm font-semibold text-slate-400">Hobby</div>
              <div className="text-3xl font-bold">Free</div>
              <div className="text-xs text-slate-400">5,000 free Metis tokens/day</div>
              <Link href="/base/" className="block text-center py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-semibold text-white">Get Started</Link>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
              <div className="text-sm font-semibold text-slate-400">Basic</div>
              <div className="text-3xl font-bold">$9.99 <span className="text-xs text-slate-400 font-normal">/user/mo</span></div>
              <div className="text-xs text-slate-400">10,000 free Metis tokens/day</div>
              <Link href="/base/" className="block text-center py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-semibold text-white">Get Started</Link>
            </div>
            <div className="p-6 bg-blue-950 border border-blue-700 rounded-2xl space-y-4 relative">
              <span className="absolute -top-3 right-4 bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Popular</span>
              <div className="text-sm font-semibold text-blue-300">Base</div>
              <div className="text-3xl font-bold">$19.99 <span className="text-xs text-slate-400 font-normal">/user/mo</span></div>
              <div className="text-xs text-slate-300">25,000 free Metis tokens/day</div>
              <Link href="/base/" className="block text-center py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-semibold text-white">Get Started</Link>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
              <div className="text-sm font-semibold text-slate-400">Super</div>
              <div className="text-3xl font-bold">$29.99 <span className="text-xs text-slate-400 font-normal">/user/mo</span></div>
              <div className="text-xs text-slate-400">50,000 free Metis tokens/day</div>
              <Link href="/base/" className="block text-center py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-semibold text-white">Get Started</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 p-6 text-center text-slate-500 text-xs">
        © 2026 DynamicsLab (MetierBM). Domain: metierbm.babblsoft.site. Your business, run well.
      </footer>
    </div>
  );
}
