import React from 'react';
import './First.css';
import projectImage1 from './IDs.jpg';

function First() {
    return (
        <section className="project-item project-item-alt"> {/* project-item-alt for image on right */}
            {/* Left: Project Content */}
            <div className="project-content">
                <h2>Intrusion Detection System (IDS) for OS Security</h2>
                <p>
                    Engineered a real-time Intrusion Detection System (IDS) using Auditd and Linux syscalls, which significantly reduced false positives by 37%.
                </p>
                <p>
                    The project included building a robust backend with FastAPI to power threat dashboards, offering clear insights into system security.
                </p>
                <p>
                    Machine learning models were trained on auditd logs, achieving 92% accuracy in detecting anomalous syscall behavior, enhancing overall OS security.
                </p>
                <div className="project-links">
                    <a href="https://github.com/Akarsh-2004/AI-IDS" target="_blank" rel="noopener noreferrer" className="project-button">GitHub</a>
                    {/* Add live demo link if available */}
                </div>
            </div>

            {/* Right: Project Image */}
            <div className="project-image">
                <img src={projectImage1} alt="Intrusion Detection System (IDS)" />
            </div>
        </section>
    );
}

export default First;