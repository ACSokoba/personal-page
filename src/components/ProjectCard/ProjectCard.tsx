import { ProjectCardProps } from "./ProjectCardModel";
import "./ProjectCard.css";

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    technologies,
    imageUrl,
    websiteUrl,
    tasks
}) => {
    return (
        <div className="project-card">
            {websiteUrl == undefined ? (
                <img
                    src={imageUrl}
                    alt={title}
                    className="project-image"
                />
            ) : (
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="project-image"
                    />
                </a>
            )}
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <div className="project-description">
                    {description}
                </div>

                {tasks && tasks.length > 0 && (
                    <div className="tasks-container">
                        <ul className="tasks-list">
                            {tasks.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="technologies-container">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className={`technology-tag ${tech.color}`}
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
                {websiteUrl && (
                    <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="website-link"
                    >
                        Visit Website →
                    </a>
                )}
            </div>
        </div>
    );
};
