'use client';

import React, { useEffect, useState } from 'react';
import PullMetricsCard from '@/components/PullMetricsCard';
import EarthPullDashboard, { PullRecord } from '@/components/EarthPullDashboard';
import AiInsightsPanel from '@/components/AiInsightsPanel';
import RecentPullsTable from '@/components/RecentPullsTable';
import { Activity, RefreshCw } from 'lucide-react';

export default function Home() {
  const [pulls, setPulls] = useState<PullRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPulls = async () => {
    try {
      const res = await fetch('/api/pulls');
      const data = await res.json();
      if (Array.isArray(data)) {
        setPulls(data);
      }
    } catch (err) {
      console.error('Failed to fetch pulls telemetry:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPulls();
    const interval = setInterval(fetchPulls, 10000); // Poll every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                <Activity className="w-6 h-6" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-zinc-100">
                Docker Pulls Map <span className="text-emerald-400 text-sm px-2 py-0.5 bg-emerald-950 rounded border border-emerald-800 ml-2">v1.0</span>
              </h1>
            </div>
            <p className="text-zinc-400 text-sm mt-2 font-mono">
              Real-time geospatial container registry telemetry & Gemini Pro AI intelligence
            </p>
          </div>

          <button
            onClick={fetchPulls}
            className="flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 px-4 py-2.5 rounded-xl font-mono text-xs transition-all shadow-lg self-start md:self-auto"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Telemetry</span>
          </button>
        </div>

        {/* Metrics Overview Cards */}
        <PullMetricsCard pulls={pulls} />

        {/* 3D Google Earth Globe View */}
        <EarthPullDashboard pulls={pulls} />

        {/* Recent Pulls Log Table */}
        <RecentPullsTable pulls={pulls} />

        {/* Gemini Pro AI Analysis Panel */}
        <AiInsightsPanel />

      </div>
    </main>
  );
}
