import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/data";
import "../styles/Quiz.css";
import { Course, Quiz } from "../data/types";

function QuizPage() {

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const { id, index } = useParams();
  const navigate = useNavigate();
  const course: Course | undefined = courses.find((c) => c.id === id);

  if (!course) return <div>Course not found</div>;

  if (!index) return <div>Module Index not found</div>;

  const moduleIndex = parseInt(index, 10);
  if (isNaN(moduleIndex)) return <div>Invalid module index</div>;

  const module = course.modules[moduleIndex];
  if (!module || !module.quizzes) return <div>Quiz not found</div>;

  const question: Quiz = module.quizzes[currentQuestion];

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = () => {
    if (question.options) {
      setIsCorrect(userAnswer === question.answer);
    } else {
      setIsCorrect(userAnswer.toLowerCase() === question.answer.toLowerCase());
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < module.quizzes.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setIsCorrect(null);
    } else {
      navigate(`/task/${id}/${index}`); // Go to task page
    }
  };

  return (
    <div className="quiz-page">
      <h2>{question.question}</h2>

      {question.options ? (
        <div className="options">
          {question.options.map((option, i) => (
            <label key={i}>
              <input
                type="radio"
                value={option}
                checked={userAnswer === option}
                onChange={handleAnswerChange}
              />
              {option}
            </label>
          ))}
        </div>
      ) : (
        <input
          type="text"
          value={userAnswer}
          onChange={handleAnswerChange}
          placeholder="Your answer..."
        />
      )}

      <button onClick={checkAnswer}>Check Answer</button>

      {isCorrect !== null && (
        <div className={isCorrect ? "correct" : "incorrect"}>
          {isCorrect
            ? "Congratulations!"
            : `Incorrect. Correct answer: ${question.answer}`}
        </div>
      )}

      {isCorrect !== null && (
        <button onClick={handleNextQuestion}>
          {currentQuestion < module.quizzes.length - 1
            ? "Next Question"
            : "Next Page"}
        </button>
      )}
    </div>
  );
}

export default QuizPage;
