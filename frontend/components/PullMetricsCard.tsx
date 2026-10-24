'use client';

import React from 'react';
import { Activity, Globe, ShieldAlert } from 'lucide-react';

interface PullRecord {
  ip: string;
  country: string;
  state: string;
  city: string;
  lat: number;
  lng: number;
}

export default function PullMetricsCard({ pulls }: { pulls: PullRecord[] }) {
  const totalPulls = pulls.length;
  const uniqueCountries = new Set(pulls.map((p) => p.country)).size;
  const activeCities = new Set(pulls.map((p) => p.city)).size;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex items-center space-x-4 shadow-lg backdrop-blur-md">
        <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
          <Activity className="w-6 h-6" />
        </div>
        <div>
          <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider">Total Image Pulls</p>
          <h3 className="text-2xl font-bold font-mono text-zinc-100">{totalPulls}</h3>
        </div>
      </div>

      <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex items-center space-x-4 shadow-lg backdrop-blur-md">
        <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20">
          <Globe className="w-6 h-6" />
        </div>
        <div>
          <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider">Unique Countries</p>
          <h3 className="text-2xl font-bold font-mono text-zinc-100">{uniqueCountries}</h3>
        </div>
      </div>

      <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex items-center space-x-4 shadow-lg backdrop-blur-md">
        <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div>
          <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider">Active Regional Hubs</p>
          <h3 className="text-2xl font-bold font-mono text-zinc-100">{activeCities}</h3>
        </div>
      </div>
    </div>
  );
}
