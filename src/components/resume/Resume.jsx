import React from "react";
import "./Resume.css"

function Resume() {
  return (
    <section id="resume" className="resume-download">
      <a
        href="https://github.com/Akarsh-2004/portfolioReact/raw/main/public/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="download-button"
      >
        📄 Download Resume
      </a>
    </section>
  );
}

export default Resume;