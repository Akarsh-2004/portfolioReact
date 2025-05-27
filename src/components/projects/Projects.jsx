import React from 'react';
import './Projects.css'; // Assuming you will create a Projects.css for overall styling
import First from './first/First'; // Assuming individual project components are in subfolders
import Second from './second/Second';
import Third from './third/Third';
import Fourth from './fourth/Fourth';

function Projects() {
    return (
        <section id="projects" className="projects-container">
            {/* You can add a main heading for the Projects section here if desired */}
            <h2 className="projects-main-heading">My Portfolio Projects</h2>

            {/* Render individual project components */}
            <First />
            <Second />
            <Third />
            <Fourth />
            {/* Add more project components as needed, e.g., <Fifth />, <Sixth /> */}
        </section>
    );
}

export default Projects;