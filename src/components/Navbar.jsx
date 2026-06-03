import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled, onNavigate }) => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const toggleLocation = (e) => {
    e.preventDefault();
    setIsLocationOpen(!isLocationOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
<div className="navbar-logo">
  <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }}>
    <img src={scrolled ? "/public/WECLOGO.png" : "/public/WECLOGO2.png"} alt="WECLOGO" className="navbar-logo-img" />
  </a>
</div>
<ul className="navbar-links">
  <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('/', '#about'); }}>About</a></li>
  <li><a href="#news" onClick={(e) => { e.preventDefault(); onNavigate('/', '#news'); }}>News</a></li>
        <li className="dropdown-container">
          <a href="#location" className="dropdown-trigger" onClick={toggleLocation}>
            Location <span className={`dropdown-arrow ${isLocationOpen ? 'open' : ''}`}>▼</span>
          </a>
          <ul className={`dropdown-menu ${isLocationOpen ? 'show' : ''}`}>
            <li><a href="#surabaya">Surabaya</a></li>
            <li><a href="#malang">Malang</a></li>
            <li><a href="#mataram">Mataram</a></li>
          </ul>
        </li>
        <li><a href="#event">Event</a></li>
        <li><a href="#project-showcase">Project Showcase</a></li>
      </ul>
      <div className="navbar-right-section">
        <ul className="navbar-contact-links">
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <span className="navbar-separator">|</span>
        <a href="https://www.idnft.id/" target="_blank" rel="noopener noreferrer" className="navbar-idnft-link">
          <img src="/logo-idnft.png" alt="IDNFT" className="navbar-idnft-img" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
