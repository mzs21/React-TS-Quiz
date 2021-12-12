import { useState } from "react";
import { Difficulty, fetchQuizQuestions } from "../API/API";
import QuestionCard from "../components/QuestionCard";
import { AnswerObject, QuestionState } from "../Interface";
import GlobalStyle from "../styles/App.styles";
import {
  Wrapper,
  H1,
  P,
  StartButton,
  NextButton
} from "../styles/Wrapper.styles";
import Button from "./Button";

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setScore(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value; // User answer

      // check answer
      const correctAnswer = questions[number].correct_answer === answer;

      // Increment score
      if (correctAnswer) setScore((prev) => prev + 1);

      // Save correct answer
      const answerObject = {
        question: questions[number].question,
        answer,
        correct: true,
        correctAnswer: questions[number].correct_answer
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    let nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  let userAnswersLength = userAnswers.length;

  let startButton = (
    <Button className="start" event={startTrivia} text="Start" />
  );

  let nextButton = (
    <Button className="next" event={nextQuestion} text="Next Question" />
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <H1>General Knowledge Quiz</H1>
        {(gameOver || userAnswersLength === TOTAL_QUESTIONS) && startButton}

        {!gameOver && <P className="score">Score: {score}</P>}
        {loading && <P className="loading">Loading Questions...</P>}

        {/* {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )} */}

        {!gameOver &&
          !loading &&
          userAnswersLength === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 &&
          nextButton}
      </Wrapper>
    </>
  );
};

export default App;
