import React from 'react';
import { engineersData } from '../data/engineers';
import { Award, Briefcase } from 'lucide-react';

export default function EngineersPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-100">Field Engineers Roster</h1>
        <p className="text-slate-400 text-xs mt-1">Manpower allocations across regional sub-soil and infrastructure quadrants.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {engineersData.map((eng) => (
          <div key={eng.id} className="bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div className="p-5">
              {/* Profile Image Frame */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <img src={eng.image} alt={eng.name} className="w-full h-full object-cover" />
              </div>
              
              {/* Info Block */}
              <div className="text-center space-y-1">
                <h3 className="text-sm font-bold text-slate-100 truncate">{eng.name}</h3>
                <p className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider">{eng.role}</p>
              </div>
            </div>

            {/* Metrics Base Footer */}
            <div className="px-5 py-3.5 bg-slate-900/40 border-t border-slate-900 flex justify-between items-center text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-slate-500" /> {eng.projects} Projects</span>
              <button className="text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-wider">Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}