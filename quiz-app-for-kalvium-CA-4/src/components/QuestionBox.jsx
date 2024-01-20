import './QuestionBox.css';

const QuestionBox = ({ dark, highlight, setStart, questionIndex, setQuestionIndex, setScore, questions }) => {

  const handleAnswers = (i) => {
    if (questions[questionIndex]["options"][i]["isCorrect"]) setScore((prevScore) => prevScore + 1);
    if (questionIndex !== questions.length - 1) setQuestionIndex((prevIndex) => prevIndex + 1);
    else setStart(false);
  };

  return (
    <div className='quiz-holder'>
      <h4 className='qno'>Question {questionIndex + 1} of {questions.length}</h4>
      <h2 className= {`question`} ref={highlight}>{questions[questionIndex]["text"]}</h2>
      <div className="button-grid">
        {questions[questionIndex]["options"].map((option, index) => (
          <button
            className={`grid-button ${dark ? 'dark-btn' : 'light-btn'}`}
            key={index}
            onClick={() => handleAnswers(index)}
          >
            {option["text"]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;