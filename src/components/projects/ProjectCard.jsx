const ProjectCard = ({ project, index }) => {
    const isAlt = index % 2 !== 0;

    return (
        <section className={`project-item ${isAlt ? 'project-item-alt' : ''}`}>
            <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image grayscale-img" />
                <div className="image-overlay"></div>
                <div className="project-status-badge">
                    <span className="status-dot"></span>
                    [SYSTEM: ONLINE]
                </div>
            </div>

            <div className="project-content">
                <span className="project-index-number">{(index + 1).toString().padStart(2, '0')}</span>
                <h2>{project.title}</h2>
                <div className="project-description">
                    {project.description.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
                <div className="project-links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                            Source Code
                        </a>
                    )}
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;
