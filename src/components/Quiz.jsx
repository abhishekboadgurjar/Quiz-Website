import  { useEffect, useState } from "react";
import data from "./Data.js";
import Result from "./Result";
import Question from "./Question";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30);
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    if (timer === 0) {
      handleNext();
    }
    const timerId = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timer]);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === data[currentQuestion].answer) {
      setScore(score + 1);
    }
    setShowNextButton(true); // Show the next button after answering
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
    setShowNextButton(true); // Hide the next button after moving to the next question
    setTimer(30);
  };

  if (showResult) {
    return <Result score={score} totalQuestion={data.length} />;
  }

  return (
    <div className="quiz">
<div className="countandTime">
<div className="questionNumber">
       Question :  {currentQuestion + 1} <b>/</b> {data.length}
      </div>
      <div className="timer">Time left : {timer} seconds</div>
</div>
      <Question
        question={data[currentQuestion].question}
        options={data[currentQuestion].options}
        onAnswer={handleAnswer}
        onNext={handleNext}
        showNextButton={showNextButton}
      />
    </div>
  );
};

export default Quiz;
