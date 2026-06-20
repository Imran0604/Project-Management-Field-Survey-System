import React from 'react';
import { galleryData } from '../data/gallery';
import { Calendar, MapPin } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Site Media Gallery</h1>
        <p className="text-slate-400 text-xs mt-1">Photographic field evidence logging drilling configurations, setups, and engineering teams.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryData.map((item) => (
          <div key={item.id} className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden group shadow-lg flex flex-col justify-between">
            <div className="h-48 overflow-hidden relative">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur px-2.5 py-0.5 rounded text-[9px] font-bold text-blue-400 uppercase tracking-widest">{item.category}</span>
            </div>
            <div className="p-4 space-y-3">
              <h4 className="text-xs font-bold text-slate-200 line-clamp-1">{item.title}</h4>
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-600" /> {item.district}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-slate-600" /> {item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}