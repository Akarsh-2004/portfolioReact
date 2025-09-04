import React from 'react';
import './Fifth.css';
import reconImage from './ReconGPT.jpg'; // Replace with your ReconGPT image

function ReconGPT() {
    return (
        <section className="project-item"> {/* Default layout: image on left */}
            {/* Left: Project Image */}
            <div className="project-image">
                <img src={reconImage} alt="ReconGPT Threat Intelligence System" />
            </div>

            {/* Right: Project Content */}
            <div className="project-content">
                <h2>ReconGPT – AI-Powered Threat Intelligence & Reconnaissance</h2>
                <p>
                    Developed a modular AI-driven OSINT automation suite capable of gathering, analyzing, and summarizing threat intelligence from multiple sources in real-time.
                </p>
                <p>
                    Implemented advanced models including a fine-tuned BERT-based NER for IOC extraction, phishing email classification, and DNS malicious domain detection.
                </p>
                <p>
                    The system integrates automated scraping, WHOIS & DNS lookups, URL analysis, and malware detection into a unified threat dashboard for proactive security.
                </p>
                <p>
                    Achieved a 50% improvement in red team efficiency by automating reconnaissance workflows, enabling faster threat modeling and actor attribution.
                </p>
                <div className="project-links">
                    <a href="https://github.com/Akarsh-2004/ReconGPT" target="_blank" rel="noopener noreferrer" className="project-button">GitHub</a>
                    {/* Add live demo link if available */}
                </div>
            </div>
        </section>
    );
}

export default ReconGPT;
