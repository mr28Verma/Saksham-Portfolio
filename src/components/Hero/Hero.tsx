import { useState, useEffect } from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
    const roles = [
        "Full-Stack Developer",
        "Backend Engineer",
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && displayedText === currentRole) {
            typingSpeed = 2000;
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            typingSpeed = 500;
        }

        const timer = setTimeout(() => {
            setDisplayedText((prev) =>
                isDeleting
                    ? currentRole.substring(0, prev.length - 1)
                    : currentRole.substring(0, prev.length + 1)
            );

            if (displayedText === currentRole && !isDeleting) {
                setIsDeleting(true);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex]);

    return (
        <section id="home" className="main">
            <div className="mySelf">
                <p className="hello">Hello, I'm</p>

                <h1>SAKSHAM VERMA</h1>

                <h2>
                    <span>{displayedText}</span>
                    <span className="cursor">|</span>
                </h2>
            </div>

            <div className="img-container">
                <img
                    src="https://res-console.cloudinary.com/ddnw2emhi/thumbnails/v1/image/upload/v1791430391/UG9ydGZvbGlvX3ZnZGJ3Zg==/drilldown"
                    alt="Saksham Verma"
                />
            </div>

            <div className="intro">
                <p>
                    Passionate about building modern, scalable web applications
                    and turning ideas into reliable, user-friendly products.
                    Experienced with React, Node.js, Express, and databases,
                    with a strong focus on clean and efficient development.
                </p>

                <div className="tech-stack">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>PostgreSQL</span>
                </div>

                <div className="resume-buttons">
                    <a
                        href="#projects"
                        className="resume-btn primary"
                    >
                        View Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                    >
                        View Resume
                    </a>

                    <a
                        href="/resume.pdf"
                        download
                        className="resume-btn"
                    >
                        Download Resume
                    </a>
                </div>

                <div className="social-links">
                    <a
                        href="https://github.com/mr28Verma"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/saksham-verma-9275b631b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=2006sakshamchd@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email"
                    >
                        <MdEmail />
                    </a>
                </div>
            </div>
        </section>
    );
}
