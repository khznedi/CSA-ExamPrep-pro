
import { Domain, Question } from '../types';
import { DOMAIN1_QUESTIONS } from './domain1';
import { DOMAIN2_QUESTIONS } from './domain2';
import { DOMAIN3_QUESTIONS } from './domain3';
import { DOMAIN4_QUESTIONS } from './domain4';
import { DOMAIN5_QUESTIONS } from './domain5';
import { FLASHCARDS } from './flashcards';

export const DOMAINS: Domain[] = [
  { id: 1, name: "Platform User Interface, Navigation, and Configuration", exam_weight: 20, question_limit: 12 },
  { id: 2, name: "Collaboration", exam_weight: 20, question_limit: 12 },
  { id: 3, name: "Database Administration", exam_weight: 30, question_limit: 18 },
  { id: 4, name: "Service Automation", exam_weight: 20, question_limit: 12 },
  { id: 5, name: "Application Development", exam_weight: 10, question_limit: 6 }
];

export const QUESTIONS: Question[] = [
  ...DOMAIN1_QUESTIONS,
  ...DOMAIN2_QUESTIONS,
  ...DOMAIN3_QUESTIONS,
  ...DOMAIN4_QUESTIONS,
  ...DOMAIN5_QUESTIONS
];

export { FLASHCARDS };
