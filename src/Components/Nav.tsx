function Nav() {
    return (
        <div className='flex justify-between items-center bg-gray-800 text-white text-sm'>
            <div className="logo m-5 text-lg text-[#64ffda] font-bold">HarjasSodhi</div>
            <div className="links flex items-center">
                <div className="link m-5 hover:text-[#64ffda] transition ease 0.5s"><span className="text-[#64ffda]">01. </span><a className="font-bold" href="#about">About</a></div>
                <div className="link m-5 hover:text-[#64ffda] transition ease 0.5s"><span className="text-[#64ffda]">02. </span><a className="font-bold" href="#about">Experience</a></div>
                <div className="link m-5 hover:text-[#64ffda] transition ease 0.5s"><span className="text-[#64ffda]">03. </span><a className="font-bold" href="#about">Education</a></div>
                <div className="link m-5 hover:text-[#64ffda] transition ease 0.5s"><span className="text-[#64ffda]">04. </span><a className="font-bold" href="#about">Projects</a></div>
                <div className="link m-5 hover:text-[#64ffda] transition ease 0.5s"><span className="text-[#64ffda]">05. </span><a className="font-bold" href="#about">Contact</a></div>
                <div className="link m-5 text-[#64ffda]"><button className="resume-btn font-bold border border-[#64ffda] rounded px-5 py-2 hover:bg-gray-700 transition ease 0.5s">Resume</button></div>
            </div>
        </div>
    )
}

export default Nav