// Import necessary dependencies
import React, { useState } from 'react';
import './navbar.css'; // Import the custom CSS for the Navbar component
import masterchinedum from '../images/masterchinedum.png'; // Import the logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the hamburger icon
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import social media icons

const Navbar = () => {
  // State to manage the open/close state of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Navbar container with dynamic class 'open' when the mobile menu is open
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      {/* Brand section */}
      <div className="navbar-brand">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">
            <img src={masterchinedum} alt="masterchinedum" />
          </a>
        </div>
        {/* Mobile menu toggle button */}
        <div className="menu-toggle" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      {/* Navigation links */}
      <div className="navbar-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li className="dropdown">
            {/* Services link with a dropdown */}
            <a href="/services">Services</a>
            {/* Dropdown content */}
            <div className="dropdown-content">
              <a href="/service1">Service 1</a>
              <a href="/service2">Service 2</a>
              <a href="/service3">Service 3</a>
            </div>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Social media icons */}
      <div className="navbar-social-icons">
        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
