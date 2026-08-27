import "./About.css";

interface FocusItem {
    id: number;
    title: string;
    desc: string;
}

export default function About() {
    const focusAreas: FocusItem[] = [
        {
            id: 1,
            title: "Full-Stack Web Applications",
            desc: "Building complete end-to-end web products with seamless integration.",
        },
        {
            id: 2,
            title: "RESTful APIs & Backend Systems",
            desc: "Designing structured, efficient, and well-documented API endpoints.",
        },
        {
            id: 3,
            title: "Real-Time Applications",
            desc: "Implementing instant data flows using technologies like Socket.IO.",
        },
        {
            id: 4,
            title: "Database Architecture",
            desc: "Structuring scalable relational and non-relational database schemas.",
        },
        {
            id: 5,
            title: "Auth & Security Systems",
            desc: "Integrating secure authentication, authorization, and permission controls.",
        },
        {
            id: 6,
            title: "Scalable Architecture",
            desc: "Writing clean, maintainable code structured for long-term scalability.",
        },
    ];

    return (
        <div id="about" className="about-container">

            <section className="about-header">
                <span className="section-subtitle">
                    Get To Know Me
                </span>

                <h1 className="section-title">
                    About Me
                </h1>
            </section>

            <div className="about-grid">

                <div className="about-card hero-card">
                    <h2>Who I Am</h2>

                    <p>
                        I'm a Computer Science Engineering student at
                        Chitkara University with a strong interest in
                        full-stack web development and software engineering.
                        I enjoy building practical applications that solve
                        real-world problems and give me opportunities to work
                        across both frontend and backend development.
                    </p>

                    <p>
                        My primary experience is with{" "}
                        <strong>
                            React, Node.js, Express, MongoDB,
                        </strong>{" "}
                        and <strong>EJS</strong>. I also have experience
                        working with REST APIs, authentication, file uploads,
                        real-time communication using Socket.IO, and
                        cloud-based services.
                    </p>
                </div>

                <div className="about-card journey-card">
                    <h2>My Development Journey</h2>

                    <p>
                        I started with programming fundamentals and gradually
                        moved toward backend development, databases, and
                        full-stack applications.
                    </p>

                    <p>
                        Building projects has helped me understand how
                        different parts of a software system work together—
                        from designing APIs and database schemas to creating
                        responsive user interfaces.
                    </p>
                </div>

            </div>

            <section className="building-section">
                <h2 className="section-heading">
                    What I Enjoy Building
                </h2>

                <div className="focus-grid">
                    {focusAreas.map((item) => (
                        <div
                            key={item.id}
                            className="focus-card"
                        >
                            <span className="focus-number">
                                0{item.id}
                            </span>

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="approach-section">
                <div className="about-card approach-card">
                    <h2>My Philosophy & Approach</h2>

                    <p>
                        I believe in{" "}
                        <strong>learning by building</strong>.
                        Each project helps me improve my problem-solving
                        skills, write cleaner code, understand software
                        architecture, and learn how to turn an idea into
                        a working product.
                    </p>
                </div>
            </section>

        </div>
    );
}