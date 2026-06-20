import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Briefcase, Users, ShieldAlert, TableProperties, 
  Image, Map, DollarSign, Settings, ChevronRight, Bell 
} from 'lucide-react';

// Unified View Imports
import DashboardPage from './pages/Dashboard.jsx';
import ProjectsPage from './pages/Projects.jsx';
import EngineersPage from './pages/Engineers.jsx';
import SurveyTeamsPage from './pages/SurveyTeams.jsx';
import FieldDataPage from './pages/FieldData.jsx';
import GalleryPage from './pages/Gallery.jsx';
import ReportsPage from './pages/Reports.jsx';
import MapViewPage from './pages/MapView.jsx';
import RevenuePage from './pages/Revenue.jsx';
import SettingsPage from "./pages/Settings.jsx";

function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/projects', label: 'Projects System', icon: Briefcase },
    { path: '/engineers', label: 'Engineers', icon: Users },
    { path: '/teams', label: 'Survey Teams', icon: ShieldAlert },
    { path: '/field-data', label: 'Field Data', icon: TableProperties },
    { path: '/photos', label: 'Site Photos', icon: Image },
    { path: '/reports', label: 'Reports Panel', icon: FileText },
    { path: '/map', label: 'Geospatial Map', icon: Map },
    { path: '/revenue', label: 'Financial Revenue', icon: DollarSign },
    { path: '/settings', label: 'System Settings', icon: Settings }
  ];

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800/60 flex flex-col justify-between h-screen sticky top-0 flex-shrink-0 z-20">
      <div className="p-6 overflow-y-auto max-h-[calc(100vh-80px)]">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-9 h-9 rounded-xl flex items-center justify-center font-black text-white shadow-md">BK</div>
          <div>
            <h1 className="font-bold tracking-tight text-xs text-slate-200 leading-none">GEO-SYSTEMS</h1>
            <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold block mt-0.5">Enterprise Portal</span>
          </div>
        </div>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-[11px] font-bold tracking-wider transition-all uppercase ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-600/20 to-indigo-500/10 text-blue-400 border-l-4 border-blue-500 pl-3' 
                    : 'text-slate-400 hover:bg-slate-900/50 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && <ChevronRight className="w-3 h-3 text-blue-400" />}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-800/60 bg-slate-950/40 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full border border-blue-500/30 overflow-hidden bg-slate-850 flex-shrink-0">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" alt="MD. Rasheduzzaman Imran" className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold text-slate-200 truncate">Rasheduzzaman Imran</p>
          <p className="text-[10px] font-medium text-slate-500 truncate">Software Engineer Intern</p>
        </div>
      </div>
    </aside>
  );
}

// Dummy standard asset declaration to protect compiler dependencies
const FileText = ({className}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;

export default function App() {
  return (
    <Router>
      <div className="flex bg-slate-900 text-slate-100 min-h-screen font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200">
        <Sidebar />
        <main className="flex-1 p-8 lg:p-12 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/engineers" element={<EngineersPage />} />
            <Route path="/teams" element={<SurveyTeamsPage />} />
            <Route path="/field-data" element={<FieldDataPage />} />
            <Route path="/photos" element={<GalleryPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/map" element={<MapViewPage />} />
            <Route path="/revenue" element={<RevenuePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}