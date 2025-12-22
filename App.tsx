
import React, { useState, useEffect } from 'react';
import { StudyMode, StudySet, StudySetQuestion, StudyStatus, AttemptAnswer, Domain, Attempt, DomainPerformance, TypePerformance, Flashcard } from './types.ts';
import { DOMAINS, QUESTIONS, FLASHCARDS } from './data/index.ts';
import { createStudySet, calculateResults } from './logic.ts';
import { translations, Language } from './translations.ts';

// Components
import ModeSelection from './components/ModeSelection.tsx';
import DomainSelection from './components/DomainSelection.tsx';
import QuizScreen from './components/QuizScreen.tsx';
import ResultScreen from './components/ResultScreen.tsx';
import Dashboard from './components/Dashboard.tsx';
import FlashcardScreen from './components/FlashcardScreen.tsx';
import CheatSheetScreen from './components/CheatSheetScreen.tsx';

type Screen = 'DASHBOARD' | 'MODE_SELECT' | 'DOMAIN_SELECT' | 'QUIZ' | 'RESULTS' | 'FLASHCARDS' | 'CHEAT_SHEET';

const SESSION_KEY = 'csa_prep_rounds_session';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentScreen, setCurrentScreen] = useState<Screen>('DASHBOARD');
  const [selectedMode, setSelectedMode] = useState<StudyMode | null>(null);
  const [currentStudySet, setCurrentStudySet] = useState<StudySet | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<StudySetQuestion[]>([]);
  const [currentFlashcards, setCurrentFlashcards] = useState<Flashcard[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [answers, setAnswers] = useState<AttemptAnswer[]>([]);
  const [results, setResults] = useState<{ attempt: Attempt, domainBreakdown: DomainPerformance[], typeBreakdown: TypePerformance[] } | null>(null);
  const [hasSavedSession, setHasSavedSession] = useState(false);

  const t = translations[lang];

  // Load saved session on mount
  useEffect(() => {
    const saved = localStorage.getItem(SESSION_KEY);
    if (saved) {
      setHasSavedSession(true);
    }
  }, []);

  const handleStartStudy = (mode: StudyMode, domainId?: number, modelIndex?: number) => {
    setSelectedMode(mode);
    
    if (mode === StudyMode.PRACTICE_BY_DOMAIN || mode === StudyMode.DIRECT_ANSWERS) {
      setCurrentScreen('DOMAIN_SELECT');
    } else {
      initiateStudySet(mode, domainId, false, modelIndex);
    }
  };

  const initiateStudySet = (mode: StudyMode, domainId?: number, resume: boolean = false, modelIndex: number = 0) => {
    if (resume) {
      const saved = localStorage.getItem(SESSION_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        setCurrentStudySet(data.studySet);
        setCurrentQuestions(data.questions);
        setAnswers(data.answers);
        setSelectedMode(data.studySet.mode);
        setCurrentScreen('QUIZ');
        return;
      }
    }

    const domain = DOMAINS.find(d => d.id === domainId);
    setSelectedDomain(domain || null);

    if (mode === StudyMode.DIRECT_ANSWERS) {
      const filtered = domainId ? FLASHCARDS.filter(f => f.domain_id === domainId) : FLASHCARDS;
      setCurrentFlashcards(filtered);
      setCurrentScreen('FLASHCARDS');
    } else {
      const { studySet, questions } = createStudySet(mode, domainId, modelIndex);
      setCurrentStudySet(studySet);
      setCurrentQuestions(questions);
      setAnswers([]);
      
      if (mode === StudyMode.ALL_QUESTIONS_ROUNDS) {
        localStorage.removeItem(SESSION_KEY);
        setHasSavedSession(false);
      }
      
      setCurrentScreen('QUIZ');
    }
  };

  const handlePauseQuiz = (currentAnswers: AttemptAnswer[]) => {
    if (currentStudySet?.mode === StudyMode.ALL_QUESTIONS_ROUNDS) {
      const sessionData = {
        studySet: currentStudySet,
        questions: currentQuestions,
        answers: currentAnswers
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
      setHasSavedSession(true);
    }
    setAnswers(currentAnswers);
    setCurrentScreen('DASHBOARD');
  };

  const handleFinishQuiz = (finalAnswers: AttemptAnswer[]) => {
    if (!currentStudySet) return;
    const res = calculateResults(currentStudySet, currentQuestions, finalAnswers);
    setResults(res);
    setAnswers(finalAnswers);
    
    if (currentStudySet.mode === StudyMode.ALL_QUESTIONS_ROUNDS) {
      localStorage.removeItem(SESSION_KEY);
      setHasSavedSession(false);
    }
    
    setCurrentScreen('RESULTS');
  };

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  const goToDashboard = () => setCurrentScreen('DASHBOARD');

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F3F4]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Persistent Header */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={goToDashboard}>
            <div className="bg-[#30B6AF] text-white p-2 rounded-xl group-hover:rotate-6 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h1 className="text-xl font-black text-slate-800 hidden sm:block tracking-tight">{t.title}</h1>
          </div>
          
          <div className="flex items-center gap-3">
             <button 
               onClick={toggleLang} 
               className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-black border border-slate-200 transition-all uppercase tracking-tighter"
             >
               {lang === 'en' ? 'العربية' : 'EN'}
             </button>
             <button 
               onClick={goToDashboard} 
               className="text-slate-600 hover:text-[#30B6AF] font-black text-sm px-3 py-2 rounded-xl transition-all uppercase tracking-widest"
             >
               {t.dashboard}
             </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col max-w-6xl w-full mx-auto p-4 md:p-8">
        {currentScreen === 'DASHBOARD' && (
          <Dashboard 
            onStart={() => setCurrentScreen('MODE_SELECT')} 
            onCheatSheet={() => setCurrentScreen('CHEAT_SHEET')}
            lang={lang} 
          />
        )}
        {currentScreen === 'MODE_SELECT' && (
          <ModeSelection 
            onSelect={handleStartStudy} 
            onCheatSheet={() => setCurrentScreen('CHEAT_SHEET')}
            onResume={() => initiateStudySet(StudyMode.ALL_QUESTIONS_ROUNDS, undefined, true)}
            onBack={goToDashboard} 
            lang={lang} 
            hasSavedRounds={hasSavedSession}
          />
        )}
        {currentScreen === 'DOMAIN_SELECT' && (
          <DomainSelection 
            onSelect={(id) => initiateStudySet(selectedMode!, id)} 
            onBack={() => setCurrentScreen('MODE_SELECT')} 
            lang={lang}
          />
        )}
        {currentScreen === 'QUIZ' && currentStudySet && (
          <QuizScreen 
            studySet={currentStudySet} 
            questions={currentQuestions} 
            initialAnswers={answers}
            onFinish={handleFinishQuiz}
            onPause={handlePauseQuiz}
            lang={lang}
          />
        )}
        {currentScreen === 'RESULTS' && results && currentStudySet && (
          <ResultScreen 
            results={results} 
            studySet={currentStudySet} 
            questions={currentQuestions}
            onRestart={() => setCurrentScreen('MODE_SELECT')}
            onReview={() => {}}
            lang={lang}
          />
        )}
        {currentScreen === 'FLASHCARDS' && (
          <FlashcardScreen 
            flashcards={currentFlashcards} 
            domainName={selectedDomain?.name || "All Domains"} 
            onBack={() => setCurrentScreen('DOMAIN_SELECT')} 
            lang={lang} 
          />
        )}
        {currentScreen === 'CHEAT_SHEET' && (
          <CheatSheetScreen onBack={() => setCurrentScreen('MODE_SELECT')} lang={lang} />
        )}
      </main>

      {/* Persistent Footer with Signature */}
      <footer className="bg-white border-t border-slate-100 py-10 px-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          <p className="text-slate-400 text-sm font-bold tracking-tight">
            &copy; 2024 ServiceNow CSA Prep. Professional Exam Preparation Utility.
          </p>
          <div className="flex items-center gap-5">
            <div className="h-px w-16 bg-slate-100"></div>
            <span className="text-[#30B6AF] font-black tracking-[0.5em] uppercase text-[12px] select-none hover:text-[#293e40] transition-colors cursor-default">
              khalifah
            </span>
            <div className="h-px w-16 bg-slate-100"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
