import About from "./About"
import Experience from "./Experience"
import Hero from "./Hero"
import Projects from "./Projects"

function Content() {
    return (
        <div className="w-screen px-10 lg:px-48 md:px-28">
            <Hero />
            <About />
            <Experience />
            <Projects />
        </div>
    )
}

export default Content