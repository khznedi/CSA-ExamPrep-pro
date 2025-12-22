
import React, { useState } from 'react';
import { StudyMode } from '../types';
import { translations, Language } from '../translations';

interface ModeSelectionProps {
  onSelect: (mode: StudyMode, domainId?: number, modelIndex?: number) => void;
  onCheatSheet: () => void;
  onResume: () => void;
  onBack: () => void;
  lang: Language;
  hasSavedRounds: boolean;
}

const ModeSelection: React.FC<ModeSelectionProps> = ({ onSelect, onCheatSheet, onResume, onBack, lang, hasSavedRounds }) => {
  const t = translations[lang];
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const [showMockModels, setShowMockModels] = useState(false);

  const handleRoundsClick = () => {
    if (hasSavedRounds) {
      setShowResumeDialog(true);
    } else {
      onSelect(StudyMode.ALL_QUESTIONS_ROUNDS);
    }
  };

  if (showMockModels) {
    return (
      <div className="space-y-8 py-8 animate-fadeIn relative">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">{t.selectMockModel}</h2>
            <p className="text-slate-500 text-sm">60 questions • Official Weights • 60% Pass Mark</p>
          </div>
          <button onClick={() => setShowMockModels(false)} className="text-slate-500 hover:text-indigo-600 flex items-center gap-1 font-medium transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t.back}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              onClick={() => onSelect(StudyMode.MOCK_EXAM, undefined, idx)}
              className="group p-8 bg-white border-2 border-slate-100 rounded-3xl text-start hover:border-indigo-600 hover:shadow-xl transition-all flex flex-col gap-4 relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {t.mockModelName.replace('{n}', (idx + 1).toString())}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{t.mockModelDesc}</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-black text-indigo-600 uppercase tracking-widest gap-2">
                Start Exam
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/50 rounded-full -mr-12 -mt-12 blur-2xl"></div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const modes = [
    {
      id: 'ALL_QUESTIONS_ROUNDS',
      name: t.modes.ALL_QUESTIONS_ROUNDS.name,
      description: t.modes.ALL_QUESTIONS_ROUNDS.desc,
      icon: '🔄',
      onClick: handleRoundsClick
    },
    {
      id: 'MOCK_EXAM',
      name: t.modes.MOCK_EXAM.name,
      description: t.modes.MOCK_EXAM.desc,
      icon: '⏱️',
      onClick: () => setShowMockModels(true)
    },
    {
      id: 'PRACTICE_BY_DOMAIN',
      name: t.modes.PRACTICE_BY_DOMAIN.name,
      description: t.modes.PRACTICE_BY_DOMAIN.desc,
      icon: '🎯',
      onClick: () => onSelect(StudyMode.PRACTICE_BY_DOMAIN)
    },
    {
      id: 'DIRECT_ANSWERS',
      name: t.modes.DIRECT_ANSWERS.name,
      description: t.modes.DIRECT_ANSWERS.desc,
      icon: '💡',
      onClick: () => onSelect(StudyMode.DIRECT_ANSWERS)
    },
    {
      id: 'CHEAT_SHEET',
      name: t.masterCheat,
      description: t.cheatDesc,
      icon: '📖',
      onClick: onCheatSheet,
      isSpecial: true
    }
  ];

  return (
    <div className="space-y-8 py-8 animate-fadeIn relative">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">{t.selectMode}</h2>
        <button onClick={onBack} className="text-slate-500 hover:text-indigo-600 flex items-center gap-1 font-medium transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t.back}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {modes.map(mode => (
          <button
            key={mode.id}
            onClick={mode.onClick}
            className={`group p-6 border rounded-2xl text-start transition-all shadow-sm hover:shadow-md active:scale-[0.99] relative overflow-hidden ${mode.id === 'CHEAT_SHEET' ? 'bg-emerald-50 border-emerald-200 hover:border-emerald-600' : 'bg-white border-slate-200 hover:border-indigo-600'}`}
          >
            {mode.id === 'ALL_QUESTIONS_ROUNDS' && hasSavedRounds && (
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-lg uppercase tracking-tighter">
                {lang === 'ar' ? 'جلسة محفوظة' : 'Saved Progress'}
              </div>
            )}
            <div className="flex items-start gap-5">
              <div className={`text-4xl p-5 rounded-2xl transition-colors shrink-0 ${mode.id === 'CHEAT_SHEET' ? 'bg-emerald-100 group-hover:bg-emerald-200' : 'bg-slate-50 group-hover:bg-indigo-50'}`}>
                {mode.icon}
              </div>
              <div className="space-y-2">
                <h3 className={`text-xl font-bold transition-colors ${mode.id === 'CHEAT_SHEET' ? 'text-emerald-900 group-hover:text-emerald-700' : 'text-slate-800 group-hover:text-indigo-600'}`}>{mode.name}</h3>
                <p className={`text-sm leading-relaxed max-w-2xl ${mode.id === 'CHEAT_SHEET' ? 'text-emerald-700' : 'text-slate-500'}`}>{mode.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Resume Dialog Overlay */}
      {showResumeDialog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slideUp border border-slate-100">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">{t.resume}?</h3>
            <p className="text-slate-500 text-center mb-8 leading-relaxed">
              {t.existingProgress}
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={onResume}
                className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
              >
                {t.resume}
              </button>
              <button 
                onClick={() => { setShowResumeDialog(false); onSelect(StudyMode.ALL_QUESTIONS_ROUNDS); }}
                className="w-full py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all"
              >
                {t.restart}
              </button>
              <button 
                onClick={() => setShowResumeDialog(false)}
                className="mt-2 text-slate-400 font-medium hover:text-slate-600 transition-colors text-sm"
              >
                {t.back}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModeSelection;
