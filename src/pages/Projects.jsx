import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Search, Filter, ShieldCheck } from 'lucide-react';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-100">Project Registries Matrix</h1>
          <p className="text-slate-400 text-xs mt-1">Cross-reference logs mapping municipal budget matrices and active leads.</p>
        </div>
      </div>

      {/* Top Filter Panel */}
      <div className="flex gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800/80 items-center">
        <Search className="w-4 h-4 text-slate-500" />
        <input 
          type="text" 
          placeholder="Search projects by scope, district, or client authority profile..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-xs w-full focus:outline-none text-slate-200 placeholder-slate-600 font-medium"
        />
        <Filter className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-slate-200" />
      </div>

      {/* Data Logging Grid Frame */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900/60 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800/50">
            <tr>
              <th className="p-4 text-center w-16">ID</th>
              <th className="p-4">Project Parameters</th>
              <th className="p-4">Client</th>
              <th className="p-4">Assigned Engineer</th>
              <th className="p-4">Budget Allocations</th>
              <th className="p-4 text-center">Operational Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900 text-slate-300">
            {filteredProjects.map((p) => (
              <tr key={p.id} className="hover:bg-slate-900/20 transition-colors">
                <td className="p-4 text-center font-mono font-bold text-slate-500 bg-slate-900/10">{p.id}</td>
                <td className="p-4">
                  <div className="font-bold text-slate-100 text-sm">{p.name}</div>
                  <span className="text-[10px] text-slate-500 mt-0.5 block font-medium">{p.district} Region</span>
                </td>
                <td className="p-4"><span className="bg-slate-900 px-2.5 py-1 rounded text-[10px] font-mono font-bold border border-slate-800 text-slate-400">{p.client}</span></td>
                <td className="p-4 font-medium text-slate-400">{p.engineer}</td>
                <td className="p-4 font-mono font-semibold text-slate-300">{p.budget}</td>
                <td className="p-4 text-center">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${p.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'}`}>
                    <ShieldCheck className="w-3 h-3" /> {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}