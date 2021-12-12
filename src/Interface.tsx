import React from "react";

export interface QuestionCardProps {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

export interface QuestionProps {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuestionState extends QuestionProps {
  answers: string[];
}

export interface AnswerObject {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

export interface ButtonWrapperProps {
  correct: boolean;
  userClicked: boolean;
}

export interface ButtonProps {
  className: string;
  event: () => void;
  text: string;
}
