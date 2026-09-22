"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  name: string;
  email: string;
  roles: string[];
}

export default function InvestorPortalPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('auth_token');

    if (!storedToken || !storedUser) {
      router.push('/login');
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch (e) {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="animate-pulse text-lg">Loading Investor Portal...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center font-extrabold text-slate-950 text-xl">
              B
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white">Best Group</span>
              <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Investor Portal
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-slate-200">{user.name}</p>
              <p className="text-xs text-slate-400">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-white">Welcome, {user.name}</h1>
            <p className="text-slate-400 text-sm mt-1">
              Quarterly Financial Performance & Portfolio Governance Dashboard
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-slate-400">Last Refreshed: Q3 2026</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-ping" />
              Verified Investor Active
            </span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Consolidated Revenue</p>
            <p className="text-3xl font-black text-white mt-2">$142.8M</p>
            <p className="text-xs text-emerald-400 font-medium mt-2 flex items-center">
              ↑ +18.4% vs Q2 2026
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">EBITDA Margin</p>
            <p className="text-3xl font-black text-white mt-2">24.6%</p>
            <p className="text-xs text-emerald-400 font-medium mt-2 flex items-center">
              ↑ +3.2% Y-o-Y Growth
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Projected Annual Dividend</p>
            <p className="text-3xl font-black text-emerald-400 mt-2">$4.12 / Share</p>
            <p className="text-xs text-slate-400 font-medium mt-2">Payout Date: Oct 15, 2026</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Enterprise Valuation</p>
            <p className="text-3xl font-black text-white mt-2">$1.85B</p>
            <p className="text-xs text-slate-400 font-medium mt-2">Audited by Deloitte</p>
          </div>
        </div>

        {/* Business Sector Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-4">Strategic Business Sector Revenue Breakdown</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 font-medium">Best Real Estate & Commercial Hubs</span>
                  <span className="text-emerald-400 font-semibold">$58.4M (41%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '41%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 font-medium">Best E-Commerce & Distribution</span>
                  <span className="text-blue-400 font-semibold">$42.8M (30%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 font-medium">Best Model Pharmacy Network</span>
                  <span className="text-purple-400 font-semibold">$25.6M (18%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full" style={{ width: '18%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 font-medium">Best Travel & Tourism Ventures</span>
                  <span className="text-amber-400 font-semibold">$16.0M (11%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: '11%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Downloadable Reports */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-white mb-4">Investor Financial Documents</h2>
              <ul className="space-y-3">
                <li className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-200">Q3 2026 Financial Audit Report</p>
                    <p className="text-xs text-slate-500">PDF • 4.8 MB</p>
                  </div>
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 font-medium">
                    Download
                  </button>
                </li>

                <li className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-200">2026 Real Estate Expansion Brief</p>
                    <p className="text-xs text-slate-500">PDF • 12.1 MB</p>
                  </div>
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 font-medium">
                    Download
                  </button>
                </li>

                <li className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-200">Annual ESG & Sustainability Governance</p>
                    <p className="text-xs text-slate-500">PDF • 8.3 MB</p>
                  </div>
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 font-medium">
                    Download
                  </button>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 text-center">
              Confidential & Proprietary • Best Group Enterprise Portal
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
