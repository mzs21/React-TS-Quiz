import { QuestionCardProps } from "../Interface";
import {
  QuestionCardStyle,
  ButtonWrapper
} from "../styles/QuestionCard.styles";

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions
}: QuestionCardProps) => {
  return (
    <QuestionCardStyle>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />

      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </QuestionCardStyle>
  );
};

export default QuestionCard;
