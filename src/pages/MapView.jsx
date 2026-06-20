import React from 'react';
import { MapPin, Shield } from 'lucide-react';
import { districtsData } from '../data/districts';

export default function MapViewPage() {
  return (
    <div className="space-y-8 animate-fade-in h-[calc(100vh-100px)] flex flex-col">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Geospatial Horizon Map</h1>
        <p className="text-slate-400 text-xs mt-1">Regional map tracking operational sectors and geotechnical site vectors across Bangladesh.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8 flex-1 min-h-0">
        {/* District Side Logger */}
        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 overflow-y-auto space-y-2 max-h-full">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Operational Sectors</h3>
          {districtsData.map((dist, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/40 hover:border-slate-700 transition-all cursor-pointer flex justify-between items-center">
              <div>
                <h4 className="text-xs font-bold text-slate-200">{dist.name}</h4>
                <span className="text-[10px] text-slate-500 font-semibold">{dist.totalProjects} Historical Projects</span>
              </div>
              {dist.activeProjects > 0 ? (
                <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider">{dist.activeProjects} Active</span>
              ) : (
                <span className="text-slate-600 text-[9px] uppercase font-bold tracking-wider">Idle</span>
              )}
            </div>
          ))}
        </div>

        {/* Dynamic Map Vector Grid */}
        <div className="lg:col-span-3 bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden relative flex items-center justify-center border-dashed">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="text-center p-8 z-10 space-y-4 max-w-sm">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mx-auto shadow-inner"><MapPin /></div>
            <h3 className="font-bold text-slate-200 text-base">Geospatial Telemetry Layer Engaged</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Geodetic nodes mapped over target coordination vectors. Ready for integration with custom GIS shapefiles or Leaflet.js map layers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}