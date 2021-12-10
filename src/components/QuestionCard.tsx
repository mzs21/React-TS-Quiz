import { QuestionCardProps } from "../Interface";

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) => {
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>

    <p dangerouslySetInnerHTML={{ __html: question }} />

    <div>
      {answers.map((answer) => (
        <div>
          <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: answer}} />
          </button>
        </div>
      ))}
    </div>
  </div>;
};

export default QuestionCard;
