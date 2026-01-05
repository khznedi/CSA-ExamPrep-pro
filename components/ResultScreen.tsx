
import React from 'react';
import { Attempt, DomainPerformance, TypePerformance, StudySet, StudySetQuestion } from '../types.ts';
import { translations, Language } from '../translations.ts';

interface ResultScreenProps {
  results: { attempt: Attempt, domainBreakdown: DomainPerformance[], typeBreakdown: TypePerformance[] };
  studySet: StudySet;
  questions: StudySetQuestion[];
  onRestart: () => void;
  onReview: () => void;
  lang: Language;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ results, onRestart, onReview, lang }) => {
  const t = translations[lang];
  const { attempt, domainBreakdown } = results;
  const isPass = attempt.score >= 60;

  return (
    <div className="flex flex-col gap-8 pb-16 w-full max-w-5xl mx-auto animate-fadeIn">
      {/* Score Header - Refined Size */}
      <div className={`p-10 md:p-16 rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-xl transition-all duration-700 ${isPass ? 'bg-[#293e40]' : 'bg-rose-950'}`}>
        <div className="relative z-10 space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Performance Overview</p>
          <div className="flex items-center justify-center gap-4">
            <div className="text-7xl md:text-9xl font-black tabular-nums tracking-tighter">
              {Math.round(attempt.score)}<span className="text-3xl md:text-5xl opacity-30 ml-2">%</span>
            </div>
            <div className={`px-6 py-2 rounded-xl text-sm md:text-base font-black border-2 ${isPass ? 'border-emerald-400 text-emerald-400 bg-emerald-400/10' : 'border-rose-400 text-rose-400 bg-rose-400/10'}`}>
              {isPass ? t.passed : t.failed}
            </div>
          </div>
          <p className="text-sm font-medium text-white/60">{isPass ? 'Ready for Certification' : 'Requires More Drilldown'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Domain Stats - Compact List */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-lg space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-50">
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
               <span className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl">📊</span>
               {t.domainPerformance}
            </h3>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Weighted</span>
          </div>

          <div className="space-y-6">
            {domainBreakdown.map(d => (
              <div key={d.domain_id} className="space-y-2">
                <div className="flex justify-between text-[11px] md:text-[13px] font-black">
                   <span className="text-slate-600 max-w-[70%] leading-tight">{d.domain_name}</span>
                   <span className="text-[#30B6AF] tabular-nums">{d.correct} / {d.total}</span>
                </div>
                <div className="h-2.5 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                   <div className={`h-full transition-all duration-700 ease-out ${ (d.correct/d.total) >= 0.6 ? 'bg-[#30B6AF]' : 'bg-rose-500'}`} style={{ width: `${(d.correct/d.total)*100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Center - Refined Layout */}
        <div className="bg-[#293e40] p-8 md:p-12 rounded-[2rem] text-white flex flex-col justify-between gap-8 shadow-xl">
           <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-md text-[9px] font-black text-teal-400 uppercase tracking-widest">Strategic Feedback</span>
              <h4 className="text-2xl md:text-3xl font-black">Next Steps</h4>
              <p className="text-base text-slate-300 font-medium leading-relaxed">
                {isPass 
                  ? "Great job! To ensure absolute success, review your incorrect answers to identify minor technical gaps in Database Administration." 
                  : "Focus on Domain 3 (30% weight) and use Flashcards to memorize terminology. You're close to the passing threshold!"}
              </p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onClick={onRestart} className="h-14 bg-[#30B6AF] hover:bg-[#289c96] text-white rounded-xl font-black text-sm shadow-lg transition-all active:scale-95">
                New Training
              </button>
              <button onClick={onReview} className="h-14 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-black text-sm transition-all active:scale-95">
                 Review Answers
              </button>
              <button onClick={() => window.location.reload()} className="sm:col-span-2 h-10 text-slate-400 hover:text-white font-black text-[10px] uppercase tracking-widest transition-colors">Exit to Dashboard</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
