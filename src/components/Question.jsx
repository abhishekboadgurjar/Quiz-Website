const Question = ({ question, options, onAnswer, onNext, showNextButton }) => {
  return (
    <div className="question">
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button className="option" key={index} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
      {showNextButton && <button className="next" onClick={onNext}>Next </button>}
    </div>
  );
};

export default Question;
