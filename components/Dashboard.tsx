
import React from 'react';
import { translations, Language } from '../translations.ts';

interface DashboardProps {
  onStart: () => void;
  onCheatSheet: () => void;
  lang: Language;
}

const Dashboard: React.FC<DashboardProps> = ({ onStart, onCheatSheet, lang }) => {
  const t = translations[lang];

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto py-16 px-6 space-y-16 animate-fadeIn">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-teal-50 text-teal-700 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-teal-100 shadow-sm">
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-ping"></span>
          Exam Version 2024.1
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-[#293e40] tracking-tighter leading-[0.9] drop-shadow-sm">
          {t.title}
        </h2>
        <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
          {t.heroDesc}
        </p>
      </div>

      {/* Main Action Large Button */}
      <div className="w-full max-w-2xl group cursor-pointer" onClick={onStart}>
        <div className="relative bg-[#293e40] p-12 md:p-16 rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(41,62,64,0.3)] hover:shadow-[0_48px_80px_-20px_rgba(41,62,64,0.4)] transition-all duration-500 overflow-hidden text-center flex flex-col items-center gap-8 group-hover:-translate-y-2">
          {/* Abstract background light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          
          <div className="w-24 h-24 bg-[#30B6AF] text-white rounded-[2rem] flex items-center justify-center shadow-2xl shadow-teal-500/30 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-3">{t.startStudying}</h3>
            <p className="text-teal-400 font-black uppercase tracking-[0.3em] text-sm group-hover:tracking-[0.4em] transition-all">Launch Study Portal</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-slate-200 pt-16">
        {[
          { label: 'Questions', value: '320+' },
          { label: 'Domains', value: '5' },
          { label: 'Mock Exams', value: '4' },
          { label: 'Pass Mark', value: '60%' }
        ].map((stat, idx) => (
          <div key={idx} className="text-center group">
            <div className="text-3xl font-black text-slate-900 group-hover:text-[#30B6AF] transition-colors">{stat.value}</div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Hero Footer */}
      <div className="pt-10 flex flex-col items-center gap-4 opacity-40">
        <div className="flex items-center gap-5">
          <div className="h-px w-20 bg-slate-400"></div>
          <span className="text-xs font-black uppercase tracking-[0.5em]">{t.footerNote}</span>
          <div className="h-px w-20 bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
