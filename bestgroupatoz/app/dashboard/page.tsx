"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/investor-portal');
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
      <div className="animate-pulse text-lg">Redirecting to Investor Portal...</div>
    </div>
  );
}
