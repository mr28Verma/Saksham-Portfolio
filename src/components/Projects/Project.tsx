import React, { useState } from "react";
import "./Project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
    id: string;
    number: string;
    name: string;
    tagline: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    demoUrl: string;
}

const projectsData: Project[] = [
    {
        id: "assignment-approval",
        number: "01",
        name: "University Assignment Approval System",
        tagline: "Full-stack academic workflow management platform",
        description:
            "A role-based web application designed to streamline assignment submissions, approvals, and departmental tracking for students, professors, and administrators.",
        technologies: [
            "EJS",
            "Node.js",
            "Express",
            "MongoDB",
        ],
        imageUrl:
            "https://plain-apac-prod-public.komododecks.com/202608/25/9pTZvO26izh1FNje7biQ/image.png",
        githubUrl:
            "https://github.com/mr28Verma/Assignment-Approval-System",
        demoUrl:
            "https://university-assignment-approval-system-pdoh.onrender.com/",
    },

    {
        id: "my-cinema",
        number: "02",
        name: "myCinema",
        tagline: "Movie ticket browsing & booking portal",
        description:
            "A movie platform interface featuring interactive movie sliders, showtime displays, and modern booking workflows.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
        ],
        imageUrl:
            "https://plain-apac-prod-public.komododecks.com/202608/25/AYVctEjANScgfHO00zrz/image.jpg",
        githubUrl:
            "https://github.com/mr28Verma/myCinema",
        demoUrl:
            "https://my-cinema-zeta.vercel.app/",
    },

    {
        id: "plant-disease",
        number: "03",
        name: "Plant Disease Detection",
        tagline: "Machine learning vision tool",
        description:
            "An intelligent image analysis tool designed to identify leaf diseases in agricultural crops to assist in early detection and crop protection.",
        technologies: [
            "Python",
            "Machine Learning",
            "OpenCV",
        ],
        imageUrl:
            "https://plain-apac-prod-public.komododecks.com/202608/25/ucCmGt2EEVKkiF0W9oJj/image.png",
        githubUrl:
            "https://github.com/5aurav/Plant-Disease-Diagnosis",
        demoUrl: "#",
    },

    {
        id: "todo-list",
        number: "04",
        name: "Todo List",
        tagline: "Minimalist productivity tool",
        description:
            "A clean task management utility built to keep track of daily goals, priority levels, and completion status with real-time UI updates.",
        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
        ],
        imageUrl:
            "https://plain-apac-prod-public.komododecks.com/202608/25/CiyZv2CzoFckdv8Y4kKS/image.png",
        githubUrl:
            "https://github.com/mr28Verma/Todo-List",
        demoUrl:
            "https://todo-list-hg4x.onrender.com",
    },
];

export default function Projects() {

    const [activeProject, setActiveProject] =
        useState<Project>(projectsData[0]);

    return (
        <section
            className="projects-section"
            id="projects"
        >

            <div className="projects-container">

                <div className="projects-header">

                    <span className="projects-subtitle">
                        Things I've built & explored
                    </span>

                    <h2 className="projects-title">
                        Projects
                    </h2>

                </div>

                <div className="showcase-card">

                    <div
                        key={activeProject.id}
                        className="showcase-content"
                    >

                        <div className="showcase-image-wrapper">

                            <img
                                src={activeProject.imageUrl}
                                alt={activeProject.name}
                                className="showcase-image"
                            />

                        </div>

                        <div className="showcase-details">

                            <div className="project-badge">
                                {activeProject.number}
                            </div>

                            <h3 className="project-title">
                                {activeProject.name}
                            </h3>

                            <p className="project-tagline">
                                {activeProject.tagline}
                            </p>

                            <p className="project-description">
                                {activeProject.description}
                            </p>

                            <div className="tech-stack">

                                {activeProject.technologies.map(
                                    (tech, index) => (
                                        <span
                                            key={index}
                                            className="tech-badge"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}

                            </div>

                            <div className="project-links">

                                <a
                                    href={activeProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-btn"
                                >
                                    <span className="btn-icon">
                                        <FaGithub />
                                    </span>

                                    <span>
                                        GitHub
                                    </span>
                                </a>

                                <a
                                    href={activeProject.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-btn primary"
                                >
                                    <span className="btn-icon">
                                        <FaExternalLinkAlt />
                                    </span>

                                    <span>
                                        Live Demo
                                    </span>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <nav
                    className="project-selector"
                    aria-label="Project Navigation"
                >

                    {projectsData.map((project) => {

                        const isActive =
                            project.id === activeProject.id;

                        return (
                            <button
                                key={project.id}
                                className={`selector-item ${
                                    isActive ? "active" : ""
                                }`}
                                onClick={() =>
                                    setActiveProject(project)
                                }
                                type="button"
                                aria-selected={isActive}
                            >

                                <span className="selector-number">
                                    {project.number}
                                </span>

                                <span className="selector-name">
                                    {project.name}
                                </span>

                            </button>
                        );

                    })}

                </nav>

            </div>

        </section>
    );
}