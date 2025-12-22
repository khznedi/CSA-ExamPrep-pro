
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
    <div className="max-w-4xl mx-auto space-y-10 py-10 animate-fadeIn">
      {/* Score Header */}
      <div className={`relative p-16 rounded-[3rem] overflow-hidden shadow-2xl text-center text-white ${isPass ? 'bg-[#293e40]' : 'bg-rose-950'}`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <div className="relative z-10 space-y-6">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-50">{t.finalResult}</div>
          <div className="text-[10rem] font-black tabular-nums leading-none tracking-tighter drop-shadow-2xl">
            {Math.round(attempt.score)}<span className="text-3xl opacity-40 ml-2">%</span>
          </div>
          <div className={`inline-flex items-center gap-3 px-8 py-3 rounded-full text-base font-black border-2 shadow-lg ${isPass ? 'border-emerald-400 text-emerald-400 bg-emerald-400/10' : 'border-rose-400 text-rose-400 bg-rose-400/10'}`}>
            <span className={`w-3 h-3 rounded-full animate-pulse ${isPass ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
            {isPass ? t.passed : t.failed}
          </div>
          <p className="max-w-md mx-auto text-slate-300 text-lg font-medium leading-relaxed">
            {isPass ? t.passMsg : t.failMsg}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Domain Performance */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-800">{t.domainPerformance}</h3>
          </div>
          
          <div className="space-y-8">
            {domainBreakdown.map(domain => {
                const percent = (domain.correct / domain.total) * 100;
                return (
                    <div key={domain.domain_id} className="group">
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-sm font-black text-slate-700 max-w-[70%] leading-tight">{domain.domain_name}</span>
                            <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{domain.correct}/{domain.total}</span>
                        </div>
                        <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden p-1 shadow-inner border border-slate-200">
                            <div 
                                className={`h-full rounded-full transition-all duration-1000 ease-out shadow-md ${percent >= 60 ? 'bg-[#30B6AF]' : 'bg-rose-500'}`} 
                                style={{ width: `${percent}%` }}
                            ></div>
                        </div>
                    </div>
                );
            })}
          </div>
        </div>

        {/* Action Board */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl flex-grow flex flex-col justify-between">
             <div>
               <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2">Strategy Recommendations</div>
               <h4 className="text-2xl font-black text-slate-800 mb-4">What's next for you?</h4>
               <p className="text-slate-500 text-lg leading-relaxed mb-8">
                 {isPass 
                  ? "Impressive! You've mastered the core concepts. We recommend moving to 'Flashcards' to sharpen your recall of technical terms and roles."
                  : "Keep your head up. Focus on 'Practice by Domain' specifically for the areas where you scored below 60% before your next mock exam."}
               </p>
             </div>
             
             <div className="space-y-4">
               <button 
                  onClick={onRestart}
                  className="w-full py-5 bg-[#30B6AF] text-white font-black rounded-2xl shadow-2xl hover:bg-[#289c96] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 text-lg"
                >
                  {t.takeAnother}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button 
                  onClick={() => window.location.reload()}
                  className="w-full py-5 bg-white border-2 border-slate-100 text-slate-500 font-black rounded-2xl hover:bg-slate-50 hover:text-slate-800 transition-all text-sm uppercase tracking-widest"
                >
                  {t.returnHome}
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
