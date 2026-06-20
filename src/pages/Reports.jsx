import React from 'react';
import { FileDown, CheckCircle, FileText, UploadCloud } from 'lucide-react';

export default function ReportsPage() {
  const documents = [
    { title: "Project_Final_Report_V2.pdf", size: "4.8 MB", status: "Approved", time: "2 hours ago" },
    { title: "Geotechnical_Bore_Log_Matrix.pdf", size: "12.4 MB", status: "Approved", time: "2 hours ago" },
    { title: "Site_Media_Aggregations.zip", size: "85.1 MB", status: "Pending Verification", time: "Yesterday" }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Report Engineering Desk</h1>
          <p className="text-slate-400 text-xs mt-1">Compile compiled engineering logs, sub-soil profiles, and verification sheets into cloud files.</p>
        </div>
        <button className="bg-blue-600 text-xs font-bold tracking-wider px-4 py-2.5 rounded-xl uppercase flex items-center gap-2 shadow-lg shadow-blue-500/10">
          <UploadCloud className="w-4 h-4" /> Package New Dossier
        </button>
      </div>

      <div className="space-y-3 max-w-4xl">
        {documents.map((doc, i) => (
          <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 flex-shrink-0">
                <FileText className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-slate-200 truncate">{doc.title}</h4>
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">{doc.size} • Uploaded {doc.time}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 flex-shrink-0">
              <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${doc.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                {doc.status}
              </span>
              <button className="p-2 bg-slate-900 hover:bg-slate-850 rounded-lg text-slate-400 hover:text-slate-200 transition-colors border border-slate-800">
                <FileDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}