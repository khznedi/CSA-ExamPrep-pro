
import React from 'react';
import { translations, Language } from '../translations.ts';

interface DashboardProps {
  onStart: () => void;
  onOpenGuide: () => void;
  lang: Language;
}

const Dashboard: React.FC<DashboardProps> = ({ onStart, onOpenGuide, lang }) => {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Study Guide - Left Large Card */}
        <div 
          className="group cursor-pointer relative bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-slate-50 hover:border-teal-500/30"
          onClick={onOpenGuide}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-50 rounded-full -mr-24 -mt-24 blur-3xl opacity-50 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shadow-sm shrink-0 group-hover:rotate-6 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-800 mb-2">{isAr ? 'دليل الدراسة الشامل' : 'Full Study Guide'}</h3>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">{isAr ? 'ملخص كافة مجالات الاختبار' : 'Complete Platform Breakdown'}</p>
            </div>
            <div className="flex items-center gap-2 text-teal-600 font-black text-xs uppercase tracking-widest">
              {isAr ? 'تصفح الدليل' : 'Explore Guide'}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Start Training - Right Large Card */}
        <div 
          className="group cursor-pointer relative bg-[#293e40] p-8 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-white"
          onClick={onStart}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 bg-[#30B6AF] text-white rounded-2xl flex items-center justify-center shadow-lg shrink-0 group-hover:rotate-6 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-2">{t.startStudying}</h3>
              <p className="text-teal-400 font-bold uppercase tracking-wider text-xs">{isAr ? 'نماذج اختبار وبنك أسئلة' : 'Exam Models & Question Bank'}</p>
            </div>
            <div className="flex items-center gap-2 text-teal-400 font-black text-xs uppercase tracking-widest">
              {isAr ? 'ابدأ الآن' : 'Get Started'}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
