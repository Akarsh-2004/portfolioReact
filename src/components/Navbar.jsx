import React from 'react';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // For LeetCode placeholder

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#hero">Welcome!</a>
      </div>
      <ul className="navbar-links">

        {/* Social Icons */}
        <li className="social-icon-item">
          <a href="https://github.com/Akarsh-2004" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </li>
        <li className="social-icon-item">
          <a href="https://www.linkedin.com/in/akarsh-saklani-466971285/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </li>
        <li className="social-icon-item">
          <a href="https://leetcode.com/akarsh_saklani" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faCode} size="lg" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;