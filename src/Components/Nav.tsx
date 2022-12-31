import { useState, useRef, useEffect } from "react"
import ReactGA from 'react-ga';

function handleAnaClick(title: string) {
    ReactGA.initialize(import.meta.env.VITE_trackingKey);
    return () => {
        ReactGA.event({
            category: title,
            action: "click"
        })
    }
}

function Nav() {
    const [vis, setVis] = useState(false);
    const [scroll, setScroll] = useState(window.scrollY);


    function handleVis() {
        setVis(!vis);
    }

    const navRef = useRef<HTMLDivElement>(null);

    function handleSectionClick() {
        if (window.innerWidth < 768) {
            handleVis();
        }
    }

    useEffect(() => {
        function handleScroll() {
            let currY = window.scrollY;
            if (navRef.current) {
                if (currY <= scroll) {
                    if (!vis) {
                        navRef.current.classList.remove("-translate-y-full");
                        navRef.current.classList.add('translate-y-none');
                    }
                } else {
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
        <div ref={navRef} className='transform translate-y-none transition ease duration-500 sticky w-full top-0 left-0 z-20 flex justify-between items-center bg-[#0a192f] text-white text-sm shadow-black p-4'>
            <a href="#" className="opacity-0 animate-[fadein_1s_ease_1s_forwards] md:ml-3 logo text-lg text-[#64ffda] font-bold h-16 w-16"><img src="/favicon.png" alt="HarjasSodhi" /></a>
            <div className="opacity-0 animate-[fadein_1s_ease_1.5s_forwards] text-[#64ffda] z-40 nav-toggle md:hidden text-2xl" onClick={handleVis}><i className={`${vis ? "fa-sharp fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i></div>
            <div className={`fixed flex text-xl md:text-sm flex-col justify-center items-center top-0 right-0 z-30 h-screen w-2/4 md:h-fit md:w-fit bg-[#112240] md:bg-inherit md:static md:flex-row links md:items-center transform ${vis ? 'translate-x-none' : 'translate-x-full'} md:transform-none transition ease 0.5s opacity-90 shadow-2xl md:shadow-none shadow-black`}>
                <div className="md:opacity-0 md:animate-[fadeintranslate_0.5s_ease_1.2s_forwards] link m-3 hover:text-[#64ffda] transition ease 0.5s text-center" onClick={handleSectionClick}><span className="text-[#64ffda] block md:inline">01. </span><a className="font-bold" href="#about">About</a></div>
                <div className="md:opacity-0 md:animate-[fadeintranslate_0.5s_ease_1.4s_forwards] link m-3 hover:text-[#64ffda] transition ease 0.5s text-center" onClick={handleSectionClick}><span className="text-[#64ffda] block md:inline">02. </span><a className="font-bold" href="#experience">Work & Education</a></div>
                <div className="md:opacity-0 md:animate-[fadeintranslate_0.5s_ease_1.6s_forwards] link m-3 hover:text-[#64ffda] transition ease 0.5s text-center" onClick={handleSectionClick}><span className="text-[#64ffda] block md:inline">03. </span><a className="font-bold" href="#projects">Projects</a></div>
                <div className="md:opacity-0 md:animate-[fadeintranslate_0.5s_ease_1.8s_forwards] link m-3 hover:text-[#64ffda] transition ease 0.5s text-center" onClick={handleSectionClick}><span className="text-[#64ffda] block md:inline">04. </span><a className="font-bold" href="#blogs">Blogs</a></div>
                <div className="md:opacity-0 md:animate-[fadeintranslate_0.5s_ease_2s_forwards] link m-3 hover:text-[#64ffda] transition ease 0.5s text-center" onClick={handleSectionClick}><span className="text-[#64ffda] block md:inline">05. </span><a className="font-bold" href="#contact">Contact</a></div>
                <div className="md:opacity-0 md:animate-[fadeintranslate_0.5s_ease_2.2s_forwards] link m-3 text-[#64ffda]" onClick={handleSectionClick}><a className="resume-btn font-bold border border-[#64ffda] rounded px-5 py-2 hover:bg-gray-700 transition ease 0.5s" onClick={handleAnaClick('resume')} href="/Harjas-Sodhi-Resume.pdf" target='_blank'>Resume</a></div>
            </div>
        </div>
    )
}

export default Nav