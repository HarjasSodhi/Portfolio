import ProjectCard from "./ProjectCard"
import { proj } from '../types'
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

function Projects() {

    const [ref, inView, entry] = useInView({
        root: null,
        threshold: 0.1,
        triggerOnce: true,
    });

    const [ref2, inView2, entry2] = useInView({
        root: null,
        threshold: 0.1,
        triggerOnce: true,
    });

    const [ref3, inView3, entry3] = useInView({
        root: null,
        threshold: 0.1,
        triggerOnce: true,
    });

    const [ref4, inView4, entry4] = useInView({
        root: null,
        threshold: 0.3,
        triggerOnce: true,
    });

    let data: proj[] = [1, 2, 3, 4, 5, 6];
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1280 && window.innerWidth > 640) setDispSize(2);
            else setDispSize(3);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const [disp, setDisp] = useState(false)
    const [dispSize, setDispSize] = useState(window.innerWidth < 1280 && window.innerWidth > 640 ? 2 : 3);
    function handleDisp() {
        setDisp(!disp);
    }

    return (
        <div className={`pt-8 flex flex-col xl:px-8 mt-20`} id='projects'>
            <div ref={ref} className={` text-[#ccd6f6] flex opacity-0 items-end ${inView ? 'animate-[fadeintranslatebottom_0.5s_ease_0.2s_forwards]' : ""}`}>
                <span className='text-[#64ffda] text-md md:text-lg lg:text-xl'>03.</span>
                <div className="pl-5 text-xl md:text-2xl lg:text-3xl font-bold" >Some Things I’ve Built</div>
                <div className="grow border border-gray-700 self-center lg:grow-0 lg:w-1/3 ml-5"></div>
            </div>
            <div ref={ref2} className={`md:flex featured-card mt-20 opacity-0 relative ${inView2 ? 'animate-[fadeintranslatebottom_0.7s_ease_0.5s_forwards]' : ""}`}>
                <a href='https://getchefd.netlify.app' target='_blank' className="md:block h-full rounded md:w-2/3 md:aspect-video shadow-lg shadow-black hidden"><img className="h-full w-full" src="/getChefd.png" /></a>
                <div className="bg-[url('/getChefd.png')] md:bg-none p-8 md:p-0 md:grow md:text-right tracking-wider bg-[rgb(2,12,27)] opacity-80 md:opacity-100 md:bg-transparent rounded">
                    <a href='https://getchefd.netlify.app' target='_blank' className="flex flex-col md:items-end md:text-3xl text-2xl text-[#ccd6f6] font-bold mt-3 hover:text-[#64ffda] transition ease" >
                        <div className='text-[#64ffda] text-sm tracking-wide mb-5'>Featured Project</div>
                        <div className="inline un">GetChef’d</div>
                    </a>
                    <div className="md:absolute right-0 md:z-10 md:w-1/2 my-5 text-[#a8b2d1] md:text-right" >
                        <div className="md:p-5 md:shadow-md shadow-black md:bg-[rgb(2,12,27)] md:opacity-90 md:text-[#a8b2d1] text-[#ccd6f6] text-sm">A full stack online meal plan booking website project with modern and responsive UI and dynamic content with features like adding ratings, reviews, online payment using Razorpay Gateway, viewing/cancelling past orders and user authentication features like login, signup, forgot /reset password</div>
                        <div className="text-[#64ffda] mt-5 flex md:justify-end flex-wrap text-sm tracking-wider">
                            <div className="md:ml-4">React</div>
                            <div className="ml-4">NodeJS</div>
                            <div className="ml-4">MongoDB</div>
                            <div className="ml-4">Bootstrap</div>
                            <div className="ml-4">Razorpay</div>
                        </div>
                        <div className="md:justify-end text-[#a8b2d1] mt-8 inline-block p-5 md:border-b-4 border-white hover:border-[#64ffda] transition">
                            <a href="https://github.com/HarjasSodhi/GetChef-d---MERN-Stack" target='_blank' className="text-2xl md:m-2 hover:text-[#64ffda] transition ease">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://getchefd.netlify.app" target='_blank' className="text-2xl md:m-2 ml-3 hover:text-[#64ffda]">
                                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={ref3} className={`md:flex featured-card relative opacity-0 xl:mt-44 lg:mt-60 md:mt-80 my-20 ${inView3 ? 'animate-[fadeintranslatebottom_0.7s_ease_0.5s_forwards]' : ""}`}>
                <div className="bg-[url('/rcg.png')] md:bg-none p-8 md:p-0 md:grow tracking-wider opacity:80 md:opacity-100 md:bg-transparent rounded">
                    <a href='https://harjassodhi.github.io/Random-Color-Generator/' target='_blank' className=" flex flex-col md:items-start md:text-3xl text-2xl text-[#ccd6f6] font-bold mt-3 hover:text-[#64ffda] transition ease" >
                        <div className='text-[#64ffda] text-sm tracking-wide mb-5'>Featured Project</div>
                        <div className="inline un">Color Generator</div>
                    </a>
                    <div className="md:absolute left-0 md:z-10 md:w-1/2 my-5 text-[#a8b2d1]" >
                        <div className="text-sm md:p-5 md:shadow-md shadow-black md:bg-[rgb(2,12,27)] md:opacity-90 md:text-[#a8b2d1] text-[#ccd6f6]">A Web App to Randomly generate new Hex Codes to generate new colors and gradients. The CSS syntax for the Generated color is copied to clipboard automatically.</div>
                        <div className="text-[#64ffda] mt-5 flex flex-wrap text-sm tracking-wider">
                            <div className="mr-4">HTML</div>
                            <div className="mr-4">CSS</div>
                            <div className="mr-4">JavaScript</div>
                        </div>
                        <div className="text-[#a8b2d1] mt-8 md:border-b-4 border-white inline-block p-5 hover:border-[#64ffda] transition">
                            <a href="https://github.com/HarjasSodhi/Random-Color-Generator" target='_blank' className="text-2xl md:m-2 hover:text-[#64ffda] transition ease">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://harjassodhi.github.io/Random-Color-Generator/" target='_blank' className="text-2xl md:m-2 ml-3 hover:text-[#64ffda]">
                                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <a href='https://harjassodhi.github.io/Random-Color-Generator/' target='_blank' className="hidden md:block h-full rounded md:w-2/3 md:aspect-video shadow-lg shadow-black"><img className="h-full w-full" src="/rcg.png" /></a>
            </div>
            <div ref={ref4} className={`${inView4 ? 'animate-[fadeintranslatebottom_0.5s_ease_0.7s_forwards]' : ""} flex flex-col opacity-0 items-center xl:mt-24 lg:mt-36 md:mt-52 mt-8 font-bold`}>
                <div className="text-2xl text-[#ccd6f6]">Other Noteworthy Projects</div>
                <div className={`mt-14 place-content-evenly w-full grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5`}>
                    {
                        data.map((el, idx) => {
                            return <ProjectCard el={el} dis={disp || idx < dispSize} />
                        })
                    }
                </div>
                <button onClick={handleDisp} className="mt-10 font-bold border text-[#64ffda] border-[#64ffda] rounded p-4 hover:bg-gray-700 transition ease 0.5s">{disp ? "Show Less" : "Show More"}</button>
            </div>
        </div>
    )
}

export default Projects