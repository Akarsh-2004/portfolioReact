import React from "react";
import './About.css';
import image1 from '../../assets/image1.jpg'; // Correct path assuming About.jsx is in src/components and image is in src/assets

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h1>About Me</h1>
                <p>Hello! I'm Akarsh Saklani, a passionate and driven computer science enthusiast with a keen interest in cybersecurity, software development, and machine learning. I'm currently pursuing a Bachelor of Technology in Computer Science and Engineering at Graphic Era Hill University (2022-2026) in Dehradun, Uttarakhand.</p>
                <p>My journey in technology is marked by a commitment to solving complex problems and building innovative solutions. I have a strong foundation in programming languages such as Python, C, C++, Java, and JavaScript, along with expertise in SQL.</p>
                <p>I thrive on creating impactful projects, from engineering an AI-enhanced Intrusion Detection System (IDS) that reduced false positives by 37% and improved kernel-level anomaly detection, to developing a Secure Smart Compiler with vulnerability detection capabilities using Flex, Bison, and C, and building automated Web Application Vulnerability Scanners for OWASP Top 10 vulnerabilities. My experience also includes designing a proactive OSINT automation suite for threat modeling, which increased red team efficiency by 50%.</p>
                <p>I am always eager to learn and contribute to cutting-edge technologies. My goal is to leverage my skills to create secure, efficient, and intelligent systems. I have also solved 600+ algorithmic problems on LeetCode, demonstrating strong data structures and system design expertise.</p>
                <div className="contact-info">
                    <p><strong>Phone:</strong> +91-9805646641</p>
                    <p><strong>Email:</strong> Akarshsaklani222@gmail.com</p>
                    <p><strong>LinkedIn:</strong> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/Akarsh-2004" target="_blank" rel="noopener noreferrer">github.com/Akarsh-2004</a></p>
                </div>
            </div>

            <div className="about-image">
                <img src={image1} alt="Akarsh Saklani" />
            </div>
        </section>
    );
}

export default About;