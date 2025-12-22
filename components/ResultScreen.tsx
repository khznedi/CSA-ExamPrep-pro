
import React from 'react';
import { Attempt, DomainPerformance, TypePerformance, StudySet, StudySetQuestion } from '../types';
import { translations, Language } from '../translations';

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
    <div className="max-w-4xl mx-auto space-y-8 py-8 animate-fadeIn">
      {/* Score Circle Banner */}
      <div className={`relative p-12 rounded-3xl overflow-hidden shadow-2xl text-center text-white ${isPass ? 'bg-indigo-900' : 'bg-rose-900'}`}>
        <div className="relative z-10 space-y-4">
          <div className="text-sm font-black uppercase tracking-[0.3em] opacity-60">{t.finalResult}</div>
          <div className="text-8xl font-black tabular-nums">{Math.round(attempt.score)}%</div>
          <div className={`inline-block px-6 py-2 rounded-full text-sm font-bold border-2 ${isPass ? 'border-emerald-400 text-emerald-400' : 'border-rose-400 text-rose-400'}`}>
            {isPass ? t.passed : t.failed}
          </div>
          <p className="max-w-md mx-auto text-indigo-100 font-medium pt-4">
            {isPass ? t.passMsg : t.failMsg}
          </p>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Domain Breakdown */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {t.domainPerformance}
          </h3>
          <div className="space-y-6">
            {domainBreakdown.map(domain => {
                const percent = (domain.correct / domain.total) * 100;
                return (
                    <div key={domain.domain_id} className="group">
                        <div className="flex justify-between text-sm font-bold text-slate-600 mb-2">
                            <span>{domain.domain_name}</span>
                            <span className="text-slate-400">{domain.correct}/{domain.total}</span>
                        </div>
                        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                            <div 
                                className={`h-full transition-all duration-1000 ease-out ${percent >= 60 ? 'bg-emerald-500' : 'bg-rose-500'}`} 
                                style={{ width: `${percent}%` }}
                            ></div>
                        </div>
                    </div>
                );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
             <h4 className="text-indigo-900 font-bold mb-2">Next Steps</h4>
             <p className="text-indigo-700 text-sm mb-6 leading-relaxed">
               {isPass 
                ? "You're doing great! Try a few more mock exams to solidify your knowledge of the Database domain."
                : "Focus on 'Practice by Domain' for your lowest scoring areas before trying another mock exam."}
             </p>
             <button 
                onClick={onRestart}
                className="w-full py-4 bg-indigo-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                {t.takeAnother}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
          </div>
          
          <button 
              onClick={() => window.location.reload()}
              className="w-full py-4 text-slate-500 font-bold hover:bg-white hover:text-slate-800 transition-all rounded-xl"
          >
              {t.returnHome}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
