import { useState, useRef, useEffect } from "react"

function Nav() {
    const [vis, setVis] = useState(false);
    const [scroll, setScroll] = useState(window.scrollY);

    function handleVis() {
        setVis(!vis);
    }

    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleScroll() {
            let currY = window.scrollY;
            if (navRef.current) {
                if (currY <= scroll) {
                    console.log("scroll up");
                    if (!vis) {
                        navRef.current.classList.remove("-translate-y-full");
                        navRef.current.classList.add('translate-y-none');
                    }
                } else {
                    console.log("scroll down");
                    if (!vis) {
                        navRef.current.classList.remove('translate-y-none');
                        navRef.current.classList.add("-translate-y-full");
                    }
                }
                if (currY == 0) {
                    navRef.current.classList.remove("shadow-sm");
                } else {
                    navRef.current.classList.add("shadow-sm");
                }
            }
            setScroll(currY);
        }
        window.addEventListener('scroll', handleScroll, false);
        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        }
    }, [scroll, vis]);

    return (
        <div ref={navRef} className='transform translate-y-none transition ease duration-500 sticky w-full top-0 left-0 z-10 flex justify-between items-center bg-[#0a192f] text-white text-sm shadow-black p-4'>
            <div className="logo m-4 text-lg text-[#64ffda] font-bold">HarjasSodhi</div>
            <div className="absolute text-[#64ffda] z-30 top-0 right-0 nav-toggle md:hidden m-5 text-2xl" onClick={handleVis}><i className={`${vis ? "fa-sharp fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i></div>
            <div className={`fixed flex text-xl md:text-sm flex-col justify-center items-center top-0 right-0 z-20 h-screen w-2/4 md:h-fit md:w-fit bg-[#112240] md:bg-inherit md:static md:flex-row links md:items-center transform ${vis ? 'translate-x-none' : 'translate-x-full'} md:transform-none transition ease 0.5s opacity-90 shadow-2xl md:shadow-none shadow-black`}>
                <div className="link m-3 hover:text-[#64ffda] transition ease 0.5s text-center"><span className="text-[#64ffda] block md:inline">01. </span><a className="font-bold" href="#about">About</a></div>
                <div className="link m-3 hover:text-[#64ffda] transition ease 0.5s text-center"><span className="text-[#64ffda] block md:inline">02. </span><a className="font-bold" href="#experience">Experience</a></div>
                <div className="link m-3 hover:text-[#64ffda] transition ease 0.5s text-center"><span className="text-[#64ffda] block md:inline">03. </span><a className="font-bold" href="#education">Education</a></div>
                <div className="link m-3 hover:text-[#64ffda] transition ease 0.5s text-center"><span className="text-[#64ffda] block md:inline">04. </span><a className="font-bold" href="#projects">Projects</a></div>
                <div className="link m-3 hover:text-[#64ffda] transition ease 0.5s text-center"><span className="text-[#64ffda] block md:inline">05. </span><a className="font-bold" href="#contact">Contact</a></div>
                <div className="link m-3 text-[#64ffda]"><a className="resume-btn font-bold border border-[#64ffda] rounded px-5 py-2 hover:bg-gray-700 transition ease 0.5s" href="/Harjas-Sodhi-Resume.pdf" target='_blank'>Resume</a></div>
            </div>
        </div>
    )
}

export default Nav