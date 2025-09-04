import React from "react";
import './Skills.css';

// Existing skill icons (vscode, hacker, neural network)
import vscodeIcon from '../../assets/vscodelogo.jpg'; // Make sure paths are correct
import hackerIcon from '../../assets/red.jpg';
import neuralNetworkIcon from '../../assets/ml.jpg';

// Add-on skill icons (1.png to 9.png)
import skillIcon1 from '../../assets/1.png';
import skillIcon2 from '../../assets/2.png';
import skillIcon3 from '../../assets/3.png';
import skillIcon4 from '../../assets/4.png';
import skillIcon5 from '../../assets/5.jpg';
import skillIcon6 from '../../assets/6.jpg';
import skillIcon7 from '../../assets/7.jpg';
import skillIcon8 from '../../assets/8.png';
import skillIcon9 from '../../assets/9.jpg';

function Skills() {
  // Combine all skill icons into a single array
  const allSkillIcons = [
    { src: vscodeIcon, alt: "VS Code Icon" },
    { src: hackerIcon, alt: "Ethical Hacker Icon" },
    { src: neuralNetworkIcon, alt: "Neural Network Icon" },
    { src: skillIcon1, alt: "Skill Icon 1" },
    { src: skillIcon2, alt: "Skill Icon 2" },
    { src: skillIcon3, alt: "Skill Icon 3" },
    { src: skillIcon4, alt: "Skill Icon 4" },
    { src: skillIcon5, alt: "Skill Icon 5" },
    { src: skillIcon6, alt: "Skill Icon 6" },
    { src: skillIcon7, alt: "Skill Icon 7" },
    { src: skillIcon8, alt: "Skill Icon 8" },
    { src: skillIcon9, alt: "Skill Icon 9" },
  ];

  return (
    <section className="skills-section yellow-theme" section id="skills">
      {/* Left: Skills Content */}
      <div className="skills-content">
        <h2>Technical Skills</h2>

        <div className="skill-group">
          <h3>Programming Languages:</h3>
          <p>Python, C, C++, Java, JavaScript, SQL</p>
        </div>
        <div className="skill-group">
          <h3>Web Development:</h3>
          <p>React.js, Node.js, Express.js, Flask, FastAPI, Tailwind CSS</p>
        </div>
        <div className="skill-group">
          <h3>Cybersecurity:</h3>
          <p>Penetration Testing, Vulnerability Assessment, OSINT, IDS</p>
        </div>
        <div className="skill-group">
          <h3>Security Tools:</h3>
          <p>Wireshark, Nmap, Burp Suite, Metasploit, Shodan, auditd, WHOIS</p>
        </div>
        <div className="skill-group">
          <h3>Machine Learning:</h3>
          <p>TensorFlow, SVM, OpenCV, scikit-learn, Jupyter Notebook</p>
        </div>
        <div className="skill-group">
          <h3>Databases:</h3>
          <p>MySQL, MongoDB, SQLite</p>
        </div>
        <div className="skill-group">
          <h3>Operating Systems:</h3>
          <p>Linux (Ubuntu, Kali Linux), Windows</p>
        </div>
      </div>

      {/* Right: Skills Images */}
      <div className="skills-image">
        <div className="skills-icons-container">
          {allSkillIcons.map((icon, index) => (
            <img
              key={index} // It's better to use a unique ID if available, otherwise index is acceptable for static lists
              src={icon.src}
              alt={icon.alt}
              className="skill-icon"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;