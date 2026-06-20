import React from 'react';
import { UserPlus, HardHat, Car, Shield } from 'lucide-react';

export default function SurveyTeamsPage() {
  const currentTeam = [
    { role: "Lead Site Engineer", name: "Engr. Md. Saifullah", type: "Engineer", icon: HardHat },
    { role: "Senior Geodetic Surveyor", name: "Md. Shimul", type: "Surveyor", icon: Shield },
    { role: "Laboratory Field Technician", name: "Labib Afnan", type: "Technician", icon: UserPlus },
    { role: "Logistics Heavy Driver", name: "Abul Kalam", type: "Driver", icon: Car }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Team Assignment Desk</h1>
        <p className="text-slate-400 text-xs mt-1">Deploy logistics personnel, operators, and engineers to specific project assignments.</p>
      </div>

      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 max-w-3xl">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
          <div>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Active Project Target</span>
            <h3 className="text-lg font-bold text-slate-200 mt-0.5">LGED Bridge Survey Project (Chattogram Sector)</h3>
          </div>
          <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Configuring</span>
        </div>

        <div className="space-y-3">
          {currentTeam.map((member, i) => {
            const Icon = member.icon;
            return (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700/60 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{member.role}</p>
                    <p className="text-sm font-bold text-slate-100 mt-0.5">{member.name}</p>
                  </div>
                </div>
                <span className="text-[10px] bg-slate-800 text-slate-400 font-mono font-bold px-2.5 py-1 rounded-md">{member.type}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}