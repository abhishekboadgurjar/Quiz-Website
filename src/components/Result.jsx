const Result = ({ score, totalQuestion }) => {
  return (
    <div className='result'>
      <h2>Quiz Complete</h2>
      <p>Your score is {score} out of {totalQuestion}</p>
    </div>
  );
}

export default Result;
