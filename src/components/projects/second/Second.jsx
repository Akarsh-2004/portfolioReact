import React from 'react';
import './Second.css';
import projectImage2 from './threat.jpg';

function Second() {
    return (
        <section className="project-item"> {/* No project-item-alt for image on left */}
            {/* Left: Project Image */}
            <div className="project-image">
                <img src={projectImage2} alt="Pre-Threat Intelligence (PTI) Platform" />
            </div>

            {/* Right: Project Content */}
            <div className="project-content">
                <h2>Pre-Threat Intelligence (PTI) Platform</h2>
                <p>
                    Developed a comprehensive OSINT (Open-Source Intelligence) suite tailored for advanced threat modeling, reconnaissance, and exhaustive vulnerability enumeration.
                </p>
                <p>
                    The platform features automated scanning capabilities utilizing tools like Nmap, WhatWeb, and WHOIS, significantly boosting red team efficiency by 50%.
                </p>
                {/* Add more details if necessary */}
                <div className="project-links">
                    <a href="https://github.com/Akarsh-2004/Pre-threat-Intellegence-" target="_blank" rel="noopener noreferrer" className="project-button">GitHub</a>
                    <a href="https://pre-threat-intellegence-1.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-button">Live Demo</a> {/* Replace with actual live demo link */}
                </div>
            </div>
        </section>
    );
}

export default Second;