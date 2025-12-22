
import React, { useState } from 'react';
import { Flashcard } from '../types';
import { Language, translations } from '../translations';

interface FlashcardScreenProps {
  flashcards: Flashcard[];
  domainName: string;
  onBack: () => void;
  lang: Language;
}

const FlashcardScreen: React.FC<FlashcardScreenProps> = ({ flashcards, domainName, onBack, lang }) => {
  const t = translations[lang];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];
  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 150);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev - 1), 150);
    }
  };

  if (!currentCard) return <div className="p-10 text-center">No flashcards available in this domain.</div>;

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-8 animate-fadeIn">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <button onClick={onBack} className="text-slate-500 hover:text-[#30B6AF] flex items-center gap-1 font-bold transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t.back}
        </button>
        <div className="text-center sm:text-end">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{domainName}</div>
          <div className="text-sm font-bold text-slate-700">Card {currentIndex + 1} of {flashcards.length}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
        <div className="bg-[#30B6AF] h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Flashcard Component */}
      <div className="perspective-1000 h-[350px] sm:h-[400px]">
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden bg-white border-2 border-slate-200 rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 text-center">
            <div className="text-xs font-black text-[#30B6AF] uppercase tracking-widest mb-4">Question / السؤال المباشر</div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed" dir="ltr">
              {currentCard.front}
            </h3>
            <div className="mt-12 text-slate-400 text-xs animate-pulse">Click to reveal answer / انقر لمعرفة الإجابة</div>
          </div>

          {/* Back Side (Answer) */}
          <div className="absolute w-full h-full backface-hidden bg-[#293e40] text-white border-2 border-[#293e40] rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 text-center rotate-y-180">
            <div className="text-xs font-black text-[#30B6AF] uppercase tracking-widest mb-4">Direct Answer / الإجابة المباشرة</div>
            <p className="text-2xl sm:text-3xl font-black text-white" dir="ltr">
              {currentCard.back}
            </p>
            <div className="mt-12 text-slate-400 text-xs">Click to see question again / انقر للعودة للسؤال</div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-6 pt-4">
        <button 
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          disabled={currentIndex === 0}
          className={`flex-1 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${currentIndex === 0 ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-[#30B6AF] hover:text-[#30B6AF]'}`}
        >
           <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${lang === 'ar' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
           {lang === 'ar' ? 'السابق' : 'Previous'}
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          disabled={currentIndex === flashcards.length - 1}
          className={`flex-1 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${currentIndex === flashcards.length - 1 ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-[#30B6AF] text-white shadow-lg hover:bg-[#289c96]'}`}
        >
          {lang === 'ar' ? 'التالي' : 'Next'}
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${lang === 'ar' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default FlashcardScreen;
