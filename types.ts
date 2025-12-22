
export enum QuestionType {
  MCQ = 'MCQ',
  MULTI_SELECT = 'MULTI_SELECT',
  SCENARIO = 'SCENARIO'
}

export enum StudyMode {
  MOCK_EXAM = 'MOCK_EXAM',
  ALL_QUESTIONS_ROUNDS = 'ALL_QUESTIONS_ROUNDS',
  PRACTICE_BY_DOMAIN = 'PRACTICE_BY_DOMAIN',
  DIRECT_ANSWERS = 'DIRECT_ANSWERS' // نظام البطاقات التعليمية
}

export enum StudyStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  PAUSED = 'PAUSED'
}

export interface Domain {
  id: number;
  name: string;
  exam_weight: number;
  question_limit: number;
}

export interface Choice {
  id: string;
  text: string;
  is_correct: boolean;
}

export interface Question {
  id: string;
  domain_id: number;
  type: QuestionType;
  text?: string;
  question_text?: string;
  explanation: string;
  is_active: boolean;
  choices: Choice[];
  scenario_text?: string;
}

// واجهة البطاقات التعليمية المنفصلة (سؤال وجواب فقط)
export interface Flashcard {
  id: string;
  domain_id: number;
  front: string; // السؤال المباشر
  back: string;  // الإجابة المباشرة
}

export interface StudySet {
  id: string;
  mode: StudyMode;
  domain_id?: number;
  total_questions: number;
  round_size?: number;
  status: StudyStatus;
  started_at: number;
  last_updated: number;
}

export interface StudySetQuestion {
  study_set_id: string;
  question_id: string;
  order_index: number;
  round_index: number;
}

export interface AttemptAnswer {
  attempt_id: string;
  question_id: string;
  selected_choice_ids: string[];
  is_correct: boolean;
}

export interface Attempt {
  id: string;
  study_set_id: string;
  score: number;
  accuracy: number;
  started_at: number;
  finished_at: number;
}

export interface DomainPerformance {
  domain_id: number;
  domain_name: string;
  correct: number;
  total: number;
}

export interface TypePerformance {
  type: QuestionType;
  correct: number;
  total: number;
}
