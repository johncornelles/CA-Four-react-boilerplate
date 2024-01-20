import './result.css';

export default function Result({ setStart, dark }) {
  const score = localStorage.getItem("score");

  return (
    <div className="result-div">
      <p className='result-title'>Results</p>
      <p className='score'>You answered {score} out of 5 questions correctly.</p>
      <p className='percent'>You got {Math.round((score / 5) * 100)} percent.</p>
      <button 
        onClick={() => setStart(true)}
        className={`restart ${dark ? "dark-mode" : "light-mode"}`}
      >
        start over
      </button>
    </div>
  );
}