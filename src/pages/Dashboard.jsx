import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Briefcase, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { projectsData } from '../data/projects';

const chartData = [
  { name: 'Jan', projects: 12 }, { name: 'Feb', projects: 18 },
  { name: 'Mar', projects: 24 }, { name: 'Apr', projects: 34 }
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-100">Operations Control Center</h1>
        <p className="text-slate-400 text-xs mt-1">Real-time geotechnical survey and telemetry data pipeline.</p>
      </div>

      {/* KPI Metrics Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Projects', value: '148', icon: Briefcase, color: 'text-blue-500 bg-blue-500/10' },
          { label: 'Active Horizon Surveys', value: '34', icon: Clock, color: 'text-amber-500 bg-amber-500/10' },
          { label: 'Completed Folders', value: '114', icon: CheckCircle, color: 'text-emerald-500 bg-emerald-500/10' },
          { label: 'Revenue Yield', value: '৳1.25 Cr', icon: DollarSign, color: 'text-indigo-500 bg-indigo-500/10' }
        ].map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">{card.label}</span>
                <span className="text-2xl font-black text-slate-100 mt-1 block">{card.value}</span>
              </div>
              <div className={`p-3 rounded-xl ${card.color}`}><Icon className="w-5 h-5" /></div>
            </div>
          );
        })}
      </div>

      {/* Split Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project Velocity Graph */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 lg:col-span-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Monthly Survey Progression Rate</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar dataKey="projects" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Live System Logging Table */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Recent Structural Activity</h3>
          <div className="space-y-4">
            {projectsData.map((project) => (
              <div key={project.id} className="flex justify-between items-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/40">
                <div>
                  <h4 className="text-xs font-bold text-slate-200">{project.name}</h4>
                  <span className="text-[10px] text-slate-500 font-medium tracking-tight block">{project.district} | Client: {project.client}</span>
                </div>
                <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full uppercase ${project.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}