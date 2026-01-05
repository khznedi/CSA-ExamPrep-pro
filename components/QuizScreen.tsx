
import React, { useState, useEffect } from 'react';
import { StudySet, StudySetQuestion, AttemptAnswer, Question, QuestionType, StudyMode } from '../types.ts';
import { QUESTIONS as MOCK_QUESTIONS } from '../data/index.ts';
import { translations, Language } from '../translations.ts';
import { GoogleGenAI } from "@google/genai";

interface QuizScreenProps {
  studySet: StudySet;
  questions: StudySetQuestion[];
  initialAnswers: AttemptAnswer[];
  onFinish: (answers: AttemptAnswer[]) => void;
  onPause: (answers: AttemptAnswer[]) => void;
  lang: Language;
  isReviewMode?: boolean;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ studySet, questions, initialAnswers, onFinish, onPause, lang, isReviewMode = false }) => {
  const t = translations[lang];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AttemptAnswer[]>(initialAnswers);
  const [selectedChoices, setSelectedChoices] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(isReviewMode);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90 * 60);

  const currentSQ = questions[currentIndex];
  const question = MOCK_QUESTIONS.find(q => q.id === currentSQ?.question_id);
  const isMock = studySet.mode === StudyMode.MOCK_EXAM;

  useEffect(() => {
    if (isMock && !isReviewMode) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            onFinish(answers);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isMock, isReviewMode, answers, onFinish]);

  useEffect(() => {
    if (question) {
      const existing = answers.find(a => a.question_id === question.id);
      if (existing) {
        setSelectedChoices(existing.selected_choice_ids);
        if (studySet.mode !== StudyMode.MOCK_EXAM || isReviewMode) setShowExplanation(true);
      } else {
        setSelectedChoices([]);
        setShowExplanation(isReviewMode);
      }
      setAiExplanation(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex, question, studySet.mode, answers, isReviewMode]);

  const handleAskAi = async () => {
    if (!question || isAiLoading) return;
    setIsAiLoading(true);
    setAiExplanation(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `ServiceNow CSA Expert explanation for: "${question.text || question.question_text}". 
      Correct: ${question.choices.filter(c => c.is_correct).map(c => c.text)}.
      Format: Concise bullet points, ${lang === 'ar' ? 'Arabic' : 'English'}.`;
      const response = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: prompt });
      setAiExplanation(response.text || "No response.");
    } catch (error) {
      setAiExplanation(t.aiError);
    } finally { setIsAiLoading(false); }
  };

  if (!question) return null;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleToggleChoice = (choiceId: string) => {
    if (isReviewMode || (showExplanation && !isMock)) return;
    if (question.type === QuestionType.MCQ || question.type === QuestionType.SCENARIO) {
      setSelectedChoices([choiceId]);
    } else {
      setSelectedChoices(prev => prev.includes(choiceId) ? prev.filter(id => id !== choiceId) : [...prev, choiceId]);
    }
  };

  const checkAnswer = () => {
    const correctChoices = question.choices.filter(c => c.is_correct).map(c => c.id);
    const is_correct = selectedChoices.length === correctChoices.length && selectedChoices.every(id => correctChoices.includes(id));
    const newAnswers = [...answers.filter(a => a.question_id !== question.id), { attempt_id: studySet.id, question_id: question.id, selected_choice_ids: selectedChoices, is_correct }];
    setAnswers(newAnswers);
    if (isMock) {
      if (currentIndex < questions.length - 1) setCurrentIndex(prev => prev + 1);
      else onFinish(newAnswers);
    } else setShowExplanation(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col gap-6 pb-32 w-full max-w-6xl mx-auto animate-fadeIn">
      {/* Refined Header HUD */}
      <div className="sticky top-[64px] md:top-[80px] z-[90] bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-3xl border border-slate-200 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
           <div className="h-12 w-12 bg-slate-100 rounded-xl flex flex-col items-center justify-center font-black shrink-0">
              <span className="text-[8px] text-slate-400 uppercase">Q</span>
              <span className="text-lg text-slate-800 leading-none">{currentIndex + 1}</span>
           </div>
           <div>
             <h3 className="text-base font-black text-slate-700 leading-tight">Question {currentIndex + 1} of {questions.length}</h3>
             <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">{isReviewMode ? 'Review Mode' : 'Practice Session'}</span>
           </div>
        </div>

        {isMock && !isReviewMode && (
          <div className={`px-5 py-2 rounded-xl text-lg font-black flex items-center gap-3 ${timeLeft < 300 ? 'bg-rose-50 text-rose-600 animate-pulse' : 'bg-slate-50 text-slate-600'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {formatTime(timeLeft)}
          </div>
        )}

        <div className="flex flex-col items-end gap-1.5 w-full md:w-40">
           <div className="flex justify-between w-full text-[10px] font-black uppercase text-slate-400">
             <span>Progress</span>
             <span>{Math.round(progress)}%</span>
           </div>
           <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
             <div className="bg-[#30B6AF] h-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
           </div>
        </div>
      </div>

      {/* Compact Question Card */}
      <div className={`bg-white p-6 md:p-10 rounded-[2rem] border border-slate-200 shadow-xl relative overflow-hidden`}>
        <div className="space-y-8">
          {question.scenario_text && (
            <div className="p-5 bg-indigo-50 border-l-4 border-[#293e40] rounded-xl text-sm md:text-base text-slate-700 italic leading-relaxed font-medium">
              " {question.scenario_text} "
            </div>
          )}
          
          <div className="space-y-3">
             <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-[9px] font-black rounded-md uppercase tracking-wider">
               DOMAIN 0{question.domain_id}
             </span>
             <h2 className="text-xl md:text-2xl font-black text-slate-800 leading-snug" dir="ltr">
               {question.text || question.question_text}
             </h2>
          </div>
          
          {/* Options Grid - 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2" dir="ltr">
            {question.choices.map((choice, idx) => {
               const isSelected = selectedChoices.includes(choice.id);
               const isCorrectChoice = choice.is_correct;
               const showResults = (showExplanation && !isMock) || isReviewMode;
               
               let style = "border-slate-200 bg-white hover:border-[#30B6AF] hover:bg-teal-50/10";
               if (isSelected) style = "border-[#30B6AF] bg-teal-50 ring-2 ring-teal-500/5";
               
               if (showResults) {
                 if (isCorrectChoice) style = "border-emerald-500 bg-emerald-50 text-emerald-900";
                 else if (isSelected) style = "border-rose-300 bg-rose-50 text-rose-800";
                 else style = "border-slate-100 bg-slate-50 text-slate-300 opacity-60";
               }

               return (
                 <button 
                   key={choice.id} 
                   onClick={() => handleToggleChoice(choice.id)} 
                   disabled={showResults} 
                   className={`p-4 md:p-5 border-2 rounded-2xl flex items-center gap-4 transition-all text-left font-bold text-sm md:text-base ${style}`}
                 >
                   <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-black border-2 transition-all ${isSelected ? 'bg-[#30B6AF] text-white border-[#30B6AF]' : 'bg-white text-slate-300 border-slate-200 group-hover:border-[#30B6AF]'}`}>
                     {String.fromCharCode(65 + idx)}
                   </span>
                   <span className="flex-grow leading-tight">{choice.text}</span>
                 </button>
               );
            })}
          </div>
        </div>
      </div>

      {/* Explanations - Balanced Row */}
      {showExplanation && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-slideUp">
           <div className="bg-slate-50 p-6 rounded-[1.5rem] border border-slate-200">
             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Platform Rationale</h4>
             <p className="text-sm md:text-base text-slate-600 font-bold leading-relaxed" dir="ltr">{question.explanation}</p>
           </div>

           {!aiExplanation && !isAiLoading ? (
             <button onClick={handleAskAi} className="h-full min-h-[100px] bg-[#293e40] text-white rounded-[1.5rem] font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-lg">
               <span className="text-2xl">🤖</span>
               {t.askAi}
             </button>
           ) : (
             <div className="bg-white p-6 rounded-[1.5rem] border border-teal-100 shadow-md space-y-4">
               <div className="flex items-center gap-3 border-b border-slate-50 pb-3">
                 <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-xl">🎓</div>
                 <h4 className="text-sm font-black text-slate-800 uppercase">{t.aiTutor}</h4>
               </div>
               {isAiLoading ? (
                 <div className="flex flex-col items-center py-6 gap-3">
                   <div className="w-8 h-8 border-2 border-[#30B6AF]/20 border-t-[#30B6AF] rounded-full animate-spin"></div>
                   <p className="text-[10px] font-black text-slate-400 animate-pulse uppercase tracking-widest">{t.aiThinking}</p>
                 </div>
               ) : (
                 <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line font-medium" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                   {aiExplanation}
                 </div>
               )}
             </div>
           )}
        </div>
      )}

      {/* Persistent Bottom Bar - Compact */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 bg-white/95 backdrop-blur-md border-t border-slate-200 z-[100] shadow-2xl">
        <div className="container max-w-5xl mx-auto flex items-center justify-between">
          <button onClick={() => onPause(answers)} className="group text-slate-400 hover:text-rose-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
             {isReviewMode ? 'Exit Review' : t.back}
          </button>

          <div className="flex gap-3">
            {isReviewMode && currentIndex > 0 && (
              <button onClick={() => setCurrentIndex(prev => prev - 1)} className="h-12 px-6 bg-slate-100 text-slate-600 rounded-xl font-black text-sm shadow hover:bg-slate-200">Prev</button>
            )}

            {!showExplanation && !isReviewMode ? (
               <button onClick={checkAnswer} disabled={selectedChoices.length === 0} className={`h-12 md:h-14 px-8 md:px-12 rounded-xl font-black text-sm md:text-base shadow-lg transition-all ${selectedChoices.length === 0 ? 'bg-slate-100 text-slate-300' : 'bg-[#293e40] text-white hover:bg-slate-800 active:scale-95'}`}>
                 {isMock ? 'Next Question' : t.checkAnswer}
               </button>
            ) : (
               <button onClick={() => { if (currentIndex < questions.length - 1) setCurrentIndex(prev => prev + 1); else onFinish(answers); }} className={`h-12 md:h-14 px-8 md:px-12 ${isReviewMode ? 'bg-indigo-600' : 'bg-[#30B6AF]'} text-white rounded-xl font-black text-sm md:text-base shadow-lg transition-all`}>
                 {currentIndex < questions.length - 1 ? (isReviewMode ? 'Forward' : t.nextQuestion) : (isReviewMode ? 'Close' : t.finishSession)}
               </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
