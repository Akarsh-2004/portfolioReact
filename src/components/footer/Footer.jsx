import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
        
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Me</h3>
          <p>
            Passionate developer creating clean and modern web experiences.
            Always learning and building cool stuff!
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-section social">
          <h3>Connect with me</h3>
          <div className="social-icons">
            <a
              href="https://github.com/Akarsh-2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/akarsh-saklani-466971285/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/AkarshSaklani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a href="mailto:Akarshsaklani222@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: Akarshsaklani222@gmail.com</p>
          <p>Alt Email : AkarshSaklanics@gmail.com</p>
          <p>Phone: +91 9805646641</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Akarsh Saklani. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
