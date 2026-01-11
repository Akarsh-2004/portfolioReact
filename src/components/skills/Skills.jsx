import React from "react";
import './Skills.css';

// Existing skill icons
import vscodeIcon from '../../assets/vscodelogo.jpg';
import hackerIcon from '../../assets/red.jpg';
import neuralNetworkIcon from '../../assets/ml.jpg';

// Add-on skill icons
import skillIcon1 from '../../assets/1.png';
import skillIcon2 from '../../assets/2.png';
import skillIcon3 from '../../assets/3.png';
import skillIcon4 from '../../assets/4.png';
import skillIcon5 from '../../assets/5.jpg';
import skillIcon6 from '../../assets/6.jpg';
import skillIcon7 from '../../assets/7.jpg';
import skillIcon8 from '../../assets/8.png';
import skillIcon9 from '../../assets/9.jpg';

// New skill icons
import awsIcon from '../../assets/aws.png';
import databricksIcon from '../../assets/databricks.png';
import dockerIcon from '../../assets/docker.png';
import postmanIcon from '../../assets/postman.png';
import streamlitIcon from '../../assets/streamlit.png';

const skillGroups = [
  { title: "Programming", skills: "Python, C, C++, Java, JavaScript, SQL" },
  { title: "Web Development", skills: "React.js, Node.js, Express.js, Flask, FastAPI, Tailwind CSS, Streamlit" },
  { title: "Cloud & DevOps", skills: "AWS, Docker" },
  { title: "Cybersecurity", skills: "Penetration Testing, Vulnerability Assessment, OSINT, IDS" },
  { title: "Security Tools", skills: "Wireshark, Nmap, Burp Suite, Metasploit, Shodan, WHOIS" },
  { title: "Machine Learning & AI", skills: "TensorFlow, OpenCV, scikit-learn, Jupyter, Databricks" },
  { title: "Databases", skills: "MySQL, MongoDB, SQLite" },
  { title: "Operating Systems", skills: "Linux (Ubuntu, Kali Linux), Windows" },
];

const allSkillIcons = [
  { src: vscodeIcon, alt: "VS Code" },
  { src: hackerIcon, alt: "Hacker" },
  { src: neuralNetworkIcon, alt: "AI/ML" },
  { src: skillIcon1, alt: "Skill 1" },
  { src: skillIcon2, alt: "Skill 2" },
  { src: skillIcon3, alt: "Skill 3" },
  { src: skillIcon4, alt: "Skill 4" },
  { src: skillIcon5, alt: "Skill 5" },
  { src: skillIcon6, alt: "Skill 6" },
  { src: skillIcon7, alt: "Skill 7" },
  { src: skillIcon8, alt: "Skill 8" },
  { src: skillIcon9, alt: "Skill 9" },
  { src: awsIcon, alt: "AWS" },
  { src: databricksIcon, alt: "Databricks" },
  { src: dockerIcon, alt: "Docker" },
  { src: postmanIcon, alt: "Postman" },
  { src: streamlitIcon, alt: "Streamlit" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <p>{group.skills}</p>
          </div>
        ))}
      </div>

      <div className="skills-icons-grid">
        {allSkillIcons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="skill-icon"
            title={icon.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;