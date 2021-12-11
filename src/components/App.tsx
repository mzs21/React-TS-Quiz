import { useState } from "react";
// import QuestionCard from "./components/QuestionCard";
import { Difficulty, fetchQuizQuestions } from "../API/API";
import QuestionCard from "../components/QuestionCard";
import { AnswerObject, QuestionState } from "../Interface";

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  // console.log(questions);

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
    <button className="start" onClick={startTrivia}>
      Start
    </button>
  );

  let nextButton = (
    <button className="next" onClick={nextQuestion}>
      Next Question
    </button>
  );

  return (
    <div className="App">
      <h1>React TypeScript Quiz</h1>
      {(gameOver || userAnswersLength === TOTAL_QUESTIONS) && startButton}

      {!gameOver && <p className="score">Score: {score}</p>}
      {loading && <p>Loading Questions...</p>}

      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!gameOver &&
        !loading &&
        userAnswersLength === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 &&
        nextButton}
    </div>
  );
};

export default App;
