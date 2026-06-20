import React from 'react';
import { Sliders, Database, Shield, Radio } from 'lucide-react';

export default function SettingsPage() {
  const options = [
    { title: "Geodetic CRS System Mapping", desc: "Set spatial reference bounds to Bangladesh-BTM standard grid profiles.", icon: Radio },
    { title: "Standard Penetration Test Multipliers", desc: "Configure borehole energy normalization modifiers ($N_{60}$ multipliers).", icon: Sliders },
    { title: "Database Sync Telemetry", desc: "Manage offline tracking buffers for regional field survey teams.", icon: Database },
    { title: "Authority Verification Keys", desc: "Manage security signature files for LGED, PWD, and HED document routing.", icon: Shield }
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">System Configuration Profile</h1>
        <p className="text-slate-400 text-xs mt-1">Configure baseline modifiers, geotechnical computation rules, and coordinate tracking definitions.</p>
      </div>

      <div className="space-y-4">
        {options.map((opt, i) => {
          const Icon = opt.icon;
          return (
            <div key={i} className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition-colors cursor-pointer">
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-blue-400"><Icon className="w-4 h-4" /></div>
              <div>
                <h4 className="text-sm font-bold text-slate-200">{opt.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{opt.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}