import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>Akarsh Saklani</h3>
          <p>
            Ethical Hacker & Developer creating secure, intelligent, and modern digital experiences.
          </p>
        </div>

        <div className="footer-section social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/Akarsh-2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/akarshsaklani" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://x.com/AkarshSaklani" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="mailto:Akarshsaklani222@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Akarshsaklani222@gmail.com</p>
          <p>+91 9805646641</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Akarsh Saklani. Built with passion & precision.</p>
      </div>
    </footer>
  );
};

export default Footer;
