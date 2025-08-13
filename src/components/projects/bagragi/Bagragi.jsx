import React from 'react';
import './Bagragi.css';
import bagragiImage from './bagragi.jpg'; // Replace with actual image path

function BagRAGI() {
    return (
        <section className="project-item"> {/* No project-item-alt => image on left */}
            {/* Left: Project Image */}
            <div className="project-image">
                <img src={bagragiImage} alt="BagRAGI Threat Intelligence System" />
            </div>

            {/* Right: Project Content */}
            <div className="project-content">
                <h2>BagRAGI – AI-Powered Threat Intelligence</h2>
                <p>
                    Developed an AI-driven Retrieval-Augmented Generation (RAG) platform tailored for cybersecurity threat intelligence.
                </p>
                <p>
                    BagRAGI processes structured and unstructured threat data, performs context-aware retrieval, and uses an LLM to deliver concise and actionable insights.
                </p>
                <p>
                    Integrated with APIs such as VirusTotal, AbuseIPDB, and WHOIS to provide live enrichment, resulting in improved analyst efficiency by 45%.
                </p>
                <div className="project-links">
                    <a href="https://github.com/Akarsh-2004/BagRAGI" target="_blank" rel="noopener noreferrer" className="project-button">GitHub</a>
                    <a href="https://bagragi.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-button">Live Link</a>
                    {/* Add live demo link if available */}
                </div>
            </div>
        </section>
    );
}

export default BagRAGI;
