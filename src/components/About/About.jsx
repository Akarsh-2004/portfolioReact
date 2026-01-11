import React from "react";
import "./About.css";
import image1 from "../../assets/image1.jpg";

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h1>About Me</h1>

                <p>
                    I’m <strong>Akarsh Saklani</strong>, a Computer Science undergraduate
                    focused on building scalable software systems at the intersection of
                    backend engineering, cybersecurity, and applied AI.
                </p>

                <p>
                    My work spans from designing production-grade backend services and
                    developer tools to building intelligent security systems such as
                    AI-driven Intrusion Detection Systems, secure compilers, and automated
                    OSINT and threat-intelligence pipelines.
                </p>

                <p>
                    I enjoy working close to the system layer — understanding how things
                    work under the hood — while still delivering polished, modular
                    frontend experiences. I’ve solved <strong>800+</strong> algorithmic
                    problems, strengthening my foundations in data structures, system
                    design, and performance-oriented thinking.
                </p>

                <p>
                    My long-term goal is to engineer reliable, secure, and intelligent
                    products that can operate at real-world scale.
                </p>

                <div className="contact-info">
                    <div>
                        <strong>Phone</strong>
                        <p>+91&nbsp;98056&nbsp;46641</p>
                    </div>
                    <div>
                        <strong>Email</strong>
                        <p>Akarshsaklani222@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="about-image">
                <img src={image1} alt="Akarsh Saklani" />
            </div>
        </section>
    );
}

export default About;
