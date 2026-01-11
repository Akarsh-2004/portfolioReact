import React from 'react';
import './Bagragi.css';
import bagragiImage from './bagragi.jpg'; // Replace with actual image path

function BagRAGI() {
    return (
        <section className="project-item"> {/* No project-item-alt => image on left */}
            {/* Left: Project Image */}
            <div className="project-image">
                <img src={bagragiImage} alt="BagRAGI AI based travel partner" />
            </div>

            {/* Right: Project Content */}
            <div className="project-content">
                <h2>BagRAGI AI based travel partner</h2>
                <p>
                    BagRAGI has been trained on a vast dataset of travel information, including popular destinations, local attractions, cultural insights, and user reviews.
                </p>
                <p>
                    book hotels with ease, and get real-time updates on travel conditions.
                </p>
                <p>
                    The project was built using React for the frontend, Node.js and Express for the backend, and MongoDB for the database. The AI functionalities were implemented using Python and integrated via RESTful APIs.
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
