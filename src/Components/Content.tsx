import About from "./About"
import Blogs from "./Blogs"
import Experience from "./Experience"
import Hero from "./Hero"
import Projects from "./Projects"
import Contact from "./Contact"

function Content() {
    return (
        <div className="w-screen px-10 lg:px-48 md:px-28">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Blogs />
            <Contact />
        </div>
    )
}

export default Content