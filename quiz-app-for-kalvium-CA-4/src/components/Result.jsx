// Importing the styles for the Result component
import './result.css';

// Functional component for rendering quiz results
export default function Result({ setStart, dark }) {
  // Retrieve the user's score from localStorage
  const score = localStorage.getItem("score");

  // Rendering the Result component
  return (
    <div className="result-div">
      {/* Displaying the result title */}
      <p className='result-title'>Results</p>

      {/* Displaying the user's score and percentage */}
      <p className='score'>You answered {score} out of 5 questions correctly.</p>
      <p className='percent'>You got {Math.round((score / 5) * 100)} percent.</p>

      {/* Button to restart the quiz */}
      <button 
        onClick={() => setStart(true)}
        className={`restart ${dark ? "dark-mode" : "light-mode"}`}
      >
        start over
      </button>
    </div>
  );
}