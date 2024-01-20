// Importing the logo image and Header component styles
import image from '../assets/logo.png';
import './Header.css';

// Functional component for rendering the header with logo and dark mode toggle button
export default function Header({ dark, updateDark }) {
  // Rendering the Header component
  return (
    <div className="logo-div">
      {/* Displaying the logo image */}
      <img src={image} alt="Logo" />

      {/* Dark mode toggle button */}
      <button
        className={dark ? "ui-btn dark-light dark" : "ui-btn dark-light light"}
        onClick={() => updateDark((prev) => !prev)}
      >
        {/* Displaying the current mode: dark or light */}
        {dark ? "light" : "dark"}
      </button>
    </div>
  );
}