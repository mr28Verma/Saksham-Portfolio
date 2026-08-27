import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const navItems = [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Skills", path: "#skills" },
        { name: "Education", path: "#education" },
        { name: "Projects", path: "#projects" },
        { name: "Contact", path: "#contact" },
    ];

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Detect scrolling
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    // Detect active section
    useEffect(() => {
        const sections = navItems
            .map((item) => document.querySelector(item.path))
            .filter(Boolean) as Element[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -55% 0px",
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <div className="navbar-inner">

                {/* Brand */}
                <a
                    href="#home"
                    className="nav-brand"
                    onClick={handleLinkClick}
                >
                    Portfolio
                </a>

                {/* Mobile Menu Button */}
                <button
                    className={`nav-toggle ${
                        menuOpen ? "nav-toggle--open" : ""
                    }`}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation Links */}
                <div
                    className={`nav-links ${
                        menuOpen ? "nav-links--open" : ""
                    }`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            onClick={handleLinkClick}
                            className={
                                activeSection === item.path.slice(1)
                                    ? "active"
                                    : ""
                            }
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

            </div>
        </nav>
    );
}