import About from "./About"
import Hero from "./Hero"

function Content() {
    return (
        <div className="w-screen px-10 lg:px-48 md:px-28">
            <Hero />
            <About />
        </div>
    )
}

export default Content