import { useState } from "react"

function Nav() {
    const [vis, setVis] = useState(false);
    function handleVis() {
        setVis(!vis);
    }

    return (
        <>
            <div className='fixed w-screen top-0 z-10 flex justify-between items-center bg-[#0a192f] text-white text-sm'>
                <div className="logo m-4 text-lg text-[#64ffda] font-bold">HarjasSodhi</div>
                <div className="absolute text-[#64ffda] z-30 top-0 right-0 nav-toggle md:hidden m-5 text-2xl" onClick={handleVis}><i className="fa-solid fa-bars"></i></div>
                <div className={`fixed flex text-xl md:text-sm flex-col justify-center items-center top-0 right-0 z-20 h-screen w-2/4 md:h-fit md:w-fit bg-[#112240] md:bg-inherit md:static md:flex-row links md:items-center transform ${vis ? 'translate-x-none' : 'translate-x-full'} md:transform-none transition ease 0.5s opacity-90 shadow-2xl md:shadow-none shadow-black`}>
                    <div className="link m-3 hover:text-[#64ffda] transition ease 0.5s text-center"><span className="text-[#64ffda] block md:inline">01. </span><a className="font-bold" href="#about">About</a></div>
                    <div className="link m-3 hover:text-[#64ffda] transition ease 0.5s text-center"><span className="text-[#64ffda] block md:inline">02. </span><a className="font-bold" href="#experience">Experience</a></div>
                    <div className="link m-3 hover:text-[#64ffda] transition ease 0.5s text-center"><span className="text-[#64ffda] block md:inline">03. </span><a className="font-bold" href="#education">Education</a></div>
                    <div className="link m-3 hover:text-[#64ffda] transition ease 0.5s text-center"><span className="text-[#64ffda] block md:inline">04. </span><a className="font-bold" href="#projects">Projects</a></div>
                    <div className="link m-3 hover:text-[#64ffda] transition ease 0.5s text-center"><span className="text-[#64ffda] block md:inline">05. </span><a className="font-bold" href="#contact">Contact</a></div>
                    <div className="link m-3 text-[#64ffda]"><a className="resume-btn font-bold border border-[#64ffda] rounded px-5 py-2 hover:bg-gray-700 transition ease 0.5s" href="/Harjas-Sodhi-Resume.pdf">Resume</a></div>
                </div>
            </div>
        </>
    )
}

export default Nav