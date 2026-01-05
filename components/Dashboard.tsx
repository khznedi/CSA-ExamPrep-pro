
import React from 'react';
import { translations, Language } from '../translations.ts';

interface DashboardProps {
  onStart: () => void;
  lang: Language;
}

const Dashboard: React.FC<DashboardProps> = ({ onStart, lang }) => {
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto py-8 md:py-16 px-6 space-y-12 animate-fadeIn">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-black uppercase tracking-widest border border-teal-100 shadow-sm">
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
          2024 Exam Blueprint
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#293e40] tracking-tight leading-tight">
          {t.title}
        </h2>
        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
          {t.heroDesc}
        </p>
      </div>

      {/* Main Action Area */}
      <div className="w-full max-w-4xl mx-auto">
        <div 
          className="group cursor-pointer relative bg-[#293e40] p-10 md:p-14 rounded-[3rem] shadow-xl hover:shadow-2xl hover:shadow-[#30B6AF]/20 transition-all duration-500 overflow-hidden text-white"
          onClick={onStart}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 space-y-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#30B6AF] text-white rounded-3xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-3">{t.startStudying}</h3>
              <p className="text-teal-400 font-bold uppercase tracking-widest text-sm md:text-base">
                {isAr ? 'نماذج اختبار وبنك أسئلة شامل' : 'Comprehensive Exam Models & Question Bank'}
              </p>
            </div>
            <div className="flex items-center gap-3 bg-[#30B6AF] px-8 py-4 rounded-2xl text-white font-black text-sm uppercase tracking-widest shadow-lg group-hover:scale-105 transition-all">
              {isAr ? 'ابدأ التدريب الآن' : 'Start Training Now'}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full pt-8 border-t border-slate-100">
        {[
          { label: 'Question Bank', value: '320+' },
          { label: 'Syllabus Areas', value: '5 Domains' },
          { label: 'Status', value: 'Live' },
          { label: 'Language', value: 'Dual' }
        ].map((stat, idx) => (
          <div key={idx} className="text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-2xl font-black text-[#293e40]">{stat.value}</div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
