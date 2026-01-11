import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#hero">Akarsh.</a>
      </div>

      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>

      <ul className="navbar-social">
        <li className="social-icon-item">
          <a href="https://github.com/Akarsh-2004" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="social-icon-item">
          <a href="https://linkedin.com/in/akarshsaklani" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="social-icon-item">
          <a href="https://github.com/Akarsh-2004/portfolioReact/raw/main/public/resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume">
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;