import About from "./About"
import Experience from "./Experience"
import Hero from "./Hero"

function Content() {
    return (
        <div className="w-screen px-10 lg:px-48 md:px-28">
            <Hero />
            <About />
            <Experience />
        </div>
    )
}

export default Content