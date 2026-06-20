import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { DollarSign, TrendingUp, Landmark } from 'lucide-react';

const financialData = [
  { quarter: 'Q1 2026', revenue: 35, profit: 12 },
  { quarter: 'Q2 2026', revenue: 48, profit: 18 },
  { quarter: 'Q3 2026', revenue: 65, profit: 26 },
  { quarter: 'Q4 2026', revenue: 82, profit: 34 }
];

export default function RevenuePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Financial Systems Analytics</h1>
        <p className="text-slate-400 text-xs mt-1">Track company fiscal logs, project budget drawdowns, and structural margins.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Quarterly Invoicing', value: '৳48.50 Lakh', icon: TrendingUp, delta: '+14% vs Q1' },
          { label: 'Annual Contract Values', value: '৳1.25 Crore', icon: Landmark, delta: '92% collection rate' },
          { label: 'Project Net Margin', value: '38.4%', icon: DollarSign, delta: 'Optimized efficiency' }
        ].map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">{card.label}</span>
                <span className="text-2xl font-black text-slate-100 mt-1 block">{card.value}</span>
                <span className="text-[10px] text-emerald-400 font-bold block mt-1">{card.delta}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-blue-400"><Icon className="w-5 h-5" /></div>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Fiscal Influx vs. Structural Profit Yield (Lakh ৳)</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="quarter" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
              <Tooltip cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
              <Bar dataKey="revenue" name="Gross Revenue" fill="#2563eb" radius={[4, 4, 0, 0]} />
              <Bar dataKey="profit" name="Net Profit Margin" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}