import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skill/Skill";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";

export default function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Education />
                <Projects />
                <Contact />
            </main>
        </>
    );
}