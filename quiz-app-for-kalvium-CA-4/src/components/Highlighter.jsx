// Highlighter.js

import React from 'react';
import './highlighter.css';

export default function Highlighter({ dark, highlight }) {
  const addHighlight = () => {
    highlight.current.style.color = dark ? 'white' : 'black';
  };

  const removeHighlight = () => {
    highlight.current.style.color = dark ? 'black' : 'white';
  };

  return (
    <div className="highlight-div">
      <button
        onClick={addHighlight}
        className={`highlights ${dark ? "dark-mode" : "light-mode"}`}
      >
        Highlight Q
      </button>
      <button
        onClick={removeHighlight}
        className={`highlights ${dark ? "dark-mode" : "light-mode"}`}
      >
        unhighlight Q 
      </button>
    </div>
  );
}