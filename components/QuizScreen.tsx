
import React, { useState, useEffect } from 'react';
import { StudySet, StudySetQuestion, AttemptAnswer, Question, QuestionType, StudyMode } from '../types';
import { MOCK_QUESTIONS } from '../data';
import { translations, Language } from '../translations';

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
  }, [currentIndex, question, studySet.mode, answers]);

  if (!questions || questions.length === 0) return null;
  if (!question) return <div className="p-10 text-center">Loading question...</div>;

  const currentAnswer = answers.find(a => a.question_id === question.id);
  const isMock = studySet.mode === StudyMode.MOCK_EXAM;
  const progress = ((currentIndex + 1) / questions.length) * 100;
  
  // Round info for "All Questions" mode
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
    <div className="max-w-4xl mx-auto space-y-6 py-4 animate-fadeIn">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-slate-200 gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {t.questionOf.replace('{current}', (currentIndex + 1).toString()).replace('{total}', questions.length.toString())}
          </div>
          {studySet.mode === StudyMode.ALL_QUESTIONS_ROUNDS && (
            <div className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-[10px] font-bold uppercase">
              {t.roundOf.replace('{current}', currentRound.toString()).replace('{total}', totalRounds.toString())}
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-center sm:items-end gap-1">
          <div className="text-sm font-bold text-slate-800">
             {t.modes[studySet.mode]?.name || "Practice Session"}
          </div>
          <div className="w-48 bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
            <div 
              className="bg-[#30B6AF] h-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-slate-100 space-y-8 min-h-[400px] flex flex-col relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-0 opacity-50"></div>
        
        <div className="relative z-10 space-y-8 flex flex-col flex-grow">
          {question.scenario_text && (
            <div className="p-4 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg text-slate-700 italic text-sm">
              <span className="font-bold not-italic text-indigo-900 block mb-1 uppercase tracking-tighter text-[10px]">Context</span>
              "{question.scenario_text}"
            </div>
          )}
          
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug" dir="ltr">
            {question.text || question.question_text}
            {question.type === QuestionType.MULTI_SELECT && (
              <span className="inline-block ml-2 px-2 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-bold rounded align-middle uppercase">
                Select Multiple
              </span>
            )}
          </h3>

          <div className="space-y-3 flex-grow" dir="ltr">
            {question.choices.map((choice, idx) => {
              const isSelected = selectedChoices.includes(choice.id);
              const isCorrect = choice.is_correct;
              
              let btnClass = "border-slate-200 hover:border-indigo-300 bg-white text-slate-700";
              let indicatorClass = "bg-slate-50 text-slate-400 border-slate-200";

              if (isSelected) {
                  btnClass = "border-indigo-600 bg-indigo-50/50 text-indigo-900 ring-1 ring-indigo-600";
                  indicatorClass = "bg-indigo-600 text-white border-indigo-600";
              }
              
              if (showExplanation && !isMock) {
                  if (isCorrect) {
                    btnClass = "border-[#30B6AF] bg-emerald-50 text-emerald-900 ring-1 ring-[#30B6AF]";
                    indicatorClass = "bg-[#30B6AF] text-white border-[#30B6AF]";
                  } else if (isSelected) {
                    btnClass = "border-rose-500 bg-rose-50 text-rose-900 ring-1 ring-rose-500";
                    indicatorClass = "bg-rose-500 text-white border-rose-500";
                  }
              }

              return (
                <button
                  key={choice.id}
                  disabled={showExplanation && !isMock}
                  onClick={() => handleToggleChoice(choice.id)}
                  className={`w-full text-left p-4 border-2 rounded-xl transition-all duration-150 flex items-center gap-4 group ${btnClass} ${showExplanation && !isMock ? 'cursor-default' : 'cursor-pointer active:scale-[0.99]'}`}
                >
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center border font-bold text-sm shrink-0 transition-colors ${indicatorClass}`}>
                     {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-base md:text-lg font-medium">{choice.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Explanation Feedback */}
      {showExplanation && !isMock && (
        <div className={`p-6 rounded-2xl shadow-lg animate-slideUp border-2 ${currentAnswer?.is_correct ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}>
          <div className="flex items-center gap-3 mb-3">
             <div className={`h-8 w-8 rounded-full flex items-center justify-center ${currentAnswer?.is_correct ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                {currentAnswer?.is_correct ? '✓' : '✕'}
             </div>
             <h4 className={`text-lg font-bold ${currentAnswer?.is_correct ? 'text-emerald-800' : 'text-rose-800'}`}>
               {currentAnswer?.is_correct ? t.correct : t.incorrect}
             </h4>
          </div>
          <p className="text-slate-700 text-base leading-relaxed bg-white/50 p-4 rounded-lg border border-slate-100 shadow-inner" dir="ltr">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-4 mt-8 pb-10">
        <button 
          onClick={() => onPause(answers)}
          className="px-6 py-3 text-slate-500 font-bold hover:text-indigo-600 transition-colors flex items-center gap-2 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
          {t.pauseExit}
        </button>

        {!showExplanation && selectedChoices.length > 0 && (
          <button 
            onClick={checkAnswer}
            className="px-10 py-4 bg-[#293e40] text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all transform hover:scale-105 active:scale-95"
          >
            {isMock ? "Next Question" : t.checkAnswer}
          </button>
        )}

        {showExplanation && !isMock && (
          <button 
            onClick={handleNext}
            className="px-10 py-4 bg-[#30B6AF] text-white rounded-xl font-bold shadow-lg hover:bg-[#289c96] transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95"
          >
            {currentIndex < questions.length - 1 ? t.nextQuestion : t.finishSession}
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${lang === 'ar' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;
