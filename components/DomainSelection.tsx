
import React from 'react';
import { DOMAINS } from '../data';
import { translations, Language } from '../translations';

interface DomainSelectionProps {
  onSelect: (id: number) => void;
  onSkip?: () => void;
  canSkip?: boolean;
  onBack: () => void;
  lang: Language;
}

const DomainSelection: React.FC<DomainSelectionProps> = ({ onSelect, onSkip, canSkip, onBack, lang }) => {
  const t = translations[lang];

  return (
    <div className="space-y-8 py-8 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{t.selectDomain}</h2>
          <p className="text-slate-500">{t.domainSelectDesc}</p>
        </div>
        <button onClick={onBack} className="text-slate-500 hover:text-indigo-600 flex items-center gap-1 font-medium transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t.back}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DOMAINS.map(domain => (
          <button
            key={domain.id}
            onClick={() => onSelect(domain.id)}
            className="p-5 bg-white border border-slate-200 rounded-xl text-start hover:border-indigo-600 transition-all shadow-sm flex justify-between items-center group"
          >
            <div>
              <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{domain.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{t.weight}: {domain.exam_weight}%</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-slate-300 group-hover:text-indigo-600 transition-colors ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
        {canSkip && (
          <button
            onClick={onSkip}
            className="p-5 bg-indigo-50 border border-indigo-200 rounded-xl text-start hover:border-indigo-600 transition-all shadow-sm text-indigo-700 font-bold flex justify-center items-center gap-2"
          >
            <span>{t.practiceAll}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default DomainSelection;
