
import { 
  StudyMode, StudyStatus, StudySet, StudySetQuestion, 
  Question, QuestionType, Domain, Attempt, AttemptAnswer,
  DomainPerformance, TypePerformance 
} from './types.ts';
import { QUESTIONS as ALL_QUESTIONS, DOMAINS } from './data/index.ts';

const shuffle = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Seeded selection to ensure "Model 1" is always the same "Model 1"
export const createStudySet = (mode: StudyMode, domainId?: number, modelIndex: number = 0): { studySet: StudySet, questions: StudySetQuestion[] } => {
  const id = Math.random().toString(36).substr(2, 9);
  let selectedQuestions: Question[] = [];

  switch (mode) {
    case StudyMode.MOCK_EXAM: {
      DOMAINS.forEach(domain => {
        const domainPool = ALL_QUESTIONS.filter(q => q.domain_id === domain.id);
        const sortedPool = [...domainPool].sort((a, b) => a.id.localeCompare(b.id));
        
        const limit = domain.question_limit;
        const overlapCount = Math.floor(limit * 0.2); 
        const startIdx = Math.max(0, modelIndex * (limit - overlapCount));
        
        let selected = sortedPool.slice(startIdx, startIdx + limit);
        if (selected.length < limit) {
          const remaining = limit - selected.length;
          selected.push(...sortedPool.slice(0, Math.min(remaining, sortedPool.length)));
        }
        
        selectedQuestions.push(...selected);
      });
      // We shuffle the final 60 to randomize order but content is stable per modelIndex
      selectedQuestions = shuffle(selectedQuestions);
      break;
    }

    case StudyMode.ALL_QUESTIONS_ROUNDS: {
      selectedQuestions = shuffle([...ALL_QUESTIONS]);
      break;
    }

    case StudyMode.PRACTICE_BY_DOMAIN: {
      if (domainId === undefined) throw new Error("Domain required for this mode");
      selectedQuestions = shuffle(ALL_QUESTIONS.filter(q => q.domain_id === domainId));
      break;
    }

    default:
      selectedQuestions = shuffle([...ALL_QUESTIONS]);
  }

  const studySet: StudySet = {
    id,
    mode,
    domain_id: domainId,
    total_questions: selectedQuestions.length,
    round_size: mode === StudyMode.ALL_QUESTIONS_ROUNDS ? 10 : undefined,
    status: StudyStatus.IN_PROGRESS,
    started_at: Date.now(),
    last_updated: Date.now()
  };

  const questions: StudySetQuestion[] = selectedQuestions.map((q, idx) => ({
    study_set_id: id,
    question_id: q.id,
    order_index: idx,
    round_index: Math.floor(idx / 10)
  }));

  return { studySet, questions };
};

export const calculateResults = (
  studySet: StudySet, 
  questions: StudySetQuestion[], 
  answers: AttemptAnswer[]
): { attempt: Attempt, domainBreakdown: DomainPerformance[], typeBreakdown: TypePerformance[] } => {
  const correctCount = answers.filter(a => a.is_correct).length;
  const score = studySet.total_questions > 0 ? (correctCount / studySet.total_questions) * 100 : 0;
  
  const attempt: Attempt = {
    id: Math.random().toString(36).substr(2, 9),
    study_set_id: studySet.id,
    score,
    accuracy: score,
    started_at: studySet.started_at,
    finished_at: Date.now()
  };

  const domainBreakdown: DomainPerformance[] = DOMAINS.map(d => {
    const domainQuestionIds = questions
      .filter(sq => {
        const q = ALL_QUESTIONS.find(mq => mq.id === sq.question_id);
        return q?.domain_id === d.id;
      })
      .map(sq => sq.question_id);
    
    const domainAnswers = answers.filter(a => domainQuestionIds.includes(a.question_id));
    return {
      domain_id: d.id,
      domain_name: d.name,
      correct: domainAnswers.filter(a => a.is_correct).length,
      total: domainQuestionIds.length
    };
  }).filter(b => b.total > 0);

  const types = [QuestionType.MCQ, QuestionType.MULTI_SELECT, QuestionType.SCENARIO];
  const typeBreakdown: TypePerformance[] = types.map(t => {
    const typeQuestionIds = questions
      .filter(sq => {
        const q = ALL_QUESTIONS.find(mq => mq.id === sq.question_id);
        return q?.type === t;
      })
      .map(sq => sq.question_id);
    
    const typeAnswers = answers.filter(a => typeQuestionIds.includes(a.question_id));
    return {
      type: t,
      correct: typeAnswers.filter(a => a.is_correct).length,
      total: typeQuestionIds.length
    };
  }).filter(b => b.total > 0);

  return { attempt, domainBreakdown, typeBreakdown };
};
