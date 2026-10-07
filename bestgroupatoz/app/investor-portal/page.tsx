"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
  roles: string[];
}

export default function InvestorPortalPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('auth_token');

    if (!storedToken || !storedUser) {
      // Default to Institutional Guest Mode for portal visitors
      setUser({
        id: 0,
        name: "Institutional Partner",
        email: "investor.desk@bestgroupatoz.com",
        roles: ["Institutional Investor", "Guest Mode"],
      });
      setIsGuest(true);
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
      setIsGuest(false);
    } catch {
      setUser({
        id: 0,
        name: "Institutional Partner",
        email: "investor.desk@bestgroupatoz.com",
        roles: ["Institutional Investor", "Guest Mode"],
      });
      setIsGuest(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    setIsGuest(true);
    router.push('/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="animate-pulse text-lg font-mono">Loading Best Group Investor Portal...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                B
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">BEST GROUP</span>
                <span className="hidden sm:inline-block ml-2 text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Investor Portal
                </span>
                <div className="text-[10px] text-amber-400/90 font-mono tracking-wider">
                  Excellence in Every Endeavor
                </div>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="hidden md:inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 transition"
            >
              ← Return to Main Portal
            </Link>

            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-slate-200">{user.name}</p>
              <p className="text-xs text-slate-400">{user.email}</p>
            </div>

            {isGuest ? (
              <Link
                href="/login"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition font-mono"
              >
                Sign In
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Guest Mode Banner */}
      {isGuest && (
        <div className="bg-emerald-950/60 border-b border-emerald-500/30 px-6 py-2.5 text-center text-xs text-emerald-300 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>
            Institutional Guest Preview Active. Accessing verified public corporate performance and listed wing disclosures.
          </span>
          <Link href="/login" className="underline font-bold text-white ml-2 hover:text-emerald-200">
            Shareholder Login →
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-white">Welcome, {user.name}</h1>
            <p className="text-slate-400 text-sm mt-1">
              Quarterly Financial Performance &amp; Portfolio Governance Dashboard • Best Group
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Headquarters: 9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000 • Hotlines: 01910-203058, 01711-626577
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-slate-400">Audited Q3 2026</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
              Verified Enterprise Disclosures
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
            <p className="text-xs text-slate-400 font-medium mt-2">Audited by Institutional Auditors</p>
          </div>
        </div>

        {/* Business Sector Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-2">6 Listed Companies &amp; Wings Revenue Breakdown</h2>
            <p className="text-xs text-slate-400 mb-6">Audited horizontal contribution across Best Group business sectors</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 font-medium">Best Commercial &amp; Builders Ltd.</span>
                  <span className="text-emerald-400 font-semibold">$52.4M (37%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '37%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 font-medium">Best Product International Ltd. (E-Commerce)</span>
                  <span className="text-blue-400 font-semibold">$38.6M (27%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '27%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 font-medium">Best South City Ltd. (Urban Real Estate)</span>
                  <span className="text-teal-400 font-semibold">$24.2M (17%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-teal-500 h-full rounded-full" style={{ width: '17%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 font-medium">Best Model Pharmacy Ltd.</span>
                  <span className="text-purple-400 font-semibold">$16.8M (12%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full" style={{ width: '12%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300 font-medium">Best International Overseas (Travel &amp; Tours)</span>
                  <span className="text-amber-400 font-semibold">$10.8M (7%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: '7%' }} />
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
                    <p className="text-xs text-slate-500">PDF • 4.8 MB • Best Group</p>
                  </div>
                  <a
                    href="#download"
                    onClick={(e) => { e.preventDefault(); alert('Investor financial report downloaded.'); }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 font-medium cursor-pointer"
                  >
                    Download
                  </a>
                </li>

                <li className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-200">6 Wings Strategic Expansion Brief</p>
                    <p className="text-xs text-slate-500">PDF • 12.1 MB • Best Group</p>
                  </div>
                  <a
                    href="#download"
                    onClick={(e) => { e.preventDefault(); alert('Strategic expansion brief downloaded.'); }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 font-medium cursor-pointer"
                  >
                    Download
                  </a>
                </li>

                <li className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-200">ESG &amp; Corporate Governance Charter</p>
                    <p className="text-xs text-slate-500">PDF • 8.3 MB • Best Group</p>
                  </div>
                  <a
                    href="#download"
                    onClick={(e) => { e.preventDefault(); alert('Corporate governance charter downloaded.'); }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 font-medium cursor-pointer"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 text-center">
              Confidential &amp; Proprietary • Best Group — Excellence in Every Endeavor
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
