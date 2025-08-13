import React from 'react';
import './Projects.css'; // Assuming you will create a Projects.css for overall styling
import First from './first/First.jsx'; // Assuming individual project components are in subfolders
import Second from './second/Second.jsx';
import Third from './third/Third.jsx';
import Fourth from './fourth/Fourth.jsx';
import Fifth from './fifth/Fifth.jsx';
import Bagragi from "./bagragi/Bagragi.jsx" // Uncomment if you have a Fifth component
function Projects() {
    return (
        <section id="projects" className="projects-container">
            {/* You can add a main heading for the Projects section here if desired */}
            <h2 className="projects-main-heading">My Portfolio Projects</h2>

            {/* Render individual project components */}
            <Fifth/>
            <Bagragi/>
            <First />
            <Second />
            <Third />
            <Fourth />
            {/* Add more project components as needed, e.g., <Fifth />, <Sixth /> */}
        </section>
    );
}

export default Projects;