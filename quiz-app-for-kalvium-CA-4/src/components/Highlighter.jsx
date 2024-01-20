// Importing styles for the Highlighter component
import './highlighter.css';

// Functional component for managing question highlighting
export default function Highlighter({ dark, highlight }) {

  // Function to add highlight to the question text
  const addHighlight = () => {
    highlight.current.style.color = dark ? 'white' : 'black';
  };

  // Function to remove highlight from the question text
  const removeHighlight = () => {
    highlight.current.style.color = dark ? 'black' : 'white';
  };

  // Rendering the Highlighter component
  return (
    <div className="highlight-div">
      {/* Button to add highlight */}
      <button
        onClick={addHighlight}
        className={`highlights ${dark ? "dark-mode" : "light-mode"}`}
      >
        Highlight Q
      </button>

      {/* Button to remove highlight */}
      <button
        onClick={removeHighlight}
        className={`highlights ${dark ? "dark-mode" : "light-mode"}`}
      >
        Unhighlight Q
      </button>
    </div>
  );
}