// Importing the styles for the QuestionBox component
import './QuestionBox.css';

// Functional component for rendering quiz questions
const QuestionBox = ({ dark, highlight, setStart, questionIndex, setQuestionIndex, setScore, questions }) => {

  // Function to handle user's answer selection
  const handleAnswers = (i) => {
    // Check if the selected option is correct and update the score accordingly
    if (questions[questionIndex]["options"][i]["isCorrect"]) setScore((prevScore) => prevScore + 1);

    // Move to the next question if it's not the last one, otherwise, end the quiz
    if (questionIndex !== questions.length - 1) setQuestionIndex((prevIndex) => prevIndex + 1);
    else setStart(false);
  };

  // Rendering the QuestionBox component
  return (
    <div className='quiz-holder'>
      {/* Display the current question number and total number of questions */}
      <h4 className='qno'>Question {questionIndex + 1} of {questions.length}</h4>

      {/* Display the question text with optional highlighting */}
      <h2 className={`question`} ref={highlight}>{questions[questionIndex]["text"]}</h2>

      {/* Render answer options as buttons */}
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

// Export the QuestionBox component
export default QuestionBox;
