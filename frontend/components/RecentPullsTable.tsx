'use client';

import React from 'react';
import { PullRecord } from './EarthPullDashboard';
import { Globe, Server } from 'lucide-react';

export default function RecentPullsTable({ pulls }: { pulls: PullRecord[] }) {
  const recentPulls = [...pulls].reverse().slice(0, 10);

  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20">
          <Server className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-zinc-100 font-mono text-sm">Recent Telemetry Feed</h3>
          <p className="text-zinc-400 text-xs font-mono">Latest client connections and layer pull paths</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-xs">
          <thead>
            <tr className="border-b border-zinc-800 text-zinc-400">
              <th className="pb-3 font-medium">Timestamp</th>
              <th className="pb-3 font-medium">Client IP</th>
              <th className="pb-3 font-medium">Location</th>
              <th className="pb-3 font-medium">Registry Path</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60">
            {recentPulls.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-6 text-center text-zinc-500">
                  No telemetry events recorded yet. Try pulling your container image through the proxy!
                </td>
              </tr>
            ) : (
              recentPulls.map((pull, idx) => (
                <tr key={idx} className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-3 text-zinc-400">{pull.timestamp || 'Just now'}</td>
                  <td className="py-3 text-emerald-400">{pull.ip}</td>
                  <td className="py-3 text-zinc-200">
                    {pull.city !== 'Unknown' ? `${pull.city}, ${pull.state}, ${pull.country}` : pull.country}
                  </td>
                  <td className="py-3 text-zinc-400 truncate max-w-xs">{pull.path || '/v2/'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
