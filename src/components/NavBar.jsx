import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <p className="logo">FemiBlaq</p>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`navbar-links ${isMenuOpen ? 'show-menu' : ''}`}>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;