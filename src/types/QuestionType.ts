export interface QuestionType {
  questionContent: string;
  choices: string[];
  answer: number | null;
  correctAnswer: number;
  because: string;
  source: string;
}
