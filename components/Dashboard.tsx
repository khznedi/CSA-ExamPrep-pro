
import React from 'react';
import { translations, Language } from '../translations';

interface DashboardProps {
  onStart: () => void;
  onCheatSheet: () => void;
  lang: Language;
}

const Dashboard: React.FC<DashboardProps> = ({ onStart, onCheatSheet, lang }) => {
  const t = translations[lang];

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto py-16 px-4 space-y-12 animate-fadeIn">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest border border-indigo-100">
          Official Prep Utility
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          {t.title}
        </h2>
        <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-lg mx-auto">
          {t.heroDesc}
        </p>
      </div>

      {/* Main Action */}
      <div className="w-full">
        <button 
          onClick={onStart}
          className="w-full group bg-indigo-600 p-10 rounded-[3rem] shadow-2xl hover:bg-indigo-700 transition-all duration-300 text-center flex flex-col items-center justify-center gap-6 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/20 transition-all"></div>
          
          <div className="w-20 h-20 bg-white/20 text-white rounded-3xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 backdrop-blur-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white mb-2">{t.startStudying}</h3>
            <p className="text-indigo-100/70 text-sm font-bold uppercase tracking-widest">Enter Study Mode & Practice</p>
          </div>

          <div className="mt-4 flex items-center gap-2 text-indigo-200/50 font-black text-xs group-hover:text-white transition-colors">
            <span>READY TO PASS? CLICK TO START</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </button>
      </div>

      {/* Stats/Features Mini Bar */}
      <div className="grid grid-cols-3 gap-8 w-full border-t border-slate-200 pt-10">
        <div className="text-center">
          <div className="text-2xl font-black text-slate-800">320+</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Questions</div>
        </div>
        <div className="text-center border-x border-slate-100">
          <div className="text-2xl font-black text-slate-800">5</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Domains</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-black text-slate-800">100%</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Updated</div>
        </div>
      </div>

      {/* Hero Footer Signature Link */}
      <div className="pt-4 flex items-center gap-3 text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">
        <div className="w-6 h-px bg-slate-100"></div>
        {t.footerNote}
        <div className="w-6 h-px bg-slate-100"></div>
      </div>
    </div>
  );
};

export default Dashboard;
