import React from 'react';
import './Third.css';
import projectImage3 from './smartcompiler.jpg'

function Third() {
    return (
        <section className="project-item project-item-alt"> {/* project-item-alt for image on right */}
            {/* Left: Project Content */}
            <div className="project-content">
                <h2>Secure Smart Compiler with Vulnerability Detection</h2>
                <p>
                    Constructed a context-aware compiler using powerful tools like Flex, Bison, and C, designed to proactively detect common security flaws during the compilation process.
                </p>
                <p>
                    Implemented sophisticated symbol table and control flow analysis mechanisms to automatically flag unsafe memory accesses and potential logic errors, thereby enhancing code security.
                </p>
                {/* Add more details if necessary */}
                <div className="project-links">
                    <a href="https://github.com/Akarsh-2004/smart-compiler" target="_blank" rel="noopener noreferrer" className="project-button">GitHub</a>
                </div>
            </div>

            {/* Right: Project Image */}
            <div className="project-image">
                <img src={projectImage3} alt="Secure Smart Compiler" />
            </div>
        </section>
    );
}

export default Third;