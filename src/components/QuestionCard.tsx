import { QuestionCardProps } from "../Interface";
import { QuestionCardStyle } from "../styles/QuestionCard.styles";
// import Wrapper from "../styles/Wrapper.styles";
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
      <div>
        <p className="number">
          Question: {questionNumber} / {totalQuestions}
        </p>

        <p dangerouslySetInnerHTML={{ __html: question }} />

        <div>
          {answers.map((answer) => (
            <div
              key={answer}
              // correct={userAnswer?.correctAnswer === answer}
              // userClicked={userAnswer?.answer === answer}
            >
              <button disabled={!!userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </QuestionCardStyle>
  );
};

export default QuestionCard;
