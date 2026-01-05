
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

type Screen = 'DASHBOARD' | 'MODE_SELECT' | 'DOMAIN_SELECT' | 'QUIZ' | 'RESULTS' | 'FLASHCARDS';

const SESSION_KEY = 'csa_prep_rounds_session';

const App: React.FC = () => {
  // Set initial language to English
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
  const [isReviewMode, setIsReviewMode] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const saved = localStorage.getItem(SESSION_KEY);
    if (saved) setHasSavedSession(true);
  }, []);

  const handleStartStudy = (mode: StudyMode, domainId?: number, modelIndex?: number) => {
    setSelectedMode(mode);
    setIsReviewMode(false);
    if (mode === StudyMode.PRACTICE_BY_DOMAIN || mode === StudyMode.DIRECT_ANSWERS) {
      setCurrentScreen('DOMAIN_SELECT');
    } else {
      initiateStudySet(mode, domainId, false, modelIndex);
    }
  };

  const initiateStudySet = (mode: StudyMode, domainId?: number, resume: boolean = false, modelIndex: number = 0) => {
    setIsReviewMode(false);
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
    if (isReviewMode) {
      setCurrentScreen('RESULTS');
      return;
    }
    if (currentStudySet?.mode === StudyMode.ALL_QUESTIONS_ROUNDS) {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ studySet: currentStudySet, questions: currentQuestions, answers: currentAnswers }));
      setHasSavedSession(true);
    }
    setAnswers(currentAnswers);
    setCurrentScreen('DASHBOARD');
  };

  const handleFinishQuiz = (finalAnswers: AttemptAnswer[]) => {
    if (!currentStudySet) return;
    setResults(calculateResults(currentStudySet, currentQuestions, finalAnswers));
    setAnswers(finalAnswers);
    if (currentStudySet.mode === StudyMode.ALL_QUESTIONS_ROUNDS) {
      localStorage.removeItem(SESSION_KEY);
      setHasSavedSession(false);
    }
    setCurrentScreen('RESULTS');
  };

  const handleReview = () => {
    setIsReviewMode(true);
    setCurrentScreen('QUIZ');
  };

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  const goToDashboard = () => { setSelectedDomain(null); setIsReviewMode(false); setCurrentScreen('DASHBOARD'); };

  return (
    <div className={`min-h-screen flex flex-col bg-[#F8FAFC] font-sans selection:bg-teal-100 ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Universal Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 md:h-20 sticky top-0 z-[100] shadow-sm flex items-center print:hidden">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center w-full">
          <div className="flex items-center gap-2 md:gap-4 cursor-pointer group" onClick={goToDashboard}>
            <div className="bg-[#30B6AF] text-white p-1.5 md:p-2 rounded-lg md:rounded-xl group-hover:rotate-6 transition-transform shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h1 className="text-sm md:text-xl font-black text-slate-800 tracking-tight leading-none">{t.title}</h1>
          </div>
          
          <div className="flex items-center gap-2">
             <button onClick={toggleLang} className="bg-slate-100 hover:bg-slate-200 text-slate-700 h-9 md:h-11 px-3 md:px-5 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black border border-slate-200 transition-all">
               {lang === 'en' ? 'العربية' : 'EN'}
             </button>
             <button onClick={goToDashboard} className="text-slate-500 hover:text-[#30B6AF] font-black text-[10px] md:text-xs h-9 md:h-11 px-3 md:px-4 rounded-lg md:rounded-xl transition-all uppercase tracking-wider">
               {t.dashboard}
             </button>
          </div>
        </div>
      </header>

      {/* Content Wrapper */}
      <main className="flex-grow flex flex-col w-full max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10">
        {currentScreen === 'DASHBOARD' && <Dashboard onStart={() => setCurrentScreen('MODE_SELECT')} lang={lang} />}
        {currentScreen === 'MODE_SELECT' && <ModeSelection onSelect={handleStartStudy} onResume={() => initiateStudySet(StudyMode.ALL_QUESTIONS_ROUNDS, undefined, true)} onBack={goToDashboard} lang={lang} hasSavedRounds={hasSavedSession} />}
        {currentScreen === 'DOMAIN_SELECT' && <DomainSelection onSelect={(id) => initiateStudySet(selectedMode!, id)} onBack={() => setCurrentScreen('MODE_SELECT')} lang={lang} />}
        {currentScreen === 'QUIZ' && currentStudySet && (
          <QuizScreen 
            studySet={currentStudySet} 
            questions={currentQuestions} 
            initialAnswers={answers} 
            onFinish={handleFinishQuiz} 
            onPause={handlePauseQuiz} 
            lang={lang} 
            isReviewMode={isReviewMode}
          />
        )}
        {currentScreen === 'RESULTS' && results && currentStudySet && <ResultScreen results={results} studySet={currentStudySet} questions={currentQuestions} onRestart={() => setCurrentScreen('MODE_SELECT')} onReview={handleReview} lang={lang} />}
        {currentScreen === 'FLASHCARDS' && <FlashcardScreen flashcards={currentFlashcards} domainName={selectedDomain?.name || ""} onBack={() => setCurrentScreen('DOMAIN_SELECT')} lang={lang} />}
      </main>

      {/* Universal Footer */}
      <footer className="bg-white border-t border-slate-100 py-8 md:py-12 mt-auto print:hidden">
        <div className="container max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="text-slate-400 text-[10px] md:text-xs font-bold tracking-tight">&copy; 2024 ServiceNow CSA Prep. Professional Utility.</p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-slate-100"></div>
            <span className="text-[#30B6AF] font-black tracking-[0.4em] uppercase text-[10px] md:text-[12px]">khalifah</span>
            <div className="h-px w-12 bg-slate-100"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
