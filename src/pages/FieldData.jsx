import React from 'react';
import { UploadCloud, Table } from 'lucide-react';

export default function FieldDataPage() {
  const rows = [
    { date: "20 Jun 2026", district: "Barishal Sector", boreholes: 5, samples: 20, status: "Analyzed" },
    { date: "18 Jun 2026", district: "Cumilla Division", boreholes: 3, samples: 12, status: "Pending Lab" },
    { date: "14 Jun 2026", district: "Bogura Region", boreholes: 6, samples: 24, status: "Analyzed" }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Geotechnical Field Logs</h1>
          <p className="text-slate-400 text-xs mt-1">Raw logging metrics containing borehole depths and sample counts directly from site teams.</p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2">
          <UploadCloud className="w-4 h-4" /> Upload Field Data
        </button>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900 text-slate-400 font-bold uppercase border-b border-slate-800">
            <tr>
              <th className="p-4">Execution Date</th>
              <th className="p-4">District Sector</th>
              <th className="p-4 text-center">Boreholes Drilled</th>
              <th className="p-4 text-center">Soil Samples Pulled</th>
              <th className="p-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900 text-slate-300">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-slate-900/30">
                <td className="p-4 font-medium font-mono text-slate-400">{row.date}</td>
                <td className="p-4 font-bold text-slate-200">{row.district}</td>
                <td className="p-4 text-center font-semibold text-blue-400">{row.boreholes}</td>
                <td className="p-4 text-center font-semibold text-indigo-400">{row.samples}</td>
                <td className="p-4 text-center">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${row.status === 'Analyzed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}