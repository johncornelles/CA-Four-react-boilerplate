import { useEffect, useRef, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Header from "./components/Header";
import Highlighter from "./components/Highlighter";

// Main App component
function App() {
  // State to manage dark mode
  const [dark, updateDark] = useState(true);

  // Ref to highlight text
  const highlight = useRef(null);

  // State to manage quiz start
  const [start, setStart] = useState(true);

  // State to track the user's score
  const [score, setScore] = useState(0);

  // State to track the current question index
  const [questionIndex, setQuestionIndex] = useState(0);

  // Effect to update text color when dark mode changes
  useEffect(() => {
    if (start) highlight.current.style.color = dark ? 'black' : 'white';
  }, [dark]);

  // Effect to store score in localStorage and reset state when the quiz starts
  useEffect(() => {
    localStorage.setItem("score", score);
    return () => {
      setScore(0);
      setQuestionIndex(0);
    };
  }, [start]);

  // Render the App component
  return (
    <div className={`wrapper ${dark ? 'dark-mode' : 'light-mode'}`}>
      {/* Header component */}
      <Header dark={dark} updateDark={updateDark} />

      {/* Conditional rendering of QuestionBox or Result component based on quiz state */}
      {start ? (
        <QuestionBox
          highlight={highlight}
          setScore={setScore}
          questions={questions}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          setStart={setStart}
          dark={dark}
        />
      ) : (
        <Result 
          setStart={setStart}
          dark={dark}
        />
      )}

      {/* Conditional rendering of Highlighter component when quiz is in progress */}
      {start && <Highlighter dark={dark} highlight={highlight}/>}
    </div>
  );
}

// Export the App component
export default App;