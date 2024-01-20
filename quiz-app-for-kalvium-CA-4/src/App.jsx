import { useEffect, useRef, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Header from "./components/Header";
import Highlighter from "./components/Highlighter";
function App() {
  const [dark, updateDark] = useState(true)
  const highlight = useRef(null)
  const [start, setStart] = useState(true);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  
  useEffect(() => {
      if(start) highlight.current.style.color = dark ? 'black' : 'white'
  }, [dark])

  useEffect(() => {
    localStorage.setItem("score", score)
    return () => {
      setScore(0);
      setQuestionIndex(0);
    }
  }, [start]);
  return (
    <div className={`wrapper ${dark ? 'dark-mode' : 'light-mode'}`}>
      <Header dark={dark} updateDark={updateDark} />
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
      {
        start && <Highlighter dark={dark} highlight={highlight}/>
      }
    </div>
  );
}

export default App;