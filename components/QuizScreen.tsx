
import React, { useState, useEffect } from 'react';
import { StudySet, StudySetQuestion, AttemptAnswer, Question, QuestionType, StudyMode } from '../types.ts';
// Fix: Import QUESTIONS as MOCK_QUESTIONS to align with member exported from data/index.ts
import { QUESTIONS as MOCK_QUESTIONS } from '../data/index.ts';
import { translations, Language } from '../translations.ts';

interface QuizScreenProps {
  studySet: StudySet;
  questions: StudySetQuestion[];
  initialAnswers: AttemptAnswer[];
  onFinish: (answers: AttemptAnswer[]) => void;
  onPause: (answers: AttemptAnswer[]) => void;
  lang: Language;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ studySet, questions, initialAnswers, onFinish, onPause, lang }) => {
  const t = translations[lang];
  const [currentIndex, setCurrentIndex] = useState(initialAnswers.length < questions.length ? initialAnswers.length : 0);
  const [answers, setAnswers] = useState<AttemptAnswer[]>(initialAnswers);
  const [selectedChoices, setSelectedChoices] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentSQ = questions[currentIndex];
  const question = MOCK_QUESTIONS.find(q => q.id === currentSQ?.question_id);

  useEffect(() => {
    if (question) {
      const existing = answers.find(a => a.question_id === question.id);
      if (existing) {
        setSelectedChoices(existing.selected_choice_ids);
        if (studySet.mode !== StudyMode.MOCK_EXAM) setShowExplanation(true);
      } else {
        setSelectedChoices([]);
        setShowExplanation(false);
      }
    }
    // Auto-scroll to top when question changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex, question, studySet.mode, answers]);

  if (!questions || questions.length === 0) return null;
  if (!question) return <div className="p-10 text-center text-slate-500 font-bold">Loading question...</div>;

  const currentAnswer = answers.find(a => a.question_id === question.id);
  const isMock = studySet.mode === StudyMode.MOCK_EXAM;
  const progress = ((currentIndex + 1) / questions.length) * 100;
  
  const currentRound = Math.floor(currentIndex / 10) + 1;
  const totalRounds = Math.ceil(questions.length / 10);

  const handleToggleChoice = (choiceId: string) => {
    if (showExplanation && !isMock) return;
    if (question.type === QuestionType.MCQ || question.type === QuestionType.SCENARIO) {
      setSelectedChoices([choiceId]);
    } else {
      setSelectedChoices(prev => 
        prev.includes(choiceId) ? prev.filter(id => id !== choiceId) : [...prev, choiceId]
      );
    }
  };

  const checkAnswer = () => {
    const correctChoices = question.choices.filter(c => c.is_correct).map(c => c.id);
    const isCorrect = 
      selectedChoices.length === correctChoices.length && 
      selectedChoices.every(id => correctChoices.includes(id));

    const newAnswer: AttemptAnswer = {
      attempt_id: studySet.id,
      question_id: question.id,
      selected_choice_ids: selectedChoices,
      is_correct: isCorrect
    };

    const newAnswers = [...answers.filter(a => a.question_id !== question.id), newAnswer];
    setAnswers(newAnswers);

    if (isMock) {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        onFinish(newAnswers);
      }
    } else {
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onFinish(answers);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4 animate-fadeIn pb-24">
      {/* Progress Bar Header */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-3 sticky top-20 z-40 backdrop-blur-md bg-white/90">
        <div className="flex justify-between items-center px-1">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Exam Progress</span>
            <span className="text-sm font-bold text-slate-800">
               {t.questionOf.replace('{current}', (currentIndex + 1).toString()).replace('{total}', questions.length.toString())}
            </span>
          </div>
          {studySet.mode === StudyMode.ALL_QUESTIONS_ROUNDS && (
            <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
              {t.roundOf.replace('{current}', currentRound.toString()).replace('{total}', totalRounds.toString())}
            </div>
          )}
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div className="bg-[#30B6AF] h-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 min-h-[500px] flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-bl-full -z-0 opacity-50 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col h-full flex-grow">
          {question.scenario_text && (
            <div className="mb-8 p-6 bg-indigo-50/50 border-l-4 border-indigo-500 rounded-r-2xl text-slate-700 italic text-base leading-relaxed">
              <span className="font-black not-italic text-indigo-900 block mb-2 uppercase tracking-widest text-xs">Scenario Context</span>
              "{question.scenario_text}"
            </div>
          )}
          
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4" dir="ltr">
              {question.text || question.question_text}
            </h3>
            {question.type === QuestionType.MULTI_SELECT && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-black rounded-lg uppercase tracking-widest border border-amber-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Select Multiple Choices
              </div>
            )}
          </div>

          <div className="space-y-4 flex-grow" dir="ltr">
            {question.choices.map((choice, idx) => {
              const isSelected = selectedChoices.includes(choice.id);
              const isCorrect = choice.is_correct;
              
              let btnClass = "border-slate-200 hover:border-indigo-300 bg-white text-slate-700";
              let indicatorClass = "bg-slate-50 text-slate-400 border-slate-200";

              if (isSelected) {
                  btnClass = "border-indigo-600 bg-indigo-50/50 text-indigo-900 ring-2 ring-indigo-600 ring-offset-2";
                  indicatorClass = "bg-indigo-600 text-white border-indigo-600";
              }
              
              if (showExplanation && !isMock) {
                  if (isCorrect) {
                    btnClass = "border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500 ring-offset-2";
                    indicatorClass = "bg-emerald-500 text-white border-emerald-500";
                  } else if (isSelected) {
                    btnClass = "border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-500 ring-offset-2";
                    indicatorClass = "bg-rose-500 text-white border-rose-500";
                  }
              }

              return (
                <button
                  key={choice.id}
                  disabled={showExplanation && !isMock}
                  onClick={() => handleToggleChoice(choice.id)}
                  className={`w-full text-left p-5 border-2 rounded-2xl transition-all duration-200 flex items-center gap-5 group ${btnClass} ${showExplanation && !isMock ? 'cursor-default' : 'cursor-pointer active:scale-[0.98]'}`}
                >
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center border font-black text-sm shrink-0 transition-all group-hover:scale-110 ${indicatorClass}`}>
                     {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-lg md:text-xl font-semibold leading-relaxed">{choice.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Explanation Feedback */}
      {showExplanation && !isMock && (
        <div className={`p-8 rounded-[2rem] shadow-xl animate-slideUp border-2 ${currentAnswer?.is_correct ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}>
          <div className="flex items-center gap-4 mb-4">
             <div className={`h-12 w-12 rounded-full flex items-center justify-center shadow-lg ${currentAnswer?.is_correct ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {currentAnswer?.is_correct 
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  }
                </svg>
             </div>
             <div>
               <h4 className={`text-xl font-black ${currentAnswer?.is_correct ? 'text-emerald-900' : 'text-rose-900'}`}>
                 {currentAnswer?.is_correct ? t.correct : t.incorrect}
               </h4>
               <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Knowledge Explanation</p>
             </div>
          </div>
          <div className="bg-white/70 p-6 rounded-2xl border border-white/50 shadow-inner">
            <p className="text-slate-700 text-lg leading-relaxed font-medium" dir="ltr">
              {question.explanation}
            </p>
          </div>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-lg border-t border-slate-100 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-6">
          <button 
            onClick={() => onPause(answers)}
            className="px-6 py-3 text-slate-500 font-black hover:text-indigo-600 transition-all flex items-center gap-2 group text-sm uppercase tracking-widest"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t.pauseExit}
          </button>

          {!showExplanation && (
            <button 
              onClick={checkAnswer}
              disabled={selectedChoices.length === 0}
              className={`px-12 py-4 rounded-2xl font-black shadow-2xl transition-all transform active:scale-95 flex items-center gap-3 ${selectedChoices.length === 0 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-[#293e40] text-white hover:bg-slate-800 hover:-translate-y-1'}`}
            >
              {isMock ? "Next Question" : t.checkAnswer}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          )}

          {showExplanation && !isMock && (
            <button 
              onClick={handleNext}
              className="px-12 py-4 bg-[#30B6AF] text-white rounded-2xl font-black shadow-2xl hover:bg-[#289c96] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-3"
            >
              {currentIndex < questions.length - 1 ? t.nextQuestion : t.finishSession}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${lang === 'ar' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
