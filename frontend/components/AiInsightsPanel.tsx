'use client';

import React, { useState } from 'react';
import { Cpu, Loader2, Sparkles } from 'lucide-react';

export default function AiInsightsPanel() {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const triggerAnalysis = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/analyze', { method: 'POST' });
      const data = await res.json();
      setAnalysis(data.analysis || 'No insights returned.');
    } catch (err) {
      setAnalysis('Failed to process AI analysis request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-zinc-100 font-mono text-sm">Gemini Pro Reasoning Core</h3>
            <p className="text-zinc-400 text-xs font-mono">Automated traffic cluster & anomaly analysis</p>
          </div>
        </div>

        <button
          onClick={triggerAnalysis}
          disabled={loading}
          className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs px-4 py-2 rounded-xl transition-all disabled:opacity-50 shadow-lg shadow-purple-900/20"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Sparkles className="w-4 h-4" />
          )}
          <span>{loading ? 'Thinking...' : 'Analyze Telemetry'}</span>
        </button>
      </div>

      {analysis && (
        <div className="mt-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl font-mono text-xs text-zinc-300 leading-relaxed whitespace-pre-wrap">
          {analysis}
        </div>
      )}
    </div>
  );
}
