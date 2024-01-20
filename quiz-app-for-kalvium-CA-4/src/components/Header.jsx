import image from '../assets/logo.png';
import './Header.css';

// ... (imports)

export default function Header({ dark, updateDark }) {
  return (
    <div className="logo-div">
      <img src={image} alt="Logo" />
      <button
        className={dark ? "ui-btn dark-light dark" : "ui-btn dark-light light"}
        onClick={() => updateDark((prev) => !prev)}
      >
        {dark ? "light" : "dark"}
      </button>
    </div>
  );
}
