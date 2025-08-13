import React from 'react';
import './Fourth.css';
import projectImage4 from './webapp.jpg'
function Fourth() {
    return (
        <section className="project-item"> {/* No project-item-alt for image on left */}
            {/* Left: Project Image */}
            <div className="project-image">
                <img src={projectImage4} alt="Web Application Vulnerability Scanner" />
            </div>

            {/* Right: Project Content */}
            <div className="project-content">
                <h2>Web Application Vulnerability Scanner</h2>
                <p>
                    Developed an automated Python-based scanner specifically designed to identify and report OWASP Top 10 vulnerabilities in web applications.
                </p>
                <p>
                    The scanner incorporates dynamic analysis capabilities to effectively detect vulnerabilities in Single Page Applications (SPAs) and REST API endpoints.
                </p>
                {/* Add more details if necessary */}
                <div className="project-links">
                    <a href="https://github.com/Akarsh-2004/web-app-vulnerability-assesment" target="_blank" rel="noopener noreferrer" className="project-button">GitHub</a>
                </div>
            </div>
        </section>
    );
}

export default Fourth;